interface RuleProps {
  className?: string
  light?: boolean
}

export default function Rule({ className = '', light = false }: RuleProps) {
  return (
    <hr
      className={`border-none border-t ${
        light ? 'border-t-white/10' : 'border-t-border'
      } ${className}`}
      style={{ borderTopWidth: '1px', borderTopStyle: 'solid', borderTopColor: light ? 'rgba(255,255,255,0.1)' : '#DDD8D0' }}
    />
  )
}
