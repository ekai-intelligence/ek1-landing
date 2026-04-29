'use client'

import { motion } from 'framer-motion'
import Label from '@/components/ui/Label'
import AppPill from '@/components/ui/AppPill'
import Rule from '@/components/ui/Rule'
import { fadeUp, staggerContainer, viewportConfig } from '@/lib/animations'

const liveApps = ['Notetaker', 'Action Inbox', 'AI Search', 'Drafting']
const comingApps = ['App Builder', 'Marketplace Q3']

export default function Solution() {
  return (
    <section id="platform" className="bg-cream">
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
              <Label>How ekai solves this</Label>
            </motion.div>
            <motion.div variants={fadeUp} className="flex flex-col gap-6">
              <p
                className="font-bold text-ink leading-[1.2] tracking-[-0.025em]"
                style={{ fontSize: 'clamp(22px, 2.8vw, 34px)' }}
              >
                A complete AI stack that runs inside your own cloud with private models.
              </p>
              <p className="text-muted text-[17px] leading-relaxed max-w-[580px]">
                No data leaves your walls. On day one, your team gets apps already connected to
                their tools. For anything beyond that, ekai lets you build and deploy new apps in
                minutes with a prompt-first approach and roll them out to your entire team
                immediately.
              </p>

              {/* App pills */}
              <div className="flex flex-wrap gap-2 pt-2">
                {liveApps.map((app) => <AppPill key={app} label={app} live />)}
                {comingApps.map((app) => <AppPill key={app} label={app} live={false} />)}
              </div>
            </motion.div>
          </div>

          <Rule />

          {/* Three platform pillars */}
          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-0"
          >
            {[
              {
                label: 'Private infrastructure',
                copy: 'Deploys directly into your AWS, Azure, or GCP environment. Not our servers. Yours.',
              },
              {
                label: 'Default apps on day one',
                copy: 'Notetaker, Action Inbox, AI Search, and Drafting ship with every deployment. Productive from login.',
              },
              {
                label: 'Build and extend',
                copy: 'Prompt-first app builder lets your team create and deploy internal apps without starting from scratch on compliance.',
              },
            ].map((pillar, i) => (
              <motion.div
                key={pillar.label}
                variants={fadeUp}
                className={`flex flex-col gap-3 py-8 ${
                  i < 2
                    ? 'md:pr-10 md:border-r border-b md:border-b-0 border-border'
                    : ''
                } ${i > 0 ? 'md:pl-10' : ''}`}
              >
                <div className="w-6 h-px bg-orange" />
                <h3 className="font-semibold text-ink text-[15px] tracking-[-0.01em]">
                  {pillar.label}
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
