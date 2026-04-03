import { useStaggerReveal } from '../hooks/useScrollReveal';
import { Clock, Layers, DollarSign, ClipboardCopy, ShieldAlert, MessageSquareWarning } from 'lucide-react';

const stats = [
  { icon: Clock, value: '60%', label: 'of workday lost to app-toggling' },
  { icon: Layers, value: '50+ ', label: 'siloed apps per enterprise' },
  { icon: DollarSign, value: '$90K+', label: 'wasted per senior employee annually' },
];

const painPoints = [
  {
    icon: ClipboardCopy,
    title: 'The Human Clipboard',
    desc: 'Workers spend hours copy-pasting between Slack, Jira, Salesforce just to answer one question.',
  },
  {
    icon: ShieldAlert,
    title: 'Shadow AI Crisis',
    desc: 'Teams leak company data into ChatGPT because manual synthesis is unbearable.',
  },
  {
    icon: MessageSquareWarning,
    title: 'The Synthesis Gap',
    desc: 'Critical requests buried in 200+ daily messages across 6 different tools.',
  },
];

export default function Problem() {
  const statsRef = useStaggerReveal('.fade-in', 150);
  const painRef = useStaggerReveal('.fade-in', 150);

  return (
    <section id="problem" className="py-24 sm:py-32 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-[#667eea] uppercase tracking-wider mb-4">The Problem</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
            Your Team Wastes <span className="gradient-text">60%</span> of Their Day Gathering Context
          </h2>
        </div>

        {/* Stat cards */}
        <div ref={statsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {stats.map((s) => (
            <div
              key={s.value}
              className="fade-in card-hover rounded-2xl bg-[#1a1a2e]/60 border border-[#2a2a4a] p-8 text-center backdrop-blur-sm"
            >
              <s.icon className="mx-auto mb-4 text-[#667eea]" size={32} />
              <p className="text-4xl sm:text-5xl font-extrabold gradient-text mb-2">{s.value}</p>
              <p className="text-slate-400">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Pain points */}
        <div ref={painRef} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {painPoints.map((p) => (
            <div
              key={p.title}
              className="fade-in card-hover rounded-2xl bg-[#1a1a2e]/40 border border-[#2a2a4a] p-8 backdrop-blur-sm"
            >
              <div className="w-12 h-12 rounded-xl bg-[#667eea]/10 flex items-center justify-center mb-4">
                <p.icon className="text-[#667eea]" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{p.title}</h3>
              <p className="text-slate-400 leading-relaxed text-sm">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
