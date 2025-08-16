"use client";

import Container from "./Container";
import AnimatedHeading from "./AnimatedHeading";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-20 py-16 sm:py-20">
      <Container>
        <AnimatedHeading>Featured Project</AnimatedHeading>
        <ProjectCard
          title="Portfolio Website"
          desc="A responsive, animated portfolio showcasing technical expertise and professional journey."
          tech={["React / Next.js", "TailwindCSS", "Framer Motion"]}
          outcome="Serves as the foundation for future projects and personal branding."
          live="#"
          source="#"
        />
        {/* Easily add more <ProjectCard /> items later */}
      </Container>
    </section>
  );
}
