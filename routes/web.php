<?php

use App\Http\Controllers\ContactController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\SitemapController;
use App\Http\Controllers\TourController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('sitemap.xml', [SitemapController::class, 'index'])->name('sitemap');

Route::inertia('/', 'welcome')->name('home');

Route::post('contact', [ContactController::class, 'store'])->name('contact.store');

Route::get('tours', [TourController::class, 'index'])->name('tours.index');
Route::get('tours/{tour}', [TourController::class, 'show'])->name('tours.show');

Route::post('language', function (Request $request) {
    $request->validate([
        'locale' => 'required|string|in:en,es,fr,de,it,pt,zh,nl,ru',
    ]);
    session(['locale' => $request->locale]);

    return back();
})->name('language.update');

Route::middleware(['auth', 'admin'])->prefix('admin')->name('admin.')->group(function () {
    Route::get('/', function () {
        return redirect()->route('admin.tours.index');
    })->name('dashboard');

    Route::get('tours', [App\Http\Controllers\Admin\TourController::class, 'index'])->name('tours.index');
    Route::get('tours/create', [App\Http\Controllers\Admin\TourController::class, 'create'])->name('tours.create');
    Route::post('tours', [App\Http\Controllers\Admin\TourController::class, 'store'])->name('tours.store');
    Route::get('tours/{tour}/edit', [App\Http\Controllers\Admin\TourController::class, 'edit'])->name('tours.edit');
    Route::put('tours/{tour}', [App\Http\Controllers\Admin\TourController::class, 'update'])->name('tours.update');
    Route::delete('tours/{tour}', [App\Http\Controllers\Admin\TourController::class, 'destroy'])->name('tours.destroy');
});

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', [DashboardController::class, 'index'])->name('dashboard');
});

require __DIR__.'/settings.php';
