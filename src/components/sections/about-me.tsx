"use client";

import { motion } from "framer-motion";
import Section from "@/components/common/section";
import Container from "@/components/common/container";
import Link from "next/link";
import { Facebook02Icon, GithubIcon, Linkedin02Icon } from "hugeicons-react";

const START_YEAR = 2021;
const EXPERIENCE_YEARS = new Date().getFullYear() - START_YEAR;

/* ---------------- MOTION ---------------- */

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: "3vmax",
  },
  show: {
    opacity: 1,
    y: "0vmax",
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const socialVariants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    y: "1.5vmax",
  },
  show: {
    opacity: 1,
    scale: 1,
    y: "0vmax",
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

/* --------------------------------------- */

export default function AboutMe() {
  return (
    <Section id="about-me">
      <Container className="pt-[8vmax] pb-[15vmax]">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-120px" }}
          className="flex flex-col"
        >
          {/* -------- TITLE -------- */}
          <motion.h1
            variants={itemVariants}
            style={{
              fontSize: "max(2.2rem, 3.5vmax)",
              lineHeight: "115%",
            }}
            className="max-w-[60vmax]"
          >
            I’m a React.js frontend developer focused on real-world products.
          </motion.h1>

          {/* -------- DESCRIPTION -------- */}
          <motion.p
            variants={itemVariants}
            className="mt-[1.5vmax] max-w-[45vmax] text-foreground/80"
            style={{ fontSize: "max(1rem, 1.2vmax)" }}
          >
            With {EXPERIENCE_YEARS}+ years of experience, I build fast, scalable
            interfaces using React, Next.js, and modern frontend tools—focused
            on performance, usability, and clean architecture.
          </motion.p>

          {/* -------- SOCIALS -------- */}
          <motion.div
            variants={containerVariants}
            className="flex items-center gap-[1vmax] mt-[4vmax]"
          >
            {[
              {
                href: "https://www.facebook.com/profile.php?id=100092546885517",
                icon: Facebook02Icon,
              },
              {
                href: "https://github.com/giorgi225",
                icon: GithubIcon,
              },
              {
                href: "https://www.linkedin.com/in/gigi-shalamberidze-b47a27260/",
                icon: Linkedin02Icon,
              },
            ].map(({ href, icon: Icon }, index) => (
              <motion.div
                key={index}
                variants={socialVariants}
                whileHover={{ scale: 1.15, rotate: 3 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={href}
                  target="_blank"
                  className="grid place-content-center
                    size-[max(40px,3.2vmax)]
                    rounded-[1vmax]
                    border border-neutral/30
                    bg-neutral text-foreground
                    hover:bg-primary/20 hover:text-primary hover:border-primary
                    transition-all duration-300"
                >
                  <Icon className="size-[1.4vmax]" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
}
