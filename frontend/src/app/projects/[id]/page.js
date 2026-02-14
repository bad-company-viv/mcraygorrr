import React from 'react';
import ProjectDetailClient from './ProjectDetailClient';
import { projects } from '@/data/projects';

export async function generateMetadata({ params }) {
    const { id } = await params;
    const project = projects.find((p) => p.id === parseInt(id));

    if (!project) {
        return {
            title: 'Project Not Found | McRAYGOR',
        };
    }

    return {
        title: `${project.title} | Sewer Cleaning Case Study | McRAYGOR`,
        description: project.description,
        keywords: `mcraygor project, ${project.category}, ${project.location}, infrastructure project`,
        openGraph: {
            images: [project.image],
        },
    };
}

export default function ProjectPage({ params }) {
    return <ProjectDetailClient params={params} />;
}
