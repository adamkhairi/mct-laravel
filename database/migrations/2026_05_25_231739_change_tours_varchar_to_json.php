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
        Schema::table('tours', function (Blueprint $table) {
            $table->json('duration')->nullable()->change();
            $table->json('nights')->nullable()->change();
            $table->json('languages')->nullable()->change();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('tours', function (Blueprint $table) {
            $table->string('duration')->nullable()->change();
            $table->string('nights')->nullable()->change();
            $table->string('languages')->nullable()->change();
        });
    }
};
