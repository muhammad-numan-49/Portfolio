'use client';

import { motion } from 'framer-motion';
import { Section } from '../layout/Section';

type SkillCategory = {
  label: string;
  items: string[];
};

const skillCategories: SkillCategory[] = [
  {
    label: 'Frontend',
    items: [
      'React.js (ES6+)',
      'Next.js',
      'TypeScript',
      'Redux Toolkit',
      'HTML5 / CSS3',
      'Tailwind CSS',
      'SCSS / Sass',
      'Material UI',
      'Ant Design',
      'Framer Motion'
    ]
  },
  {
    label: 'Data & Integration',
    items: [
      'RESTful APIs',
      'GraphQL',
      'Axios',
      'SWR',
      'React Query',
      'WebSocket integration'
    ]
  },
  {
    label: 'Tools, Quality & Workflow',
    items: [
      'Git & GitHub',
      'Webpack / Vite',
      'ESLint & Prettier',
      'Jest',
      'React Testing Library',
      'PWA & Web Vitals',
      'CI/CD pipelines',
      'Figma to code',
      'Agile / Scrum'
    ]
  }
];

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="A senior-level React, Next.js, and UI engineering toolkit."
      description="Technologies and practices I use to ship scalable, maintainable, and performance-focused frontends."
    >
      <div className="grid gap-6 sm:grid-cols-3">
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.label}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, ease: 'easeOut', delay: index * 0.1 }}
            className="glass-panel rounded-2xl p-5 sm:p-6 flex flex-col"
          >
            <h3 className="text-sm font-semibold text-slate-100 mb-3">{category.label}</h3>
            <div className="flex flex-wrap gap-1.5">
              {category.items.map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center rounded-full border border-slate-700/70 bg-slate-900/60 px-2.5 py-1 text-xs text-slate-200 shadow-sm"
                >
                  <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

