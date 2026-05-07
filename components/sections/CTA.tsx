'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Button from '@/components/ui/Button'
import Label from '@/components/ui/Label'
import Rule from '@/components/ui/Rule'
import { fadeUp, staggerContainer, viewportConfig } from '@/lib/animations'

export default function CTA() {
  return (
    <section id="cta" className="bg-cream">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-24 md:py-32">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={viewportConfig}
          className="flex flex-col items-center text-center gap-10"
        >
          <motion.div variants={fadeUp}>
            <Label>Get started</Label>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="font-black text-ink leading-[1.2] tracking-[-0.03em] w-full"
            style={{ fontSize: 'clamp(24px, 3vw, 44px)' }}
          >
            Your Private AI ecosystem to supercharge<br className="hidden md:block" /> your team&apos;s AI adoption.
          </motion.h2>

          <motion.p variants={fadeUp} className="text-muted text-[18px] leading-relaxed max-w-[540px]">
            Deploy inside your own cloud in under 48 hours. No data on our
            servers. Ever.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-3">
            <Button variant="primary" size="lg" href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0Bp7akyMIraUFtytlgVTAGtZ8heZm7J451cIuYaurqSk2UsPjjKXJA_LaGrXu8zS-gk7Cp7Eir" target="_blank" rel="noopener noreferrer">
              Book a 15-minute review <ArrowRight size={15} className="ml-1.5" />
            </Button>
            <Button variant="secondary" size="lg" href="https://client.yourekai.com" target="_blank" rel="noopener noreferrer">
              Start free trial
            </Button>
          </motion.div>
        </motion.div>
      </div>
      <Rule />
    </section>
  )
}
