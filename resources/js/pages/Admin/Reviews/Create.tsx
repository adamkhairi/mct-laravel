import { Head, Link } from '@inertiajs/react';
import { ArrowLeft } from 'lucide-react';
import { ReviewForm } from '@/components/admin/review-form';
import admin from '@/routes/admin';

export default function Create({ tours, locales }: { tours: { id: string; slug: string; title: string }[]; locales: string[] }) {
    return (
        <>
            <Head title="Add Traveler Review" />
            <main className="w-full space-y-8">
                <header className="border-b border-indigo-ink/10 pb-6">
                    <Link href={admin.reviews.index().url} className="mb-4 inline-flex items-center gap-2 text-sm text-foreground/60 hover:text-terracotta">
                        <ArrowLeft className="h-4 w-4" /> Reviews
                    </Link>
                    <h1 className="font-display text-4xl font-bold">Add review</h1>
                </header>
                <ReviewForm tours={tours} locales={locales} />
            </main>
        </>
    );
}
