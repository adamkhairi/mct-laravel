<?php

test('unknown public URLs render the custom Inertia 404 page', function () {
    $this->get('/en/missing-page')
        ->assertNotFound()
        ->assertSee('This page could not be found.')
        ->assertSee('noindex', false);
});
