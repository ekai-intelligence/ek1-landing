'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const CREAM  = '#f9f5f0'
const ORANGE = '#e06530'
const INK    = '#1F1F1F'
const MUTED  = '#746f69'
const BORDER = '#e5e1dc'
const GREEN  = '#16a34a'
const AMBER  = '#d97706'

function LaptopFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative w-full">
      <div
        className="relative bg-[#1d1d1f] rounded-[18px]"
        style={{ padding: '10px 10px 14px', boxShadow: '0 0 0 1px rgba(255,255,255,0.06), 0 40px 100px rgba(0,0,0,0.45), 0 8px 24px rgba(0,0,0,0.25)' }}
      >
        <div className="flex justify-center mb-2">
          <div className="w-[5px] h-[5px] rounded-full bg-[#3d3d40] ring-1 ring-[#2a2a2c]" />
        </div>
        <div className="rounded-[7px] overflow-hidden" style={{ aspectRatio: '16/10' }}>
          {children}
        </div>
      </div>
      <div className="mx-auto w-16 h-[5px] rounded-b-[4px]" style={{ background: 'linear-gradient(to bottom, #b8b8be, #a8a8ae)' }} />
      <div className="w-full h-4 rounded-b-[10px]" style={{ background: 'linear-gradient(to bottom, #d2d2d7, #c0c0c5)', boxShadow: '0 4px 16px rgba(0,0,0,0.18), inset 0 1px 0 rgba(255,255,255,0.35)' }} />
    </div>
  )
}

const findings = [
  { icon: '⚠', color: AMBER,  text: 'Liability cap §12.3: $2M — below market standard' },
  { icon: '⚠', color: AMBER,  text: 'Auto-renewal §8: 90-day lock-in, no exit clause' },
  { icon: '✓', color: GREEN,  text: 'Payment terms: Net 30 — standard' },
]

export default function HeroVisual() {
  const [phase, setPhase] = useState<'prompt' | 'thinking' | 'results'>('prompt')

  useEffect(() => {
    const t1 = setTimeout(() => setPhase('thinking'), 1200)
    const t2 = setTimeout(() => setPhase('results'),  2600)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [])

  return (
    <LaptopFrame>
      <div className="h-full flex flex-col" style={{ backgroundColor: CREAM }}>

        {/* Status bar */}
        <div
          className="flex items-center justify-between px-5 py-2.5 border-b"
          style={{ borderColor: BORDER }}
        >
          <div className="flex items-center gap-2">
            <motion.span
              className="w-1.5 h-1.5 rounded-full block"
              style={{ backgroundColor: GREEN }}
              animate={{ opacity: [1, 0.4, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span style={{ fontSize: 9, fontWeight: 700, color: GREEN, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
              Private · AWS us-east-1
            </span>
          </div>
          <span style={{ fontSize: 9, color: MUTED }}>Your cloud · Zero external calls</span>
        </div>

        {/* Body */}
        <div className="flex-1 flex flex-col gap-3 px-5 py-4 overflow-hidden">

          {/* Task card */}
          <div
            className="rounded-xl border p-3"
            style={{ backgroundColor: 'white', borderColor: BORDER }}
          >
            <p style={{ fontSize: 8, fontWeight: 700, color: MUTED, textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: 6 }}>
              Contract Review
            </p>
            <p style={{ fontSize: 11, color: INK, lineHeight: 1.55 }}>
              Review the Blackrock Capital NDA and flag any non-standard liability terms before Tuesday's signing.
            </p>
          </div>

          {/* Thinking → Results */}
          <AnimatePresence mode="wait">
            {phase === 'prompt' && (
              <motion.div key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} />
            )}

            {phase === 'thinking' && (
              <motion.div
                key="thinking"
                className="flex items-center gap-2"
                initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
              >
                <div
                  className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: ORANGE }}
                >
                  <span style={{ color: 'white', fontWeight: 900, fontSize: 6.5 }}>ek</span>
                </div>
                <div className="flex items-center gap-1">
                  {[0, 1, 2].map(i => (
                    <motion.span
                      key={i}
                      className="w-1 h-1 rounded-full block"
                      style={{ backgroundColor: MUTED }}
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 0.9, repeat: Infinity, delay: i * 0.2 }}
                    />
                  ))}
                  <span style={{ fontSize: 9.5, color: MUTED, marginLeft: 4 }}>Analyzing document…</span>
                </div>
              </motion.div>
            )}

            {phase === 'results' && (
              <motion.div
                key="results"
                className="flex flex-col gap-2.5"
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35 }}
              >
                {/* ekai header */}
                <div className="flex items-center gap-2">
                  <div
                    className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: ORANGE }}
                  >
                    <span style={{ color: 'white', fontWeight: 900, fontSize: 6.5 }}>ek</span>
                  </div>
                  <span style={{ fontSize: 9, color: ORANGE, fontWeight: 700 }}>2 items flagged · 1 clear</span>
                </div>

                {/* Findings */}
                <div
                  className="rounded-xl border p-3 space-y-2.5"
                  style={{ backgroundColor: 'white', borderColor: BORDER }}
                >
                  {findings.map((f, i) => (
                    <motion.div
                      key={i}
                      className="flex items-start gap-2"
                      initial={{ opacity: 0, x: -5 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <span style={{ fontSize: 11, color: f.color, fontWeight: 900, flexShrink: 0, lineHeight: 1.3 }}>{f.icon}</span>
                      <p style={{ fontSize: 9.5, color: INK, lineHeight: 1.45 }}>{f.text}</p>
                    </motion.div>
                  ))}
                </div>

                {/* Action buttons */}
                <div className="flex items-center gap-2">
                  <button
                    style={{ fontSize: 8.5, fontWeight: 700, color: 'white', backgroundColor: INK, padding: '5px 12px', borderRadius: 7, border: 'none' }}
                  >
                    Draft negotiation memo →
                  </button>
                  <button
                    style={{ fontSize: 8.5, fontWeight: 600, color: MUTED, backgroundColor: 'transparent', padding: '5px 10px', borderRadius: 7, border: `1px solid ${BORDER}` }}
                  >
                    Send to legal
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Footer */}
        <div
          className="flex items-center gap-2 px-5 py-2 border-t"
          style={{ borderColor: BORDER }}
        >
          <span style={{ fontSize: 8, color: '#b0aaa8' }}>No data sent outside your infrastructure</span>
        </div>

      </div>
    </LaptopFrame>
  )
}
