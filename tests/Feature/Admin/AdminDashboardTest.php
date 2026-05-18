<?php

use App\Models\User;

test('guest users are redirected to login when accessing admin dashboard', function () {
    $this->get('/admin')
        ->assertRedirect(route('login'));
});

test('staff users receive 403 when accessing admin dashboard', function () {
    $user = User::factory()->create(['role' => 'STAFF']);

    $this->actingAs($user)
        ->get('/admin')
        ->assertForbidden();
});

test('admin users are redirected to tours index from admin dashboard', function () {
    $admin = User::factory()->create(['role' => 'ADMIN']);

    $this->actingAs($admin)
        ->get('/admin')
        ->assertRedirect(route('admin.tours.index'));
});

test('admin dashboard route has correct name', function () {
    expect(route('admin.dashboard'))->toBe(url('/admin'));
});
