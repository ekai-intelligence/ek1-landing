import { Button } from "@/components/ui/button";
import Logo from "@/components/Logo";
import { useWaitlist } from "@/context/WaitlistContext";

const Navbar = () => {
  const { openWaitlist } = useWaitlist();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/40">
      <div className="container flex h-16 items-center justify-between">
        <a href="/" aria-label="Scroll home">
          <Logo size={34} variant="full" />
        </a>

        <div className="hidden md:flex items-center gap-3">
          <Button variant="hero" size="default" onClick={openWaitlist}>
            Join Waitlist
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;