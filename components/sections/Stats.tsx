'use client';

import { motion } from 'framer-motion';
import { Section } from '../layout/Section';

const stats = [
  {
    label: 'Years of experience',
    value: '4+',
    detail: 'Senior-level React & Next.js focus'
  },
  {
    label: 'Projects delivered',
    value: '20+',
    detail: 'From SaaS dashboards to marketing sites'
  },
  {
    label: 'Industries',
    value: 'SaaS, EdTech, FinTech',
    detail: 'B2B products and consumer apps'
  },
  {
    label: 'Engagements',
    value: 'Long-term friendly',
    detail: 'Available for ongoing product work'
  }
];

export function Stats() {
  return (
    <Section
      id="stats"
      eyebrow="Why clients work with me"
      title="Clear, senior-level reliability for product teams."
    >
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
        {stats.map((item, index) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.35, ease: 'easeOut', delay: index * 0.05 }}
            className="glass-panel rounded-2xl px-4 py-4 sm:px-5 sm:py-5"
          >
            <div className="text-xl sm:text-2xl font-semibold text-slate-50">{item.value}</div>
            <div className="mt-1 text-xs font-medium uppercase tracking-wide text-slate-400">
              {item.label}
            </div>
            <div className="mt-2 text-xs text-slate-300">{item.detail}</div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

