import { ChevronLeft } from 'lucide-react';
import { Footer } from '@/components/site/Footer';
import { Header } from '@/components/site/Header';
import { MetaTags } from '@/components/site/MetaTags';
import { useTranslation } from '@/hooks/use-translation';
import SiteLayout from '@/layouts/site-layout';

export default function Terms() {
    const { __ } = useTranslation();

    return (
        <SiteLayout>
            <MetaTags
                title={__('Terms & Conditions | Moroccan Club Travel')}
                description={__('Read the general terms and conditions governing travel bookings with Moroccan Club Travel.')}
                url="https://www.moroccanclubtravel.com/terms"
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
                            {__('Terms & Conditions')}
                        </h1>
                    </div>

                    <div
                        className="animate-fade-up space-y-12 text-lg leading-relaxed text-foreground/80"
                        style={{ animationDelay: '100ms' }}
                    >
                        <div>
                            <h2 className="font-display mb-4 text-2xl font-bold text-foreground">
                                {__('1. Prices & Surcharges')}
                            </h2>
                            <p className="mb-4">
                                {__(
                                    'All prices are quoted in the currency indicated in the quotation and are based on rates, taxes, fuel costs, exchange rates, and supplier charges applicable at the time of publication. We reserve the right to adjust prices prior to final payment in the event of significant increases in:',
                                )}
                            </p>
                            <ul className="list-disc space-y-2 pl-6">
                                <li>{__('Government taxes')}</li>
                                <li>{__('Fuel surcharges')}</li>
                                <li>{__('Exchange rate fluctuations')}</li>
                                <li>{__('Transportation costs')}</li>
                                <li>{__('Supplier charges beyond our control')}</li>
                            </ul>
                            <p className="mt-4">{__('Any surcharge will be communicated to the client in writing.')}</p>
                        </div>

                        <div>
                            <h2 className="font-display mb-4 text-2xl font-bold text-foreground">
                                {__('2. Payment Methods')}
                            </h2>
                            <p className="mb-4">{__('Payments may be made by:')}</p>
                            <ul className="list-disc space-y-2 pl-6">
                                <li>{__('Bank transfer')}</li>
                                <li>{__('Credit card')}</li>
                                <li>{__('Other approved payment methods')}</li>
                            </ul>
                            <p className="mt-4">
                                {__(
                                    'Any bank charges, transfer fees, or payment processing fees are the responsibility of the client. For credit card payments, a processing fee may apply where permitted by law and will be clearly communicated before payment.',
                                )}
                            </p>
                        </div>

                        <div>
                            <h2 className="font-display mb-4 text-2xl font-bold text-foreground">
                                {__('3. Travel Documents & Client Responsibilities')}
                            </h2>
                            <p className="mb-4">{__('Clients are responsible for ensuring they possess:')}</p>
                            <ul className="list-disc space-y-2 pl-6">
                                <li>{__('A valid passport')}</li>
                                <li>{__('Required visas')}</li>
                                <li>{__('Vaccination certificates (if applicable)')}</li>
                                <li>{__('Travel insurance')}</li>
                                <li>{__('Any other documents required for entry into Morocco or any transit destination')}</li>
                            </ul>
                            <p className="mt-4">
                                {__(
                                    'The company cannot be held responsible for denied boarding, entry refusal, or additional expenses resulting from incomplete travel documentation.',
                                )}
                            </p>
                        </div>

                        <div>
                            <h2 className="font-display mb-4 text-2xl font-bold text-foreground">
                                {__('4. Health & Special Requirements')}
                            </h2>
                            <p>
                                {__(
                                    'Clients must inform us at the time of booking of any medical conditions, dietary requirements, reduced mobility, or special needs that may affect their participation in the tour. We will make reasonable efforts to accommodate such requests but cannot guarantee that all requirements can be met.',
                                )}
                            </p>
                        </div>

                        <div>
                            <h2 className="font-display mb-4 text-2xl font-bold text-foreground">
                                {__('5. Travel Insurance')}
                            </h2>
                            <p className="mb-4">
                                {__(
                                    'We strongly recommend that all travelers purchase comprehensive travel insurance covering:',
                                )}
                            </p>
                            <ul className="list-disc space-y-2 pl-6">
                                <li>{__('Trip cancellation')}</li>
                                <li>{__('Medical expenses')}</li>
                                <li>{__('Personal accident')}</li>
                                <li>{__('Emergency evacuation')}</li>
                                <li>{__('Loss of luggage')}</li>
                                <li>{__('Travel delays')}</li>
                            </ul>
                            <p className="mt-4">{__('Travel insurance is not included unless specifically stated.')}</p>
                        </div>

                        <div>
                            <h2 className="font-display mb-4 text-2xl font-bold text-foreground">
                                {__('6. Liability')}
                            </h2>
                            <p className="mb-4">
                                {__(
                                    'The company acts as an intermediary between clients and independent suppliers such as hotels, airlines, transportation providers, guides, and activity operators. We shall not be liable for injury, loss, damage, delay, cancellation, or additional expenses caused by events beyond our reasonable control, including but not limited to:',
                                )}
                            </p>
                            <ul className="list-disc space-y-2 pl-6">
                                <li>{__('Weather conditions')}</li>
                                <li>{__('Natural disasters')}</li>
                                <li>{__('Government actions')}</li>
                                <li>{__('Airline schedule changes')}</li>
                                <li>{__('Strikes')}</li>
                                <li>{__('Civil disturbances')}</li>
                                <li>{__('Force majeure events')}</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="font-display mb-4 text-2xl font-bold text-foreground">
                                {__('7. Force Majeure')}
                            </h2>
                            <p>
                                {__(
                                    'The company shall not be liable for any failure to perform its obligations due to circumstances beyond its reasonable control, including acts of God, war, terrorism, epidemics, pandemics, natural disasters, transportation disruptions, government restrictions, or any other force majeure event.',
                                )}
                            </p>
                        </div>

                        <div>
                            <h2 className="font-display mb-4 text-2xl font-bold text-foreground">
                                {__('8. Governing Law')}
                            </h2>
                            <p>
                                {__(
                                    'These Terms and Conditions shall be governed by and construed in accordance with the laws of the Kingdom of Morocco. Any disputes arising from these Terms and Conditions shall be subject to the jurisdiction of the competent Moroccan courts.',
                                )}
                            </p>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </SiteLayout>
    );
}
