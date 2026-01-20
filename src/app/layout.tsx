import type { Metadata, Viewport } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { SITE } from '@/lib/constants';
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

export const metadata: Metadata = {
  title: SITE.title,
  description: SITE.description,
  keywords: ['WETC', 'Wrapped ETC', 'Ethereum Classic', 'ERC-20', 'ETCswap', 'DeFi', 'Classic USD', 'USC'],
  authors: [{ name: 'Ethereum Classic Community' }],
  openGraph: {
    title: SITE.title,
    description: SITE.description,
    url: SITE.url,
    siteName: SITE.name,
    images: [
      {
        url: `${SITE.url}${SITE.image}`,
        width: 1200,
        height: 630,
        alt: 'WETC - Wrapped Ether on Ethereum Classic',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE.title,
    description: SITE.description,
    images: [`${SITE.url}${SITE.image}`],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/images/favicon.ico',
    apple: '/images/wrapped-ether.png',
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
