# La Tavola Royale - Premium Fine Dining Restaurant Website

A stunning, multi-page luxury restaurant website built with React, TypeScript, Tailwind CSS, and Express.js.

## Features

- **Multi-Page Architecture** - Home, Menu, Reservations, Chefs, Gallery, About, and Contact pages
- **Premium Design** - Dark luxury theme with gold accents, glassmorphism effects, and smooth animations
- **Responsive Layout** - Fully optimized for mobile, tablet, and desktop devices
- **Interactive Elements** - 50+ interactive features including floating buttons, dark mode toggle, and scroll animations
- **Reservation System** - Fully functional booking form with validation
- **Newsletter Signup** - Email subscription with backend storage
- **Gallery with Lightbox** - Beautiful image showcase with lightbox viewer
- **Chef Profiles** - Professional chef profiles with signatures
- **Admin Ready** - Backend API for managing reservations and subscribers

## Tech Stack

- **Frontend:** React 18, TypeScript, Tailwind CSS, Vite
- **Backend:** Express.js, Node.js
- **Routing:** Wouter (lightweight routing)
- **Forms:** React Hook Form with Zod validation
- **Data Fetching:** TanStack React Query
- **UI Components:** Shadcn UI
- **Animations:** AOS.js, Framer Motion
- **Styling:** Custom CSS with CSS variables

## Installation

### Local Development

1. Clone the repository
```bash
git clone <repository-url>
cd la-tavola-royale
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables
```bash
cp .env.example .env.local
```

4. Start the development server
```bash
npm run dev
```

The application will be available at `http://localhost:5173` (frontend) with the backend running on the same port.

## Deployment

### Vercel Deployment

1. **Connect to Vercel:**
   - Push your code to GitHub, GitLab, or Bitbucket
   - Connect your repository to Vercel (https://vercel.com)
   - Vercel will automatically detect it's a Vite project

2. **Set Environment Variables:**
   - Go to Settings > Environment Variables
   - Add the following:
     - `SESSION_SECRET` - A random string for session management

3. **Deploy:**
   - Click "Deploy"
   - Vercel will automatically run `npm run build` and deploy the app
   - Your site will be live at `https://your-app.vercel.app`

4. **Custom Domain:**
   - Add your custom domain in Vercel dashboard
   - Update DNS records according to Vercel's instructions

## Environment Variables

Create a `.env.local` file in the root directory:

```env
# Session Secret - generate a random string
SESSION_SECRET=your-random-secret-key-here

# API URL (optional, defaults to current origin)
VITE_API_URL=http://localhost:5173
```

## Build Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm start` - Start production server

## File Structure

```
├── client/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── ui/              # Shadcn UI components
│   │   │   ├── restaurant/      # Custom restaurant components
│   │   │   └── theme-provider.tsx
│   │   ├── pages/               # Page components
│   │   ├── lib/                 # Utilities and helpers
│   │   ├── index.css            # Global styles
│   │   ├── App.tsx              # Main app with routing
│   │   └── main.tsx
│   └── index.html
├── server/
│   ├── routes.ts                # API routes
│   ├── storage.ts               # Data storage interface
│   ├── app.ts                   # Express app setup
│   ├── index-dev.ts             # Development entry point
│   └── index-prod.ts            # Production entry point
├── shared/
│   └── schema.ts                # Shared data schemas and types
├── vercel.json                  # Vercel configuration
└── package.json
```

## Pages

### Home (`/`)
- Hero section with parallax effect
- Signature dishes showcase
- Customer reviews slider
- Social proof and awards
- Animated counters

### Menu (`/menu`)
- Complete menu with multiple categories
- Filterable items (by category, dietary preference, special)
- Detailed descriptions and pricing

### Reservations (`/reservations`)
- Comprehensive booking form
- Real-time validation
- Date and time picker
- Table type selection
- Special requests field

### Chefs (`/chefs`)
- Executive chef profiles
- Expertise and signature dishes
- Culinary tips and tricks

### Gallery (`/gallery`)
- Beautiful image gallery
- Lightbox viewer
- Categories: Kitchen, Wine Cellar, Bar, Dining, Terrace

### About (`/about`)
- Restaurant history and philosophy
- Awards and recognition
- Team statistics

### Contact (`/contact`)
- Contact information
- Hours of operation
- Embedded Google Map
- Quick action buttons

## API Endpoints

### Reservations
- `POST /api/reservations` - Create a new reservation
- `GET /api/reservations` - Get all reservations

### Newsletter
- `POST /api/newsletter` - Subscribe to newsletter

### Health Check
- `GET /api/health` - API health status

## Interactive Features

1. **Navigation** - Sticky navbar with glassmorphism effect
2. **Theme Toggle** - Dark/Light mode switcher with localStorage persistence
3. **Scroll to Top** - Floating button for quick navigation
4. **Floating Reserve Button** - Quick access to reservations
5. **WhatsApp Chat** - Direct messaging integration
6. **Page Preloader** - Elegant loading animation
7. **Smooth Scrolling** - Page-wide smooth scroll behavior
8. **AOS Animations** - Scroll-triggered animations
9. **Hover Effects** - Micro-interactions on all interactive elements
10. **Pulsing CTAs** - Gold pulsing effects on call-to-action buttons

## Performance

- **Optimized Images** - Lazy loading for all images
- **Code Splitting** - Automatic with Vite
- **Responsive Design** - Mobile-first approach
- **Accessibility** - ARIA labels and semantic HTML
- **SEO Ready** - Meta tags and Open Graph support

## Customization

### Colors
Edit the CSS variables in `client/src/index.css`:
```css
:root {
  --primary: 42 85% 48%;        /* Gold */
  --secondary: 0 45% 32%;       /* Burgundy */
  --background: 0 0% 3%;        /* Near black */
}

.dark {
  /* Dark mode colors */
}
```

### Fonts
Change fonts in `index.css`:
- Serif: `Playfair Display` (for headings)
- Sans: `Inter` (for body text)

### Content
Update restaurant details in individual component files and API endpoints.

## Support

For issues or questions, please create an issue in the repository.

## License

This project is licensed under the MIT License.

## Credits

Built with ❤️ for luxury fine dining experiences.
