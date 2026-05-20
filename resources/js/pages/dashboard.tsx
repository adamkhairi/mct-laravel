import { Head, Link } from '@inertiajs/react';
import { dashboard } from '@/routes';
import { TrendingUp, FileText, Eye, Clock, Calendar } from 'lucide-react';
import admin from '@/routes/admin';

interface Stats {
    totalTours: number;
    publishedTours: number;
    draftTours: number;
}

interface RecentTour {
    id: string;
    title: string;
    slug: string;
    is_published: boolean;
    created_at: string;
}

interface DashboardProps {
    stats: Stats;
    recentTours: RecentTour[];
}

export default function Dashboard({ stats, recentTours }: DashboardProps) {
    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
        });
    };

    return (
        <>
            <Head title="Dashboard" />
            <div className="flex h-full flex-1 flex-col gap-6 overflow-x-auto p-6">
                <div>
                    <h1 className="font-display text-3xl font-bold text-indigo-ink mb-2">Dashboard</h1>
                    <p className="text-muted-foreground">Welcome back! Here's an overview of your tours.</p>
                </div>

                {/* Stats Cards */}
                <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                    <div className="relative overflow-hidden rounded-xl border border-indigo-ink/10 bg-white p-6 shadow-sm">
                        <div className="flex items-start justify-between">
                            <div>
                                <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide">Total Tours</p>
                                <p className="mt-2 text-3xl font-bold text-indigo-ink">{stats.totalTours}</p>
                            </div>
                            <div className="rounded-lg bg-terracotta/10 p-3">
                                <FileText className="h-6 w-6 text-terracotta" />
                            </div>
                        </div>
                    </div>

                    <div className="relative overflow-hidden rounded-xl border border-indigo-ink/10 bg-white p-6 shadow-sm">
                        <div className="flex items-start justify-between">
                            <div>
                                <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide">Published</p>
                                <p className="mt-2 text-3xl font-bold text-green-600">{stats.publishedTours}</p>
                            </div>
                            <div className="rounded-lg bg-green-100 p-3">
                                <Eye className="h-6 w-6 text-green-600" />
                            </div>
                        </div>
                    </div>

                    <div className="relative overflow-hidden rounded-xl border border-indigo-ink/10 bg-white p-6 shadow-sm">
                        <div className="flex items-start justify-between">
                            <div>
                                <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide">Drafts</p>
                                <p className="mt-2 text-3xl font-bold text-amber-600">{stats.draftTours}</p>
                            </div>
                            <div className="rounded-lg bg-amber-100 p-3">
                                <Clock className="h-6 w-6 text-amber-600" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Recent Tours */}
                <div className="relative flex-1 overflow-hidden rounded-xl border border-indigo-ink/10 bg-white shadow-sm">
                    <div className="border-b border-indigo-ink/10 bg-sand/20 px-6 py-4">
                        <h2 className="font-display text-xl font-bold text-indigo-ink">Recent Tours</h2>
                        <p className="text-sm text-muted-foreground mt-1">Your latest tour additions</p>
                    </div>
                    <div className="p-6">
                        {recentTours.length === 0 ? (
                            <div className="py-12 text-center text-muted-foreground">
                                <FileText className="mx-auto h-12 w-12 text-muted-foreground/30 mb-3" />
                                <p className="font-medium">No tours yet</p>
                                <p className="text-sm mt-1">Create your first tour to get started</p>
                            </div>
                        ) : (
                            <div className="space-y-4">
                                {recentTours.map((tour) => (
                                    <Link
                                        key={tour.id}
                                        href={admin.tours.edit({ tour: tour.slug }).url}
                                        className="flex items-center justify-between rounded-lg border border-indigo-ink/5 p-4 transition-all hover:border-terracotta/30 hover:bg-sand/30 group"
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className="rounded-lg bg-sand/50 p-2 group-hover:bg-terracotta/10 transition-colors">
                                                <FileText className="h-5 w-5 text-indigo-ink/70 group-hover:text-terracotta transition-colors" />
                                            </div>
                                            <div>
                                                <h3 className="font-medium text-indigo-ink group-hover:text-terracotta transition-colors">
                                                    {tour.title}
                                                </h3>
                                                <div className="flex items-center gap-2 mt-1">
                                                    <Calendar className="h-3 w-3 text-muted-foreground" />
                                                    <span className="text-xs text-muted-foreground">
                                                        Created {formatDate(tour.created_at)}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <span
                                                className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${
                                                    tour.is_published
                                                        ? 'bg-green-100 text-green-700'
                                                        : 'bg-amber-100 text-amber-700'
                                                }`}
                                            >
                                                {tour.is_published ? 'Published' : 'Draft'}
                                            </span>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
                    {recentTours.length > 0 && (
                        <div className="border-t border-indigo-ink/10 bg-sand/10 px-6 py-4">
                            <Link
                                href={admin.tours.index().url}
                                className="text-sm font-medium text-terracotta hover:text-terracotta/80 transition-colors"
                            >
                                View all tours →
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

Dashboard.layout = {
    breadcrumbs: [
        {
            title: 'Dashboard',
            href: dashboard(),
        },
    ],
};
