'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Section } from '../layout/Section';

type Project = {
  title: string;
  description: string;
  tech: string[];
  impact: string;
  liveUrl?: string;
  githubUrl?: string;
  image: string;
};

const projects: Project[] = [
  {
    title: 'FeelHQ – Employee Well-being Platform',
    description:
      'Responsive marketing and product experience for FeelHQ (edufeel), a platform that helps organisations track employee well-being through daily emotional check-ins, dashboards, and targeted support tooling.',
    tech: ['Next.js', 'React.js', 'TypeScript', 'Tailwind CSS'],
    impact: 'Improved clarity of value proposition and user onboarding for HR teams, helping make employee well-being data easier to act on.',
    liveUrl: 'https://www.edufeel.co.uk/',
    githubUrl: '#',
    image: '/projects/feelhq.jpg'
  },
  {
    title: 'Coach Poker Online – Coaching Marketplace',
    description:
      'Frontend for a poker coaching platform where students can discover coaches, access training content, and participate in a community, with a clear information hierarchy and conversion-focused layout.',
    tech: ['Next.js', 'React.js', 'TypeScript', 'Tailwind CSS'],
    impact: 'Designed for higher coach discovery and lesson booking conversion with clear entry points into coaching categories.',
    liveUrl: 'https://www.coachpokeronline.com/',
    githubUrl: '#',
    image: '/projects/coachpoker.jpg'
  },
  {
    title: 'BudgetMe – Personal Finance Companion',
    description:
      'Marketing site for a New Zealand-based budgeting and personal finance app, focused on clarity, trust, and responsive layout across devices.',
    tech: ['Next.js', 'React.js', 'TypeScript'],
    impact: 'Crafted an approachable, trustworthy visual language that supports user sign-ups and product education.',
    liveUrl: 'https://budgetme.co.nz/',
    githubUrl: '#',
    image: '/projects/budgetme.jpg'
  },
  {
    title: 'Kindly – Well-being Mobile App Landing',
    description:
      'Landing experience for the Kindly app, presenting the core value proposition, feature overview, and mobile-focused branding in a clean, modern layout.',
    tech: ['Next.js', 'React.js', 'TypeScript'],
    impact: 'Mobile-first landing that highlights the app’s core benefits and nudges visitors toward downloads and engagement.',
    liveUrl: 'https://thekindlyapp.com/',
    githubUrl: '#',
    image: '/projects/kindly.jpg'
  }
];

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Selected Work"
      title="Case studies for real-world products."
      description="A sample of the React and Next.js work I do for product teams — focused on performance, clarity, and measurable business outcomes."
    >
      <div className="space-y-8">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, ease: 'easeOut', delay: index * 0.08 }}
            className="group glass-panel rounded-2xl overflow-hidden"
          >
            <div className="grid md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.2fr)] gap-0 md:gap-6">
              <div className="relative h-48 sm:h-56 md:h-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  sizes="(min-width: 1024px) 320px, (min-width: 768px) 260px, 100vw"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-slate-950/40 via-transparent to-emerald-500/10 opacity-80 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="p-5 sm:p-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-sm sm:text-base font-semibold text-slate-50 group-hover:text-white">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">{project.description}</p>
                  <p className="mt-3 text-[11px] sm:text-xs text-emerald-300/90">{project.impact}</p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex rounded-full bg-slate-900/70 px-2 py-1 text-[11px] text-slate-200 border border-slate-700/60"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-4 flex flex-wrap gap-4 text-xs text-slate-300">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-emerald-300 transition"
                    >
                      Live demo
                    </a>
                  )}
                  {project.githubUrl && project.githubUrl !== '#' && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-emerald-300 transition"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}

