'use client';

import { LINKS, SOCIAL, CONTRACT_LINKS } from '@/lib/constants';

export function Footer() {
  const footerLinks = [
    { name: 'Blockscout', href: CONTRACT_LINKS.mainnet.address },
    { name: 'CoinGecko', href: LINKS.coingecko },
    { name: 'CoinMarketCap', href: LINKS.coinmarketcap },
    { name: 'TradingView', href: LINKS.tradingview },
    { name: 'GitHub', href: LINKS.github },
  ];

  return (
    <footer className="bg-etc-dark border-t border-etc-gray-light py-12 mt-16">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Quick Links */}
        <div className="flex flex-wrap justify-center gap-6 mb-8">
          {footerLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-etc-green text-sm transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Attribution */}
        <div className="text-center text-text-secondary text-sm max-w-2xl mx-auto space-y-3">
          <p>The greater EVM stands on the shoulders of giants.</p>
          <p>
            Inspired by the{' '}
            <a
              href={LINKS.wethioArchive}
              target="_blank"
              rel="noopener noreferrer"
              className="text-etc-green hover:text-etc-green-light"
            >
              WETH.io
            </a>{' '}
            project. Thank you to{' '}
            <a
              href={SOCIAL.nikolai}
              target="_blank"
              rel="noopener noreferrer"
              className="text-etc-green hover:text-etc-green-light"
            >
              Nikolai Mushegian
            </a>{' '}
            and the{' '}
            <a
              href={SOCIAL.dapphub}
              target="_blank"
              rel="noopener noreferrer"
              className="text-etc-green hover:text-etc-green-light"
            >
              DappHub
            </a>{' '}
            participants.
          </p>
          <p className="pt-2">
            <strong className="text-white">Note:</strong> WETC Contract was updated by{' '}
            <a
              href={LINKS.gnosis}
              target="_blank"
              rel="noopener noreferrer"
              className="text-etc-green hover:text-etc-green-light"
            >
              Gnosis
            </a>{' '}
            to Solidity 0.5+ best practices.{' '}
            <a
              href={LINKS.emitArticle}
              target="_blank"
              rel="noopener noreferrer"
              className="text-etc-green hover:text-etc-green-light"
            >
              Why?
            </a>
          </p>
          <p className="pt-6">
            Made with{' '}
            <span className="text-etc-green">&#9829;</span> by{' '}
            <a
              href={SOCIAL.ethereumClassic}
              target="_blank"
              rel="noopener noreferrer"
              className="text-etc-green hover:text-etc-green-light"
            >
              ethereumclassic.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
