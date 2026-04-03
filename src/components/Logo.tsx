interface LogoProps {
  size?: number;
  className?: string;
  /** "mark" = icon only, "full" = icon + wordmark */
  variant?: "mark" | "full";
}

const Logo = ({ size = 32, className = "", variant = "mark" }: LogoProps) => {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      {/* Icon mark */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Warm rounded-square background */}
        <rect width="40" height="40" rx="10" fill="hsl(14,90%,58%)" />

        {/* Inbox tray — bottom portion */}
        <path
          d="M9 26h5.5l2 3h7l2-3H31"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9 26V15a1 1 0 0 1 1-1h20a1 1 0 0 1 1 1v11"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Downward action arrow — "incoming" */}
        <path
          d="M20 11v9"
          stroke="white"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        <path
          d="M16.5 17.5L20 21l3.5-3.5"
          stroke="white"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      {/* Wordmark — only shown in "full" variant */}
      {variant === "full" && (
        <span className="font-bold text-lg tracking-tight leading-none">
          <span style={{ color: "hsl(14,90%,58%)" }}>Action</span>
          <span className="text-foreground"> Inbox</span>
        </span>
      )}
    </span>
  );
};

export default Logo;
