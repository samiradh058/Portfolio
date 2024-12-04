"use client";

import { useTheme } from "@/context/ColorContext";
import { motion } from "framer-motion";
import { colors } from "./colors";

const SkillsVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      type: "spring",
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: "-4vh" },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export default function Skills() {
  const { isDark, toggleDarkMode, themeColor } = useTheme();

  const mode = isDark ? "dark" : "light";
  const currentTheme = themeColor;

  const currentColors = colors[mode][currentTheme];
  const listStyle =
    "border px-2 py-1 rounded-md shadow-md sm:text-[16px] text-[12px]";
  const listDynamicStyle = {
    backgroundColor: currentColors.secondary,
    borderColor: currentColors.border,
  };

  return (
    <motion.div
      className="flex justify-center mb-10 mt-24"
      variants={SkillsVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="flex flex-col items-center">
        <h2 className="font-semibold text-[24px]">My Skills</h2>
        <div className="mt-4">
          <ul className="flex xs:gap-2 sm:gap-4 gap-[6px] justify-center my-4">
            <motion.li
              className={listStyle}
              style={listDynamicStyle}
              variants={childVariants}
            >
              HTML
            </motion.li>
            <motion.li
              className={listStyle}
              style={listDynamicStyle}
              variants={childVariants}
            >
              CSS
            </motion.li>
            <motion.li
              className={listStyle}
              style={listDynamicStyle}
              variants={childVariants}
            >
              JavaScript
            </motion.li>
          </ul>
          <ul className="flex xs:gap-2 sm:gap-4 gap-[6px] justify-center my-4">
            <motion.li
              className={listStyle}
              style={listDynamicStyle}
              variants={childVariants}
            >
              Bootstrap
            </motion.li>
            <motion.li
              className={listStyle}
              style={listDynamicStyle}
              variants={childVariants}
            >
              Tailwind
            </motion.li>
            <motion.li
              className={listStyle}
              style={listDynamicStyle}
              variants={childVariants}
            >
              React
            </motion.li>
            <motion.li
              className={listStyle}
              style={listDynamicStyle}
              variants={childVariants}
            >
              Typescript
            </motion.li>
            <motion.li
              className={listStyle}
              style={listDynamicStyle}
              variants={childVariants}
            >
              Next.js
            </motion.li>
          </ul>
          <ul className="flex xs:gap-2 sm:gap-4 gap-[6px] justify-center my-4">
            <motion.li
              className={listStyle}
              style={listDynamicStyle}
              variants={childVariants}
            >
              Git
            </motion.li>
            <motion.li
              className={listStyle}
              style={listDynamicStyle}
              variants={childVariants}
            >
              Framer Motion
            </motion.li>
            <motion.li
              className={listStyle}
              style={listDynamicStyle}
              variants={childVariants}
            >
              Rest APIs
            </motion.li>
            <motion.li
              className={listStyle}
              style={listDynamicStyle}
              variants={childVariants}
            >
              Supabase
            </motion.li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
}
