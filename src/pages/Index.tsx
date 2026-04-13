import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import IntegrationsBar from "@/components/IntegrationsBar";
import ThesisSection from "@/components/ThesisSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import SecuritySection from "@/components/SecuritySection";
import OpportunitySection from "@/components/OpportunitySection";
import CTASection from "@/components/CTASection";
import WaitlistSection from "@/components/WaitlistSection";
import Footer from "@/components/Footer";
import FloatingNav from "@/components/FloatingNav";
import { WaitlistProvider } from "@/context/WaitlistContext";
import WaitlistModal from "@/components/WaitlistModal";

const Index = () => {
  return (
    <WaitlistProvider>
      <div className="min-h-screen">
        <Navbar />
        <FloatingNav />
        <HeroSection />
        <IntegrationsBar />
        <ThesisSection />
        <ProblemSection />
        <SolutionSection />
        <SecuritySection />
        <OpportunitySection />
        <CTASection />
        <WaitlistSection />
        <Footer />
      </div>
      <WaitlistModal />
    </WaitlistProvider>
  );
};

export default Index;
