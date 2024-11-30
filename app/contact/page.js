import { HiMiniPhone } from "react-icons/hi2";
import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoLinkedin,
} from "react-icons/io";

export default function Contact() {
  return (
    <div className="flex md:flex-row flex-col sm:justify-around mt-12 text-light-text dark:text-dark-text justify-center items-center">
      <div className="font-bold lg:text-[92px] md:text-[84px] sm:text-[72px] text-[52px] space-y-[-24px] font-firacode md:my-auto mt-8 items-center">
        <div className="flex flex-col justify-center">
          <div className="flex flex-col xs:flex-row xs:justify-center md:flex-col items-center mt-[-24px]">
            <p className="">Want to&nbsp;</p>
            <p className="flex justify-center text-light-accent dark:text-light-accent md:mt-[-20px] xs:mt-0 mt-[-20px]">
              build
            </p>
          </div>
          <div className="flex flex-col xs:flex-row xs:justify-center md:flex-col items-center mt-[-24px]">
            <p>a new&nbsp;</p>
            <p className="flex justify-center md:pl-16 text-light-accent dark:text-light-accent md:mt-[-20px] xs:mt-0 mt-[-20px]">
              Project?
            </p>
          </div>
        </div>

        <p className="flex justify-end text-[24px] pt-8 items-start">
          Or just say
          <span className="text-light-accent dark:text-light-accent">
            &nbsp;Hello!
          </span>
        </p>
      </div>

      <div className="grid grid-rows-12 h-full mb-8 sm:mt-0 mt-[-8px] mx-4">
        <div className="row-span-3"></div>
        <a
          href="mailto:adhikarisamir68@gmail.com"
          className="row-span-2 text-[28px] text-light-accent dark:text-light-accent hover:underline"
        >
          adhikarisamir68@gmail.com
        </a>
        <div className="flex row-span-5 justify-between md:mt-0 mt-4">
          <ul className="flex flex-col space-y-4">
            <li className="flex items-center gap-2  text-[20px] font-medium hover:scale-105">
              <HiMiniPhone />
              +977 9846983849
            </li>
            <li>
              <a
                href="https://www.facebook.com/samir.adhikari.581187"
                className="flex items-center gap-2  text-[20px] font-medium hover:text-light-accentSecondary hover:dark:text-dark-accentSecondary hover:scale-105"
              >
                <IoLogoFacebook />
                Facebook
              </a>
            </li>
          </ul>
          <ul className="flex flex-col space-y-4">
            <a
              href="https://www.instagram.com/samir_adhk/"
              className="flex items-center gap-2 text-[20px] font-medium hover:text-light-accent hover:scale-105"
            >
              <IoLogoInstagram />
              Instagram
            </a>
            <a
              href="https://www.linkedin.com/in/samir-adhikari-32ba07282/"
              className="flex items-center gap-2 text-[20px] font-medium hover:text-light-accent hover:scale-105"
            >
              <IoLogoLinkedin />
              Linkedin
            </a>
          </ul>
        </div>
        <div className="row-span-2"></div>
      </div>
    </div>
  );
}
