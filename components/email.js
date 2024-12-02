"use client";

import { useTheme } from "@/context/ColorContext";
import { colors } from "./colors";

export default function Email() {
  const { isDark, themeColor } = useTheme();

  const mode = isDark ? "dark" : "light";
  const currentTheme = themeColor;

  const currentColors = colors[mode][currentTheme];

  return (
    <a
      href="mailto:adhikarisamir68@gmail.com"
      className=" text-[28px] hover:underline md:mt-0 mt-12"
      style={{ color: currentColors.accentSecondary }}
    >
      adhikarisamir68@gmail.com
    </a>
  );
}
