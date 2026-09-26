# ElevOne Technologies Web Platform

A production-ready, high-performance TypeScript web application crafted to exactly match the ElevOne Technologies design system ("Engineering What's Next").

## 🚀 Tech Stack

- **Framework**: React 19 + TypeScript
- **Bundler & Dev Server**: Vite 8
- **Styling**: Tailwind CSS v4 + Tailwind Vite Plugin
- **Routing**: React Router DOM (Multi-page architecture with smooth section scrolling)
- **Icons**: Lucide React + Custom SVG Brand Icons
- **Typography**: Google Fonts (*Plus Jakarta Sans* & *Outfit*)

---

## 📁 Project Architecture

```
Starvoniq/
├── public/
│   └── images/                     # Pixel-perfect assets extracted from original design
│       ├── hero-3d.png             # 3D glowing E1 innovation monument
│       ├── project-school.png      # School Management System showcase
│       ├── project-ecommerce.png   # E-Commerce Platform showcase
│       ├── project-irrigation.png  # Smart Irrigation System showcase
│       ├── project-ai-bot.png      # AI Chatbot System showcase
│       ├── team-1.png              # Faith Mutua (CEO)
│       ├── team-2.png              # Mathias Kieti (COO)
│       ├── team-3.png              # Ronald Mutua (CTO)
│       ├── team-4.png              # James Ngandu (Cybersecurity)
│       └── team-5.png              # Joseph Seko (3D Expert)
├── src/
│   ├── components/
│   │   ├── ElevOneLogo.tsx         # Vector SVG logo & typography
│   │   ├── Navbar.tsx              # Sticky header with mobile drawer & Let's Talk CTA
│   │   ├── Hero.tsx                # Hero section with 3D monument & trusted brand logos
│   │   ├── StatsRow.tsx            # 5 key metrics banner (50+, 25+, 10+, 10+, 99%)
│   │   ├── ServicesSection.tsx     # 6 end-to-end services grid with color-coded badges
│   │   ├── WorkSection.tsx         # Interactive horizontal portfolio slider (< / >)
│   │   ├── WhyChooseUs.tsx         # 4 value pillars ("We Don't Just Build. We Solve.")
│   │   ├── ProcessSection.tsx      # 7-step connected development pipeline (01 - 07)
│   │   ├── TeamSection.tsx         # Executive & engineering team cards
│   │   ├── TestimonialsSection.tsx # Client reviews slider with quote marks & avatars
│   │   ├── CtaBanner.tsx           # Full-width vibrant orange CTA banner
│   │   ├── Footer.tsx              # Comprehensive footer with Nairobi HQ contact info
│   │   ├── ContactModal.tsx        # Interactive "Start a Project" / "Let's Talk" modal
│   │   ├── ProjectModal.tsx        # Interactive case study viewer modal
│   │   └── SocialIcons.tsx         # SVG icons (LinkedIn, Twitter/X, Facebook, Instagram)
│   ├── pages/
│   │   ├── HomePage.tsx            # Exact landing page matching design
│   │   ├── ServicesPage.tsx        # Deep-dive services catalog & quote inquiry
│   │   ├── PortfolioPage.tsx       # Filterable portfolio & case studies
│   │   ├── AboutPage.tsx           # Company story, mission & full team bios
│   │   ├── BlogPage.tsx            # Engineering insights & technical articles
│   │   └── ContactPage.tsx         # Interactive contact form & FAQ accordions
│   ├── data/
│   │   └── siteData.ts             # All content, services, projects, team, & FAQs
│   ├── types/
│   │   └── index.ts                # TypeScript interfaces and models
│   ├── App.tsx                     # React Router layout & global state
│   ├── main.tsx                    # React application entrypoint
│   └── index.css                   # Tailwind v4 import & custom styles
├── index.html                      # HTML template with Google Fonts
├── package.json
└── vite.config.ts
```

---

## 🛠️ Getting Started

### Development
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build
```bash
npm run build
```
Creates an optimized static bundle in the `dist/` directory.

### Preview Production Build
```bash
npm run preview
```
