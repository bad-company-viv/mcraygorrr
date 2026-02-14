import React from 'react';
import AwardsClient from './AwardsClient';

export const metadata = {
    title: "Achievements & Recognition | McRAYGOR",
    description: "Explore our global certifications: ISO 9001, BSCI, GS, IMS, and TÜV Rheinland. Committed to international quality & safety standards.",
    keywords: "mcraygor certifications, ISO 9001 sewer cleaning, BSCI compliant manufacturer, TÜV Rheinland certified machines",
    alternates: {
        canonical: '/awards',
    },
    openGraph: {
        title: "Certifications & Quality Standards | McRAYGOR",
        description: "Global quality validation through ISO, BSCI, and TÜV Rheinland certifications.",
        url: 'https://beta.mcraygor.com/awards',
        images: ['/images/McRaygor-Creative-1.webp'],
    },
};

export default function AwardsPage() {
    return <AwardsClient />;
}
