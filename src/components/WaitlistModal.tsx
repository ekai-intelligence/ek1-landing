import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { useWaitlist } from "@/context/WaitlistContext";

type Status = "idle" | "submitting" | "success" | "error";

const WaitlistModal = () => {
  const { open, closeWaitlist } = useWaitlist();

  const [email, setEmail] = useState("");
  const [problem, setProblem] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && problem.trim().length > 0;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!valid || status === "submitting") return;

    setStatus("submitting");
    setErrorMsg("");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: "7d6c2fea-47ee-4fc1-98e1-bdcb03c39538",
          subject: `Waitlist — ${email}`,
          from_name: email,
          replyto: email,
          email,
          problem,
          to: "hello@yourekai.com",
        }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
      } else {
        throw new Error(data.message || "Submission failed");
      }
    } catch (err: unknown) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  };

  const handleOpenChange = (isOpen: boolean) => {
    if (!isOpen) {
      closeWaitlist();
      // Reset form state after close animation
      setTimeout(() => {
        setEmail("");
        setProblem("");
        setStatus("idle");
        setErrorMsg("");
      }, 300);
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="max-w-md border-border/60">
        <DialogHeader>
          <span className="text-xs font-mono text-primary uppercase tracking-widest mb-1">
            Early Access
          </span>
          <DialogTitle className="text-2xl font-black tracking-tight">
            Join the waitlist
          </DialogTitle>
          <DialogDescription className="leading-relaxed">
            We're onboarding a select group of enterprises first.
            Tell us where you're stuck — we'll be in touch.
          </DialogDescription>
        </DialogHeader>

        <AnimatePresence mode="wait">
          {status === "success" ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center gap-3 py-6 text-center"
            >
              <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center">
                <CheckCircle2 className="text-primary" size={28} />
              </div>
              <p className="text-lg font-bold text-foreground">You're on the list.</p>
              <p className="text-sm text-muted-foreground">We'll reach out within 48 hours.</p>
              <Button
                variant="hero-outline"
                size="default"
                className="mt-2"
                onClick={() => handleOpenChange(false)}
              >
                Close
              </Button>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onSubmit={handleSubmit}
              className="flex flex-col gap-3"
            >
              {/* Work email */}
              <div>
                <label
                  htmlFor="modal-email"
                  className="text-xs font-medium text-muted-foreground mb-1.5 block uppercase tracking-wider"
                >
                  Work email
                </label>
                <input
                  id="modal-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  className="w-full h-11 px-4 rounded-xl border border-border bg-card text-foreground text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all"
                />
              </div>

              {/* Problem */}
              <div>
                <label
                  htmlFor="modal-problem"
                  className="text-xs font-medium text-muted-foreground mb-1.5 block uppercase tracking-wider"
                >
                  What problem are you trying to solve?
                </label>
                <textarea
                  id="modal-problem"
                  required
                  value={problem}
                  onChange={(e) => setProblem(e.target.value)}
                  placeholder="e.g. Our PMs spend hours updating Jira from Slack. We need that automated..."
                  rows={3}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all resize-none leading-relaxed"
                />
              </div>

              {errorMsg && (
                <p className="text-xs text-destructive">{errorMsg}</p>
              )}

              <Button
                type="submit"
                variant="hero"
                size="lg"
                disabled={!valid || status === "submitting"}
                className="w-full mt-1"
              >
                {status === "submitting" ? (
                  <>
                    <Loader2 size={16} className="animate-spin mr-2" />
                    Sending…
                  </>
                ) : (
                  <>
                    Request Early Access
                    <ArrowRight size={16} className="ml-2" />
                  </>
                )}
              </Button>

              <p className="text-xs text-muted-foreground text-center mt-1">
                No credit card · In-VPC deployment · Enterprise-grade security
              </p>
            </motion.form>
          )}
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  );
};

export default WaitlistModal;
