'use client'

import { motion } from 'framer-motion'
import { LayoutGrid, Code2, ShieldCheck } from 'lucide-react'
import SectionLabel from '@/components/ui/SectionLabel'
import Card from '@/components/ui/Card'
import { fadeUp, staggerContainer, viewportConfig } from '@/lib/animations'

const extensibilityCards = [
  {
    icon: LayoutGrid,
    title: 'Ready on day one',
    copy: 'Action Inbox, Private GPT, and AI Twin ship with every deployment. Your team is productive from the first login.',
  },
  {
    icon: Code2,
    title: 'Build with our framework',
    copy: 'Our boilerplate gives your developers the scaffolding to build enterprise AI apps without starting from scratch on compliance.',
  },
  {
    icon: ShieldCheck,
    title: 'ekai-certified apps',
    copy: 'Every app in our ecosystem is certified for zero data leakage. Your security team approves once. Every certified app inherits that trust.',
  },
]

export default function Platform() {
  return (
    <section id="platform" className="bg-off-white py-24">
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
            <SectionLabel>The Platform</SectionLabel>
            <h2
              className="font-bold leading-[1.15] tracking-[-1.5px] text-near-black"
              style={{ fontSize: 'clamp(32px, 4vw, 48px)' }}
            >
              ekai is not a tool.{' '}
              <span className="text-orange">It is your private AI infrastructure.</span>
            </h2>
            <p className="text-mid-grey text-lg leading-relaxed">
              Deploy once. Get the default apps immediately. Extend with your own or certified
              third-party apps. Everything runs inside your cloud. Always.
            </p>
          </motion.div>

          {/* Architecture diagram */}
          <motion.div variants={fadeUp} className="flex flex-col gap-3">
            {/* Apps layer */}
            <div className="bg-white rounded-card border border-light-grey shadow-card p-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xs font-medium uppercase tracking-widest text-mid-grey">Your Apps</span>
              </div>
              <div className="flex flex-wrap gap-3">
                {['Action Inbox', 'Private GPT', 'AI Twin', '+ Your Apps', '+ Certified Apps'].map((app) => (
                  <span
                    key={app}
                    className={`px-4 py-2 rounded-pill text-sm font-medium border ${
                      app.startsWith('+')
                        ? 'border-dashed border-light-grey text-mid-grey bg-off-white'
                        : 'bg-orange/10 text-orange border-orange/20'
                    }`}
                  >
                    {app}
                  </span>
                ))}
              </div>
              <p className="text-mid-grey text-sm mt-3 leading-relaxed">
                Default apps ship with every deployment. Build your own or install certified apps from our ecosystem.
              </p>
            </div>

            {/* Arrow */}
            <div className="flex justify-center text-orange font-bold text-lg">↑</div>

            {/* Platform layer */}
            <div className="bg-orange rounded-card p-6">
              <span className="text-white/70 text-xs font-medium uppercase tracking-widest">ekai Platform</span>
              <div className="flex flex-wrap gap-2 mt-3 mb-3">
                {['Agent Workflow Engine', 'Data Connectors', 'Security Layer', 'Context Engine'].map((item) => (
                  <span key={item} className="bg-white/15 text-white text-xs px-3 py-1.5 rounded-pill font-medium">
                    {item}
                  </span>
                ))}
              </div>
              <p className="text-white/80 text-sm leading-relaxed">
                The intelligence layer that connects your tools, understands your context, and powers every app.
              </p>
            </div>

            {/* Arrow */}
            <div className="flex justify-center text-teal font-bold text-lg">↑</div>

            {/* Infrastructure layer */}
            <div className="bg-teal rounded-card p-6">
              <span className="text-white/70 text-xs font-medium uppercase tracking-widest">Your Private Cloud</span>
              <div className="flex flex-wrap gap-2 mt-3 mb-3">
                {['AWS', 'Azure', 'GCP', 'On-Premise'].map((item) => (
                  <span key={item} className="bg-white/15 text-white text-xs px-3 py-1.5 rounded-pill font-medium">
                    {item}
                  </span>
                ))}
              </div>
              <p className="text-white/80 text-sm leading-relaxed">
                ekai deploys directly into your VPC. Your data never touches our servers.
              </p>
            </div>
          </motion.div>

          {/* Extensibility cards */}
          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {extensibilityCards.map((card) => {
              const Icon = card.icon
              return (
                <motion.div key={card.title} variants={fadeUp}>
                  <Card className="h-full flex flex-col gap-4">
                    <div className="w-10 h-10 rounded-icon bg-orange/10 flex items-center justify-center">
                      <Icon size={20} className="text-orange" />
                    </div>
                    <h3 className="text-near-black font-semibold text-base">{card.title}</h3>
                    <p className="text-mid-grey text-sm leading-relaxed">{card.copy}</p>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
