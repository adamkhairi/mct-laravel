import { createInertiaApp } from '@inertiajs/react';
import createServer from '@inertiajs/react/server';
import { renderToString } from 'react-dom/server';

const pages = import.meta.glob<{ default: React.ComponentType }>(
    './pages/**/*.tsx',
);

createServer((page) =>
    createInertiaApp({
        page,
        render: renderToString,
        resolve: async (name) => {
            const loadPage = pages[`./pages/${name}.tsx`];

            if (!loadPage) {
                throw new Error(`Page component not found: ${name}`);
            }

            return (await loadPage()).default;
        },
        setup: ({ App, props }) => <App {...props} />,
    }),
);
