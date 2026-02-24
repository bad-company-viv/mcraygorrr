import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

const SEO = ({ title, description, keywords, image, schema }) => {
    const location = useLocation();

    const baseTitle = "McRAYGOR Mechanicals";
    const metaTitle = title ? `${title} | ${baseTitle}` : `${baseTitle} | Sewer Cleaning Equipment India`;
    const metaDesc = description || "India's leading manufacturer of high-performance sewer cleaning equipment and municipal waste management solutions.";
    const metaKey = keywords || "sewer cleaning machine, jetting suction machine, super sucker, municipal equipment India, McRAYGOR, waste management";
    const baseUrl = "https://beta.mcraygor.com";
    const currentUrl = `${baseUrl}${location.pathname}`;
    const metaImage = image ? (image.startsWith('http') ? image : `${baseUrl}${image}`) : `${baseUrl}/images/mcraygor-logo.jpeg`;

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": location.pathname === '/' ? [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": baseUrl
            }
        ] : [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": baseUrl
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": location.pathname.split('/').filter(Boolean).map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' '),
                "item": currentUrl
            }
        ]
    };

    const allSchemas = Array.isArray(schema) ? [breadcrumbSchema, ...schema] : schema ? [breadcrumbSchema, schema] : [breadcrumbSchema];

    return (
        <Helmet>
            {/* Standard Meta Tags */}
            <title>{metaTitle}</title>
            <meta name="description" content={metaDesc} />
            <meta name="keywords" content={metaKey} />
            <link rel="canonical" href={currentUrl} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={currentUrl} />
            <meta property="og:title" content={metaTitle} />
            <meta property="og:description" content={metaDesc} />
            <meta property="og:image" content={metaImage} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={currentUrl} />
            <meta property="twitter:title" content={metaTitle} />
            <meta property="twitter:description" content={metaDesc} />
            <meta property="twitter:image" content={metaImage} />

            {/* JSON-LD Structured Data */}
            <script type="application/ld+json">
                {JSON.stringify(allSchemas)}
            </script>
        </Helmet>
    );
};

export default SEO;
