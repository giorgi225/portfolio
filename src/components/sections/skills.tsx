import { motion } from "framer-motion";
import Image from "next/image";

export default function Skills() {
  const currentYear = new Date().getFullYear();
  const skills = [
    {
      title: "Html",
      src: "/tools/html.svg",
      experience: `${currentYear - 2020} years`,
    },
    {
      title: "Css",
      src: "/tools/css.svg",
      experience: `${currentYear - 2020} years`,
    },
    {
      title: "Javascript",
      src: "/tools/javascript.svg",
      experience: `${currentYear - 2020} years`,
    },
    {
      title: "Typescript",
      src: "/tools/typescript.svg",
      experience: `${currentYear - 2020} years`,
    },
    {
      title: "TailwindCss",
      src: "/tools/tailwindcss.svg",
      experience: `${currentYear - 2021} years`,
    },
    {
      title: "Sass",
      src: "/tools/sass.svg",
      experience: `${currentYear - 2021} years`,
    },
    {
      title: "Next.js",
      src: "/tools/next.svg",
      experience: `${currentYear - 2021} years`,
    },
    {
      title: "React.js",
      src: "/tools/react.svg",
      experience: `${currentYear - 2021} years`,
    },
    {
      title: "Node.js",
      src: "/tools/node.svg",
      experience: `${currentYear - 2023} years`,
    },
    {
      title: "Express.js",
      src: "/tools/express.svg",
      experience: `${currentYear - 2023} years`,
    },
    {
      title: "MySQL",
      src: "/tools/sql.svg",
      experience: `${currentYear - 2023} years`,
    },
    {
      title: "Prisma",
      src: "/tools/prisma.svg",
      experience: `${currentYear - 2023} years`,
    },
    {
      title: "Figma",
      src: "/tools/figma.svg",
      experience: `${currentYear - 2022} years`,
    },
    {
      title: "Git",
      src: "/tools/git.svg",
      experience: `${currentYear - 2020} years`,
    },
    {
      title: "Jest",
      src: "/tools/jest.svg",
      experience: `${currentYear - 2021} years`,
    },
    {
      title: "Redux",
      src: "/tools/redux.svg",
      experience: `${currentYear - 2021} years`,
    },
    {
      title: "vite",
      src: "/tools/vite.svg",
      experience: `${currentYear - 2021} years`,
    },
    {
      title: "Zustand",
      src: "/tools/zustand.svg",
      experience: `${currentYear - 2021} years`,
    },
  ];

  return (
    <div
      className="relative w-full py-12 lg:py-24 overflow-hidden"
      style={{
        background: "linear-gradient(96deg, #000000, #1e1e24, #000000)",
      }}
    >
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
              <div
                key={index}
                className={`w-full grid grid-cols-[auto_1fr] items-center gap-2`}
              >
                <Image
                  src={skill.src}
                  alt={skill.title}
                  width={80}
                  height={80}
                  priority={false}
                  loading="lazy"
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
