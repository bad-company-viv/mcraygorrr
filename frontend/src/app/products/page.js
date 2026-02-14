import React from 'react';
import ProductsClient from './ProductsClient';
import { products } from '@/data/products';

export const metadata = {
    title: "Sewer Cleaning Machines & Industrial Products | McRAYGOR",
    description: "Browse our range of high-performance sewer cleaning machines, jetting suction units, and municipal equipment. Superior engineering for reliable utility management.",
    keywords: "sewer cleaning machines, jetting suction unit, industrial sewer cleaners, municipal utility equipment",
    alternates: {
        canonical: '/products',
    },
    openGraph: {
        title: "Industrial Sewer Cleaning Products | McRAYGOR",
        description: "High-performance machines for municipal and industrial utility management.",
        url: 'https://beta.mcraygor.com/products',
        images: ['/images/McRaygor-Creative-1.webp'],
    },
};

export default function ProductsPage() {
    return <ProductsClient />;
}
