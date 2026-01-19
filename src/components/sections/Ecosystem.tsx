'use client';

import { motion } from 'framer-motion';
import { SectionDivider, PartnerCard } from '@/components/ui';
import { fadeInUp, staggerContainer, staggerItem, viewportSettings } from '@/lib/animations';
import { PRODUCTS, LINKS } from '@/lib/constants';

const ecosystemPartners = [
  {
    name: 'ETCswap',
    href: PRODUCTS.etcswap.url,
    image: '/images/etc-logo-green-black-circle.png',
  },
  {
    name: 'Classic USD',
    href: PRODUCTS.classicUsd.url,
    image: '/images/etc-logo-black-green-circle.png',
  },
  {
    name: 'Classic OS',
    href: PRODUCTS.classicOs.url,
    image: '/images/etc-logo-white-green-circle.png',
  },
  {
    name: 'CoinGecko',
    href: LINKS.coingecko,
    image: '/images/etc-logo-green-white-circle.png',
  },
  {
    name: 'Gecko Terminal',
    href: LINKS.geckoTerminal,
    image: '/images/etc-logo-black-white-circle.png',
  },
  {
    name: 'Trezor Suite',
    href: PRODUCTS.trezor.url,
    image: '/images/etc-logo-white-black-circle.png',
  },
  {
    name: 'BlockScout',
    href: 'https://etc.blockscout.com',
    image: '/images/ethereum-classic.png',
  },
  {
    name: 'ETCswap Launchpad',
    href: 'https://launchpad.etcswap.org',
    image: '/images/wrapped-ether.png',
  },
];

export function Ecosystem() {
  return (
    <section className="py-16 md:py-24" aria-labelledby="wetc-ecosystem">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
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

        {/* Partner Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          variants={staggerContainer}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
        >
          {ecosystemPartners.map((partner) => (
            <motion.div key={partner.name} variants={staggerItem}>
              <PartnerCard
                name={partner.name}
                href={partner.href}
                image={partner.image}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
