import * as motion from "motion/react-client";
import { projects } from "@/config/projects.config";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { GithubIcon } from "hugeicons-react";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-28 px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
        {/* Background index number */}
        <span
          aria-hidden
          className="pointer-events-none select-none absolute -top-4 right-0 font-serif text-[20vw] font-light leading-none text-foreground/[0.03] whitespace-nowrap"
        >
          Work
        </span>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-5"
        >
          All Projects
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-serif text-5xl lg:text-8xl font-light leading-[0.95] mb-8"
        >
          Selected
          <br />
          <span className="italic text-accent">Work.</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex items-center gap-6"
        >
          <div className="h-px w-12 bg-border" />
          <p className="text-muted-foreground text-sm">
            {projects.length} projects across{" "}
            {[...new Set(projects.map((p) => p.category))].length} categories
          </p>
        </motion.div>
      </section>

      {/* Divider */}
      <div className="h-px bg-border mx-6 lg:mx-8 max-w-7xl lg:mx-auto" />

      {/* Projects list */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8">
        {projects.map((project, index) => (
          <ProjectRow key={project.id} project={project} index={index} />
        ))}
      </section>

      {/* Footer cta */}
      <section className="py-32 px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-6"
        >
          Have a project in mind?
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-serif text-4xl lg:text-6xl font-light mb-10"
        >
          Let&apos;s build something{" "}
          <span className="italic text-accent">together.</span>
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Link
            href="/#contact"
            className="group inline-flex items-center gap-3 border border-foreground px-8 py-4 text-sm uppercase tracking-[0.2em] hover:bg-foreground hover:text-background transition-all duration-300"
          >
            Get in touch
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </motion.div>
      </section>
    </main>
  );
}

// ─── Project Row ────────────────────────────────────────────────────────────

function ProjectRow({
  project,
  index,
}: {
  project: (typeof projects)[number];
  index: number;
}) {
  const num = String(index + 1).padStart(2, "0");

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: 0.05 }}
      className="group relative grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-0 border-b border-border py-12 lg:py-16"
    >
      {/* Left: content */}
      <div className="flex flex-col lg:flex-row lg:items-start gap-8 lg:gap-12">
        {/* Index + category */}
        <div className="flex-shrink-0 flex lg:flex-col items-center lg:items-start gap-4 lg:gap-2 lg:w-28 lg:pt-1">
          <span className="font-serif text-4xl font-light text-muted-foreground/30 leading-none">
            {num}
          </span>
          <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
            {project.year}
          </span>
        </div>

        {/* Main info */}
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="text-xs uppercase tracking-[0.2em] text-accent border border-accent/30 px-3 py-1">
              {project.category}
            </span>
          </div>

          <h2 className="font-serif text-3xl lg:text-5xl font-light mb-4 group-hover:text-accent transition-colors duration-300">
            {project.title}
          </h2>

          <p className="text-muted-foreground leading-relaxed max-w-xl mb-6 text-sm lg:text-base">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs text-muted-foreground bg-secondary px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex items-center gap-6">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group/link inline-flex items-center gap-2 text-sm uppercase tracking-[0.15em] text-foreground hover:text-accent transition-colors"
              >
                Live site
                <ExternalLink className="h-3.5 w-3.5 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group/link inline-flex items-center gap-2 text-sm uppercase tracking-[0.15em] text-muted-foreground hover:text-foreground transition-colors"
              >
                GitHub
                <GithubIcon className="h-3.5 w-3.5" />
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Right: image strip */}
      <div className="lg:w-72 xl:w-96 flex-shrink-0 mt-8 lg:mt-0">
        <ImageStrip images={project.images} title={project.title} />
      </div>

      {/* Hover line accent */}
      <div className="absolute bottom-0 left-0 h-px w-0 bg-accent transition-all duration-500 group-hover:w-full" />
    </motion.article>
  );
}

// ─── Image Strip ─────────────────────────────────────────────────────────────

function ImageStrip({
  images,
  title,
}: {
  images: readonly string[];
  title: string;
}) {
  const visible = images.slice(0, 3);

  return (
    <div className="relative h-48 lg:h-56">
      {visible.map((src, i) => (
        <div
          key={src}
          className="absolute top-0 overflow-hidden border border-border transition-all duration-500"
          style={{
            left: `${i * 28}px`,
            width: "calc(100% - 56px)",
            height: "100%",
            zIndex: i + 1,
            transform: `rotate(${(i - 1) * 2}deg)`,
          }}
        >
          <Image
            src={`/imgs${src}`}
            alt={`${title} screenshot ${i + 1}`}
            fill
            className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
            sizes="(max-width: 768px) 100vw, 384px"
          />
        </div>
      ))}
    </div>
  );
}
