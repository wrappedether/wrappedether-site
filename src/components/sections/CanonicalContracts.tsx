'use client';

import { motion } from 'framer-motion';
import { SectionDivider, ContractTable, Button } from '@/components/ui';
import { fadeInUp, viewportSettings } from '@/lib/animations';
import { LINKS } from '@/lib/constants';

export function CanonicalContracts() {
  return (
    <section className="py-16 md:py-24 bg-section-alt" aria-labelledby="canonical-contracts">
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
            id="canonical-contracts"
            className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-wider mb-4"
          >
            The Canonical WETC
          </h2>
          <SectionDivider />
          <p className="text-text-secondary text-lg mt-6 max-w-2xl mx-auto">
            Only use these official WETC contract addresses. The same contract is deployed
            on both mainnet and testnet.
          </p>
        </motion.div>

        {/* Contract Table */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          variants={fadeInUp}
          className="mb-8"
        >
          <ContractTable />
        </motion.div>

        {/* GitHub CTA */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          variants={fadeInUp}
          className="text-center"
        >
          <Button href={LINKS.github} variant="outline" external>
            View Source on GitHub
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
