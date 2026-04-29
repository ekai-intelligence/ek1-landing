interface CardProps {
  children: React.ReactNode
  className?: string
  padding?: boolean
}

export default function Card({ children, className = '', padding = true }: CardProps) {
  return (
    <div
      className={`bg-white rounded-card shadow-card ${padding ? 'p-8' : ''} ${className}`}
    >
      {children}
    </div>
  )
}
