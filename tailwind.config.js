/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        firacode: ["Fira Code", "monospace"],
      },
      colors: {
        light: {
          bg: "#E5E7EB",
          secondary: "#F3F4F6",
          text: "#1F2937",
          accent: "#1D4ED8",
          accentSecondary: "#059669",
          border: "#CBD5E1",
          error: "#DC2626",
        },
        dark: {
          bg: "#111827",
          secondary: "#1F2937",
          text: "#E5E7EB",
          accent: "#3B82F6",
          accentSecondary: "#34D399",
          border: "#374151",
          error: "#B91C1C",
        },
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
