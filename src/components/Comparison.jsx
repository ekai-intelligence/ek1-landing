import { useScrollReveal } from '../hooks/useScrollReveal';
import { Check, X, Minus } from 'lucide-react';

const features = [
  { name: 'In-VPC Deployment', ai: true, copilot: false, chatgpt: false, notion: false },
  { name: 'Cross-tool Synthesis', ai: true, copilot: 'limited', chatgpt: false, notion: false },
  { name: 'Zero Data Leakage', ai: true, copilot: false, chatgpt: false, notion: false },
  { name: 'Proactive Drafts', ai: true, copilot: false, chatgpt: false, notion: false },
  { name: 'Secure Write-Back', ai: true, copilot: false, chatgpt: false, notion: false },
  { name: 'Vendor Neutral', ai: true, copilot: false, chatgpt: true, notion: false },
];

function Cell({ value }) {
  if (value === true) return <Check size={18} className="text-green-400 mx-auto" />;
  if (value === false) return <X size={18} className="text-slate-600 mx-auto" />;
  return <Minus size={18} className="text-yellow-400 mx-auto" />;
}

export default function Comparison() {
  const ref = useScrollReveal(0.1);

  return (
    <section id="comparison" className="py-24 sm:py-32 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-[#667eea] uppercase tracking-wider mb-4">Compare</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
            Why Teams Choose <span className="gradient-text">Action Inbox</span>
          </h2>
        </div>

        <div ref={ref} className="fade-in overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[#2a2a4a]">
                <th className="text-left py-4 pr-4 text-slate-400 font-medium">Feature</th>
                <th className="py-4 px-4 text-center">
                  <span className="gradient-text font-semibold">Action Inbox</span>
                </th>
                <th className="py-4 px-4 text-center text-slate-400 font-medium">Copilot</th>
                <th className="py-4 px-4 text-center text-slate-400 font-medium">ChatGPT</th>
                <th className="py-4 px-4 text-center text-slate-400 font-medium">Notion AI</th>
              </tr>
            </thead>
            <tbody>
              {features.map((f) => (
                <tr key={f.name} className="border-b border-[#2a2a4a]/50">
                  <td className="py-4 pr-4 text-slate-300 font-medium">{f.name}</td>
                  <td className="py-4 px-4 text-center bg-[#667eea]/[0.03]"><Cell value={f.ai} /></td>
                  <td className="py-4 px-4 text-center"><Cell value={f.copilot} /></td>
                  <td className="py-4 px-4 text-center"><Cell value={f.chatgpt} /></td>
                  <td className="py-4 px-4 text-center"><Cell value={f.notion} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
