"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "../ui/button";
import { SmartPhone01Icon } from "hugeicons-react";
import { useEffect, useRef, useState } from "react";
import { MouseParallaxChild } from "react-parallax-mouse";
import Link from "next/link";
import Skills from "./skills";
import Experience from "./experience";

export default function AboutMe({ id }: { id: string }) {
  const titleRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: titleRef, // Track only while in view
    offset: ["start end", "end start"], // Start at entering, stop at leaving
  });

  const y = useTransform(scrollYProgress, [0.2, 1], [0, 380]); // Moves up while in view
  const scale = useTransform(scrollYProgress, [0.2, 1], [1, 0.8]); // Slight scale-up

  return (
    <section data-target={id} className="!py-0 page-container">
      <div className="container-main">
        <div className="w-full grid lg:grid-cols-[340px_auto] xl:grid-cols-[480px_auto] gap-4 lg:gap-6">
          {/* Animated Heading */}
          <motion.h2
            ref={titleRef}
            style={{ y, scale }} // ✅ Corrected: use 'y' instead of 'translateY'
            transition={{ duration: 1, ease: [0.6, 0.05, 0.01, 0.99] }}
            className="hidden lg:flex text-2xl lg:text-3xl xl:text-4xl font-bold"
          >
            Who I Am & What I Do
          </motion.h2>
          <motion.h2
            initial={{ x: -150 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 1, ease: [0.6, 0.05, 0.01, 0.99] }}
            viewport={{ once: true }}
            className="lg:hidden flex text-2xl lg:text-3xl xl:text-4xl font-bold"
          >
            Who I Am & What I Do
          </motion.h2>

          {/* Static Description */}
          <div className="flex flex-col gap-4 lg:gap-6">
            {[
              "I’m a Web developer with 4+ years of experience turning ideas into high-performance web applications. Specializing in React, Next.js, and modern JavaScript, I’ve spent the last two years expanding my expertise into backend development—architecting scalable systems with Node.js, Express, and relational databases (MySQL, Prisma). My work balances sleek frontend experiences with bulletproof backend logic, ensuring apps are as fast as they are functional.",
              "Clean code and scalable architecture are the backbone of everything I build. I obsess over performance optimization, achieving 90+ Lighthouse scores for mission-critical platforms by streamlining code, optimizing APIs, and implementing lazy-loading strategies. Security-first practices like JWT and OAuth are non-negotiable, and I design systems to grow with your users, not hold them back.",
              "Let’s create something exceptional. Whether it’s a dynamic travel portal, a service-based platform, or a custom web solution, I thrive on solving complex problems with elegant, maintainable code. Explore my projects below, or reach out to discuss how we can build software that stands the test of time—and traffic.",
            ].map((text, i) => (
              <motion.p
                key={i}
                custom={i}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: i * 0.02,
                  duration: 0.5,
                }}
                className="font-medium text-sm lg:text-base leading-6"
              >
                {text}
              </motion.p>
            ))}
            <motion.div className="w-max"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 1, ease: [0.6, 0.05, 0.01, 0.99] }}
              viewport={{ once: true }}
            >
              <Button asChild className="w-max" variant="primary">
                <Link href={`tel:+995574175188`}>
                  Call Me
                  <SmartPhone01Icon />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
      <Skills />
      <Experience id="experience" />
    </section>
  );
}
