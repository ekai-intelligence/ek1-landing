import { motion } from "framer-motion";
import { AlertTriangle, Clock, ShieldAlert, Copy } from "lucide-react";

const stats = [
  { value: "3x", label: "your team's output without hiring a single person" },
  { value: "1 feed", label: "instead of 9 tools fighting for attention" },
  { value: "$4.5M", label: "average cost of an enterprise data breach" },
];

const painPoints = [
  {
    icon: Copy,
    title: "The Human Clipboard",
    desc: "Workers spend hours copy-pasting between Slack, Jira, Salesforce, and spreadsheets just to answer one question.",
  },
  {
    icon: Clock,
    title: "The Synthesis Gap",
    desc: "Project Managers spend 4+ hours daily translating Slack chatter into ticket updates. Sales ops manually merge emails with CRM records.",
  },
  {
    icon: ShieldAlert,
    title: "Shadow AI Crisis",
    desc: "Employees leak company secrets into public AI models just to survive their workload. Your IP is already at risk.",
  }
];

const ProblemSection = () => {
  return (
    <section id="problem" className="relative py-24 md:py-32">
      <div className="container max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 text-xs font-mono text-primary uppercase tracking-wider mb-4">
            <AlertTriangle size={14} />
            The ROI
          </span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4 text-foreground">
            Your team didn't sign up to be<br />
            <span className="text-gradient">human middleware.</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Your tools were onboarded to help your team.<br />
            Somehow your team ended up working for them.
          </p>
        </motion.div>

        {/* Single grid — each column owns its stat + explanation card, so they stay paired on every breakpoint */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col gap-4"
            >
              {/* Stat */}
              <div className="text-center rounded-2xl border border-border/60 bg-card px-6 card-shadow h-[168px] flex flex-col items-center justify-center">
                <p className="text-3xl md:text-4xl font-black text-gradient mb-2">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>

              {/* Paired explanation card */}
              <div className="rounded-2xl border border-border/60 bg-card p-6 card-shadow flex-1">
                <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  {(() => { const Icon = painPoints[i].icon; return <Icon className="text-primary" size={20} />; })()}
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{painPoints[i].title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{painPoints[i].desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;