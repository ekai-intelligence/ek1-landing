import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Send, Edit3, Sparkles, Wifi, Battery, Inbox, CheckCircle2, BarChart3 } from "lucide-react";

/* ── Brand icons ── */
const SlackIcon = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none">
    <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zm1.271 0a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313z" fill="#E01E5A"/>
    <path d="M8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zm0 1.271a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312z" fill="#36C5F0"/>
    <path d="M18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zm-1.27 0a2.528 2.528 0 0 1-2.522 2.521 2.527 2.527 0 0 1-2.521-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.522 2.522v6.312z" fill="#2EB67D"/>
    <path d="M15.165 18.956a2.528 2.528 0 0 1 2.522 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.521-2.522v-2.522h2.521zm0-1.27a2.527 2.527 0 0 1-2.521-2.522 2.528 2.528 0 0 1 2.521-2.522h6.313A2.528 2.528 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.521h-6.313z" fill="#ECB22E"/>
  </svg>
);

const EmailIcon = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none">
    <rect x="2" y="4" width="20" height="16" rx="2" stroke="#0078D4" strokeWidth="2"/>
    <path d="M2 8l10 6 10-6" stroke="#0078D4" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const CalendarIcon = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none">
    <rect x="3" y="4" width="18" height="18" rx="2" stroke="#10B981" strokeWidth="2"/>
    <path d="M3 9h18" stroke="#10B981" strokeWidth="1.5"/>
    <path d="M8 2v4M16 2v4" stroke="#10B981" strokeWidth="2" strokeLinecap="round"/>
    <rect x="7" y="13" width="3" height="3" rx="0.5" fill="#10B981"/>
    <rect x="14" y="13" width="3" height="3" rx="0.5" fill="#10B981"/>
  </svg>
);

const FigmaIcon = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none">
    <path d="M8 24c2.208 0 4-1.792 4-4v-4H8c-2.208 0-4 1.792-4 4s1.792 4 4 4z" fill="#0ACF83"/>
    <path d="M4 12c0-2.208 1.792-4 4-4h4v8H8c-2.208 0-4-1.792-4-4z" fill="#A259FF"/>
    <path d="M4 4c0-2.208 1.792-4 4-4h4v8H8C5.792 8 4 6.208 4 4z" fill="#F24E1E"/>
    <path d="M12 0h4c2.208 0 4 1.792 4 4s-1.792 4-4 4h-4V0z" fill="#FF7262"/>
    <path d="M20 12c0 2.208-1.792 4-4 4s-4-1.792-4-4 1.792-4 4-4 4 1.792 4 4z" fill="#1ABCFE"/>
  </svg>
);

const GithubIcon = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" fill="#1F2328"/>
  </svg>
);

const ZoomIcon = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none">
    <rect width="24" height="24" rx="5" fill="#2D8CFF"/>
    <path d="M4 8.5C4 7.67 4.67 7 5.5 7H13c.83 0 1.5.67 1.5 1.5v7c0 .83-.67 1.5-1.5 1.5H5.5C4.67 17 4 16.33 4 15.5v-7z" fill="white"/>
    <path d="M15.5 10.25l4-2.5v8.5l-4-2.5v-3.5z" fill="white"/>
  </svg>
);

