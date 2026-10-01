import { CinematicBreak } from '@/components/site/CinematicBreak';
import { Contact } from '@/components/site/Contact';
import { FAQ } from '@/components/site/FAQ';
import { Footer } from '@/components/site/Footer';
import { Header } from '@/components/site/Header';
import { Hero } from '@/components/site/Hero';
import { MetaTags } from '@/components/site/MetaTags';
import { Partners } from '@/components/site/Partners';
import { Philosophy } from '@/components/site/Philosophy';
import { Reviews } from '@/components/site/Reviews';
import { Tours } from '@/components/site/Tours';
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
    homepageReviews: {
        id: number;
        name: string;
        country: string;
        flag: string | null;
        trip: string;
        quote: string;
        rating: number;
        verified: boolean;
    }[];
}

export default function Welcome({
    featuredTours,
    totalToursCount,
    homepageReviews,
}: WelcomeProps) {
    const { __ } = useTranslation();

    return (
        <SiteLayout>
            <MetaTags
                title={__(
                    'Moroccan Club Travel | Marrakesh-based Private Tours',
                )}
                description={__(DESCRIPTION)}
                type="website"
            />
            <Header />
            <main>
                <Hero />
                <Tours
                    featuredTours={featuredTours}
                    totalToursCount={totalToursCount}
                />
                <Philosophy />
                <Reviews reviews={homepageReviews} />
                <FAQ />
                <Partners />
                <CinematicBreak />
                <Contact />
            </main>
            <Footer />

        </SiteLayout>
    );
}
