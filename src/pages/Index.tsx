import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import InteractiveDemo from "@/components/InteractiveDemo";
import SecuritySection from "@/components/SecuritySection";
import OpportunitySection from "@/components/OpportunitySection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import FloatingNav from "@/components/FloatingNav";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <FloatingNav />
      <HeroSection />
      <ProblemSection />
      <InteractiveDemo />
      <SolutionSection />
      <SecuritySection />
      <OpportunitySection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
