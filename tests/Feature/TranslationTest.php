<?php

use Inertia\Testing\AssertableInertia as Assert;

test('it serves the homepage on a locale-prefixed URL', function () {
    $this->get('/fr')
        ->assertInertia(fn (Assert $page) => $page
            ->component('welcome')
            ->where('locale', 'fr')
            ->where('siteUrl', 'https://www.moroccanclubtravel.com')
        );
});

test('the legacy homepage redirects to the English locale URL', function () {
    $this->get('/')
        ->assertRedirect('/en');
});

test('the app shell links to the branded favicon assets', function () {
    $this->get('/en')
        ->assertSuccessful()
        ->assertSee('<link rel="icon" href="/favicon.ico" sizes="any">', escape: false)
        ->assertSee('<link rel="icon" href="/favicon.png" sizes="192x192" type="image/png">', escape: false)
        ->assertSee('<link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180">', escape: false);
});

test('it shares translations based on the current locale', function () {
    $this->get('/en')
        ->assertInertia(fn (Assert $page) => $page
            ->where('locale', 'en')
            ->has('translations', fn (Assert $page) => $page
                ->where('Welcome to our platform', 'Welcome to our platform')
                ->etc()
            )
        );

    $this->get('/es')
        ->assertInertia(fn (Assert $page) => $page
            ->where('locale', 'es')
            ->has('translations', fn (Assert $page) => $page
                ->where('Welcome to our platform', 'Bienvenido a nuestra plataforma')
                ->etc()
            )
        );
});

test('it returns the key if translation is missing in the hook', function () {
    $this->get('/es')
        ->assertInertia(fn (Assert $page) => $page
            ->has('translations', fn (Assert $page) => $page
                ->where('Welcome to our platform', 'Bienvenido a nuestra plataforma')
                ->missing('This key does not exist')
                ->etc()
            )
        );
});
