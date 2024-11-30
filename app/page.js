import Image from "next/image";
import Link from "next/link";
import { HiArrowLongRight } from "react-icons/hi2";

export default function Home() {
  return (
    <div className="flex md:flex-row flex-col-reverse justify-between items-center text-light-text dark:text-dark-text">
      <div className="xl:w-[600px] lg:w-[480px] md:w-[380px] sm:[400px] w-fit mx-4">
        <h2 className="font-firacode text-[24px] font-semibold">
          Hello there!
        </h2>
        <h1 className="text-[48px] font-bold">
          I am <span className="text-light-accent">Samir Adhikari</span>
        </h1>
        <p className="text-justify">
          A 3rd-year computer science student passionate about frontend
          development and creating visually appealing webpages with excellent
          user experiences. My strong communication skills and problem solving
          mindset make me an aspiring technopreneur.
        </p>
        <Link
          href="/contact"
          className="mt-12 border border-light-border dark:border-dark-border bg-light-accent w-fit px-2 py-1 rounded-xl text-light-secondary flex items-center font-[20px] md:mb-0 mb-20"
        >
          Contact Me: &nbsp; <HiArrowLongRight />
        </Link>
      </div>
      <div className="relative h-80 w-80 md:h-96 md:w-96 border-4 border-t-0 border-light-border dark:border-dark-border rounded-full mt-20 mb-10">
        <Image src="/Me.jpg" alt="My photo" fill className="rounded-full p-2" />
      </div>
    </div>
  );
}
