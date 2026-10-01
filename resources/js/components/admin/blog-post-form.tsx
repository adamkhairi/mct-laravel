import { useForm } from '@inertiajs/react';
import type { FormEvent, ReactNode } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import admin from '@/routes/admin';

interface PostData {
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

interface BlogPostFormProps {
    post?: PostData;
    locale?: string;
    translationKey?: string | null;
    locales: string[];
}

export function BlogPostForm({
    post,
    locale = 'en',
    translationKey = null,
    locales,
}: BlogPostFormProps) {
    const { data, setData, post: createPost, put, processing, errors } = useForm({
        title: post?.title ?? '',
        slug: post?.slug ?? '',
        locale: post?.locale ?? locale,
        translation_key: post?.translation_key ?? translationKey ?? '',
        excerpt: post?.excerpt ?? '',
        body: post?.body ?? '',
        meta_description: post?.meta_description ?? '',
        image: post?.image ?? '',
        status: post?.status ?? 'draft',
        published_at: post?.published_at?.slice(0, 16) ?? '',
    });

    function submit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        if (post) {
            put(admin.posts.update({ post: post.id }).url);
        } else {
            createPost(admin.posts.store().url);
        }
    }

    return (
        <form onSubmit={submit} className="max-w-4xl space-y-8">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <Field label="Title" error={errors.title}>
                    <Input
                        value={data.title}
                        onChange={(event) => setData('title', event.target.value)}
                        required
                    />
                </Field>
                <Field label="Slug" error={errors.slug}>
                    <Input
                        value={data.slug}
                        onChange={(event) => setData('slug', event.target.value)}
                        required
                    />
                </Field>
                <Field label="Language" error={errors.locale}>
                    <select
                        value={data.locale}
                        onChange={(event) => setData('locale', event.target.value)}
                        className="h-10 w-full border-b border-foreground/20 bg-transparent px-1 text-sm"
                    >
                        {locales.map((item) => (
                            <option key={item} value={item}>
                                {item.toUpperCase()}
                            </option>
                        ))}
                    </select>
                </Field>
                <Field label="Translation group ID" error={errors.translation_key}>
                    <Input
                        value={data.translation_key}
                        onChange={(event) =>
                            setData('translation_key', event.target.value)
                        }
                    />
                </Field>
                <Field label="Excerpt" error={errors.excerpt}>
                    <Textarea
                        value={data.excerpt}
                        onChange={(event) => setData('excerpt', event.target.value)}
                        rows={3}
                    />
                </Field>
                <Field label="Meta description" error={errors.meta_description}>
                    <Textarea
                        value={data.meta_description}
                        onChange={(event) =>
                            setData('meta_description', event.target.value)
                        }
                        rows={3}
                    />
                </Field>
            </div>
            <Field label="Hero image URL" error={errors.image}>
                <Input
                    type="url"
                    value={data.image}
                    onChange={(event) => setData('image', event.target.value)}
                />
            </Field>
            <Field label="Article body (Markdown)" error={errors.body}>
                <Textarea
                    value={data.body}
                    onChange={(event) => setData('body', event.target.value)}
                    rows={18}
                    required
                />
            </Field>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <Field label="Publication status" error={errors.status}>
                    <select
                        value={data.status}
                        onChange={(event) =>
                            setData('status', event.target.value as 'draft' | 'published')
                        }
                        className="h-10 w-full border-b border-foreground/20 bg-transparent px-1 text-sm"
                    >
                        <option value="draft">Draft</option>
                        <option value="published">Published</option>
                    </select>
                </Field>
                <Field label="Publish at" error={errors.published_at}>
                    <Input
                        type="datetime-local"
                        value={data.published_at}
                        onChange={(event) =>
                            setData('published_at', event.target.value)
                        }
                    />
                </Field>
            </div>
            <Button type="submit" disabled={processing}>
                {processing ? 'Saving...' : post ? 'Update article' : 'Save article'}
            </Button>
        </form>
    );
}

function Field({
    label,
    error,
    children,
}: {
    label: string;
    error?: string;
    children: ReactNode;
}) {
    return (
        <label className="block space-y-2 text-sm">
            <span className="eyebrow block text-foreground/55">{label}</span>
            {children}
            {error && <span className="text-sm text-destructive">{error}</span>}
        </label>
    );
}
