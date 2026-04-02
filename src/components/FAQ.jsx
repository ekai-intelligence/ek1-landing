import { useState } from 'react';
import { useStaggerReveal } from '../hooks/useScrollReveal';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: 'How does in-VPC deployment work?',
    a: 'Action Inbox deploys entirely within your private cloud (AWS, Azure, or GCP). Your data never leaves your perimeter. We provide container images and Terraform modules for a deployment that takes under a day.',
  },
  {
    q: 'What tools do you integrate with?',
    a: 'We connect to Slack, Microsoft Teams, Outlook, Gmail, Jira, Confluence, Salesforce, Linear, Notion, and more. Our MCP-based architecture makes adding new integrations straightforward.',
  },
  {
    q: 'How long does deployment take?',
    a: 'Most teams are up and running in less than a day. Our infrastructure-as-code approach means deployment is repeatable and predictable. We provide full support during setup.',
  },
  {
    q: "What's the pricing?",
    a: "We offer per-seat pricing based on team size. We're currently offering a 90-day pilot program for qualified teams. Join the waitlist to learn more about pricing for your organization.",
  },
  {
    q: 'Is this secure for regulated industries?',
    a: 'Absolutely. In-VPC deployment means zero data exfiltration. We\'re SOC 2 Type II compliant (in progress), GDPR compliant, and working toward ISO 27001. Your data never touches our infrastructure.',
  },
];

function FAQItem({ faq }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-[#2a2a4a]/50">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left cursor-pointer group"
        aria-expanded={open}
      >
        <span className="text-base font-medium text-white group-hover:text-[#667eea] transition-colors pr-4">
          {faq.q}
        </span>
        <ChevronDown
          size={20}
          className={`text-slate-400 shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? 'max-h-48 pb-5' : 'max-h-0'
        }`}
      >
        <p className="text-sm text-slate-400 leading-relaxed">{faq.a}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const ref = useStaggerReveal('.fade-in', 150);

  return (
    <section id="faq" className="py-24 sm:py-32 px-4 sm:px-6">
      <div className="max-w-2xl mx-auto" ref={ref}>
        <div className="fade-in text-center mb-12">
          <p className="text-sm font-semibold text-[#667eea] uppercase tracking-wider mb-4">FAQ</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="fade-in">
          {faqs.map((faq) => (
            <FAQItem key={faq.q} faq={faq} />
          ))}
        </div>
      </div>
    </section>
  );
}
