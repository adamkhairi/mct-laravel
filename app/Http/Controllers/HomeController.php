<?php

namespace App\Http\Controllers;

use App\Http\Resources\TourResource;
use App\Models\Review;
use App\Models\Tour;
use Inertia\Inertia;
use Inertia\Response;

class HomeController extends Controller
{
    public function index(): Response
    {
        $featuredIds = [
            'andalusian-heritage-tour',
            'moorish-heritage-desert-tour-11-days',
            'northern-morocco-grand-loop-7-days',
            'south-morocco-tour-6-days',
        ];

        $featuredTours = Tour::published()
            ->whereIn('id', $featuredIds)
            ->get()
            ->sortBy(function ($tour) use ($featuredIds) {
                return array_search($tour->id, $featuredIds);
            })
            ->values();

        $reviews = Review::published()
            ->where('locale', app()->getLocale())
            ->orderByDesc('reviewed_at')
            ->orderByDesc('id')
            ->limit(6)
            ->get();

        if ($reviews->isEmpty() && app()->getLocale() !== 'en') {
            $reviews = Review::published()
                ->where('locale', 'en')
                ->orderByDesc('reviewed_at')
                ->orderByDesc('id')
                ->limit(6)
                ->get();
        }

        return Inertia::render('welcome', [
            'featuredTours' => TourResource::collection($featuredTours)->resolve(),
            'totalToursCount' => Tour::published()->count(),
            'homepageReviews' => $reviews->map(fn (Review $review): array => [
                'id' => $review->id,
                'name' => $review->reviewer_name,
                'country' => $review->country,
                'flag' => $review->flag,
                'trip' => $review->trip_name,
                'quote' => $review->quote,
                'rating' => $review->rating,
                'verified' => $review->is_verified,
            ])->all(),
        ]);
    }
}
