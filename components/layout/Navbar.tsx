'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../ui/Button';

const navItems = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' }
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-40">
      <motion.nav
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className={`transition-colors duration-300 ${
          isScrolled ? 'nav-blur' : 'bg-transparent'
        }`}
      >
        <div className="container-page flex items-center justify-between py-3 sm:py-4">
          <Link
            href="#top"
            className="font-semibold tracking-tight text-slate-50 text-sm sm:text-base"
          >
            Muhammad <span className="text-accent">Numan</span>
          </Link>

          <div className="hidden md:flex items-center gap-6 text-xs sm:text-sm text-slate-300">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="hover:text-slate-50 transition-colors">
                {item.label}
              </a>
            ))}
            <Button href="#contact" className="text-xs sm:text-sm px-4 py-2">
              Hire Me
            </Button>
          </div>

          <motion.button
            type="button"
            whileTap={{ scale: 0.95 }}
            whileHover={{ backgroundColor: 'rgba(15,23,42,0.85)' }}
            className="md:hidden inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-700/70 bg-slate-900/70 text-slate-200 shadow-lg shadow-slate-900/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/80"
            onClick={() => setIsOpen((open) => !open)}
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="relative flex h-5 w-5 flex-col items-center justify-between">
              <motion.span
                animate={
                  isOpen
                    ? { rotate: 45, y: 6, backgroundColor: 'rgb(248,250,252)' }
                    : { rotate: 0, y: 0, backgroundColor: 'rgb(226,232,240)' }
                }
                transition={{ duration: 0.22, ease: 'easeOut' }}
                className="block h-0.5 w-full rounded-full bg-slate-200"
              />
              <motion.span
                animate={
                  isOpen
                    ? { opacity: 0, scaleX: 0.6 }
                    : { opacity: 1, scaleX: 1 }
                }
                transition={{ duration: 0.18, ease: 'easeOut' }}
                className="block h-0.5 w-[70%] rounded-full bg-slate-500"
              />
              <motion.span
                animate={
                  isOpen
                    ? { rotate: -45, y: -6, backgroundColor: 'rgb(248,250,252)' }
                    : { rotate: 0, y: 0, backgroundColor: 'rgb(226,232,240)' }
                }
                transition={{ duration: 0.22, ease: 'easeOut' }}
                className="block h-0.5 w-full rounded-full bg-slate-200"
              />
            </span>
          </motion.button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-30 md:hidden bg-slate-950/60 backdrop-blur-md"
              onClick={() => setIsOpen(false)}
            >
              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', stiffness: 260, damping: 28 }}
                className="absolute inset-y-0 right-0 w-[82%] max-w-xs glass-panel border-l border-slate-800/70 bg-slate-950/95 shadow-[0_0_60px_rgba(15,23,42,0.9)]"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="h-full flex flex-col justify-between py-6 px-5">
                  <div className="space-y-4 text-sm text-slate-200">
                    {navItems.map((item) => (
                      <a
                        key={item.href}
                        href={item.href}
                        onClick={handleNavClick}
                        className="flex items-center justify-between rounded-xl bg-slate-900/60 px-3 py-3 text-sm font-medium text-slate-100 shadow-sm shadow-slate-900/60 hover:bg-slate-800/80 transition-colors"
                      >
                        <span>{item.label}</span>
                        <span className="text-[10px] uppercase tracking-[0.18em] text-slate-500">
                          Go
                        </span>
                      </a>
                    ))}
                  </div>
                  <div className="pt-4 border-t border-slate-800/60">
                    <Button href="#contact" className="w-full justify-center min-h-[48px]">
                      Hire Me
                    </Button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  );
}

