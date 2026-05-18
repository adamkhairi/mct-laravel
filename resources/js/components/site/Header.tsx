'use client';
import { Link } from '@inertiajs/react';
import { useEffect, useState } from 'react';
import logoMark from '@/assets/logo-mark.png';
import { Menu, X } from 'lucide-react';

export function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

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
                    ? 'border-b border-indigo-ink/10 bg-sand/90 backdrop-blur-md'
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
                        href="/tours"
                        className="transition-colors hover:text-terracotta"
                    >
                        Tours
                    </Link>
                    <a
                        href="/#philosophy"
                        className="transition-colors hover:text-terracotta"
                    >
                        Philosophy
                    </a>
                    <a
                        href="/#reviews"
                        className="transition-colors hover:text-terracotta"
                    >
                        Reviews
                    </a>
                    <a
                        href="/#faq"
                        className="transition-colors hover:text-terracotta"
                    >
                        FAQ
                    </a>
                </div>

                {/* Action Button & Hamburger Toggle */}
                <div className="z-50 flex items-center gap-6">
                    <a
                        href="/#contact"
                        onClick={() => setIsOpen(false)}
                        className="eyebrow border-b border-foreground/30 pb-1 transition-colors hover:border-terracotta hover:text-terracotta"
                    >
                        Inquire
                    </a>

                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="flex p-1 text-indigo-ink transition-colors hover:text-terracotta focus:outline-none md:hidden"
                        aria-label="Toggle Menu"
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
                <div className="flex h-[calc(100vh-5rem)] flex-col justify-between overflow-y-auto p-8 pt-12 pb-24">
                    <div className="flex flex-col gap-8">
                        <span className="eyebrow text-[9px] tracking-[0.25em] text-terracotta">
                            Navigation
                        </span>
                        <div className="flex flex-col gap-6">
                            <Link
                                href="/tours"
                                onClick={() => setIsOpen(false)}
                                className="border-b border-foreground/5 py-2 font-display text-4xl transition-colors hover:text-terracotta"
                            >
                                Tours
                            </Link>
                            <a
                                href="/#philosophy"
                                onClick={() => setIsOpen(false)}
                                className="border-b border-foreground/5 py-2 font-display text-4xl transition-colors hover:text-terracotta"
                            >
                                Philosophy
                            </a>
                            <a
                                href="/#reviews"
                                onClick={() => setIsOpen(false)}
                                className="border-b border-foreground/5 py-2 font-display text-4xl transition-colors hover:text-terracotta"
                            >
                                Reviews
                            </a>
                            <a
                                href="/#faq"
                                onClick={() => setIsOpen(false)}
                                className="border-b border-foreground/5 py-2 font-display text-4xl transition-colors hover:text-terracotta"
                            >
                                FAQ
                            </a>
                        </div>
                    </div>

                    <div className="space-y-6 border-t border-foreground/10 pt-8">
                        <div>
                            <span className="eyebrow mb-2 block text-[9px] text-indigo-ink/40">
                                Concierge & Studio
                            </span>
                            <p className="font-display text-lg text-indigo-ink">
                                +212 524 448 000
                            </p>
                            <p className="text-sm text-indigo-ink/60">
                                concierge@moroccanclub.travel
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
