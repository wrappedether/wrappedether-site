'use client';

import { motion } from 'framer-motion';
import { cardHover } from '@/lib/animations';
import Image from 'next/image';

interface CardProps {
  title: string;
  description: string;
  href: string;
  image?: string;
  imageAlt?: string;
  className?: string;
}

export function Card({
  title,
  description,
  href,
  image,
  imageAlt = '',
  className = '',
}: CardProps) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        block p-6 rounded-xl
        bg-etc-gray border border-etc-gray-light
        hover:border-etc-green
        transition-colors
        ${className}
      `}
      variants={cardHover}
      initial="rest"
      whileHover="hover"
    >
      {image && (
        <div className="flex justify-center mb-4">
          <Image
            src={image}
            alt={imageAlt}
            width={80}
            height={80}
            className="rounded-full"
          />
        </div>
      )}
      <h4 className="text-xl font-bold text-white text-center mb-2">
        {title}
      </h4>
      <p className="text-text-secondary text-center text-sm">
        {description}
      </p>
    </motion.a>
  );
}

// Smaller partner card for ecosystem grid
interface PartnerCardProps {
  name: string;
  href: string;
  image: string;
  className?: string;
}

export function PartnerCard({
  name,
  href,
  image,
  className = '',
}: PartnerCardProps) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        flex flex-col items-center p-4 rounded-lg
        bg-etc-gray hover:bg-etc-gray-light
        transition-colors
        ${className}
      `}
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2 }}
    >
      <Image
        src={image}
        alt={name}
        width={48}
        height={48}
        className="rounded-full mb-2"
      />
      <span className="text-sm text-text-secondary text-center">
        {name}
      </span>
    </motion.a>
  );
}
