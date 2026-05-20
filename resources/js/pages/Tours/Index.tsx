import { useState, useMemo } from 'react';
import { Link } from '@inertiajs/react';
import { Search, X, SlidersHorizontal, ChevronLeft, ChevronRight } from 'lucide-react';
import SiteLayout from '@/layouts/site-layout';
import { Header } from '@/components/site/Header';
import { Footer } from '@/components/site/Footer';
import { Input } from '@/components/ui/input';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { MetaTags } from '@/components/site/MetaTags';

const DESCRIPTION =
    "Discover our curated collection of bespoke journeys through Morocco's imperial cities, Sahara deserts, and mountain villages.";

const DESTINATIONS = ['Casablanca', 'Fes', 'Marrakech', 'Tangier'];
const TRIP_TYPES = [
    'Adventure & Culture',
    'Cultural & Historical',
    'Desert tours',
    'Just for women',
    'Long-tours',
    'Short tours',
    'Spiritual & Wellness',
];
const DURATIONS = [
    { label: 'Short (1-4 Days)', value: 'short', min: 1, max: 4 },
    { label: 'Medium (5-9 Days)', value: 'medium', min: 5, max: 9 },
    { label: 'Extended (10+ Days)', value: 'long', min: 10, max: 99 },
];

function TourImage({
    src,
    alt,
    className,
    priority,
}: {
    src: string;
    alt: string;
    className?: string;
    priority?: boolean;
}) {
    const resolvedSrc = useMemo(() => {
        if (!src) return '/assets/tour-sahara-camp.jpg';
        if (src.startsWith('http')) return src;
        if (src.startsWith('/')) return src;
        return `/assets/${src}`;
    }, [src]);

    return <img src={resolvedSrc} alt={alt} className={className} />;
}

interface PaginationLink {
    url: string | null;
    label: string;
    active: boolean;
}

interface PaginatedTours {
    data: any[];
    meta: {
        current_page: number;
        last_page: number;
        per_page: number;
        total: number;
        links: PaginationLink[];
    };
}

