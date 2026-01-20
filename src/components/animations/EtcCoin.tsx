'use client';

import { motion, useReducedMotion } from 'framer-motion';

interface EtcCoinProps {
  size?: number;
  animate?: boolean;
  className?: string;
}

/**
 * Animated ETC Coin
 * Uses the official ETC SVG logo with animation effects
 */
export function EtcCoin({ size = 100, animate = true, className = '' }: EtcCoinProps) {
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
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* ETC Logo with bobbing animation */}
      <motion.g
        animate={isAnimating ? {
          y: [0, -5, 0],
        } : {}}
        transition={{
          duration: 2,
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
          stroke="#3AB83A"
          strokeWidth="2"
          opacity="0.3"
          animate={isAnimating ? {
            opacity: [0.2, 0.5, 0.2],
            r: [38, 42, 38],
          } : {}}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* ETC SVG Logo */}
        <image
          href="/images/logos/etc.svg"
          x="10"
          y="5"
          width="80"
          height="80"
        />
      </motion.g>
    </motion.svg>
  );
}
