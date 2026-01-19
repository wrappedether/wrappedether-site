'use client';

import { motion } from 'framer-motion';

interface SectionDividerProps {
  className?: string;
}

export function SectionDivider({ className = '' }: SectionDividerProps) {
  return (
    <div className={`flex items-center justify-center gap-2 my-4 ${className}`}>
      {[0, 1, 2, 3, 4].map((i) => (
        <motion.span
          key={i}
          className="w-2 h-2 rounded-full bg-etc-green"
          animate={{
            scale: [0.8, 1, 0.8],
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.2,
          }}
        />
      ))}
    </div>
  );
}
