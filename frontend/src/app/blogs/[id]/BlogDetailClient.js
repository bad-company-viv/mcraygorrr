"use client";

import React, { use } from 'react';
import Link from 'next/link';
import { blogs } from '@/data/blogs';
import Breadcrumbs from '@/components/Breadcrumbs/Breadcrumbs';

const BlogDetailClient = ({ params }) => {
    const { id } = use(params);
    const blog = blogs.find(b => b.id === id);

    if (!blog) {
        return (
            <div className="pt-32 pb-20 text-center min-h-screen">
                <h2 className="text-2xl font-bold">Blog post not found</h2>
                <Link href="/blogs" className="text-primary hover:underline mt-4 inline-block">Back to Blogs</Link>
            </div>
        );
    }

    return (
        <div className="pt-24 pb-20 bg-white min-h-screen">
            <div className="container mx-auto px-4 max-w-4xl">
                <Breadcrumbs />
                <Link href="/blogs" className="inline-flex items-center text-gray-500 hover:text-primary mb-8 transition-colors">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
                    Back to Blogs
                </Link>

                <header className="mb-10 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">{blog.title}</h1>
                    <div className="flex justify-center items-center space-x-4 text-gray-500">
                        <span>{blog.date}</span>
                        <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                        <span>{blog.author}</span>
                    </div>
                </header>

                {blog.image && (
                    <div className="mb-12 rounded-xl overflow-hidden shadow-lg">
                        <img src={blog.image.src || blog.image} alt={blog.title} className="w-full max-h-[500px] object-contain bg-gray-50"
                            onError={(e) => e.target.style.display = 'none'} />
                    </div>
                )}

                <div className="prose prose-lg max-w-none text-gray-700 leading-loose">
                    {blog.content.split('\n').map((paragraph, idx) => (
                        <p key={idx} className="mb-6">{paragraph}</p>
                    ))}
                </div>

                {/* Related Blogs Section */}
                <div className="mt-20 pt-16 border-t border-gray-100">
                    <h3 className="text-2xl font-bold text-gray-900 mb-8">Other Recent Insights</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {blogs.filter(b => b.id !== id).slice(0, 2).map((otherBlog) => (
                            <Link key={otherBlog.id} href={`/blogs/${otherBlog.id}`} className="group">
                                <div className="flex gap-4 items-center">
                                    <div className="w-24 h-24 flex-shrink-0 rounded-xl overflow-hidden bg-gray-50">
                                        <img
                                            src={otherBlog.image.src || otherBlog.image}
                                            alt={otherBlog.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 group-hover:text-primary transition-colors line-clamp-2">
                                            {otherBlog.title}
                                        </h4>
                                        <p className="text-sm text-gray-500 mt-1">{otherBlog.date}</p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogDetailClient;
