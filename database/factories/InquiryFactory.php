<?php

namespace Database\Factories;

use App\Models\Inquiry;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Inquiry>
 */
class InquiryFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'full_name' => $this->faker->name(),
            'email' => $this->faker->unique()->safeEmail(),
            'phone' => $this->faker->phoneNumber(),
            'region' => $this->faker->randomElement(['The Sahara', 'The Atlas Mountains', 'Marrakesh & Imperial Cities', 'Atlantic Coast', 'Custom Combination']),
            'adults' => $this->faker->numberBetween(1, 10),
            'children' => $this->faker->numberBetween(0, 5),
            'preferred_dates' => $this->faker->date(),
            'message' => $this->faker->paragraph(),
        ];
    }
}
