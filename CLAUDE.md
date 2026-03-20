# cold's blog — Codebase Reference

## Stack

- **Framework:** Astro 5 with MDX support
- **Styling:** Tailwind CSS v4 with custom warm cream/charcoal color scheme
- **Fonts:** Maple Mono (body/mono, self-hosted), Playfair Display (serif headings, self-hosted)
- **Code highlighting:** Expressive Code with vitesse-light/vitesse-dark themes; rehype-pretty-code for markdown
- **Math:** KaTeX via remark-math + rehype-katex
- **Icons:** astro-icon with @iconify-json/lucide

## Commands

- `npm run dev` — dev server on port 1234
- `npm run build` — `astro check && astro build`
- `npm run format` — prettier with tabs, astro/tailwind plugins

## Project Structure

```
src/
  components/         # Astro components
    mdx/              # MDX-specific components (Tabs, Steps, Spoiler, etc.)
    ui/               # Generic UI primitives (Button, Badge, Avatar, etc.)
  content/
    blog/             # Blog posts as .mdx files (each post in its own directory)
    ctfs/             # CTF history entries as .md files
    docs/             # Documentation (components reference)
  layouts/
    Layout.astro      # Main layout — all pages use this
  lib/
    data-utils.ts     # Post fetching, reading time, tags, subpost logic
    utils.ts          # cn(), formatDate(), readingTime(), etc.
    history-utils.ts  # CTF tier/rank calculations
    team-utils.ts     # Team URL mappings
  pages/              # File-based routing
  styles/
    global.css        # Theme colors, font-faces, animations, utilities
    typography.css    # Prose styling for blog content
```

## Design System

### Typography
- **Headings** use `font-serif` (Playfair Display) everywhere — page titles, prose h1-h6, section headers, blog card titles, TOC heading
- **Body text** uses `font-mono` (Maple Mono) — the base font set on the body
- **Layout** uses `max-w-3xl` for all page content, header, and footer alignment
- **Header** is sticky with `bg-background/95 backdrop-blur-sm`, contains circular PFP

### Color Scheme
- Light: warm cream background, deep charcoal text, warm brown primary accent
- Dark: warm dark background, light cream text, lighter brown accent
- All colors use oklch with warm hues (55-75)
- No blue-tinted colors — everything is warm

### Design Principles
- **No left-bar indicators** — never use `border-l-*` for active states, callouts, or blockquotes
- **No card-like bubbles** — avoid bordered containers with shadows around content. Things should flow with spacing and typography
- **Minimal separators** — use negative space, not dividers or ornamental lines
- **Subtle interactions** — hover effects use opacity, translate, and color transitions (not borders/shadows appearing)
- **Tags** render as plain `#tag` text, not pills with backgrounds
- **Metadata separators** use middots (`&middot;`) with `opacity-30`, not pipes or vertical bars
- **Reading time** only shown for active post in subpost navigation, not on blog cards or post headers

### Animations
- `animate-fade-up` — staggered entrance animation using `animation-delay` inline styles
- `.nav-link` — animated underline that slides in from left on hover
- Social icons lift on hover (`-translate-y-0.5`)
- Blog cards lift on hover (`-translate-y-0.5`) with title color shift to primary

## Writing Blog Posts

### File Structure
Each post lives in `src/content/blog/<slug>/index.mdx` with images alongside:
```
src/content/blog/my-post/
  index.mdx
  image1.png
  logo.png
```

### Frontmatter
```yaml
---
title: 'Post Title'
description: 'Brief description'
date: 2025-01-01
tags: ['tag1', 'tag2']
authors: ['cold']
image: ./logo.png
draft: false
---
```

### Writing Style
- Direct, no fluff or fancy language
- Conversational but technical
- Explain the interesting parts, skip the boring setup
- Use code blocks with `title=filename.py` for context
- Use `$$` for display math, `$` for inline math

### MDX Components

All available components are documented in `src/content/docs/components.md`. Key ones:

**Callout** — `import Callout from '@/components/Callout.astro'`
24 variants: note, tip, warning, danger, important, definition, theorem, lemma, proof, corollary, proposition, axiom, conjecture, notation, remark, intuition, recall, explanation, example, exercise, problem, answer, solution, summary

**Tabs + TabPanel** — `import Tabs from '@/components/mdx/Tabs.astro'`
Tabbed content for multiple approaches/languages.

**Steps + Step** — `import Steps from '@/components/mdx/Steps.astro'`
Numbered walkthrough with auto-incrementing counters.

**Spoiler** — `import Spoiler from '@/components/mdx/Spoiler.astro'`
Click-to-reveal for flags, solutions, hints.

**FileTree** — `import FileTree from '@/components/mdx/FileTree.astro'`
Directory structure display with optional file highlighting.

**Aside** — `import Aside from '@/components/mdx/Aside.astro'`
Light highlighted block for tangential notes.

**LinkCard** — `import LinkCard from '@/components/mdx/LinkCard.astro'`
Styled link block for referencing resources.

**Kbd** — `import Kbd from '@/components/mdx/Kbd.astro'`
Keyboard key indicator.

### Built-in Features (no import needed)
- Code blocks: triple backtick with language + optional `title=`
- Math: `$inline$` and `$$display$$`
- Emoji: `:emoji_name:`
- Images: `![alt](./relative-path.png)`
- Blockquotes: `> text` renders as subtle bg-tinted block (no left bar)

## Subposts

Posts can have child posts. A post at `blog/parent/index.mdx` can have subposts at `blog/parent/child.mdx`. The parent's TOC sidebar shows all subposts. Navigation between subposts is automatic.

## CTF History

CTF entries are in `src/content/ctfs/` as `.md` files with frontmatter: name, year, month, placement, team, description, quality, wouldPlayAgain, review, notes, writeupUrl. Tier badges (SS/S/A/B/C/D/F) are auto-calculated from placement rank.
