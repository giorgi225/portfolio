import Header from "@/components/layout/Header";
import AboutMe from "@/components/sections/about-me";
import Blogs from "@/components/sections/blogs";
import Experience from "@/components/sections/experience";
import Hero from "@/components/sections/hero";
import Skills from "@/components/sections/skills";
import Works from "@/components/sections/works";

export default function Home() {
  return (
    <>
      <Header />
      <Hero id="home" />
      <div className="page-container">
        <AboutMe id="about" />
        <Skills />
        <Experience id="experience" />
        <Works id="projects" />
        <Blogs id="blogs" />
      </div>
    </>
  );
}
