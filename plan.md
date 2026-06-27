# Implementation Plan: Nuhu Ibrahim - Premium Data Analyst Portfolio

Build a world-class, modern, responsive personal portfolio for Nuhu Ibrahim, a Data Analyst & M&E Officer. The design will focus on a premium corporate aesthetic with glassmorphism, smooth animations, and a dashboard-inspired layout.

## Scope Summary
- **Visual Identity:** Navy Blue (#0B1F3A), Emerald Green (#16A34A), and Light Gray accents. Glassmorphism, rounded cards, and high-end typography (Inter/Poppins).
- **Core Sections:** Home (Hero), About, Services, Skills (Progress bars), Software & Tools, Experience (Timeline), Featured Projects, Certifications, Testimonials, Blog, and Contact.
- **Interactivity:** Framer Motion animations (fade-ins, counters, card hover), smooth scroll, and sticky navigation.
- **Data Persistence:** None (Static frontend/Client-side).

## Affected Areas
- `src/App.tsx`: Main entry and layout structure.
- `src/components/`: New components for sections (Hero, About, etc.) and UI elements (Cards, Timelines).
- `src/index.css`: Tailwind layer updates for custom colors and glassmorphism utilities.
- `public/assets/`: (Mocked) images for project hero shots and profile picture.

## Assumptions & Open Questions
- **Profile Image:** The user mentioned an "uploaded image". Since I cannot see it, I will use a high-quality placeholder image with the described background removal and office blur effect styling applied via CSS/Masks.
- **Content:** I will use the provided copy for Nuhu Ibrahim's bio, skills, and projects.
- **Tech Stack:** React, Tailwind CSS (v4 style as per `index.css`), Framer Motion, Lucide React.

## Phases

### Phase 1: Foundation & Theme Setup
- Configure Tailwind colors (Navy Blue, Emerald Green).
- Set up typography and global glassmorphism utility classes in `index.css`.
- Create a Layout wrapper with sticky navigation and scroll progress.
- **Owner:** `frontend_engineer`

### Phase 2: Hero & About Sections
- Build the Hero section with animated stats (50+ Projects, etc.) and social icons.
- Implement "About Me" with a career timeline.
- **Owner:** `frontend_engineer`

### Phase 3: Services & Skills
- Create Service cards with professional icons.
- Build the Skills section with animated progress bars for Power BI, Excel, etc.
- Logo grid for Software & Tools.
- **Owner:** `frontend_engineer`

### Phase 4: Experience & Projects
- Implementation of the professional Experience timeline.
- Featured Project cards with hover effects and tech badges.
- **Owner:** `frontend_engineer`

### Phase 5: Certifications, Testimonials & Blog
- Grid of certification cards.
- Testimonial carousel/grid using client cards.
- Blog preview section.
- **Owner:** `frontend_engineer`

### Phase 6: Contact & Footer
- Modern contact form with validation (client-side).
- Professional footer with quick links and branding.
- Final Polish: Framer Motion transitions and responsive checks.
- **Owner:** `frontend_engineer`

## Execution Handoff

**Plan status:** ready

**Dispatch order:**
1. frontend_engineer — Build the entire portfolio structure and interactive components.

**Per-agent instructions:**
### 1. frontend_engineer
- **Phases:** 1, 2, 3, 4, 5, 6
- **Scope:** Build the complete portfolio for Nuhu Ibrahim using React, Tailwind, and Framer Motion. 
- **Colors:** Primary: `#0B1F3A` (Navy), Accent: `#16A34A` (Green).
- **Typography:** Use Inter or Poppins.
- **Components to Create:**
    - `Navbar.tsx` (Glassmorphism, sticky)
    - `Hero.tsx` (Animated stats, big typography)
    - `SectionHeading.tsx` (Reusable styled headings)
    - `ServiceCard.tsx`, `ProjectCard.tsx`, `SkillBar.tsx`
    - `Timeline.tsx` (For Experience and About)
    - `ContactForm.tsx`
- **Files:** `src/App.tsx`, `src/index.css`, new components in `src/components/`
- **Depends on:** none
- **Acceptance criteria:**
    - Responsive on mobile/tablet/desktop.
    - All content from the prompt is included accurately.
    - Smooth scroll and fade-in animations active.
    - Glassmorphism effects applied to cards and navbar.
    - Professional corporate "Agency" feel achieved.
