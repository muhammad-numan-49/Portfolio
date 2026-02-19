import type { Metadata } from 'next';
import './globals.css';
import { ReactNode } from 'react';
import { siteConfig } from '../lib/site-config';
import { Navbar } from '../components/layout/Navbar';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.baseUrl),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.description,
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    url: siteConfig.baseUrl,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: siteConfig.name
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="bg-background text-foreground">
        <div id="top" className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 relative">
          <div className="pointer-events-none absolute inset-0 bg-radial-faded" />
          <div className="pointer-events-none absolute inset-0 bg-radial-faded-bottom opacity-70" />
          <Navbar />
          <div className="relative z-10 pt-16 sm:pt-20">{children}</div>
        </div>
      </body>
    </html>
  );
}

