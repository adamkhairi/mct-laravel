import { Link } from '@inertiajs/react';
import atlas from '@/assets/tour-atlas.jpg';
import chefchaouen from '@/assets/tour-chefchaouen.jpg';
import riad from '@/assets/tour-riad.jpg';
import camp from '@/assets/tour-sahara-camp.jpg';
import { useTranslation } from '@/hooks/use-translation';
import { tours } from '@/lib/tours';

const FEATURED_IDS = [
    'imperial-cities-tour-from-casablanca',
    'adventure-to-sahara',
    'toubkal-ascent-and-berber-villages',
    'just-for-women-starting-from-marrakech',
];

export function Tours() {
    const { __ } = useTranslation();
    const featuredTours = FEATURED_IDS.map((id) =>
        tours.find((t) => t.id === id),
    ).filter((t): t is NonNullable<typeof t> => Boolean(t));

    const getSpan = (index: number) => {
        return index === 0 || index === 3 ? 'md:col-span-7' : 'md:col-span-5';
    };

    const getRatio = (index: number) => {
        return index === 0 || index === 3
            ? 'aspect-[4/5] md:aspect-[16/10]'
            : 'aspect-[4/5]';
    };

    return (
        <section id="tours" className="bg-ivory px-6 py-24 md:px-10 md:py-32">
            <div className="mx-auto max-w-7xl">
                <div className="mb-20 flex flex-col items-end justify-between gap-8 md:mb-24 md:flex-row">
                    <div className="max-w-md">
                        <span className="eyebrow mb-6 block text-terracotta">
                            {__('Volume I')}
                        </span>
                        <h2 className="font-display text-4xl leading-[1.05] font-bold md:text-5xl">
                            {__('Curated Tours')}
                        </h2>
                        <p className="mt-6 leading-relaxed text-pretty text-indigo-ink/60">
                            {__(
                                "We don't do catalogs. We design narratives. Each journey is a singular response to your curiosities.",
                            )}
                        </p>
                    </div>
                    <div className="eyebrow text-indigo-ink/40">
                        {featuredTours.length.toString().padStart(2, '0')}{' '}
                        {__('Featured Itineraries')}
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-12">
                    {featuredTours.map((tour, i) => (
                        <Link
                            key={tour.id}
                            href={`/tours/${tour.id}`}
                            className={`${getSpan(i)} group cursor-pointer`}
                        >
                            <article>
                                <div
                                    className={`mb-6 overflow-hidden ${getRatio(i)} relative bg-indigo-ink/5 shadow-sm`}
                                >
                                    <img
                                        src={
                                            i === 0
                                                ? riad
                                                : i === 1
                                                  ? camp
                                                  : i === 2
                                                    ? atlas
                                                    : chefchaouen
                                        }
                                        alt={__(tour.title)}
                                        className="h-full w-full object-cover transition-transform duration-[1400ms] ease-[var(--ease-out-expo)] group-hover:scale-[1.04]"
                                    />
                                </div>
                                <div className="flex items-start justify-between gap-6">
                                    <div>
                                        <span className="eyebrow mb-2 block text-terracotta">
                                            {__(tour.startingPoint)} &middot;{' '}
                                            {__(tour.tripType?.split(',')[0])}
                                        </span>
                                        <h3 className="font-display text-2xl leading-tight md:text-3xl">
                                            {__(tour.title)}
                                        </h3>
                                    </div>
                                    <span className="mt-1 shrink-0 font-mono text-[11px] text-indigo-ink/40">
                                        {String(i + 1).padStart(2, '0')}{' '}
                                        &middot; {__(tour.duration)}
                                    </span>
                                </div>
                            </article>
                        </Link>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <Link
                        href="/tours"
                        className="inline-flex items-center gap-2 font-medium text-terracotta transition-colors hover:text-terracotta/80"
                    >
                        {__('View All :count Tours', {
                            count: tours.length.toString(),
                        })}
                        <span className="text-sm">→</span>
                    </Link>
                </div>
            </div>
        </section>
    );
}
