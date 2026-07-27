# Build & Deployment

## Development

```sh
npm install
npm run dev
```

## Adding an app card

App cards are declared in [`src/apps.ts`](../src/apps.ts). To add a new app,
append an entry with its name, description, target URL, and a logo (an SVG
or PNG placed under `src/assets/logos/`).

## Type checking

```sh
npm run typecheck
```

## Storybook

Component stories live under [`stories/`](../stories).

```sh
npm run storybook
npm run build-storybook
```

## Tests

End-to-end tests (Playwright) live under
[`tests/integration/`](../tests/integration).

```sh
npx playwright install --with-deps chromium
npm run test:e2e
```

## Build

```sh
npm run build
npm run preview
```

## Deployment

Pushes to `main` automatically build and deploy the site to GitHub Pages via the workflow in `.github/workflows/deploy.yml`.
