"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const imageVariant = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      type: "spring",
      stiffness: 50,
    },
  },
};

export default function HomeImage() {
  return (
    <motion.div
      variants={imageVariant}
      initial="hidden"
      animate="visible"
      className="relative h-80 w-80 md:h-96 md:w-96 border-8 border-t-0 border-light-border dark:border-dark-border rounded-full mt-[40px] md:mt-0"
    >
      <Image src="/Me.jpg" alt="My photo" fill className="rounded-full p-2" />
    </motion.div>
  );
}
