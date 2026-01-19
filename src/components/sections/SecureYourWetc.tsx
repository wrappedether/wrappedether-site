'use client';

import { motion } from 'framer-motion';
import { SectionDivider, Button } from '@/components/ui';
import { fadeInUp, fadeInLeft, fadeInRight, viewportSettings } from '@/lib/animations';
import { PRODUCTS } from '@/lib/constants';

export function SecureYourWetc() {
  return (
    <section className="py-16 md:py-24 bg-section-alt" aria-labelledby="secure-your-wetc">
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
            id="secure-your-wetc"
            className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-wider mb-4"
          >
            Secure Your WETC
          </h2>
          <SectionDivider />
        </motion.div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            variants={fadeInLeft}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-white uppercase">
              Trezor Supports WETC
            </h3>
            <p className="text-text-secondary text-lg">
              You can store your WETC and ETC safely on your{' '}
              <a
                href={PRODUCTS.trezor.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-etc-green hover:text-etc-green-light"
              >
                Trezor hardware wallet
              </a>
              . Trezor Suite fully supports Ethereum Classic&apos;s ERC-20 tokens, giving you
              cold storage security for your DeFi assets.
            </p>

            <ul className="space-y-2 text-text-secondary">
              <li className="flex items-start gap-2">
                <span className="text-etc-green font-bold">✓</span>
                Store WETC alongside your native ETC
              </li>
              <li className="flex items-start gap-2">
                <span className="text-etc-green font-bold">✓</span>
                Full ERC-20 token support on Ethereum Classic
              </li>
              <li className="flex items-start gap-2">
                <span className="text-etc-green font-bold">✓</span>
                Connect to ETCswap with hardware wallet security
              </li>
              <li className="flex items-start gap-2">
                <span className="text-etc-green font-bold">✓</span>
                Sign transactions safely offline
              </li>
            </ul>

            <div className="pt-4">
              <Button href={PRODUCTS.trezor.url} variant="primary" external>
                Get Trezor Suite
              </Button>
            </div>
          </motion.div>

          {/* Highlight Box */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            variants={fadeInRight}
          >
            <div className="bg-etc-gray border border-etc-green rounded-xl p-8">
              <h4 className="text-xl font-bold text-etc-green mb-4">
                Why Hardware Wallets?
              </h4>
              <p className="text-text-secondary">
                Your private keys never leave the device. Even if your computer is compromised,
                your assets remain secure. For DeFi users holding WETC for trading or liquidity
                provision, hardware wallet security is essential.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
