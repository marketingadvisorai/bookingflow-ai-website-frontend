# BookingFlow AI - Website Frontend

AI-Powered Booking System Marketing Website built with Next.js 16.

## Tech Stack

- **Framework:** Next.js 16.0.7 (App Router)
- **React:** 19.2.0
- **Language:** TypeScript 5.x
- **Styling:** Tailwind CSS 4.x
- **Animations:** Motion (Framer Motion)
- **Database:** Supabase (PostgreSQL)
- **Auth:** Supabase Auth
- **Deployment:** Vercel

## Project Structure

```
src/
├── app/              # Next.js App Router (routes)
├── components/       # React components
│   ├── ui/          # Base UI components
│   ├── layout/      # Layout components
│   ├── sections/    # Page sections
│   └── [feature]/   # Feature components
├── lib/             # Core libraries
│   ├── supabase/    # Database client
│   ├── utils/       # Utilities
│   └── errors/      # Error classes
├── hooks/           # Custom React hooks
├── services/        # Business logic
├── types/           # TypeScript types
├── constants/       # App constants
└── styles/          # Global styles
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Supabase account

### Installation

```bash
# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Environment Variables

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_key
```

## Coding Standards

This project follows enterprise-level coding practices:

- **File Size:** ≤200 lines per file
- **Functions:** ≤30 lines per function
- **Nesting:** ≤3 levels
- **TypeScript:** Strict mode enabled
- **Components:** Modular with barrel exports

See documentation for full guidelines.

## Scripts

```bash
npm run dev      # Start dev server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Design System

The design uses a strict color palette:

- **Primary:** #635BFF
- **Background:** #0a0a0f
- **Card:** #131318
- **Border:** #27272a
- **Text:** #f5f5f7, #A1A1AA

**Important:** Zero visual changes from original design allowed.

## License

Private - All rights reserved.
