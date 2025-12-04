/**
 * Root Layout
 * Main application layout with theme provider.
 */

import type { Metadata, Viewport } from 'next';

import { ThemeProvider } from '@/components/shared/ThemeProvider';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'BookingFlow AI | World\'s #1 AI-Powered Booking Engine',
    template: '%s | BookingFlow AI',
  },
  description:
    'Transform your escape room business with AI-powered booking, intelligent scheduling, and automated customer management.',
  keywords: [
    'booking system',
    'escape room software',
    'AI booking',
    'appointment scheduling',
    'business automation',
  ],
  authors: [{ name: 'BookingFlow AI' }],
  creator: 'BookingFlow AI',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://bookingflow.ai',
    siteName: 'BookingFlow AI',
    title: 'BookingFlow AI | World\'s #1 AI-Powered Booking Engine',
    description:
      'Transform your escape room business with AI-powered booking, intelligent scheduling, and automated customer management.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BookingFlow AI | World\'s #1 AI-Powered Booking Engine',
    description:
      'Transform your escape room business with AI-powered booking, intelligent scheduling, and automated customer management.',
    creator: '@bookingflowai',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0f' },
  ],
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-background text-foreground antialiased">
        <ThemeProvider defaultTheme="dark" storageKey="bookingflow-theme">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
