<?php

use App\Models\Tour;
use App\Models\User;

use function Pest\Laravel\actingAs;
use function Pest\Laravel\get;

it('paginates tours on admin index page', function () {
    $admin = User::factory()->create(['role' => 'ADMIN']);
    Tour::factory()->count(20)->create();

    $response = actingAs($admin)->get(route('admin.tours.index'));

    $response->assertOk();
    $response->assertInertia(fn ($page) => $page
        ->component('Admin/Tours/Index')
        ->has('tours.data', 10)
        ->has('tours.links')
    );
});

it('paginates published tours on public index page', function () {
    Tour::factory()->count(20)->create(['is_published' => true]);

    $response = get(route('tours.index'));

    $response->assertOk();
    $response->assertInertia(fn ($page) => $page
        ->component('Tours/Index')
        ->has('tours.data', 10)
        ->has('tours.meta')
        ->has('tours.links')
        ->where('tours.meta.last_page', 2)
    );
});

it('can navigate to second page of admin tours', function () {
    $admin = User::factory()->create(['role' => 'ADMIN']);
    Tour::factory()->count(20)->create();

    $response = actingAs($admin)->get(route('admin.tours.index', ['page' => 2]));

    $response->assertOk();
    $response->assertInertia(fn ($page) => $page
        ->component('Admin/Tours/Index')
        ->has('tours.data', 10)
    );
});

it('can navigate to second page of public tours', function () {
    Tour::factory()->count(20)->create(['is_published' => true]);

    $response = get(route('tours.index', ['page' => 2]));

    $response->assertOk();
    $response->assertInertia(fn ($page) => $page
        ->component('Tours/Index')
        ->has('tours.data', 10)
        ->has('tours.meta')
        ->has('tours.links')
    );
});
