"use client";

import { useTheme } from "@/context/ColorContext";
import { motion } from "framer-motion";
import { colors } from "./colors";

const buttonVariants = {
  hover: {
    scale: [1, 1.2, 1],
    transition: {
      duration: 1,
      repeat: Infinity,
    },
  },
};

export default function DownloadCV() {
  const { isDark, toggleDarkMode, themeColor } = useTheme();

  const mode = isDark ? "dark" : "light";
  const currentTheme = themeColor;

  const currentColors = colors[mode][currentTheme];
  return (
    <motion.div
      variants={buttonVariants}
      whileHover="hover"
      className="w-fit lg:mt-10 flex justify-start items-start"
    >
      <div
        className="mt-8 lg:mt-0 w-fit ml-2 text-[18px] px-4 py-2 rounded-full"
        style={{
          backgroundColor: currentColors.accent,
          color: isDark ? currentColors.text : currentColors.secondary,
        }}
      >
        {" "}
        <a href="Resume.pdf" download>
          Download CV
        </a>
      </div>
    </motion.div>
  );
}
