<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\TourResource;
use App\Models\Tour;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Inertia\Response;

class TourController extends Controller
{
    public function index(Request $request): Response
    {
        $query = Tour::query();

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

        return Inertia::render('Admin/Tours/Index', [
            'tours' => TourResource::collection(
                $query->orderBy('updated_at', 'desc')->paginate(10)->withQueryString()
            ),
            'filters' => $request->only(['search', 'destination', 'tripType', 'duration']),
        ]);
    }

    public function create(): Response
    {
        return Inertia::render('Admin/Tours/Create');
    }

    public function store(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'title' => 'required|string|min:2',
            'slug' => 'required|string|min:2|unique:tours,slug',
            'duration' => 'required|string|min:1',
            'nights' => 'required|string|min:1',
            'starting_point' => 'required|string|min:1',
            'arrival_city' => 'nullable|string',
            'description' => 'required|string|min:10',
            'image_file' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
            'is_published' => 'boolean',
            'itinerary' => 'nullable|array',
            'included' => 'nullable|array',
            'excluded' => 'nullable|array',
        ]);

        if ($request->hasFile('image_file')) {
            $path = $request->file('image_file')->store('tours', 'public');
            $validated['image'] = '/storage/'.$path;
        }

        $validated['id'] = (string) Str::uuid();

        Tour::create($validated);

        return redirect()->route('admin.tours.index')->with('success', __('Tour created successfully.'));
    }

    public function edit(Tour $tour): Response
    {
        return Inertia::render('Admin/Tours/Edit', [
            'tour' => (new TourResource($tour))->resolve(),
        ]);
    }

    public function update(Request $request, Tour $tour): RedirectResponse
    {
        $validated = $request->validate([
            'title' => 'required|string|min:2',
            'slug' => 'required|string|min:2|unique:tours,slug,'.$tour->id,
            'duration' => 'required|string|min:1',
            'nights' => 'required|string|min:1',
            'starting_point' => 'required|string|min:1',
            'arrival_city' => 'nullable|string',
            'description' => 'required|string|min:10',
            'image_file' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
            'is_published' => 'boolean',
            'itinerary' => 'nullable|array',
            'included' => 'nullable|array',
            'excluded' => 'nullable|array',
        ]);

        if ($request->hasFile('image_file')) {
            $path = $request->file('image_file')->store('tours', 'public');
            $validated['image'] = '/storage/'.$path;
        }

        $tour->update($validated);

        return redirect()->route('admin.tours.index')->with('success', __('Tour updated successfully.'));
    }

    public function destroy(Tour $tour): RedirectResponse
    {
        $tour->delete();

        return redirect()->route('admin.tours.index')->with('success', __('Tour deleted successfully.'));
    }
}
