import { Breadcrumbs } from '@/components/breadcrumbs';
import { SidebarTrigger } from '@/components/ui/sidebar';
import type { BreadcrumbItem as BreadcrumbItemType } from '@/types';

export function AppSidebarHeader({
    breadcrumbs = [],
}: {
    breadcrumbs?: BreadcrumbItemType[];
}) {
    return (
        <header className="sticky top-0 z-10 flex h-16 w-full shrink-0 items-center gap-2 border-b border-indigo-ink/5 bg-white/50 px-6 backdrop-blur-sm transition-[width,height] ease-linear lg:px-10">
            <div className="flex items-center gap-2">
                <SidebarTrigger className="-ml-1 text-indigo-ink/60 transition-colors hover:text-terracotta" />
                {breadcrumbs.length > 0 && (
                    <Breadcrumbs breadcrumbs={breadcrumbs} />
                )}
            </div>
        </header>
    );
}
