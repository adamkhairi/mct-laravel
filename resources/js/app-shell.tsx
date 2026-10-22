import type { ReactElement } from 'react';
import { Toaster } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import AppLayout from '@/layouts/app-layout';
import AuthLayout from '@/layouts/auth-layout';
import SettingsLayout from '@/layouts/settings/layout';

export function resolveLayout(name: string) {
    switch (true) {
        case name.startsWith('Admin/'):
            return AppLayout;
        case name.startsWith('auth/'):
            return AuthLayout;
        case name.startsWith('settings/'):
            return [AppLayout, SettingsLayout];
        case name === 'dashboard':
            return AppLayout;
        default:
            return null;
    }
}

export function wrapApp(app: ReactElement): ReactElement {
    return (
        <TooltipProvider delayDuration={0}>
            {app}
            <Toaster />
        </TooltipProvider>
    );
}
