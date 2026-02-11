import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

const SEO = ({ title, description, keywords, image }) => {
    const location = useLocation();

    const baseTitle = "McRAYGOR Mechanicals™";
    const metaTitle = title ? `${title} | ${baseTitle}` : `${baseTitle} | Sewer Cleaning Equipment India`;
    const metaDesc = description || "India's leading manufacturer of high-performance sewer cleaning equipment and municipal waste management solutions.";
    const metaKey = keywords || "sewer cleaning machine, jetting suction machine, super sucker, municipal equipment India, McRAYGOR, waste management";
    const baseUrl = "https://beta.mcraygor.com";
    const currentUrl = `${baseUrl}${location.pathname}`;
    const metaImage = image ? (image.startsWith('http') ? image : `${baseUrl}${image}`) : `${baseUrl}/images/mcraygor-logo.jpeg`;

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
        </Helmet>
    );
};

export default SEO;
