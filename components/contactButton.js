"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { HiArrowLongRight } from "react-icons/hi2";

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
  return (
    <motion.div variants={buttonVariants} whileHover="hover" className="w-fit">
      <Link
        href="/contact"
        className="mt-12 border border-light-border dark:border-dark-border bg-light-accent dark:bg-dark-accent w-fit px-2 py-1 rounded-xl text-light-secondary flex items-center font-[20px] md:mb-0 mb-20"
      >
        Contact Me: &nbsp; <HiArrowLongRight />
      </Link>
    </motion.div>
  );
}
