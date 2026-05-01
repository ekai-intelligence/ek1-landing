'use client'

import { motion } from 'framer-motion'
import Label from '@/components/ui/Label'
import Rule from '@/components/ui/Rule'
import { fadeUp, staggerContainer, viewportConfig } from '@/lib/animations'

const frictions = [
  {
    num: '01',
    title: 'Prompts redacted',
    copy: 'Employees working with sensitive data get their prompts redacted, making AI almost useless for the work that matters most.',
  },
  {
    num: '02',
    title: 'Scattered context',
    copy: 'Context is so scattered they spend more time copying and pasting between tools than actually using AI.',
  },
  {
    num: '03',
    title: 'Rigid tools',
    copy: 'The tools that exist work to make their platform more useful instead of focusing on the user\'s workflow.',
  },
]

export default function Problem() {
  return (
    <section id="problem" className="bg-cream">
      <div className="max-w-content mx-auto px-6 md:px-12 py-24">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={viewportConfig}
          className="flex flex-col gap-16"
        >
          {/* Intro */}
          <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-8 lg:gap-16">
            <motion.div variants={fadeUp}>
              <Label>The problem</Label>
            </motion.div>
            <motion.div variants={fadeUp} className="flex flex-col gap-5">
              <p
                className="font-bold text-ink leading-[1.2] tracking-[-0.025em]"
                style={{ fontSize: 'clamp(24px, 3vw, 36px)' }}
              >
                There is no shortage of AI tools.
                What enterprises are missing is a safe strategy to adopt them.
              </p>
              <p className="text-muted text-[17px] leading-relaxed max-w-[600px]">
                Their teams want AI in their daily workflow. But data leakage, loss of control, and
                cost make it impossible in a regulated environment.
              </p>
            </motion.div>
          </div>

          <Rule />

          {/* Three friction points */}
          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-0"
          >
            {frictions.map((item, i) => (
              <motion.div
                key={item.num}
                variants={fadeUp}
                className={`flex flex-col gap-4 py-8 ${
                  i < frictions.length - 1
                    ? 'md:pr-10 md:border-r border-b md:border-b-0 border-border'
                    : ''
                } ${i > 0 ? 'md:pl-10' : ''}`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-orange font-black text-[13px] tracking-[0.05em]">
                    {item.num} —
                  </span>
                  <span className="text-orange font-semibold text-[13px] uppercase tracking-[0.08em]">
                    {item.title}
                  </span>
                </div>
                <p className="text-muted text-[15px] leading-relaxed">{item.copy}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
      <Rule />
    </section>
  )
}
