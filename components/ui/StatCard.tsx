interface StatCardProps {
  stat: string
  label: string
  accent?: 'orange' | 'teal'
  className?: string
}

export default function StatCard({ stat, label, accent = 'orange', className = '' }: StatCardProps) {
  const accentColor = accent === 'orange' ? 'text-orange' : 'text-teal'
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <span className={`text-6xl font-bold leading-none tracking-tight ${accentColor}`}>{stat}</span>
      <span className="text-mid-grey text-base leading-relaxed max-w-xs">{label}</span>
    </div>
  )
}
