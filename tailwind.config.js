/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        "rotate-border": "rotate-border 2s linear infinite",
      },
      keyframes: {
        "rotate-border": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      screens: {
        xs: "475px",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        firacode: ["Fira Code", "monospace"],
      },
      colors: {},
    },
  },
  darkMode: "class",
  plugins: [],
};
