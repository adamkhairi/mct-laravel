<?php

namespace App\Models;

use Database\Factories\TourFactory;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tour extends Model
{
    /** @use HasFactory<TourFactory> */
    use HasFactory;

    public $incrementing = false;
    protected $keyType = 'string';

    protected $fillable = [
        'id',
        'slug',
        'title',
        'duration',
        'nights',
        'starting_point',
        'arrival_city',
        'description',
        'url',
        'image',
        'accommodation',
        'guide',
        'trip_type',
        'difficulty',
        'languages',
        'itinerary',
        'included',
        'excluded',
        'is_published',
    ];

    protected function casts(): array
    {
        return [
            'itinerary' => 'array',
            'included' => 'array',
            'excluded' => 'array',
            'is_published' => 'boolean',
        ];
    }

    /**
     * Get the route key name for Laravel route model binding.
     */
    public function getRouteKeyName(): string
    {
        return 'slug';
    }

    /**
     * Scope a query to only include published tours.
     */
    public function scopePublished($query)
    {
        return $query->where('is_published', true);
    }
}
