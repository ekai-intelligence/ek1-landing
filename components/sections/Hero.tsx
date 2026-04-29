'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Button from '@/components/ui/Button'
import Rule from '@/components/ui/Rule'
import HeroCarousel from '@/components/sections/HeroCarousel'
import { fadeUp, staggerContainer, viewportConfig } from '@/lib/animations'

export default function Hero() {
  return (
    <section id="hero" className="bg-cream pt-[60px] relative overflow-hidden">

      {/* Background texture — desktop only */}
      <div className="absolute inset-0 pointer-events-none select-none hidden lg:block">
        <div
          className="absolute inset-0 opacity-[0.22]"
          style={{
            backgroundImage: 'radial-gradient(circle, #b0aaa8 1px, transparent 1px)',
            backgroundSize: '26px 26px',
          }}
        />
        <div className="absolute -top-32 -right-32 w-[560px] h-[560px] rounded-full bg-orange/10 blur-[100px]" />
        <div className="absolute -bottom-16 -left-16 w-80 h-80 rounded-full bg-orange/8 blur-[80px]" />
      </div>

      <div className="max-w-content mx-auto px-6 md:px-12 relative z-10">
        <motion.div variants={staggerContainer} initial="initial" animate="animate" className="flex flex-col">

          <div className="pt-20 pb-10 md:pt-28 md:pb-12 grid grid-cols-1 lg:grid-cols-[1fr_520px] gap-12 lg:gap-16 items-center">

            {/* Left: copy */}
            <div className="flex flex-col gap-8">
              <motion.div variants={fadeUp}>
                <div className="inline-flex items-center gap-2.5 border border-border rounded-pill px-4 py-2 bg-cream whitespace-nowrap">
                  {['Zero Data Leakage', 'Deployed in your CLOUD', 'Custom Agents'].map((item, i) => (
                    <div key={item} className="flex items-center gap-2.5">
                      {i === 0
                        ? <span className="w-1.5 h-1.5 rounded-full bg-orange flex-shrink-0" />
                        : <span className="w-1 h-1 rounded-full bg-orange flex-shrink-0" />}
                      <span className="text-[10px] font-semibold uppercase tracking-[0.08em] text-muted">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="font-black text-ink leading-[1.05] tracking-[-0.035em] whitespace-nowrap"
                style={{ fontSize: 'clamp(22px, 3.5vw, 44px)' }}
              >
                Supercharge your team&apos;s
                <br />
                <span className="text-orange">AI adoption.</span>
              </motion.h1>

              <motion.p variants={fadeUp} className="text-muted text-lg leading-relaxed max-w-[440px] tracking-[-0.01em]">
                ekai is a private AI stack you own and control, with ready-to-use AI apps, a prompt-based app builder, running entirely inside your cloud and connected to your internal tools.
              </motion.p>

              <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-3">
                <Button variant="primary" size="lg">
                  Book a demo <ArrowRight size={15} className="ml-1.5" />
                </Button>
                <Button variant="secondary" size="lg">Get started free</Button>
              </motion.div>
            </div>

            {/* Right: laptop product carousel */}
            <motion.div variants={fadeUp} className="hidden lg:block">
              <HeroCarousel />
            </motion.div>
          </div>

          {/* Stats strip */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={viewportConfig}
            className="border-t border-border pt-6 pb-2 flex flex-wrap gap-3"
          >
            {[
              { value: '1 - click', label: 'Deployment' },
              { value: '6+ hrs', label: 'Saved per person / week' },
              { value: '100%', label: 'Data sovereignty' },
              { value: '$4.45M', label: 'Avg breach cost eliminated' },
            ].map((stat) => (
              <motion.div
                key={stat.value}
                variants={fadeUp}
                className="flex flex-col gap-1.5 bg-orange/10 rounded-xl px-5 py-4 w-[calc(50%-6px)] md:flex-1"
              >
                <span
                  className="font-black text-orange leading-none tracking-[-0.04em]"
                  style={{ fontSize: 'clamp(22px, 2.4vw, 32px)' }}
                >
                  {stat.value}
                </span>
                <span className="text-[12px] text-muted font-medium leading-snug">{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>

        </motion.div>
      </div>
      <Rule />
    </section>
  )
}
