import { usePage } from '@inertiajs/react';

export function useTranslation() {
    const { translations, locale, locales } = usePage<{
        translations: Record<string, string>;
        locale: string;
        locales: string[];
    }>().props;

    /**
     * Translate key and replace placeholder variables.
     * e.g. __('Hello, :name', { name: 'John' })
     */
    const __ = (key: string, replace?: Record<string, string>): string => {
        let translation = (translations as any)?.[key] ?? key;

        if (replace) {
            Object.entries(replace).forEach(([k, v]) => {
                translation = translation.toString().replaceAll(`:${k}`, v);
            });
        }

        return translation;
    };

    return { __, currentLocale: locale, locales };
}
