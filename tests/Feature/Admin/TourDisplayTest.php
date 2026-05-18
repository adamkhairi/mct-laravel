<?php

use App\Models\Tour;
use App\Models\User;

test('admin tour index displays all tours regardless of publication status', function () {
    $admin = User::factory()->create(['role' => 'ADMIN']);

    // Create both published and unpublished tours
    $publishedTour = Tour::factory()->create([
        'title' => 'Published Tour',
        'slug' => 'published-tour',
        'is_published' => true,
    ]);

    $unpublishedTour = Tour::factory()->create([
        'title' => 'Unpublished Tour',
        'slug' => 'unpublished-tour',
        'is_published' => false,
    ]);

    // Access admin tour index
    $response = $this->actingAs($admin)
        ->get(route('admin.tours.index'));

    // Verify response is successful
    $response->assertOk();

    // Verify both tours are present in the response
    $response->assertInertia(fn ($page) => $page
        ->component('Admin/Tours/Index')
        ->has('tours.data', 2)
    );

    // Verify the database has both tours
    expect(Tour::count())->toBe(2);
    expect(Tour::where('slug', $publishedTour->slug)->exists())->toBeTrue();
    expect(Tour::where('slug', $unpublishedTour->slug)->exists())->toBeTrue();
});

test('admin tour index shows unpublished tours', function () {
    $admin = User::factory()->create(['role' => 'ADMIN']);

    // Create only unpublished tours
    Tour::factory()->create([
        'title' => 'Draft Tour 1',
        'slug' => 'draft-tour-1',
        'is_published' => false,
    ]);

    Tour::factory()->create([
        'title' => 'Draft Tour 2',
        'slug' => 'draft-tour-2',
        'is_published' => false,
    ]);

    // Access admin tour index
    $response = $this->actingAs($admin)
        ->get(route('admin.tours.index'));

    // Verify both unpublished tours are displayed
    $response->assertOk();
    $response->assertInertia(fn ($page) => $page
        ->component('Admin/Tours/Index')
        ->has('tours.data', 2)
    );
});

test('admin can edit unpublished tours', function () {
    $admin = User::factory()->create(['role' => 'ADMIN']);

    $unpublishedTour = Tour::factory()->create([
        'title' => 'Unpublished Tour',
        'slug' => 'unpublished-tour',
        'is_published' => false,
    ]);

    // Access edit page for unpublished tour
    $response = $this->actingAs($admin)
        ->get(route('admin.tours.edit', $unpublishedTour));

    // Verify admin can access the edit page
    $response->assertOk();
    $response->assertInertia(fn ($page) => $page
        ->component('Admin/Tours/Edit')
        ->where('tour.slug', 'unpublished-tour')
        ->where('tour.isPublished', false)
    );
});

test('admin can delete unpublished tours', function () {
    $admin = User::factory()->create(['role' => 'ADMIN']);

    $unpublishedTour = Tour::factory()->create([
        'title' => 'Unpublished Tour',
        'slug' => 'unpublished-tour',
        'is_published' => false,
    ]);

    // Delete the unpublished tour
    $response = $this->actingAs($admin)
        ->delete(route('admin.tours.destroy', $unpublishedTour));

    // Verify deletion was successful
    $response->assertRedirect(route('admin.tours.index'));
    expect(Tour::find($unpublishedTour->id))->toBeNull();
});

test('admin tour index has no publication filtering applied', function () {
    $admin = User::factory()->create(['role' => 'ADMIN']);

    // Create a mix of published and unpublished tours
    Tour::factory()->count(3)->create(['is_published' => true]);
    Tour::factory()->count(2)->create(['is_published' => false]);

    // Access admin tour index
    $response = $this->actingAs($admin)
        ->get(route('admin.tours.index'));

    // Verify all 5 tours are displayed (no filtering)
    $response->assertOk();
    $response->assertInertia(fn ($page) => $page
        ->component('Admin/Tours/Index')
        ->has('tours.data', 5)
    );
});
