import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Zap, Brain } from "lucide-react";
import { useWaitlist } from "@/context/WaitlistContext";

const HeroSection = () => {
  const { openWaitlist } = useWaitlist();
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
            ZERO DATA LEAKAGE · Your CLOUD, Your DATA.
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-black tracking-tight leading-snug mb-5 text-foreground"
        >
          <span className="block text-xl sm:text-2xl md:text-3xl">Stop Switching Apps to Find What's Urgent.</span>
          <span className="block text-3xl sm:text-4xl md:text-[2.75rem] text-gradient mt-2 pb-1">Start Getting It Done.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base md:text-lg text-muted-foreground max-w-[420px] mx-auto mb-3 leading-relaxed"
        >
          One proactive feed with Key Information, Updates, and Decisions, auto-generated from your own context.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.28 }}
          className="text-lg md:text-xl font-semibold mb-10 text-primary"
        >
          Review. Edit. Send.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
        >
          <Button variant="hero" size="xl" onClick={openWaitlist}>
            Join Waitlist
            <ArrowRight className="ml-1" size={18} />
          </Button>
          <Button variant="hero-outline" size="xl" asChild>
            <a href="/demo/index.html" target="_blank" rel="noopener noreferrer">See It In Action</a>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto"
        >
          {[
            { icon: Brain, label: "Neutral Brain", desc: "Cross-platform synthesis" },
            { icon: Shield, label: "In-VPC", desc: "Your VPC, Zero Data Leakage" },
            { icon: Zap, label: "Write-Back", desc: "Review & Send in Seconds." },
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