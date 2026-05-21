import img from '@/assets/cinematic-break.jpg';
import { useTranslation } from '@/hooks/use-translation';

export function CinematicBreak() {
    const { __ } = useTranslation();
    return (
        <section className="relative h-[80vh] min-h-[520px] overflow-hidden">
            <img
                src={img}
                alt={__('Marrakech medina rooftops at dusk')}
                className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-clay/20 to-clay/70" />
            <div className="relative flex h-full items-end px-6 pb-16 md:px-10 md:pb-24">
                <p className="max-w-3xl font-display text-3xl leading-[1.05] text-balance text-ivory md:text-6xl">
                    {__('Where the call to prayer drifts above terracotta walls and the air tastes of orange blossom.')}
                </p>
            </div>
        </section>
    );
}
