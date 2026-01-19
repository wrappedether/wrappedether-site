# WETC Animation Generation Guide

**Purpose:** Create custom ETC-branded animations to replace WETH.io GIFs
**Approach:** Claude SVG generation + Framer Motion in React

---

## Animation Requirements

### 5 Core Animations Needed

| # | Name | WETH.io Ref | Concept | Section |
|---|------|-------------|---------|---------|
| 1 | BlockchainDapp | WETH_01.gif | Isometric boxes showing blockchain + dApps | Hero |
| 2 | Erc20Jar | WETH_02.gif | Jar metaphor - ETC can't enter, WETC can | Why WETC |
| 3 | SmartContract | WETH_03.gif | Vacuum showing contract facilitation | Why WETC |
| 4 | WrapMachine | WETH_04.gif | Conveyor showing ETC→WETC transformation | Ready to Wrap |
| 5 | Evolution | WETH_05.gif | Box opening, representing future | Best Practices |

---

## Style Guide

### Visual Style (Match WETH.io)

- **Perspective:** Isometric 3D (30-degree angle)
- **Line weight:** 2-3px strokes
- **Hatching:** Diagonal lines for shading (45-degree angle)
- **Corners:** Slightly rounded (2-4px radius)
- **Shadow:** Simple offset shadow (no blur)

### ETC Color Palette

```
Primary Green:    #3AB83A (ETC brand green)
Light Green:      #33ff99 (highlights, hover states)
Dark Green:       #2d8f2d (shadows on green elements)
Black:            #0a0a0a (background, shadows)
Dark Gray:        #1a1a1a (secondary elements)
White:            #ffffff (text, highlights)
Light Gray:       #b0b0b0 (secondary text, lines)
```

### Animation Timing

- **Duration:** 2-4 seconds per loop
- **Easing:** `easeInOut` for smooth motion
- **Delays:** Stagger elements by 0.1-0.2s
- **FPS target:** 60fps (use CSS transforms, not position)

---

## Claude SVG Generation Workflow

### Step 1: Analyze Reference

Study the WETH.io GIF frame by frame:
1. Identify key elements (boxes, coins, machines)
2. Note movement patterns (rotation, translation, scale)
3. Understand the metaphor being conveyed

### Step 2: Prompt Claude

Use this template:

```
Create an SVG for the "[Animation Name]" animation in isometric 3D style.

**Concept:** [Describe what the animation should show]

**Style requirements:**
- Isometric 3D perspective (30-degree angle)
- Color palette: ETC green (#3AB83A), black (#0a0a0a), white (#ffffff)
- Clean line art with 2-3px strokes
- Diagonal hatching for shading (45-degree lines)
- ViewBox: 400x400

**Elements needed:**
- [List each element that needs to be animated]
- Group each element with an id for animation: <g id="element-name">

**Animation intent:**
- [Describe how elements should move]
- [Note: Animation will be added via Framer Motion, just structure the SVG]

Output clean, well-structured SVG code.
```

### Step 3: Add Framer Motion

```tsx
import { motion } from 'framer-motion';

export function AnimationName() {
  return (
    <motion.svg viewBox="0 0 400 400" className="w-full h-auto">
      {/* Static elements */}
      <g id="background">
        {/* ... */}
      </g>

      {/* Animated elements */}
      <motion.g
        id="coin"
        animate={{ x: [0, 100, 100, 0], y: [0, 0, 50, 50] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      >
        {/* ... */}
      </motion.g>
    </motion.svg>
  );
}
```

---

## Animation Specifications

### 1. BlockchainDapp (Hero)

**Reference:** WETH_01.gif - Isometric blockchain box with dApp boxes on top

**Elements:**
- Large blockchain cube (ETC branded, green accents)
- Smaller dApp boxes stacking/appearing
- "ETHEREUM CLASSIC" text on main box
- "BLOCKCHAIN" text below

**Animation:**
- Main box: Subtle float/pulse
- dApp boxes: Fade in and stack, one by one
- Optional: Gentle rotation of entire scene

