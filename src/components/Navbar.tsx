import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "@/components/Logo";

const navLinks = [
  { label: "Problem", href: "#problem" },
  { label: "Solution", href: "#solution" },
  { label: "Security", href: "#security" },
  { label: "Why Now", href: "#opportunity" },
];

const DEMO_URL = "https://calendar.google.com/calendar/appointments/schedules/AcZssZ0Bp7akyMIraUFtytlgVTAGtZ8heZm7J451cIuYaurqSk2UsPjjKXJA_LaGrXu8zS-gk7Cp7Eir";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/40">
      <div className="container flex h-16 items-center justify-between">
        <a href="/" aria-label="Scroll home">
          <Logo size={34} variant="full" />
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Button variant="hero" size="default" asChild>
            <a href={DEMO_URL} target="_blank" rel="noopener noreferrer">Book a Demo</a>
          </Button>
        </div>

        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden border-t border-border/40 bg-background/95 backdrop-blur-xl overflow-hidden"
          >
            <div className="container py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground transition-colors py-2"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button variant="hero" size="lg" asChild>
                <a href={DEMO_URL} target="_blank" rel="noopener noreferrer">Book a Demo</a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;