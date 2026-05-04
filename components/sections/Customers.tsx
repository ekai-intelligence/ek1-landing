const logos = [
  { name: 'Defang', src: '/logos/defang.svg', height: 26 },
  { name: 'Apriori Consultants', src: '/logos/apriori.svg', height: 30 },
  { name: 'Secondstep Coaching', src: '/logos/secondstep.avif', height: 34 },
  { name: 'Movius', src: '/logos/movius.svg', height: 26 },
  { name: 'Kanny', src: '/logos/kanny.png', height: 34 },
  { name: 'Angusone Staffing', src: null, height: 34 },
]

const items = [...logos, ...logos]

export default function Customers() {
  return (
    <section className="bg-cream border-b border-border py-12">
      <p className="text-center text-[11px] font-semibold uppercase tracking-[0.12em] text-muted-light mb-8">
        Trusted by teams at
      </p>
      <div className="overflow-hidden">
        <div className="flex gap-16 animate-marquee" style={{ width: 'max-content' }}>
          {items.map((logo, i) => (
            <div
              key={i}
              className="flex items-center justify-center flex-shrink-0"
              style={{ height: 40 }}
            >
              {logo.src ? (
                <img
                  src={logo.src}
                  alt={logo.name}
                  style={{ height: logo.height, width: 'auto', opacity: 0.7 }}
                />
              ) : (
                <span
                  className="text-[15px] font-semibold tracking-[-0.02em] text-muted"
                  style={{ opacity: 0.7 }}
                >
                  {logo.name}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
