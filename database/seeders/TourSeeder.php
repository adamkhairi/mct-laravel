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

        // Clear existing tours
        Tour::query()->delete();

        // Tours sourced from docx files — published by default; all others are drafts.
        $docxTourIds = [
            'andalusian-heritage-tour',
            'atlantic-coast-marrakech-10-days',
            'imperial-cities-tour-from-tangier-10d',
            'just-for-women-10-days',
            'mediterranean-coast-southern-morocco',
            'moorish-heritage-desert-tour-11-days',
            'northern-morocco-grand-loop-7-days',
            'sahara-imperial-cities-7-days',
            'south-morocco-tour-6-days',
        ];

        // Transform and insert each tour
        foreach ($tours as $tour) {
            $id = $tour['id'] ?? (string) Str::uuid();
            $mappedTour = [
                'id' => $id,
                'title' => $tour['title'],
                'slug' => $id,
                'duration' => $tour['duration'] ?? null,
                'nights' => $tour['nights'] ?? null,
                'starting_point' => $tour['startingPoint'] ?? null,
                'arrival_city' => $tour['arrivalCity'] ?? null,
                'description' => $tour['description'] ?? null,
                'url' => $tour['url'] ?? null,
                'image' => $this->handleImage($tour['image'] ?? null),
                'accommodation' => $tour['accommodation'] ?? null,
                'guide' => $tour['guide'] ?? null,
                'trip_type' => $tour['tripType'] ?? null,
                'difficulty' => $tour['difficulty'] ?? null,
                'languages' => $tour['languages'] ?? null,
                'itinerary' => $tour['itinerary'] ?? null,
                'included' => $tour['included'] ?? null,
                'excluded' => $tour['excluded'] ?? null,
                'is_published' => in_array($id, $docxTourIds),
            ];

            Tour::create($mappedTour);
        }
    }

    /**
     * Handle image path.
     */
    private function handleImage(?string $image): ?string
    {
        if (empty($image)) {
            return 'https://placehold.co/800x600?text=No+Image';
        }

        // If it's already a full URL or a storage path, keep it
        if (str_starts_with($image, 'http') || str_starts_with($image, '/storage/')) {
            return $image;
        }

        // Check if the file exists in public/
        if (File::exists(public_path($image))) {
            return '/'.ltrim($image, '/');
        }

        // Fallback to placeholder if not found locally
        return 'https://placehold.co/800x600?text='.urlencode(basename($image));
    }
}
