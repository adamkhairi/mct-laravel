'use client';
import { MessageCircle, ArrowUp } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useTranslation } from '@/hooks/use-translation';

export function FloatingActions() {
    const { __ } = useTranslation();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 400) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div className="fixed right-6 bottom-6 z-50 flex flex-col-reverse gap-3 md:right-8 md:bottom-10">
            {/* WhatsApp Button - Editorial Design */}
            <a
                href="https://wa.me/212661250743"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex h-11 w-11 items-center justify-center bg-indigo-ink text-ivory shadow-[0_4px_20px_rgba(0,0,0,0.15)] transition-all duration-500 hover:bg-terracotta"
                aria-label={__('Chat on WhatsApp')}
            >
                <MessageCircle className="h-5 w-5 stroke-[1.5]" />

                {/* Minimalist Tooltip */}
                <div className="pointer-events-none absolute top-1/2 right-full mr-4 translate-x-2 -translate-y-1/2 opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100">
                    <span className="eyebrow block bg-indigo-ink px-3 py-1 text-[9px] tracking-[0.2em] whitespace-nowrap text-ivory">
                        {__('Chat with us')}
                    </span>
                </div>
            </a>

            {/* Scroll to Top - Editorial Design */}
            <button
                onClick={scrollToTop}
                className={`flex h-11 w-11 items-center justify-center border border-indigo-ink/5 bg-ivory text-indigo-ink shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-all duration-700 ease-[var(--ease-out-expo)] ${
                    isVisible
                        ? 'translate-y-0 scale-100 opacity-100'
                        : 'pointer-events-none translate-y-8 scale-90 opacity-0'
                } group relative hover:border-terracotta hover:bg-terracotta hover:text-ivory`}
                aria-label={__('Scroll to top')}
            >
                <ArrowUp className="h-5 w-5 stroke-[1.5]" />

                {/* Minimalist Tooltip */}
                <div className="pointer-events-none absolute top-1/2 right-full mr-4 translate-x-2 -translate-y-1/2 opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100">
                    <span className="eyebrow block bg-indigo-ink px-3 py-1 text-[9px] tracking-[0.2em] whitespace-nowrap text-ivory">
                        {__('Back to top')}
                    </span>
                </div>
            </button>
        </div>
    );
}
