import { motion } from "framer-motion";
import { AlertTriangle, Clock, ShieldAlert, Copy } from "lucide-react";

const stats = [
  { value: "60%", label: "of the workday lost to app-toggling" },
  { value: "70+", label: "siloed apps per enterprise" },
  { value: "$100K+", label: "per year wasted on manual synthesis" },
];

const painPoints = [
  {
    icon: Copy,
    title: "The Human Clipboard",
    desc: "Workers spend hours copy-pasting between Slack, Jira, Salesforce, and spreadsheets just to answer one question.",
  },
  {
    icon: ShieldAlert,
    title: "Shadow AI Crisis",
    desc: "Employees leak company secrets into public AI models just to survive their workload. Your IP is already at risk.",
  },
  {
    icon: Clock,
    title: "The Synthesis Gap",
    desc: "Project Managers spend 4+ hours daily translating Slack chatter into ticket updates. Sales ops manually merge emails with CRM records.",
  },
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
            The Problem
          </span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4 text-foreground">
            Modern Work is <span className="text-gradient">Broken</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            You've been reduced to human middleware—toggling between apps, copying data, and praying nothing falls through the cracks.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center rounded-2xl border border-border/60 bg-card py-8 px-6 card-shadow"
            >
              <p className="text-4xl md:text-5xl font-black text-gradient mb-2">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {painPoints.map((point, i) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl border border-border/60 bg-card p-6 card-shadow"
            >
              <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <point.icon className="text-primary" size={20} />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{point.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{point.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;