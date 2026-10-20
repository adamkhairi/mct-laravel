<?php

use App\Models\BlogPost;
use App\Models\Tour;
use Illuminate\Support\Str;

test('sitemap lists canonical pages and only available tour translations', function () {
    $publishedTour = Tour::factory()->create([
        'slug' => 'sahara-journey',
        'is_published' => true,
    ]);
    Tour::factory()->create([
        'slug' => 'unpublished-journey',
        'is_published' => false,
    ]);

    expect($publishedTour->availableLocales())->toContain('en');

    $response = $this->get('/sitemap.xml')->assertSuccessful();
    $content = $response->getContent();
    preg_match('~<url>\s*<loc>https://www\.moroccanclubtravel\.com/en</loc>(.*?)</url>~s', $content, $homeUrl);

    expect($content)
        ->toContain('<loc>https://www.moroccanclubtravel.com/en</loc>')
        ->toContain('<loc>https://www.moroccanclubtravel.com/fr/about</loc>')
        ->toContain('hreflang="fr" href="https://www.moroccanclubtravel.com/fr/about"')
        ->toContain('<loc>https://www.moroccanclubtravel.com/en/tours/'.$publishedTour->slug.'</loc>')
        ->not->toContain('<loc>https://www.moroccanclubtravel.com/es/tours/'.$publishedTour->slug.'</loc>')
        ->not->toContain('<loc>https://www.moroccanclubtravel.com/en/blog</loc>')
        ->not->toContain('<loc>https://moroccanclubtravel.com/')
        ->not->toContain('unpublished-journey');

    expect($homeUrl[1] ?? '')->not->toContain('<lastmod>');
});

test('sitemap includes only journal archives with published entries', function () {
    BlogPost::factory()->published()->create(['locale' => 'fr']);

    $content = $this->get('/sitemap.xml')->assertSuccessful()->getContent();

    expect($content)
        ->toContain('<loc>https://www.moroccanclubtravel.com/fr/blog</loc>')
        ->not->toContain('<loc>https://www.moroccanclubtravel.com/en/blog</loc>')
        ->not->toContain('<loc>https://www.moroccanclubtravel.com/de/blog</loc>');
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
        ->toContain('<loc>https://www.moroccanclubtravel.com/fr/blog/maroc-au-printemps</loc>')
        ->toContain('hreflang="en" href="https://www.moroccanclubtravel.com/en/blog/morocco-in-spring"')
        ->toContain('<loc>https://www.moroccanclubtravel.com/de/blog/standalone-article</loc>')
        ->not->toContain('hreflang="en" href="https://www.moroccanclubtravel.com/en/blog/standalone-article"');
});

test('apex requests redirect to the configured www canonical host', function () {
    $this->get('https://moroccanclubtravel.com/en/about?source=search')
        ->assertRedirect('https://www.moroccanclubtravel.com/en/about?source=search')
        ->assertStatus(301);
});

test('requests to the www canonical host do not redirect', function () {
    $this->get('https://www.moroccanclubtravel.com/en/about?source=search')
        ->assertOk();
});
