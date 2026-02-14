import { blogs } from '@/data/blogs';
import { projects } from '@/data/projects';

export default function sitemap() {
    const baseUrl = 'https://beta.mcraygor.com';

    const staticRoutes = [
        '',
        '/about',
        '/products',
        '/projects',
        '/gallery',
        '/blogs',
        '/awards',
        '/privacy-policy',
        '/terms-and-conditions',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: route === '' ? 'daily' : 'weekly',
        priority: route === '' ? 1 : 0.8,
    }));

    const blogRoutes = blogs.map((blog) => ({
        url: `${baseUrl}/blogs/${blog.id}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.6,
    }));

    const projectRoutes = projects.map((project) => ({
        url: `${baseUrl}/projects/${project.id}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.6,
    }));

    return [...staticRoutes, ...blogRoutes, ...projectRoutes];
}
