import { createContext, useContext, useState } from "react";

interface WaitlistContextValue {
  open: boolean;
  openWaitlist: () => void;
  closeWaitlist: () => void;
}

const WaitlistContext = createContext<WaitlistContextValue | null>(null);

export const WaitlistProvider = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);
  return (
    <WaitlistContext.Provider
      value={{
        open,
        openWaitlist: () => setOpen(true),
        closeWaitlist: () => setOpen(false),
      }}
    >
      {children}
    </WaitlistContext.Provider>
  );
};

export const useWaitlist = () => {
  const ctx = useContext(WaitlistContext);
  if (!ctx) throw new Error("useWaitlist must be used within WaitlistProvider");
  return ctx;
};
