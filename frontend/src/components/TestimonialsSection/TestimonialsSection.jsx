"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

import testimonial1 from '@/assets/testimonials/testimonial1.jpeg';
import testimonial2 from '@/assets/testimonials/testimonial2.jpeg';
import testimonial3 from '@/assets/testimonials/testmonial3.jpeg';
import testimonial4 from '@/assets/testimonials/testimonial4.jpeg';

const testimonials = [
  {
    id: 1,
    name: 'Qubeel Khadim',
    role: 'Govt. of Dubai, Dubai, UAE',
    content: "I’ve seen great companies serving industry solutions in my career. But not to the point where you feel that comfort and trust that we get with McRAYGOR Mechanicals.",
    rating: 5,
    image: testimonial1,
  },
  {
    id: 2,
    name: 'Commander',
    role: 'Indian Navy',
    content: "Expertly trained team members who take the extra step and go the extra mile, all to fulfill our promise, deliver innovative and dynamic solutions to us.",
    rating: 5,
    image: testimonial2,
  },
  {
    id: 3,
    name: 'Aalermik B.',
    role: 'South Africa',
    content: "Thank you very much for the machines you delivered to us. I really appriciate the set up, services and quality of the machines.",
    rating: 5,
    image: testimonial3,
  },
  {
    id: 4,
    name: 'Bosas Pink',
    role: 'Red Cross Society',
    content: "We are grateful to McRAYGOR Mechanicals for solving our Sewer related issues with their dynamic and robust machines! Great help to us! right from the begining to the end of our project, we have trusted McRAYGOR!",
    rating: 5,
    image: testimonial4,
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="relative py-32 bg-slate-50 overflow-hidden">
      {/* Background Decorative Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none select-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-500 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">

        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-orange-500 font-bold tracking-widest text-xs uppercase mb-4 block">
            What Our Clients Say
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
            Global Trust & <span className="text-orange-600">Satisfaction</span>
          </h2>
          <div className="w-16 h-1.5 bg-emerald-500 mx-auto rounded-full" />
        </div>

        <div className="relative">
          {/* Main Carousel Card */}
          <div className="relative z-10 bg-white rounded-[3rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] border border-white p-8 md:p-16 overflow-hidden">
            <Quote className="absolute top-12 right-12 w-24 h-24 text-slate-50 opacity-10 rotate-12 pointer-events-none" />

            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="grid lg:grid-cols-[1fr_2fr] gap-12 items-center"
              >
                {/* Profile Side */}
                <div className="flex flex-col items-center lg:items-end text-center lg:text-right border-b lg:border-b-0 lg:border-r border-slate-100 pb-10 lg:pb-0 lg:pr-12">
                  <div className="relative mb-8">
                    <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-orange-100 shadow-xl">
                      <img
                        src={testimonials[currentIndex].image.src || testimonials[currentIndex].image}
                        alt={testimonials[currentIndex].name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-white rounded-2xl shadow-lg flex items-center justify-center border border-slate-50">
                      <Quote className="w-6 h-6 text-orange-500 fill-orange-500" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-slate-900 mb-1">{testimonials[currentIndex].name}</h3>
                    <p className="text-emerald-600 font-bold text-sm tracking-wide uppercase">{testimonials[currentIndex].role}</p>
                    <div className="flex gap-1 mt-4 lg:justify-end">
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-orange-400 text-orange-400" />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Testimonial Side */}
                <div className="relative">
                  <p className="text-2xl md:text-3xl font-medium text-slate-700 leading-relaxed italic">
                    "{testimonials[currentIndex].content}"
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="absolute top-1/2 -left-4 -right-4 -translate-y-1/2 flex justify-between pointer-events-none">
            <Button
              variant="outline"
              size="icon"
              onClick={prev}
              className="w-14 h-14 rounded-2xl bg-slate-900 shadow-xl hover:bg-slate-800 transition-all pointer-events-auto border-none group"
            >
              <ChevronLeft className="w-6 h-6 text-white group-hover:text-orange-500 transition-colors" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={next}
              className="w-14 h-14 rounded-2xl bg-slate-900 shadow-xl hover:bg-slate-800 transition-all pointer-events-auto border-none group"
            >
              <ChevronRight className="w-6 h-6 text-white group-hover:text-orange-500 transition-colors" />
            </Button>
          </div>
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-4 mt-16">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2.5 rounded-full transition-all duration-500 ${idx === currentIndex ? 'w-12 bg-orange-600' : 'w-2.5 bg-slate-300'
                }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}