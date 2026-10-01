import { Link, usePage } from '@inertiajs/react';
import { Breadcrumbs } from '@/components/site/Breadcrumbs';
import { Footer } from '@/components/site/Footer';
import { Header } from '@/components/site/Header';
import { MetaTags } from '@/components/site/MetaTags';
import { useTranslation } from '@/hooks/use-translation';
import SiteLayout from '@/layouts/site-layout';
import { localizedPath } from '@/lib/localized-path';

interface BlogPost {
    id: number;
    slug: string;
    locale: string;
    title: string;
    excerpt: string | null;
    meta_description: string | null;
    image: string | null;
    published_at: string;
    updatedAt: string;
    bodyHtml: string;
}

export default function Show({
    post,
    alternateLocales,
}: {
    post: BlogPost;
    alternateLocales: string[];
}) {
    const { __, currentLocale } = useTranslation();
    const { url, props } = usePage<{ siteUrl: string }>();
    const postUrl = new URL(url.split(/[?#]/, 1)[0], `${props.siteUrl}/`).href;

    return (
        <SiteLayout>
            <MetaTags
                title={post.title}
                description={post.meta_description || post.excerpt || post.title}
                image={post.image || undefined}
                type="article"
                alternateLocales={alternateLocales}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'BlogPosting',
                        headline: post.title,
                        description: post.meta_description || post.excerpt,
                        image: post.image || undefined,
                        datePublished: post.published_at,
                        dateModified: post.updatedAt,
                        inLanguage: post.locale,
                        mainEntityOfPage: postUrl,
                        author: {
                            '@type': 'Organization',
                            name: 'Moroccan Club Travel',
                            url: props.siteUrl,
                        },
                        publisher: {
                            '@type': 'Organization',
                            name: 'Moroccan Club Travel',
                            logo: {
                                '@type': 'ImageObject',
                                url: new URL('/icons/mct-512.png', `${props.siteUrl}/`).href,
                            },
                        },
                    }).replace(/</g, '\\u003c'),
                }}
            />
            <Header />
            <main className="px-6 pt-32 pb-24 md:px-10 md:pt-40 md:pb-32">
                <article className="mx-auto max-w-4xl">
                    <Breadcrumbs
                        items={[
                            { label: __('Home'), href: '/' },
                            { label: __('Journal'), href: '/blog' },
                            { label: post.title },
                        ]}
                    />
                    <header className="mb-12">
                        <time className="eyebrow text-foreground/45">
                            {new Date(post.published_at).toLocaleDateString(
                                currentLocale,
                                { month: 'long', day: 'numeric', year: 'numeric' },
                            )}
                        </time>
                        <h1 className="mt-5 font-display text-5xl leading-tight font-bold md:text-7xl">
                            {post.title}
                        </h1>
                        {post.excerpt && (
                            <p className="mt-7 max-w-3xl text-xl leading-relaxed text-foreground/65">
                                {post.excerpt}
                            </p>
                        )}
                    </header>
                    {post.image && (
                        <img
                            src={post.image}
                            alt={post.title}
                            className="mb-12 aspect-[16/9] w-full object-cover"
                        />
                    )}
                    <div
                        className="prose prose-lg max-w-none leading-relaxed text-foreground/80 prose-headings:font-display prose-headings:text-foreground prose-a:text-terracotta"
                        dangerouslySetInnerHTML={{ __html: post.bodyHtml }}
                    />
                    <div className="mt-16 border-t border-foreground/10 pt-8">
                        <Link
                            href={localizedPath('/blog', currentLocale)}
                            className="eyebrow text-terracotta transition-colors hover:text-foreground"
                        >
                            {__('All journal entries')}
                        </Link>
                    </div>
                </article>
            </main>
            <Footer />
        </SiteLayout>
    );
}
