import { Breadcrumbs } from '@/components/breadcrumbs';
import { SidebarTrigger } from '@/components/ui/sidebar';
import type { BreadcrumbItem as BreadcrumbItemType } from '@/types';

export function AppSidebarHeader({
    breadcrumbs = [],
}: {
    breadcrumbs?: BreadcrumbItemType[];
}) {
    return (
        <header className="flex h-16 shrink-0 items-center gap-2 border-b border-indigo-ink/5 px-6 lg:px-10 bg-white/50 backdrop-blur-sm sticky top-0 z-10 transition-[width,height] ease-linear w-full">
            <div className="flex items-center gap-2">
                <SidebarTrigger className="-ml-1 text-indigo-ink/60 hover:text-terracotta transition-colors" />
                {breadcrumbs.length > 0 && <Breadcrumbs breadcrumbs={breadcrumbs} />}
            </div>
        </header>
    );
}
