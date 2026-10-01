import { Head, Link } from '@inertiajs/react';
import { ArrowLeft } from 'lucide-react';
import { ReviewForm } from '@/components/admin/review-form';
import admin from '@/routes/admin';

interface Review {
    id: number;
    reviewer_name: string;
    country: string;
    flag: string | null;
    trip_name: string;
    quote: string;
    rating: number;
    locale: string;
    is_verified: boolean;
    is_published: boolean;
    tour_id: string | null;
    reviewed_at: string | null;
}

export default function Edit({ review, tours, locales }: { review: Review; tours: { id: string; slug: string; title: string }[]; locales: string[] }) {
    return (
        <>
            <Head title={`Edit ${review.reviewer_name} review`} />
            <main className="w-full space-y-8">
                <header className="border-b border-indigo-ink/10 pb-6">
                    <Link href={admin.reviews.index().url} className="mb-4 inline-flex items-center gap-2 text-sm text-foreground/60 hover:text-terracotta">
                        <ArrowLeft className="h-4 w-4" /> Reviews
                    </Link>
                    <h1 className="font-display text-4xl font-bold">Edit review</h1>
                </header>
                <ReviewForm review={review} tours={tours} locales={locales} />
            </main>
        </>
    );
}