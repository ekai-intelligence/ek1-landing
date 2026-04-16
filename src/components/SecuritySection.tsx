import { motion } from "framer-motion";
import { Server, Eye, CheckCircle, ShieldOff } from "lucide-react";

const features = [
  {
    icon: Server,
    title: "Runs inside your cloud, not ours",
    desc: "Scroll deploys directly into your VPC. Your data never crosses our servers, never enters our systems, and never leaves your perimeter. Not as a policy. As an architecture.",
  },
  {
    icon: Eye,
    title: "We never see your data. By design.",
    desc: "Unlike every SaaS AI tool, we built Scroll so it is architecturally impossible for us to access your data. Your prompts, your context, your outputs — all yours. Always.",
  },
  {
    icon: CheckCircle,
    title: "Passes your security review before you ask",
    desc: "EU Data Act, DMA, SOC 2, GDPR — compliance is built in, not bolted on. Your security team will have questions. We already have the answers.",
  },
  {
    icon: ShieldOff,
    title: "Your team stops using public AI. Because they don't need to.",
    desc: "Give your team a secure, sanctioned alternative to pasting company data into ChatGPT. Full audit trails. Full control. No more shadow AI flying under the radar.",
  },
];

const SecuritySection = () => {
  return (
    <>
      {/* ── Bridge / connector text ── */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center py-6"
      >
        <p className="text-xs text-muted-foreground/50 italic tracking-wide">
          And before your security team asks...
        </p>
      </motion.div>

      <section id="security" className="relative py-16 md:py-24">
        <div className="container max-w-6xl">

          {/* ── Header ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-flex items-center gap-2 text-xs font-mono text-primary uppercase tracking-wider mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Security First
            </span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4 text-foreground leading-tight">
              The only AI your security team<br />
              <span className="text-gradient">will approve without a fight.</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Most AI tools ask you to trust them with your data. Scroll runs inside
              your own cloud, so you never have to.
            </p>
          </motion.div>

          {/* ── 2×2 feature grid ── */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-4 rounded-2xl border border-border/60 bg-card p-6 card-shadow"
              >
                <div className="h-9 w-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                  <feature.icon className="text-primary" size={17} />
                </div>
                <div>
                  <h3 className="text-base font-bold text-foreground mb-1.5 leading-snug">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
};

export default SecuritySection;
