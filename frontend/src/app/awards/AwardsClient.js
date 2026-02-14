"use client";

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { awards } from '@/data/awards';
import { Award, Shield, CheckCircle } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs/Breadcrumbs';

const AwardsClient = () => {
    return (
        <div className="pt-32 pb-24 bg-white min-h-screen relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
                <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <Breadcrumbs />
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 border border-orange-500/20 rounded-full text-orange-600 text-sm font-bold uppercase tracking-widest mb-6"
                    >
                        <Award className="w-4 h-4" />
                        Excellence Recognized
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-black text-slate-900 mb-8 tracking-tighter"
                    >
                        McRAYGOR Global <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Certifications</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium"
                    >
                        Our commitment to international quality standards, environmental safety,
                        and social compliance is validated by the world's leading certification bodies.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
                    {awards.map((award, index) => (
                        <motion.div
                            key={award.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="group relative bg-white border border-slate-100 rounded-[2.5rem] p-10 transition-all duration-500 hover:border-orange-500/20 hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] overflow-hidden flex flex-col"
                        >
                            {/* Top Badge Row */}
                            <div className="flex justify-between items-start mb-6 relative z-10">
                                <span className="px-3 py-1 bg-slate-900 text-white text-[10px] font-black uppercase tracking-widest rounded-lg">
                                    {award.type}
                                </span>
                            </div>

                            {/* Card Background Pattern */}
                            <div className="absolute top-0 right-0 p-4 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity pointer-events-none">
                                <Shield className="w-32 h-32 rotate-12 text-slate-900" />
                            </div>

                            <div className="h-40 flex items-center justify-center mb-8 relative z-10">
                                <motion.img
                                    src={award.image.src || award.image}
                                    alt={award.title}
                                    className="max-h-full max-w-full object-contain filter brightness-105 transition-all duration-700 hover:scale-105"
                                />
                            </div>

                            <div className="relative z-10 text-center flex-grow">
                                <div className="inline-flex items-center gap-1.5 text-orange-600 mb-4 bg-orange-500/10 px-3 py-1 rounded-full border border-orange-500/10">
                                    <CheckCircle className="w-3.5 h-3.5" />
                                    <span className="text-[10px] font-black uppercase tracking-widest">Verified Legitimacy</span>
                                </div>

                                <h3 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-orange-600 transition-colors tracking-tight">
                                    {award.title}
                                </h3>

                                <p className="text-slate-500 text-sm leading-relaxed font-medium mb-6">
                                    {award.description}
                                </p>
                            </div>

                            {/* Decorative line */}
                            <div className="absolute bottom-0 left-0 w-full h-1.5 bg-gradient-to-r from-transparent via-orange-500/10 to-transparent group-hover:via-orange-500/50 transition-all duration-700"></div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom CTA or Info */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mt-24 text-center border-t border-slate-100 pt-16"
                >
                    <p className="text-slate-400 text-sm font-bold tracking-[0.2em] uppercase">
                        Continuous Quality Improvement • Sustainable Engineering • Ethical Compliance
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

export default AwardsClient;
