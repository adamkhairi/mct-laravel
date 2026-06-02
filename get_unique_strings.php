<?php
$data = json_decode(file_get_contents('database/seeders/data/tours.json'), true);
$strings = [];
foreach ($data as $tour) {
    if(!empty($tour['tripType'])) $strings[] = $tour['tripType'];
    if(!empty($tour['difficulty'])) $strings[] = $tour['difficulty'];
    if(!empty($tour['languages'])) $strings[] = $tour['languages'];
    if(!empty($tour['guide'])) $strings[] = $tour['guide'];
    if(!empty($tour['accommodation'])) $strings[] = $tour['accommodation'];
    if(!empty($tour['startingPoint'])) $strings[] = $tour['startingPoint'];
    if(!empty($tour['arrivalCity'])) $strings[] = $tour['arrivalCity'];
}
$strings = array_unique($strings);
echo count($strings) . " unique short strings.\n";
