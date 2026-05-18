<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class TourResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'slug' => $this->slug,
            'title' => $this->title,
            'duration' => $this->duration,
            'nights' => $this->nights,
            'startingPoint' => $this->starting_point,
            'starting_point' => $this->starting_point,
            'arrivalCity' => $this->arrival_city,
            'arrival_city' => $this->arrival_city,
            'description' => $this->description,
            'url' => $this->url,
            'image' => $this->image,
            'accommodation' => $this->accommodation,
            'guide' => $this->guide,
            'tripType' => $this->trip_type,
            'trip_type' => $this->trip_type,
            'difficulty' => $this->difficulty,
            'languages' => $this->languages,
            'itinerary' => $this->itinerary,
            'included' => $this->included,
            'excluded' => $this->excluded,
            'isPublished' => $this->is_published,
            'is_published' => $this->is_published,
            'updatedAt' => $this->updated_at,
            'updated_at' => $this->updated_at,
            'createdAt' => $this->created_at,
            'created_at' => $this->created_at,
        ];
    }
}
