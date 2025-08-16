"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/variants";
import Link from "next/link";

type Props = {
  title: string;
  desc: string;
  tech: string[];
  outcome: string;
  live?: string;
  source?: string;
};

const dataUrl =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' width='1200' height='630'>
      <defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'><stop stop-color='#2563eb' offset='0'/><stop stop-color='#60a5fa' offset='1'/></linearGradient></defs>
      <rect width='100%' height='100%' fill='url(#g)'/>
      <g fill='white' font-family='Inter, Arial' text-anchor='middle'>
        <text x='600' y='320' font-size='48' font-weight='700'>Portfolio Website</text>
        <text x='600' y='380' font-size='22' opacity='0.9'>Next.js + TailwindCSS + Framer Motion</text>
      </g>
    </svg>`
  );

export default function ProjectCard({ title, desc, tech, outcome, live = "#", source = "#" }: Props) {
  return (
    <motion.article
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="card overflow-hidden"
    >
      <div className="grid gap-0 md:grid-cols-2">
        <div className="relative aspect-[16/9] md:aspect-auto md:h-full">
          <Image
            src={dataUrl}
            alt={`${title} preview`}
            fill
            priority={false}
            loading="lazy"
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <div className="flex flex-col gap-4 p-6">
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-slate-700 dark:text-slate-300">{desc}</p>
          <div className="flex flex-wrap gap-2">
            {tech.map((t) => (
              <span key={t} className="rounded-md bg-slate-100 px-2 py-1 text-xs text-slate-700 dark:bg-white/10 dark:text-slate-300">
                {t}
              </span>
            ))}
          </div>
          <p className="text-sm text-[var(--muted)]"><span className="font-medium text-[var(--fg)]">Outcome:</span> {outcome}</p>
          <div className="mt-auto flex gap-3">
            {/*
<Link href={live} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
  Live Demo
</Link>
<Link href={source} className="btn btn-ghost" target="_blank" rel="noopener noreferrer">
  Source Code
</Link>
*/}

          </div>
        </div>
      </div>
    </motion.article>
  );
}
