import React from "react";
import HeroSection from "@/components/HeroSection/HeroSection";
import ServicesSection from "@/components/ServicesSection/Services";
import AboutSection from "@/components/AboutSection/AboutSection";
import IndustriesSection from "@/components/IndustriesSection/IndustriesSection";
import ClientsSection from "@/components/ClientsSection/ClientsSection";
import ProjectsSection from "@/components/ProjectsSection/ProjectsSection";
import TestimonialsSection from "@/components/TestimonialsSection/TestimonialsSection";
import BlogSection from "@/components/BlogSection/BlogSection";
import MissionSection from "@/components/MissionSection/MissionSection";
import QuotationForm from "@/components/QuotationForm/QuotationForm";

export const metadata = {
  title: "McRAYGOR | India's Leading Sewer Cleaning Machines & Industrial Solutions",
  description: "McRAYGOR Mechanicals is the world's trusted manufacturer and solution provider for sewer cleaning equipment, jetting suction machines, and disaster management equipment since 2000.",
  keywords: "sewer cleaning machine manufacturer, jetting suction machine, super sucker, disaster management equipment, McRAYGOR mechanicals",
  openGraph: {
    title: "McRAYGOR | India's Leading Sewer Cleaning Machines & Industrial Solutions",
    description: "McRAYGOR Mechanicals is the world's trusted manufacturer and solution provider for sewer cleaning equipment, jetting suction machines, and disaster management equipment since 2000.",
    images: ["/images/McRaygor-Creative-1.webp"],
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <IndustriesSection />
      <AboutSection />
      <ClientsSection />
      <ProjectsSection />
      <TestimonialsSection />
      <MissionSection />
      <BlogSection />
      <QuotationForm />
    </>
  );
}
