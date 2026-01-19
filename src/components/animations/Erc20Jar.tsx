'use client';

import { motion, useReducedMotion } from 'framer-motion';

interface Erc20JarProps {
  className?: string;
}

/**
 * Erc20Jar Animation
 * Inspired by WETH_02 - Shows a jar labeled "ERC20 COMPLIANT" with wrapped tokens inside
 * ETC coin is outside the jar, unable to fit (not ERC-20 compliant)
 */
export function Erc20Jar({ className = '' }: Erc20JarProps) {
  const shouldReduceMotion = useReducedMotion();
  const isAnimating = !shouldReduceMotion;

  return (
    <motion.svg
      viewBox="0 0 400 400"
      className={`w-full max-w-md ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Background */}
      <rect width="400" height="400" fill="#0a0a0a" />

      {/* Shadow under jar */}
      <ellipse cx="240" cy="365" rx="90" ry="20" fill="#000000" opacity="0.7" />

      {/* === JAR === */}
      <g>
        {/* Jar body - glass effect */}
        <path
          d="M 160 140
             L 160 320
             Q 160 360, 240 360
             Q 320 360, 320 320
             L 320 140"
          fill="none"
          stroke="#e8e8e8"
          strokeWidth="4"
        />
        {/* Inner glass line */}
        <path
          d="M 164 144
             L 164 318
             Q 164 354, 240 354
             Q 316 354, 316 318
             L 316 144"
          fill="none"
          stroke="#ffffff"
          strokeWidth="1"
          opacity="0.3"
        />

        {/* Jar neck/opening */}
        <path
          d="M 180 140
             Q 180 120, 240 120
             Q 300 120, 300 140"
          fill="none"
          stroke="#e8e8e8"
          strokeWidth="4"
        />
        {/* Jar rim */}
        <ellipse cx="240" cy="115" rx="55" ry="12" fill="none" stroke="#e8e8e8" strokeWidth="3" />
        <ellipse cx="240" cy="112" rx="50" ry="10" fill="#0a0a0a" stroke="#cccccc" strokeWidth="2" />

        {/* Thread lines on neck */}
        <path d="M 185 125 Q 240 135, 295 125" fill="none" stroke="#cccccc" strokeWidth="1" opacity="0.5" />
        <path d="M 183 132 Q 240 142, 297 132" fill="none" stroke="#cccccc" strokeWidth="1" opacity="0.5" />

        {/* Glass shine effect */}
        <path
          d="M 172 150 L 172 310"
          stroke="#ffffff"
          strokeWidth="3"
          opacity="0.3"
        />
        <path
          d="M 178 150 L 178 310"
          stroke="#ffffff"
          strokeWidth="1"
          opacity="0.2"
        />

        {/* === ERC20 COMPLIANT LABEL === */}
        <g>
          {/* Label background - curved to fit jar */}
          <path
            d="M 175 200
               Q 175 195, 240 195
               Q 305 195, 305 200
               L 305 260
               Q 305 265, 240 265
               Q 175 265, 175 260
               Z"
            fill="#3AB83A"
            stroke="#000000"
            strokeWidth="2"
          />
          {/* Label text */}
          <text
            x="240"
            y="225"
            textAnchor="middle"
            fill="#000000"
            fontSize="16"
            fontWeight="bold"
            fontFamily="system-ui, sans-serif"
          >
            ERC-20
          </text>
          <text
            x="240"
            y="250"
            textAnchor="middle"
            fill="#000000"
            fontSize="14"
            fontWeight="bold"
            fontFamily="system-ui, sans-serif"
          >
            COMPLIANT
          </text>
        </g>
      </g>

      {/* === WRAPPED TOKENS INSIDE JAR (candy style like WETH) === */}
      {[
        { x: 210, y: 310, delay: 0 },
        { x: 260, y: 320, delay: 0.2 },
        { x: 235, y: 335, delay: 0.4 },
      ].map((token, i) => (
        <motion.g
          key={i}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.8 + token.delay, duration: 0.3 }}
        >
          {/* Candy body */}
          <ellipse cx={token.x} cy={token.y} rx="20" ry="16" fill="#ffffff" stroke="#000000" strokeWidth="2" />
          {/* Candy wrapper ends */}
          <path d={`M ${token.x - 20} ${token.y} L ${token.x - 30} ${token.y - 8} L ${token.x - 30} ${token.y + 8} Z`} fill="#3AB83A" stroke="#000000" strokeWidth="1" />
          <path d={`M ${token.x + 20} ${token.y} L ${token.x + 30} ${token.y - 8} L ${token.x + 30} ${token.y + 8} Z`} fill="#3AB83A" stroke="#000000" strokeWidth="1" />
          {/* Token label */}
          <text
            x={token.x}
            y={token.y + 4}
            textAnchor="middle"
            fill="#000000"
            fontSize="9"
            fontWeight="bold"
            fontFamily="system-ui, sans-serif"
          >
            TKN
          </text>
        </motion.g>
      ))}

      {/* === ETC COIN (outside jar, can't fit) === */}
      <motion.g
        animate={isAnimating ? {
          y: [0, -15, 0, -10, 0],
          x: [0, 5, 0, -5, 0],
          rotate: [0, -5, 0, 5, 0],
        } : {}}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatDelay: 1,
          ease: 'easeInOut',
        }}
      >
        {/* Shadow under coin */}
        <ellipse cx="80" cy="340" rx="35" ry="10" fill="#000000" opacity="0.5" />

        {/* ETC Logo */}
        <image
          href="/images/logos/etc.svg"
          x="35"
          y="240"
          width="90"
          height="90"
        />
      </motion.g>

      {/* === REJECTION INDICATOR === */}
      <motion.g
        initial={{ scale: 0, opacity: 0 }}
        animate={isAnimating ? {
          scale: [0, 1.2, 1],
          opacity: [0, 1, 1, 1, 0],
        } : { scale: 1, opacity: 0.8 }}
        transition={{
          duration: 1.5,
          delay: 1.2,
          repeat: Infinity,
          repeatDelay: 2,
        }}
      >
        {/* Red X circle */}
        <circle cx="120" cy="200" r="25" fill="#ff4444" opacity="0.3" />
        <circle cx="120" cy="200" r="25" fill="none" stroke="#ff4444" strokeWidth="3" />
        {/* X mark */}
        <line x1="108" y1="188" x2="132" y2="212" stroke="#ff4444" strokeWidth="4" strokeLinecap="round" />
        <line x1="132" y1="188" x2="108" y2="212" stroke="#ff4444" strokeWidth="4" strokeLinecap="round" />
      </motion.g>

      {/* === "NOT COMPATIBLE" text === */}
      <motion.text
        x="80"
        y="380"
        textAnchor="middle"
        fill="#ff4444"
        fontSize="12"
        fontWeight="bold"
        fontFamily="system-ui, sans-serif"
        initial={{ opacity: 0 }}
        animate={isAnimating ? {
          opacity: [0, 1, 1, 0],
        } : { opacity: 0.8 }}
        transition={{
          duration: 2.5,
          delay: 1.5,
          repeat: Infinity,
          repeatDelay: 1,
        }}
      >
        NOT ERC-20!
      </motion.text>

      {/* Arrow pointing from coin to jar (blocked) */}
      <motion.g
        animate={isAnimating ? {
          opacity: [0.3, 0.8, 0.3],
        } : {}}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <defs>
          <marker
            id="arrowhead-red"
            markerWidth="10"
            markerHeight="7"
            refX="9"
            refY="3.5"
            orient="auto"
          >
            <polygon points="0 0, 10 3.5, 0 7" fill="#ff4444" />
          </marker>
        </defs>
        <line
          x1="115"
          y1="270"
          x2="150"
          y2="240"
          stroke="#ff4444"
          strokeWidth="2"
          strokeDasharray="5,5"
          markerEnd="url(#arrowhead-red)"
        />
      </motion.g>

      {/* === Floating particles === */}
      {isAnimating && (
        <>
          <motion.circle
            cx="330"
            cy="180"
            r="3"
            fill="#3AB83A"
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          <motion.circle
            cx="350"
            cy="250"
            r="2"
            fill="#3AB83A"
            animate={{
              y: [0, -15, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 0.5,
            }}
          />
        </>
      )}
    </motion.svg>
  );
}
