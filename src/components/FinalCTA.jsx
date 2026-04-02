import { useState, useEffect, useRef } from 'react';
import { useStaggerReveal } from '../hooks/useScrollReveal';
import { ArrowRight, Check } from 'lucide-react';

const teamSizes = ['10-50', '50-200', '200-500', '500+'];
const roles = ['Engineering', 'Sales Ops', 'Product', 'Operations', 'Executive', 'Other'];
const painPoints = [
  'Critical requests get missed',
  'Too much time gathering context',
  'Timezone delays',
  'Shadow AI risk',
  'All of the above',
];

export default function FinalCTA() {
  const ref = useStaggerReveal('.fade-in', 150);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [form, setForm] = useState({
    email: '',
    company: '',
    teamSize: '',
    role: '',
    painPoint: '',
  });

  // Animated counter
  const [count, setCount] = useState(0);
  const countRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const end = 247;
          const duration = 1500;
          const step = duration / end;
          const timer = setInterval(() => {
            start += 1;
            setCount(start);
            if (start >= end) clearInterval(timer);
          }, step);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.5 }
    );
    if (countRef.current) observer.observe(countRef.current);
    return () => observer.disconnect();
  }, []);

  const validate = () => {
    const e = {};
    if (!form.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Valid work email required';
    if (!form.company) e.company = 'Company name required';
    if (!form.teamSize) e.teamSize = 'Select team size';
    if (!form.role) e.role = 'Select your role';
    if (!form.painPoint) e.painPoint = 'Select biggest pain point';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    console.log('Waitlist submission (CTA form):', form);
    setSubmitted(true);
  };

  const update = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  if (submitted) {
    return (
      <section className="py-24 sm:py-32 px-4 sm:px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#667eea]/[0.03] to-[#764ba2]/[0.03]" />
        <div className="max-w-lg mx-auto text-center relative z-10">
          <div className="w-16 h-16 rounded-full bg-green-400/10 flex items-center justify-center mx-auto mb-6">
            <Check className="text-green-400" size={32} />
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">You&apos;re on the list!</h2>
          <p className="text-slate-400">
            We&apos;ll reach out within 48 hours to learn more about your workflow.
            Check your email for confirmation.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 sm:py-32 px-4 sm:px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#667eea]/[0.03] to-[#764ba2]/[0.03]" />
      <div className="max-w-2xl mx-auto relative z-10" ref={ref}>
        <div className="fade-in text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
            Stop Wasting <span className="gradient-text">60%</span> of Your Day
          </h2>
          <p className="text-lg text-slate-400" ref={countRef}>
            Join <span className="text-white font-semibold">{count}+</span> teams already on the waitlist
          </p>
        </div>

        <form onSubmit={handleSubmit} className="fade-in space-y-4 rounded-2xl bg-[#1a1a2e]/60 border border-[#2a2a4a] p-6 sm:p-8 backdrop-blur-sm">
          <div>
            <label htmlFor="cta-email" className="block text-sm text-slate-400 mb-1.5">Work email</label>
            <input
              id="cta-email"
              type="email"
              className="input-field"
              placeholder="you@company.com"
              value={form.email}
              onChange={(e) => update('email', e.target.value)}
            />
            {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email}</p>}
          </div>

          <div>
            <label htmlFor="cta-company" className="block text-sm text-slate-400 mb-1.5">Company name</label>
            <input
              id="cta-company"
              type="text"
              className="input-field"
              placeholder="Acme Corp"
              value={form.company}
              onChange={(e) => update('company', e.target.value)}
            />
            {errors.company && <p className="text-xs text-red-400 mt-1">{errors.company}</p>}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="cta-size" className="block text-sm text-slate-400 mb-1.5">Team size</label>
              <select
                id="cta-size"
                className="input-field"
                value={form.teamSize}
                onChange={(e) => update('teamSize', e.target.value)}
              >
                <option value="">Select...</option>
                {teamSizes.map((s) => <option key={s} value={s}>{s}</option>)}
              </select>
              {errors.teamSize && <p className="text-xs text-red-400 mt-1">{errors.teamSize}</p>}
            </div>
            <div>
              <label htmlFor="cta-role" className="block text-sm text-slate-400 mb-1.5">Role</label>
              <select
                id="cta-role"
                className="input-field"
                value={form.role}
                onChange={(e) => update('role', e.target.value)}
              >
                <option value="">Select...</option>
                {roles.map((r) => <option key={r} value={r}>{r}</option>)}
              </select>
              {errors.role && <p className="text-xs text-red-400 mt-1">{errors.role}</p>}
            </div>
          </div>

          <div>
            <label htmlFor="cta-pain" className="block text-sm text-slate-400 mb-1.5">Biggest pain point</label>
            <select
              id="cta-pain"
              className="input-field"
              value={form.painPoint}
              onChange={(e) => update('painPoint', e.target.value)}
            >
              <option value="">Select...</option>
              {painPoints.map((p) => <option key={p} value={p}>{p}</option>)}
            </select>
            {errors.painPoint && <p className="text-xs text-red-400 mt-1">{errors.painPoint}</p>}
          </div>

          <button
            type="submit"
            className="btn-primary w-full rounded-xl px-8 py-4 text-base font-semibold text-white flex items-center justify-center gap-2 cursor-pointer mt-6"
          >
            <span className="flex items-center gap-2">
              Join Waitlist
              <ArrowRight size={18} />
            </span>
          </button>

          <p className="text-center text-xs text-slate-500 mt-4">
            <Check size={14} className="inline -mt-0.5 mr-1 text-green-400" />In-VPC deployment
            <span className="mx-2">&bull;</span>
            <Check size={14} className="inline -mt-0.5 mr-1 text-green-400" />Zero data leakage
            <span className="mx-2">&bull;</span>
            <Check size={14} className="inline -mt-0.5 mr-1 text-green-400" />90-day pilot available
          </p>
        </form>
      </div>
    </section>
  );
}
