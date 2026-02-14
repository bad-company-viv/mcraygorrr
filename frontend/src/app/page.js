import React from "react";
import HeroSection from "@/components/HeroSection/HeroSection";
import ServicesSection from "@/components/ServicesSection/Services";
import AboutSection from "@/components/AboutSection/AboutSection";
import ClientsSection from "@/components/ClientsSection/ClientsSection";
import ProjectsSection from "@/components/ProjectsSection/ProjectsSection";
import TestimonialsSection from "@/components/TestimonialsSection/TestimonialsSection";
import BlogSection from "@/components/BlogSection/BlogSection";
import QuotationForm from "@/components/QuotationForm/QuotationForm";

export const metadata = {
  title: "McRAYGOR | India's Leading Sewer Cleaning Machine Manufacturer",
  description: "McRAYGOR is India's premier manufacturer of high-performance sewer cleaning machines, jetting suction units & industrial solutions. 25+ years of excellence.",
  keywords: "sewer cleaning machine manufacturer, jetting suction machine, super sucker, disaster management equipment, McRAYGOR mechanicals",
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "McRAYGOR | India's Leading Sewer Cleaning Machines",
    description: "World-class sewer cleaning and municipal waste management equipment engineered for maximum reliability.",
    url: 'https://beta.mcraygor.com',
    siteName: 'McRAYGOR Mechanicals',
    images: [
      {
        url: '/images/McRaygor-Creative-1.webp',
        width: 1200,
        height: 630,
        alt: 'McRAYGOR Industrial Solutions',
      }
    ],
    locale: 'en_IN',
    type: 'website',
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <ClientsSection />
      <ProjectsSection />
      <TestimonialsSection />
      <BlogSection />
      <QuotationForm />
    </>
  );
}
