import { ReactNode } from 'react';
import { FloatingActions } from '@/components/site/FloatingActions';

export default function SiteLayout({ children }: { children: ReactNode }) {
    return (
        <div className="min-h-screen bg-sand text-indigo-ink selection:bg-terracotta/20">
            {children}
            <FloatingActions />
        </div>
    );
}