**SVG Structure:**
```xml
<svg viewBox="0 0 400 400">
  <g id="blockchain-cube">
    <g id="cube-faces"><!-- 3 visible faces --></g>
    <g id="cube-text"><!-- Labels --></g>
    <g id="cube-hatching"><!-- Diagonal lines --></g>
  </g>
  <g id="dapp-boxes">
    <g id="dapp-1"><!-- First dApp box --></g>
    <g id="dapp-2"><!-- Second dApp box --></g>
    <g id="dapp-3"><!-- Third dApp box --></g>
  </g>
</svg>
```

---

### 2. Erc20Jar (Why WETC - Part 1)

**Reference:** WETH_02.gif - Jar labeled "ERC-20", coin bouncing off

**Elements:**
- Glass jar with "ERC-20" label
- ETC coin (green diamond)
- WETC token (white/lighter variant)
- Bounce/rejection effect for ETC
- Smooth entry effect for WETC

**Animation:**
1. ETC coin approaches jar
2. ETC bounces off (rejected)
3. WETC token approaches
4. WETC enters jar smoothly
5. Loop

**SVG Structure:**
```xml
<svg viewBox="0 0 400 400">
  <g id="jar">
    <g id="jar-body"><!-- Glass effect --></g>
    <g id="jar-label"><!-- "ERC-20 COMPLIANT" --></g>
    <g id="jar-lid"><!-- Optional --></g>
  </g>
  <g id="etc-coin"><!-- Green diamond shape --></g>
  <g id="wetc-token"><!-- White/light diamond --></g>
  <g id="rejection-effect"><!-- X or bounce lines --></g>
  <g id="success-effect"><!-- Checkmark or glow --></g>
</svg>
```

---

### 3. SmartContract (Why WETC - Part 2)

**Reference:** WETH_03.gif - Vacuum/machine facilitating token swap

**Elements:**
- Central machine/contract box (ETCswap branded)
- Input funnel (left)
- Output funnel (right)
- ETC coin entering
- WETC token exiting
- Connection lines/arrows

**Animation:**
1. ETC coin moves toward input
2. Coin enters machine
3. Machine processes (glow, spin)
4. WETC exits from output
5. Loop with multiple coins

**SVG Structure:**
```xml
<svg viewBox="0 0 400 400">
  <g id="machine">
    <g id="machine-body"><!-- Central box --></g>
    <g id="machine-label"><!-- "SMART CONTRACT" --></g>
    <g id="input-funnel"><!-- Left side --></g>
    <g id="output-funnel"><!-- Right side --></g>
    <g id="processing-indicator"><!-- Gears/glow --></g>
  </g>
  <g id="etc-coins"><!-- Multiple for animation --></g>
  <g id="wetc-tokens"><!-- Multiple for animation --></g>
  <g id="flow-arrows"><!-- Direction indicators --></g>
</svg>
```

---

### 4. WrapMachine (Ready to Wrap)

**Reference:** WETH_04.gif - Conveyor belt with candy-machine style

**Elements:**
- Conveyor belt (isometric)
- Wrapping machine in center
- ETC coin on left
- WETC token (in container) on right
- Movement along belt

**Animation:**
1. ETC coin rides conveyor toward machine
2. Coin enters machine
3. Machine wraps (visual transformation)
4. WETC in glass container exits
5. Conveyor continues, loop

**SVG Structure:**
```xml
<svg viewBox="0 0 400 400">
  <g id="conveyor">
    <g id="belt"><!-- Moving belt segments --></g>
    <g id="belt-legs"><!-- Support structure --></g>
  </g>
  <g id="wrap-machine">
    <g id="machine-housing"><!-- Main body --></g>
    <g id="machine-opening"><!-- Entry/exit --></g>
    <g id="machine-mechanics"><!-- Gears, etc --></g>
  </g>
  <g id="etc-coin"><!-- Input --></g>
  <g id="wetc-container">
    <g id="glass-jar"><!-- Container --></g>
    <g id="wetc-token"><!-- Inside jar --></g>
  </g>
</svg>
```

---

### 5. Evolution (Best Practices)

**Reference:** WETH_05.gif - Box opening, representing evolution/future

**Elements:**
- Isometric box (ETC branded)
- Opening lid
- Light/glow emerging
- "ETHEREUM CLASSIC" text
- "BLOCKCHAIN" text

**Animation:**
1. Closed box (idle state)
2. Lid begins to open
3. Light emerges from inside
4. Lid fully open, light radiates
5. Lid closes, loop

