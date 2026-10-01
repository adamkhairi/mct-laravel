<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\BlogPost;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Validation\Rule;
use Inertia\Inertia;
use Inertia\Response;

class BlogPostController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('Admin/Blog/Index', [
            'posts' => BlogPost::query()
                ->with('author:id,name')
                ->orderByDesc('updated_at')
                ->paginate(15),
        ]);
    }

    public function create(Request $request): Response
    {
        return Inertia::render('Admin/Blog/Create', [
            'locale' => $request->string('locale')->toString() ?: config('seo.default_locale'),
            'translationKey' => $request->input('translation_key'),
        ]);
    }

    public function store(Request $request): RedirectResponse
    {
        $validated = $this->validatedData($request);
        $validated['user_id'] = $request->user()->id;

        if ($validated['status'] === 'published' && empty($validated['published_at'])) {
            $validated['published_at'] = now();
        }

        BlogPost::create($validated);

        return Redirect::route('admin.posts.index')->with('success', __('Article saved.'));
    }

    public function edit(BlogPost $post): Response
    {
        return Inertia::render('Admin/Blog/Edit', ['post' => $post]);
    }

    public function update(Request $request, BlogPost $post): RedirectResponse
    {
        $validated = $this->validatedData($request, $post);

        if ($validated['status'] === 'published' && empty($validated['published_at'])) {
            $validated['published_at'] = now();
        }

        $post->update($validated);

        return Redirect::route('admin.posts.index')->with('success', __('Article updated.'));
    }

    public function destroy(BlogPost $post): RedirectResponse
    {
        $post->delete();

        return Redirect::route('admin.posts.index')->with('success', __('Article deleted.'));
    }

    private function validatedData(Request $request, ?BlogPost $post = null): array
    {
        return $request->validate([
            'slug' => [
                'required', 'string', 'max:255', 'alpha_dash',
                Rule::unique('blog_posts', 'slug')
                    ->where(fn ($query) => $query->where('locale', $request->input('locale')))
                    ->ignore($post?->id),
            ],
            'locale' => ['required', Rule::in(config('seo.locales'))],
            'translation_key' => ['nullable', 'uuid'],
            'title' => ['required', 'string', 'max:255'],
            'excerpt' => ['nullable', 'string', 'max:1000'],
            'body' => ['required', 'string'],
            'meta_description' => ['nullable', 'string', 'max:320'],
            'image' => ['nullable', 'url:https', 'max:2048'],
            'status' => ['required', Rule::in(['draft', 'published'])],
            'published_at' => ['nullable', 'date'],
        ]);
    }
}
