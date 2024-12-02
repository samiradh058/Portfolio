"use client";

import { useTheme } from "@/context/ColorContext";
import { colors } from "./colors";

export default function Build({ build }) {
  const { isDark, themeColor } = useTheme();

  const mode = isDark ? "dark" : "light";
  const currentTheme = themeColor;

  const currentColors = colors[mode][currentTheme];
  return (
    <p className="flex justify-center md:mt-[-20px] xs:mt-0 mt-[-20px]">
      <span style={{ color: currentColors.accent }}>{build}</span>
    </p>
  );
}
