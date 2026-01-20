'use client';

import { motion, useReducedMotion } from 'framer-motion';

interface WrapUnwrapProps {
  className?: string;
  mode?: 'wrap' | 'unwrap';
}

/**
 * WrapUnwrap Animation
 * Inspired by WETH_04 - Shows a pipe/tube system with smart contract
 * ETC travels through pipe into contract, WETC comes out
 * Uses official ETC.svg and WETC.svg logos
 */
export function WrapUnwrap({ className = '', mode = 'wrap' }: WrapUnwrapProps) {
  const shouldReduceMotion = useReducedMotion();
  const isAnimating = !shouldReduceMotion;
  const isWrap = mode === 'wrap';

  const duration = 3;
  const pauseDuration = 1;

  return (
    <motion.svg
      viewBox="0 0 400 320"
      className={`w-full max-w-lg ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Background */}
      <rect width="400" height="320" fill="#0a0a0a" />

      {/* Shadow under the whole system */}
      <ellipse cx="200" cy="290" rx="150" ry="20" fill="#000000" opacity="0.6" />

      {/* === PIPE SYSTEM === */}
      {/* Main curved pipe - goes from bottom-left, curves up through contract, down to bottom-right */}
      <g>
        {/* Pipe outline - thick black stroke for depth */}
        <path
          d="M 40 260
             Q 40 180, 100 180
             L 160 180
             Q 200 180, 200 140
             Q 200 180, 240 180
             L 300 180
             Q 360 180, 360 260"
          fill="none"
          stroke="#000000"
          strokeWidth="36"
          strokeLinecap="round"
        />
        {/* Pipe main body - white/light gray */}
        <path
          d="M 40 260
             Q 40 180, 100 180
             L 160 180
             Q 200 180, 200 140
             Q 200 180, 240 180
             L 300 180
             Q 360 180, 360 260"
          fill="none"
          stroke="#e8e8e8"
          strokeWidth="28"
          strokeLinecap="round"
        />
        {/* Pipe highlight - glass shine effect */}
        <path
          d="M 45 255
             Q 45 185, 100 185
             L 155 185"
          fill="none"
          stroke="#ffffff"
          strokeWidth="4"
          strokeLinecap="round"
          opacity="0.5"
        />
        <path
          d="M 245 185
             L 300 185
             Q 355 185, 355 255"
          fill="none"
          stroke="#ffffff"
          strokeWidth="4"
          strokeLinecap="round"
          opacity="0.5"
        />
      </g>

      {/* === SMART CONTRACT BOX === */}
      <g>
        {/* Shadow */}
        <rect x="165" y="95" width="70" height="90" fill="#000000" rx="4" />

        {/* Box side (3D effect) */}
        <path
          d="M 235 90 L 245 80 L 245 160 L 235 170 Z"
          fill="#2a2a2a"
          stroke="#000000"
          strokeWidth="2"
        />
        {/* Box top (3D effect) */}
        <path
          d="M 160 90 L 170 80 L 245 80 L 235 90 Z"
          fill="#3AB83A"
          stroke="#000000"
          strokeWidth="2"
        />

        {/* Box front face */}
        <rect
          x="160"
          y="90"
          width="75"
          height="80"
          fill="#1a1a1a"
          stroke="#000000"
          strokeWidth="2"
          rx="2"
        />

        {/* Diagonal stripes on left side (like WETH style) */}
        <g clipPath="url(#contractClip)">
          <defs>
            <clipPath id="contractClip">
              <rect x="160" y="90" width="20" height="80" />
            </clipPath>
          </defs>
          {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
            <line
              key={i}
              x1={155 + i * 6}
              y1="90"
              x2={155 + i * 6 - 30}
              y2="170"
              stroke="#3AB83A"
              strokeWidth="2"
              opacity="0.6"
            />
          ))}
        </g>

        {/* Contract slot/opening - where coins enter */}
        <ellipse cx="197" cy="95" rx="20" ry="6" fill="#000000" />
        <ellipse cx="197" cy="93" rx="18" ry="5" fill="#1a1a1a" stroke="#3AB83A" strokeWidth="1" />

        {/* Contract label */}
        <text
          x="197"
          y="125"
          textAnchor="middle"
          fill="#ffffff"
          fontSize="9"
          fontWeight="bold"
          fontFamily="system-ui, sans-serif"
        >
          SMART
        </text>
        <text
          x="197"
          y="137"
          textAnchor="middle"
          fill="#ffffff"
          fontSize="9"
          fontWeight="bold"
          fontFamily="system-ui, sans-serif"
        >
          CONTRACT
        </text>

        {/* Status lights */}
        <circle cx="220" cy="150" r="4" fill="#3AB83A" />
        <circle cx="220" cy="160" r="4" fill="#3AB83A" opacity="0.5" />
      </g>

      {/* === GLASS DOME on contract (for output display) === */}
      <g>
        {/* Dome */}
        <ellipse cx="197" cy="60" rx="25" ry="30" fill="none" stroke="#e8e8e8" strokeWidth="3" />
        <ellipse cx="197" cy="60" rx="22" ry="27" fill="none" stroke="#ffffff" strokeWidth="1" opacity="0.3" />
        {/* Glass highlight */}
        <path
          d="M 180 45 Q 175 60, 180 75"
          fill="none"
          stroke="#ffffff"
          strokeWidth="2"
          opacity="0.4"
        />

        {/* Token inside dome - shows transformation result */}
        <motion.g
          animate={isAnimating ? {
            opacity: [0, 0, 1, 1, 1, 0],
            scale: [0.5, 0.5, 1, 1, 1, 0.5],
          } : { opacity: 0.8 }}
          transition={{
            duration: duration,
            repeat: Infinity,
            repeatDelay: pauseDuration,
            times: [0, 0.4, 0.5, 0.7, 0.9, 1],
          }}
        >
          <image
            href={isWrap ? '/images/logos/wetc.svg' : '/images/logos/etc.svg'}
            x="172"
            y="30"
            width="50"
            height="50"
          />
        </motion.g>
      </g>

      {/* === ANIMATED ETC/WETC (traveling through pipe - INPUT) === */}
      <motion.g
        animate={isAnimating ? {
          offsetDistance: ['0%', '50%', '50%', '50%'],
          opacity: [1, 1, 0, 0],
        } : {}}
        transition={{
          duration: duration,
          repeat: Infinity,
          repeatDelay: pauseDuration,
          times: [0, 0.35, 0.4, 1],
          ease: 'easeInOut',
        }}
        style={{
          offsetPath: isWrap
            ? `path("M 40 260 Q 40 180, 100 180 L 160 180 Q 200 180, 200 120")`
            : `path("M 360 260 Q 360 180, 300 180 L 240 180 Q 200 180, 200 120")`,
          offsetRotate: '0deg',
        }}
      >
        <image
          href={isWrap ? '/images/logos/etc.svg' : '/images/logos/wetc.svg'}
          x="-20"
          y="-20"
          width="40"
          height="40"
        />
      </motion.g>

      {/* === ANIMATED OUTPUT TOKEN (coming out on other side) === */}
      <motion.g
        animate={isAnimating ? {
          offsetDistance: ['0%', '0%', '0%', '100%'],
          opacity: [0, 0, 1, 1],
        } : {}}
        transition={{
          duration: duration,
          repeat: Infinity,
          repeatDelay: pauseDuration,
          times: [0, 0.5, 0.55, 1],
          ease: 'easeOut',
        }}
        style={{
          offsetPath: isWrap
            ? `path("M 200 120 Q 200 180, 240 180 L 300 180 Q 360 180, 360 260")`
            : `path("M 200 120 Q 200 180, 160 180 L 100 180 Q 40 180, 40 260")`,
          offsetRotate: '0deg',
        }}
      >
        <image
          href={isWrap ? '/images/logos/wetc.svg' : '/images/logos/etc.svg'}
          x="-20"
          y="-20"
          width="40"
          height="40"
        />
      </motion.g>

      {/* === LABELS === */}
      <text
        x="40"
        y="290"
        textAnchor="middle"
        fill="#3AB83A"
        fontSize="11"
        fontWeight="bold"
        fontFamily="system-ui, sans-serif"
      >
        {isWrap ? 'ETC IN' : 'ETC OUT'}
      </text>
      <text
        x="360"
        y="290"
        textAnchor="middle"
        fill="#ffffff"
        fontSize="11"
        fontWeight="bold"
        fontFamily="system-ui, sans-serif"
      >
        {isWrap ? 'WETC OUT' : 'WETC IN'}
      </text>

      {/* Mode indicator */}
      <text
        x="200"
        y="20"
        textAnchor="middle"
        fill={isWrap ? '#3AB83A' : '#ffffff'}
        fontSize="14"
        fontWeight="bold"
        fontFamily="system-ui, sans-serif"
      >
        {isWrap ? 'WRAP' : 'UNWRAP'}
      </text>

      {/* Exchange rate - positioned below pipes, above shadow */}
      <text
        x="200"
        y="255"
        textAnchor="middle"
        fill="#666666"
        fontSize="16"
        fontWeight="bold"
        fontFamily="system-ui, sans-serif"
      >
        1 ETC = 1 WETC
      </text>
    </motion.svg>
  );
}
