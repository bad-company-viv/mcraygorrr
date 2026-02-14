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
        alternates: {
            canonical: `/projects/${project.id}`,
        },
        openGraph: {
            title: project.title,
            description: project.description,
            url: `https://beta.mcraygor.com/projects/${project.id}`,
            images: [
                {
                    url: project.image.src || project.image,
                    width: 1200,
                    height: 630,
                    alt: project.title,
                }
            ],
            type: 'website',
        },
    };
}

export default function ProjectPage({ params }) {
    return <ProjectDetailClient params={params} />;
}
