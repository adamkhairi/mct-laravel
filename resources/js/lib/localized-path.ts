const localePrefix = /^\/(?:en|es|fr|de|it|pt|zh|nl|ru)(?=\/|$)/;

export function localizedPath(path: string, locale: string): string {
    const normalizedPath = path.startsWith('/') ? path : `/${path}`;
    const pathWithoutLocale = normalizedPath.replace(localePrefix, '') || '/';
    const suffix = pathWithoutLocale === '/' ? '' : pathWithoutLocale;

    return `/${locale}${suffix}`;
}
