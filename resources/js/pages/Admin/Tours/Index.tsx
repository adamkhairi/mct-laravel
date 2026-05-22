import { Head, Link, useForm } from '@inertiajs/react';
import { useState, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import DeleteTourDialog from '@/components/delete-tour-dialog';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { DialogTrigger } from '@/components/ui/dialog';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import {
    Plus,
    Edit,
    Trash2,
    Eye,
    MapPin,
    Calendar,
    Clock,
    ChevronLeft,
    ChevronRight,
    Search,
    X,
    SlidersHorizontal,
} from 'lucide-react';
import admin from '@/routes/admin';
import tours from '@/routes/tours';

const DESTINATIONS = ['Casablanca', 'Fes', 'Marrakech', 'Tangier'];
const TRIP_TYPES = [
    'Adventure & Culture',
    'Cultural & Historical',
    'Desert tours',
    'Just for women',
    'Long-tours',
    'Short tours',
    'Spiritual & Wellness',
];
const DURATIONS = [
    { label: 'Short (1-4 Days)', value: 'short', min: 1, max: 4 },
    { label: 'Medium (5-9 Days)', value: 'medium', min: 5, max: 9 },
    { label: 'Extended (10+ Days)', value: 'long', min: 10, max: 99 },
];

export default function Index({ tours: toursPaginated }: { tours: any }) {
    const { delete: destroy } = useForm();

    const tourList = toursPaginated?.data || [];
    const meta = toursPaginated?.meta;
    const links = meta?.links || [];
    const hasMultiplePages = meta?.last_page > 1;
    const total = meta?.total || 0;

    const [searchQuery, setSearchQuery] = useState('');
    const [destination, setDestination] = useState<string>('all');
    const [tripType, setTripType] = useState<string>('all');
    const [duration, setDuration] = useState<string>('all');
    const [tourToDelete, setTourToDelete] = useState<{
        id: string;
        title: string;
    } | null>(null);

    const clearFilters = () => {
        setSearchQuery('');
        setDestination('all');
        setTripType('all');
        setDuration('all');
    };

    const deleteTour = (id: string) => {
        destroy(admin.tours.destroy({ tour: id }).url);
    };

    const formatDate = (dateString: string) => {
        if (!dateString) return 'N/A';
        try {
            const date = new Date(dateString);
            if (isNaN(date.getTime())) return 'N/A';
            return date.toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric',
            });
        } catch {
            return 'N/A';
        }
    };

    const filteredTours = useMemo(() => {
        return tourList.filter((tour: any) => {
            if (searchQuery) {
                const query = searchQuery.toLowerCase();
                const matchesTitle =
                    tour.title?.toLowerCase().includes(query) || false;
                const matchesDesc =
                    tour.description?.toLowerCase().includes(query) || false;
                const startingPoint = (
                    tour.startingPoint ||
                    tour.starting_point ||
                    ''
                ).toLowerCase();
                const matchesStart = startingPoint.includes(query);
                if (!matchesTitle && !matchesDesc && !matchesStart)
                    return false;
            }

            if (destination !== 'all') {
                const startPoint = (
                    tour.startingPoint ||
                    tour.starting_point ||
                    ''
                ).toLowerCase();
                const arrCity = (
                    tour.arrivalCity ||
                    tour.arrival_city ||
                    ''
                ).toLowerCase();
                const dest = destination.toLowerCase();
                if (!startPoint.includes(dest) && !arrCity.includes(dest))
                    return false;
            }

            if (tripType !== 'all') {
                const tType = tour.tripType || tour.trip_type;
                if (!tType) return false;
                const types = tType
                    .split(',')
                    .map((t: string) => t.trim().toLowerCase());
                if (!types.includes(tripType.toLowerCase())) return false;
            }

            if (duration !== 'all') {
                const days = parseInt(tour.duration);
                if (isNaN(days)) return false;
                if (duration === 'short' && (days < 1 || days > 4))
                    return false;
                if (duration === 'medium' && (days < 5 || days > 9))
                    return false;
                if (duration === 'long' && days < 10) return false;
            }

            return true;
        });
    }, [tourList, searchQuery, destination, tripType, duration]);

    const activeFiltersCount =
        (destination !== 'all' ? 1 : 0) +
        (tripType !== 'all' ? 1 : 0) +
        (duration !== 'all' ? 1 : 0) +
        (searchQuery !== '' ? 1 : 0);

    return (
        <>
            <Head title="Manage Tours" />
            <div className="animate-fade-up w-full space-y-10">
                <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                    <div>
                        <span className="eyebrow mb-4 block text-terracotta">
                            Inventory Management
                        </span>
                        <h1 className="font-display text-4xl font-bold text-indigo-ink md:text-5xl">
                            Tours
                        </h1>
                        <p className="mt-4 max-w-lg leading-relaxed text-muted-foreground">
                            Curate and manage the bespoke journeys that define
                            the Moroccan Club Travel experience.
                        </p>
                    </div>
                    <Button
                        asChild
                        className="eyebrow h-14 rounded-none bg-terracotta px-8 text-ivory hover:bg-terracotta/90"
                    >
                        <Link href={admin.tours.create().url}>
                            <Plus className="mr-2 h-4 w-4" />
                            Add New Journey
                        </Link>
                    </Button>
                </div>

                {/* Filters Section */}
                <div className="flex flex-col gap-6 border-y border-indigo-ink/10 py-6">
                    <div className="flex items-center justify-between">
                        <div className="eyebrow flex items-center gap-2 text-indigo-ink/40">
                            <SlidersHorizontal className="h-4 w-4" />
                            {activeFiltersCount > 0 && (
                                <span className="rounded-none bg-terracotta px-1.5 py-0.5 text-[9px] font-bold text-ivory">
                                    {activeFiltersCount}
                                </span>
                            )}
                            Filters
                        </div>
                        {activeFiltersCount > 0 && (
                            <button
                                onClick={clearFilters}
                                className="eyebrow flex cursor-pointer items-center gap-1 text-xs text-terracotta hover:text-terracotta/80"
                            >
                                <X className="h-3 w-3" /> Clear Filters
                            </button>
                        )}
                    </div>

                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-10">
                        {/* Search Input */}
                        <div className="group relative">
                            <Input
                                placeholder="Search journeys..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="h-10 rounded-none border-0 border-b border-indigo-ink/20 bg-transparent pr-8 pl-0 shadow-none transition-colors focus-visible:border-indigo-ink/60 focus-visible:ring-0"
                            />
                            {!searchQuery ? (
                                <Search className="pointer-events-none absolute top-1/2 right-0 h-4 w-4 -translate-y-1/2 text-indigo-ink/40 transition-colors group-focus-within:text-indigo-ink/60" />
                            ) : (
                                <button
                                    onClick={() => setSearchQuery('')}
                                    className="absolute top-1/2 right-0 -translate-y-1/2 text-indigo-ink/40 transition-colors hover:text-terracotta"
                                >
                                    <X className="h-4 w-4" />
                                </button>
                            )}
                        </div>

                        {/* Destination Dropdown */}
                        <Select
                            value={destination}
                            onValueChange={setDestination}
                        >
                            <SelectTrigger className="h-10 w-full rounded-none border-0 border-b border-indigo-ink/20 bg-transparent px-0 shadow-none transition-colors hover:border-indigo-ink/50 focus:ring-0 data-[state=open]:border-indigo-ink/60">
                                <div className="flex items-center gap-2">
                                    <span className="font-mono text-[10px] tracking-widest text-indigo-ink/40 uppercase">
                                        Dest
                                    </span>
                                    <SelectValue placeholder="Any Destination" />
                                </div>
                            </SelectTrigger>
                            <SelectContent className="rounded-none border-indigo-ink/10 shadow-xl">
                                <SelectItem
                                    value="all"
                                    className="cursor-pointer rounded-none"
                                >
                                    Any Destination
                                </SelectItem>
                                {DESTINATIONS.map((dest) => (
                                    <SelectItem
                                        key={dest}
                                        value={dest}
                                        className="cursor-pointer rounded-none"
                                    >
                                        From {dest}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>

                        {/* Duration Dropdown */}
                        <Select value={duration} onValueChange={setDuration}>
                            <SelectTrigger className="h-10 w-full rounded-none border-0 border-b border-indigo-ink/20 bg-transparent px-0 shadow-none transition-colors hover:border-indigo-ink/50 focus:ring-0 data-[state=open]:border-indigo-ink/60">
                                <div className="flex items-center gap-2">
                                    <span className="font-mono text-[10px] tracking-widest text-indigo-ink/40 uppercase">
                                        Days
                                    </span>
                                    <SelectValue placeholder="Any Duration" />
                                </div>
                            </SelectTrigger>
                            <SelectContent className="rounded-none border-indigo-ink/10 shadow-xl">
                                <SelectItem
                                    value="all"
                                    className="cursor-pointer rounded-none"
                                >
                                    Any Duration
                                </SelectItem>
                                {DURATIONS.map((dur) => (
                                    <SelectItem
                                        key={dur.value}
                                        value={dur.value}
                                        className="cursor-pointer rounded-none"
                                    >
                                        {dur.label}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>

                        {/* Trip Type Dropdown */}
                        <Select value={tripType} onValueChange={setTripType}>
                            <SelectTrigger className="h-10 w-full rounded-none border-0 border-b border-indigo-ink/20 bg-transparent px-0 shadow-none transition-colors hover:border-indigo-ink/50 focus:ring-0 data-[state=open]:border-indigo-ink/60">
                                <div className="flex items-center gap-2">
                                    <span className="font-mono text-[10px] tracking-widest text-indigo-ink/40 uppercase">
                                        Type
                                    </span>
                                    <SelectValue placeholder="Any Type" />
                                </div>
                            </SelectTrigger>
                            <SelectContent className="rounded-none border-indigo-ink/10 shadow-xl">
                                <SelectItem
                                    value="all"
                                    className="cursor-pointer rounded-none"
                                >
                                    Any Type
                                </SelectItem>
                                {TRIP_TYPES.map((type) => (
                                    <SelectItem
                                        key={type}
                                        value={type}
                                        className="cursor-pointer rounded-none"
                                    >
                                        {type}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                </div>

                {/* Table Section */}
                <div className="overflow-hidden border border-indigo-ink/5 bg-white shadow-[0_20px_40px_-15px_rgba(0,0,0,0.03)]">
                    <Table>
                        <TableHeader className="bg-sand/30">
                            <TableRow className="border-b border-indigo-ink/5 hover:bg-transparent">
                                <TableHead className="py-5 pl-6 font-mono text-[10px] tracking-widest text-muted-foreground uppercase">
                                    Collection Item
                                </TableHead>
                                <TableHead className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase">
                                    Logistics
                                </TableHead>
                                <TableHead className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase">
                                    Visibility
                                </TableHead>
                                <TableHead className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase">
                                    Last Modified
                                </TableHead>
                                <TableHead className="pr-6 text-right font-mono text-[10px] tracking-widest text-muted-foreground uppercase">
                                    Actions
                                </TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {filteredTours.length === 0 ? (
                                <TableRow>
                                    <TableCell
                                        colSpan={5}
                                        className="h-40 text-center font-light text-muted-foreground italic"
                                    >
                                        No journeys found in the collection.
                                    </TableCell>
                                </TableRow>
                            ) : (
                                filteredTours.map((tour: any) => {
                                    const isPublished =
                                        tour.isPublished !== undefined
                                            ? tour.isPublished
                                            : tour.is_published;
                                    const startingPoint =
                                        tour.startingPoint ||
                                        tour.starting_point;
                                    const updatedAt =
                                        tour.updatedAt || tour.updated_at;

                                    return (
                                        <TableRow
                                            key={tour.id}
                                            className="group border-b border-indigo-ink/5 transition-colors hover:bg-sand/10"
                                        >
                                            <TableCell className="py-6 pl-6">
                                                <div className="flex flex-col gap-1">
                                                    <span className="font-display text-xl text-indigo-ink transition-colors group-hover:text-terracotta">
                                                        {tour.title}
                                                    </span>
                                                    <span className="font-mono text-[11px] tracking-tighter text-muted-foreground uppercase opacity-60">
                                                        ID: {tour.slug}
                                                    </span>
                                                </div>
                                            </TableCell>
                                            <TableCell>
                                                <div className="flex flex-col gap-1.5 text-xs text-indigo-ink/70">
                                                    <div className="flex items-center gap-2">
                                                        <MapPin className="h-3 w-3 text-terracotta" />
                                                        <span>
                                                            {startingPoint}
                                                        </span>
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <Clock className="h-3 w-3 text-terracotta" />
                                                        <span>
                                                            {tour.duration}
                                                        </span>
                                                    </div>
                                                </div>
                                            </TableCell>
                                            <TableCell>
                                                <Badge
                                                    className={`rounded-none px-3 py-1 font-mono text-[9px] tracking-widest uppercase ${
                                                        isPublished
                                                            ? 'bg-green-100 text-green-700 hover:bg-green-100'
                                                            : 'bg-amber-100 text-amber-700 hover:bg-amber-100'
                                                    }`}
                                                >
                                                    {isPublished
                                                        ? 'Published'
                                                        : 'Draft'}
                                                </Badge>
                                            </TableCell>
                                            <TableCell>
                                                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                                    <Calendar className="h-3 w-3" />
                                                    {formatDate(updatedAt)}
                                                </div>
                                            </TableCell>
                                            <TableCell className="pr-6 text-right">
                                                <div className="flex justify-end gap-1">
                                                    <Button
                                                        variant="ghost"
                                                        size="icon"
                                                        asChild
                                                        className="rounded-none hover:bg-terracotta/5 hover:text-terracotta"
                                                    >
                                                        <Link
                                                            href={
                                                                tours.show({
                                                                    tour: tour.slug,
                                                                }).url
                                                            }
                                                            target="_blank"
                                                        >
                                                            <Eye className="h-4 w-4" />
                                                        </Link>
                                                    </Button>
                                                    <Button
                                                        variant="ghost"
                                                        size="icon"
                                                        asChild
                                                        className="rounded-none hover:bg-terracotta/5 hover:text-terracotta"
                                                    >
                                                        <Link
                                                            href={
                                                                admin.tours.edit(
                                                                    {
                                                                        tour: tour.slug,
                                                                    },
                                                                ).url
                                                            }
                                                        >
                                                            <Edit className="h-4 w-4" />
                                                        </Link>
                                                    </Button>
                                                    <DeleteTourDialog
                                                        tourId={tour.slug}
                                                        tourTitle={tour.title}
                                                        onConfirm={deleteTour}
                                                    >
                                                        <DialogTrigger asChild>
                                                            <Button
                                                                variant="ghost"
                                                                size="icon"
                                                                className="rounded-none hover:bg-destructive/5 hover:text-destructive"
                                                            >
                                                                <Trash2 className="h-4 w-4" />
                                                            </Button>
                                                        </DialogTrigger>
                                                    </DeleteTourDialog>
                                                </div>
                                            </TableCell>
                                        </TableRow>
                                    );
                                })
                            )}
                        </TableBody>
                    </Table>

                    {hasMultiplePages && filteredTours.length > 0 && (
                        <div className="flex items-center justify-between border-t border-indigo-ink/5 bg-sand/10 px-6 py-4">
                            <div className="text-sm text-muted-foreground">
                                Showing{' '}
                                <span className="font-medium text-indigo-ink">
                                    {filteredTours.length}
                                </span>{' '}
                                of{' '}
                                <span className="font-medium text-indigo-ink">
                                    {total}
                                </span>{' '}
                                tours
                            </div>
                            <div className="flex items-center gap-2">
                                <Link
                                    href={links[0]?.url || '#'}
                                    preserveScroll
                                    className={`inline-flex items-center gap-2 rounded-none px-4 py-2 text-sm font-medium transition-colors ${
                                        !links[0]?.url
                                            ? 'cursor-not-allowed text-muted-foreground/40'
                                            : 'text-indigo-ink hover:bg-sand/50 hover:text-terracotta'
                                    }`}
                                >
                                    <ChevronLeft className="h-4 w-4" />
                                    Previous
                                </Link>
                                <div className="flex items-center gap-1">
                                    {links
                                        .slice(1, -1)
                                        .map((link: any, index: number) => (
                                            <Link
                                                key={index}
                                                href={link.url || '#'}
                                                preserveScroll
                                                className={`inline-flex h-10 w-10 items-center justify-center rounded-none text-sm font-medium transition-colors ${
                                                    link.active
                                                        ? 'bg-terracotta text-ivory'
                                                        : link.url
                                                          ? 'text-indigo-ink hover:bg-sand/50 hover:text-terracotta'
                                                          : 'cursor-not-allowed text-muted-foreground/40'
                                                }`}
                                            >
                                                {link.label}
                                            </Link>
                                        ))}
                                </div>
                                <Link
                                    href={links[links.length - 1]?.url || '#'}
                                    preserveScroll
                                    className={`inline-flex items-center gap-2 rounded-none px-4 py-2 text-sm font-medium transition-colors ${
                                        !links[links.length - 1]?.url
                                            ? 'cursor-not-allowed text-muted-foreground/40'
                                            : 'text-indigo-ink hover:bg-sand/50 hover:text-terracotta'
                                    }`}
                                >
                                    Next
                                    <ChevronRight className="h-4 w-4" />
                                </Link>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}
