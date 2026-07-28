# Viator Supplier Product Population Guide

This guide explains how to automatically export tour data from your `mct-laravel` application and populate draft listings on [supplier.viator.com/product/build/](https://supplier.viator.com/product/build/) using Playwright.

---

## 📋 Prerequisites

1. **Node.js** & **pnpm** / **npm** installed.
2. An active account on [Viator Supplier Center](https://supplier.viator.com/).

---

## 🛠️ Step 1: Export Tour Data from Laravel

To extract tour data into JSON format for Viator:

```bash
# Export all tours to storage/app/viator_tours.json
php artisan viator:export

# Or export in English (default) / specific locale:
php artisan viator:export --locale=en

# Or export a single specific tour by slug:
php artisan viator:export --slug=imperial-cities-tour-from-casablanca
```

Alternatively, run via npm script:
```bash
npm run viator:export
```

Output location: `storage/app/viator_tours.json`

---

## 🌐 Step 2: Verify Extracted Data (Dry Run)

Test the script without opening a browser:

```bash
npm run viator:populate -- --dry-run
```

---

## 🤖 Step 3: Run the Viator Browser Populator

Run the Playwright automation script to launch the interactive browser window:

```bash
# Process all exported tours:
npm run viator:populate

# Or process a single tour by slug:
npm run viator:populate -- --slug=imperial-cities-tour-from-casablanca
```

### 🔐 Authentication Flow
1. On the first launch, Playwright opens Chromium with `headless: false`.
2. Navigate to your Viator Supplier login screen if prompted.
3. Log in with your email, password, and any 2FA code.
4. The script automatically detects successful login and saves your session cookies to `storage/app/viator_session.json`.
5. Subsequent runs will re-use `storage/app/viator_session.json` so you won't need to log in every time!

### 📝 Product Population & Safety
- The script navigates to `https://supplier.viator.com/product/build/`.
- It pre-fills tour titles, descriptions, itinerary days/steps, inclusions, exclusions, and attributes.
- Products are saved as **Drafts** in your Viator account for review before publishing.

---

## 📁 Key Files Reference

- **Artisan Exporter**: [app/Console/Commands/ExportViatorTours.php](file:///home/spectrum/Documents/Coding/Github/mct-laravel/app/Console/Commands/ExportViatorTours.php)
- **Playwright Populator Script**: [scripts/viator-populator.js](file:///home/spectrum/Documents/Coding/Github/mct-laravel/scripts/viator-populator.js)
- **Exported JSON Data**: [storage/app/viator_tours.json](file:///home/spectrum/Documents/Coding/Github/mct-laravel/storage/app/viator_tours.json)
- **Saved Session Cookies**: `storage/app/viator_session.json`
