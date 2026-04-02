import { useState, useEffect } from 'react';
import { X, ArrowRight } from 'lucide-react';

export default function ExitIntent() {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (dismissed) return;

    const handler = (e) => {
      if (e.clientY < 5 && !dismissed) {
        setShow(true);
      }
    };

    document.addEventListener('mouseleave', handler);
    return () => document.removeEventListener('mouseleave', handler);
  }, [dismissed]);

  const close = () => {
    setShow(false);
    setDismissed(true);
  };

  const submit = (e) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return;
    console.log('Exit intent submission:', { email });
    setSubmitted(true);
    setTimeout(close, 2000);
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={close} />
      <div className="relative w-full max-w-md rounded-2xl bg-[#0f0f1a] border border-[#2a2a4a] shadow-2xl p-8 text-center">
        <button onClick={close} className="absolute top-4 right-4 text-slate-500 hover:text-white cursor-pointer" aria-label="Close">
          <X size={20} />
        </button>

        {submitted ? (
          <div>
            <p className="text-xl font-bold text-white mb-2">You&apos;re in!</p>
            <p className="text-sm text-slate-400">We&apos;ll keep you posted on early access.</p>
          </div>
        ) : (
          <>
            <h3 className="text-xl font-bold text-white mb-2">Wait! Get early access</h3>
            <p className="text-sm text-slate-400 mb-6">
              Be first to know when Action Inbox launches for your industry.
            </p>
            <form onSubmit={submit} className="flex gap-2">
              <input
                type="email"
                className="input-field flex-1"
                placeholder="you@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button type="submit" className="btn-primary rounded-lg px-4 py-3 text-sm font-medium text-white cursor-pointer shrink-0">
                <span className="flex items-center gap-1">Notify Me <ArrowRight size={14} /></span>
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
