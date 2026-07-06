import Navbar from "@/components/layout/Navbar";
import CinematicBackground from "@/components/layout/CinematicBackground";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import TransformationSection from "@/components/sections/TransformationSection";
import ServicesSection from "@/components/sections/ServicesSection";
import PortfolioSection from "@/components/sections/WorkSection";
import CaseStudiesSection from "@/components/sections/CaseStudiesSection";
import ProcessSection from "@/components/sections/WorkflowSection";
import AboutSection from "@/components/sections/AboutSection";
import ToolsSection from "@/components/sections/ToolsSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      {/* Aurora animated background (fixed) */}
      <CinematicBackground />

      {/* Floating navigation */}
      <Navbar />

      {/* Main content — single page scrolling experience */}
      <main id="main-content" role="main" className="relative z-10">
        {/* 01 — Hero */}
        <HeroSection />

        {/* 02 — Results & Stats */}
        <TransformationSection />

        {/* 03 — Services */}
        <ServicesSection />

        {/* 04 — Portfolio */}
        <PortfolioSection />

        {/* 05 — Case Studies */}
        <CaseStudiesSection />

        {/* 06 — Process */}
        <ProcessSection />

        {/* 07 — About */}
        <AboutSection />

        {/* 08 — Tools */}
        <ToolsSection />



        {/* 10 — Contact */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
