'use client'

import { motion } from 'framer-motion'
import Label from '@/components/ui/Label'
import Rule from '@/components/ui/Rule'
import { fadeUp, staggerContainer, viewportConfig } from '@/lib/animations'

const pillars = [
  {
    title: 'Own the AI',
    copy: 'You own the AI instead of renting it. You own the context layer instead of having it scattered across six different tools.',
  },
  {
    title: 'Control the cost',
    copy: 'When AI adoption explodes inside your org, you are not burning through budget paying six vendors and their margins on top.',
  },
  {
    title: 'Shrink the threat surface',
    copy: 'You are running it yourself, on your own infrastructure, with one less threat surface to worry about.',
  },
]

export default function WhyItMatters() {
  return (
    <section id="why-it-matters" className="bg-cream">
      <div className="max-w-content mx-auto px-6 md:px-12 py-24">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={viewportConfig}
          className="flex flex-col gap-14"
        >
          <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-8 lg:gap-16 items-start">
            <motion.div variants={fadeUp}>
              <Label>Why it matters beyond the obvious</Label>
            </motion.div>
            <motion.p
              variants={fadeUp}
              className="text-muted text-[17px] leading-relaxed max-w-[520px]"
            >
              Beyond compliance. Beyond security. There are structural advantages to running AI
              inside your own walls that compound over time.
            </motion.p>
          </div>

          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-0"
          >
            {pillars.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                variants={fadeUp}
                className={`flex flex-col gap-4 py-8 ${
                  i < pillars.length - 1
                    ? 'md:pr-10 md:border-r border-b md:border-b-0 border-border'
                    : ''
                } ${i > 0 ? 'md:pl-10' : ''}`}
              >
                <div
                  className="w-px h-10 bg-orange flex-shrink-0"
                  style={{ minHeight: '40px' }}
                />
                <h3 className="font-bold text-ink text-[17px] tracking-[-0.02em]">
                  {pillar.title}
                </h3>
                <p className="text-muted text-[14px] leading-relaxed">{pillar.copy}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
      <Rule />
    </section>
  )
}
