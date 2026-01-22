"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Container from "../common/container";
import Section from "../common/section";

export default function Skills() {
  const currentYear = new Date().getFullYear();

  const skills = [
    { title: "Html", src: "/tools/html.svg", experience: `${currentYear - 2020} years` },
    { title: "Css", src: "/tools/css.svg", experience: `${currentYear - 2020} years` },
    { title: "Javascript", src: "/tools/javascript.svg", experience: `${currentYear - 2020} years` },
    { title: "Typescript", src: "/tools/typescript.svg", experience: `${currentYear - 2020} years` },
    { title: "TailwindCss", src: "/tools/tailwindcss.svg", experience: `${currentYear - 2021} years` },
    { title: "Sass", src: "/tools/sass.svg", experience: `${currentYear - 2021} years` },
    { title: "Next.js", src: "/tools/next.svg", experience: `${currentYear - 2021} years` },
    { title: "React.js", src: "/tools/react.svg", experience: `${currentYear - 2021} years` },
    { title: "Node.js", src: "/tools/node.svg", experience: `${currentYear - 2023} years` },
    { title: "Express.js", src: "/tools/express.svg", experience: `${currentYear - 2023} years` },
    { title: "MySQL", src: "/tools/sql.svg", experience: `${currentYear - 2023} years` },
    { title: "Prisma", src: "/tools/prisma.svg", experience: `${currentYear - 2023} years` },
    { title: "Figma", src: "/tools/figma.svg", experience: `${currentYear - 2022} years` },
    { title: "Git", src: "/tools/git.svg", experience: `${currentYear - 2020} years` },
    { title: "Jest", src: "/tools/jest.svg", experience: `${currentYear - 2021} years` },
    { title: "Redux", src: "/tools/redux.svg", experience: `${currentYear - 2021} years` },
    { title: "Vite", src: "/tools/vite.svg", experience: `${currentYear - 2021} years` },
    { title: "Zustand", src: "/tools/zustand.svg", experience: `${currentYear - 2021} years` },
  ];

  return (
    <Section
      className="py-[6vmax]"
      style={{
        background: "linear-gradient(96deg, #000000, #1e1e24, #000000)",
      }}
    >
      <Container className="relative z-10">
        <div className="flex flex-col gap-[4vmax]">
          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: "3vmax", scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            style={{
              fontSize: "max(1.6rem, 2.5vmax)",
              lineHeight: "115%",
            }}
            className="text-neutral/60 max-w-[50vmax] font-medium"
          >
            The Core <span className="text-neutral">Technologies, Tools,</span> and{" "}
            <span className="text-neutral">Frameworks</span> I Work With
          </motion.h2>

          {/* Grid */}
          <div
            className="grid"
            style={{
              gridTemplateColumns: "repeat(auto-fit, minmax(10vmax, 1fr))",
              gap: "3vmax",
            }}
          >
            {skills.map((skill, index) => (
              <div key={index} className="grid grid-cols-[auto_1fr] gap-[1vmax] items-center">
                {/* Icon */}
                <Image
                  src={skill.src}
                  alt={skill.title}
                  width={80}
                  height={80}
                  className="bg-[#111111] border border-neutral/10 p-[0.7vmax] rounded-[0.9vmax]"
                  style={{
                    width: "clamp(40px, 4vmax, 50px)",
                    height: "clamp(40px, 4vmax, 50px)",
                  }}
                />

                {/* Text */}
                <div className="grid">
                  <h3
                    style={{ fontSize: "max(0.9rem, 1vmax)" }}
                    className="text-background/80 truncate"
                  >
                    {skill.title}
                  </h3>

                  <span
                    style={{ fontSize: "max(0.75rem, 0.8vmax)" }}
                    className="text-background/50"
                  >
                    {skill.experience}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}