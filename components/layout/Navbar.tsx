'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
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

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

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
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            whileTap={{ scale: 0.92 }}
            whileHover={{ scale: 1.02 }}
            className="md:hidden inline-flex h-11 w-11 min-h-[44px] min-w-[44px] items-center justify-center rounded-xl border border-slate-700/70 bg-slate-900/70 text-slate-200 shadow-lg shadow-slate-900/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 active:bg-slate-800/80 transition-colors"
            onClick={() => setIsOpen((open) => !open)}
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2, ease: 'easeOut' }}
                >
                  <X className="h-5 w-5" strokeWidth={2} />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2, ease: 'easeOut' }}
                >
                  <Menu className="h-5 w-5" strokeWidth={2} />
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="fixed inset-0 z-40 md:hidden bg-slate-950/75 backdrop-blur-md"
                onClick={() => setIsOpen(false)}
                aria-hidden
              />
              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', stiffness: 320, damping: 32 }}
                className="fixed inset-y-0 right-0 z-50 w-[85%] max-w-sm md:hidden border-l border-slate-800/80 bg-slate-950/98 shadow-[0_0_80px_rgba(0,0,0,0.6)] backdrop-blur-xl"
                onClick={(e) => e.stopPropagation()}
                role="dialog"
                aria-modal="true"
                aria-label="Navigation menu"
              >
                <div className="h-full flex flex-col pt-8 pb-6 px-5">
                  <div className="space-y-1">
                    {navItems.map((item, i) => (
                      <motion.a
                        key={item.href}
                        href={item.href}
                        onClick={handleNavClick}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.05 * i, duration: 0.2 }}
                        className="flex items-center min-h-[44px] px-4 py-3 rounded-xl text-slate-200 font-medium text-sm hover:bg-slate-800/70 hover:text-slate-50 active:bg-slate-800 transition-colors"
                      >
                        {item.label}
                      </motion.a>
                    ))}
                  </div>
                  <div className="mt-auto pt-6 border-t border-slate-800/70">
                    <Link
                      href="#contact"
                      onClick={handleNavClick}
                      className="inline-flex w-full items-center justify-center min-h-[48px] rounded-full bg-accent px-4 py-2.5 text-sm font-medium text-white shadow-lg shadow-accent/30 hover:bg-accent-soft transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                    >
                      Hire Me
                    </Link>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  );
}
