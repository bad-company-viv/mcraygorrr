"use client";

import React from "react";
import { motion } from "framer-motion";

const clients = [
  { name: "Tata Motors", logo: "/images/clients/tata-motors.jpeg" },
  { name: "Reliance Industries", logo: "/images/clients/reliance.jpeg" },
  { name: "Mahindra", logo: "/images/clients/mahindra.jpeg" },
  { name: "Larsen & Toubro", logo: "/images/clients/larsen.jpeg" },
  { name: "Government of Dubai", logo: "/images/clients/dubai.jpeg" },
  { name: "Delhi Metro", logo: "/images/clients/dmrc.jpeg" },
  { name: "DLF", logo: "/images/clients/dlf.jpeg" },
  { name: "International Red Cross", logo: "/images/clients/comite.jpeg" },
  { name: "Bajaj", logo: "/images/clients/bajaj.jpeg" },
  { name: "Godrej", logo: "/images/clients/godrej.jpeg" },
  { name: "Tata", logo: "/images/clients/tata.jpeg" },
];

export default function ClientsSection() {
  return (
    <section className="py-20 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">
            Trusted by Leading Organizations
          </p>
        </motion.div>

        {/* Infinite Scroll */}
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll items-center">
            {[...clients, ...clients].map((client, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 mx-10"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: (index % clients.length) * 0.05 }}
              >
                <div className="w-44 h-24 bg-white rounded-xl border border-slate-100 flex items-center justify-center hover:border-emerald-300 hover:shadow-md transition-all duration-300">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="max-h-14 max-w-[140px] object-contain transition-all duration-300"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 20s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}