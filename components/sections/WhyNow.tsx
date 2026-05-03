'use client'

import { motion } from 'framer-motion'
import StatDisplay from '@/components/ui/StatDisplay'
import { fadeUp, staggerContainer, viewportConfig } from '@/lib/animations'

export default function WhyNow() {
  return (
    <section id="why-now" className="bg-charcoal">
      <div className="max-w-content mx-auto px-6 md:px-12 py-24">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={viewportConfig}
          className="flex flex-col gap-16"
        >
          {/* Label */}
          <motion.div variants={fadeUp} className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-orange">
              Why now
            </span>
          </motion.div>

          {/* Two-column */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            {/* Left: editorial text */}
            <motion.div variants={fadeUp} className="flex flex-col gap-6">
              <p
                className="font-bold text-white leading-[1.2] tracking-[-0.025em]"
                style={{ fontSize: 'clamp(24px, 3vw, 36px)' }}
              >
                AI adoption is top of mind for most executives and your team wants same. The company leveraging AI right will be the market leader.
              </p>
              <p className="text-white/50 text-[16px] leading-relaxed">
                This creates urgency where many leaders are choosing speed over governance.
                Or blocking access waiting for a magic solution. Neither solves the problem.
              </p>
            </motion.div>

            {/* Right: two stats */}
            <motion.div variants={staggerContainer} className="flex flex-col gap-12">
              <motion.div variants={fadeUp}>
                <StatDisplay
                  stat="88%"
                  label="of C-suite executives say speeding up AI adoption is their top priority this year."
                  source="WEF / LinkedIn 2025"
                  light
                />
              </motion.div>
              <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }} />
              <motion.div variants={fadeUp}>
                <StatDisplay
                  stat="80%"
                  label="of employees are already using unapproved AI tools on their own."
                  source="UpGuard 2025"
                  light
                />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
