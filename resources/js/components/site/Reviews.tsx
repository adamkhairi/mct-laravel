import { Heart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useTranslation } from '@/hooks/use-translation';

interface ReviewItem {
    id: number;
    name: string;
    country: string;
    flag: string | null;
    trip: string;
    quote: string;
    rating: number;
    verified: boolean;
}

export function Reviews({ reviews }: { reviews: ReviewItem[] }) {
    const { __ } = useTranslation();

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

                {reviews.length > 0 ? (
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
                    {reviews.map((review, index) => (
                        <Card
                            key={review.id}
                            className="border-indigo-ink/10/50 animate-fade-up rounded-none bg-ivory/50 transition-all duration-500 hover:-translate-y-1 hover:border-terracotta/30"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <CardContent className="p-8">
                                <div className="mb-6 flex gap-1">
                                    {Array.from({ length: review.rating }, (_, i) => (
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
                                    &ldquo;{__(review.quote)}&rdquo;
                                </blockquote>
                                <div className="flex items-center gap-4">
                                    <div className="flex h-11 w-11 items-center justify-center bg-terracotta text-sm font-bold text-ivory">
                                        {review.name.charAt(0)}
                                    </div>
                                    <div>
                                        <div className="text-sm font-bold text-indigo-ink">
                                            {review.name}
                                        </div>
                                        <div className="flex items-center gap-1.5 font-mono text-[11px] tracking-wider text-indigo-ink/40 uppercase">
                                            {review.flag && <span>{review.flag}</span>}
                                            {__(review.country)}
                                        </div>
                                        <div className="mt-0.5 text-[11px] font-bold tracking-wide text-terracotta">
                                            {__(review.trip)}
                                        </div>
                                        {review.verified && (
                                            <span className="mt-1 block text-[10px] text-green-700">
                                                {__('Verified')}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
                ) : (
                    <p className="border-y border-indigo-ink/10 py-8 text-center text-indigo-ink/55">
                        {__('No traveler reviews are available yet.')}
                    </p>
                )}

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
