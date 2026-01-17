# wrappedether.org v2.0 - Phased Development Plan

**Date:** 2026-01-16
**Project:** Modernize wrappedether.org into animated educational explainer
**Budget:** $6,000 (30 hours @ $200/hr)
**Timeline:** 5 weeks (6 hours/week)

---

## Deployment Strategy

### Current Architecture (v1.0)

- **Repository:** `wrappedether.github.io` (GitHub special naming for user pages)
- **Hosting:** GitHub Pages (automatic deployment from `main` branch)
- **Domain:** www.wrappedether.org (via CNAME file)
- **Tech:** Static HTML + Jekyll + Minimal theme
- **Cost:** Free

### GitHub Pages Limitation for v2.0

**Problem:** GitHub Pages only supports static sites and Jekyll. Next.js requires Node.js runtime for:
- Server-Side Generation (SSG) build process
- Dynamic imports and code splitting
- Image optimization
- API routes (if needed)

**Solution:** Migrate to Vercel (Next.js native platform)

### v2.0 Architecture

- **Repository:** Keep `wrappedether.github.io` name (no rename needed)
- **Hosting:** Vercel (free tier, automatic deployments)
- **Domain:** www.wrappedether.org (DNS update to Vercel)
- **Tech:** Next.js 16 + React 19 + TypeScript 5 + Tailwind 4 + Framer Motion 12
- **Cost:** Free (Vercel Hobby tier supports custom domains)

### Migration Path

1. **Keep v1.0 live** - Current site remains at www.wrappedether.org
2. **Build v2.0 in parallel** - Develop in `next` branch
3. **Deploy to Vercel staging** - Test at `wrappedether.vercel.app`
4. **DNS cutover** - Point www.wrappedether.org to Vercel
5. **Archive v1.0** - Move v1.0 to `v1` branch for history

**No repository rename needed.** GitHub Pages will simply stop deploying once we remove the CNAME file and disable Pages in settings.

---

## Phase Breakdown

### Phase 1: Foundation & Design System
**Duration:** 1 week (6 hours)
**Cost:** $1,200
**Branch:** `phase-1-foundation`

#### Deliverables

1. **Next.js 16 Project Setup**
   - Initialize Next.js with App Router
   - Configure TypeScript 5
   - Set up Tailwind CSS 4
   - Install Framer Motion 12
   - Configure static export for SSG

2. **Design System Implementation**
   - Color tokens (ETC green, WETC white, neutrals)
   - Typography system (Inter, JetBrains Mono)
   - Spacing scale (Tailwind config)
   - Breakpoints (mobile-first)

3. **Core SVG Assets**
   - ETC coin (green diamond, animated)
   - WETC token (white diamond, animated)
   - Conveyor belt components
   - ERC-20 jar illustration
   - Smart contract vacuum

4. **Component Scaffolding**
   - `app/layout.tsx` - Root layout with fonts
   - `app/page.tsx` - Main page structure
   - `components/Hero.tsx` - Empty shell
   - `components/Timeline.tsx` - Empty shell
   - `components/HowItWorks.tsx` - Empty shell
   - `components/WhereToWrap.tsx` - Empty shell
   - `components/Contracts.tsx` - Empty shell
   - `components/ForDevelopers.tsx` - Empty shell

#### Success Criteria

- ✅ `npm run dev` starts development server
- ✅ `npm run build` produces static export
- ✅ Design tokens defined in `tailwind.config.ts`
- ✅ All component shells render without errors
- ✅ Page structure matches v2.0 vision (6 sections)

#### Time Breakdown

- Next.js setup and configuration: 1.5 hours
- Design system (Tailwind config, tokens): 1 hour
- SVG asset creation: 2 hours
- Component scaffolding: 1 hour
- Testing and validation: 0.5 hours

---

### Phase 2: Hero Section & Primary Animation
**Duration:** 1 week (6 hours)
**Cost:** $1,200
**Branch:** `phase-2-hero`
**Depends on:** Phase 1

#### Deliverables

1. **Hero Layout**
   - Full viewport height section
   - Centered content with animation
   - Tagline: "The ERC-20 version of ETC for DeFi"
   - Scroll indicator

