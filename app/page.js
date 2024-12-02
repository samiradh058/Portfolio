import ContactButton from "@/components/contactButton";
import HomeImage from "@/components/homeImage";
import Name from "@/components/name";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className="flex md:flex-row flex-col-reverse items-center justify-between lg:py-[58px] lg:px-8">
      <div className="xl:w-[600px] lg:w-[480px] md:w-[380px] sm:[400px] w-fit mx-4 mt-6 md:mt-0">
        <h2 className="font-firacode sm:text-[24px] text-[20px] font-semibold animate-bounce">
          Hello there!
        </h2>
        <div className="sm:text-[48px] text-[40px] font-bold">
          <Name name={"Samir Adhikari"} />
        </div>
        <p className="text-justify sm:text-[20px] text-[18px]">
          A Frontend Developer crafting seamless, engaging, and responsive web
          interfaces.
        </p>
        <ContactButton />
      </div>

      <Suspense fallback={<p>Loading Image...</p>}>
        <HomeImage />
      </Suspense>
    </div>
  );
}
