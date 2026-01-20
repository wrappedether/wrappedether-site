'use client';

import { motion } from 'framer-motion';
import { SectionDivider } from '@/components/ui';
import { fadeInUp, viewportSettings } from '@/lib/animations';
import { PRODUCTS, LINKS, CHAINS } from '@/lib/constants';
import Image from 'next/image';

const ecosystemPartners = [
  {
    name: 'CoinGecko',
    href: LINKS.coingecko,
    image: '/images/logos/coingecko.svg',
  },
  {
    name: 'CoinMarketCap',
    href: LINKS.coinmarketcap,
    image: '/images/logos/coinmarketcap.svg',
    needsLightBg: true,
  },
  {
    name: 'Blockscout',
    href: CHAINS.mainnet.explorer,
    image: '/images/logos/blockscout.svg',
  },
  {
    name: 'Gecko Terminal',
    href: LINKS.geckoTerminal,
    image: '/images/logos/geckoterminal.svg',
  },
  {
    name: 'Classic OS',
    href: PRODUCTS.classicOs.url,
    image: '/images/logos/classicos.svg',
  },
  {
    name: 'Trezor',
    href: PRODUCTS.trezor.url,
    image: '/images/logos/trezor.svg',
    needsLightBg: true,
  },
  {
    name: 'MetaMask',
    href: 'https://metamask.io',
    image: '/images/logos/metamask.svg',
  },
  {
    name: 'ETCswap',
    href: PRODUCTS.etcswap.url,
    image: '/images/logos/etcswapv3.svg',
  },
];

function LogoCarousel() {
  // Triple the array for truly seamless looping
  const triplePartners = [...ecosystemPartners, ...ecosystemPartners, ...ecosystemPartners];

  return (
    <div className="relative overflow-hidden py-8">
      {/* Gradient fade on edges */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />

      {/* CSS-based infinite scroll for seamless animation */}
      <div className="flex animate-scroll">
        {triplePartners.map((partner, index) => (
          <a
            key={`${partner.name}-${index}`}
            href={partner.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 mx-8 group"
          >
            <div className="flex flex-col items-center gap-2 opacity-80 hover:opacity-100 transition-opacity">
              <div className={`h-12 flex items-center justify-center ${partner.needsLightBg ? 'bg-white/80 rounded-lg px-2' : ''}`}>
                <Image
                  src={partner.image}
                  alt={partner.name}
                  width={120}
                  height={48}
                  className="h-12 w-auto object-contain"
                />
              </div>
              <span className="text-xs text-text-secondary group-hover:text-white transition-colors whitespace-nowrap">
                {partner.name}
              </span>
            </div>
          </a>
        ))}
      </div>

      {/* Inline styles for the animation */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-160px * ${ecosystemPartners.length}));
          }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
          width: fit-content;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}

export function Ecosystem() {
  return (
    <section className="py-16 md:py-24" aria-labelledby="wetc-ecosystem">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Section Header */}
        <motion.div
          className="text-center mb-8"
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          variants={fadeInUp}
        >
          <h2
            id="wetc-ecosystem"
            className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-wider mb-4"
          >
            WETC Ecosystem
          </h2>
          <SectionDivider />
          <p className="text-text-secondary text-lg mt-6 max-w-2xl mx-auto">
            WETC is live and integrated across the Ethereum Classic DeFi ecosystem.
          </p>
        </motion.div>

        {/* Logo Carousel */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          variants={fadeInUp}
        >
          <LogoCarousel />
        </motion.div>
      </div>
    </section>
  );
}
