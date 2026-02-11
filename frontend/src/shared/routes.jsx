import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Suspense, lazy } from 'react';

// Components
import PageTransition from "@/components/PageTransition";
import ErrorBoundary from "@/components/ErrorBoundary";

// Lazy Loaded Pages
const Home = lazy(() => import("@/pages/Home"));
const About = lazy(() => import("@/pages/About"));
const Products = lazy(() => import("@/pages/Products"));
const Projects = lazy(() => import("@/pages/Projects"));
const ProjectDetail = lazy(() => import("@/pages/ProjectDetail"));
const Gallery = lazy(() => import("@/pages/Gallery"));
const Blogs = lazy(() => import("@/pages/Blogs"));
const BlogDetail = lazy(() => import("@/pages/BlogDetail"));
const Awards = lazy(() => import("@/pages/Awards"));
const PrivacyPage = lazy(() => import("@/pages/PrivacyPage"));
const TermsAndConditions = lazy(() => import("@/pages/TermsAndConditions"));
const NotFound = lazy(() => import("@/pages/NotFound"));

// Helper for loading state
// Helper for loading state
const PageLoader = () => (
  <div className="min-h-screen flex flex-col items-center justify-center bg-white">
    <div className="w-12 h-12 border-4 border-slate-200 border-t-emerald-600 rounded-full animate-spin" />
    <p className="mt-6 text-slate-500 font-medium animate-pulse">Loading...</p>
  </div>
);

export default function AppRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <ErrorBoundary>
        <Suspense fallback={<PageLoader />}>
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
            <Route path="/privacy-policy" element={<PageTransition><PrivacyPage /></PageTransition>} />
            <Route path="/terms-and-conditions" element={<PageTransition><TermsAndConditions /></PageTransition>} />
            <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </AnimatePresence>
  );
}
