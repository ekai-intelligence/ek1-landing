'use client'

import { motion } from 'framer-motion'
import SectionLabel from '@/components/ui/SectionLabel'
import { fadeUp, staggerContainer, viewportConfig } from '@/lib/animations'

const insightCards = [
  {
    label: 'The Requirement',
    copy: 'Zero data leakage to public models or third-party vaults. Every prompt, every output, every piece of context stays inside your infrastructure.',
    accent: 'orange',
  },
  {
    label: 'The Reality',
    copy: 'In the age of AI, privacy is a prerequisite for productivity. You cannot have one without the other.',
    accent: 'teal',
  },
  {
    label: 'The Baseline',
    copy: 'Infrastructure must be as secure as the data it processes. Security cannot be a layer on top. It must be the foundation.',
    accent: 'orange',
  },
]

export default function Insight() {
  return (
    <section id="insight" className="bg-near-black py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={viewportConfig}
          className="flex flex-col gap-12"
        >
          {/* Label + headline */}
          <motion.div variants={fadeUp} className="flex flex-col gap-4">
            <SectionLabel>Our Insight</SectionLabel>
            <h2
              className="font-bold leading-[1.15] tracking-[-1.5px] text-white max-w-xl"
              style={{ fontSize: 'clamp(32px, 4vw, 48px)' }}
            >
              100% data sovereignty{' '}
              <span className="text-orange">is not an option anymore.</span>
            </h2>
          </motion.div>

          {/* Insight cards */}
          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {insightCards.map((card) => (
              <motion.div key={card.label} variants={fadeUp}>
                <div
                  className={`h-full bg-white/5 border border-white/10 rounded-card p-8 flex flex-col gap-4 border-l-2 ${
                    card.accent === 'orange' ? 'border-l-orange' : 'border-l-teal'
                  }`}
                >
                  <span
                    className={`text-xs font-medium uppercase tracking-[0.1em] ${
                      card.accent === 'orange' ? 'text-orange' : 'text-teal'
                    }`}
                  >
                    {card.label}
                  </span>
                  <p className="text-white/70 text-sm leading-relaxed">{card.copy}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Closing line */}
          <motion.div variants={fadeUp} className="text-center py-4">
            <p
              className="text-white font-semibold leading-relaxed max-w-2xl mx-auto"
              style={{ fontSize: 'clamp(18px, 2.5vw, 24px)' }}
            >
              AI is a threat multiplier.
              <br />
              <span className="text-orange">Private infrastructure is the only defence.</span>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
