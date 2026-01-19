'use client';

import { motion } from 'framer-motion';
import { SectionDivider } from '@/components/ui';
import { SmartContractEvolution } from '@/components/animations';
import { fadeInUp, fadeInLeft, fadeInRight, viewportSettings } from '@/lib/animations';
import { LINKS } from '@/lib/constants';

export function BestPractices() {
  return (
    <section className="py-16 md:py-24" aria-labelledby="best-practices">
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
            id="best-practices"
            className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-wider mb-4"
          >
            The Future of WETC
          </h2>
          <SectionDivider />
        </motion.div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* SmartContractEvolution Animation */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            variants={fadeInLeft}
            className="flex items-center justify-center order-2 md:order-1"
          >
            <SmartContractEvolution className="w-full max-w-lg" />
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            variants={fadeInRight}
            className="space-y-6 order-1 md:order-2"
          >
            <div>
              <h3 className="text-2xl font-bold text-white uppercase mb-4">
                Built With Modern Best Practices
              </h3>
              <p className="text-text-secondary text-lg">
                The WETC contract was updated by{' '}
                <a
                  href={LINKS.gnosis}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-etc-green hover:text-etc-green-light"
                >
                  Gnosis
                </a>{' '}
                to Solidity 0.5+ best practices. Unlike older wrapped token contracts that may
                not follow modern standards, this canonical WETC uses the <code>emit</code>{' '}
                keyword for all events.
              </p>
            </div>

            <blockquote className="border-l-4 border-etc-green bg-etc-gray rounded-r-lg p-4">
              <p className="text-text-secondary italic">
                In Solidity v0.4.21 (March 2018), the <code>emit</code> keyword was introduced
                to emit events. This helps differentiate functions from events &mdash; a confusion
                that was one of the reasons for TheDAO Hack which led to the hard fork and gave
                birth to Ethereum Classic.
              </p>
            </blockquote>

            <div>
              <h4 className="text-lg font-bold text-white mb-3">This means WETC is:</h4>
              <ul className="space-y-2 text-text-secondary">
                <li className="flex items-start gap-2">
                  <span className="text-etc-green font-bold">✓</span>
                  Compatible with modern Solidity tooling
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-etc-green font-bold">✓</span>
                  Follows current security best practices
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-etc-green font-bold">✓</span>
                  Easier to audit and integrate
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-etc-green font-bold">✓</span>
                  Properly emits events for better indexing
                </li>
              </ul>
            </div>

            <p className="text-sm text-text-muted">
              Learn more:{' '}
              <a
                href={LINKS.emitArticle}
                target="_blank"
                rel="noopener noreferrer"
                className="text-etc-green hover:text-etc-green-light"
              >
                &apos;emit&apos; keyword in Solidity
              </a>{' '}
              by Aniket
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
