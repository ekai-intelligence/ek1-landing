import { motion } from "framer-motion";
import { Unlock, Zap } from "lucide-react";

const cards = [
  {
    icon: Unlock,
    title: "Regulation just opened your data up",
    desc: "New data portability laws (EU Data Act, DMA) now require SaaS platforms to grant you access to your own data. Your In-VPC engine can connect to everything in your stack. No third party can block it. That's new.",
    tag: null,
  },
  {
    icon: Zap,
    title: "AI just got good enough to act on it",
    desc: "For the first time, AI can synthesize context across your entire stack, figure out what needs to happen, and take meaningful action on your behalf. This capability didn't exist 18 months ago. The timing is not a coincidence.",
    tag: "$195B sovereign AI market by 2030",
  },
];

const OpportunitySection = () => {
  return (
    <>
      {/* ── Bridge / connector text ── */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center py-6 bg-muted/40"
      >
        <p className="text-xs text-muted-foreground/50 italic tracking-wide">
          So why now?
        </p>
      </motion.div>

      <section id="opportunity" className="relative py-16 md:py-24 bg-muted/40">
        <div className="container relative max-w-5xl">

          {/* ── Header ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-flex items-center gap-2 text-xs font-mono text-primary uppercase tracking-wider mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Why Now
            </span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4 text-foreground leading-tight">
              Two things just changed.<br />
              <span className="text-gradient">Both in your favor.</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              AI got powerful enough to act on your entire stack. And regulation just
              made it impossible for anyone to block your own data from your own tools.
              The window is open.
            </p>
          </motion.div>

          {/* ── 2-col cards ── */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
            {cards.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="flex flex-col rounded-2xl border border-border/60 bg-card p-7 card-shadow"
              >
                <div className="h-9 w-9 rounded-lg bg-primary/10 flex items-center justify-center mb-5 shrink-0">
                  <card.icon className="text-primary" size={17} />
                </div>
                <h3 className="text-base font-bold text-foreground mb-2 leading-snug">
                  {card.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                  {card.desc}
                </p>
                {card.tag && (
                  <div className="mt-5">
                    <span className="inline-flex items-center text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {card.tag}
                    </span>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* ── Bottom callout ── */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25 }}
            className="rounded-2xl border border-border/60 bg-card px-8 py-6 card-shadow text-center"
          >
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              The teams that move now will have a compounding head start.{" "}
              <span className="font-bold text-foreground">
                The ones that wait will be playing catch-up in a market that's already moved.
              </span>
            </p>
          </motion.div>

        </div>
      </section>
    </>
  );
};

export default OpportunitySection;
