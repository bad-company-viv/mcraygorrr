"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronRight, Home } from 'lucide-react';

export default function Breadcrumbs() {
    const pathname = usePathname();

    if (pathname === '/') return null;

    const pathSegments = pathname.split('/').filter(Boolean);

    const breadcrumbs = pathSegments.map((segment, index) => {
        const href = `/${pathSegments.slice(0, index + 1).join('/')}`;
        const isLast = index === pathSegments.length - 1;

        // Format segment: "about-us" -> "About Us"
        const label = segment
            .replace(/-/g, ' ')
            .replace(/\b\w/g, (l) => l.toUpperCase());

        return { label, href, isLast };
    });

    // Schema for breadcrumbs
    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://beta.mcraygor.com"
            },
            ...breadcrumbs.map((crumb, index) => ({
                "@type": "ListItem",
                "position": index + 2,
                "name": crumb.label,
                "item": `https://beta.mcraygor.com${crumb.href}`
            }))
        ]
    };

    return (
        <nav aria-label="Breadcrumb" className="mb-8">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <ol className="flex items-center space-x-2 text-sm text-slate-500 font-medium">
                <li className="flex items-center">
                    <Link href="/" className="hover:text-orange-600 transition-colors flex items-center">
                        <Home className="w-4 h-4 mr-1" />
                        <span>Home</span>
                    </Link>
                </li>

                {breadcrumbs.map((crumb, index) => (
                    <li key={crumb.href} className="flex items-center">
                        <ChevronRight className="w-4 h-4 mx-2 text-slate-300" />
                        {crumb.isLast ? (
                            <span className="text-slate-900 font-bold" aria-current="page">
                                {crumb.label}
                            </span>
                        ) : (
                            <Link href={crumb.href} className="hover:text-orange-600 transition-colors">
                                {crumb.label}
                            </Link>
                        )}
                    </li>
                ))}
            </ol>
        </nav>
    );
}
