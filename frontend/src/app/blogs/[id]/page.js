import React from 'react';
import BlogDetailClient from './BlogDetailClient';
import { blogs } from '@/data/blogs';

export async function generateMetadata({ params }) {
    const { id } = await params;
    const blog = blogs.find((b) => b.id === id);

    if (!blog) {
        return {
            title: 'Blog Not Found | McRAYGOR',
        };
    }

    return {
        title: `${blog.title} | Sewer Cleaning Insights | McRAYGOR`,
        description: blog.excerpt,
        keywords: `mcraygor blog, ${blog.author}, water management news, infrastructure insights`,
        alternates: {
            canonical: `/blogs/${blog.id}`,
        },
        openGraph: {
            title: blog.title,
            description: blog.excerpt,
            url: `https://beta.mcraygor.com/blogs/${blog.id}`,
            images: [
                {
                    url: blog.image.src || blog.image,
                    width: 1200,
                    height: 630,
                    alt: blog.title,
                }
            ],
            type: 'article',
            publishedTime: blog.date,
            authors: [blog.author],
        },
    };
}

export default function BlogPage({ params }) {
    return <BlogDetailClient params={params} />;
}
