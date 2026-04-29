interface StatDisplayProps {
  stat: string
  label: string
  source?: string
  light?: boolean
}

export default function StatDisplay({ stat, label, source, light = false }: StatDisplayProps) {
  return (
    <div className="flex flex-col gap-3">
      <span
        className="font-black leading-none tracking-[-0.04em] text-orange tabular"
        style={{ fontSize: 'clamp(64px, 10vw, 96px)' }}
      >
        {stat}
      </span>
      <div className="flex flex-col gap-1">
        <p className={`text-base leading-snug font-medium ${light ? 'text-white/80' : 'text-ink'}`}>
          {label}
        </p>
        {source && (
          <span className={`text-[11px] uppercase tracking-[0.08em] font-medium ${light ? 'text-white/30' : 'text-muted'}`}>
            {source}
          </span>
        )}
      </div>
    </div>
  )
}
