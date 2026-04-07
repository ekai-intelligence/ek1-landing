import { motion } from "framer-motion";
import { TrendingUp, Building2, Gavel } from "lucide-react";

const OpportunitySection = () => {
  return (
    <section id="opportunity" className="relative py-24 md:py-32 bg-muted/40">
      <div className="container relative max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 text-xs font-mono text-primary uppercase tracking-wider mb-4">
            <TrendingUp size={14} />
            Why Now
          </span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4 text-foreground">
            The <span className="text-gradient">$195B</span> Sovereign Frontier
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Enterprises demand AI power without the security purgatory. The market is ready.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-border/60 bg-card p-8 card-shadow"
          >
            <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
              <Building2 className="text-primary" size={24} />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">The First-Party Advantage</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Because Scroll lives In-VPC, we are not an "external tool"—we are an extension of the customer's internal infrastructure. No third-party cloud audits. No security purgatory.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-border/60 bg-card p-8 card-shadow"
          >
            <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
              <Gavel className="text-primary" size={24} />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">The Legal Mandate</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              New regulations (EU Data Act, DMA) force SaaS giants to grant data portability. They can block third-party startups—but they cannot block the customer's own In-VPC engine from accessing their own data.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OpportunitySection;