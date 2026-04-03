import { motion } from "framer-motion";
import { Shield, Lock, Server, Scale } from "lucide-react";

const features = [
  {
    icon: Server,
    title: "In-VPC Deployment",
    desc: "Action Inbox runs inside your cloud. No data leaves your perimeter—ever. You're not adopting an external tool; you're extending your own infrastructure.",
  },
  {
    icon: Lock,
    title: "Zero Data Exfiltration",
    desc: "Unlike SaaS AI tools, we never see your data. Your models, your prompts, your outputs—all sovereign.",
  },
  {
    icon: Scale,
    title: "Regulatory Compliant",
    desc: "EU Data Act, DMA, SOC 2, GDPR—built-in compliance. Enterprises can't block their own In-VPC engine from accessing their own data.",
  },
  {
    icon: Shield,
    title: "End Shadow AI",
    desc: "Give your teams a secure alternative to pasting company data into public ChatGPT. Sanctioned AI with full audit trails.",
  },
];

const SecuritySection = () => {
  return (
    <section id="security" className="relative py-24 md:py-32">
      <div className="container max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 text-xs font-mono text-primary uppercase tracking-wider mb-4">
            <Shield size={14} />
            Security First
          </span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4 text-foreground">
            Your Cloud. <span className="text-gradient">Your Rules.</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We don't ask you to trust us with your data. We deploy inside your infrastructure so trust isn't required.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex gap-5 rounded-2xl border border-border/60 bg-card p-6 card-shadow"
            >
              <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <feature.icon className="text-primary" size={22} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground mb-1">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;