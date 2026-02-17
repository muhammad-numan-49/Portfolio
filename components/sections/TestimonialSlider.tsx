'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Section } from '../layout/Section';

type Testimonial = {
  name: string;
  role: string;
  company: string;
  quote: string;
};

const testimonials: Testimonial[] = [
  {
    name: 'Product Lead, B2B SaaS',
    role: 'Head of Product',
    company: 'Confidential (NDA)',
    quote:
      'They quickly understood our product and translated vague requirements into a polished frontend. The new flows shipped on time and immediately improved trial-to-paid conversion.'
  },
  {
    name: 'Founder, early-stage startup',
    role: 'Founder & CEO',
    company: 'Stealth startup',
    quote:
      'Their work felt like something we would have expected from a top-tier agency. Communication was clear, and they often anticipated UX issues before they became problems.'
  },
  {
    name: 'Engineering Manager',
    role: 'Engineering Manager',
    company: 'Growth-stage SaaS',
    quote:
      'Clean code, thoughtful abstractions, and a strong sense for detail. They raised the bar for how we think about frontend architecture and UI craftsmanship.'
  }
];

export function TestimonialSlider() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const current = testimonials[index];

  return (
    <Section
      id="testimonials"
      eyebrow="Testimonials"
      title="Trusted by product leaders and founders."
      description="A snapshot of how teams describe working with me. Full references and original reviews are available on request."
    >
      <div className="grid gap-6 md:grid-cols-[minmax(0,1.3fr)_minmax(0,0.7fr)] items-stretch">
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.figure
              key={current.name}
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -24 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="glass-panel rounded-3xl p-6 sm:p-8 h-full flex flex-col justify-between"
            >
              <blockquote className="text-sm sm:text-base text-slate-100 leading-relaxed">
                “{current.quote}”
              </blockquote>
              <figcaption className="mt-6 text-xs sm:text-sm text-slate-300">
                <div className="font-semibold text-slate-50">{current.name}</div>
                <div className="text-slate-400">
                  {current.role} · {current.company}
                </div>
              </figcaption>
            </motion.figure>
          </AnimatePresence>

          <div className="absolute -bottom-4 right-6 flex items-center gap-3">
            <button
              type="button"
              onClick={prev}
              className="h-8 w-8 rounded-full bg-slate-900/80 border border-slate-700/80 text-slate-200 flex items-center justify-center text-xs hover:border-slate-500 transition"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={next}
              className="h-8 w-8 rounded-full bg-slate-900/80 border border-slate-700/80 text-slate-200 flex items-center justify-center text-xs hover:border-slate-500 transition"
            >
              ›
            </button>
          </div>
        </div>

        <div className="space-y-3 text-xs sm:text-sm text-slate-300">
          <div className="glass-panel rounded-2xl p-4 sm:p-5">
            <p className="font-medium text-slate-100 mb-1">How clients typically describe my work</p>
            <ul className="list-disc list-inside space-y-1 text-xs text-slate-300">
              <li>Senior-level ownership of the frontend, not just ticket delivery</li>
              <li>Clear communication, reliable estimates, and proactive UX suggestions</li>
              <li>Attention to performance, accessibility, and long-term maintainability</li>
            </ul>
          </div>
          <div className="glass-panel rounded-2xl p-4 sm:p-5">
            <p className="font-medium text-slate-100 mb-1">Available for</p>
            <ul className="list-disc list-inside space-y-1 text-xs text-slate-300">
              <li>Long-term product partnerships</li>
              <li>Scoped project builds and refactors</li>
              <li>Frontend architecture and component library work</li>
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}

