import Certificates from "@/components/certificates";
import DownloadCV from "@/components/downloadCV";
import Education from "@/components/education";
import ImageSlideshow from "@/components/imageSlideshow";
import Skills from "@/components/skills";

export default function About() {
  return (
    <div className="mt-12 text-light-text dark:text-dark-text">
      <div className="md:grid md:grid-cols-12 mt-8 flex flex-col-reverse">
        <div className="md:col-span-7 lg:col-span-6 mr-4">
          <h1 className="text-[48px] font-bold mt-8">
            It&apos;s <span className="text-light-accent">Samir</span>
          </h1>
          <p className="text-justify sm:text-[18px] text-[16px] indent-4 mt-4">
            A 3rd-year computer science student passionate about frontend
            development and creating visually appealing webpages with excellent
            user experiences. My strong communication skills and problem solving
            mindset make me an aspiring technopreneur.
          </p>
          <div className="flex sm:flex-row flex-col gap-1 justify-between px-2 mt-8">
            <ul className="space-y-2 sm:mx-0 mx-2">
              <li>
                <span className="font-semibold">Birthday: </span>2001/10/16
              </li>
              <li>
                <span className="font-semibold">Address: </span>Lunkhu
                Deurali-5, Parbat
              </li>
              <li>
                <span className="font-semibold">Current Address: </span>
                Pokhara-17, Birauta
              </li>
            </ul>
            <ul className="space-y-2 sm:mx-0 mx-2">
              <li>
                <span className="font-semibold">Email: </span>
                adhikarisamir68@gmail.com
              </li>
              <li>
                <span className="font-semibold">Phone: </span>+977 9846983849
              </li>
              <li>
                <span className="font-semibold">Freelance: </span>Available
              </li>
            </ul>
          </div>
        </div>
        <div className="lg:col-span-1 hidden lg:block"></div>

        <ImageSlideshow />
      </div>
      <DownloadCV />

      <Education />

      <Skills />

      <Certificates />
    </div>
  );
}
