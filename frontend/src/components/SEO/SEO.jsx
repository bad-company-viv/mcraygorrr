import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SEO = ({ title, description, keywords, image }) => {
    const location = useLocation();

    useEffect(() => {
        const baseTitle = "McRAYGOR Mechanicals™";
        const metaTitle = title ? `${title} | ${baseTitle}` : `${baseTitle} | Sewer Cleaning Equipment India`;
        const metaDesc = description || "India's leading manufacturer of high-performance sewer cleaning equipment and municipal waste management solutions.";
        const metaKey = keywords || "sewer cleaning machine, jetting suction machine, super sucker, municipal equipment India, McRAYGOR, waste management";
        const baseUrl = "https://beta.mcraygor.com";
        const currentUrl = `${baseUrl}${location.pathname}`;
        const metaImage = image ? (image.startsWith('http') ? image : `${baseUrl}${image}`) : `${baseUrl}/images/mcraygor-logo.jpeg`;

        // Update Document Title
        document.title = metaTitle;

        // Helper function to update meta tags
        const updateMeta = (name, content, attribute = 'name') => {
            let element = document.querySelector(`meta[${attribute}="${name}"]`);
            if (!element) {
                element = document.createElement('meta');
                element.setAttribute(attribute, name);
                document.head.appendChild(element);
            }
            element.setAttribute('content', content);
        };

        // Standard Meta Tags
        updateMeta('description', metaDesc);
        updateMeta('keywords', metaKey);

        // Open Graph / Facebook
        updateMeta('og:title', metaTitle, 'property');
        updateMeta('og:description', metaDesc, 'property');
        updateMeta('og:url', currentUrl, 'property');
        updateMeta('og:image', metaImage, 'property');
        updateMeta('og:type', 'website', 'property');

        // Twitter
        updateMeta('twitter:card', 'summary_large_image', 'property');
        updateMeta('twitter:url', currentUrl, 'property');
        updateMeta('twitter:title', metaTitle, 'property');
        updateMeta('twitter:description', metaDesc, 'property');
        updateMeta('twitter:image', metaImage, 'property');

        // Canonical URL
        let link = document.querySelector('link[rel="canonical"]');
        if (!link) {
            link = document.createElement('link');
            link.setAttribute('rel', 'canonical');
            document.head.appendChild(link);
        }
        link.setAttribute('href', currentUrl);

    }, [title, description, keywords, image, location]);

    return null;
};

export default SEO;
