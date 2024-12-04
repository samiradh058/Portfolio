"use client";

import { useTheme } from "@/context/ColorContext";

import { colors } from "./colors";

export default function Links({ link, name, logo }) {
  const { isDark, themeColor } = useTheme();
  console.log(link);

  const mode = isDark ? "dark" : "light";
  const currentTheme = themeColor;

  const currentColors = colors[mode][currentTheme];
  return (
    <li>
      <a
        href={link}
        className="flex items-center gap-2 text-[20px] font-semibold hover:scale-110"
        style={{
          color: currentColors.accentSecondary,
        }}
      >
        {logo}
        {name}
      </a>
    </li>
  );
}
