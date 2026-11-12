# SpaceZ Aerospace Website

The website for SpaceZ Aerospace, a student-led aerospace and engineering club at York University in Toronto, Canada. SpaceZ brings students together to learn through hands-on projects involving unmanned aircraft, beginning with FPV drones.

**Build. Test. Learn. Fly.**

## Purpose and current status

This project introduces the club, its practical engineering work, and its student community. The current version includes Home, Projects, About and Get Involved pages, with authentic SpaceZ photography and official branding.

Current features:

- Responsive homepage with a drone-focused introduction and dedicated community section.
- Working navigation between Home, Projects, About, Get Involved, and the homepage community section.
- Projects page covering early UAV/FPV prototype work and preparation toward AEAC 2027, with preparation clearly distinguished from confirmed participation.
- About page with the club’s founding story, values, learning goals and future ambitions.
- Get Involved & Contact page with official email and social links, plus a compact mobile navigation menu.
- Keyboard skip navigation, visible focus indicators, semantic headings, and descriptive image text.
- Responsive WebP photographs and a locally served SpaceZ logo.
- Navy and indigo brand colours with light content surfaces.

“Explore Projects” opens the Projects page. “Join SpaceZ” opens Get Involved, where students can contact the club. The official membership registration link is pending. The site currently has no backend, authentication, contact form, or member database.

## Technology

- React 19 and TypeScript
- Vite 7 for local development and production builds
- Plain CSS for layout, typography, and responsive behaviour
- pnpm with a committed dependency lockfile

## Local development

Prerequisites: Node.js 22.12 or later in the Node 22 line, or a compatible newer LTS release, and pnpm. The project has been built with Node.js 24 and pnpm 11.25.0.

```sh
git clone https://github.com/spacezzzaerospace/spaceZ-website.git
cd spaceZ-website
pnpm install --frozen-lockfile
pnpm dev
```

Open the local URL printed in the terminal. Stop the server with Ctrl+C. The development server binds to the local computer only. No environment variables or API credentials are required.

| Command | Purpose |
| --- | --- |
| `pnpm dev` | Start the local development server |
| `pnpm build` | Check TypeScript and generate the production build in `dist/` |
| `pnpm preview` | Preview an existing production build locally |

To check a production build locally:

```sh
pnpm build
pnpm preview
```

Building or previewing does not deploy the website. The package installation configuration permits the standard esbuild setup script required by Vite.

## Project structure

```text
public/assets/       Official logo and optimized club photographs
src/App.tsx          Page selection, homepage sections, and footer
src/Navigation.tsx   Shared links and responsive navigation disclosure
src/ProjectsPage.tsx Projects page introduction and project list
src/ProjectSection.tsx Reusable project presentation
src/projects.ts      Typed project content and approved status descriptions
src/AboutPage.tsx    About page sections and shared section-heading component
src/about.ts         Values and learning-area content
src/GetInvolvedPage.tsx Contact page and social-link presentation
src/contact.ts       Official email and social destinations
src/main.tsx         React entry point
src/styles.css       Brand palette, typography, and responsive layouts
index.html           Page document and metadata
projects/index.html  Projects document and metadata
about/index.html     About document and metadata
get-involved/index.html Contact document and metadata
vite.config.js       Four production page entry points
package.json         Dependencies and development commands
pnpm-lock.yaml       Resolved dependency versions
pnpm-workspace.yaml  Package installation configuration
tsconfig.json        TypeScript settings
```

## Contributing

Shared navigation lives in `src/Navigation.tsx`. Add links only when their approved destination exists. Mobile navigation uses a native button with `aria-expanded` and `aria-controls`; Escape returns focus to the button, and Tab follows the normal page order. Keep the 900px breakpoint aligned between the component and CSS. When changing navigation, check every page, keyboard controls and resizing across that breakpoint.

Update contact destinations in `src/contact.ts` after confirmation from the club. Verify external links in a browser, especially the Discord invite, and distinguish sign-in screens from confirmed profile content. The email link opens the visitor’s configured email app. Social links use ordinary same-tab navigation. Confirm the approved registration destination before adding it.

For About content, edit the values and learning areas in `src/about.ts`; the introduction, history and future ambitions live in `src/AboutPage.tsx`. Its local `SectionHeading` component keeps section headings consistent. Keep proposed ambitions distinct from approved official statements and existing capabilities. After a content edit, rebuild and review the affected page; there is no content management system.

Project information lives in `src/projects.ts`. To add an approved project, add a complete entry with a unique `id`; `ProjectsPage` generates its section and internal navigation. The optional image field supports projects without approved photography. Keep completed work, planned work, and unconfirmed participation clearly separated.

Home (`/`), Projects (`/projects/`), About (`/about/`) and Get Involved (`/get-involved/`) use ordinary browser links and share React components. Vite builds all four HTML documents, so direct visits and refreshes work on a static server that supports directory index files. A future host must serve the site from its domain root or have the paths adapted before deployment. No routing library is required for these four pages.

Keep changes focused and explain their purpose. Run `pnpm build` and check the affected layout on desktop and mobile before submitting changes. Preserve keyboard navigation, readable contrast, image descriptions, and the club's approved branding. Confirm club facts and technical claims with the appropriate SpaceZ team before adding them.

The repository uses an explicit file allowlist in `.gitignore`. Review that list when deliberately adding source files or approved media. Generated output, credentials, personal notes, and internal club documents do not belong in the public repository.

## Ownership and media

SpaceZ Aerospace retains ownership of the website. The logo and photographs are supplied SpaceZ club assets. Existing attribution must be preserved when contributing. Public access to this repository does not itself grant permission to reuse club branding or photographs; no additional asset licence is granted here.
