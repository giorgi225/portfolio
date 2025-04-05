"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";
import {
  MouseParallaxChild,
  MouseParallaxContainer,
} from "react-parallax-mouse";
import { Pointer } from "../magicui/pointer";

export default function Skills() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: videoRef, // Track only while in view
    offset: ["start end", "end start"], // Start at entering, stop at leaving
  });

  const videoY = useTransform(scrollYProgress, [0, 1], [-500, 600]); // Move up as scrolling

  const skills = [
    {
      title: "Html",
      src: "/tools/html.svg",
      experience: `${new Date().getFullYear() - 2020} years`,
    },
    {
      title: "Css",
      src: "/tools/css.svg",
      experience: `${new Date().getFullYear() - 2020} years`,
    },
    {
      title: "Javascript",
      src: "/tools/javascript.svg",
      experience: `${new Date().getFullYear() - 2020} years`,
    },
    {
      title: "Typescript",
      src: "/tools/typescript.svg",
      experience: `${new Date().getFullYear() - 2020} years`,
    },
    {
      title: "TailwindCss",
      src: "/tools/tailwindcss.svg",
      experience: `${new Date().getFullYear() - 2021} years`,
    },
    {
      title: "Sass",
      src: "/tools/sass.svg",
      experience: `${new Date().getFullYear() - 2021} years`,
    },
    {
      title: "Next.js",
      src: "/tools/next.svg",
      experience: `${new Date().getFullYear() - 2021} years`,
    },
    {
      title: "React.js",
      src: "/tools/react.svg",
      experience: `${new Date().getFullYear() - 2021} years`,
    },
    {
      title: "Node.js",
      src: "/tools/node.svg",
      experience: `${new Date().getFullYear() - 2023} years`,
    },
    {
      title: "Express.js",
      src: "/tools/express.svg",
      experience: `${new Date().getFullYear() - 2023} years`,
    },
    {
      title: "MySQL",
      src: "/tools/sql.svg",
      experience: `${new Date().getFullYear() - 2023} years`,
    },
    {
      title: "Prisma",
      src: "/tools/prisma.svg",
      experience: `${new Date().getFullYear() - 2023} years`,
    },
    {
      title: "Figma",
      src: "/tools/figma.svg",
      experience: `${new Date().getFullYear() - 2022} years`,
    },
    {
      title: "Git",
      src: "/tools/git.svg",
      experience: `${new Date().getFullYear() - 2020} years`,
    },
    {
      title: "Jest",
      src: "/tools/jest.svg",
      experience: `${new Date().getFullYear() - 2021} years`,
    },
    {
      title: "Redux",
      src: "/tools/redux.svg",
      experience: `${new Date().getFullYear() - 2021} years`,
    },
    {
      title: "vite",
      src: "/tools/vite.svg",
      experience: `${new Date().getFullYear() - 2021} years`,
    },
    {
      title: "Zustand",
      src: "/tools/zustand.svg",
      experience: `${new Date().getFullYear() - 2021} years`,
    },
  ];

  return (
    <div className="relative w-full bg-black py-12 lg:py-24 overflow-hidden">
      <div className="absolute flex items-center top-1/2 -translate-y-1/2 left-0 w-full h-full object-cover md:object-contain">
        <motion.video
          ref={videoRef}
          src="/hero.mp4"
          className="w-full h-[55%] md:h-full md:object-contain object-cover"
          autoPlay
          animate={{ opacity: 1, scale: 1 }}
          muted
          loop
          style={{ y: videoY }}
          playsInline
          initial={{ opacity: 0, scale: 0 }}
          transition={{
            duration: 1.5,
            ease: [0.6, 0.05, 0.01, 0.99],
            type: "spring",
          }}
        />
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-black/60 backdrop-blur-sm z-10 flex"></div>

      <div className="container-main z-10 relative">
        <div className="w-full flex flex-col gap-8">
          <motion.h2
            initial={{ opacity: 0, y: 50, scale: 0.9 }} // Starts lower & slightly smaller
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
            }} // Moves up & scales to normal
            viewport={{ once: true, amount: 0.5 }} // Trigger when 50% is in view
            transition={{
              duration: 0.6,
              ease: "easeOut",
            }} // Smooth animation
            className="text-2xl lg:text-3xl xl:text-4xl font-bold max-w-[456px] xl:max-w-[731px] text-neutral/70"
          >
            The Core <span className="text-neutral">Technologies, Tools,</span>{" "}
            and <span className="text-neutral">Frameworks</span> I Work With
          </motion.h2>

          <div className="w-full grid grid-cols-3 min-[450px]:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-x-2 sm:gap-x-6 gap-y-6 sm:gap-y-8 mx-auto">
            {skills.map((skill, index) => (
              <div key={index} className={`w-full grid grid-cols-[auto_1fr] items-center gap-2`}>
                <Image
                  src={skill.src}
                  alt={skill.title}
                  width={80}
                  height={80}
                  className="min-w-[40px] max-w-[50px] w-[40px] sm:w-[50px] h-[40px] sm:h-[50px] bg-[#111111] border border-background/10 p-3 rounded-xl sm:rounded-2xl"
                />
                <div className="grid">
                    <h3 className="w-full text-sm sm:text-base text-background/80 overflow-hidden text-ellipsis">
                      {skill.title}
                    </h3>
     
                  <span className="text-xs sm::text-sm text-background/50">
                    {skill.experience}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}
