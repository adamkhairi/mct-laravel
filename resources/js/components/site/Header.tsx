'use client';
import { Link, router } from '@inertiajs/react';
import { Menu, X, Globe } from 'lucide-react';
import { useEffect, useState } from 'react';
import logoMark from '@/assets/logo-mark.png';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
} from '@/components/ui/select';
import { useTranslation } from '@/hooks/use-translation';

const LANGUAGE_MAP: Record<string, { name: string; flag: React.ReactNode }> = {
    en: { name: 'English', flag: <span className="text-base">🇬🇧</span> },
    es: { name: 'Español', flag: <span className="text-base">🇪🇸</span> },
    fr: { name: 'Français', flag: <span className="text-base">🇫🇷</span> },
    de: { name: 'Deutsch', flag: <span className="text-base">🇩🇪</span> },
    it: { name: 'Italiano', flag: <span className="text-base">🇮🇹</span> },
    pt: { name: 'Português', flag: <span className="text-base">🇵🇹</span> },
    zh: { name: '中文', flag: <span className="text-base">🇨🇳</span> },
    nl: { name: 'Nederlands', flag: <span className="text-base">🇳🇱</span> },
    ru: { name: 'Русский', flag: <span className="text-base">🇷🇺</span> },
};

export function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const { __, currentLocale, locales } = useTranslation();

    const changeLanguage = (locale: string) => {
        router.post('/language', { locale });
    };

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });

        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // Prevent scroll when mobile menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    return (
        <header
            className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
                scrolled || isOpen
                    ? `border-b border-indigo-ink/10 ${isOpen ? 'bg-sand' : 'bg-sand/90 backdrop-blur-md'}`
                    : 'bg-transparent'
            }`}
        >
            <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 md:px-10">
                <Link
                    href="/"
                    className="group z-50 flex items-center gap-3"
                    onClick={() => setIsOpen(false)}
                >
                    <img
                        src={logoMark}
                        alt="Moroccan Club Travel"
                        className="h-9 w-auto"
                    />
                    <span
                        className="font-display text-lg leading-none tracking-tight"
                        style={{ textShadow: '0 1px 2px rgba(0,0,0,0.05)' }}
                    >
                        Moroccan Club
                        <span className="eyebrow mt-1 block text-indigo-ink/50 text-terracotta">
                            Travel
                        </span>
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <div className="eyebrow hidden gap-10 md:flex">
                    <Link
                        href="/about"
                        className="transition-colors hover:text-terracotta"
                    >
                        {__('About')}
                    </Link>
                    <Link
                        href="/tours"
                        className="transition-colors hover:text-terracotta"
                    >
                        {__('Tours')}
                    </Link>
                    <a
                        href="/#philosophy"
                        className="transition-colors hover:text-terracotta"
                    >
                        {__('Philosophy')}
                    </a>
                    <a
                        href="/#reviews"
                        className="transition-colors hover:text-terracotta"
                    >
                        {__('Reviews')}
                    </a>
                    <a
                        href="/#faq"
                        className="transition-colors hover:text-terracotta"
                    >
                        {__('FAQ')}
                    </a>
                </div>

                {/* Action Button & Hamburger Toggle */}
                <div className="z-50 flex items-center gap-6">
                    {/* Language Switcher */}
                    <div className="hidden items-center gap-1.5 text-indigo-ink/75 transition-colors hover:text-terracotta sm:flex">
                        <Select
                            value={currentLocale}
                            onValueChange={changeLanguage}
                        >
                            <SelectTrigger className="eyebrow h-auto gap-1.5 border-none bg-transparent p-0 text-xs uppercase hover:text-terracotta focus:ring-0">
                                <Globe className="h-4 w-4 stroke-[1.5]" />
                                <span className="uppercase">
                                    {currentLocale}
                                </span>
                            </SelectTrigger>
                            <SelectContent className="bg-sand text-indigo-ink">
                                {locales.map((lang) => (
                                    <SelectItem
                                        key={lang}
                                        value={lang}
                                        className="uppercase"
                                    >
                                        <div className="flex items-center gap-2">
                                            {LANGUAGE_MAP[lang]?.flag}
                                            <span>
                                                {LANGUAGE_MAP[lang]?.name}
                                            </span>
                                        </div>
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>

                    <a
                        href="/#contact"
                        onClick={() => setIsOpen(false)}
                        className="eyebrow border-b border-foreground/30 pb-1 transition-colors hover:border-terracotta hover:text-terracotta"
                    >
                        {__('Inquire')}
                    </a>

                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="flex p-1 text-indigo-ink transition-colors hover:text-terracotta focus:outline-none md:hidden"
                        aria-label={__('Toggle Menu')}
                    >
                        {isOpen ? (
                            <X className="h-6 w-6 stroke-[1.5]" />
                        ) : (
                            <Menu className="h-6 w-6 stroke-[1.5]" />
                        )}
                    </button>
                </div>
            </nav>

            {/* Elegant Mobile Menu Overlay */}
            <div
                className={`fixed inset-x-0 top-20 bottom-0 z-40 bg-sand transition-all duration-500 ease-[var(--ease-out-expo)] md:hidden ${
                    isOpen
                        ? 'translate-y-0 opacity-100'
                        : 'pointer-events-none -translate-y-4 opacity-0'
                }`}
            >
                <div className="flex h-[calc(100vh-5rem)] flex-col justify-between overflow-y-auto bg-sand p-8 pt-12 pb-24">
                    <div className="flex flex-col gap-8">
                        <span className="eyebrow text-[9px] tracking-[0.25em] text-terracotta">
                            {__('Navigation')}
                        </span>
                        <div className="flex flex-col gap-6">
                            <Link
                                href="/about"
                                onClick={() => setIsOpen(false)}
                                className="border-b border-foreground/5 py-2 font-display text-4xl transition-colors hover:text-terracotta"
                            >
                                {__('About')}
                            </Link>
                            <Link
                                href="/tours"
                                onClick={() => setIsOpen(false)}
                                className="border-b border-foreground/5 py-2 font-display text-4xl transition-colors hover:text-terracotta"
                            >
                                {__('Tours')}
                            </Link>
                            <a
                                href="/#philosophy"
                                onClick={() => setIsOpen(false)}
                                className="border-b border-foreground/5 py-2 font-display text-4xl transition-colors hover:text-terracotta"
                            >
                                {__('Philosophy')}
                            </a>
                            <a
                                href="/#reviews"
                                onClick={() => setIsOpen(false)}
                                className="border-b border-foreground/5 py-2 font-display text-4xl transition-colors hover:text-terracotta"
                            >
                                {__('Reviews')}
                            </a>
                            <a
                                href="/#faq"
                                onClick={() => setIsOpen(false)}
                                className="border-b border-foreground/5 py-2 font-display text-4xl transition-colors hover:text-terracotta"
                            >
                                {__('FAQ')}
                            </a>
                        </div>
                    </div>

                    <div className="space-y-6 border-t border-foreground/10 pt-8">
                        <div>
                            <span className="eyebrow mb-3 block text-[9px] tracking-[0.25em] text-terracotta">
                                {__('Language')}
                            </span>
                            <div className="flex flex-wrap gap-2.5">
                                {locales.map((lang) => (
                                    <button
                                        key={lang}
                                        onClick={() => {
                                            changeLanguage(lang);
                                            setIsOpen(false);
                                        }}
                                        className={`eyebrow flex items-center gap-2 rounded-sm border px-3 py-1.5 text-xs uppercase transition-all ${
                                            currentLocale === lang
                                                ? 'border-terracotta bg-terracotta/5 text-terracotta'
                                                : 'border-foreground/10 text-indigo-ink/60 hover:border-foreground/30'
                                        }`}
                                    >
                                        {LANGUAGE_MAP[lang]?.flag}
                                        {lang}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div>
                            <span className="eyebrow mb-2 block text-[9px] text-indigo-ink/40">
                                {__('Concierge & Studio')}
                            </span>
                            <p className="font-display text-lg text-indigo-ink">
                                +212 524 311 743
                            </p>
                            <p className="text-sm text-indigo-ink/60">
                                booking@moroccanclubtravel.com
                            </p>
                        </div>

                        <div className="flex gap-4">
                            <a
                                href="#"
                                className="eyebrow text-[9px] text-indigo-ink/50 transition-colors hover:text-terracotta"
                            >
                                Instagram
                            </a>
                            <a
                                href="#"
                                className="eyebrow text-[9px] text-indigo-ink/50 transition-colors hover:text-terracotta"
                            >
                                Facebook
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
