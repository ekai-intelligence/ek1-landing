import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ThesisSection from "@/components/ThesisSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import InteractiveDemo from "@/components/InteractiveDemo";
import SecuritySection from "@/components/SecuritySection";
import OpportunitySection from "@/components/OpportunitySection";
import CTASection from "@/components/CTASection";
import WaitlistSection from "@/components/WaitlistSection";
import Footer from "@/components/Footer";
import FloatingNav from "@/components/FloatingNav";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <FloatingNav />
      <HeroSection />
      <ThesisSection />
      <ProblemSection />
      <InteractiveDemo />
      <SolutionSection />
      <SecuritySection />
      <OpportunitySection />
      <CTASection />
      <WaitlistSection />
      <Footer />
    </div>
  );
};

export default Index;
