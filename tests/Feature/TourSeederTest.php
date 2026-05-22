<?php

use App\Models\Tour;
use Database\Seeders\TourSeeder;
use Illuminate\Foundation\Testing\RefreshDatabase;

uses(RefreshDatabase::class);

test('tour seeder creates tours from tours.ts', function () {
    // Ensure tours table is empty
    Tour::query()->delete();

    // Run seeder
    $this->seed(TourSeeder::class);

    // Verify tours were created
    expect(Tour::count())->toBeGreaterThan(0);

    // Verify specific tour exists with correct data
    $tour = Tour::where('slug', 'imperial-cities-tour-from-casablanca')->first();
    expect($tour)->not->toBeNull();
    expect($tour->title)->toBe('Imperial Cities Tour From Casablanca');
    expect($tour->duration)->toBe('8 Days');
    expect($tour->nights)->toBe('7 Nights');
});

test('seeder transforms camelCase to snake_case', function () {
    Tour::query()->delete();
    $this->seed(TourSeeder::class);

    $tour = Tour::where('slug', 'spiritual-tour')->first();
    expect($tour)->not->toBeNull();
    expect($tour->starting_point)->toBe('Casablanca');
    expect($tour->arrival_city)->toBe('Casablanca');
    expect($tour->trip_type)->toBe('Long-tours');
});

test('seeder preserves JSON arrays', function () {
    Tour::query()->delete();
    $this->seed(TourSeeder::class);

    $tour = Tour::where('slug', 'imperial-cities-tour-from-casablanca')->first();
    expect($tour->itinerary)->toBeArray();
    expect($tour->itinerary)->toHaveCount(8);
    expect($tour->itinerary[0])->toHaveKeys(['day', 'title', 'description']);

    expect($tour->included)->toBeArray();
    expect($tour->included)->toContain('Transfer from and back to Airport.');

    expect($tour->excluded)->toBeArray();
    expect($tour->excluded)->toContain('Any personal costs');
});

test('seeder maps id field to slug', function () {
    Tour::query()->delete();
    $this->seed(TourSeeder::class);

    // Verify that the 'id' from tours.ts is used as 'slug' in the database
    $tour = Tour::where('slug', 'moorish-heritage-and-desert')->first();
    expect($tour)->not->toBeNull();
    expect($tour->title)->toBe('Moorish Heritage and Desert');
});

test('seeder publishes docx tours and drafts others', function () {
    Tour::query()->delete();
    $this->seed(TourSeeder::class);

    $unpublishedCount = Tour::where('is_published', false)->count();
    expect($unpublishedCount)->toBe(19);

    $publishedCount = Tour::where('is_published', true)->count();
    expect($publishedCount)->toBe(9);
});
