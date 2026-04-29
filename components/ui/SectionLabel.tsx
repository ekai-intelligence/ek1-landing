interface SectionLabelProps {
  children: React.ReactNode
  light?: boolean
  className?: string
}

export default function SectionLabel({ children, light = false, className = '' }: SectionLabelProps) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <span className={`w-1.5 h-1.5 rounded-full ${light ? 'bg-orange' : 'bg-orange'}`} />
      <span
        className={`text-xs font-medium uppercase tracking-[0.1em] ${
          light ? 'text-orange' : 'text-orange'
        }`}
      >
        {children}
      </span>
    </div>
  )
}
