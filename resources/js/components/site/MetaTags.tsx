import { Head } from '@inertiajs/react';

interface MetaTagsProps {
    title: string;
    description?: string;
    image?: string;
    url?: string;
    type?: string;
    canonical?: string;
}

export function MetaTags({
    title,
    description = 'A Marrakesh-based atelier curating private tours through the Sahara, the High Atlas, the imperial cities and the Atlantic coast.',
    image = '/assets/hero-sahara.jpg',
    url = 'https://www.moroccanclubtravel.com',
    type = 'website',
    canonical,
}: MetaTagsProps) {
    const defaultTitle = 'Moroccan Club Travel';
    const fullTitle = title.includes(defaultTitle)
        ? title
        : `${title} — ${defaultTitle}`;
    const cleanCanonical = canonical || url;

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
            <meta
                head-key="og:description"
                property="og:description"
                content={description}
            />
            <meta head-key="og:image" property="og:image" content={image} />
            <meta head-key="og:url" property="og:url" content={url} />
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
                content={image}
            />

            {/* Canonical Link */}
            {cleanCanonical && (
                <link
                    head-key="canonical"
                    rel="canonical"
                    href={cleanCanonical}
                />
            )}
        </Head>
    );
}
