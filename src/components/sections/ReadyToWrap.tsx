'use client';

import { motion } from 'framer-motion';
import { SectionDivider, Card } from '@/components/ui';
import { WrapUnwrap } from '@/components/animations';
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, staggerItem, viewportSettings } from '@/lib/animations';
import { PRODUCTS } from '@/lib/constants';

export function ReadyToWrap() {
  return (
    <section className="py-16 md:py-24" aria-labelledby="ready-to-wrap">
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
            id="ready-to-wrap"
            className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-wider mb-4"
          >
            Ready To Wrap?
          </h2>
          <SectionDivider />
        </motion.div>

        {/* Part 1: You don't actually wrap */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Text Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            variants={fadeInLeft}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold text-white uppercase">
              So This Is Awkward...You Don&apos;t Actually Wrap Anything.
            </h3>
            <p className="text-text-secondary text-lg">
              When you &quot;wrap&quot; ETC, you aren&apos;t really wrapping so much as trading
              via a smart contract for an equal token called WETC. If you want to get plain
              ETC back you need to &quot;unwrap&quot; it. AKA trade it back for plain ETC.
            </p>
          </motion.div>

          {/* WrapUnwrap Animation */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            variants={fadeInRight}
            className="flex items-center justify-center"
          >
            <WrapUnwrap className="w-full max-w-lg" mode="unwrap" />
          </motion.div>
        </div>

        {/* Part 2: Get the WETC */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Text Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            variants={fadeInLeft}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold text-white uppercase">
              Whatever, Just Give Me The WETC!
            </h3>
            <p className="text-text-secondary text-lg">
              Wrap your ETC on{' '}
              <a
                href={PRODUCTS.etcswap.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-etc-green hover:text-etc-green-light"
              >
                ETCswap
              </a>
              . Once you have the WETC you can freely trade with anyone holding an ERC-20
              token on Ethereum Classic.
            </p>
          </motion.div>

          {/* CTA Cards */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            variants={staggerContainer}
            className="grid sm:grid-cols-2 gap-4"
          >
            <motion.div variants={staggerItem}>
              <Card
                title={PRODUCTS.etcswap.name}
                description={PRODUCTS.etcswap.description}
                href={PRODUCTS.etcswap.url}
                image="/images/etc-logo-green-black-circle.png"
                imageAlt="ETCswap logo"
              />
            </motion.div>
            <motion.div variants={staggerItem}>
              <Card
                title={PRODUCTS.classicOs.name}
                description={PRODUCTS.classicOs.description}
                href={PRODUCTS.classicOs.url}
                image="/images/etc-logo-black-green-circle.png"
                imageAlt="Classic OS logo"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
