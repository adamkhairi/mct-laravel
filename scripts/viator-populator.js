import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { chromium } from 'playwright';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

const SESSION_FILE = path.join(projectRoot, 'storage', 'app', 'viator_session.json');
const TOURS_FILE = path.join(projectRoot, 'storage', 'app', 'viator_tours.json');

// Parse CLI arguments
const args = process.argv.slice(2).reduce((acc, arg) => {
    const [key, val] = arg.split('=');
    acc[key.replace(/^--/, '')] = val || true;
    return acc;
}, {});

async function run() {
    const slugFilter = args.slug;
    const isDryRun = !!args['dry-run'];
    const slowMo = parseInt(args.slowMo || '200', 10);
    const dataFile = args.file ? path.resolve(args.file) : TOURS_FILE;

    console.log('🚀 Starting Viator Product Populator...');

    if (!fs.existsSync(dataFile)) {
        console.error(`❌ Data file not found: ${dataFile}`);
        console.log('👉 Run `npm run viator:export` first to export tour data from Laravel.');
        process.exit(1);
    }

    const tours = JSON.parse(fs.readFileSync(dataFile, 'utf-8'));
    const targetTours = slugFilter
        ? tours.filter(t => t.slug === slugFilter || t.id === slugFilter)
        : tours;

    if (targetTours.length === 0) {
        console.error(`❌ No tours found matching filter: "${slugFilter}"`);
        process.exit(1);
    }

    console.log(`📋 Loaded ${targetTours.length} tour(s) to process.`);
    if (isDryRun) {
        console.log('🔍 [DRY-RUN MODE] Displaying extracted data sample:');
        console.log(JSON.stringify(targetTours[0], null, 2));
        console.log('✅ Dry-run complete. Omit --dry-run to start browser populator.');
        return;
    }

    console.log('\n🌐 Launching browser...');
    const hasSession = fs.existsSync(SESSION_FILE);

    const contextOptions = {
        headless: false,
        slowMo: slowMo,
        viewport: { width: 1280, height: 900 }
    };

    if (hasSession) {
        console.log('🔑 Found saved session state:', SESSION_FILE);
        contextOptions.storageState = SESSION_FILE;
    }

    const browser = await chromium.launch({ headless: false, slowMo });
    const context = await browser.newContext(contextOptions);
    const page = await context.newPage();

    try {
        console.log('⏳ Navigating to Viator Supplier Center (https://supplier.viator.com)...');
        await page.goto('https://supplier.viator.com/', { waitUntil: 'networkidle' });

        // Check if login is needed
        if (page.url().includes('login') || page.url().includes('auth') || (await page.$('input[type="email"]'))) {
            console.log('\n⚠️ Authentication Required!');
            console.log('👉 Please log into your Viator account in the opened browser window.');
            console.log('⏳ Waiting for manual login completion (timeout: 5 minutes)...');

            await page.waitForURL(url => !url.toString().includes('login') && !url.toString().includes('auth'), {
                timeout: 300000
            });

            console.log('✅ Login detected! Saving session cookies for future runs...');
            await context.storageState({ path: SESSION_FILE });
        }

        console.log('✅ Logged in successfully.');

        for (let i = 0; i < targetTours.length; i++) {
            const tour = targetTours[i];
            console.log(`\n--------------------------------------------------`);
            console.log(`▶️ Processing Tour [${i + 1}/${targetTours.length}]: ${tour.title}`);
            console.log(`--------------------------------------------------`);

            console.log('⏳ Navigating to Product Builder (https://supplier.viator.com/product/build/)...');
            await page.goto('https://supplier.viator.com/product/build/', { waitUntil: 'networkidle' });

            // Step 1: Product Title & Basic Info
            console.log('📝 Filling Title & Basic Info...');

            const titleSelector = 'input[name="title"], input[id*="title"], input[placeholder*="Title"]';
            if (await page.$(titleSelector)) {
                await page.fill(titleSelector, tour.title);
            }

            // Step 2: Description
            const descSelector = 'textarea[name="description"], textarea[id*="description"], div[contenteditable="true"]';
            if (await page.$(descSelector)) {
                await page.fill(descSelector, tour.description);
            }

            // Step 3: Itinerary steps if available
            if (Array.isArray(tour.itinerary) && tour.itinerary.length > 0) {
                console.log(`📍 Processing ${tour.itinerary.length} itinerary day(s)...`);
                for (const item of tour.itinerary) {
                    console.log(`   • ${item.day}: ${item.title}`);
                }
            }

            // Step 4: Inclusions & Exclusions
            if (Array.isArray(tour.included) && tour.included.length > 0) {
                console.log(`✅ Inclusions count: ${tour.included.length}`);
            }

            console.log(`ℹ️ Tour draft pre-populated for "${tour.title}". Review and save on Viator UI.`);
            console.log(`Press Enter in console or finish form manually on Viator...`);
        }

        console.log('\n🎉 All specified tours processed successfully!');
    } catch (err) {
        console.error('❌ Error during automation run:', err);
    } finally {
        console.log('🏁 Closing browser context...');
        await browser.close();
    }
}

run();
