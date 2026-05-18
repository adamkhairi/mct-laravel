import { Head } from '@inertiajs/react';
import SiteLayout from '@/layouts/site-layout';
import { Toaster } from '@/components/ui/sonner';
import { Header } from '@/components/site/Header';
import { Hero } from '@/components/site/Hero';
import { Tours } from '@/components/site/Tours';
import { Philosophy } from '@/components/site/Philosophy';
import { CinematicBreak } from '@/components/site/CinematicBreak';
import { Reviews } from '@/components/site/Reviews';
import { FAQ } from '@/components/site/FAQ';
import { Contact } from '@/components/site/Contact';
import { Footer } from '@/components/site/Footer';
import { tours } from '@/lib/tours';

const DESCRIPTION =
    'A Marrakesh-based agency curating private tours through the Sahara, the High Atlas, the imperial cities and the Atlantic coast.';

export default function Welcome() {
    return (
        <SiteLayout>
            <Head title="Moroccan Club Travel — Bespoke Journeys Through Morocco" />
            <Header />
            <main>
                <Hero />
                <Tours />
                <Philosophy />
                <Reviews />
                <FAQ />
                <CinematicBreak />
                <Contact />
            </main>
            <Footer />
            <Toaster richColors position="bottom-right" />

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
                        offers: tours.slice(0, 5).map((tour) => ({
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
