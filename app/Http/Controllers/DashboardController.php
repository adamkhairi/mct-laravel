<?php

namespace App\Http\Controllers;

use App\Models\Tour;
use Inertia\Inertia;
use Inertia\Response;

class DashboardController extends Controller
{
    public function index(): Response
    {
        $totalTours = Tour::count();
        $publishedTours = Tour::published()->count();
        $draftTours = Tour::where('is_published', false)->count();
        $recentTours = Tour::orderBy('created_at', 'desc')->take(5)->get(['id', 'title', 'slug', 'is_published', 'created_at']);

        return Inertia::render('dashboard', [
            'stats' => [
                'totalTours' => $totalTours,
                'publishedTours' => $publishedTours,
                'draftTours' => $draftTours,
            ],
            'recentTours' => $recentTours,
        ]);
    }
}
