import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const heroImages = [
  { src: "/images/McRaygor-Creative-1.webp", alt: "McRAYGOR Heavy Duty Sewer Cleaning Machine" },
  { src: "/images/McRaygor-Creative-2.webp", alt: "Advanced Jetting Suction Unit Operations" },
  { src: "/images/McRaygor-Creative-3.webp", alt: "Industrial Vacuum Loading System" },
  { src: "/images/McRaygor-Creative-4.webp", alt: "Municipal Waste Management Vehicle" },
  { src: "/images/McRaygor-Creative-5.webp", alt: "High Pressure Water Jetting Equipment" },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  // Auto rotate images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 4500); // 4.5s (perfect for hero)

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen bg-slate-950 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.img
            key={current}
            src={heroImages[current].src}
            alt={heroImages[current].alt}
            className="w-full h-full object-cover opacity-40"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          />
        </AnimatePresence>

        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/60" />
      </div>

      {/* Floating Glow */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-14 items-center w-full">

          {/* LEFT */}
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-sm font-medium">
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              Trusted Since 2000
            </span>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              <span className="block text-2xl md:text-3xl text-orange-500 font-black mb-2">McRAYGOR™</span>
              Largest{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                Sewer Cleaning
              </span>{" "}
              Machines Manufacturer
            </h1>

            <p className="text-lg md:text-xl text-slate-400 max-w-xl leading-relaxed">
              Engineering excellence in sewer cleaning machines, disaster
              management equipment, and comprehensive industrial solutions since 2000.
            </p>

            {/* CTA */}
            <div className="flex flex-wrap gap-4">
              <Link to="/products">
                <Button
                  size="lg"
                  className="bg-orange-500 hover:bg-orange-600 text-zinc-900 px-8 py-6 text-lg rounded-full"
                >
                  Explore Products
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>


            </div>

            {/* Stats */}
            <div className="flex items-center gap-8 pt-8 border-t border-slate-800">
              <Stat value="3000+" label="Projects Completed" />
              <Divider />
              <Stat value="25+" label="Years Experience" />
              <Divider />
              <Stat value="400+" label="Team Members" />
            </div>
          </div>

          {/* RIGHT – AUTO CHANGING IMAGES */}
          <div className="relative hidden lg:block">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                className="relative rounded-3xl overflow-hidden border border-slate-800 shadow-2xl"
                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.9, ease: "easeInOut" }}
              >
                <img
                  src={heroImages[current].src}
                  alt={heroImages[current].alt}
                  className="w-full h-[500px] object-contain bg-slate-900/50"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

/* Helpers */
function Stat({ value, label }) {
  return (
    <div>
      <p className="text-3xl font-bold text-white">{value}</p>
      <p className="text-slate-500 text-sm">{label}</p>
    </div>
  );
}

function Divider() {
  return <div className="w-px h-12 bg-slate-800" />;
}