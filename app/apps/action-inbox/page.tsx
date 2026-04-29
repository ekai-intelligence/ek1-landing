'use client'

import { motion } from 'framer-motion'
import { ArrowRight, ArrowLeft } from 'lucide-react'
import Button from '@/components/ui/Button'
import Label from '@/components/ui/Label'
import Rule from '@/components/ui/Rule'
import { fadeUp, staggerContainer, viewportConfig } from '@/lib/animations'

const features = [
  {
    title: 'Smart prioritization',
    copy: 'AI scores every incoming signal by urgency, deadline proximity, and your role. The most critical items always surface first.',
  },
  {
    title: 'Multi-source aggregation',
    copy: 'Pulls from Slack threads, Gmail chains, JIRA tickets, GitHub PRs, and Teams messages — one feed, no tab switching.',
  },
  {
    title: 'One-click actions',
    copy: 'Reply, reassign, close, or escalate directly from Action Inbox. Actions sync back to the original tool instantly.',
  },
  {
    title: 'Daily digest',
    copy: 'Each morning, a ranked summary of what needs your attention today. Push it to Slack or email in one click.',
  },
  {
    title: 'Team visibility',
    copy: 'Managers see what their team is waiting on. No status meetings. No blind spots. No chasing for updates.',
  },
  {
    title: 'Private by default',
    copy: 'All signals are processed inside your cloud. ekai never trains on your messages or shares data with external servers.',
  },
]

const steps = [
  {
    num: '01',
    title: 'Connect your tools',
    copy: 'Link Slack, Gmail, JIRA, GitHub, and Teams. Takes minutes with OAuth. No IT ticket required.',
  },
  {
    num: '02',
    title: 'AI builds your feed',
    copy: 'ekai reads your connected sources and builds a prioritized inbox within the hour. No manual configuration.',
  },
  {
    num: '03',
    title: 'Act without switching tabs',
    copy: 'Reply, close, escalate — all from Action Inbox. Changes sync back to the source tool automatically.',
  },
]

const integrations = ['Slack', 'Gmail', 'Outlook', 'Teams', 'JIRA', 'GitHub']

export default function ActionInboxPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-cream pt-[60px]">
        <div className="max-w-content mx-auto px-6 md:px-12">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="flex flex-col"
          >
            <div className="pt-20 pb-16 md:pt-28 md:pb-20 flex flex-col gap-8 max-w-[680px]">
              <motion.div variants={fadeUp} className="flex items-center gap-3">
                <a
                  href="/#apps"
                  className="flex items-center gap-1.5 text-[12px] text-muted hover:text-ink transition-colors duration-150 no-underline"
                >
                  <ArrowLeft size={12} /> All apps
                </a>
                <span className="text-border">|</span>
                <Label>Action Inbox</Label>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="font-black text-ink leading-[1.05] tracking-[-0.035em]"
                style={{ fontSize: 'clamp(36px, 5.5vw, 68px)' }}
              >
                One feed for everything your team needs to act on.
              </motion.h1>

              <motion.p variants={fadeUp} className="text-muted text-lg leading-relaxed">
                Action Inbox aggregates signals from every tool your team uses, ranks them by urgency, and lets you take action without leaving ekai.
              </motion.p>

              <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
                <Button variant="primary" size="lg">
                  Get started free <ArrowRight size={15} className="ml-1.5" />
                </Button>
                <Button variant="secondary" size="lg">Book a demo</Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
        <Rule />
      </section>

      {/* Features */}
      <section className="bg-cream">
        <div className="max-w-content mx-auto px-6 md:px-12 py-24">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={viewportConfig}
            className="flex flex-col gap-16"
          >
            <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-8 lg:gap-16">
              <motion.div variants={fadeUp}>
                <Label>Features</Label>
              </motion.div>
              <motion.p
                variants={fadeUp}
                className="font-bold text-ink text-[20px] leading-[1.3] tracking-[-0.02em] max-w-[500px]"
              >
                Everything you need to stay on top of what matters.
              </motion.p>
            </div>

            <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
              {features.map((feat) => (
                <motion.div
                  key={feat.title}
                  variants={fadeUp}
                  className="flex flex-col gap-3 p-8 bg-cream"
                >
                  <h3 className="font-bold text-ink text-[15px] tracking-[-0.01em]">{feat.title}</h3>
                  <p className="text-muted text-[14px] leading-relaxed">{feat.copy}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
        <Rule />
      </section>

      {/* How it works */}
      <section className="bg-cream">
        <div className="max-w-content mx-auto px-6 md:px-12 py-24">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={viewportConfig}
            className="flex flex-col gap-16"
          >
            <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-8 lg:gap-16">
              <motion.div variants={fadeUp}>
                <Label>How it works</Label>
              </motion.div>
              <motion.p
                variants={fadeUp}
                className="font-bold text-ink text-[20px] tracking-[-0.02em] leading-[1.3]"
              >
                Up and running in under an hour.
              </motion.p>
            </div>

            <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-3 gap-0">
              {steps.map((step, i) => (
                <motion.div
                  key={step.num}
                  variants={fadeUp}
                  className={`flex flex-col gap-4 py-8 ${
                    i < steps.length - 1
                      ? 'md:pr-10 md:border-r border-b md:border-b-0 border-border'
                      : ''
                  } ${i > 0 ? 'md:pl-10' : ''}`}
                >
                  <span className="text-orange font-black text-[13px] tracking-[0.05em]">
                    {step.num} —
                  </span>
                  <h3 className="font-bold text-ink text-[16px] tracking-[-0.01em]">{step.title}</h3>
                  <p className="text-muted text-[14px] leading-relaxed">{step.copy}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
        <Rule />
      </section>

      {/* Integrations */}
      <section className="bg-cream">
        <div className="max-w-content mx-auto px-6 md:px-12 py-16">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={viewportConfig}
            className="flex flex-col gap-10"
          >
            <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-8 lg:gap-16 items-center">
              <motion.div variants={fadeUp}>
                <Label>Works with</Label>
              </motion.div>
              <motion.div variants={staggerContainer} className="flex flex-wrap gap-2">
                {integrations.map((int) => (
                  <motion.span
                    key={int}
                    variants={fadeUp}
                    className="text-[13px] font-semibold text-ink border border-border px-4 py-2 rounded-sm"
                  >
                    {int}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
        <Rule />
      </section>

      {/* CTA */}
      <section className="bg-cream">
        <div className="max-w-content mx-auto px-6 md:px-12 py-24">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={viewportConfig}
            className="flex flex-col gap-8 max-w-[600px]"
          >
            <motion.div variants={fadeUp}>
              <Label>Get started</Label>
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="font-black text-ink leading-[1.05] tracking-[-0.035em]"
              style={{ fontSize: 'clamp(28px, 4vw, 52px)' }}
            >
              Stop losing track of what needs your attention.
            </motion.h2>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
              <Button variant="primary" size="lg">
                Get started free <ArrowRight size={15} className="ml-1.5" />
              </Button>
              <Button variant="secondary" size="lg">Book a 15-min demo</Button>
            </motion.div>
          </motion.div>
        </div>
        <Rule />
      </section>
    </>
  )
}
