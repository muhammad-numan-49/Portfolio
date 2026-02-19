import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        background: '#020617',
        foreground: '#e5e7eb',
        accent: {
          DEFAULT: '#6366f1',
          soft: '#5b21b6'
        },
        muted: '#1e293b',
        border: '#1f2933'
      },
      boxShadow: {
        glass: '0 18px 60px rgba(15,23,42,0.85)',
        'soft-xl': '0 25px 50px -12px rgba(0,0,0,0.5)'
      },
      borderRadius: {
        xl: '1.25rem'
      },
      backgroundImage: {
        'radial-faded':
          'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(99,102,241,0.18), transparent 55%)',
        'radial-faded-bottom':
          'radial-gradient(ellipse 70% 40% at 50% 100%, rgba(30,41,59,0.4), transparent 50%)'
      }
    }
  },
  plugins: []
};

export default config;

