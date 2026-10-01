import { Link, usePage } from '@inertiajs/react';
import { useTranslation } from '@/hooks/use-translation';
import { localizedPath } from '@/lib/localized-path';

export interface BreadcrumbItem {
    label: string;
    href?: string;
}

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
    const { currentLocale } = useTranslation();
    const { url, props } = usePage<{ siteUrl: string }>();
    const currentPath = url.split(/[?#]/, 1)[0] || '/';
    const itemListElement = items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.label,
        item: new URL(
            localizedPath(item.href ?? currentPath, currentLocale),
            `${props.siteUrl}/`,
        ).href,
    }));

    return (
        <>
            <nav aria-label="Breadcrumb" className="mb-8 text-sm">
                <ol className="flex flex-wrap items-center gap-2 text-foreground/55">
                    {items.map((item, index) => (
                        <li key={`${item.label}-${index}`} className="flex items-center gap-2">
                            {index > 0 && <span aria-hidden="true">/</span>}
                            {item.href ? (
                                <Link
                                    href={localizedPath(item.href, currentLocale)}
                                    className="transition-colors hover:text-terracotta"
                                >
                                    {item.label}
                                </Link>
                            ) : (
                                <span aria-current="page" className="text-foreground">
                                    {item.label}
                                </span>
                            )}
                        </li>
                    ))}
                </ol>
            </nav>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'BreadcrumbList',
                        itemListElement,
                    }),
                }}
            />
        </>
    );
}
