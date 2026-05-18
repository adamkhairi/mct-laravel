import { Link } from '@inertiajs/react';
import SiteLayout from '@/layouts/site-layout';
import { Header } from '@/components/site/Header';
import { Footer } from '@/components/site/Footer';
import {
    Hotel,
    MapPin,
    User,
    Compass,
    Mountain,
    Globe,
    CheckCircle2,
    XCircle,
} from 'lucide-react';
import {
    Collapsible,
    CollapsibleTrigger,
    CollapsibleContent,
} from '@/components/ui/collapsible';
import { ChevronDown } from 'lucide-react';

export default function Show({ tour }: { tour: any }) {
    const itinerary = (tour.itinerary as any[]) || [];
    const included = (tour.included as string[]) || [];
    const excluded = (tour.excluded as string[]) || [];

    return (
        <SiteLayout>
            <Header />
            <main className="pt-32 pb-24 md:pt-40">
                <div className="container mx-auto max-w-7xl px-4 md:px-8">
                    <div className="mb-12">
                        <Link
                            href="/tours"
                            className="eyebrow inline-flex items-center gap-2 text-terracotta transition-colors duration-300 hover:text-foreground"
                        >
                            <span>←</span> All Tours
                        </Link>
                    </div>

                    <div className="mb-16 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-24">
                        <div className="lg:col-span-8">
                            <h1 className="mb-8 font-display text-5xl leading-[1.1] tracking-tight md:text-7xl">
                                {tour.title}
                            </h1>
                            <p className="mb-16 max-w-3xl text-xl leading-relaxed font-light text-foreground/80 md:text-2xl">
                                {tour.description}
                            </p>

                            <div className="mb-16">
                                <h2 className="mb-8 font-display text-3xl">
                                    Key Facts
                                </h2>
                                <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
                                    {tour.accommodation && (
                                        <div className="flex flex-col gap-3">
                                            <Hotel
                                                className="h-6 w-6 text-terracotta"
                                                strokeWidth={1.5}
                                            />
                                            <div>
                                                <p className="mb-1 text-xs tracking-widest text-foreground/60 uppercase">
                                                    Accommodation
                                                </p>
                                                <p className="text-sm font-medium">
                                                    {tour.accommodation}
                                                </p>
                                            </div>
                                        </div>
                                    )}
                                    {tour.startingPoint && (
                                        <div className="flex flex-col gap-3">
                                            <MapPin
                                                className="h-6 w-6 text-terracotta"
                                                strokeWidth={1.5}
                                            />
                                            <div>
                                                <p className="mb-1 text-xs tracking-widest text-foreground/60 uppercase">
                                                    Departure City
                                                </p>
                                                <p className="text-sm font-medium">
                                                    {tour.startingPoint}
                                                </p>
                                            </div>
                                        </div>
                                    )}
                                    {tour.arrivalCity && (
                                        <div className="flex flex-col gap-3">
                                            <MapPin
                                                className="h-6 w-6 text-terracotta"
                                                strokeWidth={1.5}
                                            />
                                            <div>
                                                <p className="mb-1 text-xs tracking-widest text-foreground/60 uppercase">
                                                    Arrival City
                                                </p>
                                                <p className="text-sm font-medium">
                                                    {tour.arrivalCity}
                                                </p>
                                            </div>
                                        </div>
                                    )}
                                    {tour.guide && (
                                        <div className="flex flex-col gap-3">
                                            <User
                                                className="h-6 w-6 text-terracotta"
                                                strokeWidth={1.5}
                                            />
                                            <div>
                                                <p className="mb-1 text-xs tracking-widest text-foreground/60 uppercase">
                                                    Guide
                                                </p>
                                                <p className="text-sm font-medium">
                                                    {tour.guide}
                                                </p>
                                            </div>
                                        </div>
                                    )}
                                    {tour.tripType && (
                                        <div className="flex flex-col gap-3">
                                            <Compass
                                                className="h-6 w-6 text-terracotta"
                                                strokeWidth={1.5}
                                            />
                                            <div>
                                                <p className="mb-1 text-xs tracking-widest text-foreground/60 uppercase">
                                                    Trip Type
                                                </p>
                                                <p className="text-sm font-medium">
                                                    {tour.tripType}
                                                </p>
                                            </div>
                                        </div>
                                    )}
                                    {tour.difficulty && (
                                        <div className="flex flex-col gap-3">
                                            <Mountain
                                                className="h-6 w-6 text-terracotta"
                                                strokeWidth={1.5}
                                            />
                                            <div>
                                                <p className="mb-1 text-xs tracking-widest text-foreground/60 uppercase">
                                                    Difficulty
                                                </p>
                                                <p className="text-sm font-medium">
                                                    {tour.difficulty}
                                                </p>
                                            </div>
                                        </div>
                                    )}
                                    {tour.languages && (
                                        <div className="flex flex-col gap-3">
                                            <Globe
                                                className="h-6 w-6 text-terracotta"
                                                strokeWidth={1.5}
                                            />
                                            <div>
                                                <p className="mb-1 text-xs tracking-widest text-foreground/60 uppercase">
                                                    Languages
                                                </p>
                                                <p className="text-sm font-medium">
                                                    {tour.languages}
                                                </p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="mb-16">
                                <h2 className="mb-8 font-display text-3xl">
                                    Itinerary
                                </h2>
                                {itinerary.length > 0 ? (
                                    <div className="w-full space-y-4">
                                        {itinerary.map(
                                            (item: any, index: number) => (
                                                <Collapsible
                                                    key={index}
                                                    className="border-b border-foreground/10"
                                                >
                                                    <CollapsibleTrigger className="flex w-full items-center justify-between py-6 text-left hover:underline [&[data-state=open]>svg]:rotate-180">
                                                        <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-6">
                                                            <span className="eyebrow shrink-0 text-terracotta">
                                                                {item.day}
                                                            </span>
                                                            <span className="text-xl font-medium">
                                                                {item.title}
                                                            </span>
                                                        </div>
                                                        <ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" />
                                                    </CollapsibleTrigger>
                                                    <CollapsibleContent className="pb-6 leading-relaxed text-foreground/80 md:pl-[calc(4rem+1.5rem)]">
                                                        {item.description}
                                                    </CollapsibleContent>
                                                </Collapsible>
                                            ),
                                        )}
                                    </div>
                                ) : (
                                    <div className="border-y border-foreground/10 py-8">
                                        <p className="text-foreground/60 italic">
                                            Itinerary details coming soon.
                                        </p>
                                    </div>
                                )}
                            </div>

                            {(included.length > 0 || excluded.length > 0) && (
                                <div className="mb-16">
                                    <h2 className="mb-8 font-display text-3xl">
                                        Inclusions
                                    </h2>
                                    <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
                                        {included.length > 0 && (
                                            <div>
                                                <h3 className="mb-6 text-xl font-medium">
                                                    Cost includes:
                                                </h3>
                                                <ul className="space-y-4">
                                                    {included.map(
                                                        (
                                                            item: string,
                                                            index: number,
                                                        ) => (
                                                            <li
                                                                key={index}
                                                                className="flex items-start gap-3"
                                                            >
                                                                <CheckCircle2
                                                                    className="mt-0.5 h-6 w-6 shrink-0 text-green-600"
                                                                    strokeWidth={
                                                                        1.5
                                                                    }
                                                                />
                                                                <span className="leading-relaxed text-foreground/80">
                                                                    {item}
                                                                </span>
                                                            </li>
                                                        ),
                                                    )}
                                                </ul>
                                            </div>
                                        )}
                                        {excluded.length > 0 && (
                                            <div>
                                                <h3 className="mb-6 text-xl font-medium">
                                                    Cost excludes:
                                                </h3>
                                                <ul className="space-y-4">
                                                    {excluded.map(
                                                        (
                                                            item: string,
                                                            index: number,
                                                        ) => (
                                                            <li
                                                                key={index}
                                                                className="flex items-start gap-3"
                                                            >
                                                                <XCircle
                                                                    className="mt-0.5 h-6 w-6 shrink-0 text-terracotta"
                                                                    strokeWidth={
                                                                        1.5
                                                                    }
                                                                />
                                                                <span className="leading-relaxed text-foreground/80">
                                                                    {item}
                                                                </span>
                                                            </li>
                                                        ),
                                                    )}
                                                </ul>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="lg:col-span-4">
                            <div className="sticky top-32 border-t border-foreground/10 py-2 pt-10 lg:border-t-0 lg:border-l lg:pt-2 lg:pl-8">
                                <h3 className="eyebrow mb-8 text-terracotta">
                                    Itinerary Snapshot
                                </h3>

                                <div className="space-y-8">
                                    <div>
                                        <p className="mb-1 text-sm tracking-widest text-foreground/60 uppercase">
                                            Duration
                                        </p>
                                        <p className="font-display text-2xl">
                                            {tour.duration}
                                        </p>
                                        <p className="text-foreground/70">
                                            {tour.nights} Nights
                                        </p>
                                    </div>

                                    <div>
                                        <p className="mb-1 text-sm tracking-widest text-foreground/60 uppercase">
                                            Starting Point
                                        </p>
                                        <p className="font-display text-2xl">
                                            {tour.startingPoint}
                                        </p>
                                    </div>

                                    <div>
                                        <p className="mb-1 text-sm tracking-widest text-foreground/60 uppercase">
                                            Type
                                        </p>
                                        <p className="font-display text-2xl">
                                            {tour.tripType || 'General Tour'}
                                        </p>
                                    </div>

                                    <div className="flex flex-col gap-4 pt-8">
                                        <a
                                            href="/#contact"
                                            className="inline-flex items-center justify-center bg-foreground px-8 py-4 text-sm font-medium tracking-wide text-background uppercase transition-colors duration-300 hover:bg-terracotta"
                                        >
                                            Contact Us
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mb-24 aspect-[16/9] w-full overflow-hidden rounded-sm md:aspect-[21/9]">
                        <img
                            src={tour.image || '/assets/tour-sahara-camp.jpg'}
                            alt={tour.title}
                            className="h-full w-full object-cover object-center"
                        />
                    </div>
                </div>
            </main>
            <Footer />
        </SiteLayout>
    );
}
