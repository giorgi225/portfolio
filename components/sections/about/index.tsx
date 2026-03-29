import * as motion from "motion/react-client";
import { GithubIcon, Linkedin02Icon } from "hugeicons-react";
import { Paragraph } from "@/components/ui/paragraph";
import { Heading, MotionHeading } from "@/components/ui/heading";

const socialLinks = [
  { icon: GithubIcon, href: "#", label: "Github" },
  { icon: Linkedin02Icon, href: "#", label: "LinkedIn" },
];

export default function About() {
  return (
    <section id="about" className="py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-8"
          >
            <div
              className="relative aspect-4/5 p-4 overflow-hidden bg-secondary"
              style={{
                backgroundImage: "url('/imgs/banner.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-background/50" />
              <div className="absolute inset-0 flex items-end p-8">
                <div className="w-full h-1/2 bg-linear-to-t from-background/80 to-transparent" />
              </div>
              {/* Placeholder with initials */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-serif text-8xl text-muted-foreground/20">
                  G.S
                </span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-300"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <div className="lg:pt-16">
            <Paragraph
              size={`sm`}
              color={`muted`}
              className="uppercase tracking-[0.3em] mb-6"
            >
              About
            </Paragraph>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Heading level="h2" className="mb-8">
                Building modern web apps,
                <br />
                <span className="italic text-accent">
                  focused on performance & clean UI
                </span>{" "}
              </Heading>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-6 text-muted-foreground leading-relaxed"
            >
              <Paragraph color="muted">
                {"I'm"} a React.js developer specializing in building fast,
                scalable, and user-friendly web applications. My primary stack
                is <span className="text-foreground font-medium">React</span>{" "}
                and <span className="text-foreground font-medium">Next.js</span>
                , with strong experience in{" "}
                <span className="text-foreground font-medium">TypeScript</span>.
                I focus on clean architecture, maintainable code, and delivering
                real value through every project.
              </Paragraph>
              <Paragraph color="muted">
                I’ve worked with multiple clients, helping turn ideas into
                production-ready products — from landing pages to more complex
                web applications using modern technologies and best practices.
              </Paragraph>

              <Paragraph color="muted">
                Alongside frontend, I also have experience with{" "}
                <span className="text-foreground font-medium">Node.js</span> and{" "}
                <span className="text-foreground font-medium">Express</span>.
                While my main strength is frontend development, I continue
                improving my backend skills to better understand full-stack
                architecture and build more complete solutions.
              </Paragraph>
            </motion.div>

            {/* Skills */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-12 space-y-6"
            >
              <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
                Core Stack
              </p>
              <div className="flex flex-wrap gap-3">
                {[
                  "React.js",
                  "Next.js",
                  "TypeScript",
                  "Tailwind CSS",
                  "Shadcn/UI",

                  "Node.js",
                  "Express.js",

                  "Redux",
                  "Zustand",

                  "Prisma",
                  "MySQL",

                  "Figma",
                  "Git",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-secondary text-sm text-secondary-foreground border border-border"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