2. **Conveyor Belt Animation (Primary)**
   - Based on weth.io WETH_04 analysis
   - Isometric 3D conveyor belt
   - ETC coin (green) enters from left
   - Wrapping machine in center (green + white accents)
   - WETC token (white) exits on right in glass container
   - Smooth 3-second loop
   - Toggle button: "Wrap" / "Unwrap" reverses flow

3. **Animation States**
   - Wrap mode: ETC → Machine → WETC (default)
   - Unwrap mode: WETC → Machine → ETC (reversed)
   - Smooth transitions between states (1s fade)
   - 60fps performance target

4. **Responsive Design**
   - Desktop: Full animation (1200px wide)
   - Tablet: Scaled animation (768px wide)
   - Mobile: Simplified animation (375px wide, vertical orientation)

#### Success Criteria

- ✅ Conveyor animation loops smoothly at 60fps
- ✅ Toggle button switches between wrap/unwrap states
- ✅ Animation file size <150KB total
- ✅ Works on mobile (tested Chrome DevTools)
- ✅ Passes Core Web Vitals (LCP <2.5s)

#### Time Breakdown

- Hero layout and structure: 1 hour
- Conveyor belt SVG components: 2 hours
- Framer Motion animation logic: 2 hours
- Toggle interaction and state management: 0.5 hours
- Mobile optimization: 0.5 hours

---

### Phase 3: Timeline & Educational Sections
**Duration:** 1 week (6 hours)
**Cost:** $1,200
**Branch:** `phase-3-education`
**Depends on:** Phase 2

#### Deliverables

1. **Why WETC Exists (Timeline Section)**
   - Timeline visualization: 2015 → 2017 → 2020+
   - **2015:** ETC launches (green diamond appears)
   - **2017:** ERC-20 standard created (jar appears)
   - **2020+:** DeFi boom (protocol icons appear)
   - Animation: ETC coin tries to enter jar, bounces off
   - Solution: WETC appears, enters jar smoothly
   - Scroll-triggered animation (IntersectionObserver)

2. **How It Works (Diagram Section)**
   - Visual diagram based on weth.io vacuum concept
   - Left: ETC coin
   - Center: Smart contract (ETCswap branding)
   - Right: WETC token
   - Arrows showing bi-directional flow
   - "1:1 backing, non-custodial, trustless" callouts
   - Hover states on diagram elements

3. **Content Writing**
   - Clear, jargon-free explanations
   - Short paragraphs (2-3 sentences max)
   - Active voice, simple language
   - Visual hierarchy (headings, bullets)

#### Success Criteria

