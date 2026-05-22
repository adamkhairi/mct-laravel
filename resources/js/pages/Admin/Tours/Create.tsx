import { Head, Link, useForm } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Loader2, Plus, Trash2, ArrowLeft } from 'lucide-react';
import admin from '@/routes/admin';
import { FormEvent } from 'react';

interface ItineraryItem {
    day: string;
    title: string;
    description: string;
}

export default function Create() {
    const { data, setData, post, processing, errors } = useForm({
        title: '',
        slug: '',
        duration: '',
        nights: '',
        starting_point: '',
        arrival_city: '',
        description: '',
        is_published: false,
        itinerary: [
            { day: 'Day 1', title: '', description: '' },
        ] as ItineraryItem[],
        included: [''] as string[],
        excluded: [''] as string[],
        image_file: null as File | null,
    });

    const submit = (e: FormEvent) => {
        e.preventDefault();
        post(admin.tours.store().url);
    };

    const addItineraryDay = () => {
        setData('itinerary', [
            ...data.itinerary,
            {
                day: `Day ${data.itinerary.length + 1}`,
                title: '',
                description: '',
            },
        ]);
    };

    const updateItineraryDay = (
        index: number,
        field: keyof ItineraryItem,
        value: string,
    ) => {
        const newItinerary = [...data.itinerary];
        newItinerary[index] = { ...newItinerary[index], [field]: value };
        setData('itinerary', newItinerary);
    };

    const removeItineraryDay = (index: number) => {
        const newItinerary = data.itinerary.filter((_, i) => i !== index);
        const renumbered = newItinerary.map((item, i) => ({
            ...item,
            day: `Day ${i + 1}`,
        }));
        setData('itinerary', renumbered);
    };

    const addIncluded = () => {
        setData('included', [...data.included, '']);
    };

    const updateIncluded = (index: number, value: string) => {
        const newIncluded = [...data.included];
        newIncluded[index] = value;
        setData('included', newIncluded);
    };

    const removeIncluded = (index: number) => {
        setData(
            'included',
            data.included.filter((_, i) => i !== index),
        );
    };

    const addExcluded = () => {
        setData('excluded', [...data.excluded, '']);
    };

    const updateExcluded = (index: number, value: string) => {
        const newExcluded = [...data.excluded];
        newExcluded[index] = value;
        setData('excluded', newExcluded);
    };

    const removeExcluded = (index: number) => {
        setData(
            'excluded',
            data.excluded.filter((_, i) => i !== index),
        );
    };

    const slugify = (text: string) => {
        return text
            .toString()
            .toLowerCase()
            .trim()
            .replace(/\s+/g, '-')
            .replace(/[^\w\-]+/g, '')
            .replace(/\-\-+/g, '-');
    };

    const handleTitleChange = (val: string) => {
        setData((prev) => ({
            ...prev,
            title: val,
            slug: slugify(val),
        }));
    };

    return (
        <>
            <Head title="Add New Tour" />
            <div className="mx-auto w-full max-w-5xl space-y-10">
                <div>
                    <div className="flex items-center gap-3">
                        <Link
                            href={admin.tours.index().url}
                            className="text-indigo-ink/60 transition-colors hover:text-terracotta"
                        >
                            <ArrowLeft className="h-6 w-6" />
                        </Link>
                        <h1 className="font-display text-4xl font-bold text-indigo-ink">
                            Add New Tour
                        </h1>
                    </div>
                    <p className="mt-2 text-muted-foreground">
                        Create a new journey for your collection.
                    </p>
                </div>

                <form onSubmit={submit} className="max-w-5xl space-y-8">
                    <div className="space-y-6">
                        <h2 className="border-b border-indigo-ink/5 pb-3 font-display text-2xl font-bold text-indigo-ink">
                            Essential Details
                        </h2>
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                            <div className="space-y-1">
                                <label className="eyebrow block text-[10px] tracking-wider text-indigo-ink/60 uppercase">
                                    Journey Title
                                </label>
                                <Input
                                    value={data.title}
                                    onChange={(e) =>
                                        handleTitleChange(e.target.value)
                                    }
                                    className="h-10 rounded-none border-t-0 border-r-0 border-b border-l-0 border-indigo-ink/20 bg-transparent px-0 shadow-none transition-colors hover:border-indigo-ink/40 focus-visible:border-b-2 focus-visible:border-terracotta focus-visible:ring-0"
                                    required
                                />
                                {errors.title && (
                                    <p className="mt-1 text-xs text-red-500">
                                        {errors.title}
                                    </p>
                                )}
                            </div>
                            <div className="space-y-1">
                                <label className="eyebrow block text-[10px] tracking-wider text-indigo-ink/60 uppercase">
                                    Url Slug
                                </label>
                                <Input
                                    value={data.slug}
                                    onChange={(e) =>
                                        setData('slug', e.target.value)
                                    }
                                    className="h-10 rounded-none border-t-0 border-r-0 border-b border-l-0 border-indigo-ink/20 bg-transparent px-0 shadow-none transition-colors hover:border-indigo-ink/40 focus-visible:border-b-2 focus-visible:border-terracotta focus-visible:ring-0"
                                    required
                                />
                                {errors.slug && (
                                    <p className="mt-1 text-xs text-red-500">
                                        {errors.slug}
                                    </p>
                                )}
                            </div>
                        </div>

                        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                            <div className="space-y-1">
                                <label className="eyebrow block text-[10px] tracking-wider text-indigo-ink/60 uppercase">
                                    Duration
                                </label>
                                <Input
                                    placeholder="e.g. 8 Days"
                                    value={data.duration}
                                    onChange={(e) =>
                                        setData('duration', e.target.value)
                                    }
                                    className="h-10 rounded-none border-t-0 border-r-0 border-b border-l-0 border-indigo-ink/20 bg-transparent px-0 shadow-none transition-colors hover:border-indigo-ink/40 focus-visible:border-b-2 focus-visible:border-terracotta focus-visible:ring-0"
                                    required
                                />
                                {errors.duration && (
                                    <p className="mt-1 text-xs text-red-500">
                                        {errors.duration}
                                    </p>
                                )}
                            </div>
                            <div className="space-y-1">
                                <label className="eyebrow block text-[10px] tracking-wider text-indigo-ink/60 uppercase">
                                    Nights
                                </label>
                                <Input
                                    placeholder="e.g. 7 Nights"
                                    value={data.nights}
                                    onChange={(e) =>
                                        setData('nights', e.target.value)
                                    }
                                    className="h-10 rounded-none border-t-0 border-r-0 border-b border-l-0 border-indigo-ink/20 bg-transparent px-0 shadow-none transition-colors hover:border-indigo-ink/40 focus-visible:border-b-2 focus-visible:border-terracotta focus-visible:ring-0"
                                    required
                                />
                                {errors.nights && (
                                    <p className="mt-1 text-xs text-red-500">
                                        {errors.nights}
                                    </p>
                                )}
                            </div>
                            <div className="space-y-1">
                                <label className="eyebrow block text-[10px] tracking-wider text-indigo-ink/60 uppercase">
                                    Starting Point
                                </label>
                                <Input
                                    placeholder="e.g. Marrakech"
                                    value={data.starting_point}
                                    onChange={(e) =>
                                        setData(
                                            'starting_point',
                                            e.target.value,
                                        )
                                    }
                                    className="h-10 rounded-none border-t-0 border-r-0 border-b border-l-0 border-indigo-ink/20 bg-transparent px-0 shadow-none transition-colors hover:border-indigo-ink/40 focus-visible:border-b-2 focus-visible:border-terracotta focus-visible:ring-0"
                                    required
                                />
                                {errors.starting_point && (
                                    <p className="mt-1 text-xs text-red-500">
                                        {errors.starting_point}
                                    </p>
                                )}
                            </div>
                        </div>

                        <div className="grid grid-cols-1 gap-6">
                            <div className="space-y-1">
                                <label className="eyebrow block text-[10px] tracking-wider text-indigo-ink/60 uppercase">
                                    Arrival City
                                </label>
                                <Input
                                    placeholder="e.g. Casablanca (Optional)"
                                    value={data.arrival_city}
                                    onChange={(e) =>
                                        setData('arrival_city', e.target.value)
                                    }
                                    className="h-10 rounded-none border-t-0 border-r-0 border-b border-l-0 border-indigo-ink/20 bg-transparent px-0 shadow-none transition-colors hover:border-indigo-ink/40 focus-visible:border-b-2 focus-visible:border-terracotta focus-visible:ring-0"
                                />
                                {errors.arrival_city && (
                                    <p className="mt-1 text-xs text-red-500">
                                        {errors.arrival_city}
                                    </p>
                                )}
                            </div>
                        </div>

                        <div className="space-y-1">
                            <label className="eyebrow block text-[10px] tracking-wider text-indigo-ink/60 uppercase">
                                Description
                            </label>
                            <Textarea
                                rows={4}
                                value={data.description}
                                onChange={(e) =>
                                    setData('description', e.target.value)
                                }
                                className="min-h-[80px] resize-none rounded-none border-t-0 border-r-0 border-b border-l-0 border-indigo-ink/20 bg-transparent px-0 py-2 shadow-none transition-colors hover:border-indigo-ink/40 focus-visible:border-b-2 focus-visible:border-terracotta focus-visible:ring-0"
                                required
                            />
                            {errors.description && (
                                <p className="mt-1 text-xs text-red-500">
                                    {errors.description}
                                </p>
                            )}
                        </div>

                        <div className="space-y-1 pt-4">
                            <label className="eyebrow block text-[10px] tracking-wider text-indigo-ink/60 uppercase">
                                Featured Image
                            </label>
                            <Input
                                type="file"
                                accept="image/*"
                                onChange={(e) =>
                                    setData(
                                        'image_file',
                                        e.target.files
                                            ? e.target.files[0]
                                            : null,
                                    )
                                }
                                className="h-auto cursor-pointer rounded-lg border-2 border-dashed border-indigo-ink/10 p-8 text-center transition-colors hover:border-terracotta"
                            />
                            <p className="mt-2 text-[10px] text-muted-foreground italic">
                                Max 2MB (JPEG, PNG, JPG, GIF)
                            </p>
                            {errors.image_file && (
                                <p className="mt-1 text-xs text-red-500">
                                    {errors.image_file as string}
                                </p>
                            )}
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="flex items-center justify-between border-b border-indigo-ink/5 pb-3">
                            <h2 className="font-display text-2xl font-bold text-indigo-ink">
                                Itinerary
                            </h2>
                            <Button
                                type="button"
                                variant="outline"
                                size="sm"
                                className="eyebrow h-9 rounded-none border-terracotta px-4 text-terracotta transition-colors hover:bg-terracotta hover:text-ivory"
                                onClick={addItineraryDay}
                            >
                                <Plus className="mr-2 h-3 w-3" /> Add Day
                            </Button>
                        </div>
                        <div className="grid gap-4">
                            {data.itinerary.map((item, index) => (
                                <div
                                    key={index}
                                    className="group relative border-b border-indigo-ink/10 bg-transparent py-5 transition-colors first:pt-2"
                                >
                                    <div className="flex items-start gap-6">
                                        <div className="w-24 shrink-0 space-y-1">
                                            <span className="eyebrow block text-[9px] opacity-50">
                                                Day
                                            </span>
                                            <Input
                                                value={item.day}
                                                onChange={(e) =>
                                                    updateItineraryDay(
                                                        index,
                                                        'day',
                                                        e.target.value,
                                                    )
                                                }
                                                className="h-10 rounded-none border-t-0 border-r-0 border-b border-l-0 border-indigo-ink/20 bg-transparent px-0 font-display text-xl shadow-none transition-colors hover:border-indigo-ink/40 focus-visible:border-b-2 focus-visible:border-terracotta focus-visible:ring-0"
                                                required
                                            />
                                        </div>
                                        <div className="flex-1 space-y-4">
                                            <div className="space-y-1">
                                                <span className="eyebrow block text-[9px] opacity-50">
                                                    Milestone
                                                </span>
                                                <Input
                                                    placeholder="Title of the day"
                                                    value={item.title}
                                                    onChange={(e) =>
                                                        updateItineraryDay(
                                                            index,
                                                            'title',
                                                            e.target.value,
                                                        )
                                                    }
                                                    className="h-10 rounded-none border-t-0 border-r-0 border-b border-l-0 border-indigo-ink/20 bg-transparent px-0 font-medium shadow-none transition-colors hover:border-indigo-ink/40 focus-visible:border-b-2 focus-visible:border-terracotta focus-visible:ring-0"
                                                    required
                                                />
                                            </div>
                                            <div className="space-y-1">
                                                <span className="eyebrow block text-[9px] opacity-50">
                                                    Narrative
                                                </span>
                                                <Textarea
                                                    placeholder="Describe the day's experiences..."
                                                    value={item.description}
                                                    onChange={(e) =>
                                                        updateItineraryDay(
                                                            index,
                                                            'description',
                                                            e.target.value,
                                                        )
                                                    }
                                                    className="min-h-[60px] resize-none rounded-none border-t-0 border-r-0 border-b border-l-0 border-indigo-ink/20 bg-transparent px-0 py-2 shadow-none transition-colors hover:border-indigo-ink/40 focus-visible:border-b-2 focus-visible:border-terracotta focus-visible:ring-0"
                                                    required
                                                />
                                            </div>
                                        </div>
                                        {data.itinerary.length > 1 && (
                                            <Button
                                                type="button"
                                                variant="ghost"
                                                size="icon"
                                                className="mt-2 text-muted-foreground opacity-0 transition-all group-hover:opacity-100 hover:text-destructive"
                                                onClick={() =>
                                                    removeItineraryDay(index)
                                                }
                                            >
                                                <Trash2 className="h-4 w-4" />
                                            </Button>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                        <div className="space-y-4">
                            <div className="flex items-center justify-between border-b border-indigo-ink/5 pb-3">
                                <h3 className="font-display text-xl font-bold text-indigo-ink">
                                    What's Included
                                </h3>
                                <Button
                                    type="button"
                                    variant="outline"
                                    size="sm"
                                    className="eyebrow h-8 rounded-none border-terracotta px-3 text-terracotta transition-colors hover:bg-terracotta hover:text-ivory"
                                    onClick={addIncluded}
                                >
                                    <Plus className="mr-1 h-3 w-3" /> Add
                                </Button>
                            </div>
                            <div className="space-y-2">
                                {data.included.map((item, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center gap-2"
                                    >
                                        <Input
                                            value={item}
                                            onChange={(e) =>
                                                updateIncluded(
                                                    index,
                                                    e.target.value,
                                                )
                                            }
                                            placeholder="e.g. Luxury Riad accommodation"
                                            className="h-10 flex-1 rounded-none border-t-0 border-r-0 border-b border-l-0 border-indigo-ink/20 bg-transparent px-0 shadow-none transition-colors hover:border-indigo-ink/40 focus-visible:border-b-2 focus-visible:border-terracotta focus-visible:ring-0"
                                        />
                                        {data.included.length > 1 && (
                                            <Button
                                                type="button"
                                                variant="ghost"
                                                size="icon"
                                                className="text-muted-foreground hover:text-destructive"
                                                onClick={() =>
                                                    removeIncluded(index)
                                                }
                                            >
                                                <Trash2 className="h-4 w-4" />
                                            </Button>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-center justify-between border-b border-indigo-ink/5 pb-3">
                                <h3 className="font-display text-xl font-bold text-indigo-ink">
                                    What's Excluded
                                </h3>
                                <Button
                                    type="button"
                                    variant="outline"
                                    size="sm"
                                    className="eyebrow h-8 rounded-none border-terracotta px-3 text-terracotta transition-colors hover:bg-terracotta hover:text-ivory"
                                    onClick={addExcluded}
                                >
                                    <Plus className="mr-1 h-3 w-3" /> Add
                                </Button>
                            </div>
                            <div className="space-y-2">
                                {data.excluded.map((item, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center gap-2"
                                    >
                                        <Input
                                            value={item}
                                            onChange={(e) =>
                                                updateExcluded(
                                                    index,
                                                    e.target.value,
                                                )
                                            }
                                            placeholder="e.g. International flights"
                                            className="h-10 flex-1 rounded-none border-t-0 border-r-0 border-b border-l-0 border-indigo-ink/20 bg-transparent px-0 shadow-none transition-colors hover:border-indigo-ink/40 focus-visible:border-b-2 focus-visible:border-terracotta focus-visible:ring-0"
                                        />
                                        {data.excluded.length > 1 && (
                                            <Button
                                                type="button"
                                                variant="ghost"
                                                size="icon"
                                                className="text-muted-foreground hover:text-destructive"
                                                onClick={() =>
                                                    removeExcluded(index)
                                                }
                                            >
                                                <Trash2 className="h-4 w-4" />
                                            </Button>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <h2 className="border-b border-indigo-ink/5 pb-3 font-display text-2xl font-bold text-indigo-ink">
                            Settings & Visibility
                        </h2>
                        <div className="flex items-center justify-between rounded-none border-b border-indigo-ink/10 bg-transparent py-6">
                            <div className="space-y-1">
                                <span className="block font-display text-xl text-indigo-ink">
                                    Published
                                </span>
                                <span className="text-xs font-light text-muted-foreground">
                                    Make this journey visible to the public on
                                    the collection page.
                                </span>
                            </div>
                            <Switch
                                checked={data.is_published}
                                onCheckedChange={(checked) =>
                                    setData('is_published', checked)
                                }
                                className="data-[state=checked]:bg-terracotta"
                            />
                        </div>
                    </div>

                    <Button
                        type="submit"
                        disabled={processing}
                        className="eyebrow h-14 w-full rounded-none bg-terracotta text-sm tracking-[0.2em] text-ivory shadow-lg shadow-terracotta/10 transition-all hover:bg-terracotta/90 active:scale-[0.99]"
                    >
                        {processing && (
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        )}
                        Confirm and Create Journey
                    </Button>
                </form>
            </div>
        </>
    );
}
