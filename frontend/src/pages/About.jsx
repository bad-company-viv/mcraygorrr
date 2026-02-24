import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Globe, Award, Leaf, Users, Wrench, Phone, Target, Shield, Zap } from 'lucide-react';
import machine2 from '@/assets/hero/machine2.jpeg';
import SEO from '@/components/SEO/SEO';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const values = [
    {
      icon: Shield,
      title: 'Quality Excellence',
      description: 'Quality is our prime motto. We produce robust products with a focus on "Quality beyond anything", conforming to international BIS/IS codes.',
      color: 'from-blue-500/10 to-blue-500/5 text-blue-600 border-blue-100'
    },
    {
      icon: Zap,
      title: 'Advanced Innovation',
      description: 'We leverage indigenous techniques and state-of-the-art technology to create innovative solutions suited for any global environment.',
      color: 'from-orange-500/10 to-orange-500/5 text-orange-600 border-orange-100'
    },
    {
      icon: Leaf,
      title: 'Eco-Sustainability',
      description: 'Our products are eco-friendly and manufactured by an expert engineering group dedicated to environmental safety and green technology.',
      color: 'from-emerald-500/10 to-emerald-500/5 text-emerald-600 border-emerald-100'
    },
    {
      icon: Target,
      title: 'Client Centricity',
      description: 'We deliver cost-effective solutions without compromising quality, working closely with clients to meet precise project requirements.',
      color: 'from-purple-500/10 to-purple-500/5 text-purple-600 border-purple-100'
    }
  ];

  const advantages = [
    {
      icon: Phone,
      title: '24/7 Global Support',
      description: 'Round-the-clock infrastructure with dedicated support teams and machine pick-and-drop facilities.'
    },
    {
      icon: Wrench,
      title: 'On-Site Maintenance',
      description: '100% satisfaction guaranteed with comprehensive on-site repair and maintenance services available globally.'
    },
    {
      icon: Users,
      title: 'Professional Training',
      description: 'Specialized training for machine operators and expert consultancy for complex sewer-related infrastructure.'
    }
  ];

  const countries = [
    "USA", "Australia", "Brazil", "UAE", "Iraq", "Qatar", "Egypt", "Kenya",
    "South Africa", "Canada", "Haiti", "Syria", "Sri Lanka", "Bangladesh", "Nepal", "Nigeria", "Maldives"
  ];

  return (
    <div className="relative pt-32 pb-24 bg-white min-h-screen overflow-hidden">
      <SEO
        title="About McRAYGOR | Excellence in Sewer Cleaning & Industrial Solutions"
        description="Learn about McRAYGOR Mechanicals' history, our mission for excellence in mechanical infrastructure, and our 25-year legacy of engineering innovation."
        keywords="about mcraygor, sewer cleaning history, excellence in engineering, infrastructure solutions heritage"
        image={machine2}
      />
      {/* Background Watermark */}
      <div className="absolute top-40 left-10 pointer-events-none select-none opacity-[0.02] overflow-hidden whitespace-nowrap">
        <h2 className="text-[280px] font-black tracking-tighter text-slate-900 leading-none">
          HERITAGE
        </h2>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">

        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-24">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-orange-500 font-bold tracking-widest text-xs uppercase mb-6 block"
          >
            Since 2000
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black text-slate-900 mb-8 leading-[1.1]"
          >
            McRAYGOR <br />
            <span className="text-4xl md:text-6xl">
              Engineering the Future of <br />
              <span className="text-emerald-600">Infrastructure</span>
            </span>
          </motion.h1>
          <div className="w-20 h-2 bg-orange-500 mx-auto rounded-full mb-10"></div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-2xl text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed"
          >
            World's trusted manufacturer & solution provider for sewer cleaning equipment.
          </motion.p>
        </div>

        {/* History & Expert Card Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h3 className="text-3xl font-black text-slate-900 tracking-tight">Our History & Expertise</h3>
              <div className="w-12 h-1 bg-emerald-500 rounded-full" />
            </div>
            <div className="space-y-6 text-xl text-slate-600 leading-relaxed font-medium">
              <p>
                Established in the year 2000, <span className="text-slate-900 font-bold">McRAYGOR Mechanicals Infrastructure</span> has spent over two decades building a global legacy of engineering excellence.
              </p>
              <p>
                As India's leading manufacturer and exporter, we specialized in high-performance hydraulic products and sewer cleaning systems, serving top-tier municipalities across the globe.
              </p>
              <p className="text-lg text-slate-500">
                Our capability ranges from catch basins and storm sewers to lift stations and large-scale treatment plants, delivering robust solutions like Super Suckers and Jetting Machines.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative group rounded-[3rem] shadow-2xl overflow-hidden aspect-[4/3]"
          >
            <img
              src={machine2}
              alt="McRAYGOR History and Expertise"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/20 to-transparent" />

            {/* 25+ Small Elegant Card - Compact */}
            <div className="absolute top-0 right-0 z-10 bg-white/20 backdrop-blur-lg border-b border-l border-white/20 p-4 rounded-bl-2xl shadow-2xl text-right min-w-[100px]">
              <h3 className="text-4xl font-black text-white leading-none">25<span className="text-orange-500">+</span></h3>
              <p className="text-[9px] text-white font-black tracking-wider uppercase mt-1">Years of Excellence</p>
            </div>
          </motion.div>
        </div>

        {/* Mission & Values */}
        <div className="mb-32">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl font-black text-slate-900 mb-6">Our Mission & Values</h2>
            <div className="w-16 h-1.5 bg-orange-500 mx-auto rounded-full" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative bg-gradient-to-br ${item.color} rounded-[2.5rem] p-10 border transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl group overflow-hidden`}
              >
                <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:opacity-10 transition-opacity">
                  <item.icon className="w-32 h-32" />
                </div>
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform">
                  <item.icon className={`w-7 h-7 ${item.text}`} />
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-4">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed font-semibold text-sm">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Advantage Section */}
        <div className="mb-32 bg-slate-950 rounded-[4rem] p-12 md:p-24 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-emerald-500/10 via-transparent to-transparent" />

          <div className="relative z-10 grid lg:grid-cols-[1fr_2fr] gap-20 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">The McRAYGOR <br /> <span className="text-orange-500">Advantage</span></h2>
              <p className="text-slate-400 text-lg">
                Building partnerships through an unwavering commitment to engineering service.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {advantages.map((adv, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm p-8 rounded-[2.5rem] border border-white/10 hover:border-orange-500/50 transition-colors group text-center md:text-left"
                >
                  <div className="w-12 h-12 bg-orange-500/10 rounded-2xl flex items-center justify-center mb-6 text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all mx-auto md:mx-0">
                    <adv.icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-black text-white mb-3 tracking-tight">{adv.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed font-medium">{adv.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Global Presence */}
        <div className="text-center pb-12">
          <div className="mb-20 space-y-4">
            <h2 className="text-4xl font-black text-slate-900">Our Global Footprint</h2>
            <p className="text-slate-500 font-bold tracking-widest uppercase text-xs">
              Exporting Quality to over 15+ Nations
            </p>
            <div className="w-12 h-1.5 bg-emerald-500 mx-auto rounded-full" />
          </div>
          <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
            {countries.map((country, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="px-8 py-4 bg-white border border-slate-100 rounded-2xl text-slate-800 font-black text-sm shadow-sm hover:border-emerald-500 hover:text-emerald-600 hover:shadow-xl hover:-translate-y-1 transition-all cursor-default"
              >
                {country}
              </motion.span>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
};

export default About;