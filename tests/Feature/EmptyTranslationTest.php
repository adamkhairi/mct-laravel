<?php

use Inertia\Testing\AssertableInertia as Assert;

test('empty translation file returns empty object/array', function () {
    $this->post('/language', ['locale' => 'fr']);

    $this->get('/')
        ->assertInertia(fn (Assert $page) => $page
            ->where('locale', 'fr')
            ->has('translations')
        );
});
