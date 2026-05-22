import { CinematicBreak } from '@/components/site/CinematicBreak';
import { Contact } from '@/components/site/Contact';
import { FAQ } from '@/components/site/FAQ';
import { Footer } from '@/components/site/Footer';
import { Header } from '@/components/site/Header';
import { Hero } from '@/components/site/Hero';
import { MetaTags } from '@/components/site/MetaTags';
import { Philosophy } from '@/components/site/Philosophy';
import { Reviews } from '@/components/site/Reviews';
import { Tours } from '@/components/site/Tours';
import { Toaster } from '@/components/ui/sonner';
import { useTranslation } from '@/hooks/use-translation';
import SiteLayout from '@/layouts/site-layout';

const DESCRIPTION =
    'A Marrakesh-based agency curating private tours through the Sahara, the High Atlas, the imperial cities and the Atlantic coast.';

interface Tour {
    id: string;
    slug: string;
    title: string;
    duration: string;
    description: string;
    startingPoint: string;
    tripType: string;
    image: string;
}

interface WelcomeProps {
    featuredTours: Tour[];
    totalToursCount: number;
}

export default function Welcome({ featuredTours, totalToursCount }: WelcomeProps) {
    const { __ } = useTranslation();

    return (
        <SiteLayout>
            <MetaTags
                title={__(
                    'Moroccan Club Travel | Marrakesh-based Private Tours',
                )}
                description={__(DESCRIPTION)}
                url="https://www.moroccanclubtravel.com"
                type="website"
            />
            <Header />
            <main>
                <Hero />
                <Tours featuredTours={featuredTours} totalToursCount={totalToursCount} />
                <Philosophy />
                <Reviews />
                <FAQ />
                <CinematicBreak />
                <Contact />
            </main>
            <Footer />

            {/* Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'TravelAgency',
                        name: 'Moroccan Club Travel',
                        description: DESCRIPTION,
                        url: 'https://www.moroccanclubtravel.com',
                        address: {
                            '@type': 'PostalAddress',
                            streetAddress:
                                'Av. Allal El Fassi Complexe Ahbas IMM B 1ère étage App 8',
                            addressLocality: 'Daoudiat',
                            addressRegion: 'Marrakech',
                            addressCountry: 'MA',
                        },
                        contactPoint: {
                            '@type': 'ContactPoint',
                            telephone: '+212-524-311-743',
                            contactType: 'customer service',
                        },
                        offers: featuredTours.slice(0, 5).map((tour) => ({
                            '@type': 'TouristTrip',
                            name: tour.title,
                            description: tour.description,
                            duration: tour.duration,
                            provider: {
                                '@type': 'TravelAgency',
                                name: 'Moroccan Club Travel',
                            },
                        })),
                    }),
                }}
            />
        </SiteLayout>
    );
}
