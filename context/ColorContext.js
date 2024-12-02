"use client";

import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(false);
  const [themeColor, setThemeColor] = useState("blue");

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    }

    document.documentElement.classList.remove("blue", "green");
    document.documentElement.classList.add(themeColor);
  }, [isDark, themeColor]);

  function toggleDarkMode() {
    setIsDark((prev) => !prev);
  }

  function changeThemeColor(color) {
    setThemeColor(themeColor === "blue" ? "green" : "blue");
  }

  return (
    <ThemeContext.Provider
      value={{ isDark, toggleDarkMode, themeColor, changeThemeColor }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}

export { ThemeProvider, useTheme };
