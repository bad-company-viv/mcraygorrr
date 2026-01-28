import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogs } from '../data/blogs';
import SEO from '@/components/SEO/SEO';

const BlogDetail = () => {
    const { id } = useParams();
    const blog = blogs.find(b => b.id === id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!blog) {
        return (
            <div className="pt-32 pb-20 text-center min-h-screen">
                <h2 className="text-2xl font-bold">Blog post not found</h2>
                <Link to="/blogs" className="text-primary hover:underline mt-4 inline-block">Back to Blogs</Link>
            </div>
        );
    }

    return (
        <div className="pt-24 pb-20 bg-white min-h-screen">
            <SEO
                title={blog.title}
                description={blog.excerpt}
                keywords={`mcraygor blog, ${blog.author}, water management news, infrastructure insights`}
            />
            <div className="container mx-auto px-4 max-w-4xl">
                <Link to="/blogs" className="inline-flex items-center text-gray-500 hover:text-primary mb-8 transition-colors">
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
                        <img src={blog.image} alt={blog.title} className="w-full max-h-[500px] object-contain bg-gray-50"
                            onError={(e) => e.target.style.display = 'none'} />
                    </div>
                )}

                <div className="prose prose-lg max-w-none text-gray-700 leading-loose">
                    {blog.content.split('\n').map((paragraph, idx) => (
                        <p key={idx} className="mb-6">{paragraph}</p>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BlogDetail;
