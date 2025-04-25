// components/LenisProvider.tsx
"use client";
import Lenis from "lenis";
import { useEffect } from "react";

const LenisProvider = () => {
  useEffect(() => {
    const lenis = new Lenis({
        lerp: 0.5
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return null;
};

export default LenisProvider;
