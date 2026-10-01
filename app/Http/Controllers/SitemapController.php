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
            ['path' => '/blog', 'changefreq' => 'weekly', 'priority' => '0.7'],
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
                    'lastmod' => now()->toDateString(),
                    'changefreq' => $page['changefreq'],
                    'priority' => $page['priority'],
                    'alternates' => [...$localizedUrls, 'x-default' => $localizedUrls[config('seo.default_locale')]],
                ];
            }
        }

        $tours = Tour::published()
            ->select(['slug', 'updated_at'])
            ->orderByDesc('updated_at')
            ->get();

        foreach ($tours as $tour) {
            $localizedUrls = [];

            foreach ($locales as $locale) {
                $localizedUrls[$locale] = $canonicalUrl.'/'.$locale.'/tours/'.$tour->slug;
            }

            foreach ($localizedUrls as $url) {
                $urls[] = [
                    'loc' => $url,
                    'lastmod' => $tour->updated_at->toDateString(),
                    'changefreq' => 'monthly',
                    'priority' => '0.7',
                    'alternates' => [...$localizedUrls, 'x-default' => $localizedUrls[config('seo.default_locale')]],
                ];
            }
        }

        $posts = BlogPost::published()
            ->select(['slug', 'locale', 'translation_key', 'updated_at'])
            ->orderByDesc('updated_at')
            ->get();

        foreach ($posts as $post) {
            $translations = $post->translation_key
                ? $posts->where('translation_key', $post->translation_key)
                : collect([$post]);
            $localizedUrls = $translations->mapWithKeys(fn (BlogPost $translation): array => [
                $translation->locale => $canonicalUrl.'/'.$translation->locale.'/blog/'.$translation->slug,
            ])->all();
            $alternates = $localizedUrls;

            if (isset($localizedUrls[config('seo.default_locale')])) {
                $alternates['x-default'] = $localizedUrls[config('seo.default_locale')];
            }

            $urls[] = [
                'loc' => $localizedUrls[$post->locale],
                'lastmod' => $post->updated_at->toDateString(),
                'changefreq' => 'monthly',
                'priority' => '0.6',
                'alternates' => $alternates,
            ];
        }

        $content = view('sitemap', compact('urls'))->render();

        return response($content, 200)
            ->header('Content-Type', 'application/xml; charset=UTF-8');
    }
}
