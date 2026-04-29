'use client'

import { motion } from 'framer-motion'
import { ArrowRight, ArrowLeft } from 'lucide-react'
import Button from '@/components/ui/Button'
import Label from '@/components/ui/Label'
import Rule from '@/components/ui/Rule'
import { fadeUp, staggerContainer, viewportConfig } from '@/lib/animations'

const features = [
  {
    title: 'Cross-tool search',
    copy: 'One query searches Slack, Confluence, JIRA, Notion, and GitHub simultaneously. Results in under 2 seconds.',
  },
  {
    title: 'Natural language',
    copy: 'Ask questions the way you think them. "What did we decide about the Q2 pricing?" — not keyword soup.',
  },
  {
    title: 'Private by default',
    copy: 'Search queries and results never leave your cloud. No logs sent to AI providers. No training on your content.',
  },
  {
    title: 'Source citations',
    copy: 'Every answer cites its sources. Click through to the exact Confluence page, Slack thread, or JIRA ticket.',
  },
  {
    title: 'Access-aware results',
    copy: 'AI Search respects existing tool permissions. Users only see results from content they are already allowed to access.',
  },
  {
    title: 'Knowledge gaps',
    copy: "When the answer doesn't exist in your tools, AI Search tells you — instead of hallucinating a confident-sounding wrong answer.",
  },
]

const steps = [
  {
    num: '01',
    title: 'Connect your knowledge base',
    copy: 'Link Slack, Confluence, JIRA, Notion, and GitHub. ekai indexes your content inside your cloud.',
  },
  {
    num: '02',
    title: 'Ask anything',
    copy: 'Type a question in plain English. AI Search queries all connected tools and synthesizes a cited answer.',
  },
  {
    num: '03',
    title: 'Act on the answer',
    copy: 'Click through to the source, share the answer, or ask a follow-up question to dig deeper.',
  },
]

const integrations = ['Slack', 'Confluence', 'JIRA', 'Notion', 'GitHub', 'Gmail']

export default function AISearchPage() {
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
                <Label>AI Search</Label>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="font-black text-ink leading-[1.05] tracking-[-0.035em]"
                style={{ fontSize: 'clamp(36px, 5.5vw, 68px)' }}
              >
                Search everything.
                Share nothing.
              </motion.h1>

              <motion.p variants={fadeUp} className="text-muted text-lg leading-relaxed">
                AI Search queries Slack, Confluence, JIRA, Notion, and GitHub in one go — answering questions in plain English with cited sources, entirely inside your cloud.
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
                The knowledge your team has built — finally findable.
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
                Ask once. Get answers from everywhere.
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
              Stop re-asking questions your team already answered.
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