/* ── Feed items (sourced from real scroll-demo scenarios) ── */
const FEED = [
  {
    id: 1,
    Icon: SlackIcon,
    source: "Slack · #engineering",
    from: "Sarah Chen",
    subject: "Sarah needs the API specs",
    preview: "Stuck on auth flow — need PR number for the spec",
    time: "2m ago",
    tag: "urgent",
    draft: "Hey Sarah! The auth spec is in PR #445. Check the description for the flow diagram. Happy to walk through it if needed — matches what we covered in yesterday's standup.",
    synthSteps: ["Scanning #engineering...", "Finding linked PR #445...", "Checking standup notes...", "Drafting reply..."],
  },
  {
    id: 2,
    Icon: EmailIcon,
    source: "Email",
    from: "john@acmecorp.com",
    subject: "Acme Corp: Q2 timeline update",
    preview: "Exec team asking for updated delivery date",
    time: "45m ago",
    tag: "client",
    draft: "Hi team, we're on track for Q2 launch. Backend: 80% complete, Frontend: 60% complete. Testing phase starts April 15. Main risk: payment gateway (2-week buffer built in).",
    synthSteps: ["Reading email thread...", "Pulling Confluence roadmap...", "Checking sprint retro...", "Drafting update..."],
  },
  {
    id: 3,
    Icon: CalendarIcon,
    source: "Calendar · Jira · Slack",
    from: "Meeting in 30 min",
    subject: "Sprint Planning — you're prepared",
    preview: "12 Jira tickets reviewed, blockers surfaced",
    time: "Now",
    tag: "meeting",
    draft: "Last Sprint: ✅ 8 done, 🚧 2 blocked (DevOps). Propose this sprint: auth flow (ENG-234), API optimization (ENG-256), bug fixes from last release.",
    synthSteps: ["Scanning 12 Jira tickets...", "Reading 4 Slack threads...", "Reviewing standup notes...", "Building brief..."],
  },
  {
    id: 4,
    Icon: FigmaIcon,
    source: "Figma · Slack · #design",
    from: "Lisa · #design",
    subject: "Design team needs your pick",
    preview: "3 mockups ready, decision needed by EOD",
    time: "3h ago",
    tag: "decision",
    draft: "Leaning toward Option B — cleaner mobile flow and aligns with our design system. One ask: can we adjust the CTA button to our brand purple? Let me know if you need more context.",
    synthSteps: ["Opening Figma links...", "Reading #design thread...", "Checking design principles...", "Drafting feedback..."],
  },
  {
    id: 5,
    Icon: EmailIcon,
    source: "Email · Jira · Confluence",
    from: "CEO · Quarterly Review",
    subject: "CEO asked for project update",
    preview: "Board deck prep — Q2 Platform Rebuild status",
    time: "5h ago",
    tag: "status",
    draft: "65% complete, on track for June 30. Velocity stable at 45 pts/sprint. All major milestones hit. Risk: payment gateway delayed 2 weeks — mitigation plan approved.",
    synthSteps: ["Pulling Jira metrics...", "Reading Confluence roadmap...", "Checking sprint velocity...", "Composing exec summary..."],
  },
  {
    id: 6,
    Icon: ZoomIcon,
    source: "Zoom · Confluence · Jira",
    from: "Alex (you) · #team-updates",
    subject: "Weekly sync notes ready to send",
    preview: "Team asked for summary from yesterday's call",
    time: "2h ago",
    tag: "team",
    draft: "Hey team! Key decisions from yesterday: moving forward with Option B redesign, pushing mobile release to May 1, hiring 2 backend engineers. Action items assigned.",
    synthSteps: ["Reading Zoom transcript...", "Checking last week's notes...", "Pulling action items...", "Drafting summary..."],
  },
  {
    id: 7,
    Icon: EmailIcon,
    source: "Email · Confluence · GitHub",
    from: "marketing@company.com",
    subject: "Marketing needs API feature input",
    preview: "Blog post about new API v2.0 — need tech details",
    time: "4h ago",
    tag: "cross-team",
    draft: "Happy to help! Key highlights: webhooks support (real-time), rate limiting improved 3×, better error messages. Developers can integrate 60% faster overall.",
    synthSteps: ["Reading email request...", "Pulling API changelog...", "Checking Confluence docs...", "Drafting response..."],
  },
  {
    id: 8,
    Icon: GithubIcon,
    source: "GitHub · eng-repo",
    from: "github · eng-repo",
    subject: "PR #451 needs your review",
    preview: "Database migration scripts — changes requested",
    time: "6h ago",
    tag: "action",
    draft: "Left comments on the rollback strategy (lines 45–67). Overall approach is solid — suggest adding a dry-run flag before merging to staging.",
    synthSteps: ["Reading PR diff...", "Checking related issues...", "Scanning review history...", "Drafting review..."],
  },
];

