'use client'

import { motion } from 'framer-motion'
import SectionLabel from '@/components/ui/SectionLabel'
import { fadeUp, staggerContainer, viewportConfig } from '@/lib/animations'

const industryCards = [
  {
    industry: 'Wealth Management',
    badge: 'Active Paid Pilots',
    customers: null,
    why: '100% data sovereignty, same tool for advisors and internal teams, significant cost savings over alternatives.',
    highlight: true,
  },
  {
    industry: 'Banks and Fintech',
    badge: null,
    customers: 'Ripple, Movius, Defang',
    why: 'Compliance requirements, enterprise security, and cost savings over standard SaaS alternatives.',
    highlight: false,
  },
  {
    industry: 'Healthcare and KYC',
    badge: null,
    customers: 'Chorus, Incode, Trusona',
    why: 'Patient data privacy, PHI compliance, complete operational control.',
    highlight: false,
  },
]

const logoNames = ['AngusOne Staffing', 'A Priori', 'Defang', 'ZiTECH', 'Chorus']

export default function Customers() {
  return (
    <section id="customers" className="bg-off-white py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={viewportConfig}
          className="flex flex-col gap-12"
        >
          {/* Label + headline */}
          <motion.div variants={fadeUp} className="flex flex-col gap-4 max-w-xl">
            <SectionLabel>Traction</SectionLabel>
            <h2
              className="font-bold leading-[1.15] tracking-[-1.5px] text-near-black"
              style={{ fontSize: 'clamp(28px, 4vw, 48px)' }}
            >
              The first choice for high-stakes industries.
            </h2>
          </motion.div>

          {/* Industry cards */}
          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {industryCards.map((card) => (
              <motion.div key={card.industry} variants={fadeUp}>
                <div
                  className={`h-full rounded-card shadow-card p-8 flex flex-col gap-4 ${
                    card.highlight
                      ? 'bg-teal text-white'
                      : 'bg-white border border-light-grey'
                  }`}
                >
                  {card.badge && (
                    <span
                      className={`inline-flex self-start text-xs font-medium uppercase tracking-widest px-3 py-1 rounded-pill ${
                        card.highlight
                          ? 'bg-white/20 text-white'
                          : 'bg-orange/10 text-orange border border-orange/20'
                      }`}
                    >
                      {card.badge}
                    </span>
                  )}
                  <h3
                    className={`text-xl font-bold ${
                      card.highlight ? 'text-white' : 'text-near-black'
                    }`}
                  >
                    {card.industry}
                  </h3>
                  {card.customers && (
                    <p
                      className={`text-sm font-medium ${
                        card.highlight ? 'text-white/80' : 'text-orange'
                      }`}
                    >
                      {card.customers}
                    </p>
                  )}
                  <div
                    className={`pt-4 border-t ${
                      card.highlight ? 'border-white/20' : 'border-light-grey'
                    }`}
                  >
                    <p
                      className={`text-xs uppercase tracking-widest font-medium mb-2 ${
                        card.highlight ? 'text-white/50' : 'text-mid-grey'
                      }`}
                    >
                      Why we win
                    </p>
                    <p
                      className={`text-sm leading-relaxed ${
                        card.highlight ? 'text-white/80' : 'text-mid-grey'
                      }`}
                    >
                      {card.why}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Logo row */}
          <motion.div variants={fadeUp}>
            <p className="text-mid-grey text-xs uppercase tracking-widest text-center mb-6">
              Deployed and trusted by
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8">
              {logoNames.map((name) => (
                <span
                  key={name}
                  className="text-mid-grey text-sm font-semibold tracking-wide opacity-60 hover:opacity-100 transition-opacity"
                >
                  {name}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
