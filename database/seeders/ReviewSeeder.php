<?php

namespace Database\Seeders;

use App\Models\Review;
use Illuminate\Database\Seeder;

class ReviewSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $reviews = [
            [
                'source_key' => 'legacy-review-sarah-m',
                'reviewer_name' => 'Sarah M.',
                'country' => 'Australia',
                'flag' => '🇦🇺',
                'trip_name' => '7-Day Grand Morocco Journey',
                'quote' => 'Honestly the best travel experience of my life. Our guide was extraordinary — he knew every hidden alley of Fes. The Sahara night camp was jaw-dropping. I cried when we had to leave.',
            ],
            [
                'source_key' => 'legacy-review-hiroshi-t',
                'reviewer_name' => 'Hiroshi T.',
                'country' => 'Japan',
                'flag' => '🇯🇵',
                'trip_name' => '5-Day Private Morocco Tour',
                'quote' => 'We were a group of 8 from Japan and the entire trip was perfectly organized. Communication was superb, every detail accounted for. We will absolutely return to Morocco.',
            ],
            [
                'source_key' => 'legacy-review-luca-maria',
                'reviewer_name' => 'Luca & Maria',
                'country' => 'Italy',
                'flag' => '🇮🇹',
                'trip_name' => '3-Day Sahara Desert Tour',
                'quote' => 'Booked the Sahara trip as a honeymoon surprise. The camp, the camel ride at sunset, the stargazing — my wife said it was the most romantic night of her life.',
            ],
            [
                'source_key' => 'legacy-review-emma-r',
                'reviewer_name' => 'Emma R.',
                'country' => 'United Kingdom',
                'flag' => '🇬🇧',
                'trip_name' => 'Custom 6-Day Solo Tour',
                'quote' => 'As a solo female traveler I was nervous, but from the first WhatsApp message the team put me at ease. I explored safely and beautifully — Marrakech, Atlas and the coast.',
            ],
            [
                'source_key' => 'legacy-review-david-k',
                'reviewer_name' => 'David K.',
                'country' => 'United States',
                'flag' => '🇺🇸',
                'trip_name' => 'Family Morocco Adventure',
                'quote' => 'Family of 5 with young kids — they handled everything. Shorter drives, kid-friendly stops, engaging activities. The children are still talking about their camel ride 6 months later!',
            ],
            [
                'source_key' => 'legacy-review-pierre-d',
                'reviewer_name' => 'Prof. Pierre D.',
                'country' => 'France',
                'flag' => '🇫🇷',
                'trip_name' => 'University Group Tour',
                'quote' => 'Our university group of 22 students had an incredible educational tour through the imperial cities. Flawlessly managed — transport, accommodation, guided visits. Absolutely professional.',
            ],
        ];

        foreach ($reviews as $review) {
            $sourceKey = $review['source_key'];
            unset($review['source_key']);

            Review::firstOrCreate(
                ['source_key' => $sourceKey],
                [
                    ...$review,
                    'rating' => 5,
                    'locale' => 'en',
                    'is_verified' => true,
                    'is_published' => true,
                ],
            );
        }
    }
}
