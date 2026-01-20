'use client';

import { motion } from 'framer-motion';
import { SectionDivider } from '@/components/ui';
import { Erc20Jar, WrapUnwrap } from '@/components/animations';
import { fadeInUp, fadeInLeft, fadeInRight, viewportSettings } from '@/lib/animations';
import { PRODUCTS } from '@/lib/constants';

export function WhyWetc() {
  return (
    <section className="py-16 md:py-24 bg-section-alt" aria-labelledby="why-you-need-wetc">
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
            id="why-you-need-wetc"
            className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-wider mb-4"
          >
            Why You Need WETC
          </h2>
          <SectionDivider />
        </motion.div>

        {/* Part 1: ETC doesn't conform */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Erc20Jar Animation */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            variants={fadeInLeft}
            className="flex items-center justify-center order-2 md:order-1"
          >
            <Erc20Jar className="w-full max-w-md" />
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            variants={fadeInRight}
            className="space-y-4 order-1 md:order-2"
          >
            <h3 className="text-2xl font-bold text-white uppercase">
              ETC Doesn&apos;t Conform To Its Own ERC-20 Standard.
            </h3>
            <p className="text-text-secondary text-lg">
              As mentioned above, ETC was the proto-token of the Ethereum Classic alt tokens,
              which means it was built before the ERC-20 standard existed.
            </p>
          </motion.div>
        </div>

        {/* Part 2: Wrapping enables trading */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* WrapUnwrap Animation */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            variants={fadeInLeft}
            className="flex items-center justify-center order-2 md:order-1"
          >
            <WrapUnwrap className="w-full max-w-lg" mode="wrap" />
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            variants={fadeInRight}
            className="space-y-4 order-1 md:order-2"
          >
            <h3 className="text-2xl font-bold text-white uppercase">
              Wrapping ETC Allows You To Trade Directly With Alt Tokens.
            </h3>
            <p className="text-text-secondary text-lg">
              The reason you need WETC is to be able to trade ETC for other ERC-20 tokens on
              decentralized platforms like{' '}
              <a
                href={PRODUCTS.etcswap.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-etc-green hover:text-etc-green-light"
              >
                ETCswap
              </a>
              . Because decentralized platforms running on Ethereum Classic use smart contracts
              to facilitate trades directly between users, every user needs to have the same
              standardized format for every token they trade. This ensures tokens don&apos;t get
              lost in translation.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
