/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "475px",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        firacode: ["Fira Code", "monospace"],
      },
      colors: {
        light: {
          bg: "#E9F1FA",
          secondary: "#FFFFFF",
          text: "#004D6D",
          accent: "#00ABE4",
          accentSecondary: "#0077A5",
          border: "#D1E3F2",
          error: "#E63946",
        },
        dark: {
          bg: "#004D6D",
          secondary: "#0077A5",
          text: "#E9F1FA",
          accent: "#00ABE4",
          accentSecondary: "#6EC8F8",
          border: "#374151",
          error: "#EF4444",
        },
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
