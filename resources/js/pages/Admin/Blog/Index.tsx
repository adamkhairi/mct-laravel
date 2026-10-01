import { Head, Link, router } from '@inertiajs/react';
import { FileText, Pencil, Plus, Trash2 } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import admin from '@/routes/admin';

interface Post {
    id: number;
    title: string;
    slug: string;
    locale: string;
    status: string;
    updated_at: string;
    author: { name: string } | null;
}

export default function Index({ posts }: { posts: { data: Post[] } }) {
    return (
        <>
            <Head title="Manage Journal" />
            <main className="w-full space-y-8">
                <header className="flex flex-wrap items-end justify-between gap-6 border-b border-indigo-ink/10 pb-6">
                    <div>
                        <span className="eyebrow mb-3 block text-terracotta">Editorial</span>
                        <h1 className="font-display text-4xl font-bold">Journal</h1>
                    </div>
                    <Button asChild>
                        <Link href={admin.posts.create().url}>
                            <Plus className="mr-2 h-4 w-4" /> New article
                        </Link>
                    </Button>
                </header>

                <div className="overflow-x-auto">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Article</TableHead>
                                <TableHead>Language</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead>Updated</TableHead>
                                <TableHead>Author</TableHead>
                                <TableHead className="text-right">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {posts.data.map((post) => (
                                <TableRow key={post.id}>
                                    <TableCell className="font-medium">
                                        <span className="flex items-center gap-2">
                                            <FileText className="h-4 w-4 text-terracotta" />
                                            {post.title}
                                        </span>
                                    </TableCell>
                                    <TableCell>{post.locale.toUpperCase()}</TableCell>
                                    <TableCell>
                                        <Badge variant={post.status === 'published' ? 'default' : 'secondary'}>
                                            {post.status}
                                        </Badge>
                                    </TableCell>
                                    <TableCell>
                                        {new Date(post.updated_at).toLocaleDateString()}
                                    </TableCell>
                                    <TableCell>{post.author?.name ?? '—'}</TableCell>
                                    <TableCell className="text-right">
                                        <div className="flex justify-end gap-2">
                                            <Button variant="ghost" size="icon" asChild>
                                                <Link
                                                    href={admin.posts.edit({ post: post.id }).url}
                                                    aria-label={`Edit ${post.title}`}
                                                >
                                                    <Pencil className="h-4 w-4" />
                                                </Link>
                                            </Button>
                                            <Button
                                                variant="ghost"
                                                size="icon"
                                                aria-label={`Delete ${post.title}`}
                                                onClick={() => {
                                                    if (window.confirm(`Delete “${post.title}”?`)) {
                                                        router.delete(
                                                            admin.posts.destroy({ post: post.id }).url,
                                                        );
                                                    }
                                                }}
                                            >
                                                <Trash2 className="h-4 w-4" />
                                            </Button>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))}
                            {posts.data.length === 0 && (
                                <TableRow>
                                    <TableCell colSpan={6} className="py-12 text-center text-muted-foreground">
                                        No articles yet.
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </div>
            </main>
        </>
    );
}
