import { useStaggerReveal } from '../hooks/useScrollReveal';
import { Unplug, FileEdit, ShieldCheck } from 'lucide-react';

const features = [
  {
    icon: Unplug,
    title: 'Neutral Synthesis',
    desc: 'Connects Teams, Outlook, Jira, Salesforce into a unified context layer. No vendor lock-in.',
  },
  {
    icon: FileEdit,
    title: 'Proactive Drafts',
    desc: 'Status reports, client replies, ticket updates delivered pre-written and ready to review.',
  },
  {
    icon: ShieldCheck,
    title: 'Secure Write-Back',
    desc: 'Updates systems directly using MCP, all inside your VPC. Zero data leaves your perimeter.',
  },
];

export default function Solution() {
  const ref = useStaggerReveal('.fade-in', 150);

  return (
    <section id="solution" className="py-24 sm:py-32 px-4 sm:px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#667eea]/[0.02] to-transparent" />
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-[#667eea] uppercase tracking-wider mb-4">The Solution</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
            From Executor to <span className="gradient-text">Decision-Maker</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-xl mx-auto">
            Stop gathering context. Start making decisions.
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="fade-in card-hover gradient-border rounded-2xl bg-[#1a1a2e]/60 p-8 backdrop-blur-sm"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#667eea]/20 to-[#764ba2]/20 flex items-center justify-center mb-6">
                <f.icon className="text-[#667eea]" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{f.title}</h3>
              <p className="text-slate-400 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
