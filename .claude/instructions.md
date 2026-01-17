# wrappedether.org Agent Instructions

## Project Overview

**wrappedether.org** is a public good educational website explaining Wrapped Ether (WETC) on Ethereum Classic. This is **critical DeFi infrastructure**, not a for-profit product.

**Mission:** Make WETC understandable in 60 seconds and route users to wrap/unwrap interfaces.

---

## Tech Stack

### Current (v1.0 - Static HTML)
- Static HTML with Jekyll
- Minimal theme
- GitHub Pages deployment
- Domain: www.wrappedether.org

### Target (v2.0 - Animated Explainer)
| Technology | Version | Purpose |
|------------|---------|---------|
| Next.js | 16.x | App Router, SSG for speed |
| React | 19.x | UI components |
| TypeScript | 5.x | Type safety |
| Tailwind CSS | 4.x | Styling |
| Framer Motion | 12.x | Smooth animations |
| Vercel | Latest | Deployment (free tier) |

---

## Quick Start

### Current Site (v1.0)
```bash
# Serve locally
python -m http.server 8000
# OR
npx serve .

# Visit http://localhost:8000
```

### v2.0 Development (When Initialized)
```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Validate before committing
npm run lint
npm run build

# Deploy to Vercel
vercel --prod
```

---

## Core Principles

### 1. This Is a Public Good
- **Not for profit** - No revenue generation, no monetization
- **Critical infrastructure** - Required for all ETC DeFi (ETCswap, ClassicUSD, etc.)
- **Educational focus** - Explain WETC clearly and quickly
- **Free and fast** - <3s load time, mobile-first

### 2. Educational Clarity
- Users must understand what WETC is within 60 seconds
- Explain WHY (ETC predates ERC-20, DeFi needs standard interfaces)
- Show HOW (1:1 wrapping, non-custodial, trustless)
- Direct to WHERE (ETCswap, Classic OS)

### 3. Visual Over Text
- Animated ETC → WETC wrap visual (Hero)
- Timeline showing ETC (2015) vs ERC-20 (2017)
- Interactive wrap/unwrap flow diagram
- Live WETC supply stats (from contract)

### 4. Fast and Focused
- Single-page explainer (no navigation complexity)
- Static site generation (SSG) for instant loads
- Minimal JavaScript (only for animations)
- Mobile-first responsive design

---

## Page Structure (v2.0 Target)

### Single-Page Explainer with 6 Sections

**1. Hero - "What is WETC?"**
- Animated visual: ETC coin → WETC token (morph animation)
- Tagline: "The ERC-20 version of ETC for DeFi"
- CTA: "Learn Why" (scroll to next section)

**2. Why WETC Exists**
- Timeline scroll animation:
  - 2015: Ethereum Classic launches
  - 2017: ERC-20 standard created
  - 2020+: DeFi requires ERC-20 tokens
- Problem: ETC can't interact with ERC-20 DeFi protocols
- Solution: WETC wraps ETC into ERC-20 format

**3. How It Works**
- Visual diagram with interactive states:
  - Deposit ETC → Smart Contract → Receive WETC (1:1)
  - Deposit WETC → Smart Contract → Receive ETC (1:1)
- Non-custodial (you control your keys)
- Trustless (smart contract enforces 1:1)

