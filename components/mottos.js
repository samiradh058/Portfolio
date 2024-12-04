"use client";

import { useTheme } from "@/context/ColorContext";
import { colors } from "./colors";

export default function Mottos() {
  const { isDark, themeColor } = useTheme();

  const mode = isDark ? "dark" : "light";
  const currentTheme = themeColor;

  const currentColors = colors[mode][currentTheme];

  return (
    <div className="flex md:justify-between justify-around flex-row md:flex-col w-full md:col-span-5 lg:col-span-4 p-4 gap-2">
      <div
        className="self-start rounded-full w-32 h-32 sm:w-40 xs:w-36 xs:h-36 sm:h-40 md:w-44 md:h-44 flex items-center sm:p-4 p-2 text-center xs:text-[18px] sm:text-[24px] text-[16px]  font-semibold animate-custom-bounce"
        style={{
          border: "4px solid",
          borderColor: currentColors.accent,
          borderRadius: "50%",
        }}
      >
        Learn, adapt and grow
      </div>
      <div
        className="self-end rounded-full w-32 h-32 sm:w-40 xs:w-36 xs:h-36 sm:h-40 md:w-44 md:h-44 flex items-center p-4 text-center xs:text-[18px] sm:text-[24px] text-[16px] font-semibold animate-custom-bounce"
        style={{
          border: "4px solid",
          borderColor: currentColors.accent,
          borderRadius: "50%",
        }}
      >
        Code, Create, Innovate
      </div>
    </div>
  );
}
