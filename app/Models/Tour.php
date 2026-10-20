<?php

namespace App\Models;

use Database\Factories\TourFactory;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Spatie\Translatable\HasTranslations;

class Tour extends Model
{
    /** @use HasFactory<TourFactory> */
    use HasFactory;

    use HasTranslations;

    public $incrementing = false;

    protected $keyType = 'string';

    public array $translatable = [
        'title',
        'description',
        'duration',
        'nights',
        'starting_point',
        'arrival_city',
        'accommodation',
        'guide',
        'trip_type',
        'difficulty',
        'languages',
        'itinerary',
        'included',
        'excluded',
    ];

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

    public function reviews(): HasMany
    {
        return $this->hasMany(Review::class);
    }

    /**
     * Return locales whose explicitly stored tour fields are complete.
     *
     * @return array<int, string>
     */
    public function availableLocales(): array
    {
        $availableLocales = [];
        $verifiedLocales = config('seo.verified_tour_translations.'.$this->slug, []);
        $translationsByField = collect($this->translatable)
            ->mapWithKeys(fn (string $field): array => [$field => $this->getTranslations($field)]);

        foreach (config('seo.locales', []) as $locale) {
            if ($locale !== config('seo.default_locale') && ! in_array($locale, $verifiedLocales, true)) {
                continue;
            }

            $hasRequiredContent = true;

            foreach (['title', 'description'] as $requiredField) {
                if (! $this->hasTranslationValue($translationsByField[$requiredField][$locale] ?? null)) {
                    $hasRequiredContent = false;
                    break;
                }
            }

            if (! $hasRequiredContent) {
                continue;
            }

            foreach ($translationsByField as $translations) {
                $englishValue = $translations['en'] ?? null;

                if ($this->hasTranslationValue($englishValue)
                    && ! $this->hasTranslationValue($translations[$locale] ?? null)) {
                    $hasRequiredContent = false;
                    break;
                }
            }

            if ($hasRequiredContent) {
                $availableLocales[] = $locale;
            }
        }

        return $availableLocales;
    }

    private function hasTranslationValue(mixed $value): bool
    {
        if (is_string($value)) {
            return trim($value) !== '';
        }

        if (is_array($value)) {
            return $value !== [] && collect($value)->every(fn (mixed $item): bool => $this->hasTranslationValue($item));
        }

        return $value !== null;
    }

    /**
     * Scope a query to only include published tours.
     */
    public function scopePublished($query)
    {
        return $query->where('is_published', true);
    }
}
