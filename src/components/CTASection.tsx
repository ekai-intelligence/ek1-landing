import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";

const CTASection = () => {
  return (
    <section id="book-demo" className="relative py-24 md:py-32">
      <div className="container relative max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-8">
            <Calendar className="text-primary" size={28} />
          </div>

          <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4 text-foreground">
            Ready to End the{" "}
            <span className="text-gradient">Synthesis Gap?</span>
          </h2>

          <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            See how Scroll can save your team 4+ hours per person per day—deployed securely inside your cloud in under 48 hours.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="xl" asChild>
              <a href="mailto:demo@scrollngo.ai?subject=Demo Request">
                Book a Demo
                <ArrowRight className="ml-1" size={18} />
              </a>
            </Button>
          </div>

          <p className="text-xs text-muted-foreground mt-6">
            No credit card required · In-VPC deployment · Enterprise-grade security
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;