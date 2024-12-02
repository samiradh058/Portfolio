import Build from "@/components/build";
import Email from "@/components/email";
import Links from "@/components/links";
import { HiMiniPhone } from "react-icons/hi2";
import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoLinkedin,
} from "react-icons/io";

export default function Contact() {
  return (
    <div className="flex md:flex-row flex-col sm:justify-around justify-center items-center sm:pb-0 xs:pb-12">
      <div className="font-bold lg:text-[92px] md:text-[84px] sm:text-[72px] text-[52px] space-y-[-24px] font-firacode items-center my-auto animate-pulse">
        <div className="flex flex-col justify-center">
          <div className="flex flex-col xs:flex-row xs:justify-center md:flex-col items-center mt-[-24px]">
            <p className="inline">Want to&nbsp;</p>
            <Build build="build" />
          </div>
          <div className="flex flex-col xs:flex-row xs:justify-center md:flex-col items-center mt-[-24px]">
            <p>a new&nbsp;</p>
            <Build build="Project" />
          </div>
        </div>

        <p className="flex justify-end text-[24px] pt-8 items-start">
          Or just say HELLO!
        </p>
      </div>

      <div className="flex sm:gap-16 gap-8 flex-col h-full lg:mx-4 items-center">
        <Email />

        <div className="flex md:mt-0 mt-4 w-full gap-12">
          <ul className="flex flex-col space-y-4">
            <li className="flex items-center gap-2  text-[20px] font-semibold hover:scale-105">
              <HiMiniPhone />
              +977 9846983849
            </li>

            <Links
              link="https://www.facebook.com/samir.adhikari.581187"
              name="Facebook"
              logo={<IoLogoFacebook />}
            />
          </ul>
          <ul className="flex justify-end flex-col space-y-4">
            <Links
              link="https://www.instagram.com/samir_adhk/"
              name="Instagram"
              logo={<IoLogoInstagram />}
            />

            <Links
              link="https://www.linkedin.com/in/samir-adhikari-32ba07282/"
              name="Linkedin"
              logo={<IoLogoLinkedin />}
            />
          </ul>
        </div>
      </div>
    </div>
  );
}
