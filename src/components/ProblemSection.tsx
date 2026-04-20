import { motion } from "framer-motion";

const problems = [
  {
    value: "60%",
    desc: "of your team's day goes to figuring out what needs them",
    subdesc:
      "Not doing the work. Just finding it, triaging it, and routing it to the right place.",
  },
  {
    value: "1 prompt",
    desc: "is all it takes for your IP to end up in a public AI model",
    subdesc:
      "Your team isn't being careless. They're just trying to survive their workload.",
  },
  {
    value: "$100K+",
    desc: "burned every year on work that should never reach a human",
    subdesc:
      "Status updates. Ticket grooming. Translating Slack threads into docs. Every single day.",
  },
];

const ProblemSection = () => {
  return (
    <section id="problem" className="relative py-24 md:py-32">
      <div className="container max-w-5xl">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 text-xs font-mono text-primary uppercase tracking-wider mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            The Hidden Cost
          </span>
          <h2 className="text-2xl md:text-4xl font-black tracking-tight mb-4 text-foreground leading-tight">
            Your tools were hired to help your team.<br />
            <span className="text-gradient">Your team ended up working for them.</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Every app added another inbox. Another tab.<br />
            Another thing to check before anything gets done.
          </p>
        </motion.div>

        {/* ── Stat rows ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="rounded-2xl border border-border/60 bg-card card-shadow overflow-hidden divide-y divide-border/40"
        >
          {problems.map((problem, i) => (
            <motion.div
              key={problem.value}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 + i * 0.1 }}
              className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-10 px-6 sm:px-10 py-7 sm:py-8"
            >
              {/* Stat value — fixed width on sm+ so all rows align */}
              <div className="sm:w-44 shrink-0">
                <p className="text-4xl font-black text-gradient leading-none whitespace-nowrap">
                  {problem.value}
                </p>
              </div>

              {/* Vertical divider — desktop only */}
              <div className="hidden sm:block self-stretch w-px bg-border/40" />

              {/* Description */}
              <div className="flex-1 min-w-0">
                <p className="text-base md:text-[1.05rem] font-semibold text-foreground mb-1 leading-snug">
                  {problem.desc}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {problem.subdesc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ── Footer tagline ── */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.45 }}
          className="text-center text-sm text-muted-foreground italic mt-8"
        >
          This is exactly what{" "}
          <span className="font-semibold text-foreground not-italic">Scroll</span>{" "}
          was built to fix.
        </motion.p>

      </div>
    </section>
  );
};

export default ProblemSection;
