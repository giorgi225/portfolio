"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  MouseParallaxChild,
  MouseParallaxContainer,
} from "react-parallax-mouse";

import { projects } from "@/data/data";

import { Pointer } from "../magicui/pointer";

export default function Works({ id }: { id: string }) {
  return (
    <section className="container-main" data-target={id}>
      <div className="w-full flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <motion.h2
            initial={{ x: -150, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-2xl lg:text-3xl xl:text-4xl font-bold"
          >
            My Projects
          </motion.h2>
          <motion.p
            initial={{ x: -150, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-sm lg:text-base font-medium leading-5 max-w-[451px]"
          >
            I&apos;ve worked on a variety of projects, from simple websites to
            complex web applications. Here are a few of my favorites.{" "}
          </motion.p>
        </div>

        <div className="w-full flex flex-nowrap snap-start snap-x overflow-auto md:grid md:grid-cols-2 gap-x-4 lg:gap-x-6 gap-y-9">
          {projects.map((project, index) => (
            <MouseParallaxContainer
              resetOnLeave
              globalFactorX={0.1}
              globalFactorY={0.1}
              key={index}
              className="flex-1 min-w-[calc(100%/1.2)]"
            >
              <motion.div
                initial={{ y: 50 }}
                whileInView={{ y: 0 }}
                viewport={{ once: true, amount: 0 }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.05,
                  ease: "easeOut",
                }}
              >
                <Link
                  href={`/projects/${project.slug}`}
                  className="relative group flex flex-col gap-2 lg:gap-4"
                >
                  <div
                    className="relative rounded-4xl overflow-hidden bg-gray-200"
                    style={{ aspectRatio: 628 / 471 }}
                  >
                    <MouseParallaxChild factorX={0.5} factorY={0.5}>
                      <Image
                        src={project.main_image}
                        alt={project.slug}
                        width={1000}
                        height={500}
                        priority={false}
                        loading="lazy"
                        className="lg:scale-105 group-hover:scale-110 w-full h-full z-10 transition-all duration-300"
                      />
                    </MouseParallaxChild>
                    {/* Overlay Effects */}
                    <div className="absolute top-0 left-0 w-full h-full bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute -top-4 right-4 opacity-0 group-hover:top-4 group-hover:opacity-100 transition-all duration-500">
                      <div className="flex items-center justify-end flex-wrap gap-2 lg:gap-3">
                        {project.keywords.slice(0, 3).map((keyword) => (
                          <span
                            key={keyword}
                            className="text-nowrap text-xs lg:text-sm px-3 py-1.5 rounded-full bg-neutral text-foreground"
                          >
                            {keyword}
                          </span>
                        ))}
                      </div>
                    </div>
                    {/* Pointer Effect */}
                    <Pointer>
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="text-neutral border border-neutral/20 flex items-center justify-center w-24 h-24 rounded-full bg-white/10 backdrop-blur-sm "
                      >
                        <motion.span className="text-sm text-nowrap font-medium items-center gap-2">
                          See Project
                        </motion.span>
                      </motion.div>
                    </Pointer>
                  </div>
                  {/* Project Info */}
                  <div className="flex flex-col lg:gap-1 px-4">
                    <h4 className="text-base lg:text-xl font-bold">
                      {project.title}
                    </h4>
                    <p className="text-sm lg:text-base font-normal leading-5">
                      {project.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            </MouseParallaxContainer>
          ))}
        </div>
      </div>
    </section>
  );
}
