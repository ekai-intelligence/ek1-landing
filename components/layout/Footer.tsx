import Rule from '@/components/ui/Rule'

const col1 = ['Platform', 'Action Inbox', 'AI Search', 'Notetaker', 'App Builder']
const col2: { label: string; href: string }[] = [
  { label: 'About', href: '#' },
  { label: 'Customers', href: '#' },
  { label: 'Security', href: '/trust-centre' },
  { label: 'Trust centre', href: '/trust-centre' },
  { label: 'FAQs', href: '#' },
]

export default function Footer() {
  return (
    <footer className="bg-cream">
      <Rule />
      <div className="max-w-content mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 pb-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1 flex flex-col gap-4">
            <a href="/" className="flex items-center gap-2 no-underline w-fit">
              <img src="/ekai-icon.svg" alt="ekai" style={{ height: '20px', width: 'auto' }} />
              <span className="font-extrabold text-[17px] tracking-[-0.04em]" style={{ color: '#54A4A0', lineHeight: 1 }}>ekai</span>
            </a>
            <p className="text-muted text-sm leading-relaxed max-w-[200px]">
              Private AI Stack for Financial Services.
            </p>
            <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-muted-light">
              Technology partner: NVIDIA
            </p>
          </div>

          {/* Product */}
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-muted-light mb-4">Product</p>
            <ul className="flex flex-col gap-2.5">
              {col1.map((l) => (
                <li key={l}>
                  <a href="#" className="text-[13px] text-muted hover:text-ink transition-colors no-underline">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-muted-light mb-4">Company</p>
            <ul className="flex flex-col gap-2.5">
              {col2.map(({ label, href }) => (
                <li key={label}>
                  <a href={href} className="text-[13px] text-muted hover:text-ink transition-colors no-underline">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-muted-light mb-4">Contact</p>
            <ul className="flex flex-col gap-2.5">
              <li>
                <a href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0Bp7akyMIraUFtytlgVTAGtZ8heZm7J451cIuYaurqSk2UsPjjKXJA_LaGrXu8zS-gk7Cp7Eir" target="_blank" rel="noopener noreferrer" className="text-[13px] text-muted hover:text-ink transition-colors no-underline">Book a demo</a>
              </li>
              <li>
                <a href="mailto:hello@yourekai.com" className="text-[13px] text-muted hover:text-ink transition-colors no-underline">hello@yourekai.com</a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/ekai-0-1" target="_blank" rel="noopener noreferrer" className="text-[13px] text-muted hover:text-ink transition-colors no-underline">LinkedIn</a>
              </li>
            </ul>
          </div>
        </div>

        <Rule />

        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-[12px] text-muted-light">
            © 2026 Ekai Intelligence. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="/terms-of-use" className="text-[12px] text-muted-light hover:text-ink transition-colors no-underline">Terms of use</a>
            <a href="/privacy-policy" className="text-[12px] text-muted-light hover:text-ink transition-colors no-underline">Privacy policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
