import React, { useEffect } from 'react';
import { blogs } from '../data/blogs';
import { Link } from 'react-router-dom';
import SEO from '@/components/SEO/SEO';

const Blogs = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="pt-24 pb-16 bg-gray-50 min-h-screen">
            <SEO
                title="Sewer Cleaning Insights & Blog | McRAYGOR"
                description="Stay updated with the latest news, technical updates, and industry insights from McRAYGOR Mechanicals, the leader in sewer cleaning technology."
                keywords="sewer cleaning blog, industrial news India, McRAYGOR updates, waste management insights"
            />
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">McRAYGOR Latest Insights</h1>
                    <div className="w-24 h-1 bg-primary mx-auto"></div>
                    <p className="mt-4 text-lg text-gray-600">News, updates, and thought leadership from McRAYGOR.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {blogs.map((blog) => (
                        <div key={blog.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                            <div className="h-48 overflow-hidden bg-gray-200">
                                {/* Fallback pattern if image fails or is a placeholder */}
                                {blog.image ? (
                                    <img src={blog.image} alt={blog.title} className="w-full h-full object-cover"
                                        onError={(e) => { e.target.style.display = 'none'; e.target.parentElement.classList.add('bg-gray-300'); }} />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center bg-gray-800 text-white text-3xl font-bold opacity-20">McRAYGOR</div>
                                )}
                            </div>
                            <div className="p-8">
                                <div className="flex justify-between items-center mb-4">
                                    <span className="text-sm text-primary font-semibold">{blog.date}</span>
                                    <span className="text-xs text-gray-500">{blog.author}</span>
                                </div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4 hover:text-primary transition-colors cursor-pointer">{blog.title}</h2>
                                <p className="text-gray-600 mb-6 line-clamp-3">{blog.excerpt}</p>
                                <Link to={`/blogs/${blog.id}`} className="inline-flex items-center text-primary font-bold hover:underline">
                                    Read Full Article
                                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blogs;
