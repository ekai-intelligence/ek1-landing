import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    step: "01",
    title: "Reads everything coming your way",
    desc: "Scroll connects to every tool your team uses and builds context across every message, ticket, meeting, and doc before anyone opens a tab.",
    tag: "Neutral synthesis",
  },
  {
    step: "02",
    title: "Prepares every action. You just approve.",
    desc: "Jira tickets, Confluence pages, calendar invites, PR approvals, status replies — Scroll figures out what needs to happen across your entire stack and has it ready before you know you need it.",
    tag: "Proactive actions",
  },
  {
    step: "03",
    title: "Gets it done inside your walls",
    desc: "One click to push back to Slack, Jira, or email. All processed inside your private cloud. Nothing leaves your infrastructure. Ever.",
    tag: "Secure write-back",
  },
];

const SolutionSection = () => {
  return (
    <section id="solution" className="relative py-24 md:py-32 bg-muted/40">
      <div className="container relative max-w-6xl">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 text-xs font-mono text-primary uppercase tracking-wider mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            The Solution
          </span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4 text-foreground leading-tight">
            Scroll handles the work.<br />
            <span className="text-gradient">Your team makes the calls.</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            One proactive feed that reads across every tool, writes every first draft,
            and gets it done inside your own cloud.
          </p>
        </motion.div>

        {/* ── Step cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {steps.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="relative flex flex-col rounded-2xl border border-border/60 bg-card p-7 card-shadow hover:shadow-lg transition-shadow duration-300"
            >
              {/* Step number + arrow */}
              <div className="flex items-center gap-2 mb-5">
                <span className="text-xs font-mono font-semibold text-muted-foreground/70 tracking-widest">
                  {step.step}
                </span>
                {i < steps.length - 1 && (
                  <ArrowRight size={13} className="text-muted-foreground/40" />
                )}
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-foreground mb-3 leading-snug">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                {step.desc}
              </p>

              {/* Bottom tag */}
              <div className="mt-6">
                <span className="inline-flex items-center text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                  {step.tag}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button variant="hero-outline" size="xl" asChild>
            <a href="/demo/index.html" target="_blank" rel="noopener noreferrer">
              See it in action
              <ArrowRight className="ml-1" size={16} />
            </a>
          </Button>
        </motion.div>

      </div>
    </section>
  );
};

export default SolutionSection;
