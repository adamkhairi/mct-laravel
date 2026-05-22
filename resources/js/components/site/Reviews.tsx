import { Heart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useTranslation } from '@/hooks/use-translation';

export function Reviews() {
    const { __ } = useTranslation();
    const reviews = [
        {
            name: 'Sarah M.',
            country: __('Australia'),
            flag: '🇦🇺',
            trip: __('7-Day Grand Morocco Journey'),
            quote: __(
                'Honestly the best travel experience of my life. Our guide was extraordinary — he knew every hidden alley of Fes. The Sahara night camp was jaw-dropping. I cried when we had to leave.',
            ),
            initial: 'S',
        },
        {
            name: 'Hiroshi T.',
            country: __('Japan'),
            flag: '🇯🇵',
            trip: __('5-Day Private Morocco Tour'),
            quote: __(
                'We were a group of 8 from Japan and the entire trip was perfectly organized. Communication was superb, every detail accounted for. We will absolutely return to Morocco.',
            ),
            initial: 'H',
        },
        {
            name: 'Luca & Maria',
            country: __('Italy'),
            flag: '🇮🇹',
            trip: __('3-Day Sahara Desert Tour'),
            quote: __(
                'Booked the Sahara trip as a honeymoon surprise. The camp, the camel ride at sunset, the stargazing — my wife said it was the most romantic night of her life.',
            ),
            initial: 'L',
        },
        {
            name: 'Emma R.',
            country: __('United Kingdom'),
            flag: '🇬🇧',
            trip: __('Custom 6-Day Solo Tour'),
            quote: __(
                'As a solo female traveler I was nervous, but from the first WhatsApp message the team put me at ease. I explored safely and beautifully — Marrakech, Atlas and the coast.',
            ),
            initial: 'E',
        },
        {
            name: 'David K.',
            country: __('United States'),
            flag: '🇺🇸',
            trip: __('Family Morocco Adventure'),
            quote: __(
                'Family of 5 with young kids — they handled everything. Shorter drives, kid-friendly stops, engaging activities. The children are still talking about their camel ride 6 months later!',
            ),
            initial: 'D',
        },
        {
            name: 'Prof. Pierre D.',
            country: __('France'),
            flag: '🇫🇷',
            trip: __('University Group Tour'),
            quote: __(
                'Our university group of 22 students had an incredible educational tour through the imperial cities. Flawlessly managed — transport, accommodation, guided visits. Absolutely professional.',
            ),
            initial: 'P',
        },
    ];

    return (
        <section id="reviews" className="bg-sand px-6 py-24 md:px-10 md:py-32">
            <div className="mx-auto max-w-7xl">
                <div className="animate-fade-up mb-16 text-center md:mb-24">
                    <span className="eyebrow mb-6 flex items-center justify-center gap-2 text-terracotta">
                        <Heart className="h-3 w-3 fill-terracotta" />
                        {__('Traveler Reviews')}
                    </span>
                    <h2 className="mb-8 font-display text-4xl leading-tight font-bold md:text-6xl">
                        {__('Loved by Travelers')}{' '}
                        <span className="font-normal text-terracotta italic">
                            {__('Worldwide')}
                        </span>
                    </h2>
                    <p className="mx-auto max-w-2xl leading-relaxed text-indigo-ink/60">
                        {__(
                            "Honest reviews from real guests who've explored Morocco with our team.",
                        )}
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
                    {reviews.map((review, index) => (
                        <Card
                            key={index}
                            className="border-indigo-ink/10/50 animate-fade-up rounded-none bg-ivory/50 transition-all duration-500 hover:-translate-y-1 hover:border-terracotta/30"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <CardContent className="p-8">
                                <div className="mb-6 flex gap-1">
                                    {[...Array(5)].map((_, i) => (
                                        <svg
                                            key={i}
                                            className="h-3 w-3 fill-green-600"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                                <blockquote className="mb-8 leading-relaxed text-indigo-ink/75 italic">
                                    &ldquo;{review.quote}&rdquo;
                                </blockquote>
                                <div className="flex items-center gap-4">
                                    <div className="flex h-11 w-11 items-center justify-center bg-terracotta text-sm font-bold text-ivory">
                                        {review.initial}
                                    </div>
                                    <div>
                                        <div className="text-sm font-bold text-indigo-ink">
                                            {review.name}
                                        </div>
                                        <div className="flex items-center gap-1.5 font-mono text-[11px] tracking-wider text-indigo-ink/40 uppercase">
                                            <span>{review.flag}</span>
                                            {review.country}
                                        </div>
                                        <div className="mt-0.5 text-[11px] font-bold tracking-wide text-terracotta">
                                            {review.trip}
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div className="animate-fade-up mt-20 flex flex-wrap items-center justify-center gap-12 border-t border-indigo-ink/10 pt-12 [animation-delay:800ms] md:gap-24">
                    <div className="text-center">
                        <div className="font-display text-4xl font-black text-terracotta">
                            4.9/5
                        </div>
                        <div className="eyebrow mt-2 text-indigo-ink/40">
                            {__('Overall Rating')}
                        </div>
                    </div>
                    <div className="hidden h-12 w-px bg-border md:block" />
                    <div className="text-center">
                        <div className="font-display text-4xl font-black text-terracotta">
                            500+
                        </div>
                        <div className="eyebrow mt-2 text-indigo-ink/40">
                            {__('Verified Reviews')}
                        </div>
                    </div>
                    <div className="hidden h-12 w-px bg-border md:block" />
                    <div className="text-center">
                        <div className="font-display text-4xl font-black text-terracotta">
                            40+
                        </div>
                        <div className="eyebrow mt-2 text-indigo-ink/40">
                            {__('Countries')}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
