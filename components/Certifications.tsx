"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/variants";
import AnimatedHeading from "./AnimatedHeading";
import Container from "./Container";
import { FaCertificate } from "react-icons/fa";

const certifications = [
  {
    name: "Microsoft Certified: Azure Data Fundamentals",
    link: "https://www.linkedin.com/in/utkarsh-upadhyay-48b6741b5/overlay/1719129125881/single-media-viewer/?profileId=ACoAADIcLKsBVTV3hcUBVril74Ue7UfcTaBQWE0",
  },
  {
    name: "Microsoft Certified: Azure Fundamentals",
    link: "https://www.linkedin.com/in/utkarsh-upadhyay-48b6741b5/overlay/1719129291576/single-media-viewer/?profileId=ACoAADIcLKsBVTV3hcUBVril74Ue7UfcTaBQWE0",
  },
  {
    name: "AWS Foundations Of Prompt Engineering",
    link: "https://www.linkedin.com/in/utkarsh-upadhyay-48b6741b5/details/certifications/1712923906430/single-media-viewer/?profileId=ACoAADIcLKsBVTV3hcUBVril74Ue7UfcTaBQWE0",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="scroll-mt-20 py-16 sm:py-20">
      <Container>
        <AnimatedHeading>Certifications</AnimatedHeading>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {certifications.map((cert, i) => (
            <div
              key={i}
              className="card flex flex-col items-start gap-3 rounded-lg border border-slate-200/70 bg-white p-5 shadow-md transition hover:shadow-lg dark:border-white/10 dark:bg-white/5"
            >
              <FaCertificate className="text-2xl text-brand" />
              <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100">
                {cert.name}
              </h3>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-brand hover:underline"
              >
                View Certificate →
              </a>
            </div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
