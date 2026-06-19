import { useTranslation } from '@/hooks/use-translation';

const partnerLogos = [
    { src: '/assets/partners/cadi-logo.png', alt: 'Cadi' },
    { src: '/assets/partners/logo-cr.png', alt: 'CR' },
    { src: '/assets/partners/salam.png', alt: 'Salam' },
    { src: '/assets/partners/sam.png', alt: 'SAM' },
    { src: '/assets/partners/world-bull.png', alt: 'World Bull' },
    { src: '/assets/partners/world.png', alt: 'World' },
];

export function Partners() {
    const { __ } = useTranslation();

    return (
        <section className="border-t border-ivory/5 bg-clay px-6 py-20 text-ivory md:px-10 md:py-28">
            <div className="mx-auto max-w-7xl">

                {/* Header row */}
                <div className="mb-16 flex flex-col gap-6 md:mb-20 md:flex-row md:items-end md:justify-between">
                    <div>
                        <span className="eyebrow mb-4 block text-terracotta">
                            {__('Our Network')}
                        </span>
                        <h2 className="font-display text-3xl leading-[1.1] font-bold md:text-5xl">
                            {__('Trusted by')}{' '}
                            <span className="font-normal text-ivory/50 italic">
                                {__('industry leaders')}
                            </span>
                        </h2>
                    </div>
                    <p className="max-w-xs text-sm leading-relaxed text-ivory/45 md:text-right">
                        {__(
                            'A curated network of certified operators, accommodation partners and transport specialists across Morocco.',
                        )}
                    </p>
                </div>

                {/* Divider */}
                <div className="mb-16 h-px bg-ivory/8" />

                {/* Logo grid — static on desktop */}
                <div className="hidden grid-cols-6 items-center gap-0 md:grid">
                    {partnerLogos.map((logo, i) => (
                        <div
                            key={logo.alt}
                            className={`group flex items-center justify-center px-8 py-6 transition-all duration-500 ${i < partnerLogos.length - 1
                                ? 'border-r border-ivory/8'
                                : ''
                                }`}
                        >
                            <img
                                src={logo.src}
                                alt={logo.alt}
                                className="h-8 w-auto object-contain opacity-35 transition-all duration-500 group-hover:opacity-80"
                            />
                        </div>
                    ))}
                </div>

                {/* Logo marquee — mobile only */}
                <div className="relative overflow-hidden md:hidden">
                    <div className="flex">
                        {/* First pass */}
                        <div className="animate-marquee flex shrink-0 items-center gap-16 pr-16">
                            {partnerLogos.map((logo) => (
                                <img
                                    key={logo.alt}
                                    src={logo.src}
                                    alt={logo.alt}
                                    className="h-8 w-auto object-contain opacity-40"
                                />
                            ))}
                        </div>
                        {/* Duplicate for seamless loop */}
                        <div
                            aria-hidden="true"
                            className="animate-marquee flex shrink-0 items-center gap-16 pr-16"
                        >
                            {partnerLogos.map((logo) => (
                                <img
                                    key={`dup-${logo.alt}`}
                                    src={logo.src}
                                    alt=""
                                    className="h-12 w-auto object-contain opacity-40"
                                />
                            ))}
                        </div>
                    </div>
                    <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-clay to-transparent" />
                    <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-clay to-transparent" />
                </div>

                {/* Bottom rule + footnote */}
                <div className="mt-16 flex flex-col items-start gap-4 border-t border-ivory/8 pt-8 md:flex-row md:items-center md:justify-between">
                    <p className="eyebrow text-ivory/25">
                        {__('Certified & licensed partners')}
                    </p>
                    <div className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-terracotta" />
                        <span className="eyebrow text-ivory/25">
                            {__('Morocco · Est. 2014')}
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}
