'use client';

import { motion } from 'framer-motion';
import { Section } from '../layout/Section';

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="Senior React & Next.js developer focused on scalable, production-grade frontends."
      description="With 5+ years of hands-on experience, I specialize in building complex, high-performing web applications in the React ecosystem — from architecture and state management to performance and DX."
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="glass-panel rounded-2xl p-6 sm:p-7 text-sm sm:text-base text-slate-200 leading-relaxed space-y-4"
      >
        <p>
          I&apos;m a senior front-end developer with a strong focus on the React.js ecosystem — React,
          Next.js, TypeScript, and modern state management patterns. Over the last 5+ years I&apos;ve
          architected and delivered enterprise-level applications that serve thousands of users, while
          keeping performance, accessibility, and maintainability front and center.
        </p>
        <p>
          My work ranges from building reusable component libraries and design systems, to implementing
          advanced data-fetching strategies with React Query, SWR, and WebSockets, to optimizing Core Web
          Vitals through code splitting, lazy loading, and caching strategies. I enjoy designing frontend
          architectures using modern patterns like compound components, custom hooks, and context-based
          state management.
        </p>
        <p>
          Beyond coding, I lead teams, mentor junior developers, and collaborate closely with product,
          design, and backend stakeholders. I care about clean code, strong testing practices, and
          creating interfaces that not only look premium but are also robust, accessible, and easy to
          evolve over time.
        </p>
      </motion.div>
    </Section>
  );
}

