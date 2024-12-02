import Certificates from "@/components/certificates";
import DownloadCV from "@/components/downloadCV";
import Education from "@/components/education";
import Mottos from "@/components/mottos";
import Name from "@/components/name";
import Skills from "@/components/skills";

import { getDetails } from "@/lib/getDetails";

export default async function About() {
  const { data, error } = await getDetails();

  return (
    <div className="items-center">
      <div className="md:grid md:grid-cols-12 flex flex-col items-center justify-center">
        <div className="md:col-span-7 lg:col-span-7 mr-4">
          <Name name={"Samir"} />
          <p className="text-justify sm:text-[18px] text-[16px] indent-4 mt-4">
            {data[0].description}
          </p>
          <div className="flex sm:flex-row flex-col gap-1 justify-between px-2 mt-8">
            <ul className="space-y-2 sm:mx-0 mx-2">
              <li>
                <span className="font-semibold">Birthday: </span>
                {data[0].birthday}
              </li>
              <li>
                <span className="font-semibold">Address: </span>
                {data[0].address}
              </li>
              <li>
                <span className="font-semibold">Current Address: </span>
                {data[0].current_address}
              </li>
            </ul>
            <ul className="space-y-2 sm:mx-0 mx-2">
              <li>
                <span className="font-semibold">Email: </span>
                {data[0].email}
              </li>
              <li>
                <span className="font-semibold">Phone: </span>
                {data[0].phone}
              </li>
              <li>
                <span className="font-semibold">Freelance: </span>
                {data[0].freelance ? "Avaibable" : "Not Available"}
              </li>
            </ul>
          </div>
        </div>
        <div className="lg:col-span-1 hidden lg:block"></div>

        {/* <ImageSlideshow /> */}
        <Mottos />
      </div>
      <DownloadCV />

      <Education />

      <Skills />

      <Certificates />
    </div>
  );
}
