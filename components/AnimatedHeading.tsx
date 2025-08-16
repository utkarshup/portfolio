"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { fadeUp } from "@/lib/variants";

export default function AnimatedHeading({ children }: { children: ReactNode }) {
  return (
    <motion.h2
      className="mb-6 text-2xl font-semibold tracking-tight sm:text-3xl"
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
    >
      {children}
    </motion.h2>
  );
}
