import { motion } from "framer-motion";
import { Inbox, Pen, Send, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    icon: Inbox,
    step: "01",
    title: "Neutral Synthesis",
    desc: "Scroll connects to Teams, Outlook, Jira, Salesforce, and more—synthesizing context across every silo into a single proactive inbox.",
  },
  {
    icon: Pen,
    step: "02",
    title: "Proactive Drafts",
    desc: "Receive pre-written status reports, client replies, and ticket updates—ready for your review. Never start with a blank page again.",
  },
  {
    icon: Send,
    step: "03",
    title: "Secure Write-Back",
    desc: "Using Model Context Protocol (MCP), Scroll updates your systems of record directly. Data never leaves your perimeter.",
  },
];

const SolutionSection = () => {
  return (
    <section id="solution" className="relative py-24 md:py-32 bg-muted/40">
      <div className="container relative max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 text-xs font-mono text-primary uppercase tracking-wider mb-4">
            The Solution
          </span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4 text-foreground">
            From <span className="text-gradient">Context-Gatherer</span> to Context-User
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Scroll is the first Sovereign Action Engine. It synthesizes, drafts, and writes back—all inside your private cloud.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative rounded-2xl border border-border/60 bg-card p-8 card-shadow hover:shadow-lg transition-shadow duration-300"
            >
              <span className="text-xs font-mono text-primary/60 mb-4 block">{step.step}</span>
              <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                <step.icon className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button variant="hero" size="xl" asChild>
            <a href="/demo/index.html" target="_blank" rel="noopener noreferrer">
              See It In Action
              <ArrowRight className="ml-1" size={18} />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionSection;