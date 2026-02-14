"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  ArrowRight,
  ChevronUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

/* ---------------- DATA ---------------- */

const quickLinks = [
  { name: "Home", to: "/" },
  { name: "About Us", to: "/about" },
  { name: "Products", to: "/products" },
  { name: "Projects", to: "/projects" },
  { name: "Gallery", to: "/gallery" },
  { name: "Contact", action: "contact" },
];

const socialLinks = [
  { icon: Facebook, href: "https://www.facebook.com/people/Mcraygor-Mechanicals-Haryana/pfbid0qePKjr71ddpkYnJWw5QRedgSsTuDDaP9zeu3np2NKR9ekTK8QhAXT9niszHcjbLQl/", label: "Facebook" },
  { icon: Twitter, href: "https://x.com/mcraygor", label: "Twitter" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/mcraygor-mechanicals-p-ltd-b82399a3/?originalSubdomain=in", label: "LinkedIn" },
  { icon: Instagram, href: "https://www.instagram.com/mcraygor", label: "Instagram" },
];

/* ---------------- COMPONENT ---------------- */

export default function Footer() {
  const router = useRouter();
  const pathname = usePathname();

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const handleContactClick = (e) => {
    e.preventDefault();
    if (pathname !== '/') {
      router.push('/#quotation-form');
    } else {
      const element = document.getElementById('quotation-form');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // Newsletter state
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterStatus, setNewsletterStatus] = useState(null); // null | success | error

  const handleNewsletterSubmit = () => {
    if (!newsletterEmail || !newsletterEmail.includes("@")) {
      setNewsletterStatus("error");
      return;
    }

    // FRONTEND-ONLY simulation
    setNewsletterStatus("success");
    setNewsletterEmail("");

    setTimeout(() => setNewsletterStatus(null), 4000);
  };

  return (
    <footer className="relative bg-slate-950 text-white overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-8 lg:px-20 pt-20 pb-12">
        <div className="flex flex-col md:flex-row justify-between gap-16 mb-16">

          {/* BRAND */}
          <motion.div className="max-w-xs">
            <img
              src="/images/mcraygor-logo.jpeg"
              alt="McRAYGOR"
              className="h-12 mb-6"
            />
            <p className="text-slate-400 mb-6 leading-relaxed">
              India's leading manufacturer of sewer cleaning equipment since 2000.
            </p>

            <div className="flex gap-3">
              {socialLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center hover:bg-emerald-500/20 hover:text-emerald-400 transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* QUICK LINKS */}
          <motion.div className="min-w-[150px]">
            <h4 className="text-lg font-bold mb-6 text-white uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, i) => (
                <li key={i}>
                  {link.action === 'contact' ? (
                    <button
                      onClick={handleContactClick}
                      className="text-slate-400 hover:text-emerald-400 flex items-center gap-2 group w-full text-left"
                    >
                      <ArrowRight className="w-4 h-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                      {link.name}
                    </button>
                  ) : (
                    <Link
                      href={link.to}
                      className="text-slate-400 hover:text-emerald-400 flex items-center gap-2 group"
                    >
                      <ArrowRight className="w-4 h-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* NEWSLETTER + CONTACT */}
          <motion.div className="max-w-sm w-full">
            <h4 className="text-lg font-bold mb-6 text-white uppercase tracking-wider">Stay Updated</h4>

            <div className="flex gap-2 mb-2">
              <Input
                type="email"
                placeholder="Enter your email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                className="bg-white/5 border-white/10 text-white placeholder:text-slate-500"
              />
              <Button
                onClick={handleNewsletterSubmit}
                className="bg-emerald-600 hover:bg-emerald-700"
              >
                <ArrowRight />
              </Button>
            </div>

            {newsletterStatus === "success" && (
              <p className="text-sm text-emerald-400 mt-2">
                ✅ Subscribed successfully!
              </p>
            )}
            {newsletterStatus === "error" && (
              <p className="text-sm text-red-400 mt-2">
                ❌ Please enter a valid email
              </p>
            )}

            <div className="space-y-3 mt-6">
              <div className="flex flex-col gap-2">
                <a href="tel:+919812001368" className="flex gap-3 text-slate-400 hover:text-white">
                  <Phone className="w-4 h-4 text-emerald-500 mt-1" />
                  +91 98120 01368
                </a>
                <a href="tel:+918587829000" className="flex gap-3 text-slate-400 hover:text-white pl-7">
                  +91 85878 29000
                </a>
              </div>
              <a href="mailto:info@mcraygor.com" className="flex gap-3 text-slate-400 hover:text-white">
                <Mail className="w-4 h-4 text-emerald-500" />
                info@mcraygor.com
              </a>
              <div className="flex gap-3 text-slate-400">
                <MapPin className="w-4 h-4 text-emerald-500 mt-1 flex-shrink-0" />
                <span>
                  14-Dhumaspur Road, Sohna Road,<br />
                  Sector 67, Gurugram (Haryana)<br />
                  INDIA-122002
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="space-y-4 md:space-y-0 text-center md:text-left">
            <p className="text-slate-500 text-sm">
              © {new Date().getFullYear()} McRAYGOR Mechanicals Infrastructure. All rights reserved.
            </p>
            <div className="flex justify-center md:justify-start gap-6 text-sm text-slate-500 md:mt-2">
              <Link href="/privacy-policy" className="hover:text-emerald-400 transition-colors">Privacy Policy</Link>
              <Link href="/terms-and-conditions" className="hover:text-emerald-400 transition-colors">Terms & Conditions</Link>
            </div>
          </div>

          {/* SITE CREDITS */}
          <div className="flex items-center gap-4 bg-white/5 border border-white/10 px-6 py-3 rounded-2xl group hover:border-emerald-500/20 transition-all duration-300">
            <a
              href="https://fabulousmedia.in/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/images/sitecredit/fabulous.png"
                alt="Fabulous Media"
                className="h-6 w-auto object-contain border border-white/10"
              />
            </a>

            <div className="w-[1px] h-6 bg-white/10" />

            <a
              href="https://gocommercially.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/images/sitecredit/gocommercially.webp"
                alt="GoCommercially"
                className="h-5 w-auto object-contain"
              />
            </a>
          </div>
        </div>
      </div>

      {/* SCROLL TO TOP */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-emerald-600 hover:bg-emerald-700 rounded-full flex items-center justify-center shadow-lg z-50"
      >
        <ChevronUp className="text-white w-6 h-6" />
      </motion.button>
    </footer>
  );
}