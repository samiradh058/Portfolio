import ContactButton from "@/components/contactButton";
import Image from "next/image";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className="flex md:flex-row flex-col-reverse justify-between items-center text-light-text dark:text-dark-text">
      <div className="xl:w-[600px] lg:w-[480px] md:w-[380px] sm:[400px] w-fit mx-4">
        <h2 className="font-firacode sm:text-[24px] text-[20px] font-semibold animate-bounce">
          Hello there!
        </h2>
        <h1 className="sm:text-[48px] text-[40px] font-bold">
          I am{" "}
          <span className="text-light-accent dark:text-dark-accent">
            Samir Adhikari
          </span>
        </h1>
        <p className="text-justify sm:text-[20px] text-[18px]">
          A Frontend Developer crafting seamless, engaging, and responsive web
          interfaces.
        </p>
        <ContactButton />
      </div>

      <div className="relative h-80 w-80 md:h-96 md:w-96 border-8 border-t-0 border-light-border dark:border-dark-border rounded-full mt-20 mb-10">
        <Suspense fallback={<p>Loading Image...</p>}>
          <Image
            src="/Me.jpg"
            alt="My photo"
            fill
            className="rounded-full p-2"
          />
        </Suspense>
      </div>
    </div>
  );
}
