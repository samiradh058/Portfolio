"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { HiBars3 } from "react-icons/hi2";

export default function Header() {
  const [showNav, setShowNav] = useState(false);
  const path = usePathname();

  function handleClickHam() {
    setShowNav(!showNav);
  }

  return (
    <nav className="flex justify-between w-[92%] mx-auto items-center z-10 bg-light-bg">
      <div className="relative h-20 w-20">
        <Image src="/Om.png" alt="Logo" fill />
      </div>

      <div className="sm:hidden text-[24px]">
        <HiBars3 onClick={handleClickHam} />
      </div>

      <div
        className={`${
          showNav ? "block" : "hidden"
        } absolute left-0 min-h-fit pt-4 pb-2 top-[16%] items-center flex px-6 w-full sm:flex sm:static sm:w-auto sm:border-none border border-light-border rounded-lg shadow-xl sm:shadow-none border-t-0 bg-light-bg`}
      >
        <ul className="flex flex-col sm:flex-row sm:gap-[4vw] gap-4">
          <li
            className={`hover:text-light-accentSecondary ${
              path === "/" ? "text-light-accent" : ""
            }`}
          >
            <Link href="/">Home</Link>
          </li>
          <li
            className={`hover:text-light-accentSecondary ${
              path.startsWith("/about") ? "text-light-accent" : ""
            }`}
          >
            <Link href="/about">About</Link>
          </li>
          <li
            className={`hover:text-light-accentSecondary ${
              path.startsWith("/creations") ? "text-light-accent" : ""
            }`}
          >
            <Link href="/creations">Creations</Link>
          </li>
          <li
            className={`hover:text-light-accentSecondary ${
              path.startsWith("/contact") ? "text-light-accent" : ""
            }`}
          >
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
