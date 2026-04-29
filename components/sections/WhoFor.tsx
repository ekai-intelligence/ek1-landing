'use client'

import { motion } from 'framer-motion'
import Label from '@/components/ui/Label'
import Rule from '@/components/ui/Rule'
import { fadeUp, staggerContainer, viewportConfig } from '@/lib/animations'

const industries = [
  'Financial services', 'Fintech', 'KYC',
  'Healthcare', 'Legal', 'Government',
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
                Who we are building for
              </p>
              <p
                className="font-bold text-ink leading-[1.2] tracking-[-0.02em]"
                style={{ fontSize: 'clamp(20px, 2.5vw, 28px)' }}
              >
                CIOs, CTOs, and IT leaders at small and medium enterprises ready to adopt AI without
                the liability.
              </p>
              <p className="text-muted text-[15px] leading-relaxed">
                Teams of 100 to 5,000 people. Privacy-sensitive industries where getting AI wrong
                is not an option.
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

            {/* The bigger play */}
            <motion.div
              variants={fadeUp}
              className="flex flex-col gap-6 py-8 md:pl-16"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-muted-light">
                The bigger play
              </p>
              <p
                className="font-bold text-ink leading-[1.2] tracking-[-0.02em]"
                style={{ fontSize: 'clamp(20px, 2.5vw, 28px)' }}
              >
                A marketplace where teams build and deploy AI apps certified for enterprise compliance
                out of the box.
              </p>
              <p className="text-muted text-[15px] leading-relaxed">
                Internal teams and third-party developers build on ekai. Enterprises get a growing
                catalog of workflow-specific apps they cannot find on Claude, Copilot, or anywhere
                else.
              </p>
              <p className="font-bold text-ink text-[17px] tracking-[-0.02em]">
                That catalog becomes the moat.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
      <Rule />
    </section>
  )
}
