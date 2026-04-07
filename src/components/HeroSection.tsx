import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Zap, Brain } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Soft warm gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/[0.04]" />

      <div className="container relative z-10 text-center max-w-5xl py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-mono text-muted-foreground tracking-wider uppercase card-shadow">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Sovereign AI · In-VPC Deployment
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tight leading-[1.05] mb-6 text-foreground"
        >
          Never Start from the{" "}
          <span className="text-gradient">Blank Page</span> Again.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Action Inbox synthesizes your emails, chats, meetings & SaaS tools
          into proactive first drafts—deployed inside your private cloud. 
          Move from <strong className="text-foreground">Context-Gatherer</strong> to{" "}
          <strong className="text-foreground">Context-User</strong>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <Button variant="hero" size="xl" asChild>
            <a href="#book-demo">
              Book a Demo
              <ArrowRight className="ml-1" size={18} />
            </a>
          </Button>
          <Button variant="hero-outline" size="xl" asChild>
            <a href="/demo/" target="_blank" rel="noopener noreferrer">See It In Action</a>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto"
        >
          {[
            { icon: Brain, label: "Neutral Brain", desc: "Cross-silo synthesis" },
            { icon: Shield, label: "In-VPC", desc: "Your cloud, your data" },
            { icon: Zap, label: "Write-Back", desc: "Updates tools directly" },
          ].map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-3 rounded-2xl border border-border/60 bg-card px-5 py-4 card-shadow"
            >
              <div className="h-9 w-9 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <item.icon className="text-primary" size={18} />
              </div>
              <div className="text-left">
                <p className="text-sm font-semibold text-foreground">{item.label}</p>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;