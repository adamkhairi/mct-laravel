<?php

$cacheFile = __DIR__ . '/database/seeders/data/translations_cache.json';
$cache = [];

if (file_exists($cacheFile)) {
    $cache = json_decode(file_get_contents($cacheFile), true);
    if (!is_array($cache)) {
        $cache = [];
    }
}

// Read add_tour_translations.php to extract its array
$content = file_get_contents(__DIR__ . '/add_tour_translations.php');

// We can just execute a sandboxed PHP snippet to get $newTranslations
ob_start();
include __DIR__ . '/add_tour_translations.php';
ob_end_clean();

if (isset($newTranslations) && is_array($newTranslations)) {
    echo "Found " . count($newTranslations) . " existing translations in add_tour_translations.php.\n";
    $added = 0;
    foreach ($newTranslations as $en => $localeMap) {
        if (!isset($cache[$en])) {
            $cache[$en] = $localeMap;
            $added++;
        } else {
            foreach ($localeMap as $locale => $trans) {
                if (!isset($cache[$en][$locale])) {
                    $cache[$en][$locale] = $trans;
                    $added++;
                }
            }
        }
    }
    echo "Added {$added} translations to cache.\n";
    file_put_contents($cacheFile, json_encode($cache, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES) . "\n");
} else {
    echo "Failed to load \$newTranslations from add_tour_translations.php\n";
}
