'use client'

import { motion } from 'framer-motion'
import { Inbox, MessageSquare, User } from 'lucide-react'
import SectionLabel from '@/components/ui/SectionLabel'
import { fadeUp, staggerContainer, viewportConfig } from '@/lib/animations'

const apps = [
  {
    icon: Inbox,
    iconBg: 'bg-orange/10',
    iconColor: 'text-orange',
    name: 'Action Inbox',
    tagline: 'From every meeting to every action. Automatically.',
    copy: 'ekai joins your meetings, understands what was said and what needs to happen, and populates your Jira, Slack, email, and CRM with ready-to-send drafts before you close your laptop.',
    tag: 'Meeting Intelligence',
    tagColor: 'bg-orange/10 text-orange border-orange/20',
  },
  {
    icon: MessageSquare,
    iconBg: 'bg-teal/10',
    iconColor: 'text-teal',
    name: 'Private GPT',
    tagline: 'The AI your compliance team will actually approve.',
    copy: 'A secure, context-aware LLM deployed inside your own infrastructure. Unlimited access for your entire team. Not a single byte processed outside your perimeter.',
    tag: 'Private LLM',
    tagColor: 'bg-teal/10 text-teal border-teal/20',
  },
  {
    icon: User,
    iconBg: 'bg-orange/10',
    iconColor: 'text-orange',
    name: 'AI Twin',
    tagline: 'You. Always available. Even when you are not.',
    copy: 'Answers questions in your voice, drafts responses from your context, and keeps your team unblocked whether you are in a meeting, on a flight, or done for the day.',
    tag: 'Personal AI',
    tagColor: 'bg-orange/10 text-orange border-orange/20',
  },
]

export default function DefaultApps() {
  return (
    <section id="apps" className="bg-white py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={viewportConfig}
          className="flex flex-col gap-12"
        >
          {/* Label + headline */}
          <motion.div variants={fadeUp} className="flex flex-col gap-4 max-w-2xl">
            <SectionLabel>Default Apps</SectionLabel>
            <h2
              className="font-bold leading-[1.15] tracking-[-1.5px] text-near-black"
              style={{ fontSize: 'clamp(28px, 4vw, 48px)' }}
            >
              Three apps. Ready the moment you deploy.
            </h2>
            <p className="text-mid-grey text-lg leading-relaxed">
              No configuration. No procurement. No separate security reviews. They ship with your
              private infrastructure and run inside it.
            </p>
          </motion.div>

          {/* App cards */}
          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {apps.map((app) => {
              const Icon = app.icon
              return (
                <motion.div key={app.name} variants={fadeUp}>
                  <div className="h-full bg-white border border-light-grey rounded-card shadow-card p-8 flex flex-col gap-5">
                    <div className={`w-12 h-12 rounded-icon flex items-center justify-center ${app.iconBg}`}>
                      <Icon size={24} className={app.iconColor} />
                    </div>
                    <div>
                      <span className={`inline-flex items-center text-xs font-medium uppercase tracking-widest px-3 py-1 rounded-pill border mb-3 ${app.tagColor}`}>
                        {app.tag}
                      </span>
                      <h3 className="text-near-black font-bold text-xl mb-2">{app.name}</h3>
                      <p className="text-orange font-medium text-sm mb-3 leading-relaxed">{app.tagline}</p>
                    </div>
                    <p className="text-mid-grey text-sm leading-relaxed flex-1">{app.copy}</p>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
