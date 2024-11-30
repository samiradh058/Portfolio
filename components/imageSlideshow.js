"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function ImageSlideshow() {
  const [currentImageIndex, setCurrentImageIndex] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex < 3 ? prevIndex + 1 : 1));
    }, 3000);
    return () => clearInterval(interval);
  }, [currentImageIndex]);

  return (
    <div className="md:col-span-5 lg:col-span-5 relative h-[400px] md:w-full w-[80%] mx-auto">
      <Image
        src={`/Me${currentImageIndex}.jpg`}
        alt="My photos"
        fill
        className="border border-none rounded-lg"
      />
    </div>
  );
}
