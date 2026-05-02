'use client'

import { motion } from 'framer-motion'
import Label from '@/components/ui/Label'
import Rule from '@/components/ui/Rule'
import { fadeUp, staggerContainer, viewportConfig } from '@/lib/animations'

const integrations = [
  { name: 'Slack', category: 'Messaging' },
  { name: 'Gmail', category: 'Email' },
  { name: 'Outlook', category: 'Email' },
  { name: 'Teams', category: 'Messaging' },
  { name: 'Confluence', category: 'Docs' },
  { name: 'JIRA', category: 'Project mgmt' },
  { name: 'GitHub', category: 'Code' },
  { name: 'Notion', category: 'Docs' },
  { name: 'OneDrive', category: 'Storage' },
  { name: 'Salesforce', category: 'CRM' },
]

export default function Integrations() {
  return (
    <section id="integrations" className="bg-cream">
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
              <Label>Integrations</Label>
            </motion.div>
            <motion.div variants={fadeUp} className="flex flex-col gap-4">
              <p
                className="font-bold text-ink leading-[1.2] tracking-[-0.025em]"
                style={{ fontSize: 'clamp(22px, 2.5vw, 32px)' }}
              >
                Works where your team already works.
              </p>
              <p className="text-muted text-[16px] leading-relaxed max-w-[460px]">
                Connect the tools your org already uses. ekai reads from them — it never writes data back or shares anything outside your cloud.
              </p>
            </motion.div>
          </div>

          {/* Horizontal scroll strip */}
          <motion.div variants={fadeUp} className="overflow-x-auto -mx-6 md:-mx-12 no-scrollbar">
            <div className="flex gap-3 px-6 md:px-12 pb-1" style={{ width: 'max-content' }}>
              {integrations.map((int) => (
                <div
                  key={int.name}
                  className="flex flex-col gap-2 border border-border rounded-lg px-6 py-5 bg-cream hover:bg-white transition-colors duration-150 cursor-default"
                  style={{ minWidth: '148px' }}
                >
                  <span className="font-bold text-ink text-[15px] tracking-[-0.01em]">{int.name}</span>
                  <span className="text-[11px] text-muted uppercase tracking-[0.08em] font-semibold">
                    {int.category}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={fadeUp}>
            <p className="text-[13px] text-muted">
              More integrations shipping throughout 2026.{' '}
              <a
                href="#cta"
                className="text-ink font-semibold hover:text-orange transition-colors duration-150 no-underline"
              >
                Request an integration →
              </a>
            </p>
          </motion.div>
        </motion.div>
      </div>
      <Rule />
    </section>
  )
}
