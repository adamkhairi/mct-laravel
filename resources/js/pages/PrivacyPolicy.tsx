import { ChevronLeft } from 'lucide-react';
import { Footer } from '@/components/site/Footer';
import { Header } from '@/components/site/Header';
import { MetaTags } from '@/components/site/MetaTags';
import { useTranslation } from '@/hooks/use-translation';
import SiteLayout from '@/layouts/site-layout';

export default function PrivacyPolicy() {
    const { __ } = useTranslation();

    return (
        <SiteLayout>
            <MetaTags
                title={__('Privacy Policy | Moroccan Club Travel')}
                description={__('Learn how Moroccan Club Travel collects, uses, and protects your personal information.')}
                url="https://www.moroccanclubtravel.com/privacy-policy"
            />
            <Header />
            <main className="px-6 pt-32 pb-24 md:px-10 md:pt-40 md:pb-32">
                <div className="mx-auto max-w-4xl">
                    <button
                        onClick={() => window.history.back()}
                        className="eyebrow mb-10 flex items-center gap-2 text-foreground/50 transition-colors hover:text-foreground"
                    >
                        <ChevronLeft className="h-4 w-4" />
                        {__('Back')}
                    </button>
                    <div className="animate-fade-up mb-16">
                        <span className="eyebrow mb-6 block text-terracotta">
                            {__('Legal')}
                        </span>
                        <h1 className="font-display text-5xl leading-[1.05] font-bold md:text-7xl">
                            {__('Privacy Policy')}
                        </h1>
                    </div>

                    <div
                        className="animate-fade-up space-y-10 text-lg leading-relaxed text-foreground/80"
                        style={{ animationDelay: '100ms' }}
                    >
                        <p>
                            {__(
                                'We are committed to protecting your privacy and handling your personal information responsibly. Any personal data collected during the booking process will be used solely for purposes related to the organization and operation of your travel arrangements.',
                            )}
                        </p>
                        <p>
                            {__(
                                'By making a booking, you consent to the transfer of relevant personal information to our suppliers and service providers, including hotels, riads, transportation companies, guides, and other partners, as required to deliver the services booked.',
                            )}
                        </p>
                        <p>
                            {__(
                                'We may also use your contact information to send you updates, special offers, and marketing communications. You may opt out of receiving such communications at any time.',
                            )}
                        </p>
                    </div>
                </div>
            </main>
            <Footer />
        </SiteLayout>
    );
}
