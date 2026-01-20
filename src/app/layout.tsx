import type { Metadata, Viewport } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { SITE, SEO_KEYWORDS, WETC_CONTRACT } from '@/lib/constants';
import { BackgroundSystem } from '@/components/BackgroundSystem';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jetbrains-mono',
});

// Flatten SEO keywords for metadata
const allKeywords = [
  ...SEO_KEYWORDS.primary,
  ...SEO_KEYWORDS.defi,
  ...SEO_KEYWORDS.products,
  ...SEO_KEYWORDS.technical,
  ...SEO_KEYWORDS.trading,
];

export const metadata: Metadata = {
  // Core metadata
  title: {
    default: SITE.title,
    template: '%s | WETC - Wrapped Ether on Ethereum Classic',
  },
  description: SITE.description,
  keywords: allKeywords,
  authors: [{ name: 'Ethereum Classic Community', url: 'https://ethereumclassic.com' }],
  creator: 'Ethereum Classic Community',
  publisher: 'wrappedether.org',

  // Canonical URL
  metadataBase: new URL(SITE.url),
  alternates: {
    canonical: '/',
  },

  // OpenGraph metadata
  openGraph: {
    title: SITE.title,
    description: SITE.description,
    url: SITE.url,
    siteName: SITE.name,
    images: [
      {
        url: SITE.image,
        width: 1200,
        height: 630,
        alt: 'WETC - Wrapped Ether on Ethereum Classic',
        type: 'image/png',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  // Twitter Card metadata
  twitter: {
    card: 'summary_large_image',
    site: SITE.twitterHandle,
    creator: SITE.twitterHandle,
    title: SITE.title,
    description: SITE.description,
    images: {
      url: SITE.image,
      alt: 'WETC - Wrapped Ether on Ethereum Classic',
    },
  },

  // Robots directives
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // Icons
  icons: {
    icon: [
      { url: '/images/favicon.ico', sizes: 'any' },
      { url: '/images/logos/wetc.svg', type: 'image/svg+xml' },
    ],
    apple: '/images/wrapped-ether.png',
  },

  // App metadata
  applicationName: 'WETC',
  category: 'cryptocurrency',

  // Additional metadata
  other: {
    'ethereum:contract': WETC_CONTRACT,
    'ethereum:chain': '61',
    'crypto:ticker': 'WETC',
  },
};

export const viewport: Viewport = {
  themeColor: '#0a0a0a',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-screen bg-background text-foreground antialiased">
        <BackgroundSystem />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
