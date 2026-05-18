import { Head, Link, useForm } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Plus, Edit, Trash2, Eye, MapPin, Clock } from 'lucide-react';
import admin from '@/routes/admin';
import tours from '@/routes/tours';

export default function Index({ tours: tourList }: { tours: any[] }) {
    const { delete: destroy } = useForm();

    const deleteTour = (id: string) => {
        if (confirm('Are you sure you want to delete this tour?')) {
            destroy(admin.tours.destroy({ tour: id }).url);
        }
    };

    return (
        <>
            <Head title="Manage Tours" />
            <div className="space-y-10 p-6">
                <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
                    <div>
                        <h1 className="text-4xl font-bold">Tours</h1>
                    </div>
                    <Button asChild>
                        <Link href={admin.tours.create().url}>
                            <Plus className="mr-2 h-4 w-4" />
                            Add New Journey
                        </Link>
                    </Button>
                </div>

                <div className="overflow-hidden rounded-lg border">
                    <table className="w-full text-sm">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="p-4 text-left">Title</th>
                                <th className="p-4 text-left">Logistics</th>
                                <th className="p-4 text-left">Visibility</th>
                                <th className="p-4 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tourList.map((tour: any) => (
                                <tr key={tour.id} className="border-b">
                                    <td className="p-4">{tour.title}</td>
                                    <td className="p-4">
                                        <div className="flex items-center gap-2">
                                            <MapPin className="h-3 w-3" />{' '}
                                            {tour.starting_point}
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Clock className="h-3 w-3" />{' '}
                                            {tour.duration}
                                        </div>
                                    </td>
                                    <td className="p-4">
                                        <Badge>
                                            {tour.is_published
                                                ? 'Published'
                                                : 'Draft'}
                                        </Badge>
                                    </td>
                                    <td className="flex justify-end gap-2 p-4 text-right">
                                        <Link
                                            href={
                                                tours.show({ tour: tour.slug })
                                                    .url
                                            }
                                            target="_blank"
                                        >
                                            <Eye className="h-4 w-4" />
                                        </Link>
                                        <Link
                                            href={
                                                admin.tours.edit({
                                                    tour: tour.id,
                                                }).url
                                            }
                                        >
                                            <Edit className="h-4 w-4" />
                                        </Link>
                                        <button
                                            onClick={() => deleteTour(tour.id)}
                                            className="text-red-500"
                                        >
                                            <Trash2 className="h-4 w-4" />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}
