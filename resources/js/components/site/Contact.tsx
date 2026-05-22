'use client';
import { useForm } from '@inertiajs/react';
import type {FormEvent} from 'react';
import { toast } from 'sonner';
import { useTranslation } from '@/hooks/use-translation';
import contact from '@/routes/contact';

export function Contact() {
    const { __ } = useTranslation();
    const { data, setData, post, processing, errors, reset } = useForm({
        full_name: '',
        email: '',
        phone: '',
        region: '',
        adults: 1,
        children: 0,
        preferred_dates: '',
        message: '',
    });

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        post(contact.store().url, {
            preserveScroll: true,
            onSuccess: () => {
                reset();
                toast.success(__('Inquiry received'), {
                    description: __(
                        'Our concierge will be in touch within 24 hours.',
                    ),
                });
            },
        });
    }

    return (
        <section
            id="contact"
            className="bg-clay px-6 py-24 text-ivory md:px-10 md:py-32"
        >
            <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-16 md:grid-cols-2 md:gap-24">
                <div>
                    <span className="eyebrow mb-8 block text-terracotta">
                        {__('Begin')}
                    </span>
                    <h2 className="font-display text-5xl leading-[0.95] font-bold md:text-7xl">
                        {__('Begin the')}
                        <br />
                        {__('Dialogue.')}
                    </h2>
                    <p className="mt-8 max-w-sm leading-relaxed text-ivory/65">
                        {__(
                            'Connect with our Marrakesh studio to begin crafting your customized itinerary. Every conversation is private and unhurried.',
                        )}
                    </p>
                    <div className="mt-12 space-y-4">
                        <p className="eyebrow text-ivory/80">
                            {__('Studio')} &middot; +212 524 311 743
                        </p>
                        <p className="eyebrow text-ivory/80">
                            booking@moroccanclubtravel.com
                        </p>
                        <p className="eyebrow text-ivory/80">
                            Av. Allal El Fassi Complexe Ahbas IMM B 1ère étage
                            App 8, Daoudiat Marrakech
                        </p>
                    </div>
                </div>

                <form
                    onSubmit={handleSubmit}
                    className="space-y-8 border border-ivory/10 bg-ivory/[0.04] p-8 backdrop-blur-sm md:p-12"
                >
                    <div className="grid grid-cols-1 gap-7 md:grid-cols-2">
                        <Field label={__('Full Name')} error={errors.full_name}>
                            <input
                                type="text"
                                name="full_name"
                                value={data.full_name}
                                onChange={(e) =>
                                    setData('full_name', e.target.value)
                                }
                                required
                                autoComplete="name"
                                className="w-full border-b border-ivory/20 bg-transparent py-2 text-base transition-colors outline-none focus:border-terracotta"
                            />
                        </Field>
                        <Field label={__('Email Address')} error={errors.email}>
                            <input
                                type="email"
                                name="email"
                                value={data.email}
                                onChange={(e) =>
                                    setData('email', e.target.value)
                                }
                                required
                                autoComplete="email"
                                className="w-full border-b border-ivory/20 bg-transparent py-2 text-base transition-colors outline-none focus:border-terracotta"
                            />
                        </Field>
                    </div>

                    <div className="grid grid-cols-1 gap-7 md:grid-cols-2">
                        <Field label={__('Phone Number')} error={errors.phone}>
                            <input
                                type="tel"
                                name="phone"
                                value={data.phone}
                                onChange={(e) =>
                                    setData('phone', e.target.value)
                                }
                                className="w-full border-b border-ivory/20 bg-transparent py-2 text-base transition-colors outline-none focus:border-terracotta"
                            />
                        </Field>
                        <Field
                            label={__('Preferred Region')}
                            error={errors.region}
                        >
                            <select
                                name="region"
                                value={data.region}
                                onChange={(e) =>
                                    setData('region', e.target.value)
                                }
                                required
                                className="w-full cursor-pointer border-b border-ivory/20 bg-transparent py-2 text-base transition-colors outline-none focus:border-terracotta"
                            >
                                <option value="" disabled className="bg-clay">
                                    {__('Select a region')}
                                </option>
                                <option value="The Sahara" className="bg-clay">
                                    {__('The Sahara')}
                                </option>
                                <option
                                    value="The Atlas Mountains"
                                    className="bg-clay"
                                >
                                    {__('The Atlas Mountains')}
                                </option>
                                <option
                                    value="Marrakesh & Imperial Cities"
                                    className="bg-clay"
                                >
                                    {__('Marrakesh & Imperial Cities')}
                                </option>
                                <option
                                    value="Atlantic Coast"
                                    className="bg-clay"
                                >
                                    {__('Atlantic Coast')}
                                </option>
                                <option
                                    value="Custom Combination"
                                    className="bg-clay"
                                >
                                    {__('Custom Combination')}
                                </option>
                            </select>
                        </Field>
                    </div>

                    <div className="grid grid-cols-1 gap-7 md:grid-cols-2">
                        <Field
                            label={__('Number of Adults')}
                            error={errors.adults}
                        >
                            <input
                                type="number"
                                name="adults"
                                value={data.adults}
                                onChange={(e) =>
                                    setData('adults', parseInt(e.target.value))
                                }
                                min="1"
                                placeholder="0"
                                className="w-full border-b border-ivory/20 bg-transparent py-2 text-base transition-colors outline-none focus:border-terracotta"
                            />
                        </Field>
                        <Field
                            label={__('Number of Children')}
                            error={errors.children}
                        >
                            <input
                                type="number"
                                name="children"
                                value={data.children}
                                onChange={(e) =>
                                    setData(
                                        'children',
                                        parseInt(e.target.value),
                                    )
                                }
                                min="0"
                                placeholder="0"
                                className="w-full border-b border-ivory/20 bg-transparent py-2 text-base transition-colors outline-none focus:border-terracotta"
                            />
                        </Field>
                    </div>

                    <Field
                        label={__('Preferred Travel Dates')}
                        error={errors.preferred_dates}
                    >
                        <input
                            type="text"
                            name="preferred_dates"
                            value={data.preferred_dates}
                            onChange={(e) =>
                                setData('preferred_dates', e.target.value)
                            }
                            placeholder={__(
                                'e.g., September 2024 or Oct 10-20',
                            )}
                            className="w-full border-b border-ivory/20 bg-transparent py-2 text-base transition-colors outline-none focus:border-terracotta"
                        />
                    </Field>

                    <Field
                        label={__('Tell us about your ideal journey')}
                        error={errors.message}
                    >
                        <textarea
                            name="message"
                            value={data.message}
                            onChange={(e) => setData('message', e.target.value)}
                            rows={3}
                            placeholder={__(
                                'Tell us about your interests, preferences, and any specific requests...',
                            )}
                            className="w-full resize-none border-b border-ivory/20 bg-transparent py-2 text-base transition-colors outline-none focus:border-terracotta"
                        />
                    </Field>

                    <button
                        type="submit"
                        disabled={processing}
                        className="eyebrow w-full bg-ivory py-5 font-semibold text-clay transition-all duration-500 hover:bg-terracotta hover:text-ivory disabled:opacity-60"
                    >
                        {processing
                            ? __('Sending...')
                            : __('Request a Proposal')}
                    </button>
                </form>
            </div>
        </section>
    );
}

function Field({
    label,
    error,
    children,
}: {
    label: string;
    error?: string;
    children: React.ReactNode;
}) {
    return (
        <label className="block space-y-2">
            <div className="flex items-baseline justify-between">
                <span className="eyebrow text-ivory/55">{label}</span>
                {error && (
                    <span className="text-[10px] tracking-widest text-terracotta uppercase">
                        {error}
                    </span>
                )}
            </div>
            {children}
        </label>
    );
}
