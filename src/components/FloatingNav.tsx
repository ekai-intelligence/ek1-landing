import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  AlertTriangle,
  Lightbulb,
  Shield,
  TrendingUp,
  PhoneCall,
} from "lucide-react";

const sections = [
  { id: "hero", icon: Home, label: "Home" },
  { id: "problem", icon: AlertTriangle, label: "Problem" },
  { id: "solution", icon: Lightbulb, label: "Solution" },
  { id: "security", icon: Shield, label: "Security" },
  { id: "opportunity", icon: TrendingUp, label: "Opportunity" },
  { id: "book-demo", icon: PhoneCall, label: "Book Demo" },
];

const FloatingNav = () => {
  const [activeId, setActiveId] = useState("hero");
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          // Pick the one with highest intersection ratio
          const best = visible.reduce((a, b) =>
            a.intersectionRatio > b.intersectionRatio ? a : b
          );
          setActiveId(best.target.id);
        }
      },
      { threshold: 0.3 }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1, duration: 0.4 }}
      className="fixed right-4 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-2 hidden md:flex"
    >
      {sections.map(({ id, icon: Icon, label }) => {
        const isActive = activeId === id;
        return (
          <div key={id} className="relative flex items-center justify-end">
            <AnimatePresence>
              {hoveredId === id && (
                <motion.span
                  initial={{ opacity: 0, x: 8 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 8 }}
                  transition={{ duration: 0.15 }}
                  className="absolute right-12 whitespace-nowrap text-xs font-medium bg-card border border-border/60 text-foreground rounded-lg px-3 py-1.5 card-shadow"
                >
                  {label}
                </motion.span>
              )}
            </AnimatePresence>
            <button
              onClick={() => scrollTo(id)}
              onMouseEnter={() => setHoveredId(id)}
              onMouseLeave={() => setHoveredId(null)}
              className={`h-9 w-9 rounded-full flex items-center justify-center transition-all duration-200 ${
                isActive
                  ? "bg-primary text-primary-foreground shadow-md scale-110"
                  : "bg-card border border-border/60 text-muted-foreground hover:text-foreground hover:border-primary/40 card-shadow"
              }`}
            >
              <Icon size={14} />
            </button>
          </div>
        );
      })}
    </motion.div>
  );
};

export default FloatingNav;
