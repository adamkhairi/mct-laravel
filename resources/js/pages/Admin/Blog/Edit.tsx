import { Head, Link } from '@inertiajs/react';
import { ArrowLeft } from 'lucide-react';
import { BlogPostForm } from '@/components/admin/blog-post-form';
import admin from '@/routes/admin';

interface Post {
    id: number;
    title: string;
    slug: string;
    locale: string;
    translation_key: string | null;
    excerpt: string | null;
    body: string;
    meta_description: string | null;
    image: string | null;
    status: 'draft' | 'published';
    published_at: string | null;
}

export default function Edit({
    post,
    locales,
}: {
    post: Post;
    locales: string[];
}) {
    return (
        <>
            <Head title={`Edit ${post.title}`} />
            <main className="w-full space-y-8">
                <header className="border-b border-indigo-ink/10 pb-6">
                    <Link href={admin.posts.index().url} className="mb-4 inline-flex items-center gap-2 text-sm text-foreground/60 hover:text-terracotta">
                        <ArrowLeft className="h-4 w-4" /> Journal
                    </Link>
                    <h1 className="font-display text-4xl font-bold">Edit article</h1>
                </header>
                <BlogPostForm post={post} locales={locales} />
            </main>
        </>
    );
}
