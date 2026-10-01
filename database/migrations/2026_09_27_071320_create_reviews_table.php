<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('reviews', function (Blueprint $table) {
            $table->id();
            $table->string('source_key')->nullable()->unique();
            $table->string('reviewer_name');
            $table->string('country');
            $table->string('flag', 16)->nullable();
            $table->string('trip_name');
            $table->text('quote');
            $table->unsignedTinyInteger('rating')->default(5);
            $table->string('locale', 5)->default('en');
            $table->boolean('is_verified')->default(false);
            $table->boolean('is_published')->default(false);
            $table->string('tour_id')->nullable();
            $table->date('reviewed_at')->nullable();
            $table->foreign('tour_id')->references('id')->on('tours')->nullOnDelete();
            $table->index(['locale', 'is_published', 'is_verified']);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('reviews');
    }
};