- ✅ Timeline animation triggers on scroll
- ✅ Jar metaphor clearly shows problem (ETC can't enter DeFi)
- ✅ Diagram shows wrap/unwrap flow clearly
- ✅ Content understandable by non-technical users
- ✅ Section animations <100KB each

#### Time Breakdown

- Timeline layout and content: 1 hour
- Timeline animation (scroll-triggered): 2 hours
- How It Works diagram and animation: 2 hours
- Content writing and refinement: 0.5 hours
- Mobile optimization: 0.5 hours

---

### Phase 4: CTAs & Contract Information
**Duration:** 1 week (6 hours)
**Cost:** $1,200
**Branch:** `phase-4-ctas`
**Depends on:** Phase 3

#### Deliverables

1. **Where to Wrap (CTA Section)**
   - Primary CTA: ETCswap
     - Logo, link to https://etcswap.org
     - Description: "Wrap/unwrap on ETCswap DEX"
     - Step-by-step guide (Connect → Wrap → Confirm)
   - Secondary CTA: Classic OS
     - Logo, link to https://app.classicos.org
     - Description: "Portfolio tracking with WETC support"
   - Visual hierarchy (ETCswap larger, primary)

2. **Canonical Contracts Section**
   - Contract address cards
     - Mainnet (ETC, Chain ID 61)
     - Testnet (Mordor, Chain ID 63)
   - Copy-to-clipboard functionality
   - Blockscout verification links
   - Warning: "Only use these official contracts"
   - Visual treatment (monospace font, green accents)

3. **For Developers Section**
   - Contract repository link (GitHub)
   - ABI download button
   - Integration examples (wagmi v3 hooks)
   - Documentation link
   - Minimal, focused content

#### Success Criteria

- ✅ CTAs clearly direct to ETCswap and Classic OS
- ✅ Copy-to-clipboard works on all contract addresses
- ✅ Links verified (ETCswap, Classic OS, Blockscout, GitHub)
- ✅ Warning about unofficial contracts is prominent
- ✅ Mobile-responsive CTA cards

#### Time Breakdown

- Where to Wrap layout and CTAs: 1.5 hours
- Canonical Contracts section: 2 hours
- Copy-to-clipboard functionality: 1 hour
- For Developers section: 1 hour
- Link verification and testing: 0.5 hours

---

### Phase 5: Polish, Performance & Launch
**Duration:** 1 week (6 hours)
**Cost:** $1,200
**Branch:** `phase-5-launch`
**Depends on:** Phase 4

#### Deliverables

1. **Performance Optimization**
   - Image optimization (Next.js Image component)
   - Font preloading (Inter, JetBrains Mono)
   - Animation lazy loading (below fold)
   - Code splitting verification
   - Bundle size analysis (<100KB JS target)

2. **SEO & Metadata**
   - `metadata` object in `layout.tsx`
   - Title: "Wrapped Ether (WETC) - ERC-20 on Ethereum Classic"
   - Description: "Learn about WETC, the ERC-20 version of ETC for DeFi on Ethereum Classic"
   - Open Graph image (1200x630, conveyor animation preview)
   - Twitter Card metadata
   - Canonical URL (www.wrappedether.org)

3. **Accessibility**
   - ARIA labels on interactive elements
   - Keyboard navigation (tab, enter)
   - Focus states (visible outlines)
   - Color contrast verification (WCAG AA)
   - Alt text for all images/animations

4. **Analytics & Monitoring**
   - Minimal analytics (Vercel Analytics)
   - No tracking pixels, no external analytics
   - Privacy-focused approach

5. **Deployment & DNS**
   - Deploy to Vercel production
   - Configure custom domain (www.wrappedether.org)
   - SSL certificate (automatic via Vercel)
   - DNS cutover from GitHub Pages
   - Verify all links work
   - Test on real devices (mobile, tablet, desktop)

6. **Documentation Updates**
   - Update README.md with v2.0 deployment info
   - Archive v1.0 documentation
   - Update CONTRIBUTING.md with new tech stack
   - Add deployment guide for future updates

#### Success Criteria

- ✅ Core Web Vitals: LCP <2.5s, FID <100ms, CLS <0.1
- ✅ Lighthouse score >90 (Performance, Accessibility, SEO)
- ✅ Bundle size <100KB gzipped JavaScript
- ✅ All animations 60fps on mobile
- ✅ Site loads <3s on 4G connection
- ✅ DNS propagation complete (www.wrappedether.org → Vercel)
- ✅ All external links verified
- ✅ Tested on Chrome, Firefox, Safari (mobile + desktop)

#### Time Breakdown

- Performance optimization: 1.5 hours
- SEO and metadata: 1 hour
- Accessibility audit and fixes: 1 hour
- Deployment to Vercel: 0.5 hours
- DNS configuration and testing: 1 hour
- Documentation updates: 1 hour

---

## Budget Summary

| Phase | Duration | Cost | Key Deliverable |
|-------|----------|------|-----------------|
| Phase 1: Foundation | 1 week (6h) | $1,200 | Next.js setup, design system, SVG assets |
| Phase 2: Hero Animation | 1 week (6h) | $1,200 | Conveyor belt animation (ETC → WETC) |
| Phase 3: Education | 1 week (6h) | $1,200 | Timeline + How It Works sections |
| Phase 4: CTAs & Contracts | 1 week (6h) | $1,200 | ETCswap/Classic OS CTAs, contract addresses |
| Phase 5: Launch | 1 week (6h) | $1,200 | Performance, SEO, Vercel deployment |
| **Total** | **5 weeks (30h)** | **$6,000** | **Live v2.0 at www.wrappedether.org** |

---

## Risk Mitigation

### Risk: DNS Cutover Downtime
**Mitigation:**
- Test v2.0 thoroughly on staging (wrappedether.vercel.app)
- Lower DNS TTL to 300s (5 minutes) before cutover
- Perform cutover during low-traffic period
- Keep v1.0 accessible via GitHub Pages URL as fallback

### Risk: Animation Performance on Mobile
**Mitigation:**
- Use CSS transforms (GPU-accelerated)
- Lazy load animations below fold
- Provide static fallback for low-end devices
- Test on real devices (iPhone SE, Android mid-range)

### Risk: Bundle Size Creep
**Mitigation:**
- Monitor bundle size in CI (next-bundle-analyzer)
- Lazy load Framer Motion components
- Use Next.js dynamic imports
- Target <100KB gzipped JS

### Risk: Vercel Free Tier Limits
**Mitigation:**
- Static site (no serverless functions) = minimal bandwidth
- Vercel free tier: 100GB bandwidth/month (sufficient for public good site)
- No expected traffic spikes (educational content, not viral)
- Monitor Vercel analytics dashboard

---

## Testing Checklist

### Before Each Phase Merge

- [ ] `npm run lint` passes (no warnings)
- [ ] `npm run build` succeeds (static export)
- [ ] Visual regression test (compare screenshots)
- [ ] Mobile responsive (Chrome DevTools)
- [ ] Accessibility scan (Lighthouse)

### Before Launch (Phase 5)

- [ ] Full Lighthouse audit (all categories >90)
- [ ] Test on real devices (iPhone, Android, tablet)
- [ ] Test on multiple browsers (Chrome, Firefox, Safari, Edge)
- [ ] All external links work (ETCswap, Classic OS, Blockscout, GitHub)
- [ ] Contract addresses verified on Blockscout
- [ ] Copy-to-clipboard works on all platforms
- [ ] DNS propagation verified (nslookup, dig)
- [ ] SSL certificate active (https://www.wrappedether.org)
- [ ] Analytics tracking (Vercel Analytics showing data)

---

## Post-Launch Maintenance

### Week 1 After Launch
- Monitor Vercel Analytics for traffic patterns
- Check for errors in Vercel logs
- Gather user feedback (Twitter, Discord)
- Fix any critical bugs

### Month 1 After Launch
- Review Core Web Vitals in production
- Optimize any slow-loading sections
- Update content based on user feedback
- Add any requested contract addresses (if new deployments)

### Ongoing
- Update Next.js, React, dependencies quarterly
- Monitor for security vulnerabilities (Dependabot)
- Keep contract addresses current
- Update ETCswap/Classic OS links if needed

---

## Success Metrics (Post-Launch)

### Performance
- Core Web Vitals: Green (LCP <2.5s, FID <100ms, CLS <0.1)
- Page load time: <3s on 4G
- Lighthouse score: >90 across all categories

### Education
- Users understand "What is WETC?" within 60 seconds
- Clear path to wrap/unwrap interfaces (ETCswap, Classic OS)
- Reduced support questions about "Why WETC?"

### Adoption
- Increased WETC wrapping volume (trackable via contract events)
- More users clicking through to ETCswap
- Positive feedback from ETC community

---

## Next Steps

1. **Review this plan** - Confirm phased approach and budget
2. **Initialize Phase 1** - Create `phase-1-foundation` branch
3. **Set up Vercel account** - Connect wrappedether.github.io repository
4. **Begin development** - Start with Next.js setup and design system
5. **Commit to wrappedether repo** - As requested

---

**Ready to proceed?** This plan delivers a modern, animated educational site that makes WETC understandable in 60 seconds while routing users to ETCswap and Classic OS for actual wrapping.

The GitHub Pages → Vercel migration is straightforward and doesn't require renaming the repository. We'll keep v1.0 live while building v2.0, then perform a clean DNS cutover when ready.

**Total investment: $6,000 for a world-class public good that supports the entire ETC DeFi ecosystem.**
