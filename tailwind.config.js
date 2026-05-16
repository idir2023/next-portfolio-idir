 /** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        signature: ["Great Vibes", "cursive"],
      },
      colors: {
        gray: "#818181",
        "light-gray": "#D9D9D9",
        black: "#181818",
        primary: "#007FFF", // light blue
        white: "#FFFFFF",
        transparent: "transparent",
      },
      backgroundImage: {
        "hero-pattern": "url('/assets-hero.svg')",
      },
    },
  },
  darkMode: "media", // "media" ou "class" (supprimé `false`)
  plugins: [],
};
