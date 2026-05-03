'use client'

import { motion } from 'framer-motion'
import Label from '@/components/ui/Label'
import Rule from '@/components/ui/Rule'
import { fadeUp, staggerContainer, viewportConfig } from '@/lib/animations'

const industries = [
  'Financial services', 'Fintech', 'KYC', 'Government', "Insurance", "Crypto"
]

export default function WhoFor() {
  return (
    <section id="who" className="bg-cream">
      <div className="max-w-content mx-auto px-6 md:px-12 py-24">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={viewportConfig}
          className="flex flex-col gap-16"
        >
          {/* Section label */}
          <motion.div variants={fadeUp}>
            <Label>Built for</Label>
          </motion.div>

          {/* Two-column bordered grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {/* Who */}
            <motion.div
              variants={fadeUp}
              className="flex flex-col gap-6 py-8 md:pr-16 md:border-r border-b md:border-b-0 border-border"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-muted-light">
                Who we build for
              </p>
              <p
                className="font-bold text-ink leading-[1.2] tracking-[-0.02em]"
                style={{ fontSize: 'clamp(20px, 2.5vw, 28px)' }}
              >
                Mid-market Firms in Financial services who want to move fast on AI without taking on the liability that comes with it.
              </p>
              <p className="text-muted text-[15px] leading-relaxed">
                Privacy-sensitive industries where getting AI wrong is not an option.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {industries.map((ind) => (
                  <span
                    key={ind}
                    className="text-[11px] font-semibold uppercase tracking-[0.08em] text-muted border border-border px-3 py-1.5 rounded-sm"
                  >
                    {ind}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* What they get */}
            <motion.div
              variants={fadeUp}
              className="flex flex-col gap-6 py-8 md:pl-16"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-muted-light">
                What they get
              </p>
              <p
                className="font-bold text-ink leading-[1.2] tracking-[-0.02em]"
                style={{ fontSize: 'clamp(20px, 2.5vw, 28px)' }}
              >
                A private AI stack that delivers on day one — no months-long implementation, no data leaving the building.
              </p>
              <div className="flex flex-col gap-3 pt-2">
                {[
                  'Deployed inside your own cloud in under 48 hours',
                  'Ready-to-use essential apps for the workflows that matter most',
                  'Full audit trail — every AI interaction logged and searchable',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="w-1 h-1 rounded-full bg-orange flex-shrink-0 mt-2" />
                    <p className="text-muted text-[15px] leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
      <Rule />
    </section>
  )
}
