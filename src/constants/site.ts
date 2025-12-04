/**
 * Site-wide constants and configuration.
 */

export const SITE_CONFIG = {
  name: 'BookingFlow AI',
  description: 'AI-Powered Booking System for Escape Rooms',
  url: process.env.NEXT_PUBLIC_APP_URL ?? 'http://localhost:3000',
  ogImage: '/og-image.png',
  links: {
    twitter: 'https://twitter.com/bookingflowai',
    github: 'https://github.com/bookingflowai',
  },
} as const;

export const NAVIGATION = {
  main: [
    { name: 'Product', href: '/product' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Docs', href: '/docs' },
    { name: 'Blog', href: '/blog' },
  ],
  resources: [
    { name: 'Documentation', href: '/docs' },
    { name: 'Guides', href: '/guides' },
    { name: 'Tutorials', href: '/tutorials' },
    { name: 'API Reference', href: '/docs/api' },
  ],
  company: [
    { name: 'Customer Stories', href: '/customer-stories' },
    { name: 'Careers', href: '/careers' },
    { name: 'Changelog', href: '/changelog' },
    { name: 'Community', href: '/community' },
  ],
  legal: [
    { name: 'Privacy', href: '/privacy' },
    { name: 'Terms', href: '/terms' },
  ],
} as const;
