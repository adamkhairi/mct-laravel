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

            // Manual overrides for tours if not found in es.json
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

            if ($tour->id === 'andalusian-heritage-tour') {
                $tour->setTranslation('title', 'es', 'Tour de la Herencia Andaluza');
                $tour->setTranslation('description', 'es', 'Tras la caída de Granada en 1492, muchos musulmanes y judíos andaluces se establecieron en el norte de Marruecos, trayendo consigo un rico legado cultural que dio forma a la arquitectura, la música, la artesanía, la gastronomía y el diseño urbano de varias ciudades marroquíes. Este viaje de 8 días le invita a descubrir el notable patrimonio andaluz de Marruecos a través de sus ciudades imperiales, pueblos de montaña pintados de azul, medinas históricas y lugares declarados Patrimonio de la Humanidad por la UNESCO.');
            }

            if ($tour->id === 'atlantic-coast-marrakech-10-days') {
                $tour->setTranslation('title', 'es', 'Tour de la Costa Atlántica y Marrakech');
                $tour->setTranslation('description', 'es', 'Un hermoso viaje a lo largo de la costa atlántica de Marruecos que combina ciudades imperiales, pueblos costeros y la vibrante ciudad de Marrakech. Este itinerario incluye Tánger, Rabat, Casablanca, El Yadida, Oualidia, Esauira, Agadir y Marrakech.');
            }

            if ($tour->id === 'imperial-cities-tour-from-tangier-10d') {
                $tour->setTranslation('title', 'es', 'Tour de las Ciudades Imperiales desde Tánger – 10 Días');
                $tour->setTranslation('description', 'es', 'Este tour de 10 días por las Ciudades Imperiales ofrece un rico viaje a través de los destinos más históricos y culturalmente significativos de Marruecos. Comenzando en Tánger, explorará el punto de encuentro del Mediterráneo y el Atlántico, para luego continuar hacia Rabat, Casablanca, Marrakech, las cascadas de Ouzoud, Bin El Ouidane, Meknes, Volubilis, Fez, Chefchaouen y Tetuán.');
            }

            if ($tour->id === 'moorish-heritage-desert-tour-11-days') {
                $tour->setTranslation('title', 'es', 'Tour de la Herencia Morisca y el Desierto – 11 Días');
                $tour->setTranslation('description', 'es', 'Este viaje de 11 días combina las ciudades imperiales más bellas de Marruecos, el pueblo azul de Chefchaouen, ruinas romanas, el desierto del Sahara y la costa atlántica. Desde Tánger hasta las dunas de Merzouga y la vibrante ciudad de Marrakech, este tour ofrece un descubrimiento completo de la historia, la cultura, las montañas y los paisajes desérticos de Marruecos.');
            }

            if ($tour->id === 'northern-morocco-grand-loop-7-days') {
                $tour->setTranslation('title', 'es', 'Gran Circuito del Norte de Marruecos – 7 Días');
                $tour->setTranslation('description', 'es', 'Este viaje de 7 días ofrece un descubrimiento completo del norte y centro de Marruecos, combinando el encanto costero, los paisajes de montaña y el patrimonio imperial. Comenzando en Tánger, la ruta atraviesa las calles azules de Chefchaouen y las montañas del Rif hasta la ciudad mediterránea de Al Hoceima. El itinerario continúa hacia el interior hasta la capital cultural de Fez, antes de explorar las ciudades imperiales de Meknes y Rabat. El viaje concluye con un regreso por la costa a través de Arcila antes de terminar en Tánger.');
            }

            if ($tour->id === 'south-morocco-tour-6-days') {
                $tour->setTranslation('title', 'es', 'Tour del Sur de Marruecos – 6 Días');
                $tour->setTranslation('description', 'es', 'Este viaje de 6 días por el sur de Marruecos ofrece una mezcla perfecta de descubrimiento cultural, paisajes escénicos y relajación. Comenzando en Casablanca, viajará a Marrakech, explorará sus monumentos más emblemáticos, viajará a través de las montañas del Alto Atlas hasta Ait Ben Haddou, declarada por la UNESCO, experimentará la atmósfera del desierto en Zagora con un paseo en camello en las dunas de Tinfou y descubrirá Uarzazat, el "Hollywood de Marruecos".');
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
