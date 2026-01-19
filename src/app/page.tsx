import {
  Hero,
  WhyWetc,
  ReadyToWrap,
  CanonicalContracts,
  SecureYourWetc,
  BestPractices,
  Ecosystem,
} from '@/components/sections';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <>
      <main>
        {/* Section 1: WTF IS WETC? */}
        <Hero />

        {/* Section 2: WHY YOU NEED WETC */}
        <WhyWetc />

        {/* Section 3: READY TO WRAP? */}
        <ReadyToWrap />

        {/* Section 4: THE CANONICAL WETC */}
        <CanonicalContracts />

        {/* Section 5: SECURE YOUR WETC */}
        <SecureYourWetc />

        {/* Section 6: THE FUTURE OF WETC / BEST PRACTICES */}
        <BestPractices />

        {/* Section 7: WETC ECOSYSTEM */}
        <Ecosystem />
      </main>

      <Footer />
    </>
  );
}
