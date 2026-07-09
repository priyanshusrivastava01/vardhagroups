/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#FDFBF7',
          100: '#FAF4E6',
          200: '#F0E2C2',
          300: '#E5CD99',
          400: '#DAB870',
          500: '#D4AF37', // Primary metallic gold
          600: '#C5A059', // Warm gold
          700: '#B89047', // Deep gold
          800: '#947230',
          900: '#69511F',
        },
        charcoal: {
          50: '#F6F6F6',
          100: '#E7E7E7',
          300: '#B0B0B0',
          500: '#6C6C6C',
          800: '#2E2A24', // Corporate dark text
          900: '#1C1A17', // Luxury black/charcoal
        },
        cream: {
          50: '#FDFCF7',
          100: '#FAF8F2',
          200: '#F5F0E5',
          300: '#EDE5D4',
        }
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'Montserrat', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-out forwards',
        'slide-up': 'slideUp 0.8s ease-out forwards',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
}
