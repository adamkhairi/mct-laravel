<?php
$data = json_decode(file_get_contents('database/seeders/data/tours.json'), true);
$included = [];
$excluded = [];
$itineraryDays = [];
$itineraryTitles = [];
$itineraryDescriptions = [];

foreach ($data as $tour) {
    if (!empty($tour['included'])) {
        foreach ($tour['included'] as $item) {
            $included[] = $item;
        }
    }
    if (!empty($tour['excluded'])) {
        foreach ($tour['excluded'] as $item) {
            $excluded[] = $item;
        }
    }
    if (!empty($tour['itinerary'])) {
        foreach ($tour['itinerary'] as $item) {
            if (!empty($item['day'])) $itineraryDays[] = $item['day'];
            if (!empty($item['title'])) $itineraryTitles[] = $item['title'];
            if (!empty($item['description'])) $itineraryDescriptions[] = $item['description'];
        }
    }
}

$included = array_unique($included);
$excluded = array_unique($excluded);
$itineraryDays = array_unique($itineraryDays);
$itineraryTitles = array_unique($itineraryTitles);
$itineraryDescriptions = array_unique($itineraryDescriptions);

echo "Unique Inclusions: " . count($included) . "\n";
echo "Unique Exclusions: " . count($excluded) . "\n";
echo "Unique Itinerary Days: " . count($itineraryDays) . "\n";
echo "Unique Itinerary Titles: " . count($itineraryTitles) . "\n";
echo "Unique Itinerary Descriptions: " . count($itineraryDescriptions) . "\n";
