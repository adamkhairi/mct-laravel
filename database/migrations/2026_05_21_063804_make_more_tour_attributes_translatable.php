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
        $fields = [
            'starting_point',
            'arrival_city',
            'accommodation',
            'guide',
            'trip_type',
            'difficulty',
            'itinerary',
            'included',
            'excluded',
        ];

        // 1. Convert existing records to JSON format: {"en": original_value}
        $tours = DB::table('tours')->get();
        foreach ($tours as $tour) {
            $updates = [];
            foreach ($fields as $field) {
                $value = $tour->$field;
                if ($value === null) {
                    continue;
                }

                // If it's already a JSON string that looks like a translatable object, skip it
                if (is_string($value) && str_starts_with(trim($value), '{"')) {
                    $decoded = json_decode($value, true);
                    if (is_array($decoded) && (isset($decoded['en']) || isset($decoded['es']))) {
                        continue;
                    }
                }

                // If it's already an array/object (from JSON columns like itinerary), it needs to be wrapped
                if (is_array($value) || is_object($value)) {
                    $updates[$field] = json_encode(['en' => $value]);
                } else {
                    // It's a plain string
                    $updates[$field] = json_encode(['en' => $value]);
                }
            }

            if (!empty($updates)) {
                DB::table('tours')->where('id', $tour->id)->update($updates);
            }
        }

        // 2. Change column types to JSON
        Schema::table('tours', function (Blueprint $table) {
            $table->json('starting_point')->nullable()->change();
            $table->json('arrival_city')->nullable()->change();
            $table->json('accommodation')->nullable()->change();
            $table->json('guide')->nullable()->change();
            $table->json('trip_type')->nullable()->change();
            $table->json('difficulty')->nullable()->change();
            $table->json('itinerary')->nullable()->change();
            $table->json('included')->nullable()->change();
            $table->json('excluded')->nullable()->change();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('tours', function (Blueprint $table) {
            $table->string('starting_point')->nullable()->change();
            $table->string('arrival_city')->nullable()->change();
            $table->string('accommodation')->nullable()->change();
            $table->string('guide')->nullable()->change();
            $table->string('trip_type')->nullable()->change();
            $table->string('difficulty')->nullable()->change();
            $table->json('itinerary')->nullable()->change();
            $table->json('included')->nullable()->change();
            $table->json('excluded')->nullable()->change();
        });

        $tours = DB::table('tours')->get();
        $fields = ['starting_point', 'arrival_city', 'accommodation', 'guide', 'trip_type', 'difficulty'];

        foreach ($tours as $tour) {
            $updates = [];
            foreach (['starting_point', 'arrival_city', 'accommodation', 'guide', 'trip_type', 'difficulty', 'itinerary', 'included', 'excluded'] as $field) {
                $data = json_decode($tour->$field, true);
                if (is_array($data) && isset($data['en'])) {
                    if (in_array($field, ['itinerary', 'included', 'excluded'])) {
                        $updates[$field] = json_encode($data['en']);
                    } else {
                        $updates[$field] = $data['en'];
                    }
                }
            }
            if (!empty($updates)) {
                DB::table('tours')->where('id', $tour->id)->update($updates);
            }
        }
    }
};
