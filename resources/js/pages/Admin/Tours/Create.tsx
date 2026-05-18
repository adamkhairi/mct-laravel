import { Head, useForm } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import admin from '@/routes/admin';
import { FormEvent } from 'react';

export default function Create() {
    const { data, setData, post, processing, errors } = useForm({
        title: '',
        slug: '',
        duration: '',
        nights: '',
        starting_point: '',
        description: '',
        is_published: false,
    });

    const submit = (e: FormEvent) => {
        e.preventDefault();
        post(admin.tours.store().url);
    };

    return (
        <>
            <Head title="Create Tour" />
            <div className="p-6">
                <h1 className="mb-6 text-2xl font-bold">Create Tour</h1>
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
                        Create
                    </Button>
                </form>
            </div>
        </>
    );
}
