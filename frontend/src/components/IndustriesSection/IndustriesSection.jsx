"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Factory, ShieldAlert, Landmark, ArrowRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

const industries = [
    {
        id: 'municipal',
        title: 'Municipal Sanitation',
        icon: Landmark,
        description: 'Transforming urban hygiene with high-performance sewer cleaning and waste management systems.',
        coreSystems: ['Jetting-Suction Units', 'Super Suckers', 'Desilting Machines'],
        applications: ['Sewer line maintenance', 'Septic tank cleaning', 'Urban drainage management'],
        impact: 'Supporting Swachh Bharat Mission with 99.9% operational efficiency.',
        color: 'emerald'
    },
    {
        id: 'industrial',
        title: 'Heavy Industry',
        icon: Factory,
        description: 'Specialized vacuum solutions for oil, chemical, and manufacturing sectors to handle hazardous waste.',
        coreSystems: ['Industrial Vacuum Loaders', 'High-Pressure Pumps', 'Explosion-Proof Systems'],
        applications: ['Oil spill recovery', 'Chemical tank cleaning', 'Industrial slurry management'],
        impact: 'Zero-leakage operations for safer industrial environments.',
        color: 'orange'
    },
    {
        id: 'disaster',
        title: 'Disaster Management',
        icon: ShieldAlert,
        description: 'Rapid response equipment for flood control and emergency liquid waste clearance.',
        coreSystems: ['Mobile Pumping Stations', 'Submersible Dredging Pumps', 'Emergency Suction Units'],
        applications: ['Urban flood relief', 'Natural disaster recovery', 'Hazardous spill containment'],
        impact: 'Deployed across 15+ nations for critical emergency missions.',
        color: 'blue'
    },
    {
        id: 'smart-cities',
        title: 'Smart Infrastructure',
        icon: Building2,
        description: 'Next-generation utility management for modern smart cities and commercial complexes.',
        coreSystems: ['Compact Suction Units', 'Mini Jetting Machines', 'Remote Monitoring Stats'],
        applications: ['Commercial complex maintenance', 'Narrow lane sanitation', 'Real-time utility tracking'],
        impact: 'Optimizing resource usage with smart mechanical monitoring.',
        color: 'purple'
    }
];

export default function IndustriesSection() {
    return (
        <section className="py-32 bg-slate-50 relative overflow-hidden">
            {/* Background Accents */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-slate-100 to-transparent pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-3xl mb-20 text-center mx-auto">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-900 text-white rounded-full text-[10px] font-black uppercase tracking-widest mb-6"
                    >
                        <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
                        Key Sectors We Serve
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-black text-slate-900 mb-8 tracking-tighter"
                    >
                        Engineering Impact Across <br />
                        <span className="text-orange-600">Critical Industries</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-slate-600 font-medium leading-relaxed"
                    >
                        From urban sanitation to industrial waste, we provide specialized mechanical infrastructure
                        designed for reliability in the harshest environments.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {industries.map((sector, idx) => (
                        <motion.div
                            key={sector.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="group bg-white rounded-[3rem] p-10 shadow-sm hover:shadow-2xl border border-slate-100 transition-all duration-700 relative overflow-hidden"
                        >
                            {/* Decorative Corner Icon */}
                            <div className="absolute -top-10 -right-10 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-700">
                                <sector.icon className="w-64 h-64 -rotate-12" />
                            </div>

                            <div className="flex flex-col md:flex-row gap-8 relative z-10">
                                <div className="flex-shrink-0">
                                    <div className={`w-20 h-20 bg-slate-50 rounded-3xl flex items-center justify-center border border-slate-100 group-hover:scale-110 group-hover:bg-zinc-900 transition-all duration-500`}>
                                        <sector.icon className={`w-10 h-10 text-slate-900 group-hover:text-white`} />
                                    </div>
                                </div>

                                <div className="flex-grow">
                                    <h3 className="text-3xl font-black text-slate-900 mb-4 tracking-tight group-hover:text-orange-600 transition-colors">
                                        {sector.title}
                                    </h3>
                                    <p className="text-slate-500 mb-8 text-lg font-medium leading-relaxed">
                                        {sector.description}
                                    </p>

                                    <div className="grid md:grid-cols-2 gap-8 mb-8 pt-8 border-t border-slate-100">
                                        <div>
                                            <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-4">Core Systems</h4>
                                            <div className="space-y-3">
                                                {sector.coreSystems.map((sys, i) => (
                                                    <div key={i} className="flex items-center gap-2">
                                                        <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                                                        <span className="text-sm font-bold text-slate-700">{sys}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        <div>
                                            <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-4">Key Impact</h4>
                                            <p className="text-sm font-bold text-slate-900 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                                                {sector.impact}
                                            </p>
                                        </div>
                                    </div>

                                    <Link href="/products" className="inline-flex items-center gap-2 group/btn font-black uppercase tracking-widest text-[10px] text-zinc-900 hover:text-orange-600 transition-all">
                                        Explore Solutions
                                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-2 transition-transform" />
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
