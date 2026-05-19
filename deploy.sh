#!/bin/bash

# Navigate to the project directory
# Since this script is now inside the project folder, we can use $(dirname "$0")
# or a hardcoded path for the server environment.
cd "$(dirname "$0")"

echo "Starting deployment at $(date)"

# Pull the latest changes
git pull origin main

# Install PHP dependencies
composer install --no-dev --optimize-autoloader

# Run migrations
php artisan migrate --force

# Optimize Laravel (config, routes, views)
php artisan optimize

# Create storage link if it doesn't exist
php artisan storage:link

echo "🚀 MCT Laravel Deployed Successfully!"
