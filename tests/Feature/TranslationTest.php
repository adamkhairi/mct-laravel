<?php

use Inertia\Testing\AssertableInertia as Assert;

test('it shares translations based on the current locale', function () {
    // Default locale should be en
    $this->get('/')
        ->assertInertia(fn (Assert $page) => $page
            ->where('locale', 'en')
            ->has('translations', fn (Assert $page) => $page
                ->where('Welcome to our platform', 'Welcome to our platform')
                ->etc()
            )
        );

    // Change locale to es
    $this->post('/language', ['locale' => 'es'])
        ->assertRedirect();

    // Now it should be es
    $this->get('/')
        ->assertInertia(fn (Assert $page) => $page
            ->where('locale', 'es')
            ->has('translations', fn (Assert $page) => $page
                ->where('Welcome to our platform', 'Bienvenido a nuestra plataforma')
                ->etc()
            )
        );
});

test('it returns the key if translation is missing in the hook', function () {
    // This is more of a frontend test, but we can verify the shared data
    $this->post('/language', ['locale' => 'es']);

    $this->get('/')
        ->assertInertia(fn (Assert $page) => $page
            ->has('translations', fn (Assert $page) => $page
                ->where('Welcome to our platform', 'Bienvenido a nuestra plataforma')
                ->missing('This key does not exist')
                ->etc()
            )
        );
});
