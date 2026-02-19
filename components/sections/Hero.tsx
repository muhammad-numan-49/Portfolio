'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { siteConfig } from '../../lib/site-config';

export function Hero() {
  return (
    <section className="pt-20 sm:pt-28 pb-16 sm:pb-24">
      <div className="container-page flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="flex-1 max-w-xl w-full mx-auto lg:mx-0 order-2 lg:order-1"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400 mb-2">
            Senior Front-End Developer · React &amp; Next.js
          </p>
          <p className="text-[11px] text-slate-400 mb-4">
            Based in Lahore, Pakistan · 5+ years experience
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate-50 tracking-tight leading-snug sm:leading-tight">
            I help startups and product teams ship <span className="text-accent">fast, scalable</span> React
            &amp; Next.js products that drive real business results.
          </h1>
          <p className="mt-4 text-sm sm:text-base text-slate-300 max-w-xl leading-relaxed">
            I partner with founders and product teams to turn complex requirements into conversion-focused,
            production-ready interfaces — from marketing sites to full SaaS dashboards. The goal is always
            the same: faster load times, cleaner UX, and frontends that are easy to evolve as you grow.
          </p>

          <div className="mt-8 flex w-full flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3 sm:gap-4">
            <Button href="#contact" className="w-full sm:w-auto justify-center min-h-[48px]">
              Hire Me
            </Button>
            <Button
              variant="secondary"
              href="#projects"
              className="w-full sm:w-auto justify-center min-h-[48px]"
            >
              View Case Studies
            </Button>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3 sm:gap-4 text-[11px] sm:text-xs text-slate-300">
            <span className="inline-flex items-center rounded-full bg-emerald-500/10 px-3 py-1 border border-emerald-400/40 text-emerald-200">
              <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Available for new projects
            </span>
            <span>5+ Years Experience</span>
            <span>20+ Projects Delivered</span>
            <span>React &amp; Next.js Specialist</span>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-slate-400">
            <a href={siteConfig.links.github} target="_blank" rel="noreferrer" className="hover:text-slate-200">
              GitHub
            </a>
            <a
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-slate-200"
            >
              LinkedIn
            </a>
            {siteConfig.links.upwork !== '#' && (
              <a href={siteConfig.links.upwork} target="_blank" rel="noreferrer" className="hover:text-slate-200">
                Upwork
              </a>
            )}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
          className="flex-1 flex justify-center lg:justify-end order-1 lg:order-2 w-full max-w-[200px] sm:max-w-[220px] lg:max-w-[260px] mx-auto lg:mx-0"
        >
          <div className="relative w-full aspect-square max-w-[200px] sm:max-w-[220px] lg:max-w-[260px] rounded-2xl overflow-hidden bg-slate-900/80 border border-slate-700/60 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5),0_0_0_1px_rgba(255,255,255,0.05)_inset]">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-slate-500/10 z-[1]" aria-hidden />
            <Image
              src="/profile.jpg"
              alt="Portrait of Muhammad Numan"
              fill
              className="object-cover object-[45%_20%] sm:object-[45%_25%] relative z-0"
              sizes="(min-width: 1024px) 260px, (min-width: 640px) 220px, 200px"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

