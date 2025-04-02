"use client";
import {
  ArrowDown01Icon,
  ArrowDown02Icon,
  Facebook01Icon,
  Facebook02Icon,
  Github01Icon,
  GithubIcon,
  Linkedin02Icon,
} from "hugeicons-react";
import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import {
  MouseParallaxChild,
  MouseParallaxContainer,
} from "react-parallax-mouse";
import { useRef, useState } from "react";
import { div } from "framer-motion/client";

export default function Hero({ id }: { id: string }) {
  const { scrollY, scrollYProgress } = useScroll();
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const videoRef = useRef<any>(null);

  const { scrollYProgress: videoScrollYProgress } = useScroll({
    target: videoRef, // Track only while in view
    offset: ["start", "end start"], // Start at entering, stop at leaving
  });
  const videoY = useTransform(videoScrollYProgress, [0, 1], [0, 600]); // Move up as scrolling

  const textY = useTransform(scrollYProgress, [0, 1], [0, -400]); // Move up as scrolling

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 200);
  });

  return (
    <section className="relative" data-target={id}>
      <MouseParallaxContainer
        globalFactorX={0.1}
        globalFactorY={0.1}
        className="flex w-full h-[calc(100vh-120px)] lg:h-[calc(100vh-150px)] md:px-3"
      >
        <div
          ref={videoRef}
          className="relative w-full flex-1 bg-black md:rounded-[36px] overflow-hidden"
        >
          <MouseParallaxChild
            factorX={1}
            factorY={1}
            className="absolute top-1/2 -translate-y-1/2 left-0 w-full h-full object-contain"
          >
            <motion.video
              src="https://cdn-cf-east.streamable.com/video/mp4/q1h9e4.mp4?Expires=1743849360&Signature=JScxdvqW9wo2NIIH3RzUvGsgKndSSg2b2WgaxqnS7GQseHxMGG-h6rodrRVywCUCg1a21aH7IT0NCrczIMpUQ85hc78VQHd~EV3h6wBOq0nGaGC8fs74bAvhv7dJqwQMParGywGXYPgCgR9uQNL4B8Ni0~iVnYvqbDaaFUz6NK7zfciget7Es5e4LGCqKd6sSawcXCKMRLORUDUe3uUfp6rRN1LbGTinj2LBHDm6D-9l-f2qSo2FyTk2KTCV-lCYeTh6bRcMilV1MDSua~RfkW3FiCmrtG5SAgIQA~li0JMP6iFjVMFNHlvb2qonWeaf2vnFiZCcgVsXxIZJeoEDUQ__&Key-Pair-Id=APKAIEYUVEN4EVB2OKEQ"
              className="w-full h-full"
              autoPlay
              animate={{ opacity: 1, scale: 1 }}
              style={{ y: videoY }}
              muted
              loop
              playsInline
              initial={{ opacity: 0, scale: 0, y: 0 }} // Ensure initial y is 0
              transition={{
                duration: 1.5,
                ease: [0.6, 0.05, 0.01, 0.99],
                type: "spring",
              }}
            />
          </MouseParallaxChild>

          <div className="absolute top-0 left-0 w-full h-full bg-black/50 flex">
            <motion.div
              initial={{ opacity: 0, scale: 1.2 }}
              animate={{ opacity: 1, scale: 1 }}
              style={{ y: textY }}
              transition={{
                duration: 1.5,
                delay: 0.2,
                type: "spring",
                ease: [0.6, 0.05, 0.01, 0.99],
              }}
              className="flex flex-col items-center justify-center flex-1 m-auto max-w-[360px] md:max-w-[456px] lg:max-w-[664px] space-y-6 lg:space-y-9"
            >
              <div className="flex flex-col space-y-2 lg:space-y-4">
                <h1 className="text-neutral font-extrabold text-xl sm:text-2xl md:text-3xl lg:text-5xl leading-7 md:leading-10 lg:leading-14 text-center">
                  Crafting Modern & Scalable <br />
                  <span className="text-primary">WEB</span> Experiences
                </h1>
                <p className="text-xs sm:text-sm lg:text-base sm:px-0 px-4 font-medium leading-5 md:leading-auto lg:leading-6 text-neutral/80 text-center">
                  I'm a Web Developer with four years of frontend and one years
                  of backend expertise, focusing on Html, Css, Javascript, and
                  React.js/Next.js.
                </p>
              </div>
              <div className="flex items-center space-x-4 lg:space-x-6">
                <Link
                  href="https://www.facebook.com/profile.php?id=100092546885517"
                  target="_blank"
                  className="w-9 lg:w-11 h-9 lg:h-11 grid place-content-center rounded-xl lg:rounded-2xl border border-neutral/30 text-neutral/80 hover:bg-primary/20 hover:text-primary hover:border-primary hover:rounded-4xl transition-all"
                >
                  <Facebook02Icon className="size-4 lg:size-5" />
                </Link>
                <Link
                  href="https://github.com/giorgi225"
                  target="_blank"
                  className="w-9 lg:w-11 h-9 lg:h-11 grid place-content-center rounded-xl lg:rounded-2xl border border-neutral/30 text-neutral/80 hover:bg-primary/20 hover:text-primary hover:border-primary hover:rounded-4xl transition-all"
                >
                  <GithubIcon className="size-4 lg:size-5" />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/gigi-shalamberidze-b47a27260/"
                  target="_blank"
                  className="w-9 lg:w-11 h-9 lg:h-11 grid place-content-center rounded-xl lg:rounded-2xl border border-neutral/30 text-neutral/80 hover:bg-primary/20 hover:text-primary hover:border-primary hover:rounded-4xl transition-all"
                >
                  <Linkedin02Icon className="size-4 lg:size-5" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </MouseParallaxContainer>
      <div className="absolute w-[50px] lg:w-[70px] h-[50px] lg:h-[70px] rounded-full bg-background p-1 lg:p-2 z-10 -bottom-6 lg:-bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex items-center justify-center w-full h-full rounded-full bg-primary">
          <ArrowDown02Icon className="!size-6" />
        </div>
      </div>
    </section>
  );
}
