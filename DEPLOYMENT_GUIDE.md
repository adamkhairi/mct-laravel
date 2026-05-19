## Full Deployment Guide: MCT Laravel on Hostinger (Git + SSH)

This guide is optimized for **Laravel 13**, **Inertia v3**, and the specific structure of the MCT project. It assumes your application is located at `/home/u472409551/domains/mediumaquamarine-shark-653193.hostingersite.com/laravel-app`.

### Prerequisites
- PHP binary: `/opt/alt/php85/usr/bin/php` (Ensuring PHP 8.5 for Laravel 13).
- SSH access enabled in Hostinger hPanel.
- MySQL Database created in hPanel.

---

## One-Time Setup

### 1. SSH and Environment Setup
Connect to your server and set the correct PHP version as the default for your terminal session.
```bash
ssh u472409551@your-hostinger-ip

# Set PHP 8.5 as default
echo 'export PATH=/opt/alt/php85/usr/bin:$PATH' >> ~/.bashrc
source ~/.bashrc
php -v # Should show 8.5.x
```

### 2. Install Composer
```bash
cd ~
php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
php composer-setup.php
rm composer-setup.php
echo "alias composer='php ~/composer.phar'" >> ~/.bashrc
source ~/.bashrc
```

### 3. Clone and Install
Navigate to your domain directory and clone your repository.
```bash
cd /home/u472409551/domains/mediumaquamarine-shark-653193.hostingersite.com/

# Clone into the laravel-app folder
git clone https://github.com/your-username/your-repo.git laravel-app
cd laravel-app
composer install --no-dev --optimize-autoloader
```

### 4. Configure `.env`
Create your environment file and update the production values.
```bash
cp .env.example .env
nano .env
```

**Key production values:**
```env
APP_ENV=production
APP_DEBUG=false
APP_URL=https://mediumaquamarine-shark-653193.hostingersite.com

# Use Database for Sessions and Cache (Recommended for Hostinger)
SESSION_DRIVER=database
CACHE_STORE=database

# Database Connection
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_DATABASE=u472409551_dbname
DB_USERNAME=u472409551_dbuser
DB_PASSWORD=your_secure_password
```

Generate the key and run migrations:
```bash
php artisan key:generate
php artisan migrate --force
```

### 5. Deployment Structure (The "Public" Trick)
Hostinger serves from `public_html`, but our app lives in the `laravel-app` subdirectory.

**Step 1: Clean up `public_html`**
```bash
rm /home/u472409551/domains/mediumaquamarine-shark-653193.hostingersite.com/public_html/default.php
```

**Step 2: Create the Modern Laravel 13 `index.php`**
Create a new `index.php` in your `public_html` directory:
```bash
nano /home/u472409551/domains/mediumaquamarine-shark-653193.hostingersite.com/public_html/index.php
```
Paste this **Laravel 13 specific** content:
```php
<?php

use Illuminate\Http\Request;

define('LARAVEL_START', microtime(true));

// Determine if the application is in maintenance mode...
if (file_exists($maintenance = __DIR__.'/../laravel-app/storage/framework/maintenance.php')) {
    require $maintenance;
}

// Register the Composer autoloader...
require __DIR__.'/../laravel-app/vendor/autoload.php';

// Bootstrap Laravel and handle the request...
(require_once __DIR__.'/../laravel-app/bootstrap/app.php')
    ->handleRequest(Request::capture());
```

**Step 3: Setup Routing and Symlinks**
```bash
# Navigate to public_html
cd /home/u472409551/domains/mediumaquamarine-shark-653193.hostingersite.com/public_html/

# Copy routing rules
cp ../laravel-app/public/.htaccess ./.htaccess

# Symlink the build folder (Crucial for Inertia/Vite)
ln -s ../laravel-app/public/build ./build

# Symlink static assets (Logos, hero images, etc.)
ln -s ../laravel-app/public/assets ./assets

# Symlink storage (For dynamic tour uploads)
ln -s ../laravel-app/storage/app/public ./storage
```

---

## Deployment Workflow (Every Change)

### 1. Locally (Your PC)
Regenerate your assets and push your code.
```bash
npm run build
git add .
git commit -m "Your message"
git push origin main

# Upload the build AND assets folders
scp -r public/build u472409551@your-ip:/home/u472409551/domains/mediumaquamarine-shark-653193.hostingersite.com/laravel-app/public/
scp -r public/assets u472409551@your-ip:/home/u472409551/domains/mediumaquamarine-shark-653193.hostingersite.com/laravel-app/public/
```

### 2. On Server (SSH) - Create Deploy Script
Create a helper script to automate the update process.
```bash
nano /home/u472409551/deploy.sh
```
```bash
#!/bin/bash
cd /home/u472409551/domains/mediumaquamarine-shark-653193.hostingersite.com/laravel-app
git pull origin main
composer install --no-dev --optimize-autoloader
php artisan migrate --force
php artisan optimize
echo "🚀 MCT Laravel Deployed Successfully!"
```
```bash
chmod +x /home/u472409551/deploy.sh
# Run it
/home/u472409551/deploy.sh
```

---

## Important Maintenance Notes

### Dynamic Tour Images
When adding tours via the Admin panel, images are saved to `storage/app/public/tours`. Because of the `public_html/storage` symlink, they will be accessible at `yourdomain.com/storage/tours/filename.jpg`. You **do not** need to manually upload these.

### Static Assets
Site-wide assets (logos, default icons) in `public/assets` should be managed via Git or `scp`. If you add new static files locally, remember to upload the `public/assets` folder.

### Database Updates
If you need to refresh your data (wiping everything):
```bash
php artisan migrate:fresh --seed --force
```
For standard updates without data loss:
```bash
php artisan migrate --force
```
