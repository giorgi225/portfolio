"use client";
import Link from "next/link";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";

export default function Menu() {
  const menu = ["home", "about", "works", "blogs"];
  const { scrollY } = useScroll();
  const [scrolling, setScrolling] = useState(false);

  // Variants for nav items staggered animation
  const navItemVariants = {
    hidden: { opacity: 0, y: -20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
  };

  // Detect scrolling
  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolling(latest > 100); // if scroll > 10px, consider scrolling
  });

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{
        opacity: 1,
        y: 0,
        // backgroundColor: scrolling ? "#ffffff80" : "transparent",
        // backdropFilter: scrolling ? "blur(24px)" : "blur(0px)",
        // boxShadow: scrolling
        //   ? "0 4px 10px rgba(0,0,0,0.05)"
        //   : "0 0 0 rgba(0,0,0,0)",
        // borderRadius: scrolling ? "999px" : "0px",
      }}
      transition={{
        duration: 0.4,
        ease: "easeOut",
      }}
      className={`${
        scrolling ? "bg-neutral rounded-full shadow-2xl" : ""
      } fixed right-1/2 translate-x-1/2 md:-translate-x-0 md:right-[6vmax] bottom-[2vmax] md:bottom-[inherit] md:top-[2vmax] max-w-max ml-auto justify-center flex-1 z-50 duration-500 delay-100`}
    >
      <ul className="flex w-max items-center p-1">
        {menu.map((navItem, index) => (
          <motion.li
            key={index}
            className="relative"
            variants={navItemVariants}
            initial="hidden"
            animate="show"
            transition={{ delay: index * 0.05 }}
          >
            <Link
              href={`/#${navItem}`}
              className="relative px-[max(1rem,1.2vmax)] py-[max(0.6rem,0.6vmax)] hover:bg-foreground/5 rounded-full flex items-center text-foreground capitalize transition-all z-20"
              style={{ fontSize: "max(0.9rem, 0.9vmax)" }}
            >
              {navItem}
            </Link>
          </motion.li>
        ))}
      </ul>
    </motion.nav>
  );
}
