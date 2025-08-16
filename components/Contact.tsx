"use client";

import { useState } from "react";
import Container from "./Container";
import AnimatedHeading from "./AnimatedHeading";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/variants";
import { FaEnvelope, FaLinkedin, FaCode } from "react-icons/fa";

type FormState = {
  name: string;
  email: string;
  message: string;
};

export default function Contact() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ [k: string]: string }>({});
  const [status, setStatus] = useState(""); // For API success/error messages

  const validate = (): boolean => {
    const e: { [k: string]: string } = {};
    if (!form.name.trim()) e.name = "Name is required.";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = "Valid email is required.";
    if (!form.message.trim()) e.message = "Please enter a message.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;

    setStatus("⏳ Sending...");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("✅ Message sent successfully!");
        setSubmitted(true);
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("❌ Failed to send message. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setStatus("❌ Failed to send message. Please try again.");
    }
  };

  return (
    <section id="contact" className="scroll-mt-20 py-16 sm:py-20">
      <Container>
        <AnimatedHeading>Contact</AnimatedHeading>

        <div className="grid gap-8 md:grid-cols-[1.2fr_.8fr]">
          {/* Contact Form */}
          <motion.form
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            onSubmit={onSubmit}
            className="card p-6"
            noValidate
          >
            <div className="mb-4">
              <label
                htmlFor="name"
                className="mb-1 block text-sm font-medium"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Your full name"
                className="w-full rounded-md border border-slate-200/70 bg-white px-3 py-2 text-slate-900 outline-none ring-brand/30 transition focus:ring-2 dark:border-white/10 dark:bg-white/10 dark:text-slate-100"
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-600">{errors.name}</p>
              )}
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="mb-1 block text-sm font-medium"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="you@example.com"
                className="w-full rounded-md border border-slate-200/70 bg-white px-3 py-2 text-slate-900 outline-none ring-brand/30 transition focus:ring-2 dark:border-white/10 dark:bg-white/10 dark:text-slate-100"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email}</p>
              )}
            </div>

            <div className="mb-4">
              <label
                htmlFor="message"
                className="mb-1 block text-sm font-medium"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="How can I help?"
                className="w-full resize-y rounded-md border border-slate-200/70 bg-white px-3 py-2 text-slate-900 outline-none ring-brand/30 transition focus:ring-2 dark:border-white/10 dark:bg-white/10 dark:text-slate-100"
              />
              {errors.message && (
                <p className="mt-1 text-sm text-red-600">{errors.message}</p>
              )}
            </div>

            <button type="submit" className="btn btn-primary">
              Send Message
            </button>

            {status && (
              <p
                className={`mt-3 text-sm ${
                  submitted
                    ? "text-green-700 dark:text-green-400"
                    : "text-red-600"
                }`}
              >
                {status}
              </p>
            )}
          </motion.form>

          {/* Reach Out Sidebar */}
          <motion.aside
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="card p-6 flex flex-col justify-between"
          >
            <div>
              <h4 className="mb-2 text-lg font-semibold">Reach Out</h4>
              <p className="mb-4 text-sm text-[var(--muted)]">
                I’m open to collaborations, interesting problems, and freelance inquiries.
              </p>

              <div className="space-y-4">
                <a
                  href="mailto:utkarshu197@gmail.com"
                  className="flex items-center gap-3 p-3 rounded-lg bg-slate-50 hover:bg-slate-100 dark:bg-white/5 dark:hover:bg-white/10 transition shadow-sm"
                >
                  <FaEnvelope className="text-indigo-600 text-xl" />
                  <span className="font-medium">Email</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/utkarsh-upadhyay-48b6741b5/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg bg-slate-50 hover:bg-slate-100 dark:bg-white/5 dark:hover:bg-white/10 transition shadow-sm"
                >
                  <FaLinkedin className="text-blue-600 text-xl" />
                  <span className="font-medium">LinkedIn</span>
                </a>

                <a
                  href="https://leetcode.com/u/utk_18/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg bg-slate-50 hover:bg-slate-100 dark:bg-white/5 dark:hover:bg-white/10 transition shadow-sm"
                >
                  <FaCode className="text-yellow-500 text-xl" />
                  <span className="font-medium">LeetCode</span>
                </a>
              </div>
            </div>

            {/* Footer Microcopy */}
            <p className="mt-6 text-xs text-[var(--muted)]">
              Prefer email? I usually reply within a day.
            </p>
          </motion.aside>
        </div>
      </Container>
    </section>
  );
}
