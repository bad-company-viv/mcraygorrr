import React from 'react';
import ProjectsClient from './ProjectsClient';

export const metadata = {
    title: "Sewer Cleaning Projects & Impact Cases | McRAYGOR",
    description: "Discover our global impact through featured projects across more than 15 nations. We deliver high-performance mechanical infrastructure solutions worldwide.",
    keywords: "mcraygor projects, industrial infrastructure projects, global sewer cleaning projects, municipal works",
    alternates: {
        canonical: '/projects',
    },
    openGraph: {
        title: "Global Infrastructure Projects | McRAYGOR",
        description: "Impactful engineering solutions delivered across 15+ nations.",
        url: 'https://beta.mcraygor.com/projects',
        images: ['/images/McRaygor-Creative-1.webp'],
    },
};

export default function ProjectsPage() {
    return <ProjectsClient />;
}
