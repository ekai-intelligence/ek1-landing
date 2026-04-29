'use client'

import { motion } from 'framer-motion'
import AppPill from '@/components/ui/AppPill'
import { fadeUp, staggerContainer, viewportConfig } from '@/lib/animations'

const steps = [
  {
    num: '01',
    title: 'Define your workflow',
    copy: 'Describe the task your team repeats every week. App Builder turns it into a structured AI app template — no code required.',
  },
  {
    num: '02',
    title: 'Connect your data',
    copy: 'Point the app at the tools and documents it needs: Slack channels, Confluence spaces, JIRA projects. Everything stays private.',
  },
  {
    num: '03',
    title: 'Deploy to your org',
    copy: 'Publish to your ekai workspace. Your entire team can use the app the same day — no IT ticket, no engineering backlog.',
  },
]

export default function AppBuilder() {
  return (
    <section id="app-builder" className="bg-charcoal">
      <div className="max-w-content mx-auto px-6 md:px-12 py-24">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={viewportConfig}
          className="flex flex-col gap-16"
        >
          {/* Header */}
          <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-8 lg:gap-16">
            <motion.div variants={fadeUp}>
              <span className="inline-flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-orange" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-orange">
                  App Builder
                </span>
              </span>
            </motion.div>
            <motion.div variants={fadeUp} className="flex flex-col gap-5">
              <div className="flex flex-wrap items-start gap-4">
                <p
                  className="font-bold text-white leading-[1.15] tracking-[-0.025em]"
                  style={{ fontSize: 'clamp(24px, 3vw, 40px)' }}
                >
                  Build and ship AI apps for your entire org.
                </p>
                <div className="flex-shrink-0 mt-1">
                  <AppPill label="Coming Q3 2026" live={false} />
                </div>
              </div>
              <p className="text-white/50 text-[17px] leading-relaxed max-w-[520px]">
                Every team has workflows too specific for off-the-shelf tools. App Builder lets non-technical leads turn those repeating tasks into production AI apps — without writing a line of code.
              </p>
            </motion.div>
          </div>

          {/* Steps */}
          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-0"
          >
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                variants={fadeUp}
                className={`flex flex-col gap-4 py-8 ${
                  i < steps.length - 1
                    ? 'md:pr-10 md:border-r border-b md:border-b-0 border-white/10'
                    : ''
                } ${i > 0 ? 'md:pl-10' : ''}`}
              >
                <span className="text-orange font-black text-[13px] tracking-[0.05em]">
                  {step.num} —
                </span>
                <h3 className="font-bold text-white text-[17px] tracking-[-0.02em]">{step.title}</h3>
                <p className="text-white/50 text-[15px] leading-relaxed">{step.copy}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Footer note */}
          <motion.div variants={fadeUp} className="border-t border-white/10 pt-8">
            <p className="text-white/35 text-[13px] leading-relaxed max-w-[520px]">
              Apps built with App Builder run in the same private cloud as your ekai workspace. They inherit all existing security and compliance controls automatically — no extra configuration.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
