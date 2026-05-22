import { useTranslation } from '@/hooks/use-translation';

export function Philosophy() {
    const { __ } = useTranslation();

    return (
        <section
            id="philosophy"
            className="border-y border-indigo-ink/10 bg-sand px-6 py-28 md:px-10 md:py-36"
        >
            <div className="mx-auto max-w-3xl text-center">
                <span className="eyebrow mb-12 block text-terracotta">
                    {__('Our Philosophy')}
                </span>
                <blockquote className="font-display text-3xl leading-[1.15] text-balance md:text-5xl">
                    &ldquo;
                    {__(
                        'To travel with us is to witness Morocco as it reveals itself to those who know how to',
                    )}{' '}
                    <i className="text-terracotta">{__('listen')}</i>.&rdquo;
                </blockquote>
                <p className="mx-auto mt-12 max-w-xl leading-relaxed text-indigo-ink/65">
                    {__(
                        'A decade of presence in the Kingdom. Quiet relationships with riad owners, mountain guides, weavers and chefs. Your itinerary is built by hand, never by template — with absolute discretion and an obsession for the smaller hours.',
                    )}
                </p>
                <div className="mx-auto mt-14 h-20 w-px bg-foreground/15" />
            </div>
        </section>
    );
}
