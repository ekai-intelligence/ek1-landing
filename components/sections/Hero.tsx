'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Button from '@/components/ui/Button'
import Rule from '@/components/ui/Rule'
import HeroVisual from '@/components/sections/HeroVisual'
import { fadeUp, staggerContainer } from '@/lib/animations'

export default function Hero() {
  return (
    <section id="hero" className="bg-cream pt-[60px] relative overflow-hidden min-h-screen flex flex-col">

      {/* Background texture — desktop only */}
      <div className="absolute inset-0 pointer-events-none select-none hidden lg:block">
        <div
          className="absolute inset-0 opacity-[0.29]"
          style={{
            backgroundImage: 'radial-gradient(circle, #b0aaa8 1px, transparent 1px)',
            backgroundSize: '26px 26px',
          }}
        />
        <div className="absolute -top-40 -right-40 w-[680px] h-[680px] rounded-full bg-orange/15 blur-[120px]" />
        <div className="absolute -bottom-20 -left-20 w-[420px] h-[420px] rounded-full bg-orange/10 blur-[90px]" />
      </div>

      <div className="max-w-content mx-auto px-6 md:px-12 relative z-10 flex-1 flex flex-col justify-center w-full">
        <motion.div variants={staggerContainer} initial="initial" animate="animate" className="flex flex-col">

          <div className="py-8 md:py-12 grid grid-cols-1 lg:grid-cols-[1fr_480px] gap-12 lg:gap-20 items-center">

            {/* Left: copy */}
            <div className="flex flex-col gap-8">
              <motion.h1
                variants={fadeUp}
                className="font-black text-ink leading-[1.0] tracking-[-0.04em] whitespace-nowrap"
                style={{ fontSize: 'clamp(30px, 4.2vw, 56px)' }}
              >
                Use AI where it matters,
                <br />
                not just where it&apos;s allowed.
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="font-bold text-orange leading-snug tracking-[-0.025em] max-w-[500px]"
                style={{ fontSize: 'clamp(18px, 2vw, 26px)' }}
              >
                Private AI for financial services —<br />deployed in your cloud.
              </motion.p>

              <motion.p variants={fadeUp} className="text-muted leading-relaxed max-w-[460px] -mt-2" style={{ fontSize: '17px' }}>
                Unlock AI across sensitive workflows, transactions, and internal systems, without exposing data or losing control.
              </motion.p>

              <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-3 mt-2">
                <Button variant="primary" size="lg">
                  Book a demo <ArrowRight size={15} className="ml-1.5" />
                </Button>
                <Button variant="secondary" size="lg">Get started free</Button>
              </motion.div>
            </div>

            {/* Right: product visual */}
            <motion.div variants={fadeUp} className="hidden lg:block">
              <HeroVisual />
            </motion.div>
          </div>

        </motion.div>
      </div>
      <Rule />
    </section>
  )
}
