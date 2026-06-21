import { Link, usePage } from '@inertiajs/react';
import { LayoutDashboard, Map, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from '@/components/ui/sidebar';
import { dashboard } from '@/routes';
import admin from '@/routes/admin';
import type { User } from '@/types/auth';

export function AppSidebar() {
    const { auth } = usePage<{ auth: { user: User } }>().props;
    const { url } = usePage();
    const user = auth.user;

    return (
        <Sidebar className="border-r border-indigo-ink/5 bg-sand">
            <SidebarHeader className="p-6">
                <Link
                    href={dashboard().url}
                    className="group flex items-center gap-3"
                >
                    <img
                        src="/assets/logo-mark.png"
                        alt="Moroccan Club Travel"
                        className="h-8 w-auto"
                    />
                    <div className="flex flex-col">
                        <h2 className="font-display text-base leading-none font-bold text-indigo-ink transition-colors group-hover:text-terracotta">
                            Moroccan Club
                        </h2>
                        <span className="eyebrow mt-1 text-[8px] text-terracotta opacity-70">
                            Travel Admin
                        </span>
                    </div>
                </Link>
            </SidebarHeader>

            <SidebarContent className="px-3">
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton
                            asChild
                            isActive={url === dashboard().url}
                            className="font-sans text-xs font-bold tracking-widest text-indigo-ink/80 uppercase transition-all duration-300 hover:bg-ivory hover:text-terracotta data-[active=true]:bg-ivory data-[active=true]:text-terracotta"
                        >
                            <Link
                                href={dashboard().url}
                                className="flex items-center gap-3"
                            >
                                <LayoutDashboard className="h-4 w-4" />
                                <span>Dashboard</span>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                        <SidebarMenuButton
                            asChild
                            isActive={url.startsWith(admin.tours.index().url)}
                            className="font-sans text-xs font-bold tracking-widest text-indigo-ink/80 uppercase transition-all duration-300 hover:bg-ivory hover:text-terracotta data-[active=true]:bg-ivory data-[active=true]:text-terracotta"
                        >
                            <Link
                                href={admin.tours.index().url}
                                className="flex items-center gap-3"
                            >
                                <Map className="h-4 w-4" />
                                <span>Tours</span>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarContent>

            <SidebarFooter className="border-t border-indigo-ink/5 bg-ivory/50 p-4">
                <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-3 px-2">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-terracotta text-xs font-bold text-ivory">
                            {user?.name?.charAt(0) || 'A'}
                        </div>
                        <div className="flex flex-col overflow-hidden">
                            <span className="truncate text-xs font-semibold text-indigo-ink">
                                {user?.name || 'Admin'}
                            </span>
                            <span className="truncate text-[10px] text-muted-foreground">
                                {user?.email}
                            </span>
                        </div>
                    </div>
                    <Link
                        href="/logout"
                        method="post"
                        as="button"
                        className="flex w-full items-center justify-start rounded-sm border border-indigo-ink/10 bg-white/40 px-4 py-2 text-xs font-bold tracking-widest text-indigo-ink/60 uppercase shadow-xs transition-all duration-300 hover:border-destructive/20 hover:bg-destructive/10 hover:text-destructive active:scale-[0.98]"
                    >
                        <LogOut className="mr-2 h-4 w-4" />
                        Sign Out
                    </Link>
                </div>
            </SidebarFooter>
        </Sidebar>
    );
}
