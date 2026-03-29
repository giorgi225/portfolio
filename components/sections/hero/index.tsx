import * as motion from "motion/react-client";
import { Heading } from "@/components/ui/heading";
import { Paragraph } from "@/components/ui/paragraph";
import { Button } from "@/components/ui/button";
import { ArrowRight, DocumentDownload } from "iconsax-reactjs";
import { Link } from "@/components/core/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      <div className="grid-box-background"></div>
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 pt-32 pb-20">
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <Paragraph
              size={`sm`}
              color="muted"
              className="uppercase tracking-[0.3em]"
            >
              React / Next.js Developer
            </Paragraph>
          </motion.div>

          <div className="overflow-hidden">
            <motion.div
              initial={{ y: 120, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 1,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <Heading level="h1">
                I build fast,
                <br />
                <span className="italic text-accent">scalable web apps</span>
              </Heading>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <Paragraph size={`lg`} color={`muted`} className="max-w-xl">
              I’m a React developer focused on building modern web applications
              with Next.js. Over the past few years, I’ve worked on real-world
              products — from travel platforms to custom SaaS tools — with a
              strong focus on performance, scalability, and clean, maintainable
              code.
            </Paragraph>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap gap-6 pt-4"
          >
            <Button asChild>
              <Link href={`#work`}>
                View Works <ArrowRight />
              </Link>
            </Button>

            <Button asChild variant={`outline`}>
              <Link href={`/`}>
                Download CV <DocumentDownload />
              </Link>
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-24 lg:mt-32 grid grid-cols-2 gap-8 border-t border-border pt-12"
        >
          {[
            { value: "5+", label: "Years Experience" },
            { value: "15+", label: "Projects Completed" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
              className="space-y-2 flex flex-col"
            >
              <Paragraph size={`5xl`} className="font-serif font-light">
                {stat.value}
              </Paragraph>
              <Paragraph
                size={`sm`}
                color={`muted`}
                className="uppercase tracking-[0.15em]"
              >
                {stat.label}
              </Paragraph>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
