<?php

namespace App\Http\Controllers;

use App\Http\Resources\TourResource;
use App\Models\Tour;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class TourController extends Controller
{
    public function index(Request $request): Response
    {
        $query = Tour::published();

        if ($request->filled('search')) {
            $search = $request->input('search');
            $query->where(function ($q) use ($search) {
                $q->where('title', 'like', "%{$search}%")
                  ->orWhere('description', 'like', "%{$search}%")
                  ->orWhere('starting_point', 'like', "%{$search}%");
            });
        }

        if ($request->filled('destination') && $request->input('destination') !== 'all') {
            $dest = $request->input('destination');
            $query->where(function ($q) use ($dest) {
                $q->where('starting_point', $dest)
                  ->orWhere('arrival_city', $dest);
            });
        }

        if ($request->filled('tripType') && $request->input('tripType') !== 'all') {
            $query->where('trip_type', $request->input('tripType'));
        }

        if ($request->filled('duration') && $request->input('duration') !== 'all') {
            $duration = $request->input('duration');
            if ($duration === 'short') {
                $query->whereRaw("CAST(SUBSTRING_INDEX(duration, ' ', 1) AS UNSIGNED) BETWEEN 1 AND 4");
            } elseif ($duration === 'medium') {
                $query->whereRaw("CAST(SUBSTRING_INDEX(duration, ' ', 1) AS UNSIGNED) BETWEEN 5 AND 9");
            } elseif ($duration === 'long') {
                $query->whereRaw("CAST(SUBSTRING_INDEX(duration, ' ', 1) AS UNSIGNED) >= 10");
            }
        }

        return Inertia::render('Tours/Index', [
            'tours' => TourResource::collection(
                $query->orderBy('title')->paginate(9)->withQueryString()
            ),
            'filters' => $request->only(['search', 'destination', 'tripType', 'duration']),
        ]);
    }

    public function show(Tour $tour): Response
    {
        if (! $tour->is_published && (! auth()->check() || auth()->user()->role !== 'ADMIN')) {
            abort(404);
        }

        return Inertia::render('Tours/Show', [
            'tour' => (new TourResource($tour))->resolve(),
        ]);
    }
}
