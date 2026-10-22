import { createInertiaApp } from '@inertiajs/react';
import { resolveLayout, wrapApp } from '@/app-shell';
import { initializeTheme } from '@/hooks/use-appearance';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => title || appName,
    layout: resolveLayout,
    strictMode: true,
    withApp: wrapApp,
    progress: {
        color: '#4B5563',
    },
});

// This will set light / dark mode on load...
initializeTheme();
