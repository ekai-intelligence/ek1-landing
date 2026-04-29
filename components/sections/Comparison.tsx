'use client'

import { motion } from 'framer-motion'
import SectionLabel from '@/components/ui/SectionLabel'
import { fadeUp, staggerContainer, viewportConfig } from '@/lib/animations'

const tableData = [
  {
    feature: 'Annual pricing per user',
    competitors: '$468',
    zocks: '$2,200+',
    jump: '$1,440',
    ekai: '~$500',
  },
  {
    feature: 'Data security',
    competitors: 'Standard SaaS',
    zocks: 'Standard SaaS + data retention',
    jump: 'Standard SaaS + compliance flag',
    ekai: 'Privately deployed on your VPC. On-demand sensitive data redaction. Custom retention policy.',
  },
  {
    feature: 'Note-taking method',
    competitors: 'Bot joins as participant',
    zocks: 'Bot joins as participant',
    jump: 'Bot joins as participant',
    ekai: 'Internal: transcript from Zoom/Teams/Meet. External: bot joins with permission.',
  },
  {
    feature: 'Post-meeting workflows',
    competitors: 'Basic integrations via Zapier',
    zocks: 'Native + third-party integrations',
    jump: 'CRM integration',
    ekai: 'Fully customisable workflow. Basic integration available out of the box.',
  },
  {
    feature: 'Other productivity',
    competitors: 'Meeting recap, chat with meetings',
    zocks: 'Meeting intelligence, chat, pre-fill forms',
    jump: 'Meeting intelligence, chat, update records',
    ekai: 'Everything above + LLM Chat, organisational memory, live action items, AI twin.',
  },
]

export default function Comparison() {
  return (
    <section id="comparison" className="bg-white py-24">
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
            <SectionLabel>ekai vs the market</SectionLabel>
            <h2
              className="font-bold leading-[1.15] tracking-[-1.5px] text-near-black"
              style={{ fontSize: 'clamp(28px, 4vw, 48px)' }}
            >
              Every alternative sends your data somewhere. ekai keeps it where it belongs.
            </h2>
          </motion.div>

          {/* Comparison table */}
          <motion.div variants={fadeUp} className="overflow-x-auto -mx-6 px-6">
            <table className="w-full min-w-[700px] border-collapse">
              <thead>
                <tr className="bg-light-grey/50">
                  <th className="text-left text-xs font-medium uppercase tracking-widest text-mid-grey px-4 py-3 w-[22%]">
                    Feature
                  </th>
                  <th className="text-left text-xs font-medium uppercase tracking-widest text-mid-grey px-4 py-3 w-[19%]">
                    Fireflies / Otter / Read
                  </th>
                  <th className="text-left text-xs font-medium uppercase tracking-widest text-mid-grey px-4 py-3 w-[16%]">
                    Zocks
                  </th>
                  <th className="text-left text-xs font-medium uppercase tracking-widest text-mid-grey px-4 py-3 w-[16%]">
                    Jump
                  </th>
                  <th className="text-left text-xs font-medium uppercase tracking-widest text-white px-4 py-3 w-[27%] bg-teal rounded-t-lg">
                    ekai
                  </th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((row, i) => (
                  <tr
                    key={row.feature}
                    className={i % 2 === 0 ? 'bg-white' : 'bg-off-white/50'}
                  >
                    <td className="px-4 py-4 text-near-black text-sm font-medium border-b border-light-grey">
                      {row.feature}
                    </td>
                    <td className="px-4 py-4 text-mid-grey text-sm border-b border-light-grey">
                      {row.competitors}
                    </td>
                    <td className="px-4 py-4 text-mid-grey text-sm border-b border-light-grey">
                      {row.zocks}
                    </td>
                    <td className="px-4 py-4 text-mid-grey text-sm border-b border-light-grey">
                      {row.jump}
                    </td>
                    <td
                      className={`px-4 py-4 text-white text-sm font-semibold border-b border-teal/30 bg-teal ${
                        i === tableData.length - 1 ? 'rounded-b-lg' : ''
                      }`}
                    >
                      {row.ekai}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>

          {/* Closing line */}
          <motion.div variants={fadeUp}>
            <p className="text-center text-near-black font-semibold text-lg">
              At roughly the same price. With complete data sovereignty.{' '}
              <span className="text-teal">No competitor comes close.</span>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
