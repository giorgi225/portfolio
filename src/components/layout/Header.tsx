"use client";
// Next
import Link from "next/link";
import Image from "next/image";
import { ChangeEvent, MouseEvent, useEffect, useRef, useState } from "react";
// Third-party
import {
  AnimatePresence,
  motion,
  useAnimation,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { Menu01Icon, SmartPhone01Icon } from "hugeicons-react";
// Components
import { Button } from "@/components/ui/button";
import Container from "@/components/common/Container";
import { usePathname, useRouter } from "next/navigation";
import useIntersectionObserver from "@/hooks/observer";

const Logo = () => {
  return (
    <Link href="/">
      <Image
        src="/logo.svg"
        alt="G.shalamberidze"
        width={176}
        height={42}
        className="w-full max-w-[140px] lg:max-w-[176px]"
      />
    </Link>
  );
};

const Nav = ({
  activeTab,
  setActiveTab,
  setIsScrollCompleted,
  className = "",
}: {
  activeTab: string;
  setActiveTab: (state: string) => void;
  setIsScrollCompleted: (state: boolean) => void;
  className?: string;
}) => {
  const pathname = usePathname();
  const router = useRouter();
  const navList = ["home", "about", "projects", "blogs"];
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

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

  const onScroll = (e: any, target: string) => {
    e.preventDefault();

    setActiveTab(target);
    setIsScrollCompleted(false);

    const top =
      document
        .querySelector(`[data-target="${target}"]`)
        ?.getBoundingClientRect().top ?? 0;

    console.log(top);

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
                layoutId="bubble"
                className="absolute inset-0 bg-black/5 rounded-full z-10"
                transition={{ type: "spring", duration: 0.5 }}
              ></motion.span>
            )}

            {hoveredTab === navItem && (
              <motion.span
                layoutId="hover"
                className="absolute inset-0 bg-gray-50 rounded-full"
                transition={{ type: "spring", duration: 0.5 }}
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
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState("home");
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isScrollCompleted, setIsScrollCompleted] = useState(true); // Track if the scroll has completed
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const activeSection = useIntersectionObserver([
    "home",
    "about",
    "projects",
    "blogs",
  ]);

  useEffect(() => {
    console.log(123);

    setIsScrollCompleted(false);
  }, [router]);

  useEffect(() => {
    if (activeSection && isScrollCompleted) {
      router.push(`/#${activeSection}`, { scroll: false });
      setActiveTab(activeSection); // Update active tab when section comes into view
    }
  }, [activeSection, isScrollCompleted]);

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
  }, [isScrolled, isScrollCompleted]);

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
        duration: 0.5,
        ease: "easeInOut",
      },
    },
    expanded_nav: {
      width: "auto",
      height: "auto",
      maxWidth: "500px",
      maxHeight: "500px",
      transition: {
        delay: 0.7,
        duration: 0.4,
        ease: "easeInOut",
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0,
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
            <Button asChild variant="primary">
              <Link href={`tel:+995574175188`}>
                Call Me
                <SmartPhone01Icon />
              </Link>
            </Button>
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
            className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[50px] h-[50px] shadow-lg overflow-hidden bg-background"
          >
            <Nav
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              setIsScrollCompleted={setIsScrollCompleted}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
