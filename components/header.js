"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { HiBars3, HiMiniXMark, HiMoon, HiSun } from "react-icons/hi2";
import { useDarkMode } from "@/context/DarkModeContext";
import { motion } from "framer-motion";

const iconVariants = {
  open: { rotate: 90, opacity: 1 },
  closed: { rotate: 0, opacity: 1 },
};

const navVariant = {
  close: { y: -100, opacity: 0 },
  open: { y: 0, opacity: 1 },
  transition: {
    duration: 2,
  },
};

export default function Header() {
  const [showNav, setShowNav] = useState(false);

  const { isDark, toggleDark } = useDarkMode();

  const path = usePathname();

  function handleClickHam() {
    setShowNav(!showNav);
  }

  function closeHam() {
    setShowNav(false);
  }

  return (
    <nav className="flex justify-between w-[92%] mx-auto items-center z-10 bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text">
      <div className="relative sm:h-28 sm:w-24 h-20 w-16">
        <Image src="/Me4.png" alt="Logo" fill required />
      </div>

      <div className="sm:hidden text-[24px]" onClick={handleClickHam}>
        <motion.div
          variants={iconVariants}
          animate={showNav ? "open" : "closed"}
        >
          {!showNav ? <HiBars3 /> : <HiMiniXMark />}
        </motion.div>
      </div>

      <motion.div
        className={`${
          showNav ? "block" : "hidden"
        } absolute left-0 min-h-fit pt-4 pb-2 top-[16%] items-center flex px-6 w-full sm:flex sm:static sm:w-auto sm:border-none border border-light-border dark:border-dark-border rounded-lg shadow-xl sm:shadow-none border-t-0 bg-light-bg dark:bg-dark-bg`}
      >
        <ul className="flex flex-col sm:flex-row sm:gap-[4vw] gap-4 font-semibold text-[16px]">
          <li
            className={`hover:text-light-accentSecondary hover:dark:text-dark-accentSecondary ${
              path === "/" ? "text-light-accent dark:text-dark-accent" : ""
            }`}
            onClick={closeHam}
          >
            <Link href="/">Home</Link>
          </li>
          <li
            className={`hover:text-light-accentSecondary hover:dark:text-dark-accentSecondary ${
              path.startsWith("/about")
                ? "text-light-accent dark:text-dark-accent"
                : ""
            }`}
            onClick={closeHam}
          >
            <Link href="/about">About</Link>
          </li>
          <li
            className={`hover:text-light-accentSecondary hover:dark:text-dark-accentSecondary ${
              path.startsWith("/creations")
                ? "text-light-accent dark:text-dark-accent"
                : ""
            }`}
            onClick={closeHam}
          >
            <Link href="/creations">Creations</Link>
          </li>
          <li
            className={`hover:text-light-accentSecondary hover:dark:text-dark-accentSecondary ${
              path.startsWith("/contact")
                ? "text-light-accent dark:text-dark-accent"
                : ""
            }`}
            onClick={closeHam}
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
