import { Head, usePage } from '@inertiajs/react';
import { localizedPath } from '@/lib/localized-path';

interface MetaTagsProps {
    title: string;
    description?: string;
    image?: string;
    type?: string;
    canonical?: string;
    alternateLocales?: string[];
}

export function MetaTags({
    title,
    description = 'A Marrakesh-based atelier curating private tours through the Sahara, the High Atlas, the imperial cities and the Atlantic coast.',
    image = '/assets/hero-sahara.jpg',
    type = 'website',
    canonical,
    alternateLocales,
}: MetaTagsProps) {
    const { url: requestUrl, props } = usePage<{
        locale: string;
        locales: string[];
        defaultLocale: string;
        siteUrl: string;
        googleSiteVerification?: string | null;
    }>();
    const {
        locale,
        locales,
        defaultLocale,
        siteUrl,
        googleSiteVerification,
    } = props;
    const defaultTitle = 'Moroccan Club Travel';
    const fullTitle = title.includes(defaultTitle)
        ? title
        : `${title} — ${defaultTitle}`;
    const currentPath = requestUrl.split(/[?#]/, 1)[0] || '/';
    const canonicalUrl = new URL(canonical || currentPath, `${siteUrl}/`).href;
    const imageUrl = new URL(image, `${siteUrl}/`).href;
    const languageAlternates = alternateLocales ?? locales;
    const defaultLanguageUrl = new URL(
        localizedPath(currentPath, defaultLocale),
        `${siteUrl}/`,
    ).href;
    const organizationSchema = {
        '@context': 'https://schema.org',
        '@type': 'TravelAgency',
        name: 'Moroccan Club Travel',
        description:
            'A Marrakesh-based agency curating private tours through the Sahara, the High Atlas, the imperial cities and the Atlantic coast.',
        url: siteUrl,
        image: new URL('/icons/mct-512.png', `${siteUrl}/`).href,
        address: {
            '@type': 'PostalAddress',
            streetAddress: 'Av. Allal El Fassi Complexe Ahbas IMM B 1ère étage App 8',
            addressLocality: 'Daoudiat',
            addressRegion: 'Marrakech',
            addressCountry: 'MA',
        },
        contactPoint: {
            '@type': 'ContactPoint',
            telephone: '+212-524-311-743',
            contactType: 'customer service',
        },
    };

    return (
        <Head>
            <title>{fullTitle}</title>
            <meta
                head-key="description"
                name="description"
                content={description}
            />
            <meta
                head-key="author"
                name="author"
                content="Moroccan Club Travel"
            />

            {/* Open Graph / Facebook */}
            <meta head-key="og:type" property="og:type" content={type} />
            <meta head-key="og:title" property="og:title" content={fullTitle} />
            <meta head-key="og:locale" property="og:locale" content={locale} />
            <meta
                head-key="og:description"
                property="og:description"
                content={description}
            />
            <meta head-key="og:image" property="og:image" content={imageUrl} />
            <meta head-key="og:url" property="og:url" content={canonicalUrl} />
            <meta
                head-key="og:site_name"
                property="og:site_name"
                content="Moroccan Club Travel"
            />

            {/* Twitter */}
            <meta
                head-key="twitter:card"
                name="twitter:card"
                content="summary_large_image"
            />
            <meta
                head-key="twitter:title"
                name="twitter:title"
                content={fullTitle}
            />
            <meta
                head-key="twitter:description"
                name="twitter:description"
                content={description}
            />
            <meta
                head-key="twitter:image"
                name="twitter:image"
                content={imageUrl}
            />

            <link head-key="canonical" rel="canonical" href={canonicalUrl} />
            {languageAlternates.map((alternateLocale) => (
                <link
                    key={alternateLocale}
                    head-key={`alternate-${alternateLocale}`}
                    rel="alternate"
                    hrefLang={alternateLocale}
                    href={new URL(
                        localizedPath(currentPath, alternateLocale),
                        `${siteUrl}/`,
                    ).href}
                />
            ))}
            {languageAlternates.includes(defaultLocale) && (
                <link
                    head-key="alternate-x-default"
                    rel="alternate"
                    hrefLang="x-default"
                    href={defaultLanguageUrl}
                />
            )}
            {googleSiteVerification && (
                <meta
                    head-key="google-site-verification"
                    name="google-site-verification"
                    content={googleSiteVerification}
                />
            )}
            <script type="application/ld+json">
                {JSON.stringify(organizationSchema)}
            </script>
        </Head>
    );
}
