# 🚀 Zippy Trail Marketing Website

A world-class, production-ready, SaaS-quality marketing landing page for the delivery and logistics platform **Zippy Trail**. Designed with a futuristic, clean glassmorphic aesthetic, dark-mode styling, rich motion flows, and client-safe interactive 3D components.

---

## 🛠️ Tech Stack & Key Libraries

* **Framework:** Next.js 15 (App Router, React 19)
* **Language:** TypeScript
* **Styling:** Tailwind CSS (v3)
* **Animations:** Framer Motion (for staggered entries, tabs, layout transitions) & GSAP (for scroll-triggered counters and performance checks)
* **3D Rendering:** React Three Fiber (R3F), React Three Drei, and Three.js (procedural elements optimized for mobile & fallback modes)
* **Icons:** Lucide Icons

---

## 📁 Project Directory Structure

```text
zippy_website/
├── app/
│   ├── layout.tsx         # Global page wrapper with SEO meta, Outfit font setup, & Navbar
│   └── page.tsx           # Page assembler (lazy-loading components)
├── components/
│   ├── Navbar.tsx         # Sticky glassmorphic navbar with active section observer
│   ├── 3d/
│   │   ├── HeroScene.tsx  # 3D interactive cursor-tracking scooter, cardboard box, and logo
│   │   ├── GlobeScene.tsx # 3D rotating coverage globe with glowing delivery routes
│   │   └── RouteScene.tsx # 3D vector map terrain with moving package drone
│   ├── ui/
│   │   ├── accordion.tsx  # Framer Motion height-collapsed FAQ accordions
│   │   └── carousel.tsx   # Touch-drag mobile-friendly testimonial sliders
│   └── sections/          # Chronological website page sections
│       ├── Hero.tsx
│       ├── TrustedBy.tsx
│       ├── Services.tsx
│       ├── HowItWorks.tsx
│       ├── Features.tsx
│       ├── LiveTracking.tsx
│       ├── Stats.tsx
│       ├── Testimonials.tsx
│       ├── MobileApp.tsx
│       ├── FAQ.tsx
│       ├── CTA.tsx
│       └── Footer.tsx
├── lib/
│   └── utils.ts           # Classnames tailwind-merge helper
├── styles/
│   └── globals.css        # Core custom styles (scrollbars, glass panels, marquee animations)
├── next.config.ts         # Transpile configurations for threejs
├── tailwind.config.ts     # Zippy Trail design tokens (burnt orange (#CC5500), charcoal)
├── tsconfig.json          # Path mapping (@/*) configs
└── package.json           # Scripts and pinned dependencies
```

---

## ⚡ Setup & Development

### 1. Install dependencies
From the root of the project (`zippy_website`), run:
```bash
npm install
```
*(Note: If npm warns about peer dependencies between React 19 and React Three Fiber Alpha versions, you can append `--legacy-peer-deps`)*

### 2. Launch Local Dev Server
Start the Next.js development server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### 3. Build Production Bundle
To create a production-optimized build and perform typechecks:
```bash
npm run build
```
And launch the compiled server:
```bash
npm start
```

---

## 🎨 Design Systems & Highlights

* **Procedural 3D Elements:** All 3D meshes (interactive globe, floating cardboard package, moving drone courier, extruded "Z" logo) are generated procedurally via R3F primitives and custom physical shaders. This keeps assets extremely lightweight (0kb image download overhead) and 100% resilient to network failure.
* **Glassmorphism:** Standard glass styling class `.glass-panel` combined with `backdrop-filter: blur` and linear border gradients.
* **Scroll Animation:** Staggered transitions utilizing Framer Motion's `whileInView` observers.
* **Responsive Mobile Mockups:** Real-time dashboards of the Customer, Rider, and Vendor applications built with high-fidelity, pure CSS smartphone shells to ensure zero layout shifting.
