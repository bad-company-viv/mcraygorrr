"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Calendar, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { projects } from '@/data/projects';

export default function ProjectsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const router = useRouter();


  // We only show the first 4 projects in the carousel to keep it clean
  const displayedProjects = projects.slice(0, 4);

  const nextProject = () => {
    setActiveIndex((prev) => (prev + 1) % displayedProjects.length);
  };

  const prevProject = () => {
    setActiveIndex((prev) => (prev - 1 + displayedProjects.length) % displayedProjects.length);
  };

  return (
    <section className="relative py-24 bg-slate-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div>
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 border border-orange-500/20 rounded-full text-orange-400 text-sm font-medium mb-6">
              Our Portfolio
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Featured{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                Projects
              </span>
            </h2>
          </div>

          {/* Navigation Buttons */}
          <div className="flex gap-3">
            <Button
              variant="outline"
              size="icon"
              onClick={prevProject}
              className="w-12 h-12 rounded-full border-slate-700 bg-transparent text-white hover:bg-white/10"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextProject}
              className="w-12 h-12 rounded-full border-slate-700 bg-transparent text-white hover:bg-white/10"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </motion.div>

        {/* Projects Display */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Main Featured Project */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              className="relative rounded-3xl overflow-hidden group cursor-pointer"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.5 }}
              onClick={() => router.push(`/projects/${displayedProjects[activeIndex].id}`)}
            >
              <div className="aspect-[4/3] relative">
                <img
                  src={displayedProjects[activeIndex].image.src || displayedProjects[activeIndex].image}
                  alt={displayedProjects[activeIndex].title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />

                {/* Content Overlay */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <span className="inline-flex self-start px-3 py-1 bg-orange-500/20 border border-orange-500/30 rounded-full text-orange-400 text-xs font-medium mb-4">
                    {displayedProjects[activeIndex].category}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                    {displayedProjects[activeIndex].title}
                  </h3>
                  <p className="text-slate-300 mb-4 line-clamp-2">
                    {displayedProjects[activeIndex].description}
                  </p>
                  <div className="flex items-center gap-6 text-sm text-slate-400">
                    <span className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      {displayedProjects[activeIndex].location}
                    </span>
                    <span className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {displayedProjects[activeIndex].year}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Project Thumbnails */}
          <div className="grid grid-cols-2 gap-4">
            {displayedProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className={`relative rounded-2xl overflow-hidden cursor-pointer group ${index === activeIndex ? 'ring-2 ring-orange-500' : ''
                  }`}
                onClick={() => setActiveIndex(index)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="aspect-[4/3] relative">
                  <img
                    src={project.image.src || project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 transition-colors duration-300 ${index === activeIndex
                    ? 'bg-orange-500/20'
                    : 'bg-slate-900/60 group-hover:bg-slate-900/40'
                    }`} />

                  <div className="absolute inset-0 p-4 flex flex-col justify-end">
                    <h4 className="text-sm font-semibold text-white line-clamp-1">
                      {project.title}
                    </h4>
                    <p className="text-xs text-slate-300 mt-1">{project.year}</p>
                  </div>

                  {/* Active Indicator */}
                  {index === activeIndex && (
                    <motion.div
                      className="absolute top-3 right-3 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center"
                      layoutId="activeIndicator"
                    >
                      <ArrowRight className="w-3 h-3 text-white" />
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* View All Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Link href="/projects">
            <Button
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 rounded-full group"
            >
              View All Projects
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}