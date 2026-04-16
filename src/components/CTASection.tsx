import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useWaitlist } from "@/context/WaitlistContext";

const CTASection = () => {
  const { openWaitlist } = useWaitlist();

  return (
    <>
      {/* ── Bridge connector ── */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="flex items-center gap-4 px-6 md:px-16 py-8 max-w-3xl mx-auto"
      >
        <div className="flex-1 h-px bg-border/50" />
        <p className="text-xs text-primary italic tracking-wide text-center whitespace-nowrap">
          The window is open. Here's how to get through it first.
        </p>
        <div className="flex-1 h-px bg-border/50" />
      </motion.div>

      {/* ── Dark CTA section ── */}
      <section id="cta" className="relative bg-foreground py-20 md:py-28">
        <div className="container max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center flex flex-col items-center gap-5"
          >
            {/* Status pill */}
            <div className="inline-flex items-center gap-2 rounded-full bg-white/[0.07] border border-white/10 px-4 py-1.5">
              <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs text-white/60 font-mono tracking-wide">
                Early access open — limited spots available
              </span>
            </div>

            {/* Badge */}
            <span className="inline-flex items-center gap-2 text-xs font-mono text-primary uppercase tracking-wider">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Get Early Access
            </span>

            {/* Headline */}
            <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-tight text-white">
              Give your team their day back.<br />
              <span className="text-gradient">Starting this week.</span>
            </h2>

            {/* Subheadline */}
            <p className="text-white/55 text-base md:text-lg max-w-md leading-relaxed">
              Scroll deploys inside your own cloud in under 48 hours. Your team gets
              a proactive feed that handles the work before they even open a tab.
            </p>

            {/* Stat pill */}
            <div className="inline-flex items-center gap-2 rounded-full bg-white/[0.07] border border-white/10 px-5 py-2">
              <span className="text-sm font-bold text-white">4+ hours</span>
              <span className="text-sm text-white/50">saved per person, per day</span>
            </div>

            {/* CTA button */}
            <Button
              size="xl"
              onClick={openWaitlist}
              className="mt-2 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-colors"
            >
              Join the waitlist
              <ArrowRight className="ml-1" size={17} />
            </Button>

            {/* Disclaimer */}
            <p className="text-xs text-white/30 tracking-wide">
              No credit card required · Runs inside your own cloud · Your data never leaves your walls
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );

};

export default CTASection;
