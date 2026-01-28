import React from "react";
import HeroSection from "@/components/HeroSection/HeroSection";
import ServicesSection from "@/components/ServicesSection/Services";
import AboutSection from "@/components/AboutSection/AboutSection";
import ClientsSection from "@/components/ClientsSection/ClientsSection";
import ProjectsSection from "@/components/ProjectsSection/ProjectsSection";
import TestimonialsSection from "@/components/TestimonialsSection/TestimonialsSection";
import BlogSection from "@/components/BlogSection/BlogSection";
import QuotationForm from "@/components/QuotationForm/QuotationForm";
import SEO from "@/components/SEO/SEO";

const Home = () => {
  return (
    <>
      <SEO
        title="Home"
        description="McRAYGOR Mechanicals is the world's trusted manufacturer and solution provider for sewer cleaning equipment, jetting suction machines, and disaster management equipment since 2000."
        keywords="sewer cleaning machine manufacturer, jetting suction machine, super sucker, disaster management equipment, McRAYGOR mechanicals"
      />
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
};

export default Home;