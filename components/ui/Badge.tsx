interface BadgeProps {
  children: React.ReactNode
  variant?: 'hero' | 'tag' | 'status'
  className?: string
}

export default function Badge({ children, variant = 'tag', className = '' }: BadgeProps) {
  const variants = {
    hero: 'bg-white/15 text-white border border-white/20 text-xs uppercase tracking-widest font-medium px-4 py-2 rounded-pill',
    tag: 'bg-orange/10 text-orange text-xs uppercase tracking-widest font-medium px-3 py-1 rounded-pill',
    status: 'bg-teal/15 text-teal text-xs uppercase tracking-widest font-medium px-3 py-1 rounded-pill',
  }

  return (
    <span className={`inline-flex items-center gap-1.5 ${variants[variant]} ${className}`}>
      {children}
    </span>
  )
}
