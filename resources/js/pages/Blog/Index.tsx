import { Link } from '@inertiajs/react';
import { Breadcrumbs } from '@/components/site/Breadcrumbs';
import { Footer } from '@/components/site/Footer';
import { Header } from '@/components/site/Header';
import { MetaTags } from '@/components/site/MetaTags';
import { useTranslation } from '@/hooks/use-translation';
import SiteLayout from '@/layouts/site-layout';
import { localizedPath } from '@/lib/localized-path';

interface BlogPostSummary {
    id: number;
    slug: string;
    title: string;
    excerpt: string | null;
    image: string | null;
    published_at: string;
}

interface BlogIndexProps {
    posts: {
        data: BlogPostSummary[];
        links: { url: string | null; label: string; active: boolean }[];
    };
}

const DESCRIPTION =
    'Field notes, practical advice and cultural stories for planning a journey through Morocco.';

export default function Index({ posts }: BlogIndexProps) {
    const { __, currentLocale } = useTranslation();

    return (
        <SiteLayout>
            <MetaTags
                title={__('Morocco Travel Journal')}
                description={__(DESCRIPTION)}
                type="website"
            />
            <Header />
            <main className="px-6 pt-32 pb-24 md:px-10 md:pt-40 md:pb-32">
                <div className="mx-auto max-w-7xl">
                    <Breadcrumbs
                        items={[
                            { label: __('Home'), href: '/' },
                            { label: __('Journal') },
                        ]}
                    />
                    <header className="mb-16 max-w-3xl">
                        <span className="eyebrow mb-6 block text-terracotta">
                            {__('Journal')}
                        </span>
                        <h1 className="font-display text-5xl leading-tight font-bold md:text-7xl">
                            {__('Notes from Morocco')}
                        </h1>
                    </header>

                    {posts.data.length > 0 ? (
                        <div className="grid grid-cols-1 gap-x-10 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
                            {posts.data.map((post) => (
                                <article key={post.id} className="group">
                                    <Link
                                        href={localizedPath(
                                            `/blog/${post.slug}`,
                                            currentLocale,
                                        )}
                                        className="block"
                                    >
                                        {post.image && (
                                            <img
                                                src={post.image}
                                                alt={post.title}
                                                className="mb-6 aspect-[4/3] w-full object-cover"
                                            />
                                        )}
                                        <time className="eyebrow text-foreground/45">
                                            {new Date(
                                                post.published_at,
                                            ).toLocaleDateString(currentLocale, {
                                                month: 'long',
                                                day: 'numeric',
                                                year: 'numeric',
                                            })}
                                        </time>
                                        <h2 className="mt-3 font-display text-2xl font-semibold transition-colors group-hover:text-terracotta">
                                            {post.title}
                                        </h2>
                                        {post.excerpt && (
                                            <p className="mt-3 leading-relaxed text-foreground/65">
                                                {post.excerpt}
                                            </p>
                                        )}
                                    </Link>
                                </article>
                            ))}
                        </div>
                    ) : (
                        <p className="border-y border-foreground/10 py-8 text-foreground/60">
                            {__('No journal entries are published yet.')}
                        </p>
                    )}

                    {posts.links.length > 3 && (
                        <nav
                            aria-label={__('Journal pages')}
                            className="mt-16 flex flex-wrap gap-2"
                        >
                            {posts.links.map((link, index) =>
                                link.url ? (
                                    <Link
                                        key={`${link.label}-${index}`}
                                        href={link.url}
                                        className={`border px-3 py-2 text-sm ${link.active ? 'border-terracotta text-terracotta' : 'border-foreground/10 hover:border-terracotta'}`}
                                    >
                                        {link.label.replace(/&laquo;|&raquo;/g, '')}
                                    </Link>
                                ) : null,
                            )}
                        </nav>
                    )}
                </div>
            </main>
            <Footer />
        </SiteLayout>
    );
}
