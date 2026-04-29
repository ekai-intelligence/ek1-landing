'use client'

import { motion } from 'framer-motion'
import SectionLabel from '@/components/ui/SectionLabel'
import { fadeUp, staggerContainer, viewportConfig } from '@/lib/animations'

export default function ROI() {
  return (
    <section id="roi" className="bg-near-black py-24">
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
            <SectionLabel>Return on Investment</SectionLabel>
            <h2
              className="font-bold leading-[1.15] tracking-[-1.5px] text-white max-w-xl"
              style={{ fontSize: 'clamp(28px, 4vw, 48px)' }}
            >
              Reclaim the workweek.{' '}
              <span className="text-orange">Protect the enterprise.</span>
            </h2>
          </motion.div>

          {/* ROI columns */}
          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {/* Hard ROI */}
            <motion.div variants={fadeUp}>
              <div className="bg-white/5 border border-teal/30 rounded-card p-8 h-full flex flex-col gap-8">
                <div className="flex items-center gap-2">
                  <div className="w-1 h-6 rounded-full bg-teal" />
                  <span className="text-teal text-xs font-medium uppercase tracking-widest">Hard ROI</span>
                </div>

                <div className="flex flex-col gap-6">
                  <div className="flex flex-col gap-1">
                    <span className="text-teal font-bold leading-none tracking-tight"
                      style={{ fontSize: 'clamp(40px, 5vw, 56px)' }}>
                      6+ hours
                    </span>
                    <p className="text-white/70 text-sm leading-relaxed">
                      Saved per person, per week. Automate the manual burden of meeting recaps, Jira updates, and Slack drafting.
                    </p>
                  </div>

                  <div className="flex flex-col gap-1">
                    <span className="text-teal font-bold leading-none tracking-tight"
                      style={{ fontSize: 'clamp(40px, 5vw, 56px)' }}>
                      60%
                    </span>
                    <p className="text-white/70 text-sm leading-relaxed">
                      Focus improvement. Eliminate work about work and give your team back their deep-focus time.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Soft ROI */}
            <motion.div variants={fadeUp}>
              <div className="bg-white/5 border border-orange/30 rounded-card p-8 h-full flex flex-col gap-8">
                <div className="flex items-center gap-2">
                  <div className="w-1 h-6 rounded-full bg-orange" />
                  <span className="text-orange text-xs font-medium uppercase tracking-widest">Risk Elimination</span>
                </div>

                <div className="flex flex-col gap-6">
                  <div className="flex flex-col gap-1">
                    <span className="text-orange font-bold leading-none tracking-tight"
                      style={{ fontSize: 'clamp(40px, 5vw, 56px)' }}>
                      $4.45M
                    </span>
                    <p className="text-white/70 text-sm leading-relaxed">
                      Average cost of an enterprise data breach. Eliminated by removing Shadow AI from your organisation entirely.
                    </p>
                  </div>

                  <div className="bg-orange/10 border border-orange/20 rounded-xl p-4">
                    <p className="text-white/60 text-sm leading-relaxed">
                      One employee pasting your client&apos;s financial data into ChatGPT is all it takes. ekai makes that impossible.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Risk bar chart */}
          <motion.div variants={fadeUp}>
            <div className="bg-white/5 border border-white/10 rounded-card p-8">
              <p className="text-white/50 text-xs uppercase tracking-widest mb-6">
                Avg. cost saved from Shadow AI elimination
              </p>
              <div className="flex items-end gap-3 h-32">
                {[20, 35, 50, 65, 80, 100].map((height, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-2">
                    <div
                      className="w-full rounded-t-md transition-all"
                      style={{
                        height: `${height}%`,
                        background: i === 5
                          ? 'linear-gradient(to top, #F26522, #F26522cc)'
                          : `rgba(26,123,107,${0.2 + i * 0.1})`,
                      }}
                    />
                    <span className="text-white/20 text-[10px]">Y{i + 1}</span>
                  </div>
                ))}
              </div>
              <p className="text-orange font-semibold text-sm mt-4">$4.45M cumulative risk exposure eliminated</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
