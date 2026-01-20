# wrappedether.org

> Public good educational website for Wrapped Ether (WETC) on Ethereum Classic

**Live at:** [www.wrappedether.org](https://wrappedether.org)

---

## Versions

| Version | Status | Tech Stack | Description |
|---------|--------|------------|-------------|
| **v0.1** | Archived | Static HTML + CSS | Basic explainer with WETH.io GIFs |
| **v0.2** | ✅ Complete | Next.js + React + Framer Motion | Custom animations, modern stack |

### What's New in v0.2

- **Custom SVG Animations** - All 5 WETH.io GIFs replaced with custom Framer Motion animations
- **Modern Tech Stack** - Next.js 16, React 19, TypeScript 5, Tailwind CSS 4
- **Performance Optimized** - Lighthouse scores >90, <100KB gzipped JS, 60fps animations
- **Mobile Responsive** - Fully responsive design from 375px+
- **Accessibility** - WCAG compliant with reduced motion support

---

## What is WETC?

**Wrapped Ether (WETC)** is the ERC-20 tokenized version of Ethereum Classic's native ETC. It enables ETC to participate in DeFi protocols that require the ERC-20 standard.

**Why WETC exists:**
- ETC predates the ERC-20 standard (2015 vs 2017)
- DeFi protocols like ETCswap require standardized token interfaces
- WETC allows direct trading: `WETC/USC` on DEX mirrors `ETC/USDC` on CEX
- Non-custodial, 1:1 backed, trustless smart contract

---

## Canonical Contract Addresses

| Network | Chain ID | Contract Address |
|---------|----------|------------------|
| **Mainnet (ETC)** | 61 | [0x1953cab0E5bFa6D4a9BaD6E05fD46C1CC6527a5a](https://etc.blockscout.com/address/0x1953cab0E5bFa6D4a9BaD6E05fD46C1CC6527a5a) |
| **Testnet (Mordor)** | 63 | [0x1953cab0E5bFa6D4a9BaD6E05fD46C1CC6527a5a](https://etc-mordor.blockscout.com/address/0x1953cab0E5bFa6D4a9BaD6E05fD46C1CC6527a5a) |

**Contract Repository:** https://github.com/wrappedether/canonical-wetc

---

## Tech Stack (v0.2)

### Runtime & Tools
| Tool | Version | Purpose |
|------|---------|---------|
| Node.js | 22.x LTS | Runtime (native fetch, ESM) |
| pnpm | 9.x | Package manager |

### Framework & Libraries
| Library | Version | Purpose |
|---------|---------|---------|
| Next.js | 15.1.x | React framework, App Router |
| React | 19.x | Component UI |
| TypeScript | 5.7.x | Type safety |
| Tailwind CSS | 4.0.x | Styling (Oxide engine) |
| Framer Motion | 11.15.x | SVG animations |

### Deployment
| Service | Purpose |
|---------|---------|
| Vercel | Hosting & builds |
| GitHub | Source control |

---

## Project Structure

```
wrappedether-site/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with SEO metadata
│   │   ├── page.tsx            # Main page
│   │   └── globals.css         # Tailwind styles
│   ├── components/
│   │   ├── sections/           # Page sections (Hero, WhyWetc, etc.)
│   │   ├── animations/         # Custom SVG animations
│   │   ├── ui/                 # Reusable UI components
│   │   ├── BackgroundSystem.tsx
│   │   └── Footer.tsx
│   └── lib/
│       ├── constants.ts        # Contract addresses, URLs, SEO keywords
│       └── animations.ts       # Framer Motion variants
├── public/
│   └── images/                 # Logos, OG images, favicons
├── docs/                       # Development documentation
├── research/                   # Reference materials
├── package.json
├── next.config.ts
├── tsconfig.json
└── eslint.config.mjs
```

---

## Quick Start

### Prerequisites
```bash
node --version  # Should be 22.x
pnpm --version  # Should be 9.x
```

### Development
```bash
# Clone
git clone https://github.com/wrappedether/wrappedether-site.git
cd wrappedether-site

# Install
pnpm install

# Dev server
pnpm dev
# Visit http://localhost:3000

# Build
pnpm build

# Lint
pnpm lint
```

---

## Site Sections

1. **WTF IS WETC?** - Hero introduction
2. **WHY YOU NEED WETC** - ERC-20 compatibility
3. **READY TO WRAP?** - CTAs (ETCswap, Classic OS)
4. **THE CANONICAL WETC** - Contract addresses
5. **SECURE YOUR WETC** - Trezor support
6. **BUILT WITH BEST PRACTICES** - `emit` keyword
7. **WETC ECOSYSTEM** - Partners grid

---

## Animation Strategy (v0.2)

### Custom WETC Animations

All 5 custom SVG + Framer Motion animations are complete:

| Animation | Concept | Status |
|-----------|---------|--------|
| BlockchainDapp | Isometric blockchain boxes | ✅ Complete |
| Erc20Jar | Token compatibility jar | ✅ Complete |
| SmartContractEvolution | Wrap/unwrap vacuum | ✅ Complete |
| WrapUnwrap | ETC → WETC conveyor | ✅ Complete |
| Evolution | Future/best practices | ✅ Complete |

### Implementation
- SVG with animation-ready structure and grouped elements
- Framer Motion for smooth 60fps animations
- React components encapsulating all animation logic
- Scroll-triggered reveals on each section
- Reduced motion support for accessibility

See [ANIMATION-GUIDE.md](docs/ANIMATION-GUIDE.md) for details.

---

## Design Inspiration

This site is inspired by [WETH.io](https://web.archive.org/web/20240320002559/https://weth.io/):
- Same section flow (WTF → Why → Ready → Contracts)
- Same visual metaphors (jar, conveyor, vacuum)
- Adapted to ETC green (#3AB83A) color palette
- **Custom animations** (not using WETH.io GIFs in v0.2)

---

## Product Funnels

| Product | URL | Purpose |
|---------|-----|---------|
| **ETCswap** | https://etcswap.org | Wrap/unwrap ETC, trade |
| **Classic OS** | https://app.classicos.org | Portfolio management |
| **Trezor** | https://trezor.io/trezor-suite | Hardware wallet storage |

---

## Key Features

- **Trezor Support** - Store WETC on hardware wallets
- **Classic USD Example** - WETC/USC mirrors ETC/USDC
- **Modern Contract** - Uses `emit` keyword (Gnosis Solidity 0.5+ update)
- **IPFS Backup** - Censorship-resistant access
- **Mobile Responsive** - Works on all devices

---

## Development Docs

| Document | Description |
|----------|-------------|
| [V0.2-PLAN.md](docs/V0.2-PLAN.md) | Full development roadmap |
| [ANIMATION-GUIDE.md](docs/ANIMATION-GUIDE.md) | SVG + Framer Motion workflow |
| [WETH-IO-ANALYSIS.md](docs/WETH-IO-ANALYSIS.md) | Visual design analysis |

---

## Attribution

### WETH.io Project
Inspired by [WETH.io](https://web.archive.org/web/20240320002559/https://weth.io/). Thanks to:
- **Nikolai Mushegian** ([@delete_shitcoin](https://twitter.com/delete_shitcoin))
- **DappHub** ([@dapphub](https://twitter.com/dapphub))

### Gnosis WETH9 Update
Contract updated to Solidity 0.5+ best practices by [Gnosis](https://gnosis.io).

### `emit` Keyword
- [Solidity v0.4.21 Release](https://github.com/ethereum/solidity/releases/tag/v0.4.21)
- ['emit' keyword in Solidity](https://aniketengg.medium.com/emit-keyword-in-solidity-242a679b0e1a)

---

## Links

### Product
- Website: https://wrappedether.org
- IPFS: https://ipfs.io/ipfs/bafybeihky5oo4jkowxpkfsywfj6axnxwqo5gkxo5ivztu3xdr6g4nzczgy

### Market Data
- CoinGecko: https://www.coingecko.com/coins/wetc
- Gecko Terminal: https://www.geckoterminal.com/ethereum_classic/pools

### Code
- GitHub Organization: https://github.com/wrappedether
- Website Repo: https://github.com/wrappedether/wrappedether-site
- Contract Repo: https://github.com/wrappedether/canonical-wetc

---

## License

Creative Commons Attribution-ShareAlike 3.0 Unported
http://creativecommons.org/licenses/by-sa/3.0/

---

## Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/improvement`)
3. Make changes
4. Test locally (`pnpm dev`)
5. Submit PR

See [CONTRIBUTING.md](CONTRIBUTING.md) for details.

---

*Made with care by the Ethereum Classic community at [ethereumclassic.com](https://ethereumclassic.com)*

**This is a public good. Fast, beautiful, educational.**
