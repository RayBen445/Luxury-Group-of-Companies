# Luxury Group of Companies

A comprehensive luxury hospitality and lifestyle platform featuring **11 premium properties** with elegant design, seamless booking, and exceptional user experiences. From fine dining to private aviation, we deliver excellence across every venture.

## 🏆 11 Premium Properties

### Hospitality & Dining
- **La Tavola Royale** - Fine Dining Restaurant with 1100+ dishes, private events, and wine pairing
- **Grand Royale Hotel** - 5-Star Luxury Hotel with 100+ premium rooms and world-class amenities
- **Elite Club** - Exclusive Private Club with membership, networking events, and fine dining
- **Royal Lounge** - Luxury Lounge with live entertainment, premium cocktails, and VIP experiences

### Financial & Technology Services
- **Royale Luxury Bank** - Premium banking with wealth management, investments, and corporate services
- **Royale Technologies** - Enterprise tech solutions for hospitality operations and property management

### Construction & Development
- **Royale Luxury Construction** - Premium real estate development and iconic luxury building projects

### Education & Healthcare
- **Royale Luxury University** - Four prestigious colleges (Engineering, Business, Medicine, Arts & Sciences) with 200+ programs
- **Royale Luxury Hospital** - State-of-the-art medical facility with 500+ beds and specialized departments

### Lifestyle & Travel
- **Royale Luxury Yacht Club** - Exclusive maritime club with 200+ luxury yachts and premium marina
- **Royale Luxury Airways** - Private jet charter services with 50+ aircraft and global coverage

---

## ✨ Key Features

### General Platform
- 🎨 **Premium Dark Design** - Gold accents, glassmorphism effects, and modern luxury aesthetics
- 📱 **Fully Responsive** - Perfect on mobile, tablet, and desktop devices
- 🌙 **Dark/Light Mode** - Theme toggle with localStorage persistence
- ⚡ **High Performance** - Optimized bundle with Vite and lazy loading
- 🔐 **Secure** - Password hashing, session authentication, database encryption

### Restaurant (La Tavola Royale)
- 📖 Extensive menu with 1100+ items and filtering
- 🍽️ Food ordering system with real-time updates
- 📅 Table reservation booking with validation
- 💬 Live chat support with chefs
- 📱 WhatsApp integration for direct messaging
- 🎁 Loyalty program for frequent diners
- 👨‍🍳 Chef profiles with signatures and specialties
- 🖼️ Photo gallery with lightbox viewer

### Banking (Royale Luxury Bank)
- 💳 Account opening with three tiers (Checking, Savings, Money Market)
- 🏦 Personal dashboard with account overview
- 💰 Multiple account types with different APY rates
- 💳 Card ordering and management system
- 📊 Transaction history and tracking
- 📈 Investment portfolio management

### Group Properties
- 🏢 Unified landing page showcasing all 11 companies
- 🔗 Quick navigation between properties
- 📧 Newsletter subscription system
- 📞 24/7 contact information for all companies
- 🗂️ Consistent Group Footer across all properties

---

## 🚀 Tech Stack

### Frontend
- **React 18** - Modern UI library with hooks
- **TypeScript** - Full type safety throughout
- **Vite** - Lightning-fast build tool
- **Wouter** - Lightweight client-side routing
- **TanStack React Query** - Server state management and caching
- **React Hook Form** - Efficient form handling
- **Shadcn UI** - Accessible component library
- **Tailwind CSS** - Utility-first styling framework
- **Lucide React** - Beautiful icon library
- **Framer Motion** - Smooth animations and transitions

### Backend
- **Express.js** - Fast, minimal web framework
- **PostgreSQL** - Reliable relational database
- **Drizzle ORM** - Type-safe database interactions
- **Zod** - TypeScript-first schema validation
- **connect-pg-simple** - PostgreSQL session store

### Styling & Effects
- **Tailwind CSS** - Responsive, utility-first design
- **CSS Custom Properties** - Dynamic theming
- **AOS** - Animate on scroll effects
- **Dark mode support** - Class-based theming system

---

## 📁 Project Structure

```
├── client/
│   ├── src/
│   │   ├── pages/                      # Page components for all properties
│   │   │   ├── group-landing.tsx       # All 11 properties overview
│   │   │   ├── home.tsx                # Restaurant home
│   │   │   ├── menu.tsx                # Restaurant menu
│   │   │   ├── reservations.tsx        # Booking system
│   │   │   ├── hotel.tsx               # Hotel page
│   │   │   ├── club.tsx                # Club page
│   │   │   ├── lounge.tsx              # Lounge page
│   │   │   ├── tech.tsx                # Technology division
│   │   │   ├── bank.tsx                # Banking services
│   │   │   ├── construction.tsx        # Construction company
│   │   │   ├── university.tsx          # University
│   │   │   ├── hospital.tsx            # Hospital
│   │   │   ├── yacht-club.tsx          # Yacht club
│   │   │   └── airline.tsx             # Private aviation
│   │   ├── components/
│   │   │   ├── restaurant/             # Restaurant components (chat, reserve button)
│   │   │   ├── group/                  # Group-wide components
│   │   │   ├── ui/                     # Shadcn UI components
│   │   │   └── footer-wrapper.tsx      # Dynamic footer routing
│   │   ├── lib/
│   │   │   └── queryClient.ts          # React Query configuration
│   │   ├── index.css                   # Global styles & theme variables
│   │   └── App.tsx                     # Main app with routing
│   └── index.html
├── server/
│   ├── routes.ts                       # API endpoints
│   ├── storage.ts                      # Data storage interface
│   ├── index-dev.ts                    # Development server entry
│   ├── index-prod.ts                   # Production server entry
│   └── vite.ts                         # Vite dev server setup
├── shared/
│   └── schema.ts                       # Shared types and schemas
└── package.json                        # Dependencies
```

