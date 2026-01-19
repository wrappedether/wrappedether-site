/**
 * WETC Contract and Link Constants
 * Canonical addresses for Wrapped Ether on Ethereum Classic
 */

// Contract Addresses (same on both networks)
export const WETC_CONTRACT = '0x1953cab0E5bFa6D4a9BaD6E05fD46C1CC6527a5a';

// Chain Configuration
export const CHAINS = {
  mainnet: {
    id: 61,
    name: 'Ethereum Classic',
    symbol: 'ETC',
    explorer: 'https://etc.blockscout.com',
    rpc: 'https://etc.rivet.link',
  },
  mordor: {
    id: 63,
    name: 'Mordor Testnet',
    symbol: 'METC',
    explorer: 'https://etc-mordor.blockscout.com',
    rpc: 'https://rpc.mordor.etccooperative.org',
  },
} as const;

// Contract Links
export const CONTRACT_LINKS = {
  mainnet: {
    address: `${CHAINS.mainnet.explorer}/address/${WETC_CONTRACT}`,
    tx: `${CHAINS.mainnet.explorer}/tx/0x9bb5a4821e6685a6f33e7464cf16b149f69c75c8ba8dde4c1dc134c095e2259e`,
  },
  mordor: {
    address: `${CHAINS.mordor.explorer}/address/${WETC_CONTRACT}`,
    tx: `${CHAINS.mordor.explorer}/tx/0x895b9b415c37952b28398e0615a1e5eb8d3b3042ca36a89f46aff93c5aea212d`,
  },
} as const;

// Product Funnels
export const PRODUCTS = {
  etcswap: {
    name: 'ETCswap',
    url: 'https://etcswap.org',
    description: 'Wrap/unwrap ETC and trade on the leading ETC DEX',
  },
  classicOs: {
    name: 'Classic OS',
    url: 'https://app.classicos.org',
    description: 'Economic command center for Ethereum Classic',
  },
  classicUsd: {
    name: 'Classic USD',
    url: 'https://classicusd.com',
    description: 'USD stablecoin on Ethereum Classic',
  },
  trezor: {
    name: 'Trezor Suite',
    url: 'https://trezor.io/trezor-suite',
    description: 'Hardware wallet for secure storage',
  },
} as const;

// External Links
export const LINKS = {
  github: 'https://github.com/wrappedether/canonical-wetc',
  coingecko: 'https://www.coingecko.com/coins/wetc',
  coinmarketcap: 'https://coinmarketcap.com/currencies/ethereum-classic/',
  tradingview: 'https://www.tradingview.com/symbols/ETCUSD/',
  geckoTerminal: 'https://www.geckoterminal.com/ethereum_classic/pools',
  ipfs: 'https://ipfs.io/ipfs/bafybeihky5oo4jkowxpkfsywfj6axnxwqo5gkxo5ivztu3xdr6g4nzczgy',
  brale: 'https://brale.xyz',
  gnosis: 'https://www.gnosis.io',
  wethioArchive: 'https://web.archive.org/web/20240320002559/https://weth.io/',
  emitArticle: 'https://aniketengg.medium.com/emit-keyword-in-solidity-242a679b0e1a',
  solidityRelease: 'https://github.com/ethereum/solidity/releases/tag/v0.4.21',
} as const;

// Social Links
export const SOCIAL = {
  nikolai: 'https://twitter.com/delete_shitcoin',
  dapphub: 'https://twitter.com/dapphub',
  ethereumClassic: 'https://ethereumclassic.com',
} as const;

// Site Metadata
export const SITE = {
  name: 'WETC',
  title: 'WETC | Wrapped Ether on Ethereum Classic',
  description: 'WETC is the ERC-20 tokenized version of ETC for DeFi on Ethereum Classic. Trade on ETCswap, track on CoinGecko, store on Trezor.',
  url: 'https://wrappedether.org',
  image: '/images/wrapped-ether.png',
} as const;
