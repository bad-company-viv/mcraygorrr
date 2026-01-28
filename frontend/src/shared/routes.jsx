import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

// Components
import PageTransition from "@/components/PageTransition";

// Pages
import Home from "@/pages/Home";
import About from "@/pages/About";
import Products from "@/pages/Products";
import Projects from "@/pages/Projects";
import ProjectDetail from "@/pages/ProjectDetail";
import Gallery from "@/pages/Gallery";

import Blogs from "@/pages/Blogs";
import BlogDetail from "@/pages/BlogDetail";
import Awards from "@/pages/Awards";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import TermsAndConditions from "@/pages/TermsAndConditions";
import NotFound from "@/pages/NotFound";

export default function AppRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/about" element={<PageTransition><About /></PageTransition>} />
        <Route path="/products" element={<PageTransition><Products /></PageTransition>} />
        <Route path="/projects" element={<PageTransition><Projects /></PageTransition>} />
        <Route path="/projects/:id" element={<PageTransition><ProjectDetail /></PageTransition>} />
        <Route path="/gallery" element={<PageTransition><Gallery /></PageTransition>} />
        <Route path="/blogs" element={<PageTransition><Blogs /></PageTransition>} />
        <Route path="/blogs/:id" element={<PageTransition><BlogDetail /></PageTransition>} />
        <Route path="/awards" element={<PageTransition><Awards /></PageTransition>} />
        <Route path="/privacy-policy" element={<PageTransition><PrivacyPolicy /></PageTransition>} />
        <Route path="/terms-and-conditions" element={<PageTransition><TermsAndConditions /></PageTransition>} />
        <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
}
