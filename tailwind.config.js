/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#06b6d4", // Cyan
          dark: "#0891b2",
          light: "#22d3ee",
        },
        accent: {
          blue: "#2563eb",
          purple: "#a855f7",
          pink: "#ec4899",
          emerald: "#10b981",
        },
        dark: {
          DEFAULT: "#030712", // Very dark gray / slate
          card: "#080c14", // Dark slate card
          border: "#1e293b", // Slate border
          text: "#94a3b8",
        }
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        heading: ["Outfit", "sans-serif"],
      },
      boxShadow: {
        'neon-cyan': '0 0 20px rgba(6, 182, 212, 0.25)',
        'neon-purple': '0 0 20px rgba(168, 85, 247, 0.25)',
        'neon-emerald': '0 0 20px rgba(16, 185, 129, 0.25)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      animation: {
        'pulse-slow': 'pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'blob': 'blob 7s infinite',
        'glow-line': 'glow-line 3s linear infinite',
      },
      keyframes: {
        blob: {
          '0%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
          '33%': {
            transform: 'translate(30px, -50px) scale(1.1)',
          },
          '66%': {
            transform: 'translate(-20px, 20px) scale(0.9)',
          },
          '100%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
        },
        'glow-line': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        }
      }
    },
  },
  plugins: [],
}
