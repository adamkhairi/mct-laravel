'use client';
import { useState, type FormEvent } from 'react';
import { toast } from 'sonner';

export function Contact() {
    const [submitting, setSubmitting] = useState(false);

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setSubmitting(true);
        setTimeout(() => {
            setSubmitting(false);
            (e.target as HTMLFormElement).reset();
            toast.success('Inquiry received', {
                description: 'Our concierge will be in touch within 24 hours.',
            });
        }, 600);
    }

    return (
        <section
            id="contact"
            className="bg-clay px-6 py-24 text-ivory md:px-10 md:py-32"
        >
            <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-16 md:grid-cols-2 md:gap-24">
                <div>
                    <span className="eyebrow mb-8 block text-terracotta">
                        Begin
                    </span>
                    <h2 className="font-display text-5xl leading-[0.95] font-bold md:text-7xl">
                        Begin the
                        <br />
                        Dialogue.
                    </h2>
                    <p className="mt-8 max-w-sm leading-relaxed text-ivory/65">
                        Connect with our Marrakesh studio to begin crafting your
                        bespoke itinerary. Every conversation is private and
                        unhurried.
                    </p>
                    <div className="mt-12 space-y-4">
                        <p className="eyebrow text-ivory/80">
                            Studio &middot; +212 524 448 000
                        </p>
                        <p className="eyebrow text-ivory/80">
                            concierge@moroccanclub.travel
                        </p>
                        <p className="eyebrow text-ivory/80">
                            Riad Laaroussa &middot; Marrakesh Medina
                        </p>
                    </div>
                </div>

                <form
                    onSubmit={handleSubmit}
                    className="space-y-8 border border-ivory/10 bg-ivory/[0.04] p-8 backdrop-blur-sm md:p-12"
                >
                    <div className="grid grid-cols-1 gap-7 md:grid-cols-2">
                        <Field label="Full Name">
                            <input
                                type="text"
                                required
                                autoComplete="name"
                                className="w-full border-b border-ivory/20 bg-transparent py-2 text-base transition-colors outline-none focus:border-terracotta"
                            />
                        </Field>
                        <Field label="Email Address">
                            <input
                                type="email"
                                required
                                autoComplete="email"
                                className="w-full border-b border-ivory/20 bg-transparent py-2 text-base transition-colors outline-none focus:border-terracotta"
                            />
                        </Field>
                    </div>

                    <div className="grid grid-cols-1 gap-7 md:grid-cols-2">
                        <Field label="Phone Number">
                            <input
                                type="tel"
                                className="w-full border-b border-ivory/20 bg-transparent py-2 text-base transition-colors outline-none focus:border-terracotta"
                            />
                        </Field>
                        <Field label="Preferred Region">
                            <select
                                defaultValue=""
                                required
                                className="w-full cursor-pointer border-b border-ivory/20 bg-transparent py-2 text-base transition-colors outline-none focus:border-terracotta"
                            >
                                <option value="" disabled className="bg-clay">
                                    Select a region
                                </option>
                                <option className="bg-clay">The Sahara</option>
                                <option className="bg-clay">
                                    The Atlas Mountains
                                </option>
                                <option className="bg-clay">
                                    Marrakesh & Imperial Cities
                                </option>
                                <option className="bg-clay">
                                    Atlantic Coast
                                </option>
                                <option className="bg-clay">
                                    Custom Combination
                                </option>
                            </select>
                        </Field>
                    </div>

                    <div className="grid grid-cols-1 gap-7 md:grid-cols-2">
                        <Field label="Number of Adults">
                            <input
                                type="number"
                                min="1"
                                placeholder="0"
                                className="w-full border-b border-ivory/20 bg-transparent py-2 text-base transition-colors outline-none focus:border-terracotta"
                            />
                        </Field>
                        <Field label="Number of Children">
                            <input
                                type="number"
                                min="0"
                                placeholder="0"
                                className="w-full border-b border-ivory/20 bg-transparent py-2 text-base transition-colors outline-none focus:border-terracotta"
                            />
                        </Field>
                    </div>

                    <Field label="Preferred Travel Dates">
                        <input
                            type="text"
                            placeholder="e.g., September 2024 or Oct 10-20"
                            className="w-full border-b border-ivory/20 bg-transparent py-2 text-base transition-colors outline-none focus:border-terracotta"
                        />
                    </Field>

                    <Field label="Tell us about your ideal journey">
                        <textarea
                            rows={3}
                            placeholder="Tell us about your interests, preferences, and any specific requests..."
                            className="w-full resize-none border-b border-ivory/20 bg-transparent py-2 text-base transition-colors outline-none focus:border-terracotta"
                        />
                    </Field>

                    <button
                        type="submit"
                        disabled={submitting}
                        className="eyebrow w-full bg-ivory py-5 font-semibold text-clay transition-all duration-500 hover:bg-terracotta hover:text-ivory disabled:opacity-60"
                    >
                        {submitting ? 'Sending...' : 'Request a Proposal'}
                    </button>
                </form>
            </div>
        </section>
    );
}

function Field({
    label,
    children,
}: {
    label: string;
    children: React.ReactNode;
}) {
    return (
        <label className="block space-y-2">
            <span className="eyebrow text-ivory/55">{label}</span>
            {children}
        </label>
    );
}
