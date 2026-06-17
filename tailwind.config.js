/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Outfit", "sans-serif"],
        signature: ["Playfair Display", "cursive"],
      },
      colors: {
        primary: "#6366F1",
        secondary: "#8B5CF6",
        accent: "#F59E0B",
        dark: "#0B1121",
        darker: "#020617",
        light: "#F8FAFC",
        muted: "#94A3B8",
        surface: "#1E293B",
        "surface-2": "#0F172A",
        gold: "#F59E0B",
        "gold-light": "#FCD34D",
      },
      backgroundImage: {
        "hero-pattern": "url('/images/hero-bg.svg')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-premium": "linear-gradient(135deg, #6366F1 0%, #8B5CF6 50%, #F59E0B 100%)",
        "gradient-dark": "linear-gradient(180deg, #0B1121 0%, #1E293B 100%)",
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'blob': 'blob 7s infinite',
        'gradient': 'gradient 8s ease infinite',
        'gradient-slow': 'gradient 12s ease infinite',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-up-lg': 'slideUp 0.7s ease-out',
        'fade-in': 'fadeIn 0.6s ease-out',
        'fade-in-lg': 'fadeIn 0.8s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
        'glow': 'glow 3s ease-in-out infinite',
        'shimmer': 'shimmer 3s ease-in-out infinite',
        'count-up': 'countUp 2s ease-out',
        'spin-slow': 'spin 8s linear infinite',
        'spin-slower': 'spin 12s linear infinite',
        'ping-slow': 'ping 3s cubic-bezier(0, 0, 0.2, 1) infinite',
        'bounce-slow': 'bounce 3s infinite',
        'slide-down': 'slideDown 0.4s ease-out',
        'scale-up': 'scaleUp 0.4s ease-out',
        'reveal': 'reveal 0.8s ease-out forwards',
        'typewriter': 'typewriter 3s steps(30) forwards',
        'blink': 'blink 1s step-end infinite',
        'progress': 'progress 2s ease-out forwards',
        'orbit': 'orbit 12s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        gradient: {
          '0%, 100%': { backgroundSize: '200% 200%', backgroundPosition: '0% 50%' },
          '50%': { backgroundSize: '200% 200%', backgroundPosition: '100% 50%' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        scaleUp: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(99, 102, 241, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(99, 102, 241, 0.6)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        countUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        reveal: {
          '0%': { opacity: '0', transform: 'translateY(30px) scale(0.98)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
        typewriter: {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
        blink: {
          '0%, 100%': { borderColor: 'transparent' },
          '50%': { borderColor: '#6366F1' },
        },
        progress: {
          '0%': { width: '0%' },
          '100%': { width: 'var(--progress-width)' },
        },
        orbit: {
          '0%': { transform: 'rotate(0deg) translateX(8px) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(8px) rotate(-360deg)' },
        },
      },
    },
  },
  darkMode: "class",
  plugins: [],
}
