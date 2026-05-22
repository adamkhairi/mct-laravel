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
        $columnsToConvert = [
            'starting_point',
            'arrival_city',
            'accommodation',
            'guide',
            'trip_type',
            'difficulty',
        ];

        // 1. Data Migration: Convert existing flat records to JSON formats {"en": "Value"}
        $tours = DB::table('tours')->get();
        foreach ($tours as $tour) {
            $updateData = [];

            // Convert string attributes
            foreach ($columnsToConvert as $column) {
                $val = $tour->$column;
                if ($val !== null) {
                    $isAlreadyJson = is_string($val) && str_starts_with(trim($val), '{');
                    $updateData[$column] = $isAlreadyJson ? $val : json_encode(['en' => $val]);
                }
            }

            // Convert JSON array attributes (itinerary, included, excluded)
            foreach (['itinerary', 'included', 'excluded'] as $column) {
                $val = $tour->$column;
                if ($val !== null) {
                    // $val is returned as a decoded array or a JSON string depending on driver/state
                    $decoded = is_string($val) ? json_decode($val, true) : $val;
                    if (is_array($decoded) && ! isset($decoded['en']) && ! isset($decoded['es'])) {
                        $updateData[$column] = json_encode(['en' => $decoded]);
                    }
                }
            }

            if (! empty($updateData)) {
                DB::table('tours')
                    ->where('id', $tour->id)
                    ->update($updateData);
            }
        }

        // 2. Change column schemas to JSON
        Schema::table('tours', function (Blueprint $table) {
            $table->json('starting_point')->nullable()->change();
            $table->json('arrival_city')->nullable()->change();
            $table->json('accommodation')->nullable()->change();
            $table->json('guide')->nullable()->change();
            $table->json('trip_type')->nullable()->change();
            $table->json('difficulty')->nullable()->change();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        // 1. Change columns back to string
        Schema::table('tours', function (Blueprint $table) {
            $table->string('starting_point')->nullable()->change();
            $table->string('arrival_city')->nullable()->change();
            $table->string('accommodation')->nullable()->change();
            $table->string('guide')->nullable()->change();
            $table->string('trip_type')->nullable()->change();
            $table->string('difficulty')->nullable()->change();
        });

        // 2. Rollback data structure from {"en": "Value"} to flat value
        $tours = DB::table('tours')->get();
        foreach ($tours as $tour) {
            $updateData = [];

            // Flat string rollback
            $columnsToRollback = ['starting_point', 'arrival_city', 'accommodation', 'guide', 'trip_type', 'difficulty'];
            foreach ($columnsToRollback as $column) {
                $val = $tour->$column;
                if ($val !== null) {
                    $decoded = json_decode($val, true);
                    $updateData[$column] = is_array($decoded) ? ($decoded['en'] ?? array_values($decoded)[0] ?? null) : $val;
                }
            }

            // JSON array rollback
            foreach (['itinerary', 'included', 'excluded'] as $column) {
                $val = $tour->$column;
                if ($val !== null) {
                    $decoded = is_string($val) ? json_decode($val, true) : $val;
                    if (is_array($decoded) && (isset($decoded['en']) || isset($decoded['es']))) {
                        $updateData[$column] = json_encode($decoded['en'] ?? array_values($decoded)[0] ?? []);
                    }
                }
            }

            if (! empty($updateData)) {
                DB::table('tours')
                    ->where('id', $tour->id)
                    ->update($updateData);
            }
        }
    }
};
