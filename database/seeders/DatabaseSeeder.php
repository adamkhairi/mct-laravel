<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // Create admin user
        User::updateOrCreate(
            ['email' => 'admin@mct.com'],
            [
                'name' => 'Admin User',
                'password' => 'admin123',
                'role' => 'ADMIN',
            ]
        );

        // Seed tours from tours.ts
        $this->call([
            TourSeeder::class,
            TourTranslationSeeder::class,
        ]);
    }
}
