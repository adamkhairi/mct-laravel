<?php

namespace App\Http\Controllers;

use App\Http\Resources\TourResource;
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

        return Inertia::render('welcome', [
            'featuredTours' => TourResource::collection($featuredTours)->resolve(),
            'totalToursCount' => Tour::published()->count(),
        ]);
    }
}
