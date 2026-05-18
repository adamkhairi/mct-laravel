<?php

namespace Database\Factories;

use App\Models\Tour;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Tour>
 */
class TourFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'id' => $this->faker->uuid(),
            'slug' => $this->faker->unique()->slug(),
            'title' => $this->faker->sentence(),
            'duration' => $this->faker->word(),
            'nights' => $this->faker->numberBetween(1, 14),
            'starting_point' => $this->faker->city(),
            'arrival_city' => $this->faker->city(),
            'description' => $this->faker->paragraph(),
            'url' => $this->faker->url(),
            'image' => $this->faker->imageUrl(),
            'accommodation' => $this->faker->word(),
            'guide' => $this->faker->name(),
            'trip_type' => $this->faker->word(),
            'difficulty' => $this->faker->randomElement(['Easy', 'Moderate', 'Hard']),
            'languages' => $this->faker->languageCode(),
            'itinerary' => ['day 1' => 'arrival', 'day 2' => 'tour'],
            'included' => ['breakfast', 'hotel'],
            'excluded' => ['flights'],
            'is_published' => $this->faker->boolean(),
        ];
    }
}
