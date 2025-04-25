"use client";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import {
  Mail02Icon,
  SmartPhone03Icon,
} from "hugeicons-react";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { MouseEvent, useEffect, useRef, useState } from "react";

import useActiveSession from "@/hooks/useActiveSession";

import Container from "@/components/common/Container";
import { Button } from "@/components/ui/button";


import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";


const Logo = () => {
  return (
    <Link href="/">
      <Image
        src="/logo.svg"
        alt="G.shalamberidze"
        width={176}
        height={42}
        className="w-full max-w-[140px] lg:max-w-[176px]"
        priority={true}
      />
    </Link>
  );
};

const Nav = ({
  activeTab,
  setActiveTab,
  setIsScrollCompleted,
  className = "",
  layoutId = "bubble",
}: {
  activeTab: string;
  setActiveTab: (state: string) => void;
  setIsScrollCompleted: (state: boolean) => void;
  className?: string;
  layoutId?: string;
}) => {
  const router = useRouter();
  const navList = ["home", "about", "projects", "blogs"];
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  console.log(hoveredTab);

  const onMouseEnter = (target: string) => () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    setHoveredTab(target);
  };

  const handleMouseLeave = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }

    hoverTimeoutRef.current = setTimeout(() => {
      setHoveredTab(null);
    }, 150);
  };

  const onScroll = (e: MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>, target: string) => {
    e.preventDefault();

    setActiveTab(target);
    setIsScrollCompleted(false);

    const top =
      document
        .querySelector(`[data-target="${target}"]`)
        ?.getBoundingClientRect().top ?? 0;

    window.scrollBy(0, top - 150);
    router.push(`/#${target}`, {
      scroll: false,
    });
  };

  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
    };
  }, []);

  return (
    <nav className={`${className} relative flex justify-center flex-1`}>
      <ul className="flex w-max lg:gap-2 items-center p-1 bg-neutral border border-foreground/10 rounded-3xl">
        {navList.map((navItem, index) => (
          <li key={index} className="relative">
            <Link
              href={`/#${navItem}`}
              onClick={(e) => onScroll(e, navItem)}
              onMouseEnter={() => onMouseEnter(navItem)}
              onMouseLeave={handleMouseLeave}
              className="relative z-20 flex items-center px-5 lg:px-6 h-9 lg:h-10 text-xs lg:text-sm font-medium text-foreground/80 rounded-xl capitalize transition-all"
            >
              {navItem}
            </Link>

            {activeTab === navItem && (
              <motion.span
                layoutId={layoutId}
                className="absolute inset-0 bg-black/5 rounded-full z-10"
                transition={{ type: "spring", duration: 0.2 }}
              ></motion.span>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default function Header() {
  const { scrollY } = useScroll();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("home");
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isScrollCompleted, setIsScrollCompleted] = useState(true); // Track if the scroll has completed
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const activeSection = useActiveSession(
    ["home", "about", "projects", "blogs"],
    0.2
  );
  useEffect(() => {
    setIsScrollCompleted(false);
  }, [router]);

  useEffect(() => {
    if (activeSection && isScrollCompleted) {
      router.push(`/#${activeSection}`, { scroll: false });
      setActiveTab(activeSection); // Update active tab when section comes into view
    }
  }, [activeSection, isScrollCompleted, router]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (!isScrollCompleted) {
      return;
    }
    setIsScrolled(latest > 200);
  });

  useEffect(() => {
    if (!isScrollCompleted) {
      timeoutRef.current = setTimeout(() => {
        setIsScrollCompleted(true);
        setIsScrolled(scrollY.get() > 200);
      }, 700);
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [isScrolled, isScrollCompleted, scrollY]);

  const variants = {
    hidden: {
      width: "50px",
      height: "50px",
      maxWidth: "50px",
      maxHeight: "50px",
      opacity: 0,
      top: "-200px",
      borderRadius: "999px",
      transition: { duration: 0.2 },
    },
    show_circle: {
      top: "16px",
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
        stiffness: 5,
        damping: 20,
      },
    },
    expanded_nav: {
      width: "auto",
      height: "auto",
      maxWidth: "500px",
      maxHeight: "500px",
      transition: {
        delay: 0.4,
        duration: 0.4,
        ease: "easeInOut",
      },
    },
    exit: {
      opacity: 0,
      width: "50px",
      height: "50px",
      maxWidth: "50px",
      maxHeight: "50px",
      top: "-200px",
      borderRadius: "999px",
      transition: {
        duration: 0,
        delay: 0,
      },
    },
  };

  return (
    <>
      <header className="py-4">
        <Container className="items-center">
          <div className="flex flex-1 items-center space-x-3 lg:space-x-4">
            <span className="w-[10px] h-[10px] rounded-full bg-primary"></span>
            <Logo />
          </div>

          <Nav
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            setIsScrollCompleted={setIsScrollCompleted}
            className="hidden md:flex"
          />

          <div className="flex-1 flex justify-end space-x-2">
            <Popover>
              <PopoverTrigger asChild>
                <Button asChild variant="primary">
                    <span>
                      Contact
                      <ChevronDown />
                    </span>
                </Button>
              </PopoverTrigger>
              <PopoverContent className="bg-neutral border border-foreground/10 shadow-xl w-[180px] p-1 rounded-xl flex flex-col">
                <Link href={`tel:+995574175188`} className="flex items-center gap-2 text-sm px-3 py-3 hover:bg-foreground hover:text-background transition-all duration-300 rounded-lg">
                  <SmartPhone03Icon className="size-4" />
                  Call Me 
                </Link>
                <Link href={`mailto:gigi.shalamberidze2022@gmail.com`} className="flex items-center gap-2 text-sm px-3 py-3 hover:bg-foreground hover:text-background transition-all duration-300 rounded-lg">
                  <Mail02Icon className="size-4" />
                  Send mail
                </Link>
              </PopoverContent>
            </Popover>
          </div>
        </Container>
      </header>

      <AnimatePresence>
        {isScrolled && (
          <motion.div
            variants={variants}
            initial="hidden"
            animate={["show_circle", "expanded_nav"]}
            transition={{ type: "spring" }}
            exit="exit"
            className="fixed top-4 left-1/2 -translate-x-1/2 w-[50px] h-[50px] overflow-hidden bg-background z-[99]"
            style={{ boxShadow: "0px 0px 20px #00000020" }}
          >
            <Nav
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              setIsScrollCompleted={setIsScrollCompleted}
              layoutId="bubble-2"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
