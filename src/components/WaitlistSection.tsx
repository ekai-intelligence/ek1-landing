import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useWaitlist } from "@/context/WaitlistContext";

const WaitlistSection = () => {
  const { openWaitlist } = useWaitlist();

  return (
    <section id="waitlist" className="relative py-24 md:py-32 border-t border-border/40">
      <div className="container max-w-lg text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-6"
        >
          <span className="inline-flex items-center gap-2 text-xs font-mono text-primary uppercase tracking-widest">
            Early Access
          </span>

          <h2 className="text-3xl md:text-4xl font-black tracking-tight text-foreground">
            Join the waitlist
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            We're onboarding a select group of enterprises first.
            <br className="hidden sm:block" />
            Tell us where you're stuck — we'll be in touch.
          </p>

          <Button variant="hero" size="xl" onClick={openWaitlist}>
            Request Early Access
            <ArrowRight size={18} className="ml-1" />
          </Button>

          <p className="text-xs text-muted-foreground">
            No credit card · In-VPC deployment · Enterprise-grade security
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WaitlistSection;
