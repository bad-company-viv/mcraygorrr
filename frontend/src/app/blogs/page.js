import React from 'react';
import BlogsClient from './BlogsClient';

export const metadata = {
    title: "Sewer Cleaning Insights & Blog | McRAYGOR",
    description: "Stay updated with the latest news, technical updates, and industry insights from McRAYGOR Mechanicals, the leader in sewer cleaning technology.",
    keywords: "sewer cleaning blog, industrial news India, McRAYGOR updates, waste management insights",
    alternates: {
        canonical: '/blogs',
    },
    openGraph: {
        title: "News & Insights | McRAYGOR Mechanicals",
        description: "Latest technical updates and industry news from the leaders in sanitation technology.",
        url: 'https://beta.mcraygor.com/blogs',
        images: ['/images/McRaygor-Creative-1.webp'],
    },
};

export default function BlogsPage() {
    return <BlogsClient />;
}
