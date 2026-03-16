import { useEffect } from "react";
import { BeamsBackground } from "@/components/ui/beams-background";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemaSection from "@/components/ProblemaSection";
import SolucaoSection from "@/components/SolucaoSection";
import ComoFuncionaSection from "@/components/ComoFuncionaSection";
import PortfolioSection from "@/components/PortfolioSection";
import ProvaSocialSection from "@/components/ProvaSocialSection";
import PlanosSection from "@/components/PlanosSection";
import CtaSection from "@/components/CtaSection";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    if (window.location.hash) {
      history.replaceState(null, "", window.location.pathname);
    }
  }, []);
  return (
    <BeamsBackground intensity="medium">
      <Navbar />
      <HeroSection />
      <ProblemaSection />
      <SolucaoSection />
      <ComoFuncionaSection />
      <PortfolioSection />
      <ProvaSocialSection />
      <PlanosSection />
      <CtaSection />
      <FaqSection />
      <Footer />
      <WhatsAppButton />
    </BeamsBackground>
  );
};

export default Index;
