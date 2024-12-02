"use client";

import Image from "next/image";
import { HiArrowLongRight } from "react-icons/hi2";
import { motion } from "framer-motion";
import { Suspense } from "react";

const ProjectVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, x: "4vw" },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 50,
      damping: 10,
    },
  },
};

export default function Creations() {
  const projects = [
    {
      id: 1,
      image: "Godam-project.png",
      title: "Store management System",
      description:
        "A complete store management application made using React JS and Tailwind for frontend and Supabase for backend. This application also includes features like statistics to display current status and provides appropriate feedback to every user action.",
      seemore:
        "https://github.com/samiradh058/LearnReact/tree/main/store-management",
    },
    {
      id: 2,
      image: "TaskHub-project.png",
      title: "TaskHub",
      description:
        "An employee management application made using Next JS and Tailwind for frontend and Supabase for backend. Features like parallel route and intercepting routes are implemented to achieve desired functionality The application allows users to manage employees within the organization and assign tasks flexibly between any two users.",
      seemore: "https://github.com/samiradh058/Task-Hub",
    },
  ];

  return (
    <motion.div
      variants={ProjectVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="mt-8"
    >
      <h2 className="text-[32px] font-bold">My Latest Noteworthy Projects:</h2>
      <div className="grid md:grid-cols-12 gap-8 mb-12">
        {projects.map((project) => (
          <motion.div
            variants={childVariants}
            className="sm:col-span-6 col-span-12 border border-light-border dark:border-dark-border shadow-sm mt-8"
            key={project.id}
          >
            <div className="relative h-80 w-full">
              <Suspense fallback={<p>Loading Project Image</p>}>
                <Image src={`/${project.image}`} alt="Project Image" fill />
              </Suspense>
            </div>
            <h3 className="mt-4 text-[20px] font-bold px-2">{project.title}</h3>
            <p className="text-justify my-2 px-2">{project.description}</p>
            <a
              className="px-2 text-light-accent dark:text-dark-accent underline flex items-center"
              href={project.seemore}
            >
              Github &nbsp;
              <HiArrowLongRight />
            </a>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
