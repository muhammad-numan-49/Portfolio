'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { Section } from '../layout/Section';
import { siteConfig } from '../../lib/site-config';

export function Contact() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [modal, setModal] = useState<null | 'success' | 'error'>(null);

  useEffect(() => {
    if (!modal) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && modal === 'error') setModal(null);
    };

    document.addEventListener('keydown', handleKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [modal]);

  useEffect(() => {
    if (modal !== 'success') return;

    const timeoutId = window.setTimeout(() => {
      setModal(null);
    }, 2500);

    return () => window.clearTimeout(timeoutId);
  }, [modal]);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    const form = event.currentTarget;

    try {
      const response = await fetch(`https://formspree.io/f/${siteConfig.formspreeFormId}`, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' }
      });

      if (!response.ok) throw new Error('Formspree submission failed');

      form.reset(); // remove/clear fields
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      setModal('success');
    } catch {
      setModal('error');
    } finally {
      setIsSubmitting(false);
    }
  }

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
          action={`https://formspree.io/f/${siteConfig.formspreeFormId}`}
          method="POST"
          onSubmit={handleSubmit}
        >
          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              name="name"
              required
              className="block w-full rounded-xl border border-slate-700 bg-slate-900/60 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-accent/60"
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
              className="block w-full rounded-xl border border-slate-700 bg-slate-900/60 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-accent/60"
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
              className="block w-full rounded-xl border border-slate-700 bg-slate-900/60 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-accent/60"
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
              className="block w-full rounded-xl border border-slate-700 bg-slate-900/60 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-accent/60"
              placeholder="Share context, goals, timelines, and links if helpful."
            />
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex items-center justify-center rounded-full bg-accent px-4 py-2.5 text-sm font-medium text-white shadow-lg shadow-accent/30 hover:bg-accent-soft transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 focus-visible:ring-accent/80"
          >
            {isSubmitting ? 'Sending…' : 'Send message'}
          </button>
          <p className="text-[11px] text-slate-500">
            Submissions are sent to {siteConfig.contactEmail} via Formspree.
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

      {modal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label={modal === 'success' ? 'Message sent' : 'Message failed'}
        >
          {modal === 'error' ? (
            <button
              type="button"
              className="absolute inset-0 bg-slate-950/70 backdrop-blur-sm"
              onClick={() => setModal(null)}
              aria-label="Close dialog"
            />
          ) : (
            <div className="absolute inset-0 bg-slate-950/70 backdrop-blur-sm" aria-hidden />
          )}
          <div className="relative w-full max-w-md rounded-2xl border border-slate-700/70 bg-slate-950/90 shadow-2xl">
            <div className="p-5 sm:p-6">
              {modal === 'success' ? (
                <div className="text-center">
                  <p className="text-sm font-semibold text-slate-50">Form submitted successfully</p>
                  <p className="mt-1 text-xs text-slate-300">Thank you — I’ll get back to you soon.</p>
                </div>
              ) : (
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold text-slate-50">Something went wrong</p>
                    <p className="mt-1 text-xs text-slate-300">
                      Please try again, or email me directly if the issue continues.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setModal(null)}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-700 bg-slate-900/60 text-slate-200 hover:bg-slate-800/80 transition"
                    aria-label="Close"
                  >
                    ×
                  </button>
                </div>
              )}

              {modal === 'error' && (
                <div className="mt-5 flex flex-col sm:flex-row gap-3">
                  <button
                    type="button"
                    onClick={() => setModal(null)}
                    className="inline-flex w-full items-center justify-center rounded-full border border-slate-700 bg-slate-900/60 px-4 py-2.5 text-xs font-medium text-slate-200 hover:bg-slate-800/80 transition min-h-[44px]"
                  >
                    Close
                  </button>
                  <a
                    href={`mailto:${siteConfig.contactEmail}`}
                    className="inline-flex w-full items-center justify-center rounded-full bg-accent px-4 py-2.5 text-xs font-medium text-white shadow-lg shadow-accent/30 hover:bg-accent-soft transition min-h-[44px]"
                  >
                    Email instead
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </Section>
  );
}

