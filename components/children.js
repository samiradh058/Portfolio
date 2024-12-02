"use client";

import { useTheme } from "@/context/ColorContext";
import { colors } from "./colors";
import Theme from "./theme";

export default function Children({ children }) {
  const { isDark, themeColor } = useTheme();

  const mode = isDark ? "dark" : "light";
  const currentTheme = themeColor;

  const currentColors = colors[mode][currentTheme];
  return (
    <div
      className="lg:px-14 md:px-10 sm:px-6 px-4 w-full"
      style={{
        backgroundColor: currentColors.bg,
        color: currentColors.text,
        border: currentColors.border,
      }}
    >
      {children}
      <Theme />
    </div>
  );
}
