"use client";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Container from "@/components/common/container";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Logo = () => {
  return (
    <Link href="/" className="flex" style={{ height: "max(2rem, 3vmax)" }}>
      <Image
        src="/logo.svg"
        alt="G.shalamberidze"
        width={176}
        height={42}
        className="w-full"
        priority={true}
      />
    </Link>
  );
};

export default function Header2() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  // Hide header on scroll down, show on scroll up
  useMotionValueEvent(scrollY, "change", (latest) => {
    const prev = scrollY.getPrevious() ?? 0;
    if (latest > prev && latest > 100) {
      setHidden(true); // scrolling down
    } else {
      setHidden(false); // scrolling up
    }
  });

  return (
    <motion.header
      // slide/fade header on scroll
      animate={hidden ? { y: -80, opacity: 0 } : { y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="w-full z-50 top-0 left-0"
    >
      <Container className="flex items-center py-[2.5vmax]">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <Logo />
        </motion.div>
      </Container>
    </motion.header>
  );
}
