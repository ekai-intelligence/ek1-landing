import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

type Status = "idle" | "submitting" | "success" | "error";

const WaitlistSection = () => {
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

  return (
    <section id="waitlist" className="relative py-24 md:py-32 border-t border-border/40">
      <div className="container max-w-lg text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-flex items-center gap-2 text-xs font-mono text-primary uppercase tracking-widest mb-5">
            Early Access
          </span>

          <h2 className="text-3xl md:text-4xl font-black tracking-tight text-foreground mb-3">
            Join the waitlist
          </h2>
          <p className="text-muted-foreground mb-10 leading-relaxed">
            We're onboarding a select group of enterprises first.
            <br className="hidden sm:block" />
            Tell us where you're stuck — we'll be in touch.
          </p>

          <AnimatePresence mode="wait">
            {status === "success" ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center gap-3 py-6"
              >
                <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center">
                  <CheckCircle2 className="text-primary" size={28} />
                </div>
                <p className="text-lg font-bold text-foreground">You're on the list.</p>
                <p className="text-sm text-muted-foreground">We'll reach out within 48 hours.</p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="flex flex-col gap-3 text-left"
              >
                {/* Work email */}
                <div>
                  <label htmlFor="wl-email" className="text-xs font-medium text-muted-foreground mb-1.5 block uppercase tracking-wider">
                    Work email
                  </label>
                  <input
                    id="wl-email"
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
                  <label htmlFor="wl-problem" className="text-xs font-medium text-muted-foreground mb-1.5 block uppercase tracking-wider">
                    What problem are you trying to solve?
                  </label>
                  <textarea
                    id="wl-problem"
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
        </motion.div>
      </div>
    </section>
  );
};

export default WaitlistSection;
