import { useStaggerReveal } from '../hooks/useScrollReveal';
import { Quote, Shield, Globe, Lock, FileCheck } from 'lucide-react';

const trustBadges = [
  { icon: Shield, label: 'SOC 2 Type II', status: 'Coming Soon' },
  { icon: Globe, label: 'GDPR Compliant', status: 'Active' },
  { icon: Lock, label: 'ISO 27001', status: 'In Progress' },
  { icon: FileCheck, label: 'In-VPC Only', status: 'Active' },
];

export default function SocialProof() {
  const ref = useStaggerReveal('.fade-in', 150);

  return (
    <section className="py-24 sm:py-32 px-4 sm:px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#764ba2]/[0.02] to-transparent" />
      <div className="max-w-6xl mx-auto relative z-10" ref={ref}>
        <div className="fade-in text-center mb-16">
          <p className="text-sm font-semibold text-[#667eea] uppercase tracking-wider mb-4">Social Proof</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
            Built for Distributed Teams in <span className="gradient-text">Regulated Industries</span>
          </h2>
        </div>

        {/* Logos placeholder */}
        <div className="fade-in flex items-center justify-center gap-8 sm:gap-12 mb-16 opacity-40">
          {['Enterprise A', 'Enterprise B', 'Enterprise C', 'Enterprise D'].map((name) => (
            <div key={name} className="text-sm font-medium text-slate-500 tracking-wider uppercase">
              {name}
            </div>
          ))}
        </div>

        {/* Testimonial */}
        <div className="fade-in max-w-3xl mx-auto mb-16">
          <div className="rounded-2xl bg-[#1a1a2e]/60 border border-[#2a2a4a] p-8 sm:p-12 relative">
            <Quote className="absolute top-6 left-6 text-[#667eea]/20" size={48} />
            <blockquote className="relative z-10">
              <p className="text-lg sm:text-xl text-slate-200 leading-relaxed mb-6 italic">
                &ldquo;We went from 4 hours of context-gathering to 20 minutes of review. This gave us back
                175 hours per week.&rdquo;
              </p>
              <footer className="text-sm text-slate-400">
                &mdash; Engineering Director, Series C SaaS Company
              </footer>
            </blockquote>
          </div>
        </div>

        {/* Trust badges */}
        <div className="fade-in grid grid-cols-2 sm:grid-cols-4 gap-4">
          {trustBadges.map((b) => (
            <div key={b.label} className="rounded-xl bg-[#1a1a2e]/40 border border-[#2a2a4a] p-4 text-center">
              <b.icon className="mx-auto mb-2 text-[#667eea]" size={24} />
              <p className="text-sm font-medium text-white">{b.label}</p>
              <p className="text-xs text-slate-500 mt-1">{b.status}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
