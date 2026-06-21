import { Link } from '@inertiajs/react';

import { Footer } from '@/components/site/Footer';
import { Header } from '@/components/site/Header';
import { MetaTags } from '@/components/site/MetaTags';
import { useTranslation } from '@/hooks/use-translation';
import SiteLayout from '@/layouts/site-layout';

const DESCRIPTION =
    'Learn about Moroccan Club Travel - a full-service travel agency with over 20 years of experience creating unforgettable journeys through Morocco.';

export default function About() {
    const { __ } = useTranslation();

    return (
        <SiteLayout>
            <MetaTags
                title={__('About Us | Moroccan Club Travel')}
                description={__(DESCRIPTION)}
                url="https://www.moroccanclubtravel.com/about"
            />
            <Header />
            <main className="px-6 pt-32 pb-24 md:px-10 md:pt-40 md:pb-32">
                <div className="mx-auto max-w-7xl">
                    {/* Hero Section */}
                    <div className="animate-fade-up mb-20">
                        <span className="eyebrow mb-6 block text-terracotta">
                            {__('Learn about us')}
                        </span>
                        <h1 className="font-display text-5xl leading-[1.05] font-bold md:text-7xl">
                            {__('Dare to Explore with MCT Tours Agency')}
                        </h1>
                    </div>

                    {/* Hero Image */}
                    <div
                        className="animate-fade-up relative mb-20 aspect-[21/9] overflow-hidden bg-muted"
                        style={{ animationDelay: '100ms' }}
                    >
                        <img
                            src="/assets/tour-atlas.jpg"
                            alt={__('Winding road through Moroccan landscape')}
                            className="h-full w-full object-cover"
                        />
                    </div>

                    {/* Main Content */}
                    <div
                        className="animate-fade-up mx-auto max-w-4xl"
                        style={{ animationDelay: '200ms' }}
                    >
                        <div className="space-y-8 text-lg leading-relaxed text-foreground/80">
                            <p>
                                {__(
                                    'Welcome to Moroccan Club Travel! We are a full-service travel agency based in beautiful Morocco. With over 20 years of experience in the travel industry, we have the expertise and knowledge to help you plan the perfect trip to this amazing country.',
                                )}
                            </p>
                            <p>
                                {__(
                                    'Our team of dedicated travel consultants are passionate about Morocco and are ready to help you to design your tour, we can make your vacation dream possible. From luxurious riads in Marrakech to camel trekking in the Sahara Desert, we can help you experience all that Morocco has to offer.',
                                )}
                            </p>
                            <p>
                                {__(
                                    'We offer a wide range of travel services, including customized itineraries, group tours, and corporate travel solutions. Our goal is to make your travel experience as smooth and enjoyable as possible.',
                                )}
                            </p>
                            <p>
                                {__(
                                    'Thank you for choosing Moroccan Club Travel for your travel needs. We look forward to helping you create unforgettable memories in Morocco.',
                                )}
                            </p>
                        </div>

                        {/* CTA Section */}
                        <div className="mt-16 border-t border-foreground/10 pt-12 text-center">
                            <h2 className="mb-6 font-display text-3xl font-bold md:text-4xl">
                                {__('Ready for an unforgettable tour?')}
                            </h2>
                            <p className="mb-10 text-lg text-foreground/60">
                                {__('Plan your trip with us')}
                            </p>
                            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                                <Link
                                    href="/tours"
                                    className="eyebrow inline-flex items-center justify-center bg-terracotta px-10 py-5 text-ivory transition-colors hover:bg-terracotta/90"
                                >
                                    {__('Explore Our Tours')}
                                </Link>
                                <a
                                    href="/#contact"
                                    className="eyebrow inline-flex items-center justify-center border border-foreground/20 px-10 py-5 transition-colors hover:border-terracotta hover:text-terracotta"
                                >
                                    {__('Contact Us')}
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* World Class Section */}
                    <div
                        className="animate-fade-up mt-32 border-t border-foreground/10 pt-20 text-center"
                        style={{ animationDelay: '200ms' }}
                    >
                        <h2 className="mb-4 font-display text-4xl font-bold md:text-5xl">
                            {__('MCT Tours is a World Class Travel Agency')}
                        </h2>
                        <p className="mx-auto max-w-2xl text-lg text-foreground/60">
                            {__(
                                'Are you ready to travel? Discover the magic of Morocco with our expert guides and personalized service.',
                            )}
                        </p>
                    </div>

                    {/* Partners Section */}
                    <div
                        className="animate-fade-up mt-20 rounded-lg bg-clay px-8 py-16"
                        style={{ animationDelay: '300ms' }}
                    >
                        <h2 className="mb-12 text-center font-display text-3xl font-bold text-ivory md:text-4xl">
                            {__('Our Partners')}
                        </h2>
                        <div className="grid grid-cols-2 items-center justify-items-center gap-8 md:grid-cols-3 lg:grid-cols-6">
                            <img
                                src="/assets/partners/cadi-logo.png"
                                alt={__('Cadi Ayyad')}
                                className="h-16 w-auto opacity-80 transition-all hover:scale-105 hover:opacity-100"
                            />
                            <img
                                src="/assets/partners/logo-cr.png"
                                alt={__('Partner Logo')}
                                className="h-16 w-auto opacity-80 transition-all hover:scale-105 hover:opacity-100"
                            />
                            <img
                                src="/assets/partners/salam.png"
                                alt={__('Salam')}
                                className="h-16 w-auto opacity-80 transition-all hover:scale-105 hover:opacity-100"
                            />
                            <img
                                src="/assets/partners/sam.png"
                                alt={__('SAM')}
                                className="h-16 w-auto opacity-80 transition-all hover:scale-105 hover:opacity-100"
                            />
                            <img
                                src="/assets/partners/world.png"
                                alt={__('World Travel')}
                                className="h-16 w-auto opacity-80 transition-all hover:scale-105 hover:opacity-100"
                            />
                            <img
                                src="/assets/partners/world-bull.png"
                                alt={__('World Bull')}
                                className="h-16 w-auto opacity-80 transition-all hover:scale-105 hover:opacity-100"
                            />
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </SiteLayout>
    );
}
