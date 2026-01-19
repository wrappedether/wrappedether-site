'use client';

import { motion } from 'framer-motion';
import { SectionDivider } from '@/components/ui';
import { BlockchainDapp } from '@/components/animations';
import { fadeInUp, fadeInLeft, fadeInRight, viewportSettings } from '@/lib/animations';

export function Hero() {
  return (
    <section className="py-16 md:py-24" aria-labelledby="wtf-is-wetc">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          variants={fadeInUp}
        >
          <h1
            id="wtf-is-wetc"
            className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-wider mb-4"
          >
            WTF IS WETC?
          </h1>
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
            <p className="text-xl text-text-secondary">
              Put plainly, WETC is &quot;wrapped ETC&quot; but let&apos;s start by introducing the players.
            </p>

            <div>
              <h3 className="text-xl font-bold text-white uppercase mb-2">
                First, There&apos;s Ether Token
              </h3>
              <p className="text-text-secondary">
                Ether or ETC is the native currency built on the Ethereum Classic blockchain.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white uppercase mb-2">
                Second, There Are Alt Tokens
              </h3>
              <p className="text-text-secondary">
                When a dApp (decentralized app) is built off of the Ethereum Classic Blockchain
                it usually implements its own form of Token. Think ETCswap&apos;s liquidity tokens,
                or Classic USD&apos;s USC Token.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white uppercase mb-2">
                Finally The ERC-20 Standard
              </h3>
              <p className="text-text-secondary">
                ERC-20 is a standard developed after the release of ETC that defines how tokens
                are transferred and how to keep a consistent record of those transfers among
                tokens in the Ethereum Classic Network.
              </p>
            </div>
          </motion.div>

          {/* BlockchainDapp Animation */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            variants={fadeInRight}
            className="flex items-center justify-center"
          >
            <BlockchainDapp className="w-full max-w-md" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
