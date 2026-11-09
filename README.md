# ByteFolio

[![CI](https://github.com/DarkWizardCK-24/ByteFolio/actions/workflows/ci.yml/badge.svg)](https://github.com/DarkWizardCK-24/ByteFolio/actions/workflows/ci.yml)

My personal portfolio: experience, education, certifications, projects and skills in one fast, animated single-page site.

**Live:** https://byte-folio.vercel.app

## What is on the site

- **Hero and stats**: who I am, quick links (GitHub, LinkedIn, resume) and headline numbers.
- **Experience and education**: timeline view of roles and degrees.
- **Projects**: web and Flutter projects as cards, each opening a modal with screenshots, highlights, tech used and links to the live demo and source.
- **Skills and certifications**: grouped by category, with a "currently learning" section.
- **Resume**: downloadable PDF.

## Tech stack

- Next.js (App Router) and React
- TypeScript
- Tailwind CSS
- Framer Motion for animations
- Lucide and React Icons
- ESLint, GitHub Actions (lint and build), Vercel hosting

## Project structure

```
src/
  app/          layout, page, 404 and global styles
  sections/     page sections (Hero, About, Experience, Projects, Skills, ...)
  components/   reusable UI (ProjectCard, ProjectModal, Navbar, TimelineItem, ...)
  lib/          content (data.ts), types and helpers
public/         project screenshots and resume PDF
```

All site content (projects, experience, skills) lives in `src/lib/data.ts`, so updating the site means editing one file.

## Running locally

```bash
npm install
npm run dev
```

Other scripts: `npm run build`, `npm start`, `npm run lint`.

## License

All rights reserved. The code is public for viewing only. See [LICENSE](LICENSE).
