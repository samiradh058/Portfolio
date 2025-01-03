"use client";

import Image from "next/image";
import { Suspense, useEffect, useState } from "react";
import { motion } from "framer-motion";

const ImageVariants = {
  hidden: { opacity: 0, x: "50vw" },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.1,
      type: "spring",
      stiffness: 50,
    },
  },
};

export default function ImageSlideshow() {
  const [currentImageIndex, setCurrentImageIndex] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex < 3 ? prevIndex + 1 : 1));
    }, 3000);
    return () => clearInterval(interval);
  }, [currentImageIndex]);

  return (
    <motion.div
      variants={ImageVariants}
      initial="hidden"
      animate="visible"
      className="md:col-span-4 lg:col-span-4 relative h-[440px] md:w-full w-[80%] sm:w-[60%] mx-auto"
    >
      <Suspense fallback={<p>Loading Images...</p>}>
        <Image
          src={`/Me${currentImageIndex}.jpg`}
          alt="My photos"
          fill
          className="border border-none rounded-lg"
        />
      </Suspense>
    </motion.div>
  );
}
