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

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
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
    </div>
  );
};

export default Index;
