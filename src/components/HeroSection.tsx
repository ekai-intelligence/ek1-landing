import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Zap, Brain } from "lucide-react";
import { useWaitlist } from "@/context/WaitlistContext";
import HeroMobileDemo from "@/components/HeroMobileDemo";

const HeroSection = () => {
  const { openWaitlist } = useWaitlist();
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Soft warm gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/[0.04]" />

      <div className="container relative z-10 max-w-6xl py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 lg:gap-10 items-center">

          {/* ── LEFT: Text content ── */}
          <div className="text-center lg:text-left">
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
              <span className="block text-xl sm:text-2xl lg:text-[1.6rem] whitespace-nowrap">9 tools. 100's of messages.</span>
              <span className="block text-3xl sm:text-4xl lg:text-[2.6rem] text-gradient mt-1.5 pb-1 whitespace-nowrap">One feed to handle all.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base md:text-lg text-muted-foreground max-w-[420px] mx-auto lg:mx-0 mb-3 leading-relaxed"
            >
              Scroll's proactive feed surfaces what matters, drafts the response, and gets it done.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.28 }}
              className="text-lg md:text-xl font-semibold mb-8 text-primary"
            >
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 mb-10"
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
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="grid grid-cols-3 gap-3 max-w-sm mx-auto lg:mx-0"
            >
              {[
                { icon: Brain, label: "Neutral Brain", desc: "Cross-platform" },
                { icon: Shield, label: "In-VPC", desc: "Your cloud" },
                { icon: Zap, label: "Write-Back", desc: "Seconds to send" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex flex-col items-center lg:items-start gap-1.5 rounded-2xl border border-border/60 bg-card px-3 py-3 card-shadow"
                >
                  <div className="h-7 w-7 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <item.icon className="text-primary" size={14} />
                  </div>
                  <div className="text-center lg:text-left">
                    <p className="text-xs font-semibold text-foreground">{item.label}</p>
                    <p className="text-[10px] text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── RIGHT: Mobile demo ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="flex justify-center"
          >
            <HeroMobileDemo />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
