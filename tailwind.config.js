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
      colors: {
        light: {
          blue: {
            bg: "#E9F1FA", // Light Blue background
            secondary: "#FFFFFF", // White background for secondary elements
            text: "#004D6D", // Dark blue text
            accent: "#00ABE4", // Light blue accent
            accentSecondary: "#0077A5", // Darker blue accent
            border: "#D1E3F2", // Light blue border
            error: "#E63946", // Red for errors
          },
          green: {
            bg: "#E3F9F1", // Light Green background
            secondary: "#FFFFFF", // White background for secondary elements
            text: "#006B3F", // Dark green text
            accent: "#32A852", // Light green accent
            accentSecondary: "#23723C", // Darker green accent
            border: "#A0D1B2", // Light green border
            error: "#E63946", // Red for errors
          },
        },
        dark: {
          blue: {
            bg: "#004D6D", // Dark Blue background
            secondary: "#0077A5", // Darker blue for secondary elements
            text: "#E9F1FA", // Light blue text
            accent: "#00ABE4", // Light blue accent
            accentSecondary: "#6EC8F8", // Lighter blue accent
            border: "#374151", // Dark border for dark mode
            error: "#EF4444", // Red for errors
          },
          green: {
            bg: "#006B3F", // Dark Green background
            secondary: "#23723C", // Darker green for secondary elements
            text: "#E3F9F1", // Light green text
            accent: "#32A852", // Light green accent
            accentSecondary: "#85D18E", // Lighter green accent
            border: "#374151", // Dark border for dark mode
            error: "#EF4444", // Red for errors
          },
        },
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
