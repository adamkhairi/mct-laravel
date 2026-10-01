<?php

use App\Models\Review;
use App\Models\User;
use Database\Seeders\ReviewSeeder;
use Inertia\Testing\AssertableInertia as Assert;

test('homepage receives a published review collection', function () {
    $this->get('/en')
        ->assertInertia(fn (Assert $page) => $page
            ->component('welcome')
            ->has('homepageReviews', 0)
        );
});

test('homepage exposes published reviews and hides drafts', function () {
    $publishedReview = Review::factory()->published()->create([
        'reviewer_name' => 'A Guest',
        'locale' => 'en',
    ]);
    Review::factory()->create([
        'reviewer_name' => 'A Draft Guest',
        'is_published' => false,
    ]);

    $this->get('/en')
        ->assertInertia(fn (Assert $page) => $page
            ->component('welcome')
            ->has('homepageReviews', 1)
            ->where('homepageReviews.0.name', $publishedReview->reviewer_name)
        );
});

test('admins can publish verified reviews', function () {
    $admin = User::factory()->create(['role' => 'ADMIN']);

    $this->actingAs($admin)
        ->post('/admin/reviews', [
            'reviewer_name' => 'A Guest',
            'country' => 'Canada',
            'flag' => '',
            'trip_name' => 'Private Morocco Tour',
            'quote' => 'A memorable trip through Morocco.',
            'rating' => 5,
            'locale' => 'en',
            'is_verified' => true,
            'is_published' => true,
            'tour_id' => '',
            'reviewed_at' => '',
        ])
        ->assertRedirect(route('admin.reviews.index'));

    $this->assertDatabaseHas('reviews', [
        'reviewer_name' => 'A Guest',
        'is_verified' => true,
        'is_published' => true,
    ]);
});

test('approved legacy reviews are seeded idempotently', function () {
    $this->seed(ReviewSeeder::class);
    $this->seed(ReviewSeeder::class);

    expect(Review::query()->count())->toBe(6)
        ->and(Review::published()->where('is_verified', true)->count())->toBe(6);
});
