/** @type {import('tailwindcss').Config} */
export default {
    content: [
      './index.html',
      './src/**/*.{js,jsx,ts,tsx}',
    ],
    theme: {
      extend: {
        fontFamily: {
          display: ['Fraunces', 'serif'],
          sans: ['Manrope', 'ui-sans-serif', 'system-ui']
        },
        colors: {
          brand: {
            50: '#e8f3ff',
            100: '#cfe6ff',
            200: '#9dcfff',
            300: '#6bb8ff',
            400: '#39a1ff',
            500: '#0f8bff',
            600: '#0b6fd6',
            700: '#0854a6',
            800: '#053a75',
            900: '#032246'
          }
        },
        boxShadow: {
          glow: '0 0 0 0 rgba(16,185,129,0), 0 0 80px -20px rgba(59,130,246,0.45)'
        },
        backgroundImage: {
          'radial-fade': 'radial-gradient(80% 50% at 50% 0%, rgba(59,130,246,0.35), rgba(2,6,23,0) 60%)',
          'grid-slate': 'linear-gradient(to right, rgba(148,163,184,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.08) 1px, transparent 1px)'
        },
        backgroundSize: {
          'grid-16': '16px 16px'
        }
      },
    },
    plugins: [],
  }