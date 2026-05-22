<?php

namespace Database\Seeders;

use App\Models\Tour;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\File;

class TourTranslationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $esJson = json_decode(File::get(lang_path('es.json')), true);

        $tours = Tour::all();

        foreach ($tours as $tour) {
            $this->translateField($tour, 'title', $esJson);
            $this->translateField($tour, 'description', $esJson);
            $this->translateField($tour, 'duration', $esJson);
            $this->translateField($tour, 'nights', $esJson);
            $this->translateField($tour, 'starting_point', $esJson);
            $this->translateField($tour, 'arrival_city', $esJson);
            $this->translateField($tour, 'trip_type', $esJson);
            $this->translateField($tour, 'difficulty', $esJson);

            // Manual overrides for tours in the screenshot if not found in es.json
            if ($tour->id === 'just-for-women-10-days') {
                $tour->setTranslation('title', 'es', 'Solo para mujeres – 10 días / 9 noches');
                $tour->setTranslation('description', 'es', '¡Bienvenidas damas a Marruecos! Vengan a experimentar las maravillas que ofrece Marruecos con muchas compras en las medinas históricas, clases regionales de cocina en Fez y Marrakech, una clase de danza del vientre, una...');
            }

            if ($tour->id === 'mediterranean-coast-southern-morocco') {
                $tour->setTranslation('title', 'es', 'Costa del Mediterráneo y el sur de Marruecos – 13 días');
                $tour->setTranslation('description', 'es', 'Descubra la belleza, la cultura y la diversidad de Marruecos en este viaje inolvidable de 13 días por las ciudades imperiales del país, las costas del Atlántico y el Mediterráneo...');
            }

            if ($tour->id === 'sahara-imperial-cities-7-days') {
                $tour->setTranslation('title', 'es', 'Tour de las ciudades imperiales del Sahara – 7 días');
                $tour->setTranslation('description', 'es', 'Este viaje de 7 días por Marruecos combina el encanto de las ciudades imperiales con la magia del desierto del Sahara. Comenzando en Casablanca, viajará a la vibrante ciudad de Marrakech...');
            }

            $tour->save();
        }
    }

    private function translateField(Tour $tour, string $field, array $translations): void
    {
        // Handle case where field might not be JSON yet
        $currentValue = $tour->getRawOriginal($field);

        if (! $currentValue) {
            return;
        }

        // If it's already JSON, get the 'en' translation
        if (str_starts_with($currentValue, '{') || str_starts_with($currentValue, '[')) {
            $decoded = json_decode($currentValue, true);
            if (is_array($decoded) && isset($decoded['en'])) {
                $englishValue = $decoded['en'];
            } else {
                // Not a translatable JSON format we expect
                return;
            }
        } else {
            // It's a plain string, treat it as English
            $englishValue = $currentValue;
            $tour->setTranslation($field, 'en', $englishValue);
        }

        if (isset($translations[$englishValue])) {
            $tour->setTranslation($field, 'es', $translations[$englishValue]);
        }
    }
}
