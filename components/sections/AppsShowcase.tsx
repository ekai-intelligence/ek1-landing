'use client'

import { motion } from 'framer-motion'
import Label from '@/components/ui/Label'
import Rule from '@/components/ui/Rule'
import { fadeUp, staggerContainer, viewportConfig } from '@/lib/animations'

const apps = [
  {
    slug: 'action-inbox',
    name: 'Action Inbox',
    icon: 'AI',
    description: 'Aggregates signals from Slack, email, JIRA, and GitHub. AI prioritizes by urgency so nothing slips through the cracks.',
    features: ['Smart prioritization', 'Multi-source aggregation', 'One-click actions'],
  },
  {
    slug: 'notetaker',
    name: 'Notetaker',
    icon: 'N',
    description: 'Joins your meetings, transcribes privately, extracts action items, and sends summaries to the right people automatically.',
    features: ['Auto-join & record', 'Action item extraction', 'Searchable archive'],
  },
  {
    slug: 'ai-search',
    name: 'AI Search',
    icon: 'S',
    description: 'Natural language search across Slack, Confluence, JIRA, Notion, and GitHub — all processed inside your cloud.',
    features: ['Cross-tool search', 'Natural language', 'Source citations'],
  },
  {
    slug: 'drafting',
    name: 'Drafting',
    icon: 'D',
    description: 'Context-aware AI writing that pulls from your connected tools. Built for regulated teams with compliant tone and template library.',
    features: ['Context-aware drafts', 'Regulatory tone', 'Template library'],
  },
]

export default function AppsShowcase() {
  return (
    <section id="apps" className="bg-cream">
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
              <Label>Built-in apps</Label>
            </motion.div>
            <motion.div variants={fadeUp} className="flex flex-col gap-4">
              <p
                className="font-bold text-ink leading-[1.2] tracking-[-0.025em]"
                style={{ fontSize: 'clamp(24px, 3vw, 36px)' }}
              >
                Four AI apps, ready on day one.
              </p>
              <p className="text-muted text-[17px] leading-relaxed max-w-[500px]">
                No setup beyond connecting your tools. Each app runs in your cloud and accesses only what you explicitly permit.
              </p>
            </motion.div>
          </div>

          {/* App grid */}
          <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
            {apps.map((app) => (
              <motion.a
                key={app.slug}
                href={`/apps/${app.slug}`}
                variants={fadeUp}
                className="group flex flex-col gap-5 p-8 bg-cream hover:bg-white transition-colors duration-200 no-underline cursor-pointer"
              >
                {/* App icon */}
                <div className="w-10 h-10 rounded-card border border-border flex items-center justify-center bg-white">
                  <span className="text-[11px] font-black text-orange leading-none">{app.icon}</span>
                </div>

                <div className="flex flex-col gap-2">
                  <h3 className="font-bold text-ink text-[18px] tracking-[-0.02em]">{app.name}</h3>
                  <p className="text-muted text-[14px] leading-relaxed">{app.description}</p>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
      <Rule />
    </section>
  )
}
