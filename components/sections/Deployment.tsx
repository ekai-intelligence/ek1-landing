'use client'

import { motion } from 'framer-motion'
import { Server, LogIn, RefreshCcw, ArrowRight } from 'lucide-react'
import SectionLabel from '@/components/ui/SectionLabel'
import Card from '@/components/ui/Card'
import { fadeUp, staggerContainer, viewportConfig } from '@/lib/animations'

const deploymentCards = [
  {
    icon: Server,
    title: 'VPC-Native',
    copy: 'Deploy directly into your AWS, Azure, or GCP environment. Our control centre handles the configuration. Your team is live before your next sprint.',
    detail: 'AWS · Azure · GCP',
  },
  {
    icon: LogIn,
    title: 'One-click SSO',
    copy: 'Connects to your existing identity provider in minutes. No new passwords. No new workflows. Your team uses what they already know.',
    detail: 'Okta · Azure AD · Google',
  },
  {
    icon: RefreshCcw,
    title: 'Automated upkeep',
    copy: 'Updates, monitoring, and maintenance run entirely within your perimeter. Zero dependency on our infrastructure after deployment.',
    detail: 'Auto-updates · Zero downtime',
  },
]

const deploymentSteps = [
  { label: 'Connect your cloud', day: 'Day 1' },
  { label: 'Configure data sources', day: 'Day 1' },
  { label: 'Deploy ekai', day: 'Day 1–2' },
  { label: 'Team is live', day: 'Day 2' },
]

export default function Deployment() {
  return (
    <section id="deployment" className="bg-off-white py-24">
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
            <SectionLabel>Zero-Friction Deployment</SectionLabel>
            <h2
              className="font-bold leading-[1.15] tracking-[-1.5px] text-near-black"
              style={{ fontSize: 'clamp(28px, 4vw, 48px)' }}
            >
              Enterprise-ready.{' '}
              <span className="text-orange">Deployed in under 48 hours.</span>
            </h2>
          </motion.div>

          {/* Deployment cards */}
          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {deploymentCards.map((card) => {
              const Icon = card.icon
              return (
                <motion.div key={card.title} variants={fadeUp}>
                  <Card className="h-full flex flex-col gap-4">
                    <div className="w-10 h-10 rounded-icon bg-teal/10 flex items-center justify-center">
                      <Icon size={20} className="text-teal" />
                    </div>
                    <div>
                      <h3 className="text-near-black font-semibold text-base mb-1">{card.title}</h3>
                      <span className="text-xs text-mid-grey font-medium">{card.detail}</span>
                    </div>
                    <p className="text-mid-grey text-sm leading-relaxed flex-1">{card.copy}</p>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>

          {/* Deployment path diagram */}
          <motion.div variants={fadeUp}>
            <div className="bg-white rounded-card shadow-card p-8 md:p-10">
              <p className="text-mid-grey text-xs font-medium uppercase tracking-widest mb-8 text-center">
                Deployment timeline
              </p>
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-4 relative">
                {deploymentSteps.map((step, i) => (
                  <div key={step.label} className="flex md:flex-col items-center gap-3 md:gap-2 flex-1">
                    <div className="flex md:flex-col items-center gap-2 md:gap-0 w-full md:w-auto">
                      <div className="flex items-center gap-2 md:flex-col md:items-center">
                        <div className="w-8 h-8 rounded-full bg-teal flex items-center justify-center flex-shrink-0">
                          <span className="text-white text-xs font-bold">{i + 1}</span>
                        </div>
                        {i < deploymentSteps.length - 1 && (
                          <div className="flex-1 h-px md:hidden bg-light-grey" />
                        )}
                      </div>
                      <div className="flex flex-col gap-0.5 md:items-center md:text-center mt-0 md:mt-3">
                        <span className="text-near-black text-sm font-medium">{step.label}</span>
                        <span className="text-orange text-xs font-medium">{step.day}</span>
                      </div>
                    </div>
                    {i < deploymentSteps.length - 1 && (
                      <ArrowRight size={16} className="text-light-grey hidden md:block ml-auto" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
