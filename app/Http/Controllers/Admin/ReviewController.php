<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Review;
use App\Models\Tour;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Validation\Rule;
use Inertia\Inertia;
use Inertia\Response;

class ReviewController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('Admin/Reviews/Index', [
            'reviews' => Review::query()
                ->with('tour:id,slug,title')
                ->orderByDesc('updated_at')
                ->paginate(20),
        ]);
    }

    public function create(): Response
    {
        return Inertia::render('Admin/Reviews/Create', [
            'tours' => Tour::query()->orderBy('slug')->get(['id', 'slug', 'title']),
            'locales' => config('seo.locales'),
        ]);
    }

    public function store(Request $request): RedirectResponse
    {
        Review::create($this->validatedData($request));

        return Redirect::route('admin.reviews.index')->with('success', __('Review saved.'));
    }

    public function edit(Review $review): Response
    {
        return Inertia::render('Admin/Reviews/Edit', [
            'review' => $review,
            'tours' => Tour::query()->orderBy('slug')->get(['id', 'slug', 'title']),
            'locales' => config('seo.locales'),
        ]);
    }

    public function update(Request $request, Review $review): RedirectResponse
    {
        $review->update($this->validatedData($request));

        return Redirect::route('admin.reviews.index')->with('success', __('Review updated.'));
    }

    public function destroy(Review $review): RedirectResponse
    {
        $review->delete();

        return Redirect::route('admin.reviews.index')->with('success', __('Review deleted.'));
    }

    private function validatedData(Request $request): array
    {
        return $request->validate([
            'reviewer_name' => ['required', 'string', 'max:255'],
            'country' => ['required', 'string', 'max:255'],
            'flag' => ['nullable', 'string', 'max:16'],
            'trip_name' => ['required', 'string', 'max:255'],
            'quote' => ['required', 'string', 'max:5000'],
            'rating' => ['required', 'integer', 'min:1', 'max:5'],
            'locale' => ['required', Rule::in(config('seo.locales'))],
            'is_verified' => ['required', 'boolean'],
            'is_published' => ['required', 'boolean'],
            'tour_id' => ['nullable', 'string', 'exists:tours,id'],
            'reviewed_at' => ['nullable', 'date'],
        ]);
    }
}
