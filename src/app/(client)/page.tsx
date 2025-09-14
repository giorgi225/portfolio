import { Metadata } from "next";
import { Person } from "schema-dts";

import Header from "@/components/layout/Header";
import AboutMe from "@/components/sections/about-me";
import Blogs from "@/components/sections/blogs";
import Hero from "@/components/sections/hero";
import Works from "@/components/sections/works";

export const metadata: Metadata = {
  title: "gigi shalamberidze | React.js Developer",
  description: `React.js Developer with over 5 years of experience crafting high-performance web apps. I specialize in React, Next.js, and modern JavaScript, and have recently expanded my expertise into backend development with Node.js, Express, and MySQL/Prisma. I focus on building seamless user experiences while ensuring reliable and scalable backend systems`,
  alternates: {
    canonical: `https://shalamberidze-gigi.vercel.app`,
  },
  robots: "index, follow",
  authors: {
    name: "gigi shalamberidze",
    url: "https://shalamberidze-gigi.vercel.app",
  },
  openGraph: {
    type: "website",
    title: "Gigi Shalamberidze | React.js Developer",
    description: "High-performance React.js & Next.js developer portfolio.",
    images: [
      {
        url: "https://shalamberidze-gigi.vercel.app/profile.jpeg",
        width: 800,
        height: 600,
      },
    ],
    url: "https://shalamberidze-gigi.vercel.app",
    siteName: "Gigi Shalamberidze Portfolio",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gigi Shalamberidze | React.js Developer",
    description: "High-performance React.js & Next.js developer portfolio.",
    images: ["https://shalamberidze-gigi.vercel.app/profile.jpeg"],
  },
};

export default function Home() {
  const personSchema: Person = {
    "@type": "Person",
    name: "Gigi Shalamberidze",
    url: "https://shalamberidze-gigi.vercel.app",
    sameAs: ["https://www.linkedin.com/in/gigishalamberidze"],
    jobTitle: "React.js Developer",
    worksFor: {
      "@type": "Organization",
      name: "Freelance / Personal Portfolio",
    },
    image: "https://shalamberidze-gigi.vercel.app/profile.jpeg",
    description:
      "React.js Developer specializing in Next.js, modern JavaScript, and scalable web apps.",
    knowsAbout: [
      "React.js",
      "Next.js",
      "Node.js",
      "Express.js",
      "MySQL",
      "Prisma",
      "Html",
      "Css",
      "Javascript",
      "Typescript",
      "Tailwind.css",
      "Sass",
      "Prisma",
      "Figma",
      "Git",
      "Jest",
      "Redux",
      "Vite",
      "Zustad",
    ],
  };

  // JSON-LD wrapper
  const jsonLd = {
    "@context": "https://schema.org",
    ...personSchema,
  };

  return (
    <>
      <Header />
      <Hero id="home" />
      <div className="page-container">
        <AboutMe id="about" />
        <Works id="projects" />
        <Blogs id="blogs" />
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
