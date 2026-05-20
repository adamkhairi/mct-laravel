'use client';
import { useEffect, useState } from 'react';
import { Link } from '@inertiajs/react';
import { Instagram, Facebook } from 'lucide-react';
import logo from '@/assets/logo-full-white.png';

export function Footer() {
    const [year, setYear] = useState<string | null>(null);

    useEffect(() => {
        setYear(String(new Date().getFullYear()));
    }, []);

    return (
        <footer className="border-t border-ivory/5 bg-clay px-6 py-14 text-ivory/55 md:px-10">
            <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-10 md:flex-row">
                <div className="px-4 py-2 flex flex-col items-center md:items-start">
                    <img
                        src={logo}
                        alt="Moroccan Club Travel"
                        className="h-20 w-auto"
                    />
                    <div className="mt-6 space-y-2 text-center md:text-left">
                         <p className="eyebrow text-[10px] text-ivory/40">
                            +212 524 311 743
                        </p>
                        <p className="eyebrow text-[10px] text-ivory/40">
                            booking@moroccanclubtravel.com
                        </p>
                        <p className="eyebrow text-[10px] leading-relaxed text-ivory/40 max-w-xs">
                            Av. Allal El Fassi Complexe Ahbas IMM B 1ère étage App 8, Daoudiat Marrakech
                        </p>
                    </div>
                </div>

                <div className="eyebrow flex flex-wrap justify-center gap-x-8 gap-y-4 md:gap-10">
                    <Link
                        href="/tours"
                        className="transition-colors hover:text-ivory"
                    >
                        Tours
                    </Link>
                    <a
                        href="/#reviews"
                        className="transition-colors hover:text-ivory"
                    >
                        Reviews
                    </a>
                    <a
                        href="/#faq"
                        className="transition-colors hover:text-ivory"
                    >
                        FAQ
                    </a>
                    <a href="#" className="transition-colors hover:text-ivory">
                        Journal
                    </a>
                    <a href="#" className="transition-colors hover:text-ivory">
                        Privacy
                    </a>
                </div>

                <div className="flex items-center gap-6">
                    <a
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-colors hover:text-ivory"
                        aria-label="X (Twitter)"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-5 w-5"
                        >
                            <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                            <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
                        </svg>
                    </a>
                    <a
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-colors hover:text-ivory"
                        aria-label="Instagram"
                    >
                        <Instagram className="h-5 w-5" />
                    </a>
                    <a
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-colors hover:text-ivory"
                        aria-label="Facebook"
                    >
                        <Facebook className="h-5 w-5" />
                    </a>
                    <a
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-colors hover:text-ivory"
                        aria-label="TikTok"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-5 w-5"
                        >
                            <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                            <path d="M15 8a5 5 0 0 1 5 5" />
                        </svg>
                    </a>
                </div>
            </div>

            <div className="mx-auto mt-12 max-w-7xl border-t border-ivory/5 pt-8 text-center">
                <p className="eyebrow text-ivory/40">
                    © {year ?? '2026'} &middot; All rights reserved
                </p>
            </div>
        </footer>
    );
}
