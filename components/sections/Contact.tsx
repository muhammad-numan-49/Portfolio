'use client';

import { motion } from 'framer-motion';
import { Section } from '../layout/Section';
import { siteConfig } from '../../lib/site-config';

export function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let’s talk about your next product or feature."
      description="Share a bit about your project, timeline, and what success looks like. I’ll usually reply within one business day."
    >
      <div className="grid gap-8 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] items-start">
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="glass-panel rounded-2xl p-5 sm:p-6 space-y-4 text-sm"
          action="https://formspree.io/f/your-id"
          method="POST"
        >
          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              name="name"
              required
              className="block w-full rounded-xl border border-slate-700 bg-slate-900/60 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/70"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="block w-full rounded-xl border border-slate-700 bg-slate-900/60 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/70"
              placeholder="you@company.com"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1" htmlFor="budget">
              Approximate budget
            </label>
            <input
              id="budget"
              name="budget"
              className="block w-full rounded-xl border border-slate-700 bg-slate-900/60 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/70"
              placeholder="$5k – $15k, $15k+ etc."
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1" htmlFor="message">
              Project details
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              className="block w-full rounded-xl border border-slate-700 bg-slate-900/60 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/70"
              placeholder="Share context, goals, timelines, and links if helpful."
            />
          </div>
          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-full bg-accent px-4 py-2.5 text-sm font-medium text-white shadow-lg shadow-indigo-500/30 hover:bg-accent-soft transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 focus-visible:ring-indigo-400"
          >
            Send message
          </button>
          <p className="text-[11px] text-slate-500">
            This form is wired for Formspree. Replace the endpoint with your preferred email provider or
            API.
          </p>
        </motion.form>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.45, ease: 'easeOut', delay: 0.08 }}
          className="space-y-4 text-xs sm:text-sm text-slate-300"
        >
          <div className="glass-panel rounded-2xl p-5 sm:p-6">
            <p className="font-medium text-slate-100">Direct email</p>
            <a
              href={`mailto:${siteConfig.contactEmail}`}
              className="mt-1 block text-sm text-emerald-300 hover:text-emerald-200"
            >
              {siteConfig.contactEmail}
            </a>
            <p className="mt-3 text-xs text-slate-400">
              Prefer a direct intro? Email works great for sharing additional context, decks, or product
              docs.
            </p>
          </div>
          <div className="glass-panel rounded-2xl p-5 sm:p-6">
            <p className="font-medium text-slate-100 mb-1">Typical engagements</p>
            <ul className="list-disc list-inside space-y-1 text-xs text-slate-300">
              <li>New product or MVP frontend in React/Next.js</li>
              <li>Modernizing an existing React codebase</li>
              <li>High-converting marketing or onboarding flows</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}

