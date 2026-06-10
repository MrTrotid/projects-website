# Projects Showcase Website

A modern projects showcase website built with Astro 6, featuring a terminal/command-line aesthetic inspired by [bamanguragain.com.np](https://www.bamanguragain.com.np).

## 🚀 Tech Stack

- **Framework**: Astro 6 (Static Site Generation)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 3
- **Content**: MDX (Markdown with JSX)
- **Icons**: Lucide Icons
- **Animations**: Astro Client Router

## ✨ Features

- **Terminal Aesthetic**: Dark theme with green accents and monospace font
- **Dynamic Project Pages**: Each project has its own sub-page at root level (e.g., `/aq-sentinel`)
- **MDX Content**: Write project details in Markdown with React components support
- **Recently Updated Toggle**: Filter to show 6 most recently updated projects (fetches real-time data from GitHub API during build)
- **Blog-style Writeups**: Detailed explanations section in each project
- **Screenshots Gallery**: Image gallery for each project
- **Challenges & Lessons**: Dedicated sections for learning outcomes
- **Repo & Demo Links**: Direct links to GitHub repos and live demos
- **Tech Stack Display**: Visual tags for technologies used
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Smooth Navigation**: View Transitions API for page transitions

## 📁 Project Structure

```
projects-website/
├── src/
│   ├── content.config.ts      # Content collections schema (Astro 6)
│   ├── content/
│   │   └── projects/          # MDX files for each project
│   │       ├── aq-sentinel.mdx
│   │       ├── certificates-site.mdx
│   │       ├── community-service-tracker.mdx
│   │       ├── flatui.mdx
│   │       ├── meroaushadhi.mdx
│   │       ├── question-paper-extractor.mdx
│   │       ├── sherlock-scramble.mdx
│   │       ├── sherlock-scramble-solver.mdx
│   │       └── trotid-shell-project.mdx
│   ├── layouts/
│   │   └── Layout.astro       # Main layout with Client Router
│   ├── components/
│   │   ├── ui/
│   │   │   ├── Navbar.astro
│   │   │   └── TerminalPrompt.astro
│   │   └── project/
│   │       ├── ProjectCard.astro
│   │       ├── TechStack.astro
│   │       ├── Screenshots.astro
│   │       └── ChallengeBox.astro
│   ├── pages/
│   │   ├── index.astro        # Homepage
│   │   ├── [slug].astro       # Dynamic project detail pages (root level)
│   └── styles/
│       └── global.css         # Terminal theme styles
├── public/
│   ├── images/
│   │   └── projects/         # Project screenshots
│   └── favicon.svg
├── astro.config.mjs           # Astro configuration
├── tailwind.config.ts          # Tailwind theme config
└── package.json
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+
- npm (or yarn/pnpm)

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production (fetches latest GitHub update times)
npm run build

# Preview production build
npm run preview
```

The dev server will be available at `http://localhost:4321`

## 📝 Adding New Projects

1. Create a new MDX file in `src/content/projects/`:

```mdx
---
title: "Project Name"
description: "Brief description of the project"
repo: "https://github.com/username/project-repo"
liveDemo: "https://project-demo.com" # Optional
techStack: ["React", "Node.js", "MongoDB"]
category: ["Web App", "Full Stack"]
date: 2025-01-15
image: "/images/projects/project-name.png"
screenshots:
  - "/images/projects/project-name-1.png"
  - "/images/projects/project-name-2.png"
challenges:
  - "Challenge 1 description"
  - "Challenge 2 description"
lessons:
  - "Lesson 1 learned"
  - "Lesson 2 learned"
featured: true # Set to true to show on homepage
---

# Project Overview

Write your detailed project description here in Markdown...

## Technical Implementation

```javascript
// Code examples
```

## Challenges Faced

Explain the challenges...

## Lessons Learned

Share what you learned...
```

2. Add project images to `public/images/projects/`
3. The project will automatically appear on the listing page and be sortable by recent updates!

## 🎨 Customization

### Theme Colors

Edit `tailwind.config.ts` to change the terminal theme colors:

```typescript
colors: {
  terminal: {
    bg: '#0a0a0f',        // Background color
    bgLight: '#12121a',    // Card/section background
    text: '#e0e0e0',       // Main text color
    green: '#10b981',      // Accent color (terminal green)
    greenDark: '#059669',  // Darker accent
    prompt: '#00ff00',     // Terminal prompt color
  }
}
```

### Font

The project uses JetBrains Mono. To change, edit the Google Fonts link in `src/layouts/Layout.astro` and update `tailwind.config.ts`.

## 📦 Building for Production

```bash
npm run build
```

The built site will be in the `dist/` directory, ready to be deployed to any static hosting service (Vercel, Netlify, GitHub Pages, etc.).

## 📄 License

MIT

---

Built with ❤️ using Astro 6