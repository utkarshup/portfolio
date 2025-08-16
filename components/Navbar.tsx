"use client";

import Link from "next/link";
import Container from "./Container";
import ThemeToggle from "./ThemeToggle";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#education", label: "Education" },
  { href: "#projects", label: "Projects" },
  { href: "#certifications", label: "Certifications" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [active, setActive] = useState<string>("#home");
  const [mobileOpen, setMobileOpen] = useState(false);

  // Track section in view
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 120;

      let current = "#home";
      for (const link of links) {
        const section = document.querySelector(link.href);
        if (
          section &&
          section instanceof HTMLElement &&
          section.offsetTop <= scrollPos
        ) {
          current = link.href;
        }
      }
      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/70 bg-white/80 backdrop-blur-lg dark:border-white/10 dark:bg-[#0b1220]/70">
      <Container>
        <nav className="flex h-16 items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-semibold"
          >
            <Link href="#home" className="text-lg">
              Utkarsh <span className="text-brand">Upadhyay</span>
            </Link>
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden gap-6 md:flex">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`text-sm transition-colors ${
                  active === l.href
                    ? "text-brand underline underline-offset-4"
                    : "text-[var(--muted)] hover:text-brand"
                }`}
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-3">
            <Link href="#contact" className="btn btn-primary text-sm hidden md:inline-block">
              Contact Me
            </Link>
            <ThemeToggle />

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-slate-700 dark:text-slate-200"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <HiX size={24} /> : <HiMenu size={24} />}
            </button>
          </div>
        </nav>

        {/* Mobile Dropdown Menu */}
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-t border-slate-200/70 dark:border-white/10 bg-white dark:bg-[#0b1220] px-4 py-3"
          >
            <div className="flex flex-col gap-4">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setMobileOpen(false)} // close menu after click
                  className={`text-sm transition-colors ${
                    active === l.href
                      ? "text-brand underline underline-offset-4"
                      : "text-slate-600 dark:text-slate-300 hover:text-brand"
                  }`}
                >
                  {l.label}
                </Link>
              ))}

              {/* Contact Button inside Mobile Menu */}
              <Link
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="btn btn-primary text-sm"
              >
                Contact Me
              </Link>
            </div>
          </motion.div>
        )}
      </Container>
    </header>
  );
}
