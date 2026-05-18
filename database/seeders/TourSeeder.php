<?php

namespace Database\Seeders;

use App\Models\Tour;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Str;

class TourSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $toursFile = database_path('seeders/data/tours.json');

        if (! File::exists($toursFile)) {
            throw new \Exception('tours.json file not found at: '.$toursFile);
        }

        $tours = json_decode(File::get($toursFile), true);

        if (json_last_error() !== JSON_ERROR_NONE) {
            throw new \Exception('JSON parsing error: '.json_last_error_msg());
        }

        // Transform and insert each tour
        foreach ($tours as $tour) {
            $mappedTour = [
                'id' => $tour['id'] ?? (string) Str::uuid(),
                'title' => $tour['title'],
                'slug' => $tour['id'], // Using ID as slug based on the schema
                'duration' => $tour['duration'] ?? null,
                'nights' => $tour['nights'] ?? null,
                'starting_point' => $tour['startingPoint'] ?? null,
                'arrival_city' => $tour['arrivalCity'] ?? null,
                'description' => $tour['description'] ?? null,
                'url' => $tour['url'] ?? null,
                'image' => $tour['image'] ?? null,
                'accommodation' => $tour['accommodation'] ?? null,
                'guide' => $tour['guide'] ?? null,
                'trip_type' => $tour['tripType'] ?? null,
                'difficulty' => $tour['difficulty'] ?? null,
                'languages' => $tour['languages'] ?? null,
                'itinerary' => $tour['itinerary'] ?? null,
                'included' => $tour['included'] ?? null,
                'excluded' => $tour['excluded'] ?? null,
                'is_published' => true,
            ];

            Tour::create($mappedTour);
        }
    }
}
