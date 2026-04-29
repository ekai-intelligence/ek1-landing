import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: '#f9f5f0',
        ink: '#1F1F1F',
        orange: '#e06530',
        charcoal: '#111111',
        border: '#b0aaa8',
        muted: '#746f69',
        'muted-light': '#9ca3af',
      },
      fontFamily: {
        sans: ['var(--font-manrope)', 'Manrope', 'sans-serif'],
      },
      letterSpacing: {
        label: '0.12em',
        tightest: '-0.03em',
        tighter2: '-0.025em',
        tight2: '-0.02em',
      },
      boxShadow: {
        card: 'none',
      },
      borderRadius: {
        pill: '100px',
        card: '4px',
      },
      maxWidth: {
        content: '1100px',
      },
    },
  },
  plugins: [],
}
export default config
