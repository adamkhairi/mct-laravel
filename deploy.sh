#!/bin/bash
set -euo pipefail

# Navigate to the project directory
# Since this script is now inside the project folder, we can use $(dirname "$0")
# or a hardcoded path for the server environment.
cd "$(dirname "$0")"

echo "Starting deployment at $(date)"

# Pull the latest changes
git pull origin main

# Install PHP dependencies
composer install --no-dev --optimize-autoloader

NODE_MAJOR=$(node -p "Number(process.versions.node.split('.')[0])")
if [ "$NODE_MAJOR" -lt 22 ]; then
	echo "Inertia SSR requires Node.js 22 or newer. Found $(node --version)."
	exit 1
fi

# Rebuild client and server-rendered assets
if php artisan inertia:check-ssr; then
	php artisan inertia:stop-ssr
else
	echo "Inertia SSR server is not running; skipping stop."
fi
npm ci
RAYON_NUM_THREADS=2 npm run build:ssr

# Run migrations
php artisan migrate --force

# Import approved legacy testimonials once; the seeder is idempotent.
php artisan db:seed --class=ReviewSeeder --force

# Optional: Refresh seeds if you changed the TourSeeder
# php artisan db:seed --class=TourSeeder --force

# Optimize Laravel (config, routes, views)
php artisan optimize

# Create the storage link if it doesn't exist; stop if an unrelated file occupies its path.
if [ -L public/storage ]; then
	STORAGE_TARGET=$(readlink public/storage)
	EXPECTED_STORAGE_TARGET="$(pwd)/storage/app/public"
	if [ "$STORAGE_TARGET" != "$EXPECTED_STORAGE_TARGET" ]; then
		echo "public/storage points to an unexpected target: $STORAGE_TARGET"
		exit 1
	fi
elif [ -e public/storage ]; then
	echo "public/storage exists and is not a symlink."
	exit 1
else
	php artisan storage:link
fi

# Start SSR; production should also supervise this process.
nohup php artisan inertia:start-ssr > storage/logs/ssr.log 2>&1 &
SSR_PID=$!

for attempt in $(seq 1 30); do
	if php artisan inertia:check-ssr; then
		break
	fi

	if ! kill -0 "$SSR_PID" 2>/dev/null; then
		cat storage/logs/ssr.log
		exit 1
	fi

	if [ "$attempt" -eq 30 ]; then
		echo "Inertia SSR server did not become healthy in time."
		cat storage/logs/ssr.log
		exit 1
	fi

	sleep 1
done

echo "🚀 MCT Laravel Deployed Successfully!"
