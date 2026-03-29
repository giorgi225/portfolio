import * as motion from "motion/react-client";
import { experiences } from "@/config/experience.config";
import ExperienceCard from "./experienceCard";

export default function Experience() {
  return (
    <>
      <section id="experience" className="py-32 lg:py-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Header */}
          <div className="max-w-3xl mb-16 lg:mb-24">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4"
            >
              Experience
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-serif text-4xl lg:text-6xl font-light"
            >
              Where {"I've"} <span className="italic text-accent">Worked</span>
            </motion.h2>
          </div>

          {/* Experience List */}
          <div className="space-y-0">
            {experiences.map((exp, index) => (
              <ExperienceCard
                key={exp.company}
                experience={exp}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
