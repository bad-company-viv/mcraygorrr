import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight, Clock, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { blogs } from '@/data/blogs';

// Variants removed due to non-use

export default function BlogSection() {
  // Take only the first 3 blogs for the home page
  const recentBlogs = (blogs || []).slice(0, 3);

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div>
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 rounded-full text-emerald-700 text-sm font-medium mb-6">
              Latest Updates
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
              Blogs &{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
                Articles
              </span>
            </h2>
          </div>
          <Link to="/blogs">
            <Button
              variant="outline"
              className="self-start md:self-auto border-slate-300 hover:border-emerald-500 hover:text-emerald-600 rounded-full"
            >
              View All Articles
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </motion.div>

        {/* Articles Grid */}
        {recentBlogs.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentBlogs.map((article) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="group cursor-pointer"
              >
                <Link to={`/blogs/${article.id}`} className="block h-full">
                  <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-500 h-full flex flex-col">
                    {/* Image */}
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />

                    </div>

                    {/* Content */}
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {article.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {article.readTime || '2 min read'}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-emerald-700 transition-colors line-clamp-2">
                        {article.title}
                      </h3>

                      <p className="text-slate-600 line-clamp-2 mb-4 flex-1">
                        {article.excerpt}
                      </p>

                      {/* Author & Read More */}
                      <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                        <span className="flex items-center gap-2 text-sm text-slate-500">
                          <User className="w-4 h-4" />
                          {article.author}
                        </span>
                        <span className="flex items-center gap-1 text-emerald-600 font-medium text-sm group-hover:gap-2 transition-all">
                          Read More
                          <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 text-slate-500">
            <p>No articles available at the moment.</p>
          </div>
        )}
      </div>
    </section>
  );
}