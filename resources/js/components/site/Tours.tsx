import { ArrowRight } from 'lucide-react';
import { Link } from '@inertiajs/react';
import { useTranslation } from '@/hooks/use-translation';

interface Tour {
    id: string;
    slug: string;
    title: string;
    duration: string;
    startingPoint: string;
    tripType: string;
    image: string;
}

interface ToursProps {
    featuredTours: Tour[];
    totalToursCount: number;
}

export function Tours({ featuredTours, totalToursCount }: ToursProps) {
    const { __ } = useTranslation();

    if (!featuredTours.length) return null;

    const [hero, second, third, ...extras] = featuredTours;

    return (
        <section id="tours" className="bg-sand px-6 py-24 md:px-10 md:py-32">
            <div className="mx-auto max-w-7xl">

                {/* ── Section header ── */}
                <div className="mb-16 flex flex-col gap-8 md:mb-20 md:flex-row md:items-end md:justify-between">
                    <div>
                        <span className="eyebrow mb-5 flex items-center gap-3 text-terracotta">
                            <span className="h-px w-8 bg-terracotta" />
                            {__('Volume I')}
                        </span>
                        <h2 className="font-display text-4xl leading-[1.0] font-bold text-indigo-ink md:text-6xl">
                            {__('Curated')}
                            <br />
                            <span className="font-normal italic text-indigo-ink/40">
                                {__('Tours')}
                            </span>
                        </h2>
                    </div>
                    <div className="flex max-w-xs flex-col gap-4 md:items-end">
                        <p className="leading-relaxed text-indigo-ink/55 md:text-right">
                            {__(
                                "We don't do catalogs. We design narratives. Each journey is a singular response to your curiosities.",
                            )}
                        </p>
                        <span className="eyebrow text-indigo-ink/30">
                            {featuredTours.length.toString().padStart(2, '0')}{' '}
                            {__('Featured Itineraries')}
                        </span>
                    </div>
                </div>

                {/* ── Row 1: Hero (tall portrait) + right column (2 stacked landscape) ──
                    On desktop the outer div is a fixed 640px tall grid.
                    Hero fills the full left column height.
                    Right cards each fill exactly half of that height.
                ── */}
                <div className="grid grid-cols-1 gap-2 md:h-[640px] md:grid-cols-[1.15fr_1fr] md:gap-2">

                    {/* Hero — portrait on mobile, full height on desktop */}
                    {hero && (
                        <TourCard
                            tour={hero}
                            index={0}
                            className="aspect-[3/4] md:aspect-auto md:h-full"
                        />
                    )}

                    {/* Right column — two landscape cards sharing the same height */}
                    <div className="grid grid-cols-1 gap-2 md:h-full md:grid-rows-2">
                        {second && (
                            <TourCard
                                tour={second}
                                index={1}
                                className="aspect-[4/3] md:aspect-auto md:h-full"
                            />
                        )}
                        {third && (
                            <TourCard
                                tour={third}
                                index={2}
                                className="aspect-[4/3] md:aspect-auto md:h-full"
                            />
                        )}
                    </div>
                </div>

                {/* ── Row 2: remaining cards — fixed height, equal widths ── */}
                {extras.length > 0 && (
                    <div
                        className={`mt-2 grid grid-cols-1 gap-2 md:h-[380px] md:grid-cols-${Math.min(extras.length, 3)}`}
                    >
                        {extras.slice(0, 3).map((tour, i) => (
                            <TourCard
                                key={tour.id}
                                tour={tour}
                                index={i + 3}
                                className="aspect-[4/3] md:aspect-auto md:h-full"
                            />
                        ))}
                    </div>
                )}

                {/* ── CTA ── */}
                <div className="mt-10 md:mt-12">
                    <Link
                        href="/tours"
                        className="group flex items-center justify-between border border-indigo-ink/12 bg-transparent px-8 py-6 transition-all duration-500 hover:border-terracotta hover:bg-terracotta"
                    >
                        <span className="font-display text-xl text-indigo-ink transition-colors duration-500 group-hover:text-ivory md:text-2xl">
                            {__('Explore all :count tours', {
                                count: totalToursCount.toString(),
                            })}
                        </span>
                        <span className="flex h-10 w-10 items-center justify-center border border-indigo-ink/15 text-indigo-ink transition-all duration-500 group-hover:border-ivory/30 group-hover:text-ivory">
                            <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-0.5" />
                        </span>
                    </Link>
                </div>
            </div>
        </section>
    );
}

/* ── Individual tour card ── */
interface TourCardProps {
    tour: Tour;
    index: number;
    className?: string;
}

function TourCard({ tour, index, className = '' }: TourCardProps) {
    const { __ } = useTranslation();

    return (
        <Link
            href={`/tours/${tour.slug}`}
            className={`group relative block overflow-hidden bg-indigo-ink/10 ${className}`}
        >
            {/* Image */}
            <img
                src={tour.image}
                alt={__(tour.title)}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1600ms] ease-[var(--ease-out-expo)] group-hover:scale-[1.05]"
            />

            {/* Base gradient — readable text in all states */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-black/0" />

            {/* Hover vignette — deepens atmosphere */}
            <div className="absolute inset-0 bg-black/0 transition-colors duration-700 group-hover:bg-black/20" />

            {/* Top bar */}
            <div className="absolute inset-x-0 top-0 flex items-start justify-between p-5">
                <span className="font-mono text-[10px] tracking-[0.2em] text-white/35">
                    {String(index + 1).padStart(2, '0')}
                </span>
                <span className="eyebrow bg-black/25 px-3 py-1.5 text-[9px] text-white/65 backdrop-blur-sm">
                    {__(tour.duration)}
                </span>
            </div>

            {/* Bottom content */}
            <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
                <span className="eyebrow mb-2 block text-[9px] text-terracotta/80">
                    {__(tour.startingPoint)}
                    {tour.tripType && (
                        <> · {__(tour.tripType.split(',')[0] ?? '')}</>
                    )}
                </span>

                <h3 className="font-display text-xl leading-[1.1] text-ivory md:text-2xl">
                    {__(tour.title)}
                </h3>

                {/* Slide-up CTA on hover */}
                <div className="mt-3 flex translate-y-2 items-center gap-2 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <span className="eyebrow text-[9px] text-ivory/60">
                        {__('View itinerary')}
                    </span>
                    <ArrowRight className="h-3 w-3 text-ivory/60" />
                </div>
            </div>
        </Link>
    );
}
