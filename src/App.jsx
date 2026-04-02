import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import HowItWorks from './components/HowItWorks';
import Comparison from './components/Comparison';
import SocialProof from './components/SocialProof';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import WaitlistModal from './components/WaitlistModal';
import ExitIntent from './components/ExitIntent';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Navbar onOpenModal={() => setModalOpen(true)} />
      <Hero onOpenModal={() => setModalOpen(true)} />
      <Problem />
      <Solution />
      <HowItWorks />
      <Comparison />
      <SocialProof />
      <FAQ />
      <FinalCTA />
      <Footer />
      <WaitlistModal open={modalOpen} onClose={() => setModalOpen(false)} />
      <ExitIntent />
    </div>
  );
}
