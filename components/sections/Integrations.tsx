'use client'

import React from 'react'
import { motion } from 'framer-motion'
import {
  SiSlack, SiGmail, SiConfluence, SiJira,
  SiGithub, SiNotion, SiSalesforce,
} from 'react-icons/si'
import Label from '@/components/ui/Label'
import Rule from '@/components/ui/Rule'
import { fadeUp, staggerContainer, viewportConfig } from '@/lib/animations'

type IconFC = React.FC<{ size?: number }>

const OutlookIcon: IconFC = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
  </svg>
)

const TeamsIcon: IconFC = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 11c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 3-1.34 3-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
  </svg>
)

const OneDriveIcon: IconFC = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"/>
  </svg>
)

const integrations: { name: string; category: string; Icon: IconFC; color: string }[] = [
  { name: 'Slack',      category: 'Messaging',   Icon: SiSlack as IconFC,    color: '#4A154B' },
  { name: 'Gmail',      category: 'Email',        Icon: SiGmail as IconFC,    color: '#EA4335' },
  { name: 'Outlook',    category: 'Email',        Icon: OutlookIcon,          color: '#0078D4' },
  { name: 'Teams',      category: 'Messaging',    Icon: TeamsIcon,            color: '#6264A7' },
  { name: 'Confluence', category: 'Docs',         Icon: SiConfluence as IconFC, color: '#0052CC' },
  { name: 'JIRA',       category: 'Project mgmt', Icon: SiJira as IconFC,     color: '#0052CC' },
  { name: 'GitHub',     category: 'Code',         Icon: SiGithub as IconFC,   color: '#181717' },
  { name: 'Notion',     category: 'Docs',         Icon: SiNotion as IconFC,   color: '#000000' },
  { name: 'OneDrive',   category: 'Storage',      Icon: OneDriveIcon,         color: '#0078D4' },
  { name: 'Salesforce', category: 'CRM',          Icon: SiSalesforce as IconFC, color: '#00A1E0' },
]

const doubled = [...integrations, ...integrations]

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
                Seamlessly connects with the tool your team already uses everyday and unifies the context within your cloud.
              </p>
            </motion.div>
          </div>

          {/* Auto-scrolling marquee */}
          <motion.div variants={fadeUp} className="overflow-hidden -mx-6 md:-mx-12">
            <div className="animate-marquee flex gap-3 px-6" style={{ width: 'max-content' }}>
              {doubled.map((int, i) => (
                <div
                  key={`${int.name}-${i}`}
                  className="flex items-center gap-3 border border-border rounded-lg px-5 py-4 bg-cream"
                  style={{ minWidth: '164px' }}
                >
                  <span style={{ color: int.color, flexShrink: 0, display: 'flex', alignItems: 'center' }}>
                    <int.Icon size={20} />
                  </span>
                  <div className="flex flex-col gap-0.5">
                    <span className="font-bold text-ink text-[14px] tracking-[-0.01em] whitespace-nowrap">{int.name}</span>
                    <span className="text-[10px] text-muted uppercase tracking-[0.08em] font-semibold whitespace-nowrap">{int.category}</span>
                  </div>
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
