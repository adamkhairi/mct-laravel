<?php

use App\Models\Tour;
use App\Models\User;

test('guests are redirected to the login page', function () {
    $response = $this->get(route('dashboard'));
    $response->assertRedirect(route('login'));
});

test('authenticated users can visit the dashboard', function () {
    $user = User::factory()->create();
    $this->actingAs($user);

    $response = $this->get(route('dashboard'));
    $response->assertOk();
});

test('dashboard displays tour statistics', function () {
    $user = User::factory()->create();

    Tour::factory()->count(5)->create(['is_published' => true]);
    Tour::factory()->count(3)->create(['is_published' => false]);

    $response = $this->actingAs($user)->get(route('dashboard'));

    $response->assertOk();
    $response->assertInertia(fn ($page) => $page
        ->component('dashboard')
        ->has('stats')
        ->where('stats.totalTours', 8)
        ->where('stats.publishedTours', 5)
        ->where('stats.draftTours', 3)
    );
});

test('dashboard displays recent tours', function () {
    $user = User::factory()->create();

    Tour::factory()->count(7)->create();

    $response = $this->actingAs($user)->get(route('dashboard'));

    $response->assertOk();
    $response->assertInertia(fn ($page) => $page
        ->component('dashboard')
        ->has('recentTours', 5)
    );
});
