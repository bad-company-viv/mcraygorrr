import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SEO = ({ title, description, keywords }) => {
    const location = useLocation();

    useEffect(() => {
        const baseTitle = "McRAYGOR Mechanicals™";
        document.title = title ? `${title} | ${baseTitle}` : `${baseTitle} | Sewer Cleaning Equipment India`;

        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', description || "India's leading manufacturer of high-performance sewer cleaning equipment and municipal waste management solutions.");
        }

        const metaKeywords = document.querySelector('meta[name="keywords"]');
        if (metaKeywords) {
            metaKeywords.setAttribute('content', keywords || "sewer cleaning machine, jetting suction machine, super sucker, municipal equipment India, McRAYGOR, waste management");
        }

        // Canonical URL
        let link = document.querySelector('link[rel="canonical"]');
        if (!link) {
            link = document.createElement('link');
            link.setAttribute('rel', 'canonical');
            document.head.appendChild(link);
        }
        link.setAttribute('href', `https://mcraygor-mu.vercel.app${location.pathname}`);

    }, [title, description, keywords, location]);

    return null;
};

export default SEO;
