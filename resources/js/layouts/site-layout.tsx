import { ReactNode } from 'react';

export default function SiteLayout({ children }: { children: ReactNode }) {
    return (
        <div className="min-h-screen bg-sand text-indigo-ink selection:bg-terracotta/20">
            {children}
        </div>
    );
}
