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
      <div className="max-w-content mx-auto px-6 md:px-12 py-24 md:py-32">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={viewportConfig}
          className="flex flex-col gap-10 max-w-[700px]"
        >
          <motion.div variants={fadeUp}>
            <Label>Get started</Label>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="font-black text-ink leading-[1.05] tracking-[-0.035em]"
            style={{ fontSize: 'clamp(36px, 5vw, 64px)' }}
          >
            Private AI stack to supercharge your team&apos;s AI Adoption.
          </motion.h2>

          <motion.p variants={fadeUp} className="text-muted text-[17px] leading-relaxed max-w-[480px]">
            Deploy inside your own cloud in under 48 hours. No data on our
            servers. Ever.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
            <Button variant="primary" size="lg">
              Book a 15-minute review <ArrowRight size={15} className="ml-1.5" />
            </Button>
            <Button variant="secondary" size="lg">
              Start free trial
            </Button>
          </motion.div>
        </motion.div>
      </div>
      <Rule />
    </section>
  )
}
