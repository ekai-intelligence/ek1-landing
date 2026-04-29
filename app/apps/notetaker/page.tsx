'use client'

import { motion } from 'framer-motion'
import { ArrowRight, ArrowLeft } from 'lucide-react'
import Button from '@/components/ui/Button'
import Label from '@/components/ui/Label'
import Rule from '@/components/ui/Rule'
import { fadeUp, staggerContainer, viewportConfig } from '@/lib/animations'

const features = [
  {
    title: 'Auto-join & record',
    copy: 'Notetaker joins your calendar meetings automatically — Teams, Outlook, Google Meet. No manual start required.',
  },
  {
    title: 'Private transcription',
    copy: 'Audio is transcribed inside your cloud. Nothing is sent to a third-party transcription service. Your conversations stay yours.',
  },
  {
    title: 'Action item extraction',
    copy: 'AI identifies decisions made and tasks assigned during the meeting. Sends a structured list to attendees immediately after.',
  },
  {
    title: 'Meeting summaries',
    copy: 'A concise summary of each meeting, formatted for the right audience — executive brief or full team recap.',
  },
  {
    title: 'Searchable archive',
    copy: 'Every past meeting is indexed and searchable. Find who said what, when, and in which context — in seconds.',
  },
  {
    title: 'CRM-ready output',
    copy: 'For customer calls, Notetaker formats output as CRM notes with next steps, sentiment, and follow-up dates.',
  },
]

const steps = [
  {
    num: '01',
    title: 'Connect your calendar',
    copy: 'Link your Outlook or Google calendar. Notetaker identifies recurring and upcoming meetings automatically.',
  },
  {
    num: '02',
    title: 'Notetaker joins the meeting',
    copy: 'A bot joins 1 minute before the meeting starts. Attendees see it in the participants list. No hidden recording.',
  },
  {
    num: '03',
    title: 'Summary arrives in minutes',
    copy: 'Within 5 minutes of the call ending, all attendees receive a structured summary with action items and decisions.',
  },
]

const integrations = ['Outlook', 'Teams', 'Google Meet', 'Google Calendar', 'Slack']

export default function NotetakerPage() {
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
                <Label>Notetaker</Label>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="font-black text-ink leading-[1.05] tracking-[-0.035em]"
                style={{ fontSize: 'clamp(36px, 5.5vw, 68px)' }}
              >
                Every meeting captured, summarized, and actioned automatically.
              </motion.h1>

              <motion.p variants={fadeUp} className="text-muted text-lg leading-relaxed">
                Notetaker joins your meetings, transcribes privately, extracts action items, and sends structured summaries to the right people — all within your cloud.
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
                Stop taking notes. Start running better meetings.
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
                Set it up once. It handles every meeting from there.
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
              Never lose a decision or missed action item again.
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
