<div align="center">

# Faiz Shaikh — Portfolio

Personal portfolio website showcasing my experience, projects, and skills as a Full-Stack Developer. Built with a focus on performance, accessibility, and a refined dark-first design.

**[faiz-shaikh.in](https://www.faiz-shaikh.in)**

</div>

---

## What's Inside

A sidebar-anchored portfolio with animated section reveals, a dedicated projects browser with category filtering, and individual detail pages for every project and work experience. The design system is built on OKLCH color tokens, a centralized Framer Motion animation library, and Tailwind CSS v4.

**Sections:**
- Experience — vertical timeline with alternating cards and spring-animated markers
- Projects — featured grid on home, full filterable catalog at `/projects`
- Skills — categorized technology pills
- Education — institution card with degree and dates
- Contact — CTA card with direct links

## Tech Stack

**Next.js 16** · **React 19** · **TypeScript** · **Tailwind CSS v4** · **Framer Motion** · **shadcn/ui** · **OKLCH color space**

Animation tokens (`EASE`, `DURATION`, `OFFSET`, `STAGGER`, `VIEWPORT`, `SPRING`) are centralized in `src/lib/animations.ts` so every entrance, stagger, and spring effect stays consistent across the codebase.

## Project Structure

```
src/
├── app/
│   ├── page.tsx                    # Home — all sections
│   ├── projects/
│   │   ├── page.tsx                # Full projects catalog with category filter
│   │   └── [slug]/page.tsx         # Project detail page
│   └── experience/
│       └── [slug]/page.tsx         # Experience detail page
├── components/
│   ├── layout/                     # Sidebar
│   ├── sections/                   # Experience, Projects, Skills, Education, Contact
│   ├── shared/                     # Reusable primitives (cards, badges, links, headings)
│   └── ui/                         # shadcn/ui base components
├── data/                           # All content — projects, experience, skills, education
└── lib/
    └── animations.ts               # Motion token system
```

## Getting Started

```bash
git clone https://github.com/f-z-coder/portfolio.git
cd portfolio
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

```bash
pnpm build      # Production build
pnpm start      # Start production server
pnpm lint       # ESLint
pnpm format     # Prettier
```

## Customization

All content lives in `src/data/` — no CMS, no database. To make it your own:

| File | What it controls |
|---|---|
| `site.ts` | Name, job title, bio, URL, resume path, current company |
| `experience.ts` | Work history with responsibilities and tech stack |
| `projects.ts` | Projects with descriptions, features, links, and categories |
| `skills.ts` | Skill categories and individual technologies |
| `education.ts` | Institution, degree, and dates |
| `contact.ts` | Email, phone, GitHub, LinkedIn, X links |
