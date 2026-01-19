# wrappedether.org Agent Instructions

## Project Overview

**wrappedether.org** is a public good educational website explaining Wrapped Ether (WETC) on Ethereum Classic. This is **critical DeFi infrastructure**, not a for-profit product.

**Mission:** Make WETC understandable in 60 seconds and route users to ETCswap for wrapping and Classic OS for portfolio management.

**Design Inspiration:** [WETH.io](https://web.archive.org/web/20240320002559/https://weth.io/) - the gold standard for wrapped token education.

---

## Tech Stack (v0.2 - Next.js + React)

| Technology | Version | Purpose |
|------------|---------|---------|
| Next.js | 15+ | React framework with App Router |
| React | 19+ | Component-based UI |
| TypeScript | 5+ | Type safety |
| Tailwind CSS | 4+ | Utility-first styling |
| Framer Motion | 12+ | SVG and component animations |
| Vercel/GitHub Pages | - | Static export deployment |

### Why Next.js?

1. **Framer Motion integration** - Smooth, performant animations
2. **Component architecture** - Reusable sections, maintainable code
3. **Static export** - `next export` for free hosting on GitHub Pages/Vercel
4. **TypeScript** - Catch errors early, better DX
5. **Tailwind** - Rapid styling with design system

---

## Project Structure (v0.2)

```
/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with fonts, metadata
│   │   ├── page.tsx            # Main page (imports all sections)
│   │   └── globals.css         # Tailwind imports + custom CSS
│   ├── components/
│   │   ├── sections/
│   │   │   ├── Hero.tsx            # "WTF IS WETC?"
│   │   │   ├── WhyWetc.tsx         # "WHY YOU NEED WETC"
│   │   │   ├── ReadyToWrap.tsx     # "READY TO WRAP?"
│   │   │   ├── CanonicalContracts.tsx
│   │   │   ├── SecureYourWetc.tsx  # Trezor section
│   │   │   ├── BestPractices.tsx   # emit keyword
│   │   │   └── Ecosystem.tsx       # Partner grid
│   │   ├── animations/
│   │   │   ├── EtcCoin.tsx         # Animated ETC coin SVG
│   │   │   ├── WetcToken.tsx       # Animated WETC token SVG
│   │   │   ├── Erc20Jar.tsx        # Jar metaphor animation
│   │   │   ├── WrapMachine.tsx     # Conveyor/wrapping animation
│   │   │   └── SmartContract.tsx   # Contract vacuum animation
│   │   ├── ui/
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── SectionDivider.tsx
│   │   │   └── ContractTable.tsx
│   │   └── Footer.tsx
│   ├── lib/
│   │   ├── constants.ts        # Contract addresses, links
│   │   └── animations.ts       # Framer Motion variants
│   └── styles/
│       └── theme.ts            # ETC color tokens
├── public/
│   ├── images/
│   │   ├── etc-logo-*.png
│   │   └── favicon.ico
│   └── fonts/                  # Self-hosted Inter, JetBrains Mono
├── research/
│   └── weth-io/                # WETH.io reference materials
├── docs/
│   ├── V0.2-PLAN.md           # This version's development plan
│   ├── ANIMATION-GUIDE.md     # How to create WETC animations
│   └── WETH-IO-ANALYSIS.md    # Visual design analysis
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
├── package.json
└── README.md
```

---

## Quick Start (v0.2)

```bash
# Install dependencies
npm install

# Development server
npm run dev
# Visit http://localhost:3000

# Build static export
npm run build

# Preview production build
npm run start
```

---

## Animation Strategy

### Approach: SVG + Framer Motion

We create custom WETC animations using:
1. **Claude-generated SVG code** - Base assets (coins, jars, machines)
2. **Framer Motion** - Animate SVG paths, transforms, opacity
3. **React components** - Encapsulate each animation

### Animation Components Needed

| Animation | WETH.io Reference | WETC Version |
|-----------|-------------------|--------------|
| Blockchain + dApp boxes | WETH_01.gif | `<BlockchainDapp />` - ETC green theme |
| ERC-20 jar metaphor | WETH_02.gif | `<Erc20Jar />` - Token can't enter jar |
| Smart contract vacuum | WETH_03.gif | `<SmartContract />` - Shows wrap process |
| Wrap/unwrap conveyor | WETH_04.gif | `<WrapMachine />` - ETC → WETC flow |
| Evolution/future | WETH_05.gif | `<Evolution />` - Blockchain box opening |

### Framer Motion Example

```tsx
// components/animations/EtcCoin.tsx
import { motion } from 'framer-motion';

export function EtcCoin({ animate = true }) {
  return (
    <motion.svg
      viewBox="0 0 100 100"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      {/* ETC diamond shape */}
      <motion.path
        d="M50 10 L90 50 L50 90 L10 50 Z"
        fill="#3AB83A"
        animate={animate ? {
          rotateY: [0, 360],
        } : {}}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'linear'
        }}
      />
    </motion.svg>
  );
}
```

---

## Design System (Tailwind)

### Colors

```ts
// tailwind.config.ts
const colors = {
  etc: {
    green: '#3AB83A',
    'green-light': '#33ff99',
    'green-dark': '#2d8f2d',
    black: '#0a0a0a',
    dark: '#141414',
    gray: '#1a1a1a',
    'gray-light': '#2a2a2a',
  },
  // ... rest of palette
};
```

### Typography

```ts
// Inter for body, JetBrains Mono for code
fontFamily: {
  sans: ['Inter', 'system-ui', 'sans-serif'],
  mono: ['JetBrains Mono', 'monospace'],
}
```

---

## Core Principles

### 1. This Is a Public Good
- **Not for profit** - No revenue generation
- **Critical infrastructure** - Required for all ETC DeFi
- **Educational focus** - Explain WETC clearly and quickly

### 2. WETH.io Inspiration
- Same section structure (WTF → Why → Ready → Contracts)
- Same visual metaphors (jar, conveyor, vacuum)
- Adapted color scheme (ETC green instead of pink)
- **Custom animations** - Not using WETH.io GIFs, creating our own

### 3. Product Funnels
Direct users to:
- **ETCswap** (https://etcswap.org) - Wrap/unwrap ETC, trade
- **Classic OS** (https://app.classicos.org) - Portfolio management

### 4. Performance
- Static export (no server required)
- Lazy load animations below fold
- Target <100KB JS bundle
- 60fps animations

---

## Animation Generation Workflow

### Option A: Claude SVG Generation (Recommended)

1. Describe the animation concept to Claude
2. Claude generates SVG code with proper structure
3. Add Framer Motion animations in React
4. Iterate on timing and easing

**Prompt template:**
```
Create an SVG for [concept] in isometric 3D style:
- Color palette: ETC green (#3AB83A), black (#0a0a0a), white
- Style: Clean line art with diagonal hatching (like WETH.io)
- Size: 400x400 viewBox
- Structure: Group elements for animation (<g id="coin">, etc.)
```

### Option B: External Tools

| Tool | Use Case | Workflow |
|------|----------|----------|
| Figma | Design SVG assets | Export → Animate in React |
| Rive | Complex animations | Embed Rive player |
| Lottie | After Effects export | Use lottie-react |

---

## Key Links

### Product Funnels
- ETCswap: https://etcswap.org
- Classic OS: https://app.classicos.org

### Contract Addresses
```ts
// lib/constants.ts
export const WETC_CONTRACT = '0x1953cab0E5bFa6D4a9BaD6E05fD46C1CC6527a5a';
export const CHAINS = {
  mainnet: { id: 61, name: 'Ethereum Classic' },
  mordor: { id: 63, name: 'Mordor Testnet' },
};
```

### Block Explorers
- Mainnet: https://etc.blockscout.com/address/0x1953cab0E5bFa6D4a9BaD6E05fD46C1CC6527a5a
- Mordor: https://etc-mordor.blockscout.com/address/0x1953cab0E5bFa6D4a9BaD6E05fD46C1CC6527a5a

---

## What NOT to Do

### Don't Add
- Wallet connection (route to ETCswap)
- Wrapping interface (route to ETCswap)
- Heavy analytics (privacy-focused)
- Server-side features (keep it static)

### Do Instead
- Keep it educational and fast
- Route users to ETCswap/Classic OS for actions
- Create custom ETC-branded animations
- Maintain WETH.io attribution

---

## Development Commands

```bash
# Development
npm run dev          # Start dev server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript checks

# Production
npm run build        # Build static export
npm run start        # Preview production build

# Animation Development
npm run storybook    # (optional) Preview components in isolation
```

---

## Deployment

### GitHub Pages
```yaml
# .github/workflows/deploy.yml
- run: npm run build
- uses: peaceiris/actions-gh-pages@v3
  with:
    github_token: ${{ secrets.GITHUB_TOKEN }}
    publish_dir: ./out
```

### Vercel (Alternative)
- Connect repo to Vercel
- Auto-deploys on push to main
- Custom domain: www.wrappedether.org

---

## Success Metrics

### Educational
- User understands WETC within 60 seconds
- Clear mental model: ETC → WETC → DeFi
- Knows where to wrap (ETCswap)

### Technical
- Lighthouse score >90
- Bundle size <100KB gzipped
- Animations at 60fps
- Page load <3s on 4G

---

## Ready to Work?

1. Check current version in `package.json`
2. Run `npm install && npm run dev`
3. Review animation components in `src/components/animations/`
4. Follow WETH.io visual style but use ETC branding
5. Test on mobile and desktop

**Remember:** This is a public good. Fast, beautiful, educational. Custom animations, not borrowed GIFs.
