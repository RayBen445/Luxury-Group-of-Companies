# La Tavola Royale - Multi-Property Luxury Hospitality Group

## Overview

La Tavola Royale is a comprehensive luxury hospitality platform featuring multiple premium properties including a fine dining restaurant, 5-star hotel, exclusive club, luxury lounge, tech division, and banking services. The application is built as a modern web platform with a React frontend and Express.js backend, designed to provide seamless booking, ordering, and membership experiences across all properties.

The system manages reservations, food orders, newsletter subscriptions, and banking services with a focus on premium user experience, responsive design, and rich interactive features. The platform features 60+ premium restaurant features including live chat, WhatsApp integration, wine pairing guides, loyalty programs, and comprehensive booking management.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System:**
- React 18 with TypeScript for type-safe component development
- Vite as the build tool for fast development and optimized production builds
- Wouter for lightweight client-side routing instead of React Router

**UI Component Strategy:**
- Shadcn UI component library using Radix UI primitives for accessible, composable components
- Tailwind CSS with custom design tokens for premium dark luxury theme (black backgrounds, gold accents, burgundy secondary colors, glassmorphism effects)
- CSS variables for theming with dark/light mode support via ThemeProvider context
- Custom animations using AOS.js and Framer Motion for scroll animations and transitions

**State Management:**
- TanStack React Query for server state management, caching, and data fetching
- React Hook Form with Zod schema validation for form state and validation
- Context API for theme management (dark/light mode toggle)
- Local component state for UI interactions

**Design System:**
- Premium luxury design guidelines with specific color palette (gold #D4AF37, black backgrounds, burgundy accents)
- Responsive grid layouts with generous spacing for luxury feel
- Glassmorphism overlays, soft shadows, gradient text effects
- Mobile-first responsive design with bottom navigation on mobile devices

### Backend Architecture

**Server Framework:**
- Express.js with TypeScript for API endpoints
- Separate development and production server configurations (index-dev.ts, index-prod.ts)
- Custom middleware for JSON parsing, URL encoding, and request logging
- Session management with connect-pg-simple for PostgreSQL-backed sessions

**API Design:**
- RESTful API endpoints organized in routes.ts
- Resource-based routing: `/api/reservations`, `/api/newsletter`, `/api/food-orders`, `/api/bank/*`
- Request validation using Zod schemas from shared schema definitions
- Consistent error handling with appropriate HTTP status codes
- Raw body capture for webhook verification

**Storage Layer:**
- Abstracted storage interface (IStorage) allowing multiple implementations
- In-memory storage (MemStorage) for development/testing
- Database storage prepared for Drizzle ORM with PostgreSQL (via @neondatabase/serverless)
- UUID-based primary keys for all entities

### Data Storage Solutions

**Database Technology:**
- PostgreSQL database configured via Drizzle ORM
- Neon serverless PostgreSQL for production deployment
- Database schema defined in shared/schema.ts using Drizzle's pgTable

**Schema Design:**
- Users table: id (UUID), username, password
- Reservations table: id, name, email, phone, guests, date, time, tableType, specialRequests, createdAt
- Newsletters table: id, email, subscribedAt
- Food orders table: id, customerEmail, items (JSON), deliveryType, deliveryAddress, total, status, createdAt
- Banking tables: BankAccounts (with accountNumber, balance, accountType), BankCards (with cardNumber, expiryDate, cvv), Transactions (with amount, type, description)
- Zod schemas for validation using drizzle-zod integration

**Data Validation:**
- Shared Zod schemas between frontend and backend for consistent validation
- Insert schemas auto-generated from Drizzle table definitions
- Custom validation rules for business logic (email format, phone numbers, guest counts, date/time formats)

### Authentication & Authorization

**Current Implementation:**
- User schema defined with username/password fields
- Session storage configured with connect-pg-simple
- SESSION_SECRET environment variable for session encryption
- Authentication endpoints prepared but not fully implemented in routes

**Security Measures:**
- Password fields present in schema (hashing implementation recommended)
- Session-based authentication infrastructure in place
- HTTPS enforcement recommended for production
- Raw body capture for webhook signature verification

### External Dependencies

**Third-Party Services:**
- WhatsApp integration for direct customer messaging (frontend component ready)
- Payment processing infrastructure prepared (mentioned in features: Apple Pay, Google Pay, Stripe, Venmo)
- Email/SMS services for reservation confirmations (mentioned in features)
- Live chat functionality for customer support

**Database Services:**
- Neon Serverless PostgreSQL (@neondatabase/serverless v0.10.4)
- Connection via DATABASE_URL environment variable
- Drizzle Kit for migrations management

**Frontend Libraries:**
- Radix UI components (@radix-ui/* packages) for accessible primitives
- TanStack React Query (v5.60.5) for data fetching
- React Hook Form (v3) with @hookform/resolvers for form validation
- AOS (Animate On Scroll) library for scroll animations
- date-fns (v3.6.0) for date manipulation
- clsx and tailwind-merge for conditional class names

**Development Tools:**
- TypeScript for type safety across frontend and backend
- ESBuild for production backend bundling
- Vite plugins for development: runtime error overlay, cartographer, dev banner
- Drizzle Kit for database migrations
- PostCSS with Tailwind CSS and Autoprefixer

**Deployment Configuration:**
- Vercel deployment configured (vercel.json)
- Environment variables: SESSION_SECRET, DATABASE_URL
- Static file serving from dist/public directory
- Express server bundled with esbuild for production

**Image Assets:**
- Generated images stored in attached_assets/generated_images directory
- Referenced via Vite aliases (@assets)
- Premium food photography, property images, and lifestyle imagery

**API Integration Points:**
- Newsletter subscription endpoint: POST /api/newsletter
- Reservation booking: POST /api/reservations, GET /api/reservations
- Food ordering: POST /api/food-orders, GET /api/food-orders
- Banking services: POST /api/bank/accounts, GET /api/bank/accounts/:email
- Card management: POST /api/bank/cards, GET /api/bank/accounts/:id/cards
- Transaction tracking: GET /api/bank/transactions/:accountId