import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { CheckCircle2, Award, Users, Globe, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import machine1 from '@/assets/hero/machine1.jpeg';
import machine2 from '@/assets/hero/machine2.jpeg';

const stats = [
  { icon: Award, value: 3000, suffix: '+', label: 'Projects Completed' },
  { icon: Users, value: 400, suffix: '+', label: 'Expert Employees' },
  { icon: Globe, value: 25, suffix: '+', label: 'Years of Excellence' },
  { icon: CheckCircle2, value: 100, suffix: '%', label: 'Client Satisfaction' },
];

const features = [
  'ISO Certified Manufacturing',
  'Pan-India Service Network',
  'Government Approved Vendor',
  '24/7 Technical Support',
];

function AnimatedCounter({ value, suffix }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}{suffix}
    </span>
  );
}

export default function AboutSection() {
  return (
    <section className="relative py-24 xl:py-28 bg-white overflow-hidden">
      {/* Decorative Background Text */}
      <div className="absolute top-20 left-10 pointer-events-none select-none opacity-[0.03] overflow-hidden whitespace-nowrap">
        <h2 className="text-[250px] font-black tracking-tighter text-slate-900 leading-none">
          EXCELLENCE
        </h2>
      </div>

      {/* Decorative Gradient Background */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-orange-50/50 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-r from-emerald-50/30 to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 xl:gap-20 items-center">

          {/* Left - Image Composition */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative z-10">
              {/* Main Image with Decorative Border */}
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.2)] border-8 border-white group">
                <img
                  src={machine1}
                  alt="McRAYGOR Excellence"
                  className="w-full h-[500px] xl:h-[600px] object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-60" />
              </div>

              {/* Floating Glass Stats Card */}
              <motion.div
                className="absolute -bottom-8 right-4 lg:-right-8 bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl p-6 lg:p-8 border border-white/50 z-20"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 bg-emerald-500 rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-500/30">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h4 className="text-4xl font-black text-slate-900 leading-none">25+</h4>
                    <p className="text-emerald-700 font-bold uppercase tracking-wider text-xs mt-1">Years of Trust</p>
                  </div>
                </div>
              </motion.div>

              {/* Top Floating Image with Text Overlay */}
              <motion.div
                className="absolute -top-12 -left-12 w-56 h-56 rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white hidden xl:block z-20 group"
                initial={{ y: -30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <img
                  src={machine2}
                  alt="McRAYGOR Sanitation Equipment"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

              </motion.div>

              {/* Decorative Accent */}
              <div className="absolute -z-10 -bottom-10 -left-10 w-40 h-40 bg-orange-100/50 rounded-full blur-3xl" />
              <div className="absolute -z-10 -top-10 -right-10 w-40 h-40 bg-emerald-100/50 rounded-full blur-3xl" />
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            className="space-y-8 lg:space-y-10"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div>
              <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-50 rounded-full text-emerald-700 text-xs font-bold uppercase tracking-widest border border-emerald-100 mb-8">
                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                About McRAYGOR
              </span>
              <h2 className="text-4xl md:text-5xl xl:text-6xl font-bold text-slate-900 mb-8 leading-[1.1]">
                McRAYGOR: Building Excellence <br />
                <span className="text-orange-600">Since 2000</span>
              </h2>
              <div className="space-y-6">
                <p className="text-lg xl:text-xl text-slate-600 leading-relaxed font-medium">
                  McRAYGOR Mechanicals Infrastructure is India's leading manufacturer and exporter of
                  hydraulic products and sewer cleaning equipment.
                </p>
                <p className="text-lg text-slate-500 leading-relaxed">
                  With over <span className="text-slate-900 font-bold">3,000+ projects</span> completed nationwide,
                  we deliver innovative and sustainable solutions for water management,
                  and disaster management systems.
                </p>
              </div>
            </div>

            {/* Feature List with Hover Effects */}
            <div className="grid sm:grid-cols-2 gap-5">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-4 group p-1"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <div className="w-10 h-10 bg-emerald-50 group-hover:bg-emerald-500 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 shadow-sm">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 group-hover:text-white transition-colors" />
                  </div>
                  <span className="text-slate-800 font-bold tracking-tight text-sm group-hover:text-emerald-700 transition-colors">
                    {feature}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Action Area */}
            <div className="pt-6 flex flex-wrap gap-4 items-center">
              <Link to="/about">
                <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white rounded-full px-10 h-14 font-bold shadow-xl shadow-orange-600/20 group">
                  Discover Our Heritage
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>

            {/* Premium Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 pt-10 border-t border-slate-100">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="space-y-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <p className="text-4xl font-black text-slate-900 tracking-tight">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
