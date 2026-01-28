import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { projects } from '@/data/projects';
import { MapPin, Calendar, ArrowRight } from 'lucide-react';
import SEO from '@/components/SEO/SEO';

const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-24 bg-white min-h-screen relative overflow-hidden">
      <SEO
        title="Impact & Projects"
        description="Discover our global impact through featured projects across more than 15 nations. We deliver high-performance mechanical infrastructure solutions worldwide."
        keywords="mcraygor projects, industrial infrastructure projects, global sewer cleaning projects, municipal works"
      />

      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-orange-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-600 text-sm font-bold uppercase tracking-widest mb-6"
          >
            Engineering Proof
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black text-slate-900 mb-8 tracking-tighter"
          >
            Global <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-emerald-800">Impact Cases</span>
          </motion.h1>
          <div className="w-20 h-1.5 bg-orange-500 mx-auto rounded-full mb-10"></div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-600 leading-relaxed font-medium"
          >
            From United Nations disaster response in Haiti to municipal upgrades in New Delhi,
            witness how McRAYGOR delivers robustness and reliability on a global scale.
          </motion.p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 group"
            >
              {/* Image Section */}
              <Link to={`/projects/${project.id}`} className="block relative aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                {/* Floating Tags */}
                <div className="absolute top-6 left-6 flex flex-col gap-2">
                  <span className="px-3 py-1.5 bg-white/90 backdrop-blur-sm text-[10px] font-black text-slate-900 uppercase tracking-widest rounded-lg shadow-sm">
                    {project.category}
                  </span>
                </div>

                {/* Client Highlight */}
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-[10px] text-orange-400 font-black uppercase tracking-widest mb-1">Official Project For</p>
                  <h4 className="text-white font-bold text-lg leading-tight transition-transform duration-500 group-hover:-translate-y-1">
                    {project.client}
                  </h4>
                </div>
              </Link>

              {/* Content Section */}
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-slate-400 mb-6">
                  <span className="flex items-center gap-1.5 px-2.5 py-1 bg-slate-50 rounded-md border border-slate-100">
                    <Calendar className="w-3 h-3 text-orange-500" /> {project.year}
                  </span>
                  <span className="flex items-center gap-1.5 px-2.5 py-1 bg-slate-50 rounded-md border border-slate-100">
                    <MapPin className="w-3 h-3 text-emerald-500" /> {project.location}
                  </span>
                </div>

                <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight group-hover:text-emerald-700 transition-colors">
                  <Link to={`/projects/${project.id}`}>
                    {project.title}
                  </Link>
                </h3>

                <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-grow font-medium line-clamp-3">
                  {project.description}
                </p>

                {/* Metrics Badges */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.metrics?.map((metric, i) => (
                    <span key={i} className="text-[9px] font-black uppercase tracking-widest px-2.5 py-1 bg-emerald-50 text-emerald-700 rounded-md border border-emerald-100">
                      {metric}
                    </span>
                  ))}
                </div>

                <Link
                  to={`/projects/${project.id}`}
                  className="inline-flex items-center gap-2 text-sm font-black text-slate-900 group-hover:text-emerald-600 transition-all uppercase tracking-widest border-b-2 border-slate-100 group-hover:border-emerald-500/50 pb-1 self-start"
                >
                  Full Case Study
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>

              {/* Bottom Accent */}
              <div className="h-1.5 w-full bg-slate-50 relative overflow-hidden">
                <div className="absolute inset-0 bg-emerald-500 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-1000" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Global Partnership Strip */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-40 pt-20 border-t border-slate-100 text-center"
        >
          <p className="text-slate-400 text-sm font-black tracking-[0.3em] uppercase mb-12">
            Trusted Partners & Infrastructure Foundations
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-40 grayscale group-hover:grayscale-0 transition-all">
            <span className="text-2xl font-black text-slate-400 tracking-tighter">UNITED NATIONS</span>
            <span className="text-2xl font-black text-slate-400 tracking-tighter">RELIANCE</span>
            <span className="text-2xl font-black text-slate-400 tracking-tighter">BMC MUMBAI</span>
            <span className="text-2xl font-black text-slate-400 tracking-tighter">DELHI JAL BOARD</span>
            <span className="text-2xl font-black text-slate-400 tracking-tighter">HARYANA GOVT.</span>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Projects