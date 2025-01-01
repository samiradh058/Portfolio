"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { HiBars3, HiMiniXMark, HiMoon, HiSun } from "react-icons/hi2";
import { useTheme } from "@/context/ColorContext";
import { motion } from "framer-motion";
import { colors } from "./colors";

const iconVariants = {
  animate: { rotate: 90, opacity: 1 },
  initial: { rotate: 0, opacity: 1 },
};

const navVariant = {
  initial: { y: -10 },
  animate: {
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

export default function Header() {
  const { isDark, toggleDarkMode, themeColor } = useTheme();

  const [showNav, setShowNav] = useState(false);

  const mode = isDark ? "dark" : "light";
  const currentTheme = themeColor;

  const currentColors = colors[mode][currentTheme];

  const path = usePathname();

  function handleClickHam() {
    setShowNav(!showNav);
  }

  function initialHam() {
    setShowNav(false);
  }

  return (
    <nav
      className="flex justify-between w-[100%] items-center z-10 max-h-fit"
      style={{ backgroundColor: currentColors.bg }}
    >
      <Link href="/" className="relative sm:h-32 sm:w-28 h-20 w-16">
        <Image src="/Krishna.png" alt="Logo" fill required />
      </Link>

      <div className="sm:hidden text-[24px] mr-4" onClick={handleClickHam}>
        <motion.div
          variants={iconVariants}
          animate={showNav ? "animate" : "initial"}
          style={{ color: currentColors.text }}
        >
          {!showNav ? <HiBars3 /> : <HiMiniXMark />}
        </motion.div>
      </div>

      <motion.main
        key={showNav}
        className={`${
          showNav ? "block" : "hidden"
        } absolute left-0 min-h-fit pt-4 pb-2 top-[14%] items-center flex px-6 w-full sm:flex sm:static sm:w-auto sm:border-none rounded-b-lg shadow-2xl sm:shadow-none border-t-0`}
        variants={navVariant}
        initial="initial"
        animate="animate"
        exit="initial"
        style={{
          backgroundColor: currentColors.bg,
        }}
      >
        <ul className="flex flex-col sm:flex-row sm:gap-[4vw] gap-4 font-semibold text-[16px] mr-2">
          <li
            className="hover:scale-110"
            style={{
              color: path === "/" ? currentColors.accent : currentColors.text,
            }}
            onClick={initialHam}
          >
            <Link href="/">Home</Link>
          </li>
          <li
            className="hover:scale-110"
            style={{
              color:
                path === "/about" ? currentColors.accent : currentColors.text,
            }}
            onClick={initialHam}
          >
            <Link href="/about">About</Link>
          </li>
          <li
            className="hover:scale-110"
            style={{
              color:
                path === "/creations"
                  ? currentColors.accent
                  : currentColors.text,
            }}
            onClick={initialHam}
          >
            <Link href="/creations">Creations</Link>
          </li>
          <li
            className="hover:scale-110"
            style={{
              color:
                path === "/contact" ? currentColors.accent : currentColors.text,
            }}
            onClick={initialHam}
          >
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </motion.main>
      <div
        className={`absolute right-2 sm:top-2 top-20 mr-2 text-[32px] text-white border p-1 rounded-full ${
          !isDark ? "bg-yellow-400" : "bg-black"
        }`}
        onClick={toggleDarkMode}
      >
        {!isDark ? <HiSun /> : <HiMoon />}
      </div>
    </nav>
  );
}
