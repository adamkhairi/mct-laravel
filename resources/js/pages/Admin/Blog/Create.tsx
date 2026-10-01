import { Head, Link } from '@inertiajs/react';
import { ArrowLeft } from 'lucide-react';
import { BlogPostForm } from '@/components/admin/blog-post-form';
import admin from '@/routes/admin';

export default function Create({
    locale,
    translationKey,
    locales,
}: {
    locale: string;
    translationKey: string | null;
    locales: string[];
}) {
    return (
        <>
            <Head title="New Journal Article" />
            <main className="w-full space-y-8">
                <header className="border-b border-indigo-ink/10 pb-6">
                    <Link href={admin.posts.index().url} className="mb-4 inline-flex items-center gap-2 text-sm text-foreground/60 hover:text-terracotta">
                        <ArrowLeft className="h-4 w-4" /> Journal
                    </Link>
                    <h1 className="font-display text-4xl font-bold">New article</h1>
                </header>
                <BlogPostForm locale={locale} translationKey={translationKey} locales={locales} />
            </main>
        </>
    );
}
