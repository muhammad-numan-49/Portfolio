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
          <Link href="#top" className="font-semibold tracking-tight text-slate-50 text-sm sm:text-base">
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

          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center rounded-full border border-slate-700/70 bg-slate-900/60 p-2 text-slate-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/80"
            onClick={() => setIsOpen((open) => !open)}
          >
            <span className="sr-only">Toggle navigation</span>
            <motion.span
              animate={isOpen ? { rotate: 45, y: 3 } : { rotate: 0, y: 0 }}
              className="block h-0.5 w-4 bg-slate-200"
            />
            <motion.span
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              className="mt-1 block h-0.5 w-4 bg-slate-400"
            />
            <motion.span
              animate={isOpen ? { rotate: -45, y: -3 } : { rotate: 0, y: 0 }}
              className="mt-1 block h-0.5 w-4 bg-slate-200"
            />
          </button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.18 }}
              className="md:hidden border-t border-slate-800/60 bg-slate-950/95 backdrop-blur-xl"
            >
              <div className="container-page py-3 flex flex-col gap-2 text-sm text-slate-200">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={handleNavClick}
                    className="py-1.5"
                  >
                    {item.label}
                  </a>
                ))}
                <div className="pt-2">
                  <Button href="#contact" className="w-full justify-center">
                    Hire Me
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  );
}

