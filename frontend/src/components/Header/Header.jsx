import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Mail, ChevronDown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, NavLink, useNavigate, useLocation } from "react-router-dom";
import brochure from "@/assets/brochure.pdf";

const navItems = [
  { name: "Home", to: "/" },
  { name: "About Us", to: "/about" },
  { name: "Products", to: "/products" },
  { name: "Projects", to: "/projects" },
  { name: "Gallery", to: "/gallery" },
  { name: "Blogs", to: "/blogs" },
  { name: "Awards", to: "/awards" },
  { name: "Contact", action: "contact" },
];

export default function Header({ logoUrl }) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  const handleHomeClick = (e) => {
    if (location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleGetQuote = () => {
    if (location.pathname !== '/') {
      navigate('/#quotation-form');
    } else {
      const element = document.getElementById('quotation-form');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  useEffect(() => {
    const onScroll = () => {
      const maxScroll = 140;
      const progress = Math.min(window.scrollY / maxScroll, 1);
      setScrollProgress(progress);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* BLACK (0,0,0) → DARK BLUE (11,31,58) */
  const bgColor = `rgba(
    ${Math.round(0 + (11 - 0) * scrollProgress)},
    ${Math.round(0 + (31 - 0) * scrollProgress)},
    ${Math.round(0 + (58 - 0) * scrollProgress)},
    0.96
  )`;

  const textColor = "#ffffff";
  const borderColor = "rgba(255,255,255,0.12)";

  return (
    <>
      {/* ================= TOP BAR ================= */}
      <div
        className="hidden lg:flex fixed top-0 left-0 right-0 z-50 h-[40px] items-center border-b transition-all duration-300"
        style={{ backgroundColor: bgColor, color: textColor, borderColor }}
      >
        <div className="w-full mx-auto px-8 lg:px-20 flex justify-between w-full text-sm">
          <div className="flex gap-6">
            <a href="tel:+919812001368" className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-emerald-400" />
              +91 98120 01368
            </a>
            <a href="mailto:info@mcraygor.com" className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-emerald-400" />
              info@mcraygor.com
            </a>
          </div>
          <div className="flex gap-4 items-center">
            <div>Mon–Sat: 9AM – 8:30PM</div>
          </div>
        </div>
      </div>

      {/* ================= MAIN HEADER ================= */}
      <motion.header
        className="fixed top-0 lg:top-[40px] left-0 right-0 z-40 backdrop-blur border-b transition-all duration-300"
        style={{
          backgroundColor: bgColor,
          borderColor,
          boxShadow:
            scrollProgress > 0.35
              ? "0 12px 28px rgba(0,0,0,0.35)"
              : "none",
        }}
      >
        <div className="w-full mx-auto px-8 lg:px-20">
          <div className="flex items-center justify-between h-[80px]">

            {/* LOGO */}
            <Link to="/" onClick={handleHomeClick} className="flex items-center gap-3">
              <img
                src={logoUrl}
                alt="McRAYGOR"
                className="h-12 w-auto object-contain rounded-md"
              />
            </Link>

            {/* DESKTOP NAV */}
            <nav className="hidden lg:flex items-center gap-6">
              {navItems.map((item, index) => (
                <div
                  key={index}
                  className="relative"
                  onMouseEnter={() => item.dropdown && setActiveDropdown(index)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {item.action === 'contact' ? (
                    <button
                      onClick={handleGetQuote}
                      className="px-2 py-2 rounded-lg font-medium transition-colors whitespace-nowrap group relative"
                      style={{ color: textColor }}
                    >
                      {item.name}
                      <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
                    </button>
                  ) : (
                    <NavLink
                      to={item.to}
                      onClick={(e) => {
                        if (item.to === '/') handleHomeClick(e);
                      }}
                      className="px-2 py-2 rounded-lg font-medium transition-colors whitespace-nowrap group relative"
                      style={{ color: textColor }}
                    >
                      {item.name}
                      {item.dropdown && (
                        <ChevronDown className="inline ml-1 w-4 h-4" />
                      )}
                      <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
                    </NavLink>
                  )}

                  {/* DROPDOWN */}
                  <AnimatePresence>
                    {item.dropdown && activeDropdown === index && (
                      <motion.div
                        className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border overflow-hidden"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                      >
                        {item.dropdown.map((subItem, subIndex) => (
                          <NavLink
                            key={subIndex}
                            to={subItem.to}
                            className="block px-4 py-3 text-slate-700 hover:bg-emerald-50 hover:text-emerald-600 transition-colors"
                          >
                            {subItem.name}
                          </NavLink>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>

            {/* CTA */}
            <div className="hidden lg:flex gap-4">
              <a href={brochure} download="McRAYGOR_Brochure.pdf">
                <Button
                  variant="outline"
                  className="rounded-full text-orange-500 border-orange-500 hover:bg-orange-500 hover:text-white px-6 transition-all duration-300"
                >
                  Download Brochure
                </Button>
              </a>
              <Button
                onClick={handleGetQuote}
                className="rounded-full bg-orange-500 hover:bg-orange-600 text-zinc-900 px-6"
              >
                Get Quote
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>

            {/* MOBILE MENU TOGGLE */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden"
              style={{ color: textColor }}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden bg-slate-900 border-t border-white/10 overflow-hidden"
            >
              <div className="flex flex-col p-6 gap-4">
                {navItems.map((item, index) => (
                  <div key={index}>
                    {item.action === "contact" ? (
                      <button
                        onClick={() => {
                          handleGetQuote();
                          setIsMobileMenuOpen(false);
                        }}
                        className="text-white text-lg font-medium hover:text-orange-500 transition-colors"
                      >
                        {item.name}
                      </button>
                    ) : (
                      <NavLink
                        to={item.to}
                        onClick={(e) => {
                          setIsMobileMenuOpen(false);
                          if (item.to === '/') handleHomeClick(e);
                        }}
                        className="text-white text-lg font-medium hover:text-orange-500 transition-colors"
                      >
                        {item.name}
                      </NavLink>
                    )}
                  </div>
                ))}
                <div className="pt-6 border-t border-white/10 flex flex-col gap-4">
                  <a href={brochure} download="McRAYGOR_Brochure.pdf" onClick={() => setIsMobileMenuOpen(false)}>
                    <Button variant="outline" className="w-full rounded-full text-orange-500 border-orange-500">
                      Download Brochure
                    </Button>
                  </a>
                  <Button
                    onClick={() => {
                      handleGetQuote();
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full rounded-full bg-orange-500 text-zinc-900"
                  >
                    Get Quote
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}