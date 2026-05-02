'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Button from '@/components/ui/Button'
import HeroVisual from '@/components/sections/HeroVisual'
import { fadeUp, staggerContainer } from '@/lib/animations'

const complianceBadges = [
  { label: 'SOC2', sub: 'TYPE II' },
  { label: 'ISO', sub: '27001' },
  { label: 'GDPR', sub: 'EU COMPLIANT' },
  { label: 'HIPAA', sub: 'SECURE' },
  { label: 'FINRA', sub: 'REGULATED' },
]

export default function Hero() {
  return (
    <section id="hero" className="bg-cream pt-[60px] relative overflow-hidden min-h-[calc(100vh+80px)] flex flex-col">

      {/* Background texture — desktop only */}
      <div className="absolute inset-0 pointer-events-none select-none hidden lg:block">
        <div
          className="absolute inset-0 opacity-[0.29]"
          style={{
            backgroundImage: 'radial-gradient(circle, #b0aaa8 1px, transparent 1px)',
            backgroundSize: '26px 26px',
          }}
        />
        <div className="absolute -top-40 -right-40 w-[680px] h-[680px] rounded-full bg-orange/15 blur-[120px]" />
        <div className="absolute -bottom-20 -left-20 w-[420px] h-[420px] rounded-full bg-orange/10 blur-[90px]" />
      </div>

      <div className="max-w-content mx-auto px-6 md:px-12 relative z-10 flex-1 flex flex-col justify-start pt-[clamp(24px,6vh,72px)]">
        <motion.div variants={staggerContainer} initial="initial" animate="animate" className="flex flex-col">

          {/* Pill badge — centered above both columns */}
          <motion.div variants={fadeUp} className="flex justify-center mb-6 md:mb-8">
            <div className="inline-flex items-center gap-2.5 border border-border rounded-pill px-4 py-2 bg-cream/80 backdrop-blur-sm whitespace-nowrap">
              {['No Data Leakage', 'Predictable Cost', 'Full Control'].map((item, i) => (
                <div key={item} className="flex items-center gap-2.5">
                  {i === 0
                    ? <span className="w-1.5 h-1.5 rounded-full bg-orange flex-shrink-0" />
                    : <span className="w-px h-3 bg-border flex-shrink-0" />}
                  <span className="text-[10px] font-semibold uppercase tracking-[0.08em] text-muted">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* 2-column grid */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-12 lg:gap-12 items-center pb-8 md:pb-12">

            {/* Left: copy */}
            <div className="flex flex-col gap-5">
              {/* H1 — context setter */}
              <motion.h1
                variants={fadeUp}
                className="font-black text-ink leading-[1.05] tracking-[-0.03em] whitespace-nowrap mt-4 mb-3"
                style={{ fontSize: 'clamp(18px, 2vw, 26px)' }}
              >
                Use AI where it matters,
                <br />
                not just where it&apos;s allowed.
              </motion.h1>

              {/* Orange statement */}
              <motion.p
                variants={fadeUp}
                className="font-black text-orange leading-[1.15] tracking-[-0.025em] whitespace-nowrap mb-3"
                style={{ fontSize: 'clamp(22px, 2.6vw, 34px)' }}
              >
                Private AI for financial services
                <br />deployed in your cloud.
              </motion.p>

              <motion.p variants={fadeUp} className="text-muted leading-relaxed max-w-[440px]" style={{ fontSize: '16px' }}>
                Deploy secure, sovereign AI applications within your infrastructure. Empower your teams to use AI for sensitive workflows without compromising on security or compliance.
              </motion.p>

              <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-3">
                <Button variant="primary" size="lg">
                  Book a demo <ArrowRight size={15} className="ml-1.5" />
                </Button>
                <Button variant="secondary" size="lg">Get started free</Button>
              </motion.div>
            </div>

            {/* Right: product visual */}
            <motion.div variants={fadeUp} className="hidden lg:block">
              <HeroVisual />
            </motion.div>
          </div>

          {/* Compliance badges — tight below grid, partially below fold */}
          <motion.div variants={fadeUp} className="flex flex-col items-center gap-5 pt-6 pb-10">
            <p className="text-[10px] tracking-[0.18em] uppercase font-semibold text-muted">
              Compliant with global financial standards
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {complianceBadges.map(({ label, sub }) => (
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
          </motion.div>

        </motion.div>
      </div>
    </section>
  )
}
