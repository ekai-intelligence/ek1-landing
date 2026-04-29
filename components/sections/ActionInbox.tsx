'use client'

import { motion } from 'framer-motion'
import SectionLabel from '@/components/ui/SectionLabel'
import { fadeUp, staggerContainer, viewportConfig } from '@/lib/animations'

const steps = [
  {
    num: '1',
    title: 'Capture',
    copy: 'ekai joins your meetings and listens securely inside your own infrastructure. No audio leaves your perimeter.',
  },
  {
    num: '2',
    title: 'Synthesise',
    copy: 'It does not just summarise. It understands the intent behind every conversation — what was decided, what was promised, what needs to happen next.',
  },
  {
    num: '3',
    title: 'Execute',
    copy: 'ekai populates your actual work tools — Jira, Slack, email, CRM — with ready-to-send drafts. You review, approve, and move on.',
  },
]

const meetingItems = [
  { title: 'Discovery call', sub: 'Acme Corp', active: true },
  { title: 'Weekly standup', sub: 'Engineering', active: false },
  { title: 'Q1 Review', sub: 'Leadership', active: false },
  { title: 'Marketing sync', sub: 'Growth team', active: false },
  { title: 'Demo call', sub: 'Prospect', active: false },
]

export default function ActionInbox() {
  return (
    <section id="action-inbox" className="bg-teal py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={viewportConfig}
          className="flex flex-col gap-12"
        >
          {/* Label + headline */}
          <motion.div variants={fadeUp} className="flex flex-col gap-4 max-w-xl">
            <SectionLabel>Action Inbox</SectionLabel>
            <h2
              className="font-bold leading-[1.15] tracking-[-1.5px] text-white"
              style={{ fontSize: 'clamp(28px, 4vw, 48px)' }}
            >
              From context to action in three steps.
            </h2>
          </motion.div>

          {/* Steps */}
          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {steps.map((step) => (
              <motion.div key={step.num} variants={fadeUp}>
                <div className="bg-white/10 border border-white/15 rounded-card p-8 flex flex-col gap-4">
                  <div className="w-10 h-10 rounded-full bg-orange flex items-center justify-center">
                    <span className="text-white font-bold text-sm">{step.num}</span>
                  </div>
                  <h3 className="text-white font-semibold text-lg">{step.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed">{step.copy}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Product UI mockup */}
          <motion.div variants={fadeUp}>
            <div className="bg-near-black rounded-2xl border border-white/10 shadow-elevated overflow-hidden">
              {/* Titlebar */}
              <div className="flex items-center gap-2 px-5 py-3.5 border-b border-white/10 bg-white/5">
                <span className="w-2.5 h-2.5 rounded-full bg-danger/60" />
                <span className="w-2.5 h-2.5 rounded-full bg-orange/60" />
                <span className="w-2.5 h-2.5 rounded-full bg-teal/60" />
                <span className="ml-4 text-white/40 text-xs">Action Inbox — ekai</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-[240px_1fr]">
                {/* Left panel - meeting list */}
                <div className="border-r border-white/10 p-4 flex flex-col gap-2">
                  <span className="text-white/30 text-[10px] uppercase tracking-widest px-2 py-1">
                    Recent meetings
                  </span>
                  {meetingItems.map((item) => (
                    <div
                      key={item.title}
                      className={`px-3 py-2.5 rounded-lg flex flex-col gap-0.5 cursor-pointer transition-colors ${
                        item.active
                          ? 'bg-teal/30 border border-teal/40'
                          : 'hover:bg-white/5 border border-transparent'
                      }`}
                    >
                      <span
                        className={`text-xs font-medium ${item.active ? 'text-white' : 'text-white/60'}`}
                      >
                        {item.title}
                      </span>
                      <span className="text-[10px] text-white/30">{item.sub}</span>
                    </div>
                  ))}
                </div>

                {/* Right panel - chat + actions */}
                <div className="p-5 flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <h4 className="text-white font-semibold text-sm">Discovery call — Acme Corp</h4>
                    <span className="text-[10px] text-white/30">Today, 2:15 PM</span>
                  </div>

                  {/* Chat bubble */}
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                        <span className="text-[10px] text-white/60">You</span>
                      </div>
                      <p className="text-white/70 text-xs leading-relaxed">
                        What follow-ups did I commit to Acme, and which are still open?
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-orange/30 flex items-center justify-center flex-shrink-0">
                        <span className="text-[10px] text-orange font-bold">e</span>
                      </div>
                      <div className="flex flex-col gap-2">
                        <p className="text-white/80 text-xs leading-relaxed">
                          You committed to 3 follow-ups. 2 have been sent. 1 is still open:
                        </p>
                        {['Send pricing deck by Friday', 'Schedule technical review — sent', 'Intro to security team — sent'].map(
                          (action, i) => (
                            <div key={action} className="flex items-center gap-2">
                              <span
                                className={`w-3 h-3 rounded-full border flex-shrink-0 flex items-center justify-center text-[8px] font-bold ${
                                  i === 0
                                    ? 'border-orange text-transparent'
                                    : 'bg-teal border-teal text-white'
                                }`}
                              >
                                {i !== 0 && '✓'}
                              </span>
                              <span
                                className={`text-[11px] ${i === 0 ? 'text-white font-medium' : 'text-white/40 line-through'}`}
                              >
                                {action}
                              </span>
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Status */}
                  <div className="flex items-center gap-2 mt-auto">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange animate-pulse" />
                    <span className="text-white/30 text-[10px]">ekai generated the summary</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
