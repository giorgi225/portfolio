"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { X } from "lucide-react";
import { Menu } from "iconsax-reactjs";
import { Nav, NavLink } from "./nav";

const navLinks = [
  { href: "/#about", label: "About" },
  { href: "/#work", label: "Work" },
  { href: "/#experience", label: "Experience" },
  { href: "/#contact", label: "Contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    // Only intercept hash links like /#about
    if (!href.startsWith("/#")) return;

    e.preventDefault();
    const hash = href.slice(1); // → #about

    setIsMobileMenuOpen(false);

    if (pathname === "/") {
      // Already on home — update URL and scroll
      window.history.pushState(null, "", href);
      document.querySelector(hash)?.scrollIntoView({ behavior: "instant" });
    } else {
      // Navigate to home, then scroll after the page mounts
      router.push(href);
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-background/60 backdrop-blur-xl border-b border-border"
            : ""
        }`}
      >
        <nav className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Link
                href="/"
                className="font-secondary text-2xl tracking-tight text-foreground font-semibold"
              >
                Gigi Shalamberidze
              </Link>
            </motion.div>

            <Nav className="hidden md:flex items-center gap-12">
              {navLinks.map((link, index) => (
                <NavLink
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * (index + 1), duration: 0.5 }}
                >
                  {link.label}
                </NavLink>
              ))}
            </Nav>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-foreground"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X size={24} />
              ) : (
                <Menu variant="Bold" size={24} />
              )}
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-background/60 backdrop-blur-3xl md:hidden"
          >
            <Nav className="flex flex-col items-center justify-center h-full gap-8">
              {navLinks.map((link, index) => (
                <NavLink
                  key={link.href}
                  className="text-2xl uppercase tracking-[0.2em] text-foreground hover:text-accent"
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: 0.1 * index }}
                >
                  {link.label}
                </NavLink>
              ))}
            </Nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
