'use client';

import { useForm, useFieldArray } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Loader2, Plus, Trash2 } from 'lucide-react';
import { toast } from 'sonner';

import { Button } from '@/components/ui/button';
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Card, CardContent } from '@/components/ui/card';

const tourSchema = z.object({
    title: z.string().min(2, 'Title is required'),
    slug: z.string().min(2, 'Slug is required'),
    duration: z.string().min(1, 'Duration is required'),
    nights: z.string().min(1, 'Nights is required'),
    startingPoint: z.string().min(1, 'Starting point is required'),
    arrivalCity: z.string().optional().nullable(),
    description: z.string().min(10, 'Description is too short'),
    image: z.string().optional().nullable(),
    accommodation: z.string().optional().nullable(),
    guide: z.string().optional().nullable(),
    tripType: z.string().optional().nullable(),
    difficulty: z.string().optional().nullable(),
    languages: z.string().optional().nullable(),
    isPublished: z.boolean(),
    itinerary: z
        .array(
            z.object({
                day: z.string(),
                title: z.string(),
                description: z.string(),
            }),
        )
        .optional(),
    included: z.array(z.string()).optional(),
    excluded: z.array(z.string()).optional(),
});

type TourFormValues = z.infer<typeof tourSchema>;

interface TourFormProps {
    initialData?: any;
}

