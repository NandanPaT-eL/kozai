# Kozai — AI Invoice Processing Landing Page

A complete, production-ready landing page for **Kozai**, an AI-native financial operations platform for Australian accounting firms and SMBs.

## 🚀 Tech Stack

- **Next.js 14** — App Router with static export
- **React 18** — Server & Client Components
- **TypeScript** — Full type safety
- **Tailwind CSS** — Utility-first styling
- **Inter + JetBrains Mono** — Google Fonts

## 📁 Project Structure

```
kozai/
├── app/
│   ├── api/waitlist/route.ts   # POST handler for email capture
│   ├── globals.css              # CSS reset, grid-paper bg, animations
│   ├── layout.tsx               # Root layout with metadata, fonts, SEO
│   └── page.tsx                 # Main landing page
├── components/
│   ├── Navbar.tsx               # Floating glassmorphism navbar
│   ├── Hero.tsx                 # Hero section with animated invoice card
│   ├── PainPoints.tsx           # 6 pain point cards
│   ├── HowItWorks.tsx           # 7-step numbered flow
│   ├── Features.tsx             # Bento-grid platform modules
│   ├── Testimonials.tsx         # Social proof + metrics strip
│   ├── Pricing.tsx              # 3-tier pricing with annual toggle
│   ├── CTABanner.tsx            # Red waitlist CTA section
│   ├── Footer.tsx               # 4-column footer
│   └── ui/
│       ├── Button.tsx           # Primary, ghost, outline, white variants
│       ├── Badge.tsx              # Status badges
│       ├── Card.tsx               # Base card with hover lift
│       └── InvoiceCard.tsx        # Animated hero mockup
├── lib/
│   ├── constants.ts             # Nav links, pricing, testimonials, steps
│   ├── metadata.ts              # SEO metadata config
│   └── utils.ts                 # cn() classname utility
├── public/                      # Static assets
├── next.config.js               # Static export + unoptimized images
├── tailwind.config.ts           # Custom colors, fonts
├── tsconfig.json                # Path aliases (@/*)
└── package.json
```

## 🎨 Design System

| Token | Value | Usage |
|-------|-------|-------|
| Primary Red | `#F25B5B` | CTAs, accents, highlights |
| Primary Dark | `#1A1A1A` | Headings, primary text |
| Background | `#FAFAF9` | Grid-paper page background |
| Surface White | `#FFFFFF` | Cards, panels |
| Border Light | `#E8E8E4` | Card borders, dividers |
| Text Secondary | `#6B6B66` | Body text, descriptions |
| Text Muted | `#9B9B96` | Labels, captions |
| Accent Success | `#1D9E75` | Verified, processed states |
| Accent Warning | `#BA7517` | Pending review states |

## 🛠️ Getting Started

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Build for production (static export)
npm run build
```

The static export will be generated in the `out/` directory.

## 📝 Key Features

- **Floating Glass Navbar** — Backdrop blur, scroll-aware opacity, mobile hamburger
- **Animated Invoice Card** — CSS keyframe float animation in hero
- **Grid-Paper Background** — CSS repeating linear-gradient pattern
- **Bento Grid Layout** — Mixed-size feature cards with hover effects
- **Pricing Toggle** — Monthly/Annual switch with 20% discount
- **Waitlist API** — POST endpoint ready for database integration
- **Full SEO** — Open Graph, Twitter Cards, JSON-LD structured data
- **Responsive** — Mobile-first, breakpoints at sm (640px), md (768px), lg (1024px)

## 📄 License

© 2026 Kozai Pvt Ltd. All rights reserved.
