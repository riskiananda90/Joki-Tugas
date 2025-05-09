
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import PricingSection from "@/components/home/PricingSection";
import ProcessSection from "@/components/home/ProcessSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import ContactSection from "@/components/home/ContactSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import FloatingCTA from "@/components/ui/FloatingCTA";
import ScrollProgress from "@/components/ui/ScrollProgress";
import StatsSection from "@/components/home/StatsSection";
import TechStackSection from "@/components/home/TechStackSection";
import { ThemeProvider } from "@/context/ThemeContext";

const Index = () => {
  return (
    <ThemeProvider defaultTheme="light">
      <div className="min-h-screen flex flex-col">
        <ScrollProgress />
        <Navbar />
        <main className="flex-grow">
          <HeroSection />
          <StatsSection />
          <FeaturesSection />
          <ServicesSection />
          <TechStackSection />
          <PricingSection />
          <ProcessSection />
          <TestimonialsSection />
          <ContactSection />
        </main>
        <Footer />
        <FloatingCTA />
      </div>
    </ThemeProvider>
  );
};

export default Index;
