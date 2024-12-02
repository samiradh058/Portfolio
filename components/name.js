"use client";

import { useTheme } from "@/context/ColorContext";
import { colors } from "./colors";

export default function Name({ name }) {
  const { isDark, themeColor } = useTheme();

  const mode = isDark ? "dark" : "light";
  const currentTheme = themeColor;

  const currentColors = colors[mode][currentTheme];
  return (
    <h1 className="text-[48px] font-bold mt-8">
      {name === "Samir" ? "It's " : "I am "}
      <span style={{ color: currentColors.accent }}>{name}</span>
    </h1>
  );
}
