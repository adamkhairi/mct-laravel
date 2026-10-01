import { Head, Link, router } from '@inertiajs/react';
import { MessageSquareQuote, Pencil, Plus, Trash2 } from 'lucide-react';
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

interface Review {
    id: number;
    reviewer_name: string;
    country: string;
    trip_name: string;
    rating: number;
    locale: string;
    is_verified: boolean;
    is_published: boolean;
}

export default function Index({ reviews }: { reviews: { data: Review[] } }) {
    return (
        <>
            <Head title="Manage Reviews" />
            <main className="w-full space-y-8">
                <header className="flex flex-wrap items-end justify-between gap-6 border-b border-indigo-ink/10 pb-6">
                    <div>
                        <span className="eyebrow mb-3 block text-terracotta">Moderation</span>
                        <h1 className="font-display text-4xl font-bold">Traveler reviews</h1>
                    </div>
                    <Button asChild>
                        <Link href={admin.reviews.create().url}>
                            <Plus className="mr-2 h-4 w-4" /> Add review
                        </Link>
                    </Button>
                </header>
                <div className="overflow-x-auto">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Reviewer</TableHead>
                                <TableHead>Trip</TableHead>
                                <TableHead>Rating</TableHead>
                                <TableHead>Language</TableHead>
                                <TableHead>Verified</TableHead>
                                <TableHead>Published</TableHead>
                                <TableHead className="text-right">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {reviews.data.map((review) => (
                                <TableRow key={review.id}>
                                    <TableCell>
                                        <span className="flex items-center gap-2">
                                            <MessageSquareQuote className="h-4 w-4 text-terracotta" />
                                            {review.reviewer_name}, {review.country}
                                        </span>
                                    </TableCell>
                                    <TableCell>{review.trip_name}</TableCell>
                                    <TableCell>{review.rating}/5</TableCell>
                                    <TableCell>{review.locale.toUpperCase()}</TableCell>
                                    <TableCell><Badge variant={review.is_verified ? 'default' : 'secondary'}>{review.is_verified ? 'Yes' : 'No'}</Badge></TableCell>
                                    <TableCell><Badge variant={review.is_published ? 'default' : 'secondary'}>{review.is_published ? 'Yes' : 'No'}</Badge></TableCell>
                                    <TableCell className="text-right">
                                        <div className="flex justify-end gap-2">
                                            <Button variant="ghost" size="icon" asChild>
                                                <Link href={admin.reviews.edit({ review: review.id }).url} aria-label={`Edit ${review.reviewer_name} review`}>
                                                    <Pencil className="h-4 w-4" />
                                                </Link>
                                            </Button>
                                            <Button variant="ghost" size="icon" aria-label={`Delete ${review.reviewer_name} review`} onClick={() => {
                                                if (window.confirm(`Delete ${review.reviewer_name}'s review?`)) {
                                                    router.delete(admin.reviews.destroy({ review: review.id }).url);
                                                }
                                            }}>
                                                <Trash2 className="h-4 w-4" />
                                            </Button>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))}
                            {reviews.data.length === 0 && (
                                <TableRow>
                                    <TableCell colSpan={7} className="py-12 text-center text-muted-foreground">No reviews yet.</TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </div>
            </main>
        </>
    );
}