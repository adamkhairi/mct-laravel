import { Head, Link } from '@inertiajs/react';
import { useTranslation } from '@/hooks/use-translation';
import SiteLayout from '@/layouts/site-layout';
import { localizedPath } from '@/lib/localized-path';

export default function ErrorPage({ status }: { status: number }) {
    const { __, currentLocale } = useTranslation();

    return (
        <SiteLayout>
            <Head>
                <title>{__('Page not found')} | Moroccan Club Travel</title>
                <meta
                    head-key="description"
                    name="description"
                    content={__('The page you requested could not be found.')}
                />
                <meta
                    head-key="robots"
                    name="robots"
                    content="noindex,follow"
                />
            </Head>
            <main className="flex min-h-screen items-center justify-center px-6 py-24 text-center">
                <div className="max-w-xl">
                    <p className="eyebrow mb-6 text-terracotta">{status}</p>
                    <h1 className="font-display text-5xl leading-tight font-bold md:text-7xl">
                        {__('This page could not be found.')}
                    </h1>
                    <p className="mt-6 text-lg text-foreground/60">
                        {__('Try the homepage or browse our Morocco tours.')}
                    </p>
                    <div className="mt-10 flex flex-wrap justify-center gap-4">
                        <Link
                            href={localizedPath('/', currentLocale)}
                            className="eyebrow bg-terracotta px-6 py-4 text-ivory transition-colors hover:bg-clay"
                        >
                            {__('Home')}
                        </Link>
                        <Link
                            href={localizedPath('/tours', currentLocale)}
                            className="eyebrow border border-foreground/20 px-6 py-4 transition-colors hover:border-terracotta hover:text-terracotta"
                        >
                            {__('Browse tours')}
                        </Link>
                    </div>
                </div>
            </main>
        </SiteLayout>
    );
}
