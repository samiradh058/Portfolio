"use client";

import { useTheme } from "@/context/ColorContext";

export default function Theme() {
  const { themeColor, changeThemeColor } = useTheme();

  return (
    <button
      className={`fixed bottom-2 right-2 text-[32px] ${
        themeColor === "blue" ? "bg-green-400" : "bg-blue-400"
      } rounded-full`}
      onClick={changeThemeColor}
    >
      🎨
    </button>
  );
}
