# Portfolio Design Audit — Agent Prompt

Hand this prompt to another agent (with read access to the repo) when you want a fresh design-consistency review. The agent should produce a written report only — **no edits**.

---

You are acting as a senior product designer + frontend QA engineer. Audit a Next.js 16 + Tailwind 4 + Framer Motion portfolio at `C:\Users\faizs\Desktop\portfolio` for design inconsistencies, visual bugs, and UX gaps. Do **NOT** make any edits — produce a written report only.

## Project structure (start here)

- **Pages**: `src/app/page.tsx` (home), `src/app/projects/page.tsx` (listing with category filter), `src/app/projects/[slug]/page.tsx`, `src/app/experience/[slug]/page.tsx`, `src/app/not-found.tsx`, `src/app/layout.tsx`
- **Sections (rendered on home)**: `src/components/sections/{experience-section,projects-section,skills-section,education-section,contact-section}.tsx`
- **Sidebar** (visible on lg+ for all pages, replaces a hero on home): `src/components/layout/sidebar.tsx`
- **Shared building blocks**: `src/components/shared/{section-heading,section-wrapper,stagger-grid,tech-badge,tech-badge-list,skill-pill,project-card,experience-card,related-experience-card,bullet-list,detail-section,detail-page-content,card-actions,action-link,external-link,back-button,contact-link-content,contact-links,content-container,theme-toggle}.tsx`
- **shadcn primitives**: `src/components/ui/{button,card,badge,separator}.tsx`
- **Data**: `src/data/{site,types,contact,skills,experience,projects,education}.ts`
- **Tokens**: `src/lib/animations.ts` (`EASE`, `DURATION`, `VIEWPORT`, `STAGGER`, `OFFSET`), `src/app/globals.css` (OKLCH colors, `--radius`)

## What to audit (be exhaustive)

For each finding, give `file:line`, what's wrong, severity (critical / high / medium / low), and a concrete fix. Quote the actual class strings or JSX you flag — don't paraphrase.

### 1. Typography hierarchy

- Compare every heading across pages (`h1`, `h2`, `h3`) — same size + weight + tracking for the same role?
- Card titles: `ProjectCard`, `ExperienceCard`, `RelatedExperienceCard`, Education card — same size?
- Subsection titles inside detail pages (Features / Tech Stack / What I Did / Other Experience) — same scale?
- Eyebrow/uppercase text (e.g. "Catalog", "Get in touch") — same size, weight, tracking?
- Are there any `text-[Npx]` / `tracking-[Nem]` magic values? They should be replaced with Tailwind's scale.
- Are font-weights used consistently (e.g. is "semibold" the only label weight, or do "medium" and "bold" leak in for the same role)?

### 2. Spacing & rhythm

- Section bottom padding — every section uses `SectionWrapper` (`pb-16 sm:pb-24`)? Any one-offs?
- Section heading → content gap — does every section use the same `mb-10` on `SectionHeading`?
- Card padding — does every Card use shadcn defaults, or are there `p-4`, `p-5`, `p-6`, `p-8` overrides? List all.
- Gap inside grids and stagger containers (`gap-1.5`, `gap-2`, `gap-3`, `gap-4`) — is the system clear?
- Look for `mt-N` / `mb-N` / `space-y-N` literals that don't match the rest of the codebase.

### 3. Border radius

- Tailwind radii used: `rounded-md`, `rounded-lg`, `rounded-xl`, `rounded-2xl`, `rounded-3xl`, `rounded-4xl`, `rounded-full`. Map every usage and check whether similar atoms (tags, cards, buttons, glow blobs) share a radius.
- `TechBadge` vs `SkillPill` vs `Badge` primitive: are they visually one family?

### 4. Color & opacity

- Primary opacities used (`primary/5, /10, /20, /30, /80, /90`) — is there a clear tier system (background vs ring vs hover)?
- `border-border` opacities (full, `/50`, `/60`) — is there exactly one "subtle separator" opacity?
- `muted-foreground` vs `foreground` vs `primary` text — used consistently for "secondary", "primary", "accent"?
- Dark-mode contrast: any `text-muted-foreground/40` etc. that becomes unreadable on dark backgrounds?
- Status / destructive / success colors used anywhere — consistent?

### 5. Hover, focus, active states

- Cards: which cards lift on hover? Which add a ring? Which change shadow? Are non-interactive cards visually distinct from clickable ones?
- Every `<a>`, `<button>`, `<Link>`, `motion.a` — does it have `focus-visible:` ring/outline? Tab through the whole site mentally and list any element without a visible focus state.
- Hover transition durations and properties: are `transition-colors` / `transition-all duration-200` / `transition-shadow` mixed for similar interactions?
- Are there any hover effects that fire on touch devices and "stick" because there's no `@media (hover: hover)` guard?

### 6. Iconography

- List every icon size used (`h-3, h-3.5, h-4, h-5`). For each context (action button, contact link, navigation arrow, heading icon, list bullet) — is the icon size consistent?
- Icon stroke width (lucide default 2) — overridden anywhere?
- Are icons aligned with their adjacent text? Specifically: does the cap-height of the icon match the text x-height?