**SVG Structure:**
```xml
<svg viewBox="0 0 400 400">
  <g id="box">
    <g id="box-body"><!-- Main cube --></g>
    <g id="box-text"><!-- Labels --></g>
    <g id="box-hatching"><!-- Shading --></g>
  </g>
  <g id="lid"><!-- Separate for rotation --></g>
  <g id="light-rays"><!-- Emerging glow --></g>
  <g id="particles"><!-- Optional sparkles --></g>
</svg>
```

---

## Framer Motion Patterns

### Basic Animation

```tsx
<motion.g
  animate={{ rotate: 360 }}
  transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
>
  {/* Element */}
</motion.g>
```

### Path Animation (Movement)

```tsx
<motion.g
  animate={{
    x: [0, 100, 100, 0],
    y: [0, 0, 50, 50],
  }}
  transition={{
    duration: 4,
    repeat: Infinity,
    ease: 'easeInOut',
    times: [0, 0.3, 0.6, 1],
  }}
>
  {/* Moving element */}
</motion.g>
```

### Fade In/Out

```tsx
<motion.g
  animate={{ opacity: [0, 1, 1, 0] }}
  transition={{
    duration: 3,
    repeat: Infinity,
    times: [0, 0.2, 0.8, 1],
  }}
>
  {/* Fading element */}
</motion.g>
```

### Staggered Children

```tsx
const container = {
  animate: {
    transition: { staggerChildren: 0.2 }
  }
};

const item = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 }
};

<motion.g variants={container} initial="initial" animate="animate">
  <motion.g variants={item}>{/* Child 1 */}</motion.g>
  <motion.g variants={item}>{/* Child 2 */}</motion.g>
  <motion.g variants={item}>{/* Child 3 */}</motion.g>
</motion.g>
```

### Scroll-Triggered

```tsx
<motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: '-100px' }}
  transition={{ duration: 0.6 }}
>
  <AnimationComponent />
</motion.div>
```

---

## Alternative Generation Tools

### If Claude SVG Doesn't Work

| Tool | Use Case | Notes |
|------|----------|-------|
| **Figma** | Design complex SVGs | Export → Clean up → Animate |
| **Rive** | Highly interactive | Has React runtime |
| **SVGator** | Quick prototypes | Limited free tier |
| **Lottie** | After Effects export | Need designer with AE |

### AI Video/GIF Tools (Not Recommended)

These lack the precise control needed for our style:
- Haiper AI
- Pika Labs
- RunwayML

**Stick with Claude SVG + Framer Motion for consistency.**

---

## Testing Animations

### Performance Checklist

- [ ] 60fps on desktop Chrome
- [ ] 60fps on mobile Safari
- [ ] No layout shifts (CLS = 0)
- [ ] Lazy loaded below fold
- [ ] Reduced motion respected (`prefers-reduced-motion`)

### Visual Checklist

- [ ] Matches ETC color palette
- [ ] Isometric perspective consistent
- [ ] Animation conveys concept clearly
- [ ] Loop is seamless
- [ ] Works at different sizes

### Code Example: Reduced Motion

```tsx
import { useReducedMotion } from 'framer-motion';

export function Animation() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.g
      animate={shouldReduceMotion ? {} : { rotate: 360 }}
      transition={{ duration: 3, repeat: Infinity }}
    >
      {/* ... */}
    </motion.g>
  );
}
```

---

## File Organization

```
src/components/animations/
├── index.ts                 # Export all animations
├── BlockchainDapp.tsx       # Animation 1
├── Erc20Jar.tsx            # Animation 2
├── SmartContract.tsx        # Animation 3
├── WrapMachine.tsx          # Animation 4
├── Evolution.tsx            # Animation 5
├── shared/
│   ├── EtcCoin.tsx         # Reusable ETC coin
│   ├── WetcToken.tsx       # Reusable WETC token
│   └── IsometricBox.tsx    # Reusable box component
└── variants.ts              # Shared Framer Motion variants
```

---

## Next Steps

1. Start with `EtcCoin.tsx` - Simple, reusable
2. Build `BlockchainDapp.tsx` - Hero animation
3. Create remaining 4 animations
4. Test performance on mobile
5. Add scroll triggers to sections

---

*Remember: These animations should educate, not distract. Keep them simple, smooth, and on-brand.*