export function TourForm({ initialData }: TourFormProps) {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);

    const form = useForm<TourFormValues>({
        resolver: zodResolver(tourSchema),
        defaultValues: initialData || {
            title: '',
            slug: '',
            duration: '',
            nights: '',
            startingPoint: '',
            description: '',
            isPublished: false,
            itinerary: [{ day: 'Day 1', title: '', description: '' }],
            included: [''],
            excluded: [''],
        },
    });

    const {
        fields: itineraryFields,
        append: appendItinerary,
        remove: removeItinerary,
    } = useFieldArray({
        control: form.control,
        name: 'itinerary',
    });

    const {
        fields: includedFields,
        append: appendIncluded,
        remove: removeIncluded,
    } = useFieldArray({
        control: form.control,
        name: 'included' as any,
    });

    const {
        fields: excludedFields,
        append: appendExcluded,
        remove: removeExcluded,
    } = useFieldArray({
        control: form.control,
        name: 'excluded' as any,
    });

    async function onSubmit(data: TourFormValues) {
        setIsLoading(true);
        try {
            const url = initialData
                ? `/api/tours/${initialData.id}`
                : '/api/tours';
            const method = initialData ? 'PATCH' : 'POST';

            const response = await fetch(url, {
                method,
                body: JSON.stringify(data),
                headers: { 'Content-Type': 'application/json' },
            });

            if (!response.ok) throw new Error('Failed to save tour');

            toast.success(initialData ? 'Tour updated' : 'Tour created');
            router.push('/admin');
            router.refresh();
        } catch (error) {
            toast.error('Something went wrong');
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="max-w-5xl space-y-12"
            >
                <div className="space-y-8">
                    <h2 className="border-b border-indigo-ink/5 pb-4 font-display text-2xl font-bold text-indigo-ink">
                        Essential Details
                    </h2>
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                        <FormField
                            control={form.control}
                            name="title"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="eyebrow text-indigo-ink/60">
                                        Journey Title
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            className="h-12 rounded-none border-t-0 border-r-0 border-b border-l-0 border-indigo-ink/20 bg-transparent px-0 shadow-none transition-colors hover:border-indigo-ink/40 focus-visible:border-b-2 focus-visible:border-terracotta focus-visible:ring-0"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="slug"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="eyebrow text-indigo-ink/60">
                                        URL Slug
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            className="h-12 rounded-none border-t-0 border-r-0 border-b border-l-0 border-indigo-ink/20 bg-transparent px-0 shadow-none transition-colors hover:border-indigo-ink/40 focus-visible:border-b-2 focus-visible:border-terracotta focus-visible:ring-0"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                        <FormField
                            control={form.control}
                            name="duration"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="eyebrow text-indigo-ink/60">
                                        Duration
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="e.g. 8 Days"
                                            className="h-12 rounded-none border-t-0 border-r-0 border-b border-l-0 border-indigo-ink/20 bg-transparent px-0 shadow-none transition-colors hover:border-indigo-ink/40 focus-visible:border-b-2 focus-visible:border-terracotta focus-visible:ring-0"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="nights"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="eyebrow text-indigo-ink/60">
                                        Nights
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="e.g. 7 Nights"
                                            className="h-12 rounded-none border-t-0 border-r-0 border-b border-l-0 border-indigo-ink/20 bg-transparent px-0 shadow-none transition-colors hover:border-indigo-ink/40 focus-visible:border-b-2 focus-visible:border-terracotta focus-visible:ring-0"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="startingPoint"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="eyebrow text-indigo-ink/60">
                                        Starting Point
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            className="h-12 rounded-none border-t-0 border-r-0 border-b border-l-0 border-indigo-ink/20 bg-transparent px-0 shadow-none transition-colors hover:border-indigo-ink/40 focus-visible:border-b-2 focus-visible:border-terracotta focus-visible:ring-0"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                    <FormField
                        control={form.control}
                        name="description"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="eyebrow text-indigo-ink/60">
                                    Description
                                </FormLabel>
                                <FormControl>
                                    <Textarea
                                        rows={4}
                                        className="min-h-[100px] resize-none rounded-none border-t-0 border-r-0 border-b border-l-0 border-indigo-ink/20 bg-transparent px-0 py-2 shadow-none transition-colors hover:border-indigo-ink/40 focus-visible:border-b-2 focus-visible:border-terracotta focus-visible:ring-0"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                <div className="space-y-8">
                    <div className="flex items-center justify-between border-b border-indigo-ink/5 pb-4">
                        <h2 className="font-display text-2xl font-bold text-indigo-ink">
                            Itinerary
                        </h2>
                        <Button
                            type="button"
                            variant="outline"
                            size="sm"
                            className="eyebrow h-10 rounded-none border-terracotta px-4 text-terracotta transition-colors hover:bg-terracotta hover:text-ivory"
                            onClick={() =>
                                appendItinerary({
                                    day: `Day ${itineraryFields.length + 1}`,
                                    title: '',
                                    description: '',
                                })
                            }
                        >
                            <Plus className="mr-2 h-3 w-3" /> Add Day
                        </Button>
                    </div>
                    <div className="grid gap-6">
                        {itineraryFields.map((field, index) => (
                            <div
                                key={field.id}
                                className="group relative border-b border-indigo-ink/10 bg-transparent py-8 transition-colors first:pt-4"
                            >
                                <div className="flex items-start gap-6">
                                    <FormField
                                        control={form.control}
                                        name={`itinerary.${index}.day`}
                                        render={({ field }) => (
                                            <FormItem className="w-24 shrink-0">
                                                <FormLabel className="eyebrow text-[9px] opacity-50">
                                                    Day
                                                </FormLabel>
                                                <FormControl>
                                                    <Input
                                                        className="h-10 rounded-none border-t-0 border-r-0 border-b border-l-0 border-indigo-ink/20 bg-transparent px-0 font-display text-xl shadow-none transition-colors hover:border-indigo-ink/40 focus-visible:border-b-2 focus-visible:border-terracotta focus-visible:ring-0"
                                                        {...field}
                                                    />
                                                </FormControl>
                                            </FormItem>
                                        )}
                                    />
                                    <div className="flex-1 space-y-6">
                                        <FormField
                                            control={form.control}
                                            name={`itinerary.${index}.title`}
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel className="eyebrow text-[9px] opacity-50">
                                                        Milestone
                                                    </FormLabel>
                                                    <FormControl>
                                                        <Input
                                                            placeholder="Title of the day"
                                                            className="h-10 rounded-none border-t-0 border-r-0 border-b border-l-0 border-indigo-ink/20 bg-transparent px-0 font-medium shadow-none transition-colors hover:border-indigo-ink/40 focus-visible:border-b-2 focus-visible:border-terracotta focus-visible:ring-0"
                                                            {...field}
                                                        />
                                                    </FormControl>
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name={`itinerary.${index}.description`}
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel className="eyebrow text-[9px] opacity-50">
                                                        Narrative
                                                    </FormLabel>
                                                    <FormControl>
                                                        <Textarea
                                                            placeholder="Describe the day's experiences..."
                                                            className="min-h-[80px] resize-none rounded-none border-t-0 border-r-0 border-b border-l-0 border-indigo-ink/20 bg-transparent px-0 py-2 shadow-none transition-colors hover:border-indigo-ink/40 focus-visible:border-b-2 focus-visible:border-terracotta focus-visible:ring-0"
                                                            {...field}
                                                        />
                                                    </FormControl>
                                                </FormItem>
                                            )}
                                        />
                                    </div>
                                    <Button
                                        type="button"
                                        variant="ghost"
                                        size="icon"
                                        className="mt-4 text-muted-foreground opacity-0 transition-all group-hover:opacity-100 hover:text-destructive"
                                        onClick={() => removeItinerary(index)}
                                    >
                                        <Trash2 className="h-4 w-4" />
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="space-y-8">
                    <h2 className="border-b border-indigo-ink/5 pb-4 font-display text-2xl font-bold text-indigo-ink">
                        Settings & Visibility
                    </h2>
                    <FormField
                        control={form.control}
                        name="isPublished"
                        render={({ field }) => (
                            <FormItem className="flex items-center justify-between rounded-none border-b border-indigo-ink/10 bg-transparent py-8">
                                <div className="space-y-1">
                                    <FormLabel className="font-display text-xl">
                                        Published
                                    </FormLabel>
                                    <FormDescription className="text-xs font-light">
                                        Make this journey visible to the public
                                        on the collection page.
                                    </FormDescription>
                                </div>
                                <FormControl>
                                    <Switch
                                        checked={field.value}
                                        onCheckedChange={field.onChange}
                                        className="data-[state=checked]:bg-terracotta"
                                    />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                </div>

                <Button
                    type="submit"
                    disabled={isLoading}
                    className="eyebrow h-16 w-full rounded-none bg-terracotta text-sm tracking-[0.2em] text-ivory shadow-lg shadow-terracotta/10 transition-all hover:bg-terracotta/90 active:scale-[0.99]"
                >
                    {isLoading && (
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    )}
                    {initialData
                        ? 'Apply Changes'
                        : 'Confirm and Create Journey'}
                </Button>
            </form>
        </Form>
    );
}
