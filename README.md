# SpaceZ Aerospace Website

The website for SpaceZ Aerospace, a student-led aerospace and engineering club at York University in Toronto, Canada. SpaceZ brings students together to learn through hands-on projects involving unmanned aircraft, beginning with FPV drones.

**Build. Test. Learn. Fly.**

## Purpose and current status

This project introduces the club, its practical engineering work, and its student community. The current version is a homepage in development, with authentic SpaceZ photography and official branding.

Current features:

- Responsive homepage with a drone-focused introduction and dedicated community section.
- Working same-page navigation between Home and Our community.
- Keyboard skip navigation, visible focus indicators, semantic headings, and descriptive image text.
- Responsive WebP photographs and a locally served SpaceZ logo.
- Navy and indigo brand colours with light content surfaces.

Project information and membership registration are not implemented yet. “Explore Projects” and “Join SpaceZ” are clearly labelled coming-soon text, not active links. The site currently has no backend, authentication, contact form, or member database.

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
src/App.tsx          Navigation, homepage sections, and footer
src/main.tsx         React entry point
src/styles.css       Brand palette, typography, and responsive layouts
index.html           Page document and metadata
package.json         Dependencies and development commands
pnpm-lock.yaml       Resolved dependency versions
pnpm-workspace.yaml  Package installation configuration
tsconfig.json        TypeScript settings
```

## Contributing

Keep changes focused and explain their purpose. Run `pnpm build` and check the affected layout on desktop and mobile before submitting changes. Preserve keyboard navigation, readable contrast, image descriptions, and the club's approved branding. Confirm club facts and technical claims with the appropriate SpaceZ team before adding them.

The repository uses an explicit file allowlist in `.gitignore`. Review that list when deliberately adding source files or approved media. Generated output, credentials, personal notes, and internal club documents do not belong in the public repository.

## Ownership and media

SpaceZ Aerospace retains ownership of the website. The logo and photographs are supplied SpaceZ club assets. Existing attribution must be preserved when contributing. Public access to this repository does not itself grant permission to reuse club branding or photographs; no additional asset licence is granted here.
