'use client';

import { motion } from 'framer-motion';
import { buttonPress } from '@/lib/animations';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  external?: boolean;
}

export function Button({
  children,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  external = false,
}: ButtonProps) {
  const baseStyles = `
    inline-flex items-center justify-center
    font-semibold uppercase tracking-wide
    rounded-lg transition-colors
    focus:outline-none focus-visible:ring-2 focus-visible:ring-etc-green focus-visible:ring-offset-2 focus-visible:ring-offset-etc-black
  `;

  const variants = {
    primary: `
      bg-etc-green !text-black
      hover:bg-etc-green-light
      border-2 border-etc-green hover:border-etc-green-light
    `,
    outline: `
      bg-transparent text-etc-green
      border-2 border-etc-green
      hover:bg-etc-green hover:text-etc-black
    `,
    ghost: `
      bg-transparent text-etc-green
      hover:bg-etc-gray
    `,
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const combinedStyles = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <motion.a
        href={href}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        className={combinedStyles}
        variants={buttonPress}
        initial="rest"
        whileHover="hover"
        whileTap="pressed"
      >
        {children}
        {external && (
          <svg
            className="ml-2 w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        )}
      </motion.a>
    );
  }

  return (
    <motion.button
      type="button"
      onClick={onClick}
      className={combinedStyles}
      variants={buttonPress}
      initial="rest"
      whileHover="hover"
      whileTap="pressed"
    >
      {children}
    </motion.button>
  );
}
