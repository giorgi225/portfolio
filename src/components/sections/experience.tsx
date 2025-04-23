"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import {
  MouseParallaxChild,
  MouseParallaxContainer,
} from "react-parallax-mouse";
import { Pointer } from "../magicui/pointer";

export default function Experience({ id }: { id: string }) {
  const titleRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: titleRef, // Track only while in view
    offset: ["start end", "end start"], // Start at entering, stop at leaving
  });

  const y = useTransform(scrollYProgress, [0.5, 1], [0, 560]); // Moves up while in view
  const scale = useTransform(scrollYProgress, [0.2, 1], [1, 0.8]); // Slight scale-up
  const workingExperiences = [
    {
      type: "contract",
      position: "Full-Stack Next.js Developer",
      company: "Vitistravel",
      link: "https://vitistravel.com",
      date_range: "2024 Apr - 2024 Oct",
      description:
        "Design and development of Vitis Travel, a tours website built with Next.js, created under contract to provide a seamless booking experience for travel services in Georgia.",
    },
    {
      type: "contract",
      position: "Next.js Developer",
      company: "ImperialTours",
      link: "https://imperialtours.ge",
      date_range: "2024 Jan - 2024 Apr",
      description:
        "Design and development of Imperial Tours, a tours website built under contract. Designed the UI and developed the React.js frontend, integrating it with the backend while collaborating with backend developers.",
    },
    {
      type: "Part-time",
      position: "Front-end Developer",
      company: "Metrix",
      link: "https://metrix.ge",
      date_range: "2023 Feb - 2024 Jan",
      description:
        "Redesign and development of Metrix, a rental platform. Worked part-time to revamp the website using React.js and provided ongoing support.",
    },
    {
      type: "Full-time",
      position: "Front-end Developer",
      company: "LLC Trade Holding",
      link: "https://viptrade.com",
      date_range: "2021 Apr - 2022 Oct",
      description:
        "Front-end development for LLC Trade Holding, where I started my career. Built CRM systems using HTML, CSS, and JavaScript, collaborating closely with designers and backend developers.",
    },
  ];

  return (
    <section className="relative" data-target={id}>
      <div className="container-main">
      <div className="w-full grid lg:grid-cols-[340px_auto] xl:grid-cols-[480px_auto] gap-4 lg:gap-6">
          <motion.h2
            ref={titleRef}
            style={{ y, scale }} // ✅ Corrected: use 'y' instead of 'translateY'
            transition={{ duration: 0.8, ease: [0.6, 0.05, 0.01, 0.99] }}
            className="hidden lg:flex text-2xl lg:text-3xl xl:text-4xl font-bold"
          >
            Working Experience{" "}
          </motion.h2>
          <motion.h2
            initial={{ x: -150 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.8, ease: [0.6, 0.05, 0.01, 0.99] }}
            viewport={{ once: true }}
            className="lg:hidden flex text-2xl lg:text-3xl xl:text-4xl font-bold"
          >
            Working Experience{" "}
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="w-full sm:bg-neutral sm:rounded-3xl divide-y divide-foreground/10 overflow-hidden"
          >
            {workingExperiences.map(
              (
                { type, position, company, link, date_range, description },
                index
              ) => (
                <Link
                  href={link}
                  target="_blank"
                  key={index}
                  className="w-full flex flex-col gap-2 lg:gap-4 py-3 sm:p-4 lg:p-6"
                >
                  <div className="w-full flex justify-between items-start">
                    <div className="flex flex-col">
                      <h3 className="font-medium text-black text-base lg:text-lg">
                        {position}
                      </h3>
                      <h4 className="text-sm font-normal text-foreground/90">
                        <span>{company}</span>{" "}
                        <span
                          className={
                            type === "contract"
                              ? "text-green-700"
                              : type === "Part-time"
                              ? "text-[#0057b3]"
                              : "text-[#b33900]"
                          }
                        >
                          / {type}
                        </span>
                      </h4>
                    </div>
                    <span className="text-xs lg:text-sm text-foreground/70">
                      {date_range}
                    </span>
                  </div>
                  <p className="text-sm">{description}</p>
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
                      className="px-3 py-1.5 bg-black text-neutral rounded-[8px]"
                    >
                      <motion.span
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{
                          duration: 0.8,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      >
                        Visit {company}
                      </motion.span>
                    </motion.div>
                  </Pointer>
                </Link>
              )
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
