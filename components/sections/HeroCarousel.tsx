'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const CREAM  = '#f9f5f0'
const ORANGE = '#e06530'
const INK    = '#1F1F1F'
const MUTED  = '#746f69'
const BORDER = '#e5e1dc'

// ── Waveform ──────────────────────────────────────────────────────────────────
function Waveform() {
  const hs = [3, 7, 11, 6, 13, 5, 10, 4, 12, 7, 9, 4]
  return (
    <div className="flex items-center gap-[2.5px]">
      {hs.map((h, i) => (
        <motion.div
          key={i}
          className="rounded-full"
          style={{ width: 2.5, height: h, backgroundColor: ORANGE, originY: 0.5 }}
          animate={{ scaleY: [1, 0.25, 1.3, 0.7, 1] }}
          transition={{ duration: 1.3, repeat: Infinity, delay: i * 0.06, ease: 'easeInOut' }}
        />
      ))}
    </div>
  )
}

// ── Screen 1: Notetaker ───────────────────────────────────────────────────────
function NotetakerScreen() {
  const [phase, setPhase] = useState<'listening' | 'summary'>('listening')

  useEffect(() => {
    const t = setTimeout(() => setPhase('summary'), 2800)
    return () => clearTimeout(t)
  }, [])

  const participants = [
    { init: 'S', bg: '#0ea5e9' },
    { init: 'J', bg: '#8b5cf6' },
    { init: 'M', bg: '#10b981' },
  ]

  return (
    <div className="h-full flex flex-col" style={{ backgroundColor: CREAM }}>
      {/* Top bar */}
      <div className="flex items-center justify-between px-5 py-2.5 border-b" style={{ borderColor: BORDER }}>
        <span className="text-[10px] font-black tracking-tight" style={{ color: INK }}>Design Review — Q2 Sprint</span>
        <span className="flex items-center gap-1.5 text-[8px] font-bold text-red-500">
          <motion.span
            className="w-1.5 h-1.5 rounded-full bg-red-500 block"
            animate={{ opacity: [1, 0.2, 1] }}
            transition={{ duration: 1.1, repeat: Infinity }}
          />
          LIVE · 00:23:41
        </span>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-8 py-5">
        <AnimatePresence mode="wait">
          {phase === 'listening' ? (
            <motion.div
              key="listening"
              className="flex flex-col items-center gap-6 w-full"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35 }}
            >
              {/* Participant row */}
              <div className="flex items-end justify-center gap-4">
                {participants.map((p, i) => (
                  <motion.div
                    key={i}
                    className="w-9 h-9 rounded-full flex items-center justify-center text-[12px] font-black text-white"
                    style={{ backgroundColor: p.bg }}
                    initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                  />
                ))}
                {/* ekai */}
                <motion.div
                  className="flex flex-col items-center gap-1"
                  initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white font-black text-[11px]"
                    style={{ backgroundColor: ORANGE, outline: `2.5px solid ${ORANGE}`, outlineOffset: 3 }}
                  >
                    ek
                  </div>
                  <span className="text-[8px] font-bold uppercase tracking-wider" style={{ color: ORANGE }}>ekai</span>
                </motion.div>
              </div>

              {/* Status */}
              <motion.div
                className="flex flex-col items-center gap-3"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
              >
                <p className="text-[11px] font-medium" style={{ color: MUTED }}>ekai is listening to your meeting</p>
                <Waveform />
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              key="summary"
              className="w-full space-y-3"
              initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-green-500 flex items-center justify-center" style={{ fontSize: 8 }}>
                  <span className="text-white font-black">✓</span>
                </div>
                <span className="text-[11px] font-black" style={{ color: INK }}>Summary ready</span>
              </div>

              <div className="rounded-xl p-3 bg-white border space-y-1.5" style={{ borderColor: BORDER }}>
                <p className="text-[7.5px] font-bold uppercase tracking-widest mb-2" style={{ color: MUTED }}>Key decisions</p>
                {['Landing page ships Friday', 'James owns auth flow PR', 'Mobile QA starts Monday'].map((d, i) => (
                  <motion.div key={i} className="flex items-center gap-2"
                    initial={{ opacity: 0, x: -6 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.12 }}>
                    <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: ORANGE }} />
                    <p className="text-[10px]" style={{ color: INK }}>{d}</p>
                  </motion.div>
                ))}
              </div>

              <div className="rounded-xl p-3 bg-white border space-y-2" style={{ borderColor: BORDER }}>
                <p className="text-[7.5px] font-bold uppercase tracking-widest mb-2" style={{ color: MUTED }}>Action items</p>
                {[
                  { owner: 'James L', task: 'Auth PR by Thursday EOD', done: false },
                  { owner: 'Sarah K', task: 'Approve design assets', done: true },
                  { owner: 'Mike T',  task: 'QA environment by Friday', done: false },
                ].map((a, i) => (
                  <motion.div key={i} className="flex items-center gap-2"
                    initial={{ opacity: 0, x: -6 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.12 + 0.15 }}>
                    <div
                      className="w-3.5 h-3.5 rounded border-[1.5px] flex-shrink-0 flex items-center justify-center"
                      style={{ borderColor: a.done ? ORANGE : '#c5c0bb', backgroundColor: a.done ? ORANGE : 'transparent' }}
                    >
                      {a.done && <span className="text-white font-black leading-none" style={{ fontSize: 7 }}>✓</span>}
                    </div>
                    <p className="text-[10px] flex-1" style={{ color: a.done ? '#b0aaa8' : INK, textDecoration: a.done ? 'line-through' : 'none' }}>{a.task}</p>
                    <span className="text-[8px]" style={{ color: '#b0aaa8' }}>{a.owner}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

// ── Screen 2: Action Inbox ────────────────────────────────────────────────────
const srcColors: Record<string, string> = { Slack: '#E01E5A', JIRA: '#0052CC', Gmail: '#EA4335' }

function ActionInboxScreen() {
  const items = [
    {
      source: 'Slack', channel: '#legal', time: '2m',
      title: 'NDA flagged — 3 changes need sign-off',
      draft: 'I\'ll review the flagged clauses and send comments by EOD today. @legal please flag anything urgent.',
    },
    {
      source: 'JIRA', channel: 'SPRINT-247', time: '8m',
      title: 'Auth flow PR waiting for approval',
      draft: 'Approved. Merge once CI passes — good work @jsmith.',
    },
    {
      source: 'Gmail', channel: 'finance@acme.com', time: '15m',
      title: 'Q2 proposal — 3 questions from client',
      draft: 'Thanks for these. Addressing inline: (1) Yes, (2) Delivery by Q3 end, (3) We\'ll confirm SLA by Friday.',
    },
  ]

  return (
    <div className="h-full flex flex-col" style={{ backgroundColor: CREAM }}>
      {/* Top bar */}
      <div className="flex items-center justify-between px-5 py-2.5 border-b" style={{ borderColor: BORDER }}>
        <div className="flex items-center gap-2">
          <span className="text-[11px] font-black tracking-tight" style={{ color: INK }}>Action Inbox</span>
          <span
            className="text-[8px] font-bold px-1.5 py-0.5 rounded-full"
            style={{ backgroundColor: 'rgba(224,101,48,0.1)', color: ORANGE }}
          >
            3 need attention
          </span>
        </div>
        <span className="text-[9px]" style={{ color: '#b0aaa8' }}>Today</span>
      </div>

      {/* Feed */}
      <div className="flex-1 overflow-y-auto px-4 py-3 space-y-2.5">
        {items.map((item, i) => (
          <motion.div
            key={i}
            className="bg-white rounded-xl overflow-hidden border"
            style={{ borderColor: BORDER }}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.3 }}
          >
            {/* Item */}
            <div className="px-3 pt-2.5 pb-2">
              <div className="flex items-center gap-1.5 mb-1">
                <span className="text-[7.5px] font-bold uppercase px-1.5 py-0.5 rounded text-white" style={{ backgroundColor: srcColors[item.source] }}>
                  {item.source}
                </span>
                <span className="text-[8px]" style={{ color: '#b0aaa8' }}>{item.channel}</span>
                <span className="ml-auto text-[8px]" style={{ color: '#b0aaa8' }}>{item.time} ago</span>
              </div>
              <p className="text-[10px] font-semibold leading-snug" style={{ color: INK }}>{item.title}</p>
            </div>

            {/* ekai draft */}
            <div
              className="mx-3 mb-3 rounded-lg p-2.5"
              style={{ backgroundColor: 'rgba(224,101,48,0.06)', border: '1px solid rgba(224,101,48,0.18)' }}
            >
              <div className="flex items-center gap-1.5 mb-1.5">
                <div
                  className="w-3.5 h-3.5 rounded-full flex items-center justify-center text-white font-black"
                  style={{ backgroundColor: ORANGE, fontSize: 6 }}
                >
                  ek
                </div>
                <span className="text-[8px] font-bold" style={{ color: ORANGE }}>ekai drafted a reply</span>
              </div>
              <p className="text-[9px] leading-relaxed mb-2.5" style={{ color: INK }}>{item.draft}</p>
              <div className="flex items-center gap-1.5">
                <button
                  className="text-[8px] font-bold text-white px-2.5 py-1 rounded-md"
                  style={{ backgroundColor: ORANGE }}
                >
                  Send
                </button>
                <button
                  className="text-[8px] font-semibold px-2 py-1 rounded-md border"
                  style={{ color: MUTED, borderColor: '#c5c0bb' }}
                >
                  Edit
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

// ── Screen 3: App Builder ─────────────────────────────────────────────────────
const FULL_PROMPT = 'Review uploaded contracts and extract key dates, payment terms, liability clauses, and flag unusual terms for legal sign-off.'

function AppBuilderScreen() {
  const [typed, setTyped]   = useState(0)
  const [phase, setPhase]   = useState<'typing' | 'built'>('typing')

  useEffect(() => {
    if (typed < FULL_PROMPT.length) {
      const t = setTimeout(() => setTyped(p => p + 1), 18)
      return () => clearTimeout(t)
    } else {
      const t = setTimeout(() => setPhase('built'), 700)
      return () => clearTimeout(t)
    }
  }, [typed])

  const output = [
    { icon: '✓', color: '#16a34a', text: 'Effective date: January 1, 2026' },
    { icon: '✓', color: '#16a34a', text: 'Payment: Net 30 · late fee 1.5%/month' },
    { icon: '⚠', color: '#d97706', text: 'Liability cap (§12.3) below industry standard' },
  ]

  return (
    <div className="h-full flex flex-col" style={{ backgroundColor: CREAM }}>
      {/* Top bar */}
      <div className="flex items-center justify-between px-5 py-2.5 border-b" style={{ borderColor: BORDER }}>
        <span className="text-[11px] font-black tracking-tight" style={{ color: INK }}>App Builder</span>
        <AnimatePresence>
          {phase === 'built' && (
            <motion.div
              className="flex items-center gap-1.5"
              initial={{ opacity: 0, x: 8 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }}
            >
              <span className="flex items-center gap-1 text-[8px] font-bold text-green-600">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 block" />
                Ready
              </span>
              <button
                className="text-[8px] font-bold text-white px-2.5 py-1 rounded-md ml-1"
                style={{ backgroundColor: INK }}
              >
                Deploy to team
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Body */}
      <div className="flex-1 px-5 py-4 flex flex-col gap-3 overflow-hidden">
        {/* Prompt */}
        <div>
          <p className="text-[8px] font-bold uppercase tracking-widest mb-2" style={{ color: phase === 'built' ? ORANGE : MUTED }}>
            {phase === 'built' ? 'Contract Review Agent' : 'What should your app do?'}
          </p>
          <div
            className="rounded-xl p-3 border text-[10px] leading-relaxed"
            style={{
              backgroundColor: 'white',
              borderColor: phase === 'typing' ? ORANGE : BORDER,
              color: INK,
              minHeight: 56,
            }}
          >
            {FULL_PROMPT.slice(0, typed)}
            {phase === 'typing' && (
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.5, repeat: Infinity }}
                className="inline-block align-middle ml-px rounded-full"
                style={{ width: 1.5, height: 12, backgroundColor: ORANGE }}
              />
            )}
          </div>

          <AnimatePresence>
            {phase === 'typing' && typed === FULL_PROMPT.length && (
              <motion.button
                initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                className="mt-2 text-[9px] font-bold text-white px-3 py-1.5 rounded-lg"
                style={{ backgroundColor: ORANGE }}
              >
                Build app →
              </motion.button>
            )}
          </AnimatePresence>
        </div>

        {/* App preview */}
        <AnimatePresence>
          {phase === 'built' && (
            <motion.div
              className="flex flex-col gap-2.5"
              initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <div
                className="rounded-xl border-2 border-dashed p-3.5 flex flex-col items-center gap-1 bg-white"
                style={{ borderColor: '#c5c0bb' }}
              >
                <p className="text-[10px] font-medium" style={{ color: MUTED }}>Drop contract PDF here</p>
                <p className="text-[8px] font-semibold" style={{ color: ORANGE }}>or browse files →</p>
              </div>

              <div className="rounded-xl border p-3 bg-white space-y-2" style={{ borderColor: BORDER }}>
                <p className="text-[7.5px] font-bold uppercase tracking-widest" style={{ color: MUTED }}>Sample output</p>
                {output.map((o, i) => (
                  <motion.div
                    key={i}
                    className="flex items-center gap-2"
                    initial={{ opacity: 0, x: -6 }} animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 + 0.1 }}
                  >
                    <span className="font-black flex-shrink-0" style={{ fontSize: 11, color: o.color }}>{o.icon}</span>
                    <p className="text-[9px]" style={{ color: INK }}>{o.text}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

// ── Laptop frame ──────────────────────────────────────────────────────────────
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

// ── Main carousel ─────────────────────────────────────────────────────────────
const slides = [
  { id: 'notetaker' },
  { id: 'inbox'     },
  { id: 'builder'   },
]

export default function HeroCarousel() {
  const [active, setActive] = useState(0)
  const [dir, setDir]       = useState(1)

  const go = useCallback((i: number) => {
    setDir(i >= active ? 1 : -1)
    setActive(i)
  }, [active])

  const next = useCallback(() => go((active + 1) % slides.length), [active, go])
  const prev = () => go((active - 1 + slides.length) % slides.length)

  useEffect(() => {
    const t = setTimeout(next, 7000)
    return () => clearTimeout(t)
  }, [active, next])

  const screenFor = (i: number) => {
    if (i === 0) return <NotetakerScreen />
    if (i === 1) return <ActionInboxScreen />
    return <AppBuilderScreen />
  }

  return (
    <div className="flex flex-col gap-3 w-full">
      <LaptopFrame>
        <AnimatePresence mode="wait" custom={dir}>
          <motion.div
            key={active}
            custom={dir}
            className="h-full"
            variants={{
              enter: (d: number) => ({ opacity: 0, x: d > 0 ? 28 : -28 }),
              center: { opacity: 1, x: 0 },
              exit: (d: number) => ({ opacity: 0, x: d > 0 ? -28 : 28 }),
            }}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.28, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {screenFor(active)}
          </motion.div>
        </AnimatePresence>
      </LaptopFrame>

      {/* Dot + arrow nav */}
      <div className="flex items-center justify-center gap-2.5">
        <button onClick={prev} className="w-5 h-5 flex items-center justify-center rounded-full hover:bg-black/5 transition-colors" style={{ color: MUTED }}>
          <ChevronLeft size={11} />
        </button>

        {slides.map((s, i) => (
          <button key={s.id} onClick={() => go(i)}>
            <motion.div
              className="rounded-full"
              animate={{ width: i === active ? 18 : 6, height: 6, backgroundColor: i === active ? ORANGE : '#c5c0bb' }}
              transition={{ duration: 0.25 }}
            />
          </button>
        ))}

        <button onClick={next} className="w-5 h-5 flex items-center justify-center rounded-full hover:bg-black/5 transition-colors" style={{ color: MUTED }}>
          <ChevronRight size={11} />
        </button>
      </div>
    </div>
  )
}