---

## 🛠️ Installation & Setup

### Prerequisites
- Node.js 18+
- npm or yarn

### Quick Start

1. **Clone & Install**
```bash
git clone https://github.com/yourusername/luxury-group.git
cd luxury-group
npm install
```

2. **Development Server**
```bash
npm run dev
```
Visit `http://localhost:5000`

3. **Production Build**
```bash
npm run build
npm run start
```

---

## 🌐 Navigation & Routes

### Group Landing Page
- **`/`** - Showcase of all 11 luxury properties

### Restaurant Routes
- `/restaurant` - Main restaurant page
- `/restaurant/menu` - Full menu with 1100+ items
- `/restaurant/food-ordering` - Food ordering
- `/restaurant/reservations` - Table bookings
- `/restaurant/chefs` - Chef profiles
- `/restaurant/gallery` - Photo gallery
- `/restaurant/about` - Restaurant history
- `/restaurant/contact` - Contact information

### Group Properties Routes
- `/hotel` - Grand Royale Hotel
- `/club` - Elite Club
- `/lounge` - Royal Lounge
- `/tech` - Royale Technologies
- `/bank` - Royale Luxury Bank (with `/bank/open-account` and `/bank/dashboard`)
- `/construction` - Royale Luxury Construction
- `/university` - Royale Luxury University
- `/hospital` - Royale Luxury Hospital
- `/yacht-club` - Royale Luxury Yacht Club
- `/airline` - Royale Luxury Airways

---

## 🔧 Build Commands

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm start            # Start production server
```

---

## 📧 Contact & Support

**Luxury Group of Companies**
- 📧 Email: luxurygroupofcompanies@gmail.com
- 📞 Phone: +224 807 561 4248
- 🕐 Available: 24/7

---

## 🎨 Design Philosophy

Our platform embodies **luxury and elegance**:

- **Premium Color Palette**: Gold (#D4AF37) accents on sophisticated dark backgrounds
- **Glassmorphism**: Modern frosted glass effects for depth
- **Responsive Layouts**: Perfect spacing and alignment for all devices
- **Smooth Animations**: Subtle transitions that enhance user experience
- **Accessibility**: WCAG compliant with proper semantic HTML
- **Dark Mode**: Full dark/light theme support with smooth transitions

---

## 🚀 Performance Optimizations

- ⚡ Code splitting with Vite
- 📦 Lazy loading for images and components
- 🎯 TanStack Query caching strategies
- 🔄 Efficient re-renders with React.memo
- 📊 Optimized bundle size analysis
- 🌐 CDN-ready assets

---

## 🔐 Security Features

- 🔒 Session-based authentication
- 🛡️ Password hashing for user accounts
- 🔐 PostgreSQL encrypted storage
- 🚫 CSRF protection on forms
- ✅ Input validation with Zod
- 📝 Secure environment variables

---

## 📈 Scalability

The architecture supports:
- Multiple properties and divisions
- Thousands of concurrent users
- High-volume transaction processing (banking)
- Global reach (aviation, yachting services)
- Microservices-ready backend structure

---

## 📄 API Endpoints

### Reservations
- `POST /api/reservations` - Create reservation
- `GET /api/reservations` - Get all reservations

### Newsletter
- `POST /api/newsletter` - Subscribe to newsletter

### Banking
- `POST /api/bank/accounts` - Open new account
- `GET /api/bank/accounts/:email` - Get user accounts
- `POST /api/bank/cards` - Order new card
- `GET /api/bank/transactions/:accountId` - Transaction history

### Health Check
- `GET /api/health` - API status

---

## 🤝 Contributing

Contributions welcome! Please submit a Pull Request.

---

## 📄 License

Proprietary © Luxury Group of Companies. All rights reserved.

---

## ✨ Acknowledgments

- [Shadcn UI](https://ui.shadcn.com) - Component library
- [Tailwind CSS](https://tailwindcss.com) - Styling framework
- [React](https://react.dev) - UI library
- [Express.js](https://expressjs.com) - Backend framework
- [Drizzle ORM](https://orm.drizzle.team) - Database ORM

---

**Where Elegance Meets Excellence**

*Experience the pinnacle of luxury hospitality and services across our 11 premium properties worldwide.*
