'use client';

import { motion, useReducedMotion } from 'framer-motion';

interface WetcTokenProps {
  size?: number;
  animate?: boolean;
  className?: string;
}

/**
 * Animated WETC Token
 * Uses the official WETC SVG logo with animation effects
 */
export function WetcToken({ size = 100, animate = true, className = '' }: WetcTokenProps) {
  const shouldReduceMotion = useReducedMotion();
  const isAnimating = animate && !shouldReduceMotion;

  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={className}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      {/* Shadow */}
      <motion.ellipse
        cx="50"
        cy="90"
        rx="35"
        ry="8"
        fill="#000000"
        opacity="0.5"
        animate={isAnimating ? {
          rx: [35, 32, 35],
          opacity: [0.5, 0.3, 0.5],
        } : {}}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* WETC Logo with bobbing animation */}
      <motion.g
        animate={isAnimating ? {
          y: [0, -5, 0],
        } : {}}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        {/* Glow effect behind logo */}
        <motion.circle
          cx="50"
          cy="45"
          r="40"
          fill="none"
          stroke="#ffffff"
          strokeWidth="2"
          opacity="0.2"
          animate={isAnimating ? {
            opacity: [0.15, 0.35, 0.15],
            r: [38, 42, 38],
          } : {}}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* WETC SVG Logo */}
        <image
          href="/images/logos/wetc.svg"
          x="10"
          y="5"
          width="80"
          height="80"
        />
      </motion.g>
    </motion.svg>
  );
}
