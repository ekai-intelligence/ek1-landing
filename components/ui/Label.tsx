interface LabelProps {
  children: React.ReactNode
  light?: boolean
  className?: string
}

export default function Label({ children, light = false, className = '' }: LabelProps) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <span className="w-1.5 h-1.5 rounded-full bg-orange flex-shrink-0" />
      <span
        className={`text-[11px] font-semibold uppercase tracking-[0.12em] ${
          light ? 'text-orange/80' : 'text-orange'
        }`}
      >
        {children}
      </span>
    </div>
  )
}
