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
          soft: '#4f46e5'
        },
        muted: '#1e293b',
        border: '#1f2933'
      },
      boxShadow: {
        glass: '0 18px 60px rgba(15,23,42,0.85)'
      },
      borderRadius: {
        xl: '1.25rem'
      },
      backgroundImage: {
        'radial-faded':
          'radial-gradient(circle at top, rgba(79,70,229,0.35), transparent 60%)'
      }
    }
  },
  plugins: []
};

export default config;

