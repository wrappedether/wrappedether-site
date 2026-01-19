/**
 * Framer Motion Animation Variants
 * Reusable animation presets for WETC components
 */

import type { Variants, Transition } from 'framer-motion';

// Default transition settings
export const defaultTransition: Transition = {
  duration: 0.5,
  ease: [0.25, 0.1, 0.25, 1], // cubic-bezier for smooth feel
};

export const springTransition: Transition = {
  type: 'spring',
  stiffness: 100,
  damping: 15,
};

// Fade in from bottom (for sections)
export const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: defaultTransition,
  },
};

// Fade in from left
export const fadeInLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -30,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: defaultTransition,
  },
};

// Fade in from right
export const fadeInRight: Variants = {
  hidden: {
    opacity: 0,
    x: 30,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: defaultTransition,
  },
};

// Scale in (for icons, buttons)
export const scaleIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: springTransition,
  },
};

// Stagger container (for lists, grids)
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

// Stagger item (use with staggerContainer)
export const staggerItem: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: defaultTransition,
  },
};

// Pulse animation (for indicators, loading)
export const pulse: Variants = {
  initial: { scale: 1, opacity: 0.5 },
  animate: {
    scale: [1, 1.1, 1],
    opacity: [0.5, 1, 0.5],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

// Rotate continuous (for coins, icons)
export const rotateContinuous: Variants = {
  animate: {
    rotateY: [0, 360],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: 'linear',
    },
  },
};

// Float animation (for hero elements)
export const float: Variants = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

// Conveyor belt movement (for wrap animation)
export const conveyorMove: Variants = {
  initial: { x: -100, opacity: 0 },
  animate: {
    x: [null, 0, 100],
    opacity: [0, 1, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'linear',
      times: [0, 0.5, 1],
    },
  },
};

// Section reveal (for scroll-triggered)
export const sectionReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

// Card hover effect
export const cardHover = {
  rest: {
    scale: 1,
    y: 0,
    transition: { duration: 0.2 },
  },
  hover: {
    scale: 1.02,
    y: -4,
    transition: { duration: 0.2 },
  },
};

// Button press effect
export const buttonPress = {
  rest: { scale: 1 },
  pressed: { scale: 0.95 },
  hover: { scale: 1.02 },
};

// Viewport settings for scroll-triggered animations
export const viewportSettings = {
  once: true,
  amount: 0.3,
  margin: '-50px',
};

// SVG path drawing animation
export const pathDraw: Variants = {
  hidden: {
    pathLength: 0,
    opacity: 0,
  },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { duration: 1.5, ease: 'easeInOut' },
      opacity: { duration: 0.3 },
    },
  },
};

// Glow pulse (for highlights)
export const glowPulse: Variants = {
  animate: {
    boxShadow: [
      '0 0 0 0 rgba(58, 184, 58, 0)',
      '0 0 20px 10px rgba(58, 184, 58, 0.3)',
      '0 0 0 0 rgba(58, 184, 58, 0)',
    ],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};
