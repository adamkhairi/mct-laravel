import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import { Plus } from 'lucide-react';
import { useTranslation } from '@/hooks/use-translation';

export function FAQ() {
    const { __ } = useTranslation();

    const faqData = [
        {
            question: __('What is the best time of year to visit Morocco?'),
            answer: __('Morocco is a year-round destination. Spring (March–May) and autumn (September–November) offer ideal temperatures across all regions. The Sahara is best in winter (October–February) for cool nights and golden days. Coastal towns like Essaouira are perfect in summer.'),
        },
        {
            question: __('Are your tours private or shared?'),
            answer: __('All our tours are 100% private — your group only, with a dedicated driver and guide. We never mix groups. This means maximum flexibility: your pace, your stops, your Morocco.'),
        },
        {
            question: __('Do I need a visa to visit Morocco?'),
            answer: __("Citizens of the US, UK, EU, Canada, Australia and many other countries can enter Morocco visa-free for up to 90 days. Check your specific country's requirements on the official Moroccan government website."),
        },
        {
            question: __('What is your cancellation policy?'),
            answer: __('Full refund for cancellations 14+ days before departure. 50% refund for 7–14 days. Tour credit within 7 days. We understand travel plans change — we work with you, not against you.'),
        },
        {
            question: __('Is Morocco safe for solo travelers and families?'),
            answer: __('Morocco is one of the safest destinations in North Africa. With a private guide from our team, you travel with local knowledge and 24/7 support. We regularly host solo female travelers, families with young children and senior travelers.'),
        },
        {
            question: __('Can you accommodate dietary requirements?'),
            answer: __('Absolutely. Moroccan cuisine is naturally very accommodating — vegetarian, vegan, gluten-free, halal, and other needs are all handled. Just tell us when you book and every meal will meet your requirements.'),
        },
        {
            question: __('What currency is used and how do I pay?'),
            answer: __('Morocco uses the Moroccan Dirham (MAD). We accept deposits by bank transfer, PayPal or card. ATMs are widely available in all cities we visit. Cash works well for souks, tips and small local purchases.'),
        },
    ];

    return (
        <section id="faq" className="bg-ivory px-6 py-24 md:px-10 md:py-32">
            <div className="mx-auto grid max-w-7xl items-start gap-16 md:grid-cols-[1fr_1.5fr] md:gap-24">
                <div className="animate-fade-up">
                    <span className="eyebrow mb-6 flex items-center gap-2 text-terracotta">
                        <span className="flex h-4 w-4 items-center justify-center rounded-none border border-terracotta text-[8px] font-bold">
                            ?
                        </span>
                        {__('FAQ')}
                    </span>
                    <h2 className="mb-8 font-display text-4xl leading-[1.1] font-bold md:text-6xl">
                        {__('Frequently')} <br />
                        <span className="font-normal text-terracotta italic">
                            {__('Asked Questions')}
                        </span>
                    </h2>
                    <p className="mb-10 max-w-sm leading-relaxed text-indigo-ink/60">
                        {__('Have more questions? Message us directly on WhatsApp for an instant answer.')}
                    </p>
                    <a
                        href="https://wa.me/212661250743"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="eyebrow inline-flex items-center gap-3 bg-terracotta px-8 py-4 text-ivory transition-colors hover:bg-clay"
                    >
                        <svg
                            className="h-5 w-5 fill-current"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.672 1.433 5.662 1.433h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                        {__('Ask on WhatsApp')}
                    </a>
                </div>

                <div className="animate-fade-up [animation-delay:200ms]">
                    <Accordion
                        type="single"
                        collapsible
                        className="w-full space-y-4"
                    >
                        {faqData.map((item, index) => (
                            <AccordionItem
                                key={index}
                                value={`item-${index}`}
                                className="overflow-hidden rounded-none border border-indigo-ink/10 bg-sand px-6 transition-all data-[state=open]:border-terracotta/40 data-[state=open]:bg-sand/30"
                            >
                                <AccordionTrigger
                                    hideIcon
                                    className="group py-6 text-base font-semibold hover:no-underline"
                                >
                                    {item.question}
                                    <Plus className="h-4 w-4 shrink-0 text-terracotta transition-transform duration-200 group-data-[state=open]:rotate-45" />
                                </AccordionTrigger>
                                <AccordionContent className="pb-6 leading-relaxed text-indigo-ink/65">
                                    {item.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    );
}