### 7. Motion / animation

- Cross-reference every `initial={{ opacity: 0, y: N }}` and `transition={{ duration: N, ease: ... }}` against `OFFSET` / `DURATION` / `STAGGER` / `EASE` constants in `src/lib/animations.ts`. Flag every literal that bypasses the token system.
- Stagger delays — same children pattern uses the same `staggerChildren` value?
- Viewport margins — same `VIEWPORT.*` used for similar entrance triggers?
- Animations that flash on initial mount (sidebar specifically — verify it does not re-trigger between route navigations)?
- `whileInView` with `once: true` everywhere it should be?

### 8. Layout & responsive

- Open every page at viewport widths 320, 375, 414, 768, 1024, 1280, 1536. Note overflow, awkward wrap, unreadable line lengths, content squashing under sidebar, sticky behavior breaking.
- `ContentContainer` `max-w-4xl`: is content readable at xl viewports without feeling lost?
- Sidebar `lg:w-80 xl:w-96` plus content: any horizontal overflow at narrow lg (1024–1279)?
- Mobile timeline (Experience section) — does the alternating-side layout collapse cleanly to a single column?

### 9. Accessibility (visual + semantic)

- Heading order: any page that skips h1 → h3, or has multiple h1s?
- Color contrast on `text-muted-foreground` over `bg-card` / `bg-muted` in both light and dark mode (target ≥4.5:1 for body, ≥3:1 for large text).
- Touch target sizing — anything below 40×40 that's tappable on mobile (filter pills, action links, theme toggle)?
- Decorative SVGs marked `aria-hidden`?
- Stretched-link cards have `aria-label` on the overlay link?
- `ContactLinks`: does every external link have a visually-hidden context (e.g. "GitHub profile" rather than just "f-z-coder")?

### 10. Visual bugs / polish details

Scan for these specifically:

- Card hover that lifts but the parent flex container doesn't have enough room → causes layout shift.
- Stretched links in cards: action-link buttons stay clickable on top? Test by checking z-index layering on every card variant.
- Tech badge overflow `+N` placement — is it always last and on the same line?
- Skeleton loaders in `/projects` Suspense fallback — does the placeholder match the real content's shape closely enough that there's no jump?
- `AnimatePresence` in `/projects`: does removing a card during filter transition cause neighbours to glitch?
- Hash navigation (`/#experience`, `/#projects`): is `scroll-margin-top` set high enough to clear the sidebar / sticky elements? Test by clicking `BackButton` and checking the scroll position.
- Image priority/lazy: is the sidebar avatar `priority`? Are below-the-fold images lazy?
- Sidebar avatar's gradient blob (`-inset-3` `blur-2xl`) — does it ever clip on the lg breakpoint?
- `ContactSection` mobile layout: divider transitions between `border-t` and `border-l` correctly at the sm breakpoint?
- Theme toggle: does the icon change without flicker on first paint? Hydration mismatch warnings?
- Focus on stretched-link cards: when keyboard-focused, is the visible focus ring drawn around the entire card, not just the invisible overlay?

### 11. Content & data

- Any placeholder / Lorem text remaining?
- Apostrophes / em-dashes — entity-encoded consistently (`&apos;` / `&mdash;` / `—`)?
- Date formats consistent across `experience.ts` (e.g. "Jun 2020 - May 2024" everywhere)?
- Tech name capitalization consistent ("Next.js" vs "NextJS", "TypeScript" vs "Typescript")?
- Data layer single-source-of-truth — anything (URLs, names, descriptions) hardcoded in components that should reference `siteConfig` / `contacts` / etc?

## Method

1. Read **every** page and shared component first. Don't skim. Quote what's actually there.
2. Run `npm run dev` and visit every route — `/`, `/projects`, `/projects?category=fullstack|frontend|backend`, `/projects/<each slug>`, `/experience/<each slug>`, `/<random-404>`. Use browser devtools at the viewport widths listed above. Tab through with keyboard.
3. For each finding, include: file path, line range, current code snippet, severity, recommended fix (with exact replacement classes/values where applicable).
4. Group findings by category (Typography, Spacing, Color, Hover, Motion, Responsive, A11y, Bugs, Content). Order by severity within each.
5. End with a one-paragraph executive summary listing the top 5 fixes by user impact.

## Output format

Markdown report with this skeleton:

```markdown
# Portfolio Design Audit

## Executive summary
(top 5 fixes by impact)

## Critical
- [path:line] description — current → fix

## High
...

## Medium
...

## Low
...

## Verified-good (intentional design choices that look unusual but are correct)
- ...
```

## Constraints

- **Read-only.** No file edits, no commits, no `npm run` scripts that mutate state.
- If something looks broken but you're not 100% sure, mark it **"needs verification"** and note how to verify (e.g. "open at 1280px in Chrome and check…").
- Don't recommend major redesigns. Recommend the smallest fix that resolves the inconsistency.
- Don't suggest changes that would degrade animation feel or add motion the user hasn't requested.

Begin by listing every file you'll read, then proceed.
