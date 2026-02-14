import React from 'react';
import AboutClient from './AboutClient';
import machine2 from '@/assets/hero/machine2.jpeg';

export const metadata = {
    title: "About McRAYGOR | Excellence in Sewer Cleaning & Industrial Solutions",
    description: "Learn about McRAYGOR Mechanicals' history, our mission for excellence in mechanical infrastructure, and our 25-year legacy of engineering innovation.",
    keywords: "about mcraygor, sewer cleaning history, excellence in engineering, infrastructure solutions heritage",
    openGraph: {
        images: [machine2.src],
    },
};

export default function AboutPage() {
    return <AboutClient />;
}
