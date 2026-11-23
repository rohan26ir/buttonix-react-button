# Buttonix — 22 Animated React Button Variants

[![npm version](https://img.shields.io/npm/v/buttonix.svg?style=flat-square)](https://www.npmjs.com/package/buttonix)
[![npm downloads](https://img.shields.io/npm/dm/buttonix.svg?style=flat-square)](https://www.npmjs.com/package/buttonix)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](https://opensource.org/licenses/MIT)
[![CI](https://github.com/rohan26ir/buttonix-react-button/actions/workflows/ci.yml/badge.svg)](https://github.com/rohan26ir/buttonix-react-button/actions/workflows/ci.yml)
[![TypeScript](https://img.shields.io/badge/TypeScript-strict-blue?style=flat-square)](https://www.typescriptlang.org/)

A production-ready, accessible React button component library with **22 distinct animated variants** — from subtle transitions to glassmorphism, neon, aurora, 3D-press, shimmer, ripple, and more.

Built with **Tailwind CSS v4**, [`class-variance-authority`](https://cva.style/), strict TypeScript, and full `prefers-reduced-motion` support.

> [!IMPORTANT]
> **v2.0 is a major release.** The `variant` values have changed (e.g. `default` → `solid`). See the [migration guide](#migrating-from-v1) below.

---

## ✨ Features

- **22 polished variants** with smooth CSS animations
- **`prefers-reduced-motion` respected** everywhere — no layout shift or disorienting flashes for users with motion sensitivity
- **Fully accessible** — `type="button"` default, `aria-disabled`, `aria-busy`, keyboard `focus-visible` rings, `React.forwardRef`
- **Loading / success / error states** with built-in spinner and icons
- **Left & right icon slots**, icon-only size
- **TypeScript strict mode** — all props typed, no `any`
- **Zero added runtime** beyond React — only CVA + clsx + tailwind-merge (all utility-only, tree-shakeable)
- **Supply chain hardened** — no lifecycle install scripts, OIDC-based npm publishing, pinned GitHub Actions SHAs

---

## Installation

```bash
npm install buttonix
```

> **Peer dependencies** (install separately if not already present):
> ```bash
> npm install react react-dom
> ```

---

## Setup

### React (Vite, CRA, etc.)

```tsx
// main.tsx or App.tsx — import styles once at the root
import 'buttonix/style.css';
import { Button } from 'buttonix';
```

### Next.js App Router

```tsx
// app/layout.tsx
import 'buttonix/style.css';

// In any Server or Client component:
import { Button } from 'buttonix';
// The component internally carries "use client" — safe to import anywhere.
```

### Tailwind CSS v4 (required for Tailwind classes to work)

Buttonix ships a pre-compiled `style.css` with all animations. If you are also using Tailwind CSS v4 in your own project, the classes will coexist automatically. No additional configuration is needed.

---

## Quick Start

```tsx
import { Button } from 'buttonix';
import 'buttonix/style.css';

export default function App() {
  return (
    <div className="flex flex-wrap gap-4 p-8">
      <Button variant="solid">Save</Button>
      <Button variant="shimmer" size="lg">Get Started</Button>
      <Button variant="ripple" onClick={() => alert('ripple!')}>Click Me</Button>
      <Button variant="gradient-shift">Animated Gradient</Button>
      <Button variant="neon">Neon Glow</Button>

      {/* Loading state */}
      <Button variant="solid" isLoading loadingText="Saving…">Save</Button>

      {/* Success / Error feedback */}
      <Button variant="solid" state="success">Saved!</Button>
      <Button variant="solid" state="error">Failed</Button>

      {/* With icons */}
      <Button
        variant="outline"
        leftIcon={<span>📧</span>}
        rightIcon={<span>→</span>}
      >
        Send Email
      </Button>

      {/* Icon-only */}
      <Button variant="ghost" size="icon" aria-label="Delete item">
        🗑
      </Button>
    </div>
  );
}
```

---

## 22 Button Variants

| # | Variant | Description |
|---|---------|-------------|
| 1 | `solid` | Filled background, subtle lift on hover. The default. |
| 2 | `outline` | Transparent with a colored border; fills on hover. |
| 3 | `ghost` | No background; tinted fill on hover. |
| 4 | `soft` | Lightly tinted background, slightly darker on hover. |
| 5 | `destructive` | Red filled for danger / delete actions. |
| 6 | `gradient` | Purple→pink static gradient with shadow lift on hover. |
| 7 | `gradient-shift` | Continuously animated rainbow gradient (paused for `prefers-reduced-motion`). |
| 8 | `glass` | Frosted glassmorphism — `backdrop-blur` with semi-transparent border. |
| 9 | `neumorphic` | Soft-UI emboss with shadow highlighting; inverts to inset on press. |
| 10 | `shimmer` | Solid fill with a sweeping light sheen that plays on hover. |
| 11 | `border-beam` | Rotating conic-gradient border beam with fill on hover. |
| 12 | `glow` | Glowing outer shadow pulses on hover. |
| 13 | `magnetic` | Bold lift + scale on hover, as if magnetically attracted to the cursor. |
| 14 | `ripple` | Material Design-style radial ripple emanates from click point. |
| 15 | `bounce` | Spring-bounce animation on press/active. |
| 16 | `jelly` | Elastic jelly squash & stretch on press/active. |
| 17 | `slide-fill` | Background slides in from the left on hover. |
| 18 | `underline-reveal` | Underline expands outward from center on hover. |
| 19 | `split-reveal` | A hidden icon slides in from the right on hover. |
| 20 | `3d-press` | Genuine 3D push-down with a bottom shadow that collapses on press. |
| 21 | `neon` | Cyberpunk-style cyan glow on black; inverts on hover. |
| 22 | `aurora` | Slowly shifting northern-lights gradient (paused for `prefers-reduced-motion`). |

---

## Props Reference

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `ButtonVariant` | `"solid"` | Visual & animation style (see table above). |
| `size` | `ButtonSize` | `"default"` | `"xs"` \| `"sm"` \| `"default"` \| `"lg"` \| `"xl"` \| `"icon"` |
| `isLoading` | `boolean` | `false` | Shows spinner, sets `aria-busy`, disables button. |
| `loadingText` | `string` | `"Loading…"` | Screen-reader text announced while loading. |
| `state` | `ButtonState` | `"idle"` | `"idle"` \| `"loading"` \| `"success"` \| `"error"` — shows state icon. |
| `leftIcon` | `ReactNode` | — | Icon rendered to the left of the label. |
| `rightIcon` | `ReactNode` | — | Icon rendered to the right of the label. |
| `color` | `string` | — | CSS color to override accent areas (shimmer sweep, glow, ripple color). |
| `disableAnimation` | `boolean` | `false` | Disables all transitions/animations on this button specifically. |
| `disabled` | `boolean` | — | Standard HTML disabled; also sets `aria-disabled`. |
| `className` | `string` | — | Merge additional Tailwind or custom CSS classes. |
| `type` | `"button"` \| `"submit"` \| `"reset"` | `"button"` | HTML button type (defaults to `"button"` to prevent accidental form submission). |
| `ref` | `Ref<HTMLButtonElement>` | — | Forwarded ref via `React.forwardRef`. |
| `...rest` | `ButtonHTMLAttributes` | — | All standard `<button>` HTML attributes are passed through. |

### Type aliases

```ts
type ButtonVariant =
  | 'solid' | 'outline' | 'ghost' | 'soft' | 'destructive'
  | 'gradient' | 'gradient-shift' | 'glass' | 'neumorphic'
  | 'shimmer' | 'border-beam' | 'glow' | 'magnetic'
  | 'ripple' | 'bounce' | 'jelly' | 'slide-fill'
  | 'underline-reveal' | 'split-reveal' | '3d-press' | 'neon' | 'aurora';

type ButtonSize = 'xs' | 'sm' | 'default' | 'lg' | 'xl' | 'icon';

type ButtonState = 'idle' | 'loading' | 'success' | 'error';
```

---

## Loading, Success & Error States

```tsx
// Loading — shows spinner, disables interaction, announces to screen readers
<Button isLoading loadingText="Submitting form…">Submit</Button>

// Success
<Button state="success">Saved!</Button>

// Error
<Button state="error">Failed — Retry</Button>

// Controlled example
const [state, setState] = useState<ButtonState>('idle');

async function handleSubmit() {
  setState('loading');
  try {
    await submitData();
    setState('success');
  } catch {
    setState('error');
  } finally {
    setTimeout(() => setState('idle'), 2000);
  }
}

<Button state={state} isLoading={state === 'loading'} onClick={handleSubmit}>
  Save
</Button>
```

---

## Icon Slots

```tsx
import { Button } from 'buttonix';

// Left icon
<Button variant="solid" leftIcon={<MailIcon />}>Send Email</Button>

// Right icon
<Button variant="outline" rightIcon={<ArrowRightIcon />}>Next Step</Button>

// Both
<Button leftIcon={<LockIcon />} rightIcon={<ChevronIcon />}>Sign In</Button>

// Icon-only (always provide aria-label)
<Button size="icon" variant="ghost" aria-label="Close dialog">
  <XMarkIcon />
</Button>
```

---

## Custom Styling & Color Override

```tsx
// Add any Tailwind utility classes
<Button variant="solid" className="rounded-full w-full">Full-width pill</Button>

// Override accent color (affects shimmer sweep, glow halo, ripple wave)
<Button variant="shimmer" color="rgba(234, 88, 12, 0.6)">Orange Shimmer</Button>
<Button variant="glow" color="#f59e0b">Amber Glow</Button>
```

---

## Extending `buttonVariants` with CVA

The underlying CVA schema is exported if you need to compose your own variants:

```tsx
import { buttonVariants } from 'buttonix';
import { cva } from 'class-variance-authority';

const myCustomVariants = cva(
  buttonVariants({ variant: 'solid', size: 'default' }),
  {
    variants: {
      theme: {
        brand: 'bg-brand-600 hover:bg-brand-700',
        muted: 'bg-gray-500 hover:bg-gray-600',
      },
    },
  }
);
```

---

## Accessibility & Reduced Motion

### Keyboard Navigation

- Every variant exposes a **`focus-visible` ring** (styled with Tailwind's `focus-visible:ring-*` classes) that is **only visible for keyboard navigation** (not on mouse click), following WCAG 2.1 SC 2.4.7.
- Default `type="button"` prevents accidental form submissions.
- `disabled` buttons also receive `aria-disabled="true"` for screen readers.
- `isLoading` buttons receive `aria-busy="true"` and a screen-reader `aria-label` from `loadingText`.
- Icon-only buttons (`size="icon"`) must receive a descriptive `aria-label`.

### `prefers-reduced-motion`

All CSS animations defined by Buttonix wrap their motion in `@keyframes` rules and are explicitly paused or simplified via `@media (prefers-reduced-motion: reduce)`:

| Variant | Reduced-motion behavior |
|---------|------------------------|
| `gradient-shift`, `aurora` | Animation paused; falls back to static gradient |
| `shimmer` | Shimmer `::after` pseudo-element hidden |
| `border-beam` | Rotating beam animation paused; static border shown instead |
| `ripple` | Ripple wave DOM element is not injected |
| `bounce`, `jelly` | Active animations skipped (no `animation` applied) |
| `slide-fill`, `underline-reveal`, `split-reveal` | Transitions set to `none` |
| Spinner | Rotational `animation` removed; dashed border style used as indicator |
| All hover/translate effects | Tailwind's `motion-reduce:transition-none` applied to base |

---

## Supply Chain Security

### No install lifecycle hooks

`package.json` has **no** `preinstall`, `install`, or `postinstall` scripts. The only scripts present are `build`, `typecheck`, `test`, `test:coverage`, `lint`, and `prepublishOnly`.

### No `eval`, no remote fetches, no dynamic code

The source code and build scripts contain no `eval()`, `new Function()`, `innerHTML`, `dangerouslySetInnerHTML`, dynamic `import()` of remote URLs, or external asset fetches.

### Minimal runtime dependencies

| Package | Purpose | Runtime? |
|---------|---------|---------|
| `class-variance-authority` | Variant class generation | ✅ Yes |
| `clsx` | Conditional class merging | ✅ Yes |
| `tailwind-merge` | Tailwind conflict resolution | ✅ Yes |
| `react`, `react-dom` | Peer — not bundled | (peer) |

All build tools (`vite`, `tailwindcss`, `typescript`, etc.) are **devDependencies** only.

### OIDC-based npm publishing (no stored tokens)

The release workflow (`.github/workflows/release.yml`) uses **npm Trusted Publishing via OIDC** (`id-token: write` + `--provenance`). No long-lived `NPM_TOKEN` is required after enabling Trusted Publishing on [npmjs.com](https://www.npmjs.com/settings/tokens).

**Verifying a published package:**
```bash
# Verify SLSA provenance attestation
npm audit signatures buttonix

# Inspect what files are included before installing
npm pack buttonix --dry-run
```

### Pinned GitHub Actions SHAs

All `uses:` entries in CI/CD workflows are pinned to full commit SHAs with version comments — not floating tags like `@v4` — to prevent tag-mutable supply chain attacks.

---

## Migrating from v1

| v1 | v2 |
|----|-----|
| `variant="default"` | `variant="solid"` |
| `direction="left\|right"` prop | Removed (use `leftIcon`/`rightIcon` instead) |
| `animated={false}` | `disableAnimation={true}` |
| `color` prop | Still supported, now controls accent color CSS vars |
| `size="full"` | Removed — use `className="w-full"` instead |
| Import `dist/style.css` | Import `buttonix/style.css` |

---

## Development

```bash
git clone https://github.com/rohan26ir/buttonix-react-button.git
cd buttonix-react-button

npm install

# Build
npm run build

# Typecheck
npm run typecheck

# Tests
npm test

# Tests with coverage
npm run test:coverage
```

---

## Review

### Strengths

- **Genuine zero install hooks** — `package.json` verified clean; npm ci `--ignore-scripts` is enforced in CI.
- **22 semantically distinct variants** — not just color swaps; each has a unique interaction model.
- **Full `prefers-reduced-motion` coverage** — every animated CSS class has a `@media (prefers-reduced-motion: reduce)` counterpart that either statics or hides the motion.
- **TypeScript strict mode throughout** — `strict: true`, `noUnusedLocals`, `noUnusedParameters` are all enabled.
- **CVA-based architecture** — variant logic is declarative, composable, and type-safe; consumers can extend it.
- **forwardRef + clean prop spread** — standard React integration patterns; works with form libraries and animation wrappers.
- **OIDC provenance publishing** — releases are verifiable via `npm audit signatures`.

### Risks / Trade-offs

- **Runtime CSS dependency** — consumers must import `buttonix/style.css`. This is unavoidable with Tailwind v4's CSS-first approach but is a one-liner setup step.
- **CVA/clsx/tailwind-merge in `dependencies`** — these are small utilities (combined ~15KB) but are not zero. They are intentionally runtime because class generation happens in the browser. If this matters, `buttonVariants` is exported so you can call it at build time.
- **Tailwind class purging** — consumers using Tailwind v3 (not v4) need to add `node_modules/buttonix/dist/**` to their `content` paths for custom class overrides to work. The shipped `style.css` works without this.
- **Ripple is imperative DOM mutation** — `createRipple` appends/removes a `<span>` directly. This avoids React re-renders for performance, but is not SSR-compatible (guarded by `typeof window !== 'undefined'`).
- **`aurora` and `gradient-shift` are always-on animations** — they will consume GPU compositing layers on mobile. Consumers may want to apply `disableAnimation` on low-end targets.
- **No visual storybook/playground** — the demo URL points to an external site. A Storybook or interactive playground within the repo would significantly lower the friction for contributors and users exploring variants.

### Pre-Publish Checklist

- [ ] `npm run typecheck` — passes clean (zero errors)
- [ ] `npm run test` — all tests pass
- [ ] `npm run build` — dist artifacts generated without warnings
- [ ] `package.json` `version` field bumped and matches the git tag
- [ ] GitHub repo → Settings → Environments → `npm-publish` created with Trusted Publishing enabled on npmjs.com
- [ ] `npm audit --audit-level=high` — no high/critical advisories
- [ ] README demo URL updated if homepage changes
- [ ] `CHANGELOG.md` or GitHub Release notes written
- [ ] Final `npm pack --dry-run` to confirm only `dist/`, `README.md`, and `LICENSE` are published

---

## License

MIT © [Mahedul Islam Rohan](https://github.com/rohan26ir)

---

## Links

- [GitHub](https://github.com/rohan26ir/buttonix-react-button)
- [npm](https://www.npmjs.com/package/buttonix)
- [Issues](https://github.com/rohan26ir/buttonix-react-button/issues)
- [Live Demo](https://stackminds.netlify.app/npm/buttonix)
