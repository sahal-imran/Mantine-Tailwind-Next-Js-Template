# Mantine, Tailwind CSS and Next.js template

This is a template for [Next.js](https://nextjs.org/) app (src directory) router + [Mantine](https://mantine.dev/) with tailwind css.

This template comes with the following features:

- [PostCSS](https://postcss.org/) with [mantine-postcss-preset](https://mantine.dev/styles/postcss-preset)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Jest](https://jestjs.io/) setup with [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)
- ESLint setup with prettier

## npm scripts

### Build and dev scripts

- `dev` – start dev server
- `start` – start production server
- `build` – bundle application for production
- `analyze` – analyzes application bundle with [@next/bundle-analyzer](https://www.npmjs.com/package/@next/bundle-analyzer)

### Testing scripts

- `typecheck` – checks TypeScript types
- `lint` – runs ESLint
- `format:check` – checks files with Prettier
- `jest` – runs jest tests
- `jest:watch` – starts jest watch
- `test` – runs `jest`, `format:check`, `lint` and `typecheck` scripts

### Other scripts

- `format:write` – formats all files with Prettier
