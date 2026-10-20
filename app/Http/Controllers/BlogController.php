<?php

namespace App\Http\Controllers;

use App\Models\BlogPost;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Inertia\Response;

class BlogController extends Controller
{
    public function index(string $locale): Response
    {
        $alternateLocales = BlogPost::published()
            ->distinct()
            ->pluck('locale')
            ->all();

        $posts = BlogPost::query()
            ->published()
            ->where('locale', $locale)
            ->select(['id', 'slug', 'locale', 'title', 'excerpt', 'image', 'published_at'])
            ->orderByDesc('published_at')
            ->paginate(9)
            ->withQueryString();

        return Inertia::render('Blog/Index', [
            'posts' => $posts,
            'alternateLocales' => $alternateLocales,
        ]);
    }

    public function show(string $locale, string $slug): Response
    {
        $post = BlogPost::query()
            ->published()
            ->where('locale', $locale)
            ->where('slug', $slug)
            ->firstOrFail();

        $translations = $post->translation_key
            ? BlogPost::published()
                ->where('translation_key', $post->translation_key)
                ->get(['locale', 'slug'])
            : collect([$post]);

        return Inertia::render('Blog/Show', [
            'post' => [
                ...$post->only(['id', 'slug', 'locale', 'title', 'excerpt', 'meta_description', 'image', 'published_at']),
                'updatedAt' => $post->updated_at->toIso8601String(),
                'bodyHtml' => Str::markdown($post->body, [
                    'html_input' => 'strip',
                    'allow_unsafe_links' => false,
                ]),
            ],
            'alternateUrls' => $translations->mapWithKeys(fn (BlogPost $translation): array => [
                $translation->locale => '/'.$translation->locale.'/blog/'.$translation->slug,
            ])->all(),
        ]);
    }
    //
}
