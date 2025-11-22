# Design Guidelines for La Tavola Royale Restaurant Website

## Design Direction
**User-Specified Premium Dark Luxury Theme**

The user has provided comprehensive design specifications. These guidelines must be followed exactly as requested.

---

## Visual Style

**Color Palette:**
- Primary: Black backgrounds
- Accent: Deep gold
- Secondary: Burgundy
- Glassmorphism overlays throughout

**Typography:**
- Elegant serif for headings
- Clean sans-serif for body text
- Gradient text headings with gold accents

**Visual Effects:**
- Glassmorphism overlays on sections
- Soft shadows with premium spacing
- Gold gradient accents
- Ambient floating shapes
- SVG wave or curved dividers between sections
- Premium shadow layers on cards

---

## Layout System

**Spacing:** Luxury spacing - generous padding and margins for premium feel

**Responsive Grid:**
- Signature dishes: Grid of 6-8 cards
- Gallery: 3-column masonry layout
- About section: Two-column layout
- Mobile: Bottom navigation bar + sticky elements

---

## Images

**Hero Section:**
- Full-screen premium restaurant background image
- Parallax effect
- Background video option

**Required Image Categories:**
1. High-quality food photography (signature dishes, menu items)
2. Real chef photos for profiles
3. Restaurant interior shots
4. Kitchen and wine cellar images
5. Wine bar photography
6. Event space photos
7. Customer photos for testimonials

**Image Treatments:**
- Lazy-loading for all images
- Hover zoom effects on cards
- Lightbox viewer for gallery
- Image hover lift on menu items

---

## Component Specifications

### 1. Navigation Bar
- Sticky with blur effect on scroll
- Transparent → solid transition
- Logo: "La Tavola Royale"
- Links: Home, Menu, Reservations, Chefs, Gallery, Contact
- "Book Table" CTA button

### 2. Hero Section
- Full-screen with parallax
- Headline: "Experience Fine Dining Redefined."
- Subtext: "Where flavor meets luxury."
- Dual CTAs: "Reserve a Table" + "View Menu"
- Fade-in animations

### 3. Signature Dishes
- 6-8 food cards in grid
- Hover reveal animations
- Each card: dish name, summary, price range
- 3D card hover transforms

### 4. Full Menu Section
- Categories: Starters, Main Courses, Chef Specials, Vegetarian, Desserts, Wines & Drinks
- Filter buttons: All / Vegetarian / Specials / Drinks
- Each item: name, ingredients, price
- Hover lift effects on cards

### 5. About Restaurant
- Left column: Story, philosophy, awards
- Right column: Kitchen, interior, wine cellar images gallery

### 6. Chef Profiles
- Elegant cards with real photos
- Name, expertise, signature dish

### 7. Reservation Form
- Fields: Name, Email, Phone, Number of Guests, Date, Time, Table Type (Indoor/Outdoor/VIP), Special Requests
- Form validation with feedback
- Confirmation message
- Multi-step reservation option

### 8. Gallery Section
- Masonry layout with 5 categories: Food, Interior, Wine Bar, Events, Kitchen
- Lightbox viewer with navigation

### 9. Customer Reviews
- Auto-play slider
- Customer photo, star rating, review text

### 10. Contact + Location
- Embedded map
- Address, phone, hours, parking info
- WhatsApp button

### 11. Footer
- Quick links grid
- Social media icons
- Newsletter signup field
- Copyright
- Tagline: "Taste the Extraordinary."

---

## Interactive Features (All 50 Required)

**Navigation & Scroll:**
- Smooth scrolling
- Floating "Reserve Table" button
- Scroll-to-top button
- Sticky CTA on mobile
- Floating WhatsApp chat

**Animations & Effects:**
- AOS.js scroll animations
- Parallax on hero
- Micro-interactions on all hover states
- Pulsing CTA buttons
- Scroll-triggered counters (years active, dishes served)
- Page preloader animation

**Functionality:**
- Live "Open Now" indicator
- Dark mode toggle
- Menu category filtering system
- FAQ accordion for policies
- Newsletter form with validation
- Reviews slider auto-play

**Additional Sections:**
- Wine pairing recommendations
- Chef tips mini-section
- Social proof bar (CNN, Food Network features)
- Awards showcase section
- "Why Dine Here" section
- Partners carousel (suppliers, wine brands)
- Events schedule section
- Staff/waiter profile cards
- Embedded restaurant tour video

**Technical:**
- ARIA accessibility labels
- Semantic HTML5
- Full SEO + Open Graph metadata
- Lazy-loading images
- Form validation

---

## Accessibility
- ARIA labels throughout
- Semantic HTML5 structure
- Keyboard navigation support