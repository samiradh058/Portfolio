"use client";

import { useTheme } from "@/context/ColorContext";
import { motion } from "framer-motion";
import { colors } from "./colors";

const EducationVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const rowVariants = {
  hidden: { opacity: 0, x: "-4vw" },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5 },
  },
};

const childVariants = {
  hidden: { opacity: 0, x: "-4vw" },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.1 },
  },
};

export default function Education() {
  const { isDark, toggleDarkMode, themeColor } = useTheme();

  const mode = isDark ? "dark" : "light";
  const currentTheme = themeColor;

  const currentColors = colors[mode][currentTheme];
  return (
    <div className="mt-24">
      <h3 className="font-semibold text-[24px]">Education</h3>

      <motion.div
        className="relative flex mt-6"
        variants={EducationVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div
          className="absolute sm:top-6 top-8 left-6 sm:left-0 w-[6px] sm:w-[98%] h-[100%] sm:h-[6px] mt-[-20px]"
          style={{
            backgroundColor: currentColors.accent,
          }}
          variants={rowVariants}
        ></motion.div>

        <div className="sm:grid sm:grid-cols-12 w-full">
          <div className="col-span-3">
            <div className="flex sm:flex-col sm:items-center sm:text-center items-center my-4 sm:my-0">
              <div
                className="w-6 h-6 rounded-full sm:mt-[-4px] ml-[15px]"
                style={{
                  backgroundColor: currentColors.accent,
                }}
              ></div>
              <motion.div variants={childVariants} className="ml-4">
                <p className="mt-2 font-semibold">SEE (2018)</p>
                <p className="sm:mx-2">Chhorepatan Secondary School</p>
              </motion.div>
            </div>
          </div>
          <div className="col-span-1"></div>
          <div className="col-span-3">
            <div className="flex sm:flex-col sm:items-center sm:text-center items-center my-4 sm:my-0">
              <div
                className="w-6 h-6 rounded-full sm:mt-[-4px] ml-[15px]"
                style={{
                  backgroundColor: currentColors.accent,
                }}
              ></div>
              <motion.div variants={childVariants} className="ml-4">
                <p className="mt-2 font-semibold">SLC (2020)</p>
                <p className="sm:mx-2">Chhorepatan Secondary School</p>
              </motion.div>
            </div>
          </div>
          <div className="col-span-1"></div>
          <div className="col-span-4">
            <div className="flex sm:flex-col sm:items-center sm:text-center items-center my-2 sm:my-0">
              <div
                className="w-6 h-6 rounded-full sm:mt-[-4px] ml-[15px]"
                style={{
                  backgroundColor: currentColors.accent,
                }}
              ></div>
              <motion.div variants={childVariants} className="ml-4">
                <p className="mt-2 font-semibold">BSc. CSIT (Running)</p>
                <p className="sm:mx-2">Prithvi Narayan Campus</p>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
