# Production deployment: Laravel on Hostinger

Production releases are built in GitHub Actions and activated over SSH. The release is assembled once from a specific commit, checked before upload, and switched into place only after server-side checks pass. A failed health check restores the previous release. Normal deployments do not run migrations or seeders.

## Deployment flow

1. Push a change to any branch. GitHub Actions runs the project checks and builds a production artifact.
2. A push to `main` also deploys that exact artifact to the `production` environment. Configure required reviewers for that environment in GitHub if you want an approval gate.
3. The remote script unpacks a new release, validates its Vite manifest, links shared runtime files, caches Laravel config, switches the `current` symlink, and checks SSR (when enabled), `/up`, and the homepage.
4. If a post-switch check fails, the script points `current` back at the prior release and restarts its SSR process when one had been running. It retains the current release, the previous release, and recent releases for rollback.

`deploy.sh` is run remotely by the workflow. It is not a command to run from a developer checkout. The workflow serializes production deployments so two releases cannot switch at the same time.

## GitHub configuration

Create a GitHub Actions environment named `production`. Add these environment secrets:

- `HOSTINGER_HOST`: Hostinger SSH host or IP address.
- `HOSTINGER_PORT`: SSH port.
- `HOSTINGER_USER`: SSH username.
- `HOSTINGER_SSH_PRIVATE_KEY`: private key whose public key is installed for this Hostinger account.
- `HOSTINGER_KNOWN_HOSTS`: the verified SSH host key line for the host and port. Obtain and verify its fingerprint through Hostinger before saving it; do not use an unverified `ssh-keyscan` result as trust.

Add these environment variables:

- `HOSTINGER_APP_ROOT`: `/home/<account>/domains/moroccanclubtravel.com/laravel-app`.
- `HOSTINGER_APP_URL`: `https://www.moroccanclubtravel.com`.
- `HOSTINGER_PHP_BIN`: `/opt/alt/php85/usr/bin/php` (optional; this is the script default).

The workflow requires key-based, non-interactive SSH. Rotate any password previously shared in chat and do not add passwords, `.env`, or database credentials to GitHub workflow files.

The workflow runs for branch pushes but deploys only when the ref is `main`. A manual workflow dispatch from a non-main branch verifies and packages that branch without deploying it.

## One-time Hostinger layout setup

Back up the site files and database before changing the current Hostinger layout. Do not run this conversion while a release is in progress. The commands below describe the expected layout; inspect each existing path and symlink before moving it.

The application root will contain:

```text
laravel-app/
├── current -> releases/<commit-sha>
├── releases/
│   ├── <commit-sha>/
│   └── legacy/
└── shared/
    ├── .env
    └── storage/
```

First, preserve the existing application tree as the initial rollback release and move its mutable state to `shared/`. Adjust the paths if your account uses a different domain directory:

```bash
cd /home/<account>/domains/moroccanclubtravel.com
mv laravel-app laravel-app-before-releases
mkdir -p laravel-app/releases laravel-app/shared
mv laravel-app-before-releases laravel-app/releases/legacy
mv laravel-app/releases/legacy/.env laravel-app/shared/.env
mv laravel-app/releases/legacy/storage laravel-app/shared/storage
ln -s ../../shared/.env laravel-app/releases/legacy/.env
ln -s ../../shared/storage laravel-app/releases/legacy/storage
ln -s releases/legacy laravel-app/current
mkdir -p laravel-app/shared/storage/framework/cache/data
mkdir -p laravel-app/shared/storage/framework/sessions
mkdir -p laravel-app/shared/storage/framework/views
mkdir -p laravel-app/shared/storage/logs
```

Preserve uploaded files under `shared/storage/app/public`. If the current app has a populated storage directory, moving the whole directory as above preserves it. Ensure `shared/.env` keeps the production values, including `APP_ENV=production`, `APP_DEBUG=false`, `APP_URL=https://www.moroccanclubtravel.com`, and `SEO_CANONICAL_URL=https://www.moroccanclubtravel.com`. Add `INERTIA_SSR_ENABLED=true` only if this hosting plan can keep the SSR process alive; otherwise set it to `false` to serve the client bundle without SSR.

Update the existing `public_html/index.php` bootstrap paths to point through `laravel-app/current`:

```php
<?php

use Illuminate\Http\Request;

define('LARAVEL_START', microtime(true));

$applicationPath = __DIR__.'/../laravel-app/current';

if (file_exists($maintenance = $applicationPath.'/storage/framework/maintenance.php')) {
    require $maintenance;
}

require $applicationPath.'/vendor/autoload.php';

(require_once $applicationPath.'/bootstrap/app.php')
    ->handleRequest(Request::capture());
```

Repoint the `public_html` links for `build`, `assets`, `storage`, `images`, and the favicon/manifest files to `../laravel-app/current/public/...` (for `storage`, use `../laravel-app/shared/storage/app/public`). Retarget only symlinks after verifying them; do not remove real directories or uploaded files. Keep the `public_html` rewrite rules in place. The site should still load from the legacy release before enabling the workflow.

## Migrations and data changes

The deployment script deliberately does **not** call `artisan migrate`, any seeder, importer, or data update. For a reviewed schema change, make a separate maintenance plan:

1. Review the migration and its `down()` behavior; migrations that change tour content or translations require the precise proposed diff and explicit owner approval first.
2. Take and verify a production database backup.
3. Run the approved migration as a separate, deliberate operation, not as part of automatic deployment.
4. Prefer backward-compatible expand/contract migrations so the active and previous code releases can both use the schema during a rollback window.

Never run `migrate:fresh`, seeders, or importers against production as part of a normal release.

## SSR and health checks

The app reads `INERTIA_SSR_ENABLED` from the shared `.env`; it defaults to `true` to preserve current behavior. With SSR enabled, deployment stops the prior Inertia SSR process, switches releases, starts SSR from the new release, and waits for `inertia:check-ssr` to pass. It rolls back if SSR or HTTP checks fail. For this to be dependable, the Hostinger plan must allow the `nohup` process to stay alive. If it does not, set `INERTIA_SSR_ENABLED=false` or move to a plan with supported process supervision; do not repeatedly deploy an SSR configuration that the host terminates.

Laravel's `/up` route confirms the application boots. The workflow then checks the canonical homepage. An independent uptime monitor should also check `/up` and alert on failures.

## Recovery

To retry after a failed deploy, check `laravel-app/current`, the latest release directory, `shared/storage/logs/ssr.log`, and the workflow log first. The script restores the previous symlink automatically after failures detected during deployment. If the SSH connection is terminated abruptly during the small activation window, inspect `current` and the SSR process before manually switching it.

A `.deploy-lock` directory prevents concurrent deployments. If a runner is killed and leaves the lock behind, confirm no deploy is active before removing it:

```bash
rmdir /home/<account>/domains/moroccanclubtravel.com/laravel-app/.deploy-lock
```

To roll back intentionally, point `laravel-app/current` to the previous directory under `releases/` using a temporary symlink and atomic `mv -T`, then restart SSR for that release if SSR is enabled. Keep database schema changes backward compatible during this rollback window; a file rollback does not undo a migration.

## Local verification

Before merging deployment changes, run:

```bash
bash -n deploy.sh
npm run lint:check
npm run types:check
npm run build:ssr
bash tests/deployment/deploy-script-test.sh
```

The GitHub workflow runs static checks, a database-free deployment-script test, and packaging on branch pushes. The app's current PHPUnit suite includes database refreshes and tour/review seeders, so this workflow does not run it under the existing data-change approval gate. Production deployment requires the GitHub environment configuration above and the one-time Hostinger layout conversion.
