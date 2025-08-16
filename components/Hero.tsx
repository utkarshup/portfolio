"use client";

import Container from "./Container";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/variants";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden py-20 sm:py-28"
    >
      {/* subtle background gradient */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_10%,rgba(37,99,235,0.15),transparent)] dark:bg-[radial-gradient(60%_50%_at_50%_10%,rgba(96,165,250,0.12),transparent)]"
      />

      <Container>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="relative flex flex-col md:flex-row items-center md:items-start gap-10"
        >
          {/* Left: Profile Image with Gradient Glow */}
          <motion.div
            variants={fadeUp}
            className="relative w-48 h-48 md:w-64 md:h-64 flex-shrink-0"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-full blur-xl opacity-40" />
            <Image
              src="/me.jpg" // <-- put your image inside /public folder with this name
              alt="Utkarsh Upadhyay"
              fill
              className="rounded-full object-cover relative z-10"
              priority
            />
          </motion.div>

          {/* Right: Text Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="relative"
          >
            <motion.p
              variants={fadeUp}
              className="mb-2 text-sm text-brand"
            >
              Hello, I’m
            </motion.p>
            <motion.h1
              variants={fadeUp}
              className="mb-4 text-4xl font-extrabold tracking-tight sm:text-5xl"
            >
              Utkarsh Upadhyay
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="mb-6 text-lg text-[var(--muted)]"
            >
              <span className="font-medium text-[var(--fg)]">
                Software Engineer
              </span>{" "}
              - 2+ years professional experience + 6-month internship.
            </motion.p>

            {/* Skills */}
            <motion.div
              variants={fadeUp}
              className="mb-6 flex flex-wrap items-center gap-2"
            >
              {[
                "Python",
                "Shell",
                "PowerShell scripting",
                "BigFix Application",
                "Javascript",
                "Prompt Engineering",
                "Automation",
                "Linux",
                "Networking",
                "Cloud Computing",
                "Runbook Development",
                "Amazon Web Services (AWS)",
              ].map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-slate-200/70 px-3 py-1 text-sm text-slate-700 dark:border-white/10 dark:text-slate-200"
                >
                  {t}
                </span>
              ))}
            </motion.div>

            {/* Buttons */}
            <motion.div
              variants={fadeUp}
              className="flex flex-wrap items-center gap-3"
            >
              <Link href="#contact" className="btn btn-primary">
                Contact Me
              </Link>
              <a href="#projects" className="btn btn-ghost">
                View Projects
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
