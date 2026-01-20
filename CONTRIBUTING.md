# Contributing to wrappedether.org

Welcome! This guide will help you contribute to wrappedether.org, a public good educational website for WETC on Ethereum Classic.

---

## What Is This Project?

**wrappedether.org** is a public good (not for profit) that educates users about Wrapped Ether (WETC) on Ethereum Classic.

**Mission:** Make WETC understandable in 60 seconds and route users to wrap/unwrap interfaces.

**Why WETC matters:** ETC predates the ERC-20 standard. DeFi protocols require ERC-20 tokens. WETC wraps ETC into ERC-20 format, enabling DEX trading, liquidity provision, and DeFi participation.

---

## Quick Start

### Current Site (v1.0 - Static HTML)

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

### v2.0 Development (When Migrated to Next.js)

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

## Project Principles

### 1. Public Good First
- **No monetization** - No ads, no affiliate links, no revenue
- **Educational focus** - Clear explanations over marketing
- **Free and fast** - <3s load time, mobile-first
- **Critical infrastructure** - Required for ETC DeFi (ETCswap, ClassicUSD, etc.)

### 2. Educational Clarity
- Users understand WETC within 60 seconds
- Visual explanations over text walls
- Simple language (avoid jargon)
- Direct CTAs to wrap interfaces (ETCswap, Classic OS)

### 3. Fast and Focused
- Single-page explainer (no complex navigation)
- Minimal JavaScript
- Static site generation (SSG)
- Mobile-first responsive design

---

## Development Workflow

### 1. Before You Start

Read these docs:
- [README.md](README.md) - Project overview
- [.claude/instructions.md](.claude/instructions.md) - Technical guidelines (for AI assistants, but useful for humans too)

### 2. Making Changes

1. **Fork the repository**
   ```bash
   # Fork on GitHub, then clone your fork
   git clone https://github.com/YOUR_USERNAME/wrappedether.github.io.git
   cd wrappedether.github.io
   ```

2. **Create a branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make focused changes**
   - One logical change per commit
   - Keep diffs small and reviewable
   - Test on mobile and desktop

4. **Test your changes**
   - View on mobile (Chrome DevTools)
   - Test all CTAs (links work)
   - Verify contract addresses (copy correctly)
   - Check animations (smooth 60fps)

5. **Validate (for v2.0)**
   ```bash
   npm run lint    # Must pass
   npm run build   # Must succeed
   ```

6. **Commit with clear message**
   ```bash
   git commit -m "scope: brief description"
   ```

   Examples:
   - `hero: add ETC → WETC morph animation`
   - `timeline: implement scroll-triggered timeline`
   - `contracts: update canonical addresses`
   - `docs: update README with v2.0 roadmap`

### 3. Submitting Changes

1. Push your branch
   ```bash
   git push origin feature/your-feature-name
   ```

2. Create a pull request with:
   - Clear description of what changed
   - Screenshots (if visual changes)
   - Mobile testing confirmation

---

## Project Structure

### Current (v1.0 - Static HTML)

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

### v2.0 Target (Next.js)

```
/
├── app/
│   ├── page.tsx              # Main page
│   ├── layout.tsx            # Root layout
│   ├── components/           # React components
│   │   ├── Hero.tsx          # Hero section
│   │   ├── Timeline.tsx      # Timeline section
│   │   ├── HowItWorks.tsx    # Diagram section
│   │   ├── WhereToWrap.tsx   # CTA section
│   │   ├── Contracts.tsx     # Contract addresses
│   │   └── ForDevelopers.tsx # Developer section
│   └── data/
│       └── contracts.ts      # Contract addresses data
├── public/
│   ├── images/               # Static images
│   └── og-image.png          # Open Graph image
├── .claude/
│   └── instructions.md       # AI agent instructions
├── README.md                 # Project docs
├── CONTRIBUTING.md           # This file
└── package.json              # Dependencies
```

---

## Tech Stack

### Current (v1.0)
- Static HTML with Jekyll
- Minimal theme
- GitHub Pages deployment

### v2.0 Target
- **Next.js 16** - App Router, SSG
- **React 19** - UI components
- **TypeScript 5** - Type safety
- **Tailwind CSS 4** - Styling
- **Framer Motion 12** - Animations
- **Vercel** - Deployment (free tier)

---

## Page Structure (v2.0 Vision)

### Single-Page Explainer with 6 Sections

1. **Hero - "What is WETC?"**
   - Animated ETC → WETC morph visual
   - Tagline: "The ERC-20 version of ETC for DeFi"
   - CTA: Scroll to learn why

2. **Why WETC Exists**
   - Timeline: ETC (2015) → ERC-20 (2017) → DeFi (2020+)
   - Problem: ETC can't interact with ERC-20 protocols
   - Solution: WETC wraps ETC into ERC-20 format

3. **How It Works**
   - Visual diagram: ETC ↔ Smart Contract ↔ WETC
   - 1:1 backing, non-custodial, trustless

