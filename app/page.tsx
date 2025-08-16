import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications"; // ✅ New
import Education from "@/components/Education";           // ✅ New
import Contact from "@/components/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Certifications />  {/* 📜 New section */}
      <Education />       {/* 🎓 New section */}
      <Contact />
    </>
  );
}
