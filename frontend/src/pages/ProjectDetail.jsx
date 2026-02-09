import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Clock, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects } from '@/data/projects';
import { Button } from '@/components/ui/button';
import SEO from '@/components/SEO/SEO';
import CRMForm from '@/components/CRMForm/CRMForm';

const ProjectDetail = () => {
    const { id } = useParams();
    const projectId = parseInt(id);
    const project = projects.find(p => p.id === projectId);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <p>Loading project details...</p>
            </div>
        );
    }

    return (
        <div className="pt-32 pb-24 bg-white min-h-screen relative overflow-hidden">
            <SEO
                title={project.title}
                description={project.description}
                keywords={`mcraygor project, ${project.category}, ${project.location}, infrastructure project`}
                image={project.image}
            />

            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
                <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-orange-500/5 rounded-full blur-[120px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-5xl mx-auto">
                    <Link to="/projects">
                        <motion.button
                            whileHover={{ x: -5 }}
                            className="flex items-center gap-2 text-slate-500 hover:text-orange-600 font-black uppercase tracking-widest text-[10px] mb-12 transition-colors"
                        >
                            <ArrowLeft className="w-4 h-4" /> Back to Case Studies
                        </motion.button>
                    </Link>

                    {/* Hero Section */}
                    <div className="grid lg:grid-cols-2 gap-16 items-start mb-24">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                        >
                            <span className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 border border-emerald-100 rounded-lg text-emerald-700 text-[10px] font-black uppercase tracking-widest mb-6">
                                Official Case Study
                            </span>
                            <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 tracking-tighter leading-tight">
                                {project.title}
                            </h1>

                            <div className="flex flex-wrap gap-6 mb-10">
                                <div className="flex items-center gap-2">
                                    <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center border border-slate-100">
                                        <MapPin className="w-5 h-5 text-emerald-600" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest">Location</p>
                                        <p className="font-bold text-slate-900">{project.location}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center border border-slate-100">
                                        <Calendar className="w-5 h-5 text-orange-600" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest">Year</p>
                                        <p className="font-bold text-slate-900">{project.year}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Client Card */}
                            <div className="bg-slate-950 rounded-[2rem] p-8 text-white relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/20 rounded-full blur-3xl" />
                                <p className="text-[10px] text-emerald-400 font-black uppercase tracking-widest mb-2">Primary Client</p>
                                <h3 className="text-2xl font-bold mb-6">{project.client}</h3>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                                        <p className="text-sm text-slate-300 font-medium">Certified Industrial Excellence</p>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                                        <p className="text-sm text-slate-300 font-medium tracking-tight">{project.impact}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                            className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white"
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover"
                            />
                        </motion.div>
                    </div>

                    {/* Project Metrics Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
                        {project.metrics?.map((metric, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white border border-slate-100 p-6 rounded-[2rem] text-center shadow-sm hover:shadow-md transition-shadow"
                            >
                                <p className="text-sm font-black text-slate-900 uppercase tracking-widest mb-1">Key Meta</p>
                                <p className="text-emerald-600 font-bold text-xs">{metric}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Detailed Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-slate-50/50 backdrop-blur-sm rounded-[3rem] p-12 border border-slate-100"
                    >
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-1.5 h-8 bg-orange-500 rounded-full" />
                            <h2 className="text-3xl font-black text-slate-900 tracking-tight">Executive Summary</h2>
                        </div>

                        <div className="prose prose-lg max-w-none prose-slate">
                            <div className="whitespace-pre-line text-lg text-slate-600 font-medium leading-[2.2] text-justify">
                                {project.content || project.description}
                            </div>
                        </div>

                        <div className="mt-16 pt-12 border-t border-slate-200">
                            <h3 className="text-2xl font-black text-slate-900 tracking-tight mb-8 text-center">Request A Quotation</h3>
                            <CRMForm />
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetail;
