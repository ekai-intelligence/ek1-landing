'use client'

import { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
}

export default function Button({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...props
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center font-semibold transition-all duration-200 rounded-pill cursor-pointer whitespace-nowrap tracking-[-0.01em]'

  const sizes = {
    sm: 'h-9 px-5 text-[13px]',
    md: 'h-11 px-6 text-[14px]',
    lg: 'h-12 px-7 text-[15px]',
  }

  const variants = {
    primary: 'bg-ink text-cream hover:bg-orange border border-ink hover:border-orange',
    secondary: 'bg-transparent text-ink border border-ink hover:bg-ink hover:text-cream',
    ghost: 'bg-transparent text-orange border-none hover:underline px-0 rounded-none',
  }

  return (
    <button className={`${base} ${sizes[size]} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  )
}
