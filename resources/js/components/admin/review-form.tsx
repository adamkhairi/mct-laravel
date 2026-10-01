import { useForm } from '@inertiajs/react';
import type { FormEvent } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';
import { Textarea } from '@/components/ui/textarea';
import admin from '@/routes/admin';

interface ReviewData {
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

interface ReviewFormProps {
    review?: ReviewData;
    tours: { id: string; slug: string; title: string }[];
    locales: string[];
}

export function ReviewForm({ review, tours, locales }: ReviewFormProps) {
    const { data, setData, post, put, processing, errors } = useForm({
        reviewer_name: review?.reviewer_name ?? '',
        country: review?.country ?? '',
        flag: review?.flag ?? '',
        trip_name: review?.trip_name ?? '',
        quote: review?.quote ?? '',
        rating: review?.rating ?? 5,
        locale: review?.locale ?? 'en',
        is_verified: review?.is_verified ?? false,
        is_published: review?.is_published ?? false,
        tour_id: review?.tour_id ?? '',
        reviewed_at: review?.reviewed_at ?? '',
    });

    function submit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        if (review) {
            put(admin.reviews.update({ review: review.id }).url);
        } else {
            post(admin.reviews.store().url);
        }
    }

    return (
        <form onSubmit={submit} className="max-w-4xl space-y-8">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <Field label="Reviewer name" error={errors.reviewer_name}>
                    <Input value={data.reviewer_name} onChange={(event) => setData('reviewer_name', event.target.value)} required />
                </Field>
                <Field label="Country" error={errors.country}>
                    <Input value={data.country} onChange={(event) => setData('country', event.target.value)} required />
                </Field>
                <Field label="Flag" error={errors.flag}>
                    <Input value={data.flag} onChange={(event) => setData('flag', event.target.value)} />
                </Field>
                <Field label="Trip" error={errors.trip_name}>
                    <Input value={data.trip_name} onChange={(event) => setData('trip_name', event.target.value)} required />
                </Field>
                <Field label="Rating" error={errors.rating}>
                    <Input type="number" min={1} max={5} value={data.rating} onChange={(event) => setData('rating', Number(event.target.value))} required />
                </Field>
                <Field label="Language" error={errors.locale}>
                    <select value={data.locale} onChange={(event) => setData('locale', event.target.value)} className="h-10 w-full border-b border-foreground/20 bg-transparent px-1 text-sm">
                        {locales.map((locale) => <option key={locale} value={locale}>{locale.toUpperCase()}</option>)}
                    </select>
                </Field>
                <Field label="Related tour" error={errors.tour_id}>
                    <select value={data.tour_id} onChange={(event) => setData('tour_id', event.target.value)} className="h-10 w-full border-b border-foreground/20 bg-transparent px-1 text-sm">
                        <option value="">No tour selected</option>
                        {tours.map((tour) => <option key={tour.id} value={tour.id}>{tour.title}</option>)}
                    </select>
                </Field>
                <Field label="Review date" error={errors.reviewed_at}>
                    <Input type="date" value={data.reviewed_at} onChange={(event) => setData('reviewed_at', event.target.value)} />
                </Field>
            </div>
            <Field label="Review text" error={errors.quote}>
                <Textarea value={data.quote} onChange={(event) => setData('quote', event.target.value)} rows={6} required />
            </Field>
            <div className="flex flex-wrap gap-8">
                <label className="flex items-center gap-3 text-sm">
                    <Switch checked={data.is_verified} onCheckedChange={(checked) => setData('is_verified', checked)} />
                    Verified
                </label>
                <label className="flex items-center gap-3 text-sm">
                    <Switch checked={data.is_published} onCheckedChange={(checked) => setData('is_published', checked)} />
                    Published
                </label>
            </div>
            <Button type="submit" disabled={processing}>
                {processing ? 'Saving...' : review ? 'Update review' : 'Save review'}
            </Button>
        </form>
    );
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
    return (
        <label className="block space-y-2 text-sm">
            <span className="eyebrow block text-foreground/55">{label}</span>
            {children}
            {error && <span className="text-sm text-destructive">{error}</span>}
        </label>
    );
}