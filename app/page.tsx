import About from "@/components/sections/about";
import Contact from "@/components/sections/contact";
import Experience from "@/components/sections/experience";
import Hero from "@/components/sections/hero";
import Works from "@/components/sections/works";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Works />
      <Experience />
      <Contact />
    </>
  );
}
