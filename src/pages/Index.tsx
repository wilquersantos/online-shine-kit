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
import { WarpBackground } from "@/components/ui/warp-background";

const Index = () => {
  return (
    <WarpBackground
      className="min-h-screen bg-background rounded-none"
      perspective={150}
      beamsPerSide={4}
      beamSize={3}
      beamDelayMax={5}
      beamDuration={4}
    >
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
    </WarpBackground>
  );
};

export default Index;
