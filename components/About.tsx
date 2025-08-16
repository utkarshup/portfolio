"use client";

import Container from "./Container";
import AnimatedHeading from "./AnimatedHeading";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/variants";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="scroll-mt-20 py-16 sm:py-20">
      <Container>
        <AnimatedHeading>About</AnimatedHeading>

        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          {/* Left side: Text */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="max-w-xl space-y-4 text-[17px] leading-7 text-slate-700 dark:text-slate-300"
          >
            <p>
              Hi, I’m <span className="font-semibold text-slate-900 dark:text-slate-100">Utkarsh Upadhyay</span> - 
              a software engineer driven by automation and efficiency. With 2+ years of experience 
              (plus a 6-month internship), I specialize in{" "}
              <span className="font-medium text-brand">Python</span>,{" "}
              <span className="font-medium text-brand">JavaScript</span>,{" "}
              <span className="font-medium text-brand">Shell & PowerShell scripting</span>, 
              and <span className="font-medium text-brand">BigFix</span>.
            </p>
            <p>
              I thrive on turning repetitive challenges into smart, scalable solutions that make an impact. 
              Currently, I’m expanding into full-stack development to build end-to-end applications. 
              Beyond code, <span className="italic">cricket inspires my approach</span> - strategy, discipline, 
              and teamwork are the values I bring to every project.
            </p>
            <p className="font-medium text-brand text-lg">
              💡 Code that saves time. Solutions that scale. Lessons from the pitch that power my work.
            </p>
          </motion.div>

          {/* Right side: Your Photo */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="flex justify-center md:justify-end"
          >
            <Image
              src="/about-photo.jpg" // ✅ Put your JPG in /public folder
              alt="Utkarsh Upadhyay"
              width={380}
              height={380}
              className="rounded-2xl shadow-lg object-cover border border-slate-200 dark:border-slate-700"
              priority
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
