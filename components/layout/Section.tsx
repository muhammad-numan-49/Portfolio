'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

type SectionProps = {
  id: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
};

export function Section({ id, eyebrow, title, description, children }: SectionProps) {
  return (
    <section id={id} className="py-16 sm:py-20 lg:py-24 scroll-mt-28">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          {eyebrow && (
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400 mb-3">
              {eyebrow}
            </p>
          )}
          <h2 className="text-2xl sm:text-3xl lg:text-[2rem] font-semibold tracking-tight text-slate-50">
            {title}
          </h2>
          {description && (
            <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
              {description}
            </p>
          )}
        </motion.div>
        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
}

