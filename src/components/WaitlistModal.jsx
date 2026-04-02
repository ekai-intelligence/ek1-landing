import { useState, useEffect, useCallback } from 'react';
import { X, ArrowRight, ArrowLeft, Check } from 'lucide-react';

const tools = ['Slack', 'Teams', 'Jira', 'Confluence', 'Salesforce', 'Email', 'Other'];
const teamSizes = ['10-50', '50-200', '200-500', '500+'];
const roles = ['Engineering', 'Sales Ops', 'Product', 'Operations', 'Executive', 'Other'];

export default function WaitlistModal({ open, onClose }) {
  const [step, setStep] = useState(1);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({
    email: '',
    name: '',
    company: '',
    teamSize: '',
    tools: [],
    role: '',
    hoursWasted: 3,
    challenge: '',
    pilotInterest: '',
  });

  const update = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const toggleTool = (tool) => {
    setForm((prev) => ({
      ...prev,
      tools: prev.tools.includes(tool)
        ? prev.tools.filter((t) => t !== tool)
        : [...prev.tools, tool],
    }));
  };

  // Close on Escape
  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Escape') onClose();
  }, [onClose]);

  useEffect(() => {
    if (open) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [open, handleKeyDown]);

  if (!open) return null;

  const validateStep = () => {
    const e = {};
    if (step === 1) {
      if (!form.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Valid work email required';
      if (!form.name.trim()) e.name = 'Name required';
      if (!form.company.trim()) e.company = 'Company required';
    } else if (step === 2) {
      if (!form.teamSize) e.teamSize = 'Select team size';
      if (form.tools.length === 0) e.tools = 'Select at least one tool';
      if (!form.role) e.role = 'Select your role';
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const next = () => {
    if (validateStep()) setStep((s) => s + 1);
  };

  const back = () => setStep((s) => s - 1);

  const submit = async () => {
    if (!form.pilotInterest) {
      setErrors({ pilotInterest: 'Please select one' });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "7d6c2fea-47ee-4fc1-98e1-bdcb03c39538",
          subject: "New Waitlist Submission (Modal)",
          from_name: form.name,
          ...form,
        }),
      });
      const result = await response.json();
      if (result.success) {
        setStep(4);
      } else {
        setErrors((prev) => ({ ...prev, submit: "There was an error submitting the form. Please try again." }));
      }
    } catch (error) {
      setErrors((prev) => ({ ...prev, submit: "A network error occurred. Please try again." }));
    } finally {
      setIsSubmitting(false);
    }
  };

  const reset = () => {
    setStep(1);
    setForm({
      email: '', name: '', company: '', teamSize: '', tools: [], role: '',
      hoursWasted: 3, challenge: '', pilotInterest: '',
    });
    setErrors({});
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Join waitlist"
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <div className="relative w-full max-w-lg rounded-2xl bg-[#0f0f1a] border border-[#2a2a4a] shadow-2xl overflow-hidden">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-500 hover:text-white transition-colors cursor-pointer z-10"
          aria-label="Close"
        >
          <X size={20} />
        </button>

        {/* Progress bar */}
        {step < 4 && (
          <div className="h-1 bg-[#1a1a2e]">
            <div
              className="h-full bg-gradient-to-r from-[#667eea] to-[#764ba2] transition-all duration-500"
              style={{ width: `${(step / 3) * 100}%` }}
            />
          </div>
        )}

        <div className="p-6 sm:p-8">
          {/* Step 1 */}
          {step === 1 && (
            <div>
              <p className="text-xs text-[#667eea] font-semibold uppercase tracking-wider mb-1">Step 1 of 3</p>
              <h3 className="text-xl font-bold text-white mb-6">Let&apos;s start with the basics</h3>
              <div className="space-y-4">
                <div>
                  <label htmlFor="modal-email" className="block text-sm text-slate-400 mb-1.5">Work email</label>
                  <input id="modal-email" type="email" className="input-field" placeholder="you@company.com"
                    value={form.email} onChange={(e) => update('email', e.target.value)} />
                  {form.email && !errors.email && (
                    <p className="text-xs text-slate-500 mt-1">We&apos;ll never spam you. Just product updates.</p>
                  )}
                  {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email}</p>}
                </div>
                <div>
                  <label htmlFor="modal-name" className="block text-sm text-slate-400 mb-1.5">Full name</label>
                  <input id="modal-name" type="text" className="input-field" placeholder="Jane Doe"
                    value={form.name} onChange={(e) => update('name', e.target.value)} />
                  {errors.name && <p className="text-xs text-red-400 mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="modal-company" className="block text-sm text-slate-400 mb-1.5">Company name</label>
                  <input id="modal-company" type="text" className="input-field" placeholder="Acme Corp"
                    value={form.company} onChange={(e) => update('company', e.target.value)} />
                  {errors.company && <p className="text-xs text-red-400 mt-1">{errors.company}</p>}
                </div>
              </div>
              <button onClick={next}
                className="btn-primary w-full rounded-xl px-6 py-3.5 text-sm font-semibold text-white mt-6 cursor-pointer flex items-center justify-center gap-2">
                <span className="flex items-center gap-2">Continue <ArrowRight size={16} /></span>
              </button>
            </div>
          )}

          {/* Step 2 */}
          {step === 2 && (
            <div>
              <p className="text-xs text-[#667eea] font-semibold uppercase tracking-wider mb-1">Step 2 of 3</p>
              <h3 className="text-xl font-bold text-white mb-6">Tell us about your team</h3>
              <div className="space-y-4">
                <div>
                  <label htmlFor="modal-size" className="block text-sm text-slate-400 mb-1.5">How many people on your distributed team?</label>
                  <select id="modal-size" className="input-field" value={form.teamSize}
                    onChange={(e) => update('teamSize', e.target.value)}>
                    <option value="">Select...</option>
                    {teamSizes.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                  {errors.teamSize && <p className="text-xs text-red-400 mt-1">{errors.teamSize}</p>}
                </div>
                <div>
                  <label className="block text-sm text-slate-400 mb-2">Which tools do you use?</label>
                  <div className="flex flex-wrap gap-2">
                    {tools.map((tool) => (
                      <button key={tool} type="button"
                        onClick={() => toggleTool(tool)}
                        className={`px-3 py-1.5 rounded-lg text-sm border transition-all cursor-pointer ${
                          form.tools.includes(tool)
                            ? 'bg-[#667eea]/20 border-[#667eea]/50 text-white'
                            : 'bg-[#1a1a2e] border-[#2a2a4a] text-slate-400 hover:border-[#667eea]/30'
                        }`}>
                        {tool}
                      </button>
                    ))}
                  </div>
                  {errors.tools && <p className="text-xs text-red-400 mt-1">{errors.tools}</p>}
                </div>
                <div>
                  <label htmlFor="modal-role" className="block text-sm text-slate-400 mb-1.5">What&apos;s your role?</label>
                  <select id="modal-role" className="input-field" value={form.role}
                    onChange={(e) => update('role', e.target.value)}>
                    <option value="">Select...</option>
                    {roles.map((r) => <option key={r} value={r}>{r}</option>)}
                  </select>
                  {errors.role && <p className="text-xs text-red-400 mt-1">{errors.role}</p>}
                </div>
              </div>
              <div className="flex gap-3 mt-6">
                <button onClick={back}
                  className="flex items-center gap-1 px-4 py-3.5 rounded-xl border border-[#2a2a4a] text-slate-400 hover:text-white transition-colors cursor-pointer text-sm">
                  <ArrowLeft size={16} /> Back
                </button>
                <button onClick={next}
                  className="btn-primary flex-1 rounded-xl px-6 py-3.5 text-sm font-semibold text-white cursor-pointer flex items-center justify-center gap-2">
                  <span className="flex items-center gap-2">Continue <ArrowRight size={16} /></span>
                </button>
              </div>
            </div>
          )}

          {/* Step 3 */}
          {step === 3 && (
            <div>
              <p className="text-xs text-[#667eea] font-semibold uppercase tracking-wider mb-1">Step 3 of 3</p>
              <h3 className="text-xl font-bold text-white mb-6">Help us understand your pain</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-slate-400 mb-2">
                    How much time does your team waste daily gathering context?
                  </label>
                  <div className="flex items-center gap-4">
                    <input type="range" min="0" max="8" step="0.5" value={form.hoursWasted}
                      onChange={(e) => update('hoursWasted', parseFloat(e.target.value))}
                      className="flex-1 accent-[#667eea]" />
                    <span className="text-lg font-bold text-white min-w-[3rem] text-right">
                      {form.hoursWasted}h
                    </span>
                  </div>
                  <div className="flex justify-between text-xs text-slate-600 mt-1">
                    <span>0 hours</span><span>8 hours</span>
                  </div>
                </div>
                <div>
                  <label htmlFor="modal-challenge" className="block text-sm text-slate-400 mb-1.5">
                    What&apos;s your biggest challenge? (optional)
                  </label>
                  <textarea id="modal-challenge" className="input-field resize-none" rows={3}
                    placeholder="Tell us about the context-gathering pain your team faces..."
                    value={form.challenge} onChange={(e) => update('challenge', e.target.value)} />
                </div>
                <div>
                  <label className="block text-sm text-slate-400 mb-2">
                    Would you be interested in piloting in the next 60 days?
                  </label>
                  <div className="flex gap-2">
                    {['Yes', 'Maybe', 'Not yet'].map((opt) => (
                      <button key={opt} type="button"
                        onClick={() => update('pilotInterest', opt)}
                        className={`flex-1 px-3 py-2 rounded-lg text-sm border transition-all cursor-pointer ${
                          form.pilotInterest === opt
                            ? 'bg-[#667eea]/20 border-[#667eea]/50 text-white'
                            : 'bg-[#1a1a2e] border-[#2a2a4a] text-slate-400 hover:border-[#667eea]/30'
                        }`}>
                        {opt}
                      </button>
                    ))}
                  </div>
                  {errors.pilotInterest && <p className="text-xs text-red-400 mt-1">{errors.pilotInterest}</p>}
                </div>
              </div>
              
              {errors.submit && <p className="text-sm text-red-400 text-center mt-4">{errors.submit}</p>}
              
              <div className="flex gap-3 mt-6">
                <button onClick={back} disabled={isSubmitting}
                  className="flex items-center gap-1 px-4 py-3.5 rounded-xl border border-[#2a2a4a] text-slate-400 hover:text-white transition-colors cursor-pointer text-sm disabled:opacity-50">
                  <ArrowLeft size={16} /> Back
                </button>
                <button onClick={submit} disabled={isSubmitting}
                  className="btn-primary flex-1 rounded-xl px-6 py-3.5 text-sm font-semibold text-white cursor-pointer flex items-center justify-center gap-2 disabled:opacity-50">
                  <span className="flex items-center gap-2">
                    {isSubmitting ? 'Joining...' : 'Join Waitlist'} 
                    {!isSubmitting && <ArrowRight size={16} />}
                  </span>
                </button>
              </div>
            </div>
          )}

          {/* Success */}
          {step === 4 && (
            <div className="text-center py-8">
              <div className="w-16 h-16 rounded-full bg-green-400/10 flex items-center justify-center mx-auto mb-6">
                <Check className="text-green-400" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">You&apos;re on the list!</h3>
              <p className="text-slate-400 mb-6">
                We&apos;ll reach out within 48 hours to learn more about your workflow.
                Check your email for confirmation.
              </p>
              <button onClick={reset}
                className="px-6 py-3 rounded-xl border border-[#2a2a4a] text-slate-300 hover:text-white transition-colors cursor-pointer text-sm">
                Close
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
