# Vite Vue 3 Browser Extension (Manifest V3)

[![Build Status](https://github.com/mubaidr/vite-vue3-browser-extension-v3/actions/workflows/build.yml/badge.svg)](https://github.com/mubaidr/vite-vue3-browser-extension-v3/actions/workflows/build.yml)

A modern, opinionated starter template for building browser extensions with [Vite](https://vitejs.dev/), [Vue 3](https://vuejs.org/), and Manifest V3. Supports Chrome, Firefox, Edge, and other Chromium-based browsers.

## Features

- **Multi-Context Architecture**: Background script, popup, options page, content script, devtools, side panel, and offscreen pages
- **File-Based Routing**: Auto-registered UI pages from `src/ui/*/pages`
- **Vue 3 Ecosystem**: Composition API, Pinia for state management, Vue Router
- **Rich UI Components**: Nuxt/UI v3, shadcn-vue, Tailwind CSS 4, Lucide icons
- **TypeScript**: Full type safety with strict TypeScript configuration
- **i18n Ready**: Internationalization support with vue-i18n
- **WebExtension Utilities**: `webext-bridge` for cross-context communication, `webextension-polyfill` for browser API compatibility
- **Developer Experience**: Hot reload, ESLint, Prettier, TypeCheck
- **AI-Ready**: Includes `AGENTS.md` with coding guidelines for AI assistants

## Quick Start

```bash
npx degit mubaidr/vite-vue3-browser-extension-v3 my-webext
cd my-webext
npm install
npm run dev
```

## Commands

| Command                 | Description                                   |
| ----------------------- | --------------------------------------------- |
| `npm run dev`           | Start development for both Chrome and Firefox |
| `npm run dev:chrome`    | Start development for Chrome                  |
| `npm run dev:firefox`   | Start development for Firefox                 |
| `npm run build`         | Build extension for both Chrome and Firefox   |
| `npm run build:chrome`  | Build extension for Chrome only               |
| `npm run build:firefox` | Build extension for Firefox only              |
| `npm run lint`          | Run ESLint with auto-fix                      |
| `npm run typecheck`     | Run TypeScript type checking                  |
| `npm run format`        | Format code with Prettier                     |

## Loading the Extension

### Chrome / Edge

1. Navigate to `chrome://extensions`
2. Enable **Developer mode** (toggle in top-right)
3. Click **Load unpacked**
4. Select the `dist/chrome` folder

### Firefox

1. Navigate to `about:debugging#/runtime/this-firefox`
2. Click **Load Temporary Add-on...**
3. Select any file in the `dist/firefox` folder

## Project Structure

```
src/
├── background/       # Background service worker
├── components/      # Shared Vue components
├── composables/     # Vue composables (hooks)
├── content-script/  # Content scripts
├── devtools/        # DevTools panel
├── offscreen/       # Offscreen documents
├── stores/          # Pinia state stores
├── ui/              # UI entrypoints (popup, options, etc.)
│   └── */pages/     # File-based routing pages
├── types/           # TypeScript definitions
└── utils/           # Shared utilities
```

## Documentation

See [docs/DEVELOPMENT.md](docs/DEVELOPMENT.md) for architecture, design principles, folder structure, and best practices.

## Browser Support

- Chrome (Manifest V3)
- Firefox (Manifest V2/V3)
- Edge
- Other Chromium-based browsers

## Contributing

Contributions are welcome! Please open issues or submit pull requests for improvements or new features.

## License

MIT

## Support

If you find this project useful, please consider [supporting the author](https://www.patreon.com/c/mubaidr) and starring ⭐ the repository.
