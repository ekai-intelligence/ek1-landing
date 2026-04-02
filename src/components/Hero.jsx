import { useScrollReveal } from '../hooks/useScrollReveal';
import { ArrowRight, ChevronDown } from 'lucide-react';

export default function Hero({ onOpenModal }) {
  const ref = useScrollReveal(0.1);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background effects */}
      <div className="absolute inset-0 hero-grid" />
      <div className="absolute inset-0 hero-glow" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#667eea]/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#764ba2]/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />

      <div ref={ref} className="fade-in relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1a1a2e]/80 border border-[#2a2a4a] text-xs sm:text-sm text-slate-300 mb-8 backdrop-blur-sm">
          <span className="inline-block w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span>SOVEREIGN AI</span>
          <span className="text-[#2a2a4a]">|</span>
          <span>IN-VPC DEPLOYMENT</span>
          <span className="text-[#2a2a4a]">|</span>
          <span>Backed by Antler</span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white leading-[1.1] tracking-tight mb-6">
          Never Start from the{' '}
          <span className="gradient-text">Blank Page</span>{' '}
          Again
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Action Inbox synthesizes your emails, chats, meetings & SaaS tools into proactive
          first drafts&mdash;deployed inside your private cloud.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenModal}
            className="btn-primary rounded-xl px-8 py-4 text-base font-semibold text-white flex items-center gap-2 cursor-pointer"
          >
            <span className="flex items-center gap-2">
              Join Waitlist
              <ArrowRight size={18} />
            </span>
          </button>
          <a
            href="#problem"
            className="group flex items-center gap-2 px-8 py-4 rounded-xl border border-[#2a2a4a] text-slate-300 hover:text-white hover:border-[#667eea]/50 transition-all text-base font-medium"
          >
            See How It Works
            <ChevronDown size={18} className="group-hover:translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Trust line */}
        <p className="mt-12 text-sm text-slate-500">
          Zero data leakage &bull; SOC 2 in progress &bull; 90-day pilot available
        </p>
      </div>
    </section>
  );
}
