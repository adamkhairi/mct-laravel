<?php

use App\Http\Controllers\Admin\BlogPostController;
use App\Http\Controllers\Admin\ReviewController;
use App\Http\Controllers\BlogController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\SitemapController;
use App\Http\Controllers\TourController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('sitemap.xml', [SitemapController::class, 'index'])->name('sitemap');

Route::redirect('/', '/en', 301);
Route::redirect('about', '/en/about', 301);
Route::redirect('privacy-policy', '/en/privacy-policy', 301);
Route::redirect('cancellation-policy', '/en/cancellation-policy', 301);
Route::redirect('terms', '/en/terms', 301);
Route::redirect('blog', '/en/blog', 301);
Route::redirect('blog/{slug}', '/en/blog/{slug}', 301);
Route::redirect('tours', '/en/tours', 301);
Route::redirect('tours/{tour}', '/en/tours/{tour}', 301);

Route::prefix('{locale}')
    ->whereIn('locale', ['en', 'es', 'fr', 'de', 'it', 'pt', 'zh', 'nl', 'ru'])
    ->group(function () {
        Route::get('/', [HomeController::class, 'index'])->defaults('locale', 'en')->name('home');
        Route::inertia('about', 'About')->defaults('locale', 'en')->name('about');
        Route::inertia('privacy-policy', 'PrivacyPolicy')->defaults('locale', 'en')->name('privacy-policy');
        Route::inertia('cancellation-policy', 'CancellationPolicy')->defaults('locale', 'en')->name('cancellation-policy');
        Route::inertia('terms', 'Terms')->defaults('locale', 'en')->name('terms');
        Route::post('contact', [ContactController::class, 'store'])->defaults('locale', 'en')->name('contact.store');
        Route::get('blog', [BlogController::class, 'index'])->defaults('locale', 'en')->name('blog.index');
        Route::get('blog/{slug}', [BlogController::class, 'show'])->defaults('locale', 'en')->name('blog.show');
        Route::get('tours', [TourController::class, 'index'])->defaults('locale', 'en')->name('tours.index');
        Route::get('tours/{tour}', [TourController::class, 'show'])->defaults('locale', 'en')->name('tours.show');
    });

Route::post('contact', [ContactController::class, 'store'])->name('contact.store.legacy');

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
    Route::resource('posts', BlogPostController::class)->except('show');
    Route::resource('reviews', ReviewController::class)->except('show');
});

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', [DashboardController::class, 'index'])->name('dashboard');
});

require __DIR__.'/settings.php';
