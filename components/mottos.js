"use client";

import { useTheme } from "@/context/ColorContext";
import { colors } from "./colors";

export default function Mottos() {
  const { isDark, themeColor } = useTheme();

  const mode = isDark ? "dark" : "light";
  const currentTheme = themeColor;

  const currentColors = colors[mode][currentTheme];

  return (
    <div className="flex md:justify-between justify-around flex-row md:flex-col w-full md:col-span-5 lg:col-span-4 p-4">
      <div
        className="self-start rounded-full sm:w-44 sm:h-44 w-40 h-40 flex items-center p-4 text-center text-[20px] sm:text-[24px] font-semibold animate-custom-bounce"
        style={{
          border: "4px solid",
          borderColor: currentColors.accent,
          borderRadius: "50%",
        }}
      >
        Learn, adapt and grow
      </div>
      <div
        className="self-end rounded-full sm:w-44 sm:h-44 w-40 h-40 flex items-center p-4 text-center text-[20px] sm:text-[24px] font-semibold animate-custom-bounce"
        style={{
          border: "4px solid",
          borderColor: currentColors.accent,
          borderRadius: "50%",
        }}
      >
        Code more, worry less.
      </div>
    </div>
  );
}
