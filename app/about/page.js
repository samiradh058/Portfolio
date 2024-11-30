import ImageSlideshow from "@/components/imageSlideshow";
import Image from "next/image";

export default function About() {
  const listStyle =
    "border px-2 py-1 bg-light-secondary dark:bg-dark-secondary rounded-md shadow-md border-light-border dark:border-dark-border";

  const certificates = [
    {
      id: 1,
      image: "Aws-Certificate.png",
      title:
        "AWS Academy Graduate - AWS Academy Introduction to Cloud Semester 1",
    },
    {
      id: 2,
      image: "Excel-Certificate.png",
      title:
        "Udemy- Microsoft Excel 2023: Beginner to Excel Pro in only 6 hours",
    },
  ];

  return (
    <div className="mt-12 text-light-text dark:text-dark-text">
      <div className="md:grid md:grid-cols-12 mt-8 flex flex-col-reverse">
        <div className="md:col-span-7 lg:col-span-6 mr-4">
          <h1 className="text-[48px] font-bold mt-8">
            I&apos;m <span className="text-light-accent">Samir Adhikari</span>
          </h1>
          <p className="text-justify indent-4 mt-8">
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
            <ul className="space-y-2">
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
      <div className="mt-8 lg:mt-0 w-fit ml-2 bg-light-accent dark:bg-dark-accent rounded-lg text-light-secondary px-2 py-1">
        {/* <a href="/Samir-Adhikari-CV.pdf" download="Samir-Adhikari-CV.pdf">
          Download CV
        </a> */}
        Download CV
      </div>

      <div className="mt-24">
        <h3 className="font-semibold text-[24px]">Education</h3>

        <div className="relative flex mt-6">
          <div className="absolute sm:top-6 top-8 left-6 sm:left-0 w-[6px] sm:w-[98%] h-[100%] sm:h-[6px] bg-light-accent mt-[-20px]"></div>

          <div className="sm:grid sm:grid-cols-12 w-full">
            <div className="col-span-3">
              <div className="flex sm:flex-col sm:items-center sm:text-center items-center my-2 sm:my-0">
                <div className="w-6 h-6 bg-light-accent rounded-full sm:mt-[-4px] ml-[15px]"></div>
                <div className="ml-4">
                  <p className="mt-2 font-semibold">SEE (2018)</p>
                  <p className="sm:mx-2">Chhorepatan Secondary School</p>
                </div>
              </div>
            </div>
            <div className="col-span-1"></div>
            <div className="col-span-3">
              <div className="flex sm:flex-col sm:items-center sm:text-center items-center my-2 sm:my-0">
                <div className="w-6 h-6 bg-light-accent rounded-full sm:mt-[-4px] ml-[15px]"></div>
                <div className="ml-4">
                  <p className="mt-2 font-semibold">SLC (2022)</p>
                  <p className="sm:mx-2">Chhorepatan Secondary School</p>
                </div>
              </div>
            </div>
            <div className="col-span-1"></div>
            <div className="col-span-4">
              <div className="flex sm:flex-col sm:items-center sm:text-center items-center my-2 sm:my-0">
                <div className="w-6 h-6 bg-light-accent rounded-full sm:mt-[-4px] ml-[15px]"></div>
                <div className="ml-4">
                  <p className="mt-2 font-semibold">BSc. CSIT (Running)</p>
                  <p className="sm:mx-2">Prithvi Narayan Campus</p>
                </div>
              </div>
            </div>
            {/* <div className="col-span-1"></div> */}
          </div>
        </div>
      </div>

      <div className="flex justify-center mb-10 mt-24">
        <div className="flex flex-col items-center">
          <h2 className="font-semibold text-[24px]">My Skills</h2>
          <div className="mt-4">
            <ul className="flex gap-4 justify-center my-3">
              <li className={listStyle}>HTML</li>
              <li className={listStyle}>CSS</li>
              <li className={listStyle}>JavaScript</li>
            </ul>
            <ul className="flex gap-4 justify-center my-3">
              <li className={listStyle}>Bootstrap</li>
              <li className={listStyle}>Tailwind</li>
              <li className={listStyle}>React</li>
              <li className={listStyle}>Typescript</li>
              <li className={listStyle}>Next.js</li>
            </ul>
            <ul className="flex gap-4 justify-center my-3">
              <li className={listStyle}>Git</li>
              <li className={listStyle}>Framer Motion</li>
              <li className={listStyle}>Rest APIs</li>
              <li className={listStyle}>Supabase</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mb-12 mt-24">
        <h2 className="font-semibold text-[24px]">Certificates:</h2>
        <div className="grid sm:grid-cols-12 gap-8 mt-8">
          {certificates.map((certificate) => (
            <div
              className="md:col-span-4 sm:col-span-6 col-span-12 border border-light-border dark:border-dark-border shadow-sm"
              key={certificate.id}
            >
              <div className="relative h-64 w-full">
                <Image
                  src={`/${certificate.image}`}
                  alt="Certificate Image"
                  fill
                />
              </div>
              <h3 className="p-1 text-[18px] mt-2">{certificate.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
