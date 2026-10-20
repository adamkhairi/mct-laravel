<?php

namespace App\Http\Controllers;

use App\Models\BlogPost;
use App\Models\Tour;
use Illuminate\Http\Response;

class SitemapController extends Controller
{
    public function index(): Response
    {
        $canonicalUrl = rtrim((string) config('seo.canonical_url'), '/');
        $locales = config('seo.locales');
        $pages = [
            ['path' => '/', 'changefreq' => 'monthly', 'priority' => '1.0'],
            ['path' => '/tours', 'changefreq' => 'weekly', 'priority' => '0.8'],
            ['path' => '/about', 'changefreq' => 'yearly', 'priority' => '0.6'],
            ['path' => '/privacy-policy', 'changefreq' => 'yearly', 'priority' => '0.3'],
            ['path' => '/cancellation-policy', 'changefreq' => 'yearly', 'priority' => '0.3'],
            ['path' => '/terms', 'changefreq' => 'yearly', 'priority' => '0.3'],
        ];
        $urls = [];

        foreach ($pages as $page) {
            $localizedUrls = [];

            foreach ($locales as $locale) {
                $path = '/'.$locale.($page['path'] === '/' ? '' : $page['path']);
                $localizedUrls[$locale] = $canonicalUrl.$path;
            }

            foreach ($localizedUrls as $locale => $url) {
                $urls[] = [
                    'loc' => $url,
                    'changefreq' => $page['changefreq'],
                    'priority' => $page['priority'],
                    'alternates' => $this->alternates([$locale => $url]),
                ];
            }
        }

        $tours = Tour::published()
            ->select(['id', 'slug', ...$this->tourTranslationFields(), 'updated_at'])
            ->orderByDesc('updated_at')
            ->get();

        foreach ($tours as $tour) {
            $availableLocales = $tour->availableLocales();

            if ($availableLocales === []) {
                continue;
            }

            $localizedUrls = [];

            foreach ($availableLocales as $locale) {
                $localizedUrls[$locale] = $canonicalUrl.'/'.$locale.'/tours/'.$tour->slug;
            }

            foreach ($localizedUrls as $url) {
                $urls[] = [
                    'loc' => $url,
                    'lastmod' => $tour->updated_at->toDateString(),
                    'changefreq' => 'monthly',
                    'priority' => '0.7',
                    'alternates' => $this->alternates($localizedUrls),
                ];
            }
        }

        $posts = BlogPost::published()
            ->select(['slug', 'locale', 'translation_key', 'updated_at'])
            ->orderByDesc('updated_at')
            ->get();

        $archiveLocales = $posts->pluck('locale')->unique()->values()->all();

        foreach ($archiveLocales as $locale) {
            $archiveUrls = collect($archiveLocales)->mapWithKeys(fn (string $archiveLocale): array => [
                $archiveLocale => $canonicalUrl.'/'.$archiveLocale.'/blog',
            ])->all();

            $urls[] = [
                'loc' => $archiveUrls[$locale],
                'changefreq' => 'weekly',
                'priority' => '0.7',
                'alternates' => $this->alternates($archiveUrls),
            ];
        }

        foreach ($posts as $post) {
            $translations = $post->translation_key
                ? $posts->where('translation_key', $post->translation_key)
                : collect([$post]);
            $localizedUrls = $translations->mapWithKeys(fn (BlogPost $translation): array => [
                $translation->locale => $canonicalUrl.'/'.$translation->locale.'/blog/'.$translation->slug,
            ])->all();
            $urls[] = [
                'loc' => $localizedUrls[$post->locale],
                'lastmod' => $post->updated_at->toDateString(),
                'changefreq' => 'monthly',
                'priority' => '0.6',
                'alternates' => $this->alternates($localizedUrls),
            ];
        }

        $content = view('sitemap', compact('urls'))->render();

        return response($content, 200)
            ->header('Content-Type', 'application/xml; charset=UTF-8');
    }

    /**
     * @param  array<string, string>  $localizedUrls
     * @return array<string, string>
     */
    private function alternates(array $localizedUrls): array
    {
        if (isset($localizedUrls[config('seo.default_locale')])) {
            $localizedUrls['x-default'] = $localizedUrls[config('seo.default_locale')];
        }

        return $localizedUrls;
    }

    /**
     * @return array<int, string>
     */
    private function tourTranslationFields(): array
    {
        return (new Tour)->translatable;
    }
}
