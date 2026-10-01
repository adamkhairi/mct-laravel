<?php

use App\Models\BlogPost;
use App\Models\Tour;
use Illuminate\Support\Str;

test('sitemap lists canonical localized pages and published tours', function () {
    $publishedTour = Tour::factory()->create([
        'slug' => 'sahara-journey',
        'is_published' => true,
    ]);
    Tour::factory()->create([
        'slug' => 'unpublished-journey',
        'is_published' => false,
    ]);

    $response = $this->get('/sitemap.xml')->assertSuccessful();
    $content = $response->getContent();

    expect($content)
        ->toContain('<loc>https://moroccanclubtravel.com/en</loc>')
        ->toContain('<loc>https://moroccanclubtravel.com/en/blog</loc>')
        ->toContain('<loc>https://moroccanclubtravel.com/fr/blog</loc>')
        ->toContain('<loc>https://moroccanclubtravel.com/fr/about</loc>')
        ->toContain('hreflang="fr" href="https://moroccanclubtravel.com/fr/about"')
        ->toContain('<loc>https://moroccanclubtravel.com/es/tours/'.$publishedTour->slug.'</loc>')
        ->not->toContain('www.moroccanclubtravel.com')
        ->not->toContain('unpublished-journey');
});

test('sitemap advertises only available article translations', function () {
    $translationKey = (string) Str::uuid();
    BlogPost::factory()->published()->create([
        'locale' => 'en',
        'slug' => 'morocco-in-spring',
        'translation_key' => $translationKey,
    ]);
    BlogPost::factory()->published()->create([
        'locale' => 'fr',
        'slug' => 'maroc-au-printemps',
        'translation_key' => $translationKey,
    ]);
    BlogPost::factory()->published()->create([
        'locale' => 'de',
        'slug' => 'standalone-article',
    ]);

    $content = $this->get('/sitemap.xml')->assertSuccessful()->getContent();

    expect($content)
        ->toContain('<loc>https://moroccanclubtravel.com/fr/blog/maroc-au-printemps</loc>')
        ->toContain('hreflang="en" href="https://moroccanclubtravel.com/en/blog/morocco-in-spring"')
        ->toContain('<loc>https://moroccanclubtravel.com/de/blog/standalone-article</loc>')
        ->not->toContain('hreflang="en" href="https://moroccanclubtravel.com/en/blog/standalone-article"');
});