export default function Index({ tours: toursPaginated }: { tours: PaginatedTours }) {
    const tours = toursPaginated?.data || [];
    const meta = toursPaginated?.meta;
    const paginationLinks = meta?.links || [];
    const hasMultiplePages = meta?.last_page > 1;

    const [searchQuery, setSearchQuery] = useState('');
    const [destination, setDestination] = useState<string>('all');
    const [tripType, setTripType] = useState<string>('all');
    const [duration, setDuration] = useState<string>('all');

    const activeFiltersCount =
        (destination !== 'all' ? 1 : 0) +
        (tripType !== 'all' ? 1 : 0) +
        (duration !== 'all' ? 1 : 0) +
        (searchQuery !== '' ? 1 : 0);

    const clearFilters = () => {
        setSearchQuery('');
        setDestination('all');
        setTripType('all');
        setDuration('all');
    };

    const filteredTours = useMemo(() => {
        return tours.filter((tour) => {
            if (searchQuery) {
                const query = searchQuery.toLowerCase();
                const matchesTitle = tour.title.toLowerCase().includes(query);
                const matchesDesc =
                    tour.description?.toLowerCase().includes(query) ?? false;
                if (!matchesTitle && !matchesDesc) return false;
            }

            if (destination !== 'all' && tour.startingPoint !== destination) {
                return false;
            }

            if (tripType !== 'all') {
                if (!tour.tripType) return false;
                const types = tour.tripType
                    .split(',')
                    .map((t: string) => t.trim().toLowerCase());
                if (!types.includes(tripType.toLowerCase())) return false;
            }

            if (duration !== 'all') {
                const daysMatch = tour.duration.match(/(\d+)/);
                const days = daysMatch ? parseInt(daysMatch[1], 10) : 0;
                const durationRange = DURATIONS.find(
                    (d) => d.value === duration,
                );
                if (
                    durationRange &&
                    (days < durationRange.min || days > durationRange.max)
                ) {
                    return false;
                }
            }

            return true;
        });
    }, [tours, searchQuery, destination, tripType, duration]);

    return (
        <SiteLayout>
            <MetaTags
                title="Bespoke Private Tour Collection"
                description={DESCRIPTION}
                url="https://www.moroccanclubtravel.com/tours"
            />
            <Header />
            <main className="px-6 pt-32 pb-24 md:px-10 md:pt-40 md:pb-32">
                <div className="mx-auto max-w-7xl">
                    <div className="animate-fade-up mb-10 flex flex-col items-end justify-between gap-8 md:flex-row">
                        <div className="max-w-2xl">
                            <span className="eyebrow mb-6 block text-terracotta">
                                The Collection
                            </span>
                            <h1 className="font-display text-5xl leading-[1.05] font-bold md:text-7xl">
                                Our Tours
                            </h1>
                            <p className="mt-8 max-w-xl text-lg leading-relaxed text-pretty text-foreground/60 md:text-xl">
                                {DESCRIPTION}
                            </p>
                        </div>
                        <div className="eyebrow hidden shrink-0 items-center gap-2 text-foreground/40 md:flex">
                            <SlidersHorizontal className="h-4 w-4" />
                            {String(filteredTours.length).padStart(2, '0')}{' '}
                            Itineraries
                        </div>
                    </div>

                    <div
                        className="animate-fade-up mb-16 flex flex-col gap-6 border-y border-foreground/10 py-6"
                        style={{ animationDelay: '100ms' }}
                    >
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-10">
                            <div className="group relative">
                                <Input
                                    placeholder="Search tours..."
                                    value={searchQuery}
                                    onChange={(e) =>
                                        setSearchQuery(e.target.value)
                                    }
                                    className="h-10 rounded-none border-0 border-b border-foreground/20 bg-transparent pr-8 pl-0 shadow-none transition-colors focus-visible:border-foreground/60 focus-visible:ring-0"
                                />
                                {!searchQuery ? (
                                    <Search className="pointer-events-none absolute top-1/2 right-0 h-4 w-4 -translate-y-1/2 text-foreground/40 transition-colors group-focus-within:text-foreground/60" />
                                ) : (
                                    <button
                                        onClick={() => setSearchQuery('')}
                                        className="absolute top-1/2 right-0 -translate-y-1/2 text-foreground/40 transition-colors hover:text-terracotta"
                                    >
                                        <X className="h-4 w-4" />
                                    </button>
                                )}
                            </div>

                            <Select
                                value={destination}
                                onValueChange={setDestination}
                            >
                                <SelectTrigger className="h-10 w-full rounded-none border-0 border-b border-foreground/20 bg-transparent px-0 shadow-none transition-colors hover:border-foreground/50 focus:ring-0 data-[state=open]:border-foreground/60">
                                    <div className="flex items-center gap-2">
                                        <span className="font-mono text-[10px] tracking-widest text-foreground/40 uppercase">
                                            Dest
                                        </span>
                                        <SelectValue placeholder="Any" />
                                    </div>
                                </SelectTrigger>
                                <SelectContent className="rounded-none border-foreground/10 shadow-xl">
                                    <SelectItem
                                        value="all"
                                        className="cursor-pointer rounded-none"
                                    >
                                        Any Destination
                                    </SelectItem>
                                    {DESTINATIONS.map((dest) => (
                                        <SelectItem
                                            key={dest}
                                            value={dest}
                                            className="cursor-pointer rounded-none"
                                        >
                                            From {dest}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>

                            <Select
                                value={duration}
                                onValueChange={setDuration}
                            >
                                <SelectTrigger className="h-10 w-full rounded-none border-0 border-b border-foreground/20 bg-transparent px-0 shadow-none transition-colors hover:border-foreground/50 focus:ring-0 data-[state=open]:border-foreground/60">
                                    <div className="flex items-center gap-2">
                                        <span className="font-mono text-[10px] tracking-widest text-foreground/40 uppercase">
                                            Days
                                        </span>
                                        <SelectValue placeholder="Any" />
                                    </div>
                                </SelectTrigger>
                                <SelectContent className="rounded-none border-foreground/10 shadow-xl">
                                    <SelectItem
                                        value="all"
                                        className="cursor-pointer rounded-none"
                                    >
                                        Any Duration
                                    </SelectItem>
                                    {DURATIONS.map((dur) => (
                                        <SelectItem
                                            key={dur.value}
                                            value={dur.value}
                                            className="cursor-pointer rounded-none"
                                        >
                                            {dur.label}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>

                            <Select
                                value={tripType}
                                onValueChange={setTripType}
                            >
                                <SelectTrigger className="h-10 w-full rounded-none border-0 border-b border-foreground/20 bg-transparent px-0 shadow-none transition-colors hover:border-foreground/50 focus:ring-0 data-[state=open]:border-foreground/60">
                                    <div className="flex items-center gap-2">
                                        <span className="font-mono text-[10px] tracking-widest text-foreground/40 uppercase">
                                            Type
                                        </span>
                                        <SelectValue placeholder="All" />
                                    </div>
                                </SelectTrigger>
                                <SelectContent className="rounded-none border-foreground/10 shadow-xl">
                                    <SelectItem
                                        value="all"
                                        className="cursor-pointer rounded-none"
                                    >
                                        All Trip Types
                                    </SelectItem>
                                    {TRIP_TYPES.map((type) => (
                                        <SelectItem
                                            key={type}
                                            value={type}
                                            className="cursor-pointer rounded-none"
                                        >
                                            {type}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>

                        {activeFiltersCount > 0 && (
                            <div className="flex items-center justify-end">
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={clearFilters}
                                    className="h-auto p-0 font-mono text-[11px] tracking-widest text-terracotta uppercase transition-opacity hover:bg-transparent hover:text-terracotta"
                                >
                                    [ Clear active filters ]
                                </Button>
                            </div>
                        )}
                    </div>

                    <div className="grid grid-cols-1 gap-x-10 gap-y-16 md:grid-cols-2 md:gap-y-20 lg:grid-cols-3">
                        {filteredTours.length === 0 ? (
                            <div className="col-span-full border border-foreground/10 py-24 text-center text-foreground/50">
                                <Search className="mx-auto mb-4 h-8 w-8 text-foreground/20" />
                                <p className="mb-2 font-display text-lg text-foreground/80">
                                    No tours found
                                </p>
                                <p className="mb-6 text-sm text-foreground/60">
                                    Try adjusting your filters or search query.
                                </p>
                                <Button
                                    onClick={clearFilters}
                                    variant="outline"
                                    className="rounded-none border-foreground/20 hover:bg-foreground/5"
                                >
                                    Clear Filters
                                </Button>
                            </div>
                        ) : null}

                        {filteredTours.map((tour, i) => {
                            return (
                                <article
                                    key={`${tour.id}-${searchQuery}-${destination}-${tripType}-${duration}`}
                                    className="group animate-fade-up flex h-full cursor-pointer flex-col"
                                    style={{
                                        animationDelay: `${(i % 3) * 100}ms`,
                                    }}
                                >
                                    <Link
                                        href={`/tours/${tour.slug}`}
                                        className="flex h-full flex-col"
                                    >
                                        <div className="relative mb-6 aspect-[4/5] overflow-hidden bg-muted">
                                            <TourImage
                                                src={tour.image}
                                                alt={tour.title}
                                                className="h-full w-full object-cover transition-transform duration-[1400ms] ease-[var(--ease-out-expo)] group-hover:scale-[1.04]"
                                            />
                                            <div className="absolute inset-0 bg-indigo-ink/0 transition-colors duration-500 group-hover:bg-indigo-ink/5" />

                                            {tour.tripType && (
                                                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                                                    <span className="bg-ivory/95 px-3 py-1.5 font-mono text-[10px] tracking-widest text-foreground uppercase shadow-sm backdrop-blur-md">
                                                        {
                                                            tour.tripType.split(
                                                                ',',
                                                             )[0]
                                                        }
                                                    </span>
                                                </div>
                                            )}
                                        </div>

                                        <div className="flex flex-grow flex-col">
                                            <div className="mb-3 flex items-start justify-between gap-4">
                                                <span className="eyebrow text-terracotta">
                                                    {tour.startingPoint}
                                                </span>
                                                <span className="mt-0.5 shrink-0 font-mono text-[11px] text-foreground/40">
                                                    {tour.duration}
                                                </span>
                                            </div>

                                            <h3 className="mb-4 font-display text-2xl leading-tight transition-colors duration-300 group-hover:text-terracotta md:text-3xl">
                                                {tour.title}
                                            </h3>

                                            <p className="mb-6 line-clamp-3 flex-grow text-sm leading-relaxed text-foreground/60">
                                                {tour.description}
                                            </p>

                                            <div className="mt-auto flex items-center justify-between border-t border-border/50 pt-4">
                                                <span className="text-xs font-medium tracking-wide text-foreground/80 uppercase transition-colors group-hover:text-terracotta">
                                                    Explore Journey
                                                </span>
                                                <span className="translate-x-0 transform text-terracotta transition-transform duration-300 group-hover:translate-x-1">
                                                    →
                                                </span>
                                            </div>
                                        </div>
                                    </Link>
                                </article>
                            );
                        })}
                    </div>

                    {/* Dynamic Structured Data */}
                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{
                            __html: JSON.stringify({
                                '@context': 'https://schema.org',
                                '@type': 'ItemList',
                                'itemListElement': tours.map((tour, index) => ({
                                    '@type': 'ListItem',
                                    'position': index + 1,
                                    'url': `https://www.moroccanclubtravel.com/tours/${tour.slug}`,
                                    'name': tour.title,
                                    'description': tour.description,
                                    'image': tour.image ? (tour.image.startsWith('http') ? tour.image : (tour.image.startsWith('/') ? tour.image : `/assets/${tour.image}`)) : 'https://www.moroccanclubtravel.com/assets/tour-sahara-camp.jpg'
                                }))
                            })
                        }}
                    />

                    {/* Breadcrumbs Structured Data */}
                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{
                            __html: JSON.stringify({
                                '@context': 'https://schema.org',
                                '@type': 'BreadcrumbList',
                                'itemListElement': [
                                    {
                                        '@type': 'ListItem',
                                        'position': 1,
                                        'name': 'Home',
                                        'item': 'https://www.moroccanclubtravel.com'
                                    },
                                    {
                                        '@type': 'ListItem',
                                        'position': 2,
                                        'name': 'Tours',
                                        'item': 'https://www.moroccanclubtravel.com/tours'
                                    }
                                ]
                            })
                        }}
                    />

                    {/* Pagination */}
                    {hasMultiplePages && (
                        <div className="mt-20 flex items-center justify-center">
                            <div className="flex items-center gap-2">
                                {/* Previous Button */}
                                <Link
                                    href={paginationLinks[0]?.url || '#'}
                                    preserveScroll
                                    className={`group inline-flex items-center gap-2 border border-foreground/10 px-5 py-3 font-mono text-sm tracking-wide uppercase transition-all ${
                                        !paginationLinks[0]?.url
                                            ? 'cursor-not-allowed text-foreground/30'
                                            : 'text-foreground/70 hover:border-terracotta hover:bg-terracotta/5 hover:text-terracotta'
                                    }`}
                                >
                                    <ChevronLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
                                    <span className="hidden sm:inline">Previous</span>
                                </Link>

                                {/* Page Numbers */}
                                <div className="flex items-center gap-2">
                                    {paginationLinks.slice(1, -1).map((link, index) => {
                                        // Parse the label to check if it's a number or ellipsis
                                        const isEllipsis = link.label === '...';

                                        if (isEllipsis) {
                                            return (
                                                <span
                                                    key={index}
                                                    className="flex h-12 w-12 items-center justify-center text-foreground/40"
                                                >
                                                    ...
                                                </span>
                                            );
                                        }

                                        return (
                                            <Link
                                                key={index}
                                                href={link.url || '#'}
                                                preserveScroll
                                                className={`flex h-12 w-12 items-center justify-center border font-mono text-sm transition-all ${
                                                    link.active
                                                        ? 'border-terracotta bg-terracotta text-ivory shadow-md'
                                                        : link.url
                                                        ? 'border-foreground/10 text-foreground/70 hover:border-terracotta hover:bg-terracotta/5 hover:text-terracotta'
                                                        : 'cursor-not-allowed border-foreground/5 text-foreground/30'
                                                }`}
                                            >
                                                {link.label}
                                            </Link>
                                        );
                                    })}
                                </div>

                                {/* Next Button */}
                                <Link
                                    href={paginationLinks[paginationLinks.length - 1]?.url || '#'}
                                    preserveScroll
                                    className={`group inline-flex items-center gap-2 border border-foreground/10 px-5 py-3 font-mono text-sm tracking-wide uppercase transition-all ${
                                        !paginationLinks[paginationLinks.length - 1]?.url
                                            ? 'cursor-not-allowed text-foreground/30'
                                            : 'text-foreground/70 hover:border-terracotta hover:bg-terracotta/5 hover:text-terracotta'
                                    }`}
                                >
                                    <span className="hidden sm:inline">Next</span>
                                    <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                                </Link>
                            </div>
                        </div>
                    )}
                </div>
            </main>
            <Footer />
        </SiteLayout>
    );
}
