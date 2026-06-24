import { ChevronLeft } from 'lucide-react';
import { Footer } from '@/components/site/Footer';
import { Header } from '@/components/site/Header';
import { MetaTags } from '@/components/site/MetaTags';
import { useTranslation } from '@/hooks/use-translation';
import SiteLayout from '@/layouts/site-layout';

export default function CancellationPolicy() {
    const { __ } = useTranslation();

    return (
        <SiteLayout>
            <MetaTags
                title={__('Cancellation Policy | Moroccan Club Travel')}
                description={__('Understand the cancellation terms and charges that apply to your Moroccan Club Travel booking.')}
                url="https://www.moroccanclubtravel.com/cancellation-policy"
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
                            {__('Cancellation Policy')}
                        </h1>
                    </div>

                    <div
                        className="animate-fade-up space-y-10 text-lg leading-relaxed text-foreground/80"
                        style={{ animationDelay: '100ms' }}
                    >
                        <p>
                            {__(
                                'All cancellation requests must be submitted in writing by email. Cancellation charges are calculated based on the date the written cancellation is received.',
                            )}
                        </p>

                        <div className="overflow-hidden rounded-lg border border-foreground/10">
                            <table className="w-full text-base">
                                <thead>
                                    <tr className="border-b border-foreground/10 bg-foreground/5">
                                        <th className="px-6 py-4 text-left font-semibold text-foreground">
                                            {__('Notice Period')}
                                        </th>
                                        <th className="px-6 py-4 text-left font-semibold text-foreground">
                                            {__('Cancellation Charge')}
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-foreground/10">
                                    <tr>
                                        <td className="px-6 py-4">{__('More than 60 days before arrival')}</td>
                                        <td className="px-6 py-4">{__('Deposit retained')}</td>
                                    </tr>
                                    <tr className="bg-foreground/[0.02]">
                                        <td className="px-6 py-4">{__('59 to 30 days before arrival')}</td>
                                        <td className="px-6 py-4">{__('30% of total tour cost')}</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4">{__('29 to 15 days before arrival')}</td>
                                        <td className="px-6 py-4">{__('50% of total tour cost')}</td>
                                    </tr>
                                    <tr className="bg-foreground/[0.02]">
                                        <td className="px-6 py-4">{__('14 to 8 days before arrival')}</td>
                                        <td className="px-6 py-4">{__('75% of total tour cost')}</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4">{__('7 days to arrival date')}</td>
                                        <td className="px-6 py-4">{__('100% of total tour cost')}</td>
                                    </tr>
                                    <tr className="bg-foreground/[0.02]">
                                        <td className="px-6 py-4">{__('No-show')}</td>
                                        <td className="px-6 py-4">{__('100% of total tour cost')}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <p>
                            {__(
                                'Certain services such as flights, luxury accommodations, special events, and non-refundable supplier services may incur additional cancellation charges.',
                            )}
                        </p>

                        <div>
                            <h2 className="font-display mb-4 text-2xl font-bold text-foreground">
                                {__('Booking Deposit')}
                            </h2>
                            <p>
                                {__(
                                    'To secure and confirm a reservation, a non-refundable deposit of 30% of the total tour price is required at the time of booking. For bookings made within 60 days of departure, full payment may be required at the time of confirmation. No services will be guaranteed until the required deposit has been received.',
                                )}
                            </p>
                        </div>

                        <div>
                            <h2 className="font-display mb-4 text-2xl font-bold text-foreground">
                                {__('Booking Confirmation & Final Payment')}
                            </h2>
                            <p>
                                {__(
                                    'A booking is considered confirmed once we have received the required deposit and issued a written booking confirmation. The balance of the tour price must be paid no later than 60 days prior to arrival unless otherwise stated on the booking confirmation. For reservations made within 60 days of departure, full payment is required upon confirmation. Failure to pay the balance by the due date may result in cancellation of the reservation, and cancellation fees may apply.',
                                )}
                            </p>
                        </div>

                        <div>
                            <h2 className="font-display mb-4 text-2xl font-bold text-foreground">
                                {__('Changes & Amendments')}
                            </h2>
                            <p className="mb-4">
                                {__(
                                    'Any request to modify a confirmed booking must be submitted in writing and is subject to availability. Amendments may include:',
                                )}
                            </p>
                            <ul className="list-disc space-y-2 pl-6">
                                <li>{__('Change of travel dates')}</li>
                                <li>{__('Change of accommodation category')}</li>
                                <li>{__('Change of itinerary')}</li>
                                <li>{__('Change of arrival or departure location')}</li>
                                <li>{__('Change of passenger names')}</li>
                            </ul>
                            <p className="mt-4">{__('Administrative and supplier amendment fees may apply.')}</p>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </SiteLayout>
    );
}
