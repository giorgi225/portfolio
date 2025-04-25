"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Mail02Icon, SmartPhone03Icon } from "hugeicons-react";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { useRef} from "react";

import Experience from "./experience";
import Skills from "./skills";
import { Button } from "../ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";


export default function AboutMe({ id }: { id: string }) {
  const titleRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: titleRef, // Track only while in view
    offset: ["start end", "end start"], // Start at entering, stop at leaving
  });

  const y = useTransform(scrollYProgress, [0.2, 1], [0, 200]); // Moves up while in view
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
              `I’m a Web Developer with over ${
                new Date().getFullYear() - 2020
              } years of experience crafting high-performance web apps. I specialize in React, Next.js, and modern JavaScript, and have recently expanded my expertise into backend development with Node.js, Express, and MySQL/Prisma. I focus on building seamless user experiences while ensuring reliable and scalable backend systems.`,
              "I prioritize clean code, scalability, and security. I implement best practices like JWT, OAuth, and performance optimizations to ensure apps are fast, secure, and able to grow with your users. Let’s create something exceptional together!",
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
            <motion.div
              className="w-max"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 1, ease: [0.6, 0.05, 0.01, 0.99] }}
              viewport={{ once: true }}
            >
              <Popover defaultOpen={true}>
                <PopoverTrigger asChild>
                  <Button asChild variant="primary">
                    <span>
                      Contact
                      <ChevronDown />
                    </span>
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="bg-neutral border border-foreground/10 shadow-xl w-[180px] p-1 rounded-xl flex flex-col">
                  <Link
                    href={`tel:+995574175188`}
                    className="flex items-center gap-2 text-sm px-3 py-3 hover:bg-foreground hover:text-background transition-all duration-300 rounded-lg"
                  >
                    <SmartPhone03Icon className="size-4" />
                    Call Me
                  </Link>
                  <Link
                    href={`mailto:gigi.shalamberidze2022@gmail.com`}
                    className="flex items-center gap-2 text-sm px-3 py-3 hover:bg-foreground hover:text-background transition-all duration-300 rounded-lg"
                  >
                    <Mail02Icon className="size-4" />
                    Send mail
                  </Link>
                </PopoverContent>
              </Popover>
            </motion.div>
          </div>
        </div>
      </div>
      <Skills />
      <Experience id="experience" />
    </section>
  );
}
