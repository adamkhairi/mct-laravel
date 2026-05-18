export function Philosophy() {
    return (
        <section
            id="philosophy"
            className="border-y border-indigo-ink/10 bg-sand px-6 py-28 md:px-10 md:py-36"
        >
            <div className="mx-auto max-w-3xl text-center">
                <span className="eyebrow mb-12 block text-terracotta">
                    Our Philosophy
                </span>
                <blockquote className="font-display text-3xl leading-[1.15] text-balance md:text-5xl">
                    &ldquo;To travel with us is to witness Morocco as it reveals
                    itself to those who know how to{' '}
                    <i className="text-terracotta">listen</i>.&rdquo;
                </blockquote>
                <p className="mx-auto mt-12 max-w-xl leading-relaxed text-indigo-ink/65">
                    A decade of presence in the Kingdom. Quiet relationships
                    with riad owners, mountain guides, weavers and chefs. Your
                    itinerary is built by hand, never by template &mdash; with
                    absolute discretion and an obsession for the smaller hours.
                </p>
                <div className="mx-auto mt-14 h-20 w-px bg-foreground/15" />
            </div>
        </section>
    );
}
