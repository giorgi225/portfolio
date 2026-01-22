"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  MouseParallaxChild,
  MouseParallaxContainer,
} from "react-parallax-mouse";

import { projects } from "@/data/data";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import Section from "@/components/common/section";
import Container from "@/components/common/container";

export default function Works({ id }: { id: string }) {
  return (
    <Section className="container-main py-[8vmax]" data-target={id}>
      <Container className="w-full flex flex-col gap-[3vmax]">
        <div className="flex flex-col gap-[1vmax]">
          <motion.h2
            initial={{ x: -150, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            style={{
              fontSize: "max(1.6rem, 2.5vmax)",
              lineHeight: "115%",
            }}
            className="max-w-[40vmax] font-medium"
          >
            My Projects
          </motion.h2>
          <motion.p
            initial={{ x: -150, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="md:max-w-[30vmax] text-foreground/80"
            style={{ fontSize: "max(0.9rem, 1vmax)" }}
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
                className="flex flex-col gap-4"
              >
                <Carousel className="group/parent">
                  <CarouselContent>
                    {project.images.map((image, index) => (
                      <CarouselItem key={index}>
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
                                src={image}
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
                          </div>
                        </Link>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="disabled:opacity-0 group-hover/parent:opacity-100 -translate-x-4 group-hover/parent:translate-x-4 opacity-0 text-foreground bg-background h-10 w-10 left-4 transition-all duration-400" />
                  <CarouselNext className="disabled:opacity-0 group-hover/parent:opacity-100 translate-x-4 group-hover/parent:-translate-x-4 opacity-0 text-foreground bg-background h-10 w-10 right-4 transition-all duration-400" />
                </Carousel>
                {/* Project Info */}
                <div className="flex flex-col lg:gap-[0.5vmax] px-[1vmax]">
                  <h4
                    style={{ fontSize: "max(1.1rem, 2vmax)" }}
                    className="truncate"
                  >
                    {project.title}
                  </h4>
                  <p style={{ fontSize: "max(0.9rem, 1vmax)" }}>
                    {project.description}
                  </p>
                </div>
              </motion.div>
            </MouseParallaxContainer>
          ))}
        </div>
      </Container>
    </Section>
  );
}
