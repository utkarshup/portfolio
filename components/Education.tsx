"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/variants";
import AnimatedHeading from "./AnimatedHeading";
import Container from "./Container";

const education = [
  {
    school: "PSIT Kanpur (Pranveer Singh Institute of Technology)",
    degree: "Bachelor of Technology (B.Tech), Electrical and Electronics Engineering",
    years: "2019 – 2023",
    grade: "Grade: 87.6%",
    activities: "Activities: IEEE Power And Energy Society Member",
  },
  {
    school: "Bhartiya Vidya Bhawan Public School, Lucknow",
    degree: "Intermediate, Science Stream",
    years: "2018-2019",
    grade: "Grade: 94%",
  },
];

export default function Education() {
  return (
    <section id="education" className="scroll-mt-20 py-16 sm:py-20">
      <Container>
        <AnimatedHeading>Education</AnimatedHeading>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="relative space-y-8 border-l border-slate-200/70 pl-6 dark:border-white/10"
        >
          {education.map((edu, i) => (
            <div key={i} className="relative">
              {/* Timeline dot */}
              <span className="absolute -left-[9px] top-2 h-3 w-3 rounded-full bg-brand"></span>

              <div className="rounded-lg bg-white p-5 shadow-md dark:bg-white/5">
                <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100">
                  {edu.school}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  {edu.degree}
                </p>
                <p className="text-sm text-slate-500 dark:text-slate-400">{edu.years}</p>
                <p className="text-sm text-slate-600 dark:text-slate-300">{edu.grade}</p>
                {edu.activities && (
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    {edu.activities}
                  </p>
                )}
              </div>
            </div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
