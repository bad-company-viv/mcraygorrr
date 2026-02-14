import React from 'react';
import GalleryClient from './GalleryClient';

export const metadata = {
    title: "Equipment Gallery & Media | McRAYGOR",
    description: "Visual showcase of McRAYGOR sewer cleaning machines. High-quality images of our jetting suction machines & global project sites.",
    keywords: "sewer cleaning gallery, industrial machinery photos, McRAYGOR product gallery, municipal equipment images",
    alternates: {
        canonical: '/gallery',
    },
    openGraph: {
        title: "Product & Equipment Gallery | McRAYGOR",
        description: "Explore high-quality visuals of our advanced sanitation machinery in action.",
        url: 'https://beta.mcraygor.com/gallery',
        images: ['/images/McRaygor-Creative-1.webp'],
    },
};

export default function GalleryPage() {
    return <GalleryClient />;
}
