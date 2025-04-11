"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function PageLoader() {
  const [startReveal, setStartReveal] = useState(false);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Curtains will start sliding after 2s
    const revealTimer = setTimeout(() => {
      setStartReveal(true);
    }, 2000);

    // Entire loader removed from DOM after curtains slide
    const doneTimer = setTimeout(() => {
      setIsDone(true);
    }, 3200);

    return () => {
      clearTimeout(revealTimer);
      clearTimeout(doneTimer);
    };
  }, []);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          {/* Left Panel */}
          <motion.div
            className="w-1/2 h-full absolute left-0 top-0"
            style={{
              background: "linear-gradient(45deg, #000000, #0c161f)",
            }}
            initial={{ x: 0 }}
            animate={startReveal ? { x: "-100%" } : { x: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut", delay: 0.1 }}
          />

          {/* Right Panel */}
          <motion.div
            className="w-1/2 h-full absolute right-0 top-0"
            style={{
              background: "linear-gradient(315deg, rgb(0, 0, 0), rgb(12, 22, 31))",
            }}
            initial={{ x: 0 }}
            animate={startReveal ? { x: "100%" } : { x: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut", delay: 0.1 }}
          />

          {/* Center Loader - instantly visible */}
          <motion.div
            initial={{ opacity: 1, scale: 1 }}
            animate={startReveal ? { opacity: 0, scale: 0.95 } : { opacity: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="relative z-10"
          >
            {/* Replace this with your logo or SVG */}
            <div className="w-10 h-10 border-4 border-white border-t-transparent rounded-full animate-spin" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}