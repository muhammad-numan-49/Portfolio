'use client';

import type { ReactNode } from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';
import Link from 'next/link';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';

type ButtonBaseProps = {
  variant?: ButtonVariant;
  href?: string;
  children: ReactNode;
};

type ButtonProps = ButtonBaseProps & Omit<HTMLMotionProps<'button'>, 'children'>;

const baseClasses =
  'inline-flex items-center justify-center rounded-full px-4 sm:px-5 py-2.5 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 min-h-[44px]';

const variants: Record<ButtonVariant, string> = {
  primary:
    'bg-accent text-white shadow-lg shadow-accent/30 hover:bg-accent-soft focus-visible:ring-accent/80',
  secondary:
    'bg-slate-800/80 text-slate-50 border border-slate-700 hover:border-slate-500 focus-visible:ring-slate-500',
  ghost: 'bg-transparent text-slate-200 hover:bg-slate-800/60 focus-visible:ring-slate-600'
};

export function Button({ variant = 'primary', href, className = '', children, ...props }: ButtonProps) {
  const classes = `${baseClasses} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <motion.div whileTap={{ scale: 0.97 }} whileHover={{ y: -1 }}>
        <Link href={href} className={classes}>
          {children}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button whileTap={{ scale: 0.97 }} whileHover={{ y: -1 }} className={classes} {...props}>
      {children}
    </motion.button>
  );
}

