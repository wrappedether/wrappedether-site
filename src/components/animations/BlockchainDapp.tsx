'use client';

import { motion, useReducedMotion } from 'framer-motion';

interface BlockchainDappProps {
  className?: string;
}

/**
 * BlockchainDapp Animation
 * Inspired by WETH_01.gif - Isometric 3D visualization showing
 * the Ethereum Classic blockchain as a foundation with dApp boxes on top
 * Text is properly integrated into the cube faces
 */
export function BlockchainDapp({ className = '' }: BlockchainDappProps) {
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

      {/* Main Blockchain Cube */}
      <motion.g
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        {/* Shadow */}
        <ellipse
          cx="200"
          cy="355"
          rx="115"
          ry="25"
          fill="#000000"
          opacity="0.6"
        />

        {/* Cube - Left face (with diagonal stripes) */}
        <path
          d="M85 200 L85 310 L200 375 L200 265 Z"
          fill="#010101"
          stroke="#2a2a2a"
          strokeWidth="2"
        />

        {/* Diagonal hatching on left face */}
        <g clipPath="url(#leftFaceClip)">
          <defs>
            <clipPath id="leftFaceClip">
              <path d="M85 200 L85 310 L200 375 L200 265 Z" />
            </clipPath>
          </defs>
          {[...Array(20)].map((_, i) => (
            <line
              key={`left-hatch-${i}`}
              x1={85 + i * 10}
              y1={180}
              x2={85 + i * 10 - 60}
              y2={400}
              stroke="#3AB83A"
              strokeWidth="2"
              opacity="0.6"
            />
          ))}
        </g>

        {/* Cube - Right face */}
        <path
          d="M200 265 L200 375 L315 310 L315 200 Z"
          fill="#020202"
          stroke="#2a2a2a"
          strokeWidth="2"
        />

        {/* Text on right face - isometric distortion */}
        <g transform="translate(257, 280)">
          <text
            x="0"
            y="0"
            textAnchor="middle"
            fill="#3AB83A"
            fontSize="12"
            fontWeight="bold"
            fontFamily="system-ui, sans-serif"
            transform="matrix(1, -0.565, 0, 1, 0, 0)"
            opacity="0.6"
          >
            Ethereum Classic
          </text>
          <text
            x="0"
            y="18"
            textAnchor="middle"
            fill="#3AB83A"
            fontSize="12"
            fontWeight="bold"
            fontFamily="system-ui, sans-serif"
            transform="matrix(1, -0.565, 0, 1, 0, 0)"
            opacity="0.6"
          >
            Blockchain
          </text>
        </g>

        {/* Cube - Top face (green accent) */}
        <path
          d="M85 200 L200 135 L315 200 L200 265 Z"
          fill="#000000"
          stroke="#2a2a2a"
          strokeWidth="2"
        />

        {/* ETC Logo on top face - isometric transform */}
        <g transform="translate(200, 200)">
          <image
            href="/images/logos/etc.svg"
            x="-40"
            y="-40"
            width="80"
            height="80"
            transform="matrix(1, 0.565, -1, 0.565, 0, 0)"
            preserveAspectRatio="xMidYMid slice"
          />
        </g>
      </motion.g>

      {/* dApp Box 1 - Left */}
      <motion.g
        initial={{ y: -50, opacity: 0 }}
        animate={isAnimating ? { y: 0, opacity: 1 } : { y: 0, opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5, ease: 'easeOut' }}
      >
        {/* Box shadow */}
        <ellipse cx="125" cy="168" rx="22" ry="7" fill="#000000" opacity="0.4" />

        {/* Left face */}
        <path
          d="M95 110 L95 155 L125 170 L125 125 Z"
          fill="#3AB83A"
          stroke="#000000"
          strokeWidth="2"
        />
        {/* Right face */}
        <path
          d="M125 125 L125 170 L155 155 L155 110 Z"
          fill="#3AB83A"
          stroke="#000000"
          strokeWidth="2"
        />
        {/* Top face */}
        <path
          d="M95 110 L125 95 L155 110 L125 125 Z"
          fill="#000000"
          stroke="#000000"
          strokeWidth="2"
        />

        {/* WETC Logo on top face - isometric transform */}
        <g transform="translate(125, 110)">
          <image
            href="/images/logos/wetc.svg"
            x="-12"
            y="-12"
            width="24"
            height="24"
            transform="matrix(1, 0.565, -1, 0.565, 0, 0)"
            preserveAspectRatio="xMidYMid slice"
          />
        </g>

        {/* dApp label */}
        <text
          x="140"
          y="220"
          textAnchor="middle"
          fill="#000000"
          fontSize="8"
          fontWeight="bold"
          fontFamily="system-ui, sans-serif"
          transform="matrix(1, -0.565, 0, 1, 0, 0)"
        >
          dApp
        </text>
      </motion.g>

      {/* dApp Box 2 - Center (taller) */}
      <motion.g
        initial={{ y: -50, opacity: 0 }}
        animate={isAnimating ? { y: 0, opacity: 1 } : { y: 0, opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.5, ease: 'easeOut' }}
      >
        {/* Box shadow */}
        <ellipse cx="200" cy="133" rx="22" ry="7" fill="#000000" opacity="0.4" />

        {/* Left face */}
        <path
          d="M170 60 L170 120 L200 135 L200 75 Z"
          fill="#3AB83A"
          stroke="#000000"
          strokeWidth="2"
        />
        {/* Right face */}
        <path
          d="M200 75 L200 135 L230 120 L230 60 Z"
          fill="#3AB83A"
          stroke="#000000"
          strokeWidth="2"
        />
        {/* Top face */}
        <path
          d="M170 60 L200 45 L230 60 L200 75 Z"
          fill="#000000"
          stroke="#000000"
          strokeWidth="2"
        />

        {/* WETC Logo on top face - isometric transform */}
        <g transform="translate(200, 60)">
          <image
            href="/images/logos/wetc.svg"
            x="-12"
            y="-12"
            width="24"
            height="24"
            transform="matrix(1, 0.565, -1, 0.565, 0, 0)"
            preserveAspectRatio="xMidYMid slice"
          />
        </g>

        {/* dApp label */}
        <text
          x="215"
          y="220"
          textAnchor="middle"
          fill="#000000"
          fontSize="8"
          fontWeight="bold"
          fontFamily="system-ui, sans-serif"
          transform="matrix(1, -0.565, 0, 1, 0, 0)"
        >
          dApp
        </text>
      </motion.g>

      {/* dApp Box 3 - Right */}
      <motion.g
        initial={{ y: -50, opacity: 0 }}
        animate={isAnimating ? { y: 0, opacity: 1 } : { y: 0, opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.5, ease: 'easeOut' }}
      >
        {/* Box shadow */}
        <ellipse cx="275" cy="168" rx="22" ry="7" fill="#000000" opacity="0.4" />

        {/* Left face */}
        <path
          d="M245 110 L245 155 L275 170 L275 125 Z"
          fill="#3AB83A"
          stroke="#000000"
          strokeWidth="2"
        />
        {/* Right face */}
        <path
          d="M275 125 L275 170 L305 155 L305 110 Z"
          fill="#3AB83A"
          stroke="#000000"
          strokeWidth="2"
        />
        {/* Top face */}
        <path
          d="M245 110 L275 95 L305 110 L275 125 Z"
          fill="#000000"
          stroke="#000000"
          strokeWidth="2"
        />

        {/* WETC Logo on top face - isometric transform */}
        <g transform="translate(275, 110)">
          <image
            href="/images/logos/wetc.svg"
            x="-12"
            y="-12"
            width="24"
            height="24"
            transform="matrix(1, 0.565, -1, 0.565, 0, 0)"
            preserveAspectRatio="xMidYMid slice"
          />
        </g>

        {/* dApp label */}
        <text
          x="290"
          y="305"
          textAnchor="middle"
          fill="#000000"
          fontSize="8"
          fontWeight="bold"
          fontFamily="system-ui, sans-serif"
          transform="matrix(1, -0.565, 0, 1, 0, 0)"
        >
          dApp
        </text>
      </motion.g>

      {/* Floating particles */}
      {isAnimating && (
        <>
          <motion.circle
            cx="60"
            cy="130"
            r="3"
            fill="#3AB83A"
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          <motion.circle
            cx="340"
            cy="160"
            r="2"
            fill="#3AB83A"
            animate={{
              y: [0, -15, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 0.5,
            }}
          />
          <motion.circle
            cx="355"
            cy="80"
            r="2"
            fill="#3AB83A"
            animate={{
              y: [0, -10, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 1,
            }}
          />
          <motion.circle
            cx="45"
            cy="240"
            r="2"
            fill="#3AB83A"
            animate={{
              y: [0, -12, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 2.2,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 0.8,
            }}
          />
        </>
      )}
    </motion.svg>
  );
}
