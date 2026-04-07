import { motion } from "framer-motion";
import { CheckCircle2, XCircle } from "lucide-react";

const wiredFor = ["Scanning feeds", "Pattern-matching", "Picking signals from noise"];
const forcedTo = ["Search across 70+ tools", "File, thread & archive", "Reconstruct context manually"];

const insights = [
  {
    number: "01",
    heading: "Built to scan. Not to search.",
    body:
      "200,000 years of evolution didn't wire us to manage inboxes or hunt through Jira backlogs. The human brain is a pattern-recognition engine—it thrives on a feed of signals, not a filing cabinet of threads. When information flows toward you, cognition is effortless.",
  },
  {
    number: "02",
    heading: "Enterprise software fights your biology.",
    body:
      "Slack channels, email folders, ticket queues—every tool was designed around storage, not flow. Workers spend 4+ hours a day context-switching: copy-pasting between apps, reconstructing timelines, re-reading threads just to write a single update. That's the synthesis tax. It's entirely man-made.",
  },
  {
    number: "03",
    heading: "Scroll restores the natural flow.",
    body:
      "Instead of hunting context across a fragmented stack, Scroll surfaces it—synthesized, relevant, and pre-drafted. Your feed. Your signal. Ready before you start typing. No folders. No threads. Just the next action, waiting.",
  },
];

const ThesisSection = () => {
  return (
    <section id="thesis" className="relative py-24 md:py-36 bg-muted/40 overflow-hidden">
      {/* Subtle grid texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="container relative max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-20"
        >
          <span className="inline-flex items-center gap-2 text-xs font-mono text-primary uppercase tracking-widest mb-5">
            — The Thesis
          </span>
          <h2 className="font-mono text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight leading-[1.1] text-foreground max-w-3xl">
            "Humans are foragers,<br className="hidden sm:block" /> not librarians."
          </h2>
        </motion.div>

        {/* Two-column body */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-start">

          {/* Left — evidence card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-2 sticky top-24"
          >
            <div className="rounded-2xl border border-border/60 bg-card p-8 card-shadow font-mono">
              {/* Stat */}
              <div className="mb-8 pb-8 border-b border-border/40">
                <p className="text-5xl font-bold text-primary leading-none mb-1">200,000</p>
                <p className="text-xs text-muted-foreground uppercase tracking-widest mt-2">
                  years of human evolution
                </p>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                  The brain was optimized for one thing: moving through an environment, reading signals, and acting fast.
                </p>
              </div>

              {/* Brain wired for */}
              <div className="mb-6">
                <p className="text-[11px] font-mono text-primary uppercase tracking-widest mb-3">
                  Brain wired for
                </p>
                <ul className="space-y-2">
                  {wiredFor.map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-sm text-foreground">
                      <CheckCircle2 size={14} className="text-primary shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Enterprise forces */}
              <div>
                <p className="text-[11px] font-mono text-muted-foreground uppercase tracking-widest mb-3">
                  Enterprise software forces
                </p>
                <ul className="space-y-2">
                  {forcedTo.map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                      <XCircle size={14} className="text-destructive/60 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sticky-note annotation */}
            <motion.div
              initial={{ opacity: 0, rotate: -1 }}
              whileInView={{ opacity: 1, rotate: -1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-4 ml-4 bg-yellow-50 border border-yellow-200 rounded-sm p-4 font-mono text-xs text-yellow-900 leading-relaxed shadow-sm"
              style={{ transform: "rotate(-1.5deg)" }}
            >
              "Cognitive load drops the moment information comes <em>to</em> you. That's not a product feature — that's neuroscience."
            </motion.div>
          </motion.div>

          {/* Right — thesis insights */}
          <div className="lg:col-span-3 flex flex-col gap-10">
            {insights.map((insight, i) => (
              <motion.div
                key={insight.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="group"
              >
                <div className="flex items-start gap-5">
                  <span className="font-mono text-xs text-primary/50 mt-1 shrink-0 pt-0.5">
                    {insight.number}
                  </span>
                  <div>
                    <h3 className="font-mono text-xl md:text-2xl font-semibold text-foreground mb-3 leading-snug">
                      {insight.heading}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-base">
                      {insight.body}
                    </p>
                  </div>
                </div>
                {i < insights.length - 1 && (
                  <div className="mt-10 border-b border-border/30" />
                )}
              </motion.div>
            ))}

            {/* Pull quote */}
            <motion.blockquote
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-2 pl-5 border-l-2 border-primary/40 font-mono text-sm text-muted-foreground italic leading-relaxed"
            >
              "The synthesis tax is not a productivity problem. It's a product problem.
              <br />
              Scroll is the fix."
            </motion.blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThesisSection;
