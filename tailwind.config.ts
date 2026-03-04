import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './hooks/**/*.{js,ts,tsx}',
    './lib/**/*.{js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#080c10',
        panel: {
          DEFAULT: '#0d1117',
          2: '#131920',
        },
        border: {
          DEFAULT: '#1e2a35',
          2: '#243040',
        },
        accent: '#00d4ff',
        good: '#00e676',
        bad: '#ff3d4a',
        warn: '#ffaa00',
        text: {
          DEFAULT: '#e8f0f8',
          muted: '#4a6070',
          muted2: '#2a3848',
        },
        gold: '#ffd700',
      },
      fontFamily: {
        display: ['var(--font-display)', 'sans-serif'],
        body: ['var(--font-body)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      fontSize: {
        '2xs': ['0.625rem', { lineHeight: '1rem' }],  // 10px — used for uppercase labels
      },
      letterSpacing: {
        widest2: '0.2em',   // for the tightest uppercase labels
      },
      borderRadius: {
        DEFAULT: '6px',
        md: '8px',
        lg: '10px',
        xl: '12px',
      },
      keyframes: {
        livePulse: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.5', transform: 'scale(0.75)' },
        },
        pipPulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.4' },
        },
        urgentFlash: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.4' },
        },
        ripple: {
          '0%': { boxShadow: '0 0 0 0 rgba(0, 230, 118, 0.5)' },
          '70%': { boxShadow: '0 0 0 10px rgba(0, 230, 118, 0)' },
          '100%': { boxShadow: '0 0 0 0 rgba(0, 230, 118, 0)' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(12px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'live-pulse': 'livePulse 1.4s ease infinite',
        'pip-pulse': 'pipPulse 1s ease infinite',
        'urgent-flash': 'urgentFlash 0.5s ease infinite',
        ripple: 'ripple 2s ease infinite',
        'fade-up': 'fadeUp 0.5s ease both',
      },
      backgroundImage: {
        'grid-pattern':
          'linear-gradient(rgba(0,212,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.02) 1px, transparent 1px)',
      },
      backgroundSize: {
        grid: '40px 40px',
      },
      boxShadow: {
        'accent-glow': '0 0 20px rgba(0, 212, 255, 0.25)',
        'good-glow': '0 0 20px rgba(0, 230, 118, 0.3)',
        'bad-glow': '0 0 20px rgba(255, 61, 74, 0.4)',
        'white-glow': '0 0 20px rgba(255, 255, 255, 0.3)',
      },
    },
  },
  plugins: [],
}

export default config