const TAG_COLORS: Record<string, string> = {
  urgent:      "bg-red-50 text-red-500",
  client:      "bg-indigo-50 text-indigo-500",
  meeting:     "bg-emerald-50 text-emerald-600",
  decision:    "bg-amber-50 text-amber-600",
  status:      "bg-sky-50 text-sky-600",
  team:        "bg-violet-50 text-violet-500",
  "cross-team":"bg-pink-50 text-pink-500",
  action:      "bg-orange-50 text-orange-500",
};

type Phase = "idle" | "synthesizing" | "draft" | "sent";

const LogoMark = () => (
  <svg width="16" height="16" viewBox="0 0 40 40" fill="none">
    <rect width="40" height="40" rx="10" fill="#F7632C"/>
    <path d="M10 14 H30" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M10 20 H30" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M10 26 H21" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M24 23.5 L28 26 L24 28.5" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default function HeroMobileDemo() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [phase, setPhase] = useState<Phase>("idle");
  const [synthStep, setSynthStep] = useState(0);
  const [sentSet, setSentSet] = useState<Set<number>>(new Set());
  const [userInteracted, setUserInteracted] = useState(false);
  const [inView, setInView] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const synthRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const item = FEED[activeIdx];
  const steps = item.synthSteps;

  const clear = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    if (synthRef.current) clearInterval(synthRef.current);
  };

  /* Intersection observer — pause when hero scrolls out, restart when back */
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        const visible = entry.isIntersecting;
        setInView(visible);
        if (visible) {
          // Reset to auto-play from the top when scrolled back in
          setUserInteracted(false);
          setActiveIdx(0);
          setSentSet(new Set());
          setPhase("idle");
          setSynthStep(0);
        } else {
          clear();
        }
      },
      { threshold: 0.25 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const startSynthesis = () => {
    setPhase("synthesizing");
    setSynthStep(0);
    let step = 0;
    synthRef.current = setInterval(() => {
      step++;
      if (step >= steps.length) {
        clearInterval(synthRef.current!);
        timerRef.current = setTimeout(() => setPhase("draft"), 300);
      } else {
        setSynthStep(step);
      }
    }, 500);
  };

  const advance = () => {
    clear();
    timerRef.current = setTimeout(() => {
      setPhase("idle");
      setSynthStep(0);
      setActiveIdx(i => (i + 1) % FEED.length);
    }, 500);
  };

  const handleSend = () => {
    clear();
    setSentSet(s => new Set(s).add(item.id));
    setPhase("sent");
    timerRef.current = setTimeout(advance, 1000);
  };

  const handleCardClick = (idx: number) => {
    if (idx === activeIdx && (phase === "synthesizing" || phase === "draft")) return;
    clear();
    setUserInteracted(true);   // stop auto-play on any interaction
    setActiveIdx(idx);
    setPhase("idle");
    setSynthStep(0);
    timerRef.current = setTimeout(startSynthesis, 400);
  };

  /* Auto-play — only when in view AND user hasn't interacted.
     IMPORTANT: cleanup must NOT call clear() here — that would kill the
     synthRef interval the moment phase changes to "synthesizing".
     Instead we return a closure that only cancels the specific timer
     set in this effect run, leaving the interval untouched. */
  useEffect(() => {
    if (!inView || userInteracted) return;
    if (phase === "idle") {
      const t = setTimeout(startSynthesis, 1000);
      timerRef.current = t;
      return () => clearTimeout(t);
    }
    if (phase === "draft") {
      const t = setTimeout(handleSend, 2500);
      timerRef.current = t;
      return () => clearTimeout(t);
    }
    // "synthesizing" / "sent": interval already running or advance timer set —
    // do not schedule anything new and do NOT register a cleanup that clears them.
  }, [phase, activeIdx, userInteracted, inView]);

  /* Resume auto-play 10 s after last interaction (while still in view) */
  useEffect(() => {
    if (!userInteracted || !inView) return;
    const t = setTimeout(() => {
      setUserInteracted(false);
      setPhase("idle");
    }, 10_000);
    return () => clearTimeout(t);
  }, [userInteracted, activeIdx, inView]);

  const now = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  const pendingCount = FEED.length - sentSet.size;

  return (
    <div ref={containerRef} className="relative flex justify-center items-center select-none">
      {/* Subtle glow */}
      <div className="absolute inset-0 rounded-[3rem] bg-primary/8 blur-2xl scale-75 -z-10" />

      {/* Phone shell */}
      <div
        className="relative w-[258px] h-[548px] rounded-[2.8rem] border-[6px] border-gray-800 bg-gray-800 overflow-hidden"
        style={{ boxShadow: "0 28px 72px rgba(0,0,0,0.32), 0 0 0 1px rgba(255,255,255,0.05) inset" }}
      >
        {/* Side buttons */}
        <div className="absolute -left-[8px] top-20 w-[4px] h-6 bg-gray-700 rounded-l-sm" />
        <div className="absolute -left-[8px] top-32 w-[4px] h-9 bg-gray-700 rounded-l-sm" />
        <div className="absolute -right-[8px] top-24 w-[4px] h-12 bg-gray-700 rounded-r-sm" />

        {/* Screen */}
        <div className="w-full h-full bg-[#faf8f5] rounded-[2.2rem] overflow-hidden flex flex-col">

          {/* Status bar */}
          <div className="flex items-center justify-between px-5 pt-3 pb-0.5 shrink-0">
            <span className="text-[9px] font-semibold text-gray-700">{now}</span>
            <div className="flex items-center gap-1">
              <Wifi size={8} className="text-gray-700" />
              <Battery size={10} className="text-gray-700" />
            </div>
          </div>

          {/* App header */}
          <div className="flex items-center justify-between px-3.5 py-1.5 border-b border-gray-100 shrink-0">
            <div className="flex items-center gap-1.5">
              <LogoMark />
              <span className="text-[12px] font-bold text-[#F7632C]">Scroll</span>
            </div>
            <span className="text-[9px] font-mono text-gray-400 bg-gray-100 rounded-full px-2 py-0.5">
              {pendingCount} pending
            </span>
          </div>

          {/* Feed — scrollable */}
          <div className="flex-1 overflow-y-auto overflow-x-hidden no-scrollbar pt-2">
            {FEED.map((card, idx) => {
              const isActive = idx === activeIdx;
              const isSent = sentSet.has(card.id);

              return (
                <motion.div
                  key={card.id}
                  layout
                  onClick={() => !isSent && handleCardClick(idx)}
                  className={`w-full border-b transition-colors cursor-pointer overflow-hidden ${
                    isSent
                      ? "opacity-30 bg-white border-gray-100"
                      : isActive
                      ? "bg-orange-50/60 border-orange-100"
                      : "bg-white border-gray-100 hover:bg-gray-50/60"
                  }`}
                >
                  {/* Card header */}
                  <div className="flex items-start gap-2 px-2.5 pt-2 pb-1">
                    <div className="mt-0.5 shrink-0"><card.Icon /></div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-1 mb-0.5">
                        <p className="text-[10px] font-semibold text-gray-800 truncate leading-tight">
                          {card.subject}
                        </p>
                        {isSent
                          ? <Check size={9} className="text-green-500 shrink-0" />
                          : <span className={`text-[7px] font-semibold px-1.5 py-0.5 rounded-full shrink-0 ${TAG_COLORS[card.tag]}`}>{card.tag}</span>
                        }
                      </div>
                      <p className="text-[8px] text-gray-400 truncate">{card.from} · {card.time}</p>
                    </div>
                  </div>

                  {/* Preview on inactive cards */}
                  {!isActive && !isSent && (
                    <p className="px-2.5 pb-2 text-[8px] text-gray-400 truncate leading-relaxed">
                      {card.preview}
                    </p>
                  )}

                  {/* Active card expanded */}
                  <AnimatePresence mode="wait">
                    {isActive && !isSent && (
                      <motion.div
                        key={phase}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        {phase === "synthesizing" && (
                          <div className="px-2.5 pb-2.5">
                            <div className="flex items-center gap-1.5 mb-1.5">
                              <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                              >
                                <Sparkles size={9} className="text-[#F7632C]" />
                              </motion.div>
                              <span className="text-[8px] font-mono text-[#F7632C]">
                                {steps[synthStep]}
                              </span>
                            </div>
                            <div className="flex gap-0.5">
                              {steps.map((_, i) => (
                                <motion.div
                                  key={i}
                                  className="h-0.5 flex-1 rounded-full"
                                  animate={{ backgroundColor: i <= synthStep ? "#F7632C" : "#e5e7eb" }}
                                  transition={{ duration: 0.25 }}
                                />
                              ))}
                            </div>
                          </div>
                        )}

                        {phase === "draft" && (
                          <div className="px-2.5 pb-2.5">
                            <div className="flex items-center gap-1 mb-1.5">
                              <div className="h-1.5 w-1.5 rounded-full bg-green-500" />
                              <span className="text-[8px] font-mono text-green-600 font-semibold">Draft ready</span>
                            </div>
                            <div className="bg-gray-50 rounded-lg p-2 mb-2 border border-gray-100">
                              <p className="text-[8px] text-gray-600 leading-relaxed line-clamp-3">
                                {card.draft}
                              </p>
                            </div>
                            <div className="flex gap-1.5">
                              <motion.button
                                whileTap={{ scale: 0.95 }}
                                onClick={(e) => { e.stopPropagation(); handleSend(); }}
                                className="flex-1 flex items-center justify-center gap-1 bg-[#F7632C] text-white text-[8px] font-semibold rounded-lg py-1.5"
                              >
                                <Send size={7} /> Send
                              </motion.button>
                              <motion.button
                                whileTap={{ scale: 0.95 }}
                                onClick={(e) => { e.stopPropagation(); setUserInteracted(true); setPhase("idle"); }}
                                className="flex items-center justify-center gap-1 bg-gray-100 text-gray-600 text-[8px] font-semibold rounded-lg py-1.5 px-2.5"
                              >
                                <Edit3 size={7} /> Edit
                              </motion.button>
                            </div>
                          </div>
                        )}

                        {phase === "sent" && (
                          <div className="px-2.5 pb-2.5">
                            <motion.div
                              initial={{ scale: 0.8, opacity: 0 }}
                              animate={{ scale: 1, opacity: 1 }}
                              className="flex items-center gap-1.5"
                            >
                              <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center">
                                <Check size={9} className="text-green-600" />
                              </div>
                              <span className="text-[8px] font-semibold text-green-600">Sent!</span>
                            </motion.div>
                          </div>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom tab bar */}
          <div className="border-t border-gray-100 bg-white px-4 pt-2 pb-3 flex justify-around shrink-0">
            {[
              { label: "Feed", Icon: Inbox, active: true },
              { label: "Done", Icon: CheckCircle2, active: false },
              { label: "Stats", Icon: BarChart3, active: false },
            ].map(({ label, Icon, active }) => (
              <div key={label} className="flex flex-col items-center gap-1">
                <Icon size={14} className={active ? "text-[#F7632C]" : "text-gray-400"} />
                <span className={`text-[8px] font-medium ${active ? "text-[#F7632C]" : "text-gray-400"}`}>{label}</span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
