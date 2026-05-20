<?php

use App\Models\Tour;
use App\Models\User;

test('tours index page is displayed', function () {
    Tour::factory()->count(3)->create(['is_published' => true]);

    $this->get('/tours')
        ->assertStatus(200);
});

test('tours index only displays published tours', function () {
    $publishedTour = Tour::factory()->create([
        'slug' => 'published-tour',
        'title' => 'Published Tour',
        'is_published' => true,
    ]);
    $unpublishedTour = Tour::factory()->create([
        'slug' => 'unpublished-tour',
        'title' => 'Unpublished Tour',
        'is_published' => false,
    ]);

    $response = $this->get('/tours');

    $response->assertStatus(200);
    $response->assertInertia(fn ($page) => $page
        ->component('Tours/Index')
        ->has('tours.data', 1)
        ->where('tours.data.0.slug', 'published-tour')
    );
});

test('tour show page is displayed for published tour', function () {
    $tour = Tour::factory()->create(['is_published' => true]);

    $this->get('/tours/'.$tour->slug)
        ->assertStatus(200);
});

test('unpublished tour returns 404 for public users', function () {
    $tour = Tour::factory()->create([
        'slug' => 'unpublished-tour',
        'is_published' => false,
    ]);

    $this->get('/tours/'.$tour->slug)
        ->assertStatus(404);
});

test('unpublished tour can be viewed by admin user', function () {
    $admin = User::factory()->create(['role' => 'ADMIN']);
    $tour = Tour::factory()->create([
        'slug' => 'unpublished-tour',
        'is_published' => false,
    ]);

    $this->actingAs($admin)
        ->get('/tours/'.$tour->slug)
        ->assertStatus(200);
});

test('unpublished tour returns 404 for regular authenticated users', function () {
    $user = User::factory()->create(['role' => 'USER']);
    $tour = Tour::factory()->create([
        'slug' => 'unpublished-tour',
        'is_published' => false,
    ]);

    $this->actingAs($user)
        ->get('/tours/'.$tour->slug)
        ->assertStatus(404);
});

test('invalid tour slug returns 404', function () {
    $this->get('/tours/non-existent-slug')
        ->assertStatus(404);
});

test('admin tours index page is displayed', function () {
    $user = User::factory()->create(['role' => 'ADMIN']);
    Tour::factory()->count(3)->create();

    $this->actingAs($user)
        ->get('/admin/tours')
        ->assertStatus(200);
});

test('admin can create a tour', function () {
    $user = User::factory()->create(['role' => 'ADMIN']);
    $this->actingAs($user)
        ->post('/admin/tours', [
            'title' => 'Test Tour',
            'slug' => 'test-tour',
            'duration' => '3 Days',
            'nights' => '2 Nights',
            'starting_point' => 'Marrakech',
            'description' => 'Test description for the tour',
            'is_published' => true,
        ])
        ->assertRedirect('/admin/tours');

    $this->assertDatabaseHas('tours', ['title' => 'Test Tour']);
});
