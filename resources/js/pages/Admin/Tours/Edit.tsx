import { Head, useForm } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import admin from '@/routes/admin';
import { FormEvent } from 'react';

export default function Edit({ tour }: { tour: any }) {
    const { data, setData, put, processing, errors } = useForm({
        title: tour.title,
        slug: tour.slug,
        duration: tour.duration,
        nights: tour.nights,
        starting_point: tour.starting_point,
        description: tour.description,
        is_published: !!tour.is_published,
    });

    const submit = (e: FormEvent) => {
        e.preventDefault();
        put(admin.tours.update({ tour: tour.id }).url);
    };

    return (
        <>
            <Head title="Edit Tour" />
            <div className="p-6">
                <h1 className="mb-6 text-2xl font-bold">Edit Tour</h1>
                <form onSubmit={submit} className="space-y-4">
                    <Input
                        value={data.title}
                        onChange={(e) => setData('title', e.target.value)}
                        placeholder="Title"
                    />
                    {errors.title && (
                        <div className="text-red-500">{errors.title}</div>
                    )}
                    <Input
                        value={data.slug}
                        onChange={(e) => setData('slug', e.target.value)}
                        placeholder="Slug"
                    />
                    {errors.slug && (
                        <div className="text-red-500">{errors.slug}</div>
                    )}
                    <Input
                        value={data.duration}
                        onChange={(e) => setData('duration', e.target.value)}
                        placeholder="Duration"
                    />
                    <Input
                        value={data.nights}
                        onChange={(e) => setData('nights', e.target.value)}
                        placeholder="Nights"
                    />
                    <Input
                        value={data.starting_point}
                        onChange={(e) =>
                            setData('starting_point', e.target.value)
                        }
                        placeholder="Starting Point"
                    />
                    <textarea
                        value={data.description}
                        onChange={(e) => setData('description', e.target.value)}
                        placeholder="Description"
                        className="w-full rounded border p-2"
                    />
                    <div className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            checked={data.is_published}
                            onChange={(e) =>
                                setData('is_published', e.target.checked)
                            }
                        />
                        <span>Published</span>
                    </div>
                    <Button type="submit" disabled={processing}>
                        Update
                    </Button>
                </form>
            </div>
        </>
    );
}
