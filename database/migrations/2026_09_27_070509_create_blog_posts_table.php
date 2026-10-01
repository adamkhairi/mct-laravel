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
        Schema::create('blog_posts', function (Blueprint $table) {
            $table->id();
            $table->string('slug');
            $table->string('locale', 5);
            $table->uuid('translation_key')->nullable();
            $table->string('title');
            $table->text('excerpt')->nullable();
            $table->longText('body');
            $table->string('meta_description', 320)->nullable();
            $table->string('image')->nullable();
            $table->string('status', 16)->default('draft');
            $table->timestamp('published_at')->nullable();
            $table->foreignId('user_id')->nullable()->constrained()->nullOnDelete();
            $table->unique(['locale', 'slug']);
            $table->index(['locale', 'status', 'published_at']);
            $table->index(['translation_key', 'locale']);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('blog_posts');
    }
};