**4. Where to Wrap**
- Primary CTA: ETCswap (https://etcswap.org)
- Secondary CTA: Classic OS Markets (app.classicos.org)
- Step-by-step:
  1. Connect wallet (MetaMask, hardware wallet)
  2. Enter amount
  3. Confirm transaction
  4. Done (1:1 minus gas)

**5. Canonical Contracts**
- Contract address cards with:
  - Network (Mainnet/Testnet)
  - Chain ID
  - Contract address (copy-to-clipboard)
  - Verification link (Blockscout)
- Emphasize: "Only use these official contracts"

**6. For Developers**
- Contract repository link
- ABI download
- Integration examples (wagmi, viem)
- Support link (GitHub issues)

---

## Design System

### Colors (ETC Ecosystem Palette)

```typescript
// Tailwind config
colors: {
  etc: {
    green: '#2ecc71',      // Primary ETC green
    dark: '#0f172a',       // Dark backgrounds
    light: '#f8fafc',      // Light backgrounds
    gray: {
      100: '#f1f5f9',
      200: '#e2e8f0',
      300: '#cbd5e1',
      700: '#334155',
      900: '#0f172a'
    }
  },
  wetc: {
    blue: '#3b82f6',       // WETC accent (wrapped = blue)
    cyan: '#06b6d4'        // Secondary accent
  }
}
```

### Typography

```typescript
// Font stack
fontFamily: {
  sans: ['Inter', 'system-ui', 'sans-serif'],
  mono: ['JetBrains Mono', 'monospace']
}

// Sizes
text-4xl: Hero headlines
text-2xl: Section headlines
text-lg: Body text
text-sm: Captions, labels
```

### Spacing

```typescript
// Consistent spacing scale
space: {
  section: '120px',      // Between sections (mobile: 80px)
  container: 'max-w-6xl', // Content width
  padding: 'px-6',       // Horizontal padding
}
```

---

## Animation Guidelines

### Framer Motion Patterns

**1. Hero Animation (ETC → WETC Morph)**
```typescript
// Coin morph animation
<motion.div
  initial={{ scale: 1, rotate: 0, backgroundColor: '#2ecc71' }}
  animate={{ scale: 1.2, rotate: 180, backgroundColor: '#3b82f6' }}
  transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
>
  {/* ETC/WETC coin visual */}
</motion.div>
```

**2. Timeline Scroll Animation**
```typescript
// Appear on scroll
<motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: '-100px' }}
  transition={{ duration: 0.6 }}
>
  {/* Timeline item */}
</motion.div>
```

**3. Interactive Diagram**
```typescript
// Hover states for wrap/unwrap flow
<motion.div
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  transition={{ duration: 0.2 }}
>
  {/* Clickable diagram element */}
</motion.div>
```

**Performance:**
- Use `will-change: transform` sparingly
- Prefer `transform` and `opacity` (GPU-accelerated)
- Avoid animating `width`, `height`, `margin` (causes reflows)

---

## Component Patterns

### Hero Component

```typescript
// app/components/Hero.tsx
'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-etc-dark">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl font-bold text-white mb-6"
        >
          What is WETC?
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-2xl text-etc-gray-300 mb-12"
        >
          The ERC-20 version of ETC for DeFi
        </motion.p>

        {/* Animated ETC → WETC visual */}
        <WrapAnimation />

        <motion.a
          href="#why"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="inline-block mt-12 px-8 py-4 bg-etc-green rounded-lg"
        >
          Learn Why
        </motion.a>
      </div>
    </section>
  )
}
```

### Contract Address Card

```typescript
// app/components/ContractCard.tsx
'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

interface ContractCardProps {
  network: string
  chainId: number
  address: string
  explorerUrl: string
}

export default function ContractCard({ network, chainId, address, explorerUrl }: ContractCardProps) {
  const [copied, setCopied] = useState(false)

  const copyAddress = async () => {
    await navigator.clipboard.writeText(address)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="p-6 bg-etc-dark border border-etc-gray-700 rounded-lg"
    >
      <h3 className="text-xl font-bold text-white mb-2">{network}</h3>
      <p className="text-sm text-etc-gray-300 mb-4">Chain ID: {chainId}</p>

      <div className="flex items-center gap-2">
        <code className="flex-1 px-3 py-2 bg-etc-gray-900 rounded text-xs text-etc-cyan font-mono">
          {address}
        </code>
        <button
          onClick={copyAddress}
          className="px-4 py-2 bg-etc-green rounded hover:bg-etc-green/80 transition"
        >
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>

      <a
        href={explorerUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-4 text-sm text-etc-cyan hover:underline"
      >
        View on Blockscout →
      </a>
    </motion.div>
  )
}
```

---

## Key Messaging

### What is WETC? (Hero)
"Wrapped Ether (WETC) is the ERC-20 version of Ethereum Classic's native ETC. It enables ETC to be used in DeFi protocols that require the ERC-20 token standard."

### Why WETC Exists? (Timeline)
"Ethereum Classic launched in 2015, before the ERC-20 standard was created in 2017. Modern DeFi protocols require ERC-20 tokens to interact. WETC wraps ETC into ERC-20 format, enabling full DeFi participation."

### How It Works? (Diagram)
"1:1 wrapping via smart contract. Deposit ETC, receive WETC. Deposit WETC, receive ETC. Non-custodial and trustless. You always control your keys."

### Where to Wrap? (CTAs)
"Wrap and unwrap WETC on ETCswap (primary DEX) or Classic OS Markets module. Connect your wallet, enter amount, confirm transaction. Simple and secure."

### Canonical Contracts (Addresses)
"Only use these official WETC contracts. Mainnet (Chain 61): 0x1953cab0E5bFa6D4a9BaD6E05fD46C1CC6527a5a. Always verify on Blockscout before interacting."

---

## SEO & Metadata

### Page Title
```html
<title>WETC - Wrapped Ether for Ethereum Classic DeFi | wrappedether.org</title>
```

### Meta Description
```html
<meta name="description" content="Learn what WETC is and why it's required for DeFi on Ethereum Classic. Wrap ETC into ERC-20 format for DEX trading, liquidity provision, and DeFi protocols. Non-custodial and trustless." />
```

### Open Graph
```html
<meta property="og:title" content="WETC - Wrapped Ether for Ethereum Classic" />
<meta property="og:description" content="Wrap ETC into ERC-20 format for DeFi. Non-custodial, trustless, 1:1 backed." />
<meta property="og:image" content="/og-image.png" />
<meta property="og:url" content="https://www.wrappedether.org" />
```

### Keywords
- Wrapped Ether
- WETC
- Ethereum Classic
- ETC DeFi
- ERC-20 wrapping
- ETCswap
- Non-custodial wrapping

---

## Deployment

### Vercel Configuration

```json
// vercel.json
{
  "buildCommand": "npm run build",
  "outputDirectory": "out",
  "framework": "nextjs",
  "regions": ["iad1"]
}
```

### GitHub Pages Migration

**When v2.0 is ready:**
1. Update DNS CNAME to point to Vercel
2. Configure custom domain in Vercel
3. Ensure SSL certificate provisioned
4. Archive v1.0 HTML site in `/v1-archive` branch

---

## Performance Requirements

### Core Web Vitals (Target)
- **LCP (Largest Contentful Paint):** <2.5s
- **FID (First Input Delay):** <100ms
- **CLS (Cumulative Layout Shift):** <0.1

### Load Time
- **Target:** <3s on 4G connection
- **Critical:** Hero section renders in <1s

### Optimization
- Use Next.js Image component for all images
- SSG (Static Site Generation) for all pages
- Minimal client-side JavaScript
- Lazy load animations (only when in viewport)
- Preload critical fonts

---

## Validation Requirements

Before committing ANY code changes:

```bash
# Must pass ALL checks
npm run lint         # ESLint must pass
npm run build        # Build must succeed
npm run typecheck    # TypeScript must pass (if added)

# Manual checks
- Test on mobile (Chrome DevTools)
- Test animations (smooth 60fps)
- Test all CTAs (links work)
- Verify contract addresses (copy correctly)
```

---

## Commit Format

Use conventional commits with scope:

```bash
# Format
scope: brief description

# Examples
hero: add ETC → WETC morph animation
timeline: implement scroll-triggered timeline
contracts: add copy-to-clipboard for addresses
deploy: configure Vercel deployment
docs: update README with v2.0 roadmap
```

---

## Common Tasks

### Initialize Next.js v2.0 Project

```bash
cd /products/wrappedether

# Create Next.js app (when ready to migrate)
npx create-next-app@latest . --typescript --tailwind --app

# Install additional dependencies
npm install framer-motion
npm install -D @types/node

# Configure Tailwind with ETC colors (see Design System above)
```

### Add New Section

1. Create component in `app/components/`
2. Import in `app/page.tsx`
3. Add animations with Framer Motion
4. Test on mobile and desktop
5. Validate (lint, build, typecheck)
6. Commit with conventional format

### Update Contract Addresses

1. Edit `app/data/contracts.ts` (or hardcode in component)
2. Verify addresses on Blockscout
3. Update README.md canonical addresses
4. Test copy-to-clipboard functionality
5. Commit: `contracts: update canonical addresses`

---

## What NOT to Do

### ❌ Don't Add These

1. **Wallet Connection** - This site educates, doesn't wrap (route to ETCswap)
2. **Wrapping Interface** - Route to ETCswap/Classic OS, don't rebuild
3. **User Accounts** - No login, no profiles (public good)
4. **Analytics Beyond Basics** - No tracking pixels, minimal GA4
5. **Monetization** - No ads, no affiliate links, no revenue generation
6. **Complex Navigation** - Single-page explainer, no multi-page structure
7. **Heavy Dependencies** - Keep bundle small (<100kb JS)

### ✅ Do This Instead

1. **Educate** - Clear, visual explanations
2. **Route** - Direct CTAs to ETCswap and Classic OS
3. **Simplify** - One concept per section
4. **Animate** - Use motion to enhance understanding
5. **Optimize** - Fast load times, mobile-first

---

## Ecosystem Context

**wrappedether.org's role:**
```
EthereumClassic.com → Awareness (ETC ecosystem)
    ↓
wrappedether.org → Education (What is WETC? Why needed?)
    ↓
ETCswap / Classic OS → Action (Wrap/unwrap)
    ↓
DeFi Protocols → Usage (Trade, provide liquidity)
```

**Why this matters:**
- ETCswap requires WETC for all ETC pairs
- ClassicUSD (stablecoin) uses WETC pairs
- All ERC-20 DeFi on ETC needs WETC
- Without WETC: No ETC ↔ ERC-20 swaps
- With WETC: Full DeFi ecosystem access

**This site prevents:**
- User confusion ("Why do I need WETC?")
- Wrong contract usage (scam WETC tokens)
- DeFi abandonment (users don't understand wrapping)

**This site enables:**
- Informed WETC adoption
- Canonical contract awareness
- Smooth onboarding to ETC DeFi

---

## Success Metrics

### Educational (Qualitative)
- User understands WETC within 60 seconds
- Clear mental model: ETC → WETC → DeFi
- Knows where to wrap (ETCswap, Classic OS)

### Technical (Quantitative)
- <3s page load time (target: <2s)
- >90 Lighthouse performance score
- <100kb JavaScript bundle size
- 60fps animations (no jank)

### Adoption (Proxy Metrics)
- Time on page (target: 60-120s)
- Scroll depth (reaching "Where to Wrap" section)
- Click-through to ETCswap/Classic OS
- Reduced support questions ("What is WETC?")

---

## Repository

**Current Site (v1.0):** https://github.com/wrappedether/wrappedether.github.io

**Canonical WETC Contract:** https://github.com/wrappedether/canonical-wetc

**Future:** When v2.0 launches, this repository will contain Next.js app

---

## Questions?

**Read these docs:**
- [README.md](../README.md) - Project overview, v2.0 vision
- [CONTRIBUTING.md](../CONTRIBUTING.md) - Development workflow (when created)

**External resources:**
- ETCswap: https://etcswap.org
- Classic OS: https://app.classicos.org
- WETC Contract: https://github.com/wrappedether/canonical-wetc

**Issues:**
- Contract issues: https://github.com/wrappedether/canonical-wetc/issues
- Website issues: https://github.com/wrappedether/wrappedether.github.io/issues

---

## Ready to Build?

1. ✅ Read this entire file
2. ✅ Understand WETC's purpose (public good DeFi infrastructure)
3. ✅ Review v2.0 vision in README.md
4. ✅ Familiarize with design system (colors, typography, animations)
5. ✅ Initialize Next.js when ready (or work on planning first)

**Remember:** This is a public good. Fast, beautiful, educational. No profit, all impact.

Make WETC understandable in 60 seconds. Route users to wrap interfaces. Support ETC DeFi growth.

**Let's build.** 🚀
