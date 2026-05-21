<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        // 1. Convert existing records' title and description to JSON format: {"en": "Original Value"}
        $tours = DB::table('tours')->get();
        foreach ($tours as $tour) {
            // Check if it's already JSON (in case migration is run multiple times or partially)
            $isTitleJson = is_string($tour->title) && str_starts_with(trim($tour->title), '{');
            $titleJson = $isTitleJson ? $tour->title : json_encode(['en' => $tour->title]);

            $isDescJson = is_string($tour->description) && str_starts_with(trim($tour->description), '{');
            $descJson = $isDescJson ? $tour->description : ($tour->description ? json_encode(['en' => $tour->description]) : null);

            DB::table('tours')
                ->where('id', $tour->id)
                ->update([
                    'title' => $titleJson,
                    'description' => $descJson,
                ]);
        }

        // 2. Change column types to JSON
        Schema::table('tours', function (Blueprint $table) {
            $table->json('title')->change();
            $table->json('description')->nullable()->change();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        // 1. Change columns back to string/text first (MySQL allows changing JSON to TEXT/VARCHAR)
        Schema::table('tours', function (Blueprint $table) {
            $table->string('title')->change();
            $table->text('description')->nullable()->change();
        });

        // 2. Optional: Convert JSON back to plain string for the fallback/default locale (e.g. 'en')
        $tours = DB::table('tours')->get();
        foreach ($tours as $tour) {
            $titleData = json_decode($tour->title, true);
            $descData = json_decode($tour->description, true);

            $titleString = is_array($titleData) ? ($titleData['en'] ?? array_values($titleData)[0] ?? '') : $tour->title;
            $descString = is_array($descData) ? ($descData['en'] ?? array_values($descData)[0] ?? '') : $tour->description;

            DB::table('tours')
                ->where('id', $tour->id)
                ->update([
                    'title' => $titleString,
                    'description' => $descString,
                ]);
        }
    }
};
