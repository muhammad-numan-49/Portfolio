'use client';

import { motion } from 'framer-motion';
import { Section } from '../layout/Section';

type ExperienceItem = {
  company: string;
  role: string;
  duration: string;
  summary: string;
};

const experience: ExperienceItem[] = [
  {
    company: 'Alphasquad Technologies · Johar Town, Lahore',
    role: 'Senior React Developer',
    duration: 'March 2022 — Present',
    summary:
      'Lead front-end development for multiple enterprise-level React applications, mentoring a team of junior developers and architecting scalable component libraries, data-fetching strategies, and performance optimizations that improved Core Web Vitals by ~35% and accelerated release cycles through CI/CD.'
  },
  {
    company: 'Techify · Faisal Town, Lahore',
    role: 'Front-End Developer',
    duration: 'May 2021 — February 2022',
    summary:
      'Built and maintained 8+ responsive React applications serving 5,000+ daily active users, implementing robust REST API integrations, complex state management with Redux and Context API, and mobile-first UI that contributed to reliable, on-time delivery in an agile environment.'
  }
];

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Hands-on experience shipping real product work."
      description="Selected roles that reflect how I collaborate, lead, and deliver in modern product teams."
    >
      <div className="relative">
        <div className="absolute left-3 sm:left-4 top-0 bottom-0 w-px bg-slate-700/70" />
        <div className="space-y-8">
          {experience.map((item, index) => (
            <motion.div
              key={item.company + item.role}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, ease: 'easeOut', delay: index * 0.08 }}
              className="relative pl-10 sm:pl-12"
            >
              <div className="absolute left-1 sm:left-2 top-2 h-3 w-3 rounded-full bg-emerald-400 shadow-[0_0_0_4px_rgba(16,185,129,0.25)]" />
              <div className="glass-panel rounded-2xl p-4 sm:p-5">
                <div className="flex flex-wrap justify-between gap-2 text-xs sm:text-sm text-slate-300 mb-1">
                  <span className="font-semibold text-slate-100">{item.role}</span>
                  <span className="text-slate-400">{item.duration}</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300">{item.company}</p>
                <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">{item.summary}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

