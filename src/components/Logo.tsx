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
        {/* Orange rounded-square background */}
        <rect width="40" height="40" rx="10" fill="hsl(14,90%,58%)" />

        {/* Feed line 1 — full width */}
        <path d="M10 14 H30" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
        {/* Feed line 2 — full width */}
        <path d="M10 20 H30" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
        {/* Feed line 3 — short (last item, truncated) */}
        <path d="M10 26 H21" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
        {/* Action chevron — right-pointing, end of last line */}
        <path
          d="M24 23.5 L28 26 L24 28.5"
          stroke="white"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      {/* Wordmark — only shown in "full" variant */}
      {variant === "full" && (
        <span
          style={{ color: "hsl(14,90%,58%)" }}
          className="font-bold text-lg tracking-tight leading-none"
        >
          Scroll
        </span>
      )}
    </span>
  );
};

export default Logo;
