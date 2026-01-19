'use client';

import { motion, useReducedMotion } from 'framer-motion';

interface SmartContractEvolutionProps {
  className?: string;
}

/**
 * SmartContractEvolution Animation
 * Shows the evolution from old Solidity syntax to new emit keyword
 * Visual concept:
 * - Code blocks showing before/after
 * - Arrow/transition animation between versions
 * - Highlighting the 'emit' keyword
 */
export function SmartContractEvolution({ className = '' }: SmartContractEvolutionProps) {
  const shouldReduceMotion = useReducedMotion();
  const isAnimating = !shouldReduceMotion;

  return (
    <motion.svg
      viewBox="0 0 400 350"
      className={`w-full max-w-lg ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Background */}
      <rect width="400" height="350" fill="#0a0a0a" />

      {/* Old Code Block (Top) */}
      <motion.g
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {/* Code window */}
        <rect
          x="50"
          y="30"
          width="300"
          height="90"
          fill="#1a1a1a"
          stroke="#ff4444"
          strokeWidth="2"
          rx="8"
          opacity="0.8"
        />

        {/* Window header */}
        <rect
          x="50"
          y="30"
          width="300"
          height="24"
          fill="#2a2a2a"
          rx="8"
        />
        <rect
          x="50"
          y="46"
          width="300"
          height="8"
          fill="#2a2a2a"
        />

        {/* Window dots */}
        <circle cx="68" cy="42" r="5" fill="#ff4444" />
        <circle cx="86" cy="42" r="5" fill="#ffaa00" />
        <circle cx="104" cy="42" r="5" fill="#3AB83A" />

        {/* Old label */}
        <text
          x="330"
          y="46"
          textAnchor="end"
          fill="#ff4444"
          fontSize="10"
          fontFamily="monospace"
        >
          DEPRECATED
        </text>

        {/* Old code - line 1 */}
        <text
          x="65"
          y="75"
          fill="#808080"
          fontSize="11"
          fontFamily="monospace"
        >
          <tspan fill="#6a9955">// Solidity &lt;0.5</tspan>
        </text>

        {/* Old code - line 2 */}
        <text
          x="65"
          y="95"
          fill="#ffffff"
          fontSize="11"
          fontFamily="monospace"
        >
          <tspan fill="#569cd6">function</tspan>
          <tspan fill="#ffffff"> deposit() </tspan>
          <tspan fill="#c586c0">{'{'}</tspan>
        </text>

        {/* Old code - line 3 */}
        <text
          x="75"
          y="110"
          fill="#ffffff"
          fontSize="11"
          fontFamily="monospace"
        >
          <tspan fill="#dcdcaa">Deposit</tspan>
          <tspan fill="#ffffff">(msg.sender, msg.value);</tspan>
        </text>

        {/* Strike through the old code */}
        <motion.line
          x1="65"
          y1="107"
          x2="280"
          y2="107"
          stroke="#ff4444"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={isAnimating ? { pathLength: 1 } : { pathLength: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        />
      </motion.g>

      {/* Arrow / Evolution indicator */}
      <motion.g
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, duration: 0.4 }}
      >
        <motion.path
          d="M200 135 L200 165"
          stroke="#3AB83A"
          strokeWidth="3"
          fill="none"
          markerEnd="url(#evolution-arrow)"
          animate={isAnimating ? {
            opacity: [0.5, 1, 0.5],
          } : {}}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <defs>
          <marker
            id="evolution-arrow"
            markerWidth="10"
            markerHeight="7"
            refX="9"
            refY="3.5"
            orient="auto"
          >
            <polygon
              points="0 0, 10 3.5, 0 7"
              fill="#3AB83A"
            />
          </marker>
        </defs>

        <text
          x="230"
          y="155"
          fill="#3AB83A"
          fontSize="12"
          fontWeight="bold"
          fontFamily="system-ui, sans-serif"
        >
          UPGRADE
        </text>
      </motion.g>

      {/* New Code Block (Bottom) */}
      <motion.g
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        {/* Code window */}
        <rect
          x="50"
          y="180"
          width="300"
          height="100"
          fill="#1a1a1a"
          stroke="#3AB83A"
          strokeWidth="2"
          rx="8"
        />

        {/* Window header */}
        <rect
          x="50"
          y="180"
          width="300"
          height="24"
          fill="#2a2a2a"
          rx="8"
        />
        <rect
          x="50"
          y="196"
          width="300"
          height="8"
          fill="#2a2a2a"
        />

        {/* Window dots */}
        <circle cx="68" cy="192" r="5" fill="#ff4444" />
        <circle cx="86" cy="192" r="5" fill="#ffaa00" />
        <circle cx="104" cy="192" r="5" fill="#3AB83A" />

        {/* New label */}
        <text
          x="330"
          y="196"
          textAnchor="end"
          fill="#3AB83A"
          fontSize="10"
          fontFamily="monospace"
        >
          CURRENT
        </text>

        {/* New code - line 1 */}
        <text
          x="65"
          y="225"
          fill="#808080"
          fontSize="11"
          fontFamily="monospace"
        >
          <tspan fill="#6a9955">// Solidity 0.5+</tspan>
        </text>

        {/* New code - line 2 */}
        <text
          x="65"
          y="245"
          fill="#ffffff"
          fontSize="11"
          fontFamily="monospace"
        >
          <tspan fill="#569cd6">function</tspan>
          <tspan fill="#ffffff"> deposit() </tspan>
          <tspan fill="#c586c0">{'{'}</tspan>
        </text>

        {/* New code - line 3 with emit highlighted */}
        <text
          x="75"
          y="265"
          fill="#ffffff"
          fontSize="11"
          fontFamily="monospace"
        >
          <tspan fill="#c586c0">emit</tspan>
          <tspan fill="#ffffff"> </tspan>
          <tspan fill="#dcdcaa">Deposit</tspan>
          <tspan fill="#ffffff">(msg.sender, msg.value);</tspan>
        </text>

        {/* Highlight box around emit */}
        <motion.rect
          x="72"
          y="252"
          width="32"
          height="18"
          fill="none"
          stroke="#3AB83A"
          strokeWidth="2"
          rx="3"
          animate={isAnimating ? {
            opacity: [0.4, 1, 0.4],
          } : { opacity: 0.8 }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </motion.g>

      {/* Explanation text */}
      <motion.g
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <text
          x="200"
          y="310"
          textAnchor="middle"
          fill="#ffffff"
          fontSize="12"
          fontWeight="bold"
          fontFamily="system-ui, sans-serif"
        >
          The
          <tspan fill="#3AB83A"> emit </tspan>
          keyword clearly distinguishes
        </text>
        <text
          x="200"
          y="328"
          textAnchor="middle"
          fill="#ffffff"
          fontSize="12"
          fontWeight="bold"
          fontFamily="system-ui, sans-serif"
        >
          event calls from function calls
        </text>
      </motion.g>

      {/* Checkmark for new code */}
      <motion.g
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.4, type: 'spring', stiffness: 200 }}
      >
        <circle
          cx="365"
          cy="230"
          r="15"
          fill="#3AB83A"
          opacity="0.2"
        />
        <motion.path
          d="M357 230 L363 236 L373 224"
          stroke="#3AB83A"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: 1.5, duration: 0.3 }}
        />
      </motion.g>
    </motion.svg>
  );
}
