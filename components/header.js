"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { HiBars3, HiMiniXMark, HiMoon, HiSun } from "react-icons/hi2";
import { useDarkMode } from "@/context/DarkModeContext";
import { motion } from "framer-motion";

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
  const [showNav, setShowNav] = useState(false);

  const { isDark, toggleDark } = useDarkMode();

  const path = usePathname();

  function handleClickHam() {
    setShowNav(!showNav);
  }

  function initialHam() {
    setShowNav(false);
  }

  return (
    <nav className="flex justify-between w-[96%] mx-auto items-center z-10 bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text">
      <Link href="/" className="relative sm:h-32 sm:w-28 h-20 w-16">
        <Image src="/Krishna.png" alt="Logo" fill required />
      </Link>

      <div className="sm:hidden text-[24px]" onClick={handleClickHam}>
        <motion.div
          variants={iconVariants}
          animate={showNav ? "animate" : "initial"}
        >
          {!showNav ? <HiBars3 /> : <HiMiniXMark />}
        </motion.div>
      </div>

      <motion.div
        key={showNav}
        className={`${
          showNav ? "block bg-light-bg dark:bg-dark-bg" : "hidden"
        } absolute left-0 min-h-fit pt-4 pb-2 top-[16%] items-center flex px-6 w-full sm:flex sm:static sm:w-auto sm:border-none border border-light-border dark:border-dark-border rounded-b-lg shadow-xl sm:shadow-none border-t-0`}
        variants={navVariant}
        initial="initial"
        animate="animate"
        exit="initial"
      >
        <ul className="flex flex-col sm:flex-row sm:gap-[4vw] gap-4 font-semibold text-[16px]">
          <li
            className={`hover:text-light-accentSecondary hover:dark:text-dark-accentSecondary ${
              path === "/" ? "text-light-accent dark:text-dark-accent" : ""
            }`}
            onClick={initialHam}
          >
            <Link href="/">Home</Link>
          </li>
          <li
            className={`hover:text-light-accentSecondary hover:dark:text-dark-accentSecondary ${
              path.startsWith("/about")
                ? "text-light-accent dark:text-dark-accent"
                : ""
            }`}
            onClick={initialHam}
          >
            <Link href="/about">About</Link>
          </li>
          <li
            className={`hover:text-light-accentSecondary hover:dark:text-dark-accentSecondary ${
              path.startsWith("/creations")
                ? "text-light-accent dark:text-dark-accent"
                : ""
            }`}
            onClick={initialHam}
          >
            <Link href="/creations">Creations</Link>
          </li>
          <li
            className={`hover:text-light-accentSecondary hover:dark:text-dark-accentSecondary ${
              path.startsWith("/contact")
                ? "text-light-accent dark:text-dark-accent"
                : ""
            }`}
            onClick={initialHam}
          >
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </motion.div>
      <div
        className={`absolute right-2 sm:top-2 top-20 mr-2 text-[32px] text-white border p-1 rounded-full ${
          !isDark ? "bg-yellow-400" : "bg-black"
        }`}
        onClick={toggleDark}
      >
        {!isDark ? <HiSun /> : <HiMoon />}
      </div>
    </nav>
  );
}
