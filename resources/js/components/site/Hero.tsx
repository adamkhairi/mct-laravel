import heroImg from '@/assets/hero-sahara.jpg';
import { useTranslation } from '@/hooks/use-translation';

export function Hero() {
    const { __ } = useTranslation();
    return (
        <section className="relative isolate flex h-screen min-h-[680px] flex-col justify-end overflow-hidden bg-clay">
            <div className="animate-scale-in absolute inset-0">
                <img
                    src={heroImg}
                    alt={__('Sahara desert dunes at golden hour')}
                    className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-clay/85 via-clay/40 to-clay/30" />
            </div>

            <div className="animate-fade-up relative z-10 mx-auto w-full max-w-7xl px-6 pb-16 text-ivory [animation-delay:300ms] md:px-10 md:pb-24">
                <span className="eyebrow mb-6 block italic opacity-80">
                    {__('Est. 2014 — Marrakesh')}
                </span>
                <h1 className="max-w-[14ch] font-display text-5xl leading-[0.92] font-bold text-balance sm:text-7xl md:text-[8.5vw] lg:text-9xl">
                    {__('The')}{' '}
                    <i className="font-normal text-terracotta">
                        {__('Silent')}
                    </i>{' '}
                    {__('Magic of the Maghreb.')}
                </h1>
                <div className="mt-10 flex flex-col gap-8 md:mt-14 md:flex-row md:items-center md:gap-12">
                    <a
                        href="#contact"
                        className="eyebrow inline-flex items-center justify-center bg-ivory px-10 py-5 text-clay transition-colors hover:bg-terracotta hover:text-ivory"
                    >
                        {__('Reserve Your Journey')}
                    </a>
                    <p className="max-w-xs text-sm leading-relaxed text-ivory/80">
                        {__(
                            'Bespoke tours through the high Atlas, the red city, and the drifting sands of the deep south.',
                        )}
                    </p>
                </div>
            </div>
        </section>
    );
}
