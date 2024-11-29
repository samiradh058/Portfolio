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
    <div className="md:col-span-5 lg:col-span-5 relative md:h-[400px] h-[300px] w-full">
      <Image
        src={`/Me${currentImageIndex}.jpg`}
        alt="My photos"
        fill
        className="border rounded-lg"
      />
    </div>
  );
}
