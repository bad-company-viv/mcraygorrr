"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Award, Globe, ShieldCheck } from 'lucide-react';

const coreValues = [
    {
        icon: Leaf,
        title: "Mission: Zero Carbon",
        description: "Engineering electric and low-emission mechanical solutions for a sustainable future."
    },
    {
        icon: Award,
        title: "Unmatched Excellence",
        description: "Every machine reflects 25 years of engineering precision and global standards."
    },
    {
        icon: Globe,
        title: "Global Footprint",
        description: "Solutions deployed across 15+ nations with 24/7 technical support."
    },
    {
        icon: ShieldCheck,
        title: "Certified Trust",
        description: "ISO 9001 and international safety certifications across our entire range."
    }
];

export default function MissionSection() {
    return (
        <section className="relative py-32 bg-zinc-950 overflow-hidden">
            {/* Dynamic Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-orange-500/10 rounded-full blur-[120px] -mr-96 -mt-96" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[120px] -ml-48 -mb-48" />
                <div className="absolute inset-0 opacity-[0.02]" style={{
                    backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                    backgroundSize: '40px 40px'
                }} />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-20 items-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="max-w-xl"
                    >
                        <span className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-[10px] font-black uppercase tracking-widest mb-8">
                            Corporate Philosophy
                        </span>
                        <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter leading-[0.9]">
                            Engineering A <br />
                            <span className="text-emerald-500">Cleaner World</span>
                        </h2>
                        <p className="text-xl text-slate-400 font-medium leading-relaxed">
                            At McRAYGOR, technical innovation meets environmental responsibility.
                            We are not just building machines; we are architecting the future of
                            sustainable mechanical infrastructure.
                        </p>
                    </motion.div>

                    <div className="grid sm:grid-cols-2 gap-8">
                        {coreValues.map((value, idx) => (
                            <motion.div
                                key={value.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="p-8 rounded-[2.5rem] bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-500 group"
                            >
                                <div className="w-14 h-14 bg-emerald-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                                    <value.icon className="w-6 h-6 text-emerald-500" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3 tracking-tight">{value.title}</h3>
                                <p className="text-sm text-slate-400 font-medium leading-relaxed">
                                    {value.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Vision Statement Banner */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative rounded-[3rem] p-12 md:p-20 bg-gradient-to-br from-zinc-900 to-zinc-950 border border-white/5 overflow-hidden text-center"
                >
                    <div className="absolute top-0 right-0 p-8 opacity-10">
                        <Globe className="w-48 h-48 text-white rotate-12" />
                    </div>
                    <h3 className="text-3xl md:text-5xl font-black text-white mb-8 tracking-tighter max-w-4xl mx-auto italic">
                        "Our vision is to eliminate manual sanitation labor worldwide through
                        innovative, accessible, and safe mechanical solutions."
                    </h3>
                    <div className="flex justify-center gap-12">
                        <div>
                            <p className="text-4xl font-black text-emerald-500">2020</p>
                            <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest mt-2 font-bold">First Electrical Prototype</p>
                        </div>
                        <div className="w-[1px] h-12 bg-white/10 hidden sm:block" />
                        <div>
                            <p className="text-4xl font-black text-orange-500">2026</p>
                            <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest mt-2 font-bold">100% Sustainable Mission</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
