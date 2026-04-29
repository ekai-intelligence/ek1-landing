interface AppPillProps {
  label: string
  live?: boolean
}

export default function AppPill({ label, live = true }: AppPillProps) {
  return (
    <span
      className={`inline-flex items-center px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.1em] rounded-sm transition-colors ${
        live
          ? 'border border-orange text-orange bg-orange/5 hover:bg-orange hover:text-cream cursor-pointer'
          : 'border border-dashed border-border text-muted cursor-default'
      }`}
    >
      {label}
    </span>
  )
}