4. **Where to Wrap**
   - Primary CTA: ETCswap (https://etcswap.org)
   - Secondary CTA: Classic OS (app.classicos.org)
   - Step-by-step guide

5. **Canonical Contracts**
   - Contract addresses with copy-to-clipboard
   - Blockscout verification links
   - Warning: "Only use these official contracts"

6. **For Developers**
   - Contract repository
   - ABI download
   - Integration examples

---

## Design Guidelines

### Colors (ETC Ecosystem Palette)

```css
/* Primary colors */
--etc-green: #2ecc71;      /* ETC brand green */
--wetc-blue: #3b82f6;      /* WETC accent (wrapped = blue) */

/* Neutral colors */
--dark: #0f172a;           /* Dark backgrounds */
--light: #f8fafc;          /* Light backgrounds */
--gray-300: #cbd5e1;       /* Text on dark */
--gray-700: #334155;       /* Text on light */
```

### Typography

```css
/* Font stack */
font-family: 'Inter', system-ui, sans-serif;
font-family: 'JetBrains Mono', monospace; /* For code/addresses */

/* Sizes */
text-4xl: Hero headlines
text-2xl: Section headlines
text-lg: Body text
text-sm: Captions, labels
```

### Spacing

- **Between sections:** 120px (mobile: 80px)
- **Content width:** max-w-6xl (1152px)
- **Horizontal padding:** px-6 (24px)

---

## Content Guidelines

### Key Messages

**What is WETC?**
"Wrapped Ether (WETC) is the ERC-20 version of Ethereum Classic's native ETC. It enables ETC to be used in DeFi protocols that require the ERC-20 token standard."

**Why WETC Exists?**
"Ethereum Classic launched in 2015, before the ERC-20 standard was created in 2017. Modern DeFi protocols require ERC-20 tokens to interact. WETC wraps ETC into ERC-20 format, enabling full DeFi participation."

**How It Works?**
"1:1 wrapping via smart contract. Deposit ETC, receive WETC. Deposit WETC, receive ETC. Non-custodial and trustless. You always control your keys."

### Writing Style

- **Simple language** - Avoid jargon, explain terms
- **Active voice** - "Deposit ETC" not "ETC is deposited"
- **Short sentences** - One concept per sentence
- **Visual hierarchy** - Use headings, bullets, whitespace

---

## Common Tasks

### Update Contract Addresses

1. Verify new addresses on Blockscout
2. Update in `index.html` (v1.0) or `app/data/contracts.ts` (v2.0)
3. Update in README.md
4. Test copy-to-clipboard functionality
5. Commit: `contracts: update canonical addresses`

### Add New Section

1. Create component in `app/components/` (v2.0)
2. Import in `app/page.tsx`
3. Add animations with Framer Motion
4. Test on mobile and desktop
5. Validate (lint, build)
6. Commit with conventional format

### Update Design

1. Modify Tailwind config or component styles
2. Ensure mobile responsiveness
3. Test animations (smooth 60fps)
4. Check accessibility (contrast ratios, keyboard navigation)
5. Validate and commit

---

## What NOT to Add

### ❌ Don't Add These

1. **Wallet Connection** - This site educates, doesn't wrap (route to ETCswap)
2. **Wrapping Interface** - Route to ETCswap/Classic OS, don't rebuild
3. **User Accounts** - No login, no profiles (public good)
4. **Analytics Beyond Basics** - No tracking pixels, minimal GA4
5. **Monetization** - No ads, no affiliate links, no revenue
6. **Complex Navigation** - Single-page explainer, no multi-page structure
7. **Heavy Dependencies** - Keep bundle small (<100kb JS)

### ✅ Do This Instead

1. **Educate** - Clear, visual explanations
2. **Route** - Direct CTAs to ETCswap and Classic OS
3. **Simplify** - One concept per section
4. **Animate** - Use motion to enhance understanding
5. **Optimize** - Fast load times, mobile-first

---

## Code Review

Reviewers will check for:
- ✅ Educational clarity (WETC explained simply)
- ✅ Fast load time (<3s on 4G)
- ✅ Mobile-responsive
- ✅ Correct contract addresses
- ✅ Working CTAs (links to ETCswap, Classic OS)
- ✅ Smooth animations (60fps, no jank)
- ✅ Small, focused diffs

---

## Deployment

### Current (v1.0 - GitHub Pages)

Automatically deployed on push to `main` branch.

**Domain:** www.wrappedether.org (via CNAME)

### v2.0 (Vercel)

When Next.js migration is complete:
1. Connect repository to Vercel
2. Configure custom domain (www.wrappedether.org)
3. Deploy on push to `main` branch
4. Automatic SSL certificate

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
- Use Next.js Image component
- Static Site Generation (SSG)
- Minimal client-side JavaScript
- Lazy load animations
- Preload critical fonts

---

## Getting Help

**Documentation:**
- [README.md](README.md) - Project overview
- [.claude/instructions.md](.claude/instructions.md) - Technical details

**External Resources:**
- ETCswap: https://etcswap.org
- Classic OS: https://app.classicos.org
- WETC Contract: https://github.com/wrappedether/canonical-wetc

**Issues:**
- Contract issues: https://github.com/wrappedether/canonical-wetc/issues
- Website issues: https://github.com/wrappedether/wrappedether.github.io/issues

---

## Thank You!

Your contributions help make WETC more understandable and accessible, supporting the entire ETC DeFi ecosystem.

**Remember:** This is a public good. Fast, beautiful, educational. No profit, all impact.

Make WETC understandable in 60 seconds. Route users to wrap interfaces. Support ETC DeFi growth. 🚀
