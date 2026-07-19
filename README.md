# Buttonix - Modern React & Next.js Button Package

A beautiful, highly customizable, and animated React button component package. Features smooth hover slide effects, glassmorphism, gradients, neumorphism, and more. 

Built with Tailwind CSS, `class-variance-authority`, and fully compatible with **React 18/19** and **Next.js App Router**.

[![npm version](https://img.shields.io/npm/v/buttonix.svg)](https://www.npmjs.com/package/buttonix)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Installation
```bash
npm install buttonix
```

## Setup & Next.js Compatibility

This package works flawlessly in React and Next.js out of the box. Simply import the component and its styles.

```tsx
// 1. Import the Button component
import { Button } from 'buttonix';

// 2. Import the compiled styles (Critical for Next.js and standard React apps)
import 'buttonix/dist/style.css'; 

export default function App() {
  return (
    <Button variant="gradient" size="lg">
      Click Me!
    </Button>
  );
}
```

*Note: The `Button` component internally uses the `"use client";` directive, so it is fully safe to use within Next.js App Router server components without throwing context errors.*

## Modern Button Variants

Buttonix comes with a variety of modern design variants. 

### Usage Examples

```tsx
// Default solid button with slide animation
<Button variant="default">Save</Button>

// Destructive red button
<Button variant="destructive">Delete</Button>

// Frosted Glassmorphism (great for overlaying on images)
<Button variant="glass" animated={true}>Learn More</Button>

// Vibrant Gradient
<Button variant="gradient">Get Started</Button>

// Neumorphic Soft-UI
<Button variant="neumorphic" color="#e0e5ec">Submit</Button>

// Ghost (transparent, background on hover)
<Button variant="ghost">Cancel</Button>

// Outline
<Button variant="outline">Settings</Button>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'default'` \| `'destructive'` \| `'outline'` \| `'ghost'` \| `'glass'` \| `'gradient'` \| `'neumorphic'` | `'default'` | The design style of the button. |
| `size` | `'default'` \| `'sm'` \| `'lg'` \| `'full'` | `'default'` | Size of the button. |
| `direction` | `'left'` \| `'right'` | `'left'` | Direction of the slider animation. |
| `animated` | `boolean` | `true` | Whether to show the hover slider animation. |
| `color` | `string` | — | Custom hex/rgb color for the slider background (e.g. `"#9333ea"`). |
| `className` | `string` | — | Additional CSS classes (e.g. Tailwind utility classes). |

## Advanced Features

### Custom Size & Direction
```tsx
<Button size="lg" direction="right">Next Step →</Button>
<Button size="sm" direction="left">← Back</Button>
<Button size="full">Full Width Block</Button>
```

### Custom Slider Color
You can override the slider's background color by passing any valid CSS color to the `color` prop.
```tsx
<Button variant="default" color="#ff0055">
  Custom Colored Slider
</Button>
```

## Live Demo

[View Demo](https://stackminds.netlify.app/npm/buttonix)

## License

MIT © [Mahedul Islam Rohan](https://github.com/rohan26ir)

## Links

- [GitHub](https://github.com/rohan26ir/buttonix-react-button)
- [npm](https://www.npmjs.com/package/buttonix)
- [Issues](https://github.com/rohan26ir/buttonix-react-button/issues)