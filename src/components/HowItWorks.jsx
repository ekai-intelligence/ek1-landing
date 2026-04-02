import { useStaggerReveal } from '../hooks/useScrollReveal';
import { Mail, MessageSquare, CheckSquare, Users, ArrowDown, Inbox, Send } from 'lucide-react';

export default function HowItWorks() {
  const ref = useStaggerReveal('.fade-in', 200);

  return (
    <section id="how-it-works" className="py-24 sm:py-32 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <div className="text-center mb-16 fade-in">
          <p className="text-sm font-semibold text-[#667eea] uppercase tracking-wider mb-4">How It Works</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
            Context <span className="gradient-text">&rarr;</span> Synthesis <span className="gradient-text">&rarr;</span> Action
          </h2>
        </div>

        {/* Step 1 */}
        <div className="fade-in mb-8">
          <div className="rounded-2xl bg-[#1a1a2e]/60 border border-[#2a2a4a] p-8 text-center">
            <p className="text-xs font-semibold text-[#667eea] uppercase tracking-wider mb-4">Step 1 &mdash; Your scattered tools</p>
            <div className="flex items-center justify-center gap-4 sm:gap-8 flex-wrap">
              {[
                { icon: MessageSquare, label: 'Slack' },
                { icon: CheckSquare, label: 'Jira' },
                { icon: Mail, label: 'Email' },
                { icon: Users, label: 'Teams' },
              ].map((tool) => (
                <div key={tool.label} className="flex flex-col items-center gap-2">
                  <div className="w-14 h-14 rounded-xl bg-[#252540] border border-[#2a2a4a] flex items-center justify-center">
                    <tool.icon className="text-slate-400" size={24} />
                  </div>
                  <span className="text-xs text-slate-500">{tool.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Arrow */}
        <div className="fade-in flex justify-center mb-8">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#667eea] to-[#764ba2] flex items-center justify-center">
            <ArrowDown size={20} className="text-white" />
          </div>
        </div>

        {/* Step 2 */}
        <div className="fade-in mb-8">
          <div className="rounded-2xl bg-gradient-to-br from-[#667eea]/10 to-[#764ba2]/10 border border-[#667eea]/30 p-8 text-center">
            <p className="text-xs font-semibold text-[#667eea] uppercase tracking-wider mb-3">Step 2 &mdash; Synthesis</p>
            <div className="flex items-center justify-center gap-3">
              <Inbox className="text-[#667eea]" size={32} />
              <span className="text-2xl font-bold text-white">Action Inbox</span>
            </div>
            <p className="text-sm text-slate-400 mt-3">AI synthesizes context across all your tools</p>
          </div>
        </div>

        {/* Arrow */}
        <div className="fade-in flex justify-center mb-8">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#667eea] to-[#764ba2] flex items-center justify-center">
            <ArrowDown size={20} className="text-white" />
          </div>
        </div>

        {/* Step 3 */}
        <div className="fade-in mb-8">
          <div className="rounded-2xl bg-[#1a1a2e]/60 border border-[#2a2a4a] p-8">
            <p className="text-xs font-semibold text-[#667eea] uppercase tracking-wider mb-4 text-center">Step 3 &mdash; Ready to send</p>
            <div className="space-y-3 max-w-md mx-auto">
              {[
                { to: 'Client reply to Acme Corp', status: 'Ready to review' },
                { to: 'Sprint status update', status: 'Draft complete' },
                { to: 'Jira ticket update', status: 'Auto-generated' },
              ].map((item) => (
                <div key={item.to} className="flex items-center gap-3 p-3 rounded-xl bg-[#252540]/80 border border-[#2a2a4a]">
                  <Send size={16} className="text-[#667eea] shrink-0" />
                  <div className="flex-1 text-left">
                    <p className="text-sm text-white font-medium">{item.to}</p>
                    <p className="text-xs text-slate-500">{item.status}</p>
                  </div>
                  <span className="text-xs text-green-400 bg-green-400/10 px-2 py-0.5 rounded-full">Ready</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <p className="fade-in text-center text-lg text-slate-400 mt-8">
          Your team reviews and sends in <span className="text-white font-semibold">minutes</span>, not hours.
        </p>
      </div>
    </section>
  );
}
