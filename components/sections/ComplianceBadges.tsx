const badges = [
  { label: 'SOC2', sub: 'TYPE II' },
  { label: 'ISO', sub: '27001' },
  { label: 'GDPR', sub: 'EU COMPLIANT' },
  { label: 'HIPAA', sub: 'SECURE' },
  { label: 'FINRA', sub: 'REGULATED' },
]

export default function ComplianceBadges() {
  return (
    <section className="bg-cream border-t border-border py-10">
      <div className="max-w-content mx-auto px-6 md:px-12 flex flex-col items-center gap-6">
        <p className="text-[10px] tracking-[0.18em] uppercase font-semibold text-muted">
          Compliant with global financial standards
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {badges.map(({ label, sub }) => (
            <div
              key={label}
              className="flex items-center gap-2.5 border border-border rounded px-4 py-2.5 text-ink"
            >
              <span className="text-[13px] font-bold tracking-wide">{label}</span>
              <span className="w-px h-4 bg-border" />
              <span className="text-[11px] tracking-[0.12em] uppercase text-muted font-medium">{sub}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
