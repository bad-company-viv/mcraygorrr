import React from 'react';
import AboutClient from './AboutClient';
import machine2 from '@/assets/hero/machine2.jpeg';

export const metadata = {
    title: "About McRAYGOR | Excellence in Sewer Cleaning & Industrial Solutions",
    description: "Learn about McRAYGOR Mechanicals' history, our mission for excellence in mechanical infrastructure, and our 25-year legacy of engineering innovation.",
    keywords: "about mcraygor, sewer cleaning history, excellence in engineering, infrastructure solutions heritage",
    alternates: {
        canonical: '/about',
    },
    openGraph: {
        title: "About McRAYGOR | Excellence in Engineering",
        description: "25 years of engineering innovation in sewer cleaning and industrial infrastructure.",
        url: 'https://beta.mcraygor.com/about',
        images: [
            {
                url: machine2.src,
                width: 1200,
                height: 630,
                alt: 'McRAYGOR Engineering Excellence',
            }
        ],
    },
};

export default function AboutPage() {
    return <AboutClient />;
}
