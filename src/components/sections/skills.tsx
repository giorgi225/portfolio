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
    { title: "Html", src: "/tools/html.svg" },
    { title: "Javascript", src: "/tools/javascript.svg" },
    { title: "Css", src: "/tools/css.svg" },
    { title: "Typescript", src: "/tools/typescript.svg" },
    { title: "TailwindCss", src: "/tools/tailwindcss.svg" },
    { title: "Sass", src: "/tools/sass.svg" },
    { title: "React.js", src: "/tools/react.svg" },
    { title: "Node.js", src: "/tools/node.svg" },
    { title: "Express.js", src: "/tools/express.svg" },
    { title: "MySQL", src: "/tools/sql.svg" },
    { title: "Prisma", src: "/tools/prisma.svg" },
    { title: "Figma", src: "/tools/figma.svg" },
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
          <div className="w-full grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 border divide-x divide-y border-foreground divide-foreground">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: -20, scale: 0.8 }} // Start with slight opacity and scale down
                whileInView={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }} // Animate to full opacity, move to position, and scale up
                viewport={{ once: true, amount: 0.5 }} // Trigger when 50% is in view
                transition={{
                  delay: index * 0.02, // Stagger animation for each skill
                  duration: 1,
                  ease: "easeOut",
                }}
                className="group relative w-full h-[100px] sm:h-[135px] xl:h-[175px] flex items-center  justify-center group"
              >
                <Image
                  src={skill.src}
                  alt={skill.title}
                  priority={false}
                  width={60}
                  height={60}
                  className="w-full max-w-[32px] sm:max-w-[42px] lg:max-w-[56px] group-hover:brightness-150 group-hover:scale-110 duration-500 transition-all"
                />

                <Pointer>
                  <motion.div
                    animate={{
                      scale: [0.8, 1, 0.8],
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="px-3 py-1.5 rounded-[8px] bg-neutral text-foreground"
                  >
                    <motion.span
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{
                        duration: 0.8,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      {skill.title}
                    </motion.span>
                  </motion.div>
                </Pointer>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
