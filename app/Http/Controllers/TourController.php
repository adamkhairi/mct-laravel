<?php

namespace App\Http\Controllers;

use App\Http\Resources\TourResource;
use App\Models\Tour;
use Inertia\Inertia;
use Inertia\Response;

class TourController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('Tours/Index', [
            'tours' => TourResource::collection(
                Tour::published()
                    ->orderBy('title')
                    ->get()
            )->resolve(),
        ]);
    }

    public function show(Tour $tour): Response
    {
        // Abort if tour is not published
        if (! $tour->is_published) {
            abort(404);
        }

        return Inertia::render('Tours/Show', [
            'tour' => (new TourResource($tour))->resolve(),
        ]);
    }
}
