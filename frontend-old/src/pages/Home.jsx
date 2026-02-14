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
        title="McRAYGOR | India's Leading Sewer Cleaning Machines & Industrial Solutions"
        description="McRAYGOR Mechanicals is the world's trusted manufacturer and solution provider for sewer cleaning equipment, jetting suction machines, and disaster management equipment since 2000."
        image="/images/McRaygor-Creative-1.webp"
        keywords="sewer cleaning machine manufacturer, jetting suction machine, super sucker, disaster management equipment, McRAYGOR mechanicals"
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "McRAYGOR Mechanicals Infrastructure",
            "url": "https://beta.mcraygor.com",
            "logo": "https://beta.mcraygor.com/images/mcraygor-logo.jpeg",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+91-9812001368",
              "contactType": "sales",
              "areaServed": "IN"
            },
            "sameAs": [
              "https://www.facebook.com/people/Mcraygor-Mechanicals-Haryana/pfbid0qePKjr71ddpkYnJWw5QRedgSsTuDDaP9zeu3np2NKR9ekTK8QhAXT9niszHcjbLQl/",
              "https://x.com/mcraygor",
              "https://www.linkedin.com/in/mcraygor-mechanicals-p-ltd-b82399a3/",
              "https://www.instagram.com/mcraygor"
            ]
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What machines does McRAYGOR manufacture?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "McRAYGOR manufactures high-performance sewer cleaning machines, jetting suction units, super suckers, and municipal waste management equipment."
                }
              },
              {
                "@type": "Question",
                "name": "How long has McRAYGOR been in the industry?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "McRAYGOR Mechanicals has been a leading manufacturer and solution provider since the year 2000, with over two decades of engineering excellence."
                }
              }
            ]
          }
        ]}
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