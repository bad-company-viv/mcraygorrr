import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { galleryContent, galleryImages } from '../data/gallery';
import SEO from '@/components/SEO/SEO';



// Better Marquee Implementation
const InfiniteLoop = ({ children, duration, reverse = false }) => {
  return (
    <div className="flex overflow-hidden w-full relative group">
      <motion.div
        className="flex gap-6 min-w-full"
        initial={{ x: reverse ? "-100%" : 0 }}
        animate={{ x: reverse ? 0 : "-100%" }}
        transition={{
          duration: duration,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {children}
        {children}
        {children} {/* Repeat 3 times to ensure screen coverage */}
      </motion.div>
    </div>
  );
};

const Gallery = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const mid = Math.ceil(galleryImages.length / 2);
  const row1 = galleryImages.slice(0, mid);
  const row2 = galleryImages.slice(mid);

  return (
    <div className="pt-32 pb-24 bg-white min-h-screen relative overflow-hidden">
      <SEO
        title="Gallery"
        description="Visual journey of McRAYGOR Mechanicals machines in action. High-quality images of our sewer cleaning equipment, jetting suction machines, and global project sites."
        keywords="sewer cleaning gallery, industrial machinery photos, McRAYGOR product gallery, municipal equipment images"
      />

      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-orange-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-24 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-600 text-sm font-bold uppercase tracking-widest mb-6"
          >
            Visual Excellence
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black text-slate-900 mb-8 tracking-tighter"
          >
            Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-emerald-800">In Action</span>
          </motion.h1>
          <div className="w-20 h-1.5 bg-orange-500 mx-auto rounded-full mb-10"></div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-600 leading-relaxed font-medium"
          >
            {galleryContent.description}
          </motion.p>
        </div>

        {/* Moving Animation Section (Marquee) */}
        <div className="mb-32 space-y-12">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-1.5 h-8 bg-orange-500 rounded-full" />
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">Active Deployments</h2>
          </div>

          <div className="space-y-10 py-10 bg-slate-50/50 rounded-[3rem] border border-slate-100/50 backdrop-blur-sm">
            {/* Row 1 - Moves Left */}
            <InfiniteLoop duration={40}>
              {row1.map((img) => (
                <div key={img.id} className="w-[350px] h-[250px] flex-shrink-0 rounded-[2rem] overflow-hidden shadow-xl border-8 border-white group relative">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              ))}
            </InfiniteLoop>

            {/* Row 2 - Moves Right */}
            <InfiniteLoop duration={45} reverse={true}>
              {row2.map((img) => (
                <div key={img.id} className="w-[350px] h-[250px] flex-shrink-0 rounded-[2rem] overflow-hidden shadow-xl border-8 border-white group relative">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              ))}
            </InfiniteLoop>
          </div>
        </div>

        {/* Standard Grid Section */}
        <div>
          <div className="flex items-center gap-4 mb-12">
            <div className="w-1.5 h-8 bg-emerald-600 rounded-full" />
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">Technical Showcase</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {galleryImages.map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="relative aspect-square overflow-hidden rounded-[2rem] border border-slate-100 bg-white group shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-emerald-900/0 group-hover:bg-emerald-900/40 transition-all duration-500 flex items-center justify-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    className="w-14 h-14 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-xl"
                  >
                    <div className="w-6 h-6 border-2 border-emerald-600 rounded-sm" />
                  </motion.div>
                </div>

                {/* Subtle Image Tag */}
                <div className="absolute bottom-6 left-6 z-10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  <span className="px-3 py-1.5 bg-white/90 backdrop-blur-sm text-[10px] font-black text-slate-900 uppercase tracking-widest rounded-lg">
                    Equipment View
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>


      </div>
    </div>
  )
};

export default Gallery;