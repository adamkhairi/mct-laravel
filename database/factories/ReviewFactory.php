<?php

namespace Database\Factories;

use App\Models\Review;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Review>
 */
class ReviewFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'reviewer_name' => fake()->name(),
            'country' => fake()->country(),
            'flag' => null,
            'trip_name' => fake()->words(3, true),
            'quote' => fake()->paragraph(),
            'rating' => fake()->numberBetween(1, 5),
            'locale' => 'en',
            'is_verified' => false,
            'is_published' => false,
            'tour_id' => null,
            'reviewed_at' => null,
        ];
    }

    public function published(): static
    {
        return $this->state(fn (): array => [
            'is_published' => true,
            'is_verified' => true,
        ]);
    }
}
