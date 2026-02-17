'use client';

import { motion } from 'framer-motion';
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

export function Testimonials() {
  return (
    <Section
      id="testimonials"
      eyebrow="Testimonials"
      title="Trusted by product leaders and founders."
      description="Real feedback from teams I&apos;ve worked with. Originals available on request or via Upwork."
    >
      <div className="grid gap-6 md:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <motion.figure
            key={testimonial.name + testimonial.company}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, ease: 'easeOut', delay: index * 0.08 }}
            className="glass-panel rounded-2xl p-5 sm:p-6 flex flex-col justify-between"
          >
            <blockquote className="text-xs sm:text-sm text-slate-200 leading-relaxed">
              “{testimonial.quote}”
            </blockquote>
            <figcaption className="mt-4 text-xs text-slate-400">
              <div className="font-semibold text-slate-100">{testimonial.name}</div>
              <div>
                {testimonial.role} · {testimonial.company}
              </div>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </Section>
  );
}

