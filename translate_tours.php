<?php

/**
 * Script to translate all tour data in tours.json into the 8 supported locales
 * using the Google Translate API, storing them in a translation cache.
 */

$locales = ['es', 'fr', 'de', 'it', 'pt', 'ru', 'nl', 'zh'];
$cacheFile = __DIR__ . '/database/seeders/data/translations_cache.json';

// Load cache
$cache = [];
if (file_exists($cacheFile)) {
    $cache = json_decode(file_get_contents($cacheFile), true);
    if (!is_array($cache)) {
        $cache = [];
    }
}
echo "Loaded " . count($cache) . " unique English strings from cache.\n";

// Load tours
$toursFile = __DIR__ . '/database/seeders/data/tours.json';
if (!file_exists($toursFile)) {
    die("Error: tours.json not found!\n");
}
$tours = json_decode(file_get_contents($toursFile), true);

// Collect all unique strings needing translation
$strings = [];

function collect($text) {
    global $strings;
    if ($text === null || $text === '') return;
    $text = trim($text);
    if (is_numeric($text)) return;
    $strings[$text] = true;
}

foreach ($tours as $tour) {
    collect($tour['title'] ?? '');
    collect($tour['description'] ?? '');
    collect($tour['duration'] ?? '');
    collect($tour['nights'] ?? '');
    collect($tour['startingPoint'] ?? '');
    collect($tour['arrivalCity'] ?? '');
    collect($tour['accommodation'] ?? '');
    collect($tour['guide'] ?? '');
    collect($tour['tripType'] ?? '');
    collect($tour['difficulty'] ?? '');
    
    // Parse comma-separated languages
    if (!empty($tour['languages'])) {
        $langs = array_map('trim', explode(',', $tour['languages']));
        foreach ($langs as $lang) {
            collect($lang);
        }
    }
    
    if (!empty($tour['included'])) {
        foreach ($tour['included'] as $item) {
            collect($item);
        }
    }
    if (!empty($tour['excluded'])) {
        foreach ($tour['excluded'] as $item) {
            collect($item);
        }
    }
    if (!empty($tour['itinerary'])) {
        foreach ($tour['itinerary'] as $item) {
            collect($item['day'] ?? '');
            collect($item['title'] ?? '');
            collect($item['description'] ?? '');
        }
    }
}

$uniqueStrings = array_keys($strings);
echo "Total unique English strings to translate: " . count($uniqueStrings) . "\n";

// Google Translate function
function translate($text, $target, $source = 'en') {
    if (trim($text) === '') return '';
    
    $url = "https://translate.googleapis.com/translate_a/single?client=gtx&sl=" . $source . "&tl=" . $target . "&dt=t&q=" . urlencode($text);
    
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_USERAGENT, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36');
    curl_setopt($ch, CURLOPT_TIMEOUT, 10);
    
    $response = curl_exec($ch);
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);
    
    if ($httpCode !== 200 || !$response) {
        return null;
    }
    
    $result = json_decode($response, true);
    if (!isset($result[0]) || !is_array($result[0])) {
        return null;
    }
    
    $translatedText = "";
    foreach ($result[0] as $line) {
        if (isset($line[0])) {
            $translatedText .= $line[0];
        }
    }
    return $translatedText;
}

$totalToTranslate = 0;
foreach ($uniqueStrings as $str) {
    foreach ($locales as $locale) {
        if (!isset($cache[$str][$locale])) {
            $totalToTranslate++;
        }
    }
}

echo "Remaining translation operations: {$totalToTranslate}\n";
if ($totalToTranslate === 0) {
    echo "All translations are up to date!\n";
    exit(0);
}

$count = 0;
$skipped = 0;
$failed = 0;

foreach ($uniqueStrings as $str) {
    if (!isset($cache[$str])) {
        $cache[$str] = [];
    }
    
    foreach ($locales as $locale) {
        if (isset($cache[$str][$locale])) {
            continue;
        }
        
        echo "Translating to [{$locale}]: \"" . mb_substr($str, 0, 50) . "...\"\n";
        
        $translated = translate($str, $locale);
        
        if ($translated !== null) {
            $cache[$str][$locale] = $translated;
            $count++;
            
            // Save cache every 15 translation calls
            if ($count % 15 === 0) {
                file_put_contents($cacheFile, json_encode($cache, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES));
                echo "Saved progress: {$count} translations completed.\n";
            }
            
            // Wait 50ms to be gentle with the API
            usleep(50000);
        } else {
            $failed++;
            echo "FAILED to translate to [{$locale}]: \"" . mb_substr($str, 0, 50) . "\"\n";
            // If we hit too many failures, pause or exit to prevent spamming
            if ($failed > 10) {
                file_put_contents($cacheFile, json_encode($cache, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES));
                die("Too many API failures. Stopping to avoid rate limits. Please try running the script again.\n");
            }
            // Sleep longer on failure
            sleep(2);
        }
    }
}

// Final save
file_put_contents($cacheFile, json_encode($cache, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES));
echo "\nDone! Successfully translated {$count} strings. Failed: {$failed}.\n";
