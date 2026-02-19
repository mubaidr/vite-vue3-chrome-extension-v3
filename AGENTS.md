# AGENTS.md

Guidelines for AI agents working on this codebase.

## Project Overview

Vue 3 + Vite browser extension (Manifest V3) supporting Chrome, Firefox, and Edge.

## Essential Commands

```bash
npm run dev:chrome    # Development for Chrome
npm run dev:firefox   # Development for Firefox
npm run build         # Production build for both browsers
npm run lint          # ESLint with auto-fix
npm run typecheck     # TypeScript type checking
npm run format        # Format with Prettier
```

## Code Style

- **TypeScript**: Strict mode enabled. Avoid `any` type.
- **Vue**: Use `<script setup lang="ts">` syntax.
- **Semicolons**: No semicolons (Prettier config).
- **Quotes**: Double quotes (Prettier config).
- **Trailing commas**: Always (Prettier config).
- **Indentation**: 2 spaces, no tabs.
- **Console**: Use `console.info`, `console.warn`, or `console.error` (not `console.log`).

## Architecture

### Extension Contexts

- `src/background/` - Service worker (extension lifecycle)
- `src/content-script/` - DOM injection, page interaction
- `src/ui/action-popup/` - Browser action popup
- `src/ui/options-page/` - Extension options page
- `src/ui/side-panel/` - Chrome side panel
- `src/ui/devtools-panel/` - DevTools panel
- `src/ui/setup/` - Install/update wizard
- `src/offscreen/` - Offscreen documents

### Shared Code

- `src/components/` - Reusable Vue components
- `src/composables/` - Vue composables (hooks)
- `src/stores/` - Pinia state stores
- `src/utils/` - Utility functions
- `src/types/` - TypeScript definitions

### File-Based Routing

UI pages auto-register from `src/ui/<context>/pages/`. Create `.vue` files there to add routes.

## Conventions

### Components

- Use PascalCase for component files: `MyComponent.vue`
- Place shared components in `src/components/`
- Context-specific components stay in their UI folder

### Composables

- Prefix with `use`: `useTheme.ts`, `useBrowserStorage.ts`
- Export functions as named exports

### Stores

- Suffix with `.store.ts`: `options.store.ts`
- Use Pinia with Composition API style

### Imports

- Auto-imports enabled for Vue functions, stores, and components
- Use `~/` for project root imports
- Use `src/` for src-relative imports

## Before Committing

1. Run `npm run lint` - Fix all errors
2. Run `npm run typecheck` - No type errors
3. Test in both Chrome and Firefox if making cross-browser changes

## Browser APIs

- Use `chrome.*` APIs directly (types from `chrome-types`)
- For cross-browser compatibility, use `webextension-polyfill`

## State Management

- Use Pinia stores for global state
- Use `useBrowserStorage` composable for persistent storage synced with `chrome.storage`
- Use `useBrowserLocalStorage` for local-only persistent storage

## Communication

- Use `webext-bridge` for messaging between extension contexts
- Background script handles events and coordinates between contexts
