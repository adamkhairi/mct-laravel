<?php

namespace App\Http\Controllers;

use App\Models\Tour;
use Illuminate\Http\Response;

class SitemapController extends Controller
{
    public function index(): Response
    {
        $tours = Tour::published()->orderBy('updated_at', 'desc')->get();

        $content = view('sitemap', compact('tours'))->render();

        return response($content, 200)
            ->header('Content-Type', 'text/xml');
    }
}
