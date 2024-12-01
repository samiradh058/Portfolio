"use client";

import { motion } from "framer-motion";

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
  return (
    <motion.div
      variants={buttonVariants}
      whileHover="hover"
      className="w-fit lg:mt-10 flex justify-start items-start"
    >
      <div className="mt-8 lg:mt-0 w-fit ml-2 bg-light-accent dark:bg-dark-accent rounded-lg text-light-secondary px-2 py-1">
        <a href="Samir-Adhikari-CV.pdf" download>
          Download CV
        </a>
      </div>
    </motion.div>
  );
}
