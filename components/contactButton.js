"use client";

import { useTheme } from "@/context/ColorContext";
import { motion } from "framer-motion";
import Link from "next/link";
import { HiArrowLongRight } from "react-icons/hi2";
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

export default function ContactButton() {
  const { isDark, toggleDarkMode, themeColor } = useTheme();

  const mode = isDark ? "dark" : "light";
  const currentTheme = themeColor;

  const currentColors = colors[mode][currentTheme];

  return (
    <motion.div variants={buttonVariants} whileHover="hover" className="w-fit">
      <Link
        href="/contact"
        className="mt-12 w-fit px-4 py-2 rounded-full flex items-center text-[18px] md:mb-0 mb-20"
        style={{
          backgroundColor: currentColors.accent,
          color: isDark ? currentColors.text : currentColors.secondary,
          border: `1px solid ${currentColors.border}`,
        }}
      >
        Contact Me: &nbsp; <HiArrowLongRight />
      </Link>
    </motion.div>
  );
}
