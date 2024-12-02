"use client";
import { useTheme } from "@/context/ColorContext";
import { motion } from "framer-motion";
import Image from "next/image";
import { Suspense } from "react";
import { colors } from "./colors";

const CertificateVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, x: "10vw" },
  visible: {
    opacity: 1,
    x: 0,
  },
};

export default function Certificates() {
  const { isDark, toggleDarkMode, themeColor } = useTheme();

  const mode = isDark ? "dark" : "light";
  const currentTheme = themeColor;

  const currentColors = colors[mode][currentTheme];
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
    <motion.div
      className="mb-12 mt-24"
      variants={CertificateVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <h2 className="font-semibold text-[24px]">Certificates:</h2>
      <div className="grid sm:grid-cols-12 gap-8 mt-8">
        {certificates.map((certificate) => (
          <motion.div
            variants={childVariants}
            className="lg:col-span-4 sm:col-span-6 col-span-12 shadow-sm mx-4 sm:mx-0"
            style={{
              borderColor: currentColors.border,
              borderWidth: "1px",
            }}
            key={certificate.id}
          >
            <div className="relative h-64 w-full">
              <Suspense fallback={<p>Loading Certificate...</p>}>
                <Image
                  src={`/${certificate.image}`}
                  alt="Certificate Image"
                  fill
                />
              </Suspense>
            </div>
            <h3 className="p-1 text-[18px] mt-2">{certificate.title}</h3>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
