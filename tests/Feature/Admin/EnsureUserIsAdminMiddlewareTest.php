<?php

use App\Models\User;

test('guest users are redirected to login when accessing admin routes', function () {
    $this->get(route('admin.tours.index'))
        ->assertRedirect(route('login'));
});

test('staff users receive 403 when accessing admin routes', function () {
    $user = User::factory()->create(['role' => 'STAFF']);

    $this->actingAs($user)
        ->get(route('admin.tours.index'))
        ->assertForbidden();
});

test('admin users can access admin routes', function () {
    $admin = User::factory()->create(['role' => 'ADMIN']);

    $this->actingAs($admin)
        ->get(route('admin.tours.index'))
        ->assertOk();
});
