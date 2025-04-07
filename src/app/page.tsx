import Header from "@/components/layout/Header";
import AboutMe from "@/components/sections/about-me";
import Blogs from "@/components/sections/blogs";
import Experience from "@/components/sections/experience";
import Hero from "@/components/sections/hero";
import Skills from "@/components/sections/skills";
import Works from "@/components/sections/works";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "gigi shalamberidze | portfolio website",
  description: `I’m a Web Developer with over 5 years of experience crafting high-performance web apps. I specialize in React, Next.js, and modern JavaScript, and have recently expanded my expertise into backend development with Node.js, Express, and MySQL/Prisma. I focus on building seamless user experiences while ensuring reliable and scalable backend systems`,
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
    title: "gigi shalamberidze | portfolio website",
    description: `I’m a Web Developer with over 5 years of experience crafting high-performance web apps. I specialize in React, Next.js, and modern JavaScript, and have recently expanded my expertise into backend development with Node.js, Express, and MySQL/Prisma. I focus on building seamless user experiences while ensuring reliable and scalable backend systems`,
    images: `https://shalamberidze-gigi.vercel.app/profile.jpeg`,
    url: `https://shalamberidze-gigi.vercel.app`,
    siteName: "Gigi Shalamberidze Porfolio",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "gigi shalamberidze | portfolio website",
    description: `I’m a Web Developer with over 5 years of experience crafting high-performance web apps. I specialize in React, Next.js, and modern JavaScript, and have recently expanded my expertise into backend development with Node.js, Express, and MySQL/Prisma. I focus on building seamless user experiences while ensuring reliable and scalable backend systems`,
    images: `https://shalamberidze-gigi.vercel.app/profile.jpeg`,
  },
};

export default function Home() {
  return (
    <>
      <Header />
      <Hero id="home" />
      <div className="page-container">
        <AboutMe id="about" />
        <Works id="projects" />
        <Blogs id="blogs" />
      </div>
    </>
  );
}
