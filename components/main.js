"use client";

import { useTheme } from "@/context/ColorContext";
import Children from "./children";
import Header from "./header";
import { colors } from "./colors";

export default function Main({ children }) {
  const { isDark, toggleDarkMode, themeColor } = useTheme();

  const mode = isDark ? "dark" : "light";
  const currentTheme = themeColor;

  const currentColors = colors[mode][currentTheme];
  return (
    <body
      className="flex flex-col justify-center items-center"
      style={{
        backgroundColor: currentColors.bg,
      }}
    >
      <Header />
      <Children>{children}</Children>
    </body>
  );
}
