import Rule from '@/components/ui/Rule'

const col1 = ['Platform', 'Action Inbox', 'AI Search', 'Notetaker', 'App Builder']
const col2 = ['About', 'Customers', 'Security', 'Trust centre', 'FAQs']

export default function Footer() {
  return (
    <footer className="bg-cream">
      <Rule />
      <div className="max-w-content mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 pb-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1 flex flex-col gap-4">
            <a href="/" className="flex items-center no-underline w-fit">
              <img src="/ekai-logo.svg" alt="ekai" height={20} style={{ height: '20px', width: 'auto' }} />
            </a>
            <p className="text-muted text-sm leading-relaxed max-w-[200px]">
              Private AI Stack for regulated teams.
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
              {col2.map((l) => (
                <li key={l}>
                  <a href="#" className="text-[13px] text-muted hover:text-ink transition-colors no-underline">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-muted-light mb-4">Contact</p>
            <ul className="flex flex-col gap-2.5">
              {['Book a demo', 'hello@yourekai.com', 'LinkedIn'].map((l) => (
                <li key={l}>
                  <a href="#" className="text-[13px] text-muted hover:text-ink transition-colors no-underline">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Rule />

        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-[12px] text-muted-light">
            © 2026 Ekai Intelligence. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {['Terms of use', 'Privacy policy'].map((l) => (
              <a key={l} href="#" className="text-[12px] text-muted-light hover:text-ink transition-colors no-underline">
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
