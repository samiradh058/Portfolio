"use client";

import { motion } from "framer-motion";

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
  const listStyle =
    "border px-2 py-1 bg-light-secondary dark:bg-dark-secondary rounded-md shadow-md border-light-border dark:border-dark-border";

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
          <ul className="flex gap-4 justify-center my-4">
            <motion.li className={listStyle} variants={childVariants}>
              HTML
            </motion.li>
            <motion.li className={listStyle} variants={childVariants}>
              CSS
            </motion.li>
            <motion.li className={listStyle} variants={childVariants}>
              JavaScript
            </motion.li>
          </ul>
          <ul className="flex gap-4 justify-center my-4">
            <motion.li className={listStyle} variants={childVariants}>
              Bootstrap
            </motion.li>
            <motion.li className={listStyle} variants={childVariants}>
              Tailwind
            </motion.li>
            <motion.li className={listStyle} variants={childVariants}>
              React
            </motion.li>
            <motion.li className={listStyle} variants={childVariants}>
              Typescript
            </motion.li>
            <motion.li className={listStyle} variants={childVariants}>
              Next.js
            </motion.li>
          </ul>
          <ul className="flex gap-4 justify-center my-4">
            <motion.li className={listStyle} variants={childVariants}>
              Git
            </motion.li>
            <motion.li className={listStyle} variants={childVariants}>
              Framer Motion
            </motion.li>
            <motion.li className={listStyle} variants={childVariants}>
              Rest APIs
            </motion.li>
            <motion.li className={listStyle} variants={childVariants}>
              Supabase
            </motion.li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
}
