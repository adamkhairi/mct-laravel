<?php

namespace App\Console\Commands;

use App\Models\Tour;
use Illuminate\Console\Command;

class ExportViatorTours extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'viator:export {--slug= : Specific tour slug to export} {--locale=en : Locale for translatable fields} {--output=viator_tours.json : Output filename in storage/app}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Export tour data from mct-laravel into JSON format for Viator populator script';

    /**
     * Execute the console command.
     */
    public function handle(): int
    {
        $slug = $this->option('slug');
        $locale = $this->option('locale') ?? 'en';
        $outputFile = $this->option('output') ?? 'viator_tours.json';

        app()->setLocale($locale);

        $query = Tour::query();
        if ($slug) {
            $query->where('slug', $slug);
        }

        $tours = $query->get();

        if ($tours->isEmpty()) {
            $this->warn('No tours found to export.');

            return self::FAILURE;
        }

        $exportedData = $tours->map(function (Tour $tour) use ($locale) {
            return [
                'id' => $tour->id,
                'slug' => $tour->slug,
                'title' => $tour->getTranslation('title', $locale, false) ?: $tour->title,
                'duration' => $tour->getTranslation('duration', $locale, false) ?: $tour->duration,
                'starting_point' => $tour->getTranslation('starting_point', $locale, false) ?: $tour->starting_point,
                'arrival_city' => $tour->getTranslation('arrival_city', $locale, false) ?: $tour->arrival_city,
                'description' => strip_tags($tour->getTranslation('description', $locale, false) ?: $tour->description),
                'url' => $tour->url,
                'image' => $tour->image ? asset($tour->image) : null,
                'accommodation' => $tour->getTranslation('accommodation', $locale, false) ?: $tour->accommodation,
                'guide' => $tour->getTranslation('guide', $locale, false) ?: $tour->guide,
                'trip_type' => $tour->getTranslation('trip_type', $locale, false) ?: $tour->trip_type,
                'difficulty' => $tour->getTranslation('difficulty', $locale, false) ?: $tour->difficulty,
                'languages' => $tour->getTranslation('languages', $locale, false) ?: $tour->languages,
                'itinerary' => $tour->getTranslation('itinerary', $locale, false) ?: $tour->itinerary,
                'included' => $tour->getTranslation('included', $locale, false) ?: $tour->included,
                'excluded' => $tour->getTranslation('excluded', $locale, false) ?: $tour->excluded,
                'is_published' => (bool) $tour->is_published,
            ];
        });

        file_put_contents(storage_path('app/'.$outputFile), json_encode($exportedData, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE));

        $fullPath = storage_path('app/'.$outputFile);
        $this->info("Successfully exported {$tours->count()} tour(s) to: {$fullPath}");

        return self::SUCCESS;
    }
}
