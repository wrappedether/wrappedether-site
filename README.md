# wrappedether.org

> Public good educational website for Wrapped Ether (WETC) on Ethereum Classic

**Live at:** www.wrappedether.org

---

## Project Purpose

**wrappedether.org** is a public good informational website explaining what Wrapped Ether (WETC) is and why it's required for DeFi on Ethereum Classic.

### What is WETC?

Wrapped Ether (WETC) is a tokenized ERC-20 version of Ethereum Classic's native ETC asset. It enables ETC to be used in decentralized exchanges and DeFi protocols that require the ERC-20 standard.

**Why WETC exists:**
- ETC predates the ERC-20 standard (launched 2015, before ERC-20)
- DeFi protocols like ETCswap require standardized token interfaces
- WETC allows direct trading between ETC and other ERC-20 tokens
- Non-custodial 1:1 wrapping/unwrapping via smart contract

---

## Canonical Contract Addresses

| Network | Chain ID | Contract Address |
|---------|----------|------------------|
| **Mainnet (ETC)** | 61 | [0x1953cab0E5bFa6D4a9BaD6E05fD46C1CC6527a5a](https://etc.blockscout.com/address/0x1953cab0E5bFa6D4a9BaD6E05fD46C1CC6527a5a) |
| **Testnet (Mordor)** | 63 | [0x1953cab0E5bFa6D4a9BaD6E05fD46C1CC6527a5a](https://etc-mordor.blockscout.com/address/0x1953cab0E5bFa6D4a9BaD6E05fD46C1CC6527a5a) |

**Contract Repository:** https://github.com/wrappedether/canonical-wetc

---

## Current Site (v1.0 - Minimal HTML)

### Tech Stack
- **Static HTML** - GitHub Pages deployment
- **Minimal Theme** - Jekyll theme for GitHub Pages
- **CSS** - Custom styles
- **Domain:** www.wrappedether.org (via CNAME)

### Site Structure
```
/
├── index.html          # Main page
├── images/             # Logos (ETC, WETC)
│   ├── ethereum-classic.png
│   ├── wrapped-ether.png
│   └── favicon.ico
├── stylesheets/        # CSS files
│   ├── styles.css
│   └── pygment_trac.css
├── javascripts/        # JS files
├── CNAME              # Domain configuration
└── _config.yml        # Jekyll configuration
```

### Content Sections
1. **What is WETC?** - Explanation of wrapped tokens
2. **Why You Need WETC** - ERC-20 compliance for DeFi
3. **Ready to Wrap?** - How to wrap/unwrap via ETCswap
4. **The Canonical WETC Initiative** - Contract addresses

---

## v2.0 Vision: Animated Explainer (Planned)

Transform wrappedether.org into a modern, animated explainer page that makes WETC understandable in 60 seconds.

### Goals
- **Educational** - Clearly explain what WETC is and why it's necessary
- **Fast** - <3s load time, mobile-first
- **Beautiful** - Modern design matching ETC ecosystem aesthetic
- **Actionable** - Direct CTAs to wrap/unwrap interfaces

### Tech Stack (v2.0)
- **Next.js 16** - App Router, SSG for speed
- **React 19** - UI components
- **TypeScript 5** - Type safety
- **Tailwind CSS 4** - Styling
- **Framer Motion 12** - Smooth animations
- **Vercel** - Deployment (free tier)

### Page Structure (v2.0)

**Single-page explainer with 6 sections:**

1. **Hero** - "What is WETC?" with animated ETC → WETC wrap visual
2. **Why WETC Exists** - Timeline showing ETC (2015) predating ERC-20 (2017)
3. **How It Works** - Visual diagram of 1:1 wrapping mechanism
4. **Where to Wrap** - CTAs to ETCswap and Classic OS
5. **Canonical Contracts** - Official addresses with verification links
6. **For Developers** - Integration guide, contract ABIs

### Design Inspiration
- **aura.build** - Protocol-grade aesthetic with subtle motion
- **ethereum.org** - Educational clarity
- **uniswap.org** - Clean product focus

### Animation Examples
- ETC coin morphing into WETC token (Hero)
- Timeline scroll animation (Why section)
- Wrap/unwrap flow diagram with interactive states
- Number counter for total WETC supply (live data)

---

## Development Roadmap

### Phase 1: Foundation (Current)
- ✅ Static HTML site live at www.wrappedether.org
- ✅ Domain configured via CNAME
- ✅ Basic content and contract addresses
- ⏳ Modernization planning

### Phase 2: Next.js Migration (Planned)
- [ ] Initialize Next.js 16 project
- [ ] Set up TypeScript, Tailwind 4, Framer Motion
- [ ] Create design system (colors, typography, spacing)
- [ ] Build component library
- [ ] Configure Vercel deployment

### Phase 3: Content & Animations (Planned)
- [ ] Hero section with wrap animation
- [ ] Timeline visual (ETC 2015 → ERC-20 2017)
- [ ] Interactive wrap/unwrap diagram
- [ ] Contract address cards with copy-to-clipboard
- [ ] Developer integration guide

### Phase 4: Integration & Polish (Planned)
- [ ] Live WETC supply stats (from contract)
- [ ] Direct link to ETCswap wrap interface
- [ ] Classic OS Markets module integration
- [ ] Mobile optimization
- [ ] SEO optimization
- [ ] Analytics integration

---

## For Contributors

### Quick Start (Current Site)
```bash
# Clone repository
git clone https://github.com/wrappedether/wrappedether.github.io.git
cd wrappedether.github.io

# Serve locally
python -m http.server 8000
# OR
npx serve .

# Visit http://localhost:8000
```

### v2.0 Development (When Ready)
```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Deploy to Vercel
vercel --prod
```

---

## Positioning

**Type:** Public good / Educational infrastructure

**Purpose:**
- Educate users about WETC and why wrapped tokens are necessary
- Explain ETC's historical context (predates ERC-20)
- Guide users to wrapping/unwrapping interfaces
- Establish canonical contract addresses
- Support ETC DeFi ecosystem growth

**Not for Profit:**
This is a public good project. No revenue generation. Critical infrastructure for:
- ETCswap (DEX requiring WETC pairs)
- ClassicUSD (stablecoin requiring WETC)
- All ETC DeFi protocols using ERC-20 tokens

**Success Metrics:**
- Users understand what WETC is within 60 seconds
- Clear path to wrap/unwrap interfaces
- Reduced confusion about "Why do I need WETC?"
- Increased WETC adoption for DeFi

---

## How to Wrap/Unwrap WETC

**Via ETCswap:**
- V2: https://v2.etcswap.org
- V3: https://v3.etcswap.org
- IPFS Gateway: https://ipfs.io/ipfs/bafybeihky5oo4jkowxpkfsywfj6axnxwqo5gkxo5ivztu3xdr6g4nzczgy

**Via Classic OS:**
- Markets module: app.classicos.org

**How it works:**
1. Connect your wallet (MetaMask, hardware wallet)
2. Navigate to wrap interface
3. Enter amount of ETC to wrap
4. Confirm transaction
5. Receive WETC 1:1 (minus gas)

**To unwrap:**
1. Same interface, select "Unwrap"
2. Enter WETC amount
3. Receive ETC 1:1 (minus gas)

---

## Repository

**Current Site (v1.0):** https://github.com/wrappedether/wrappedether.github.io

**Canonical WETC Contract:** https://github.com/wrappedether/canonical-wetc

---

## Ecosystem Context

This site is part of the Ethereum Classic DeFi ecosystem:

```
EthereumClassic.com → ClassicOS.org → app.classicos.org
    ↓                      ↓                 ↓
wrappedether.org ←← Education layer for WETC
    ↓                      ↓
ETCswap ← DeFi protocols requiring WETC
```

**Why wrappedether.org matters:**
- **ETCswap** - Requires WETC for all ETC pairs (ETC → WETC → Token swaps)
- **ClassicUSD** - Stablecoin pairs use WETC
- **Classic OS Markets** - Portfolio tracking includes WETC
- **Olympia DAO** - Governance may use WETC
- **All DeFi** - Any protocol using ERC-20 tokens needs WETC to interact with ETC

**Without WETC:**
- No direct ETC ↔ ERC-20 token swaps
- No ETC liquidity pairs on DEXs
- Limited DeFi participation for ETC holders

**With WETC:**
- ✅ Swap ETC for any ERC-20 token
- ✅ Provide liquidity and earn fees
- ✅ Full DeFi ecosystem participation
- ✅ Non-custodial, trustless 1:1 backing

---

## License

Creative Commons Attribution-ShareAlike 3.0 Unported License

See: http://creativecommons.org/licenses/by-sa/3.0/

---

## Contact

**Maintainer:** Christopher Mercer (ETCswap founder)

**Contract Issues:** https://github.com/wrappedether/canonical-wetc/issues

**Website Issues:** https://github.com/wrappedether/wrappedether.github.io/issues

---

## For AI Coding Assistants

See [.claude/instructions.md](.claude/instructions.md) for development guidelines when working on v2.0 modernization.
