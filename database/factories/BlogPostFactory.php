<?php

namespace Database\Factories;

use App\Models\BlogPost;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<BlogPost>
 */
class BlogPostFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'slug' => fake()->unique()->slug(),
            'locale' => 'en',
            'translation_key' => null,
            'title' => fake()->sentence(),
            'excerpt' => fake()->paragraph(),
            'body' => fake()->paragraphs(3, true),
            'meta_description' => fake()->sentence(),
            'image' => null,
            'status' => 'draft',
            'published_at' => null,
            'user_id' => null,
        ];
    }

    public function published(): static
    {
        return $this->state(fn (): array => [
            'status' => 'published',
            'published_at' => now(),
        ]);
    }
}
