# Buttonix

<p align="center">
  <strong>Beautiful animated React buttons with effortless customization</strong>
</p>

<p align="center">
  A lightweight, customizable React button component featuring smooth hover slide animations, built with <strong>Tailwind CSS</strong> and <strong>class-variance-authority</strong>.
</p>

<p align="center">
  <img src="https://via.placeholder.com/800x300/ffffff/000000?text=Buttonix+Hover+Animation+Demo" alt="Buttonix hover animation preview" width="800"/>
  <br/>
  <em>Hover over the buttons to see the slide-in effect with animated arrow icons</em>
</p>

<p align="center">
  <a href="#features">Features</a> •
  <a href="#installation">Installation</a> •
  <a href="#quick-start">Quick Start</a> •
  <a href="#props">Props</a> •
  <a href="#examples">Examples</a> •
  <a href="#demo">Demo</a>
</p>

---

## ✨ Features

- 🎨 **Smooth Animations** – Buttery-smooth left/right slide effects on hover
- 🎭 **Three Built-in Variants** – `default`, `destructive`, and `outline` styles
- ⬅️ **Directional Control** – Choose left or right arrow placement and slide direction
- 🌈 **Custom Colors** – Override slide colors with any Tailwind background class
- 🔧 **Fully Customizable** – Complete `className` override support for ultimate flexibility
- 📦 **Lightweight** – Only ~3–5 kB gzipped
- ♿ **Accessible** – Built with focus styles and semantic HTML
- 🎯 **TypeScript Ready** – Full type definitions included
- ⚡ **Zero Dependencies** – Except React and Tailwind CSS

---

## 📦 Installation

```bash
npm install buttonix
```

**Or with your preferred package manager:**

```bash
# Yarn
yarn add buttonix

# pnpm
pnpm add buttonix

# Bun
bun add buttonix
```

### Requirements

- **React** 18+ or 19+
- **Tailwind CSS** v3+

---

## 🚀 Quick Start

### 1. Set Up Tailwind CSS

If you haven't already, configure Tailwind in your project:

```javascript
// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

```css
/* src/index.css or globals.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Import the styles in your main file:

```tsx
// src/main.tsx or src/index.tsx
import './index.css';
```

### 2. Import and Use Buttonix

```tsx
import { Button } from 'buttonix';

function App() {
  return (
    <div className="p-8">
      <Button>Click Me</Button>
    </div>
  );
}

export default App;
```

That's it! You now have a beautiful animated button. 🎉

---

## 🎨 Examples

### Basic Usage

```tsx
import { Button } from 'buttonix';

function BasicExample() {
  return (
    <div className="flex gap-4">
      {/* Default variant with left slide */}
      <Button>Go Back</Button>

      {/* Right direction */}
      <Button direction="right">Continue →</Button>
    </div>
  );
}
```

### Different Variants

```tsx
function VariantsExample() {
  return (
    <div className="flex flex-col gap-4">
      {/* Default - green slide */}
      <Button variant="default">Save Changes</Button>

      {/* Destructive - red slide */}
      <Button variant="destructive">Delete Account</Button>

      {/* Outline - no slide animation */}
      <Button variant="outline">Cancel</Button>
    </div>
  );
}
```

### Custom Colors

```tsx
function CustomColorsExample() {
  return (
    <div className="flex gap-4">
      {/* Custom blue slide */}
      <Button color="bg-blue-600" direction="right">
        Continue
      </Button>

      {/* Custom purple slide */}
      <Button color="bg-purple-600">
        Explore Features
      </Button>

      {/* Custom orange slide */}
      <Button color="bg-orange-500" direction="right">
        Get Started
      </Button>
    </div>
  );
}
```

### With Custom Styling

```tsx
function CustomStyleExample() {
  return (
    <div className="flex flex-col gap-4">
      {/* Large button */}
      <Button className="text-lg font-bold px-10 py-4">
        Large Button
      </Button>

      {/* Full width */}
      <Button className="w-full">
        Full Width Button
      </Button>

      {/* Rounded */}
      <Button className="rounded-full px-8">
        Rounded Button
      </Button>
    </div>
  );
}
```

### Complete Example

```tsx
import { Button } from 'buttonix';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center gap-8 p-8">
      <h1 className="text-3xl font-bold mb-6">Buttonix Gallery</h1>

      <div className="flex flex-wrap gap-6 justify-center max-w-4xl">
        {/* Default variant */}
        <Button>Go Back</Button>

        {/* Right direction with custom color */}
        <Button direction="right" color="bg-blue-600">
          Continue →
        </Button>

        {/* Destructive variant */}
        <Button variant="destructive">Delete Account</Button>

        {/* Outline variant */}
        <Button variant="outline" className="w-64">
          Cancel Action
        </Button>

        {/* Custom purple slide */}
        <Button color="bg-purple-600" direction="right">
          Custom Purple
        </Button>

        {/* Large destructive button */}
        <Button variant="destructive" className="text-lg font-bold px-10">
          Large Danger
        </Button>

        {/* Click handler */}
        <Button onClick={() => alert('Clicked!')}>
          Click Me
        </Button>

        {/* Disabled state */}
        <Button disabled>
          Disabled Button
        </Button>
      </div>
    </div>
  );
}

export default App;
```

---

## 📖 Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'default'` \| `'destructive'` \| `'outline'` | `'default'` | Visual style variant for the button |
| `direction` | `'left'` \| `'right'` | `'left'` | Direction of the slide animation and arrow icon placement |
| `color` | `string` | — | Tailwind background class to override the default slide color (e.g., `'bg-blue-600'`) |
| `className` | `string` | — | Additional Tailwind classes for custom styling |
| `children` | `ReactNode` | — | Button text or content to display |
| `onClick` | `MouseEventHandler` | — | Click event handler |
| `disabled` | `boolean` | `false` | Disable the button |
| `type` | `'button'` \| `'submit'` \| `'reset'` | `'button'` | HTML button type attribute |
| ...rest | `ButtonHTMLAttributes` | — | All other standard HTML button attributes |

### Variant Styles

- **`default`**: Green slide with white text (customizable with `color` prop)
- **`destructive`**: Red slide with white text for destructive actions
- **`outline`**: Border-only style with no slide animation

---

## 🎬 Live Demo

See Buttonix in action with interactive examples:

**→ [https://stackminds.netlify.app/npm/buttonix](https://stackminds.netlify.app/npm/buttonix)**

Hover over the buttons to experience the smooth animations and see all available variants and configurations.

---

## 🛠️ Development

Want to contribute or modify Buttonix? Here's how to get started:

### Clone the Repository

```bash
git clone https://github.com/rohan26ir/buttonix-react-button.git
cd buttonix-react-button
```

### Install Dependencies

```bash
npm install
```

### Build the Library

```bash
npm run build
```

### Test Locally

Create a local package for testing in your projects:

```bash
npm pack
```

This generates a `.tgz` file. Install it in any React project:

```bash
npm install /path/to/buttonix-0.1.1.tgz
```

---

## 🤝 Contributing

Contributions are welcome! If you have ideas for improvements or find bugs:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 🐛 Issues & Support

Found a bug or have a feature request?

**→ [Open an issue on GitHub](https://github.com/rohan26ir/buttonix-react-button/issues)**

---

## 📄 License

MIT © [Mahedul Islam Rohan](https://github.com/rohan26ir)

---

## 🌟 Show Your Support

If you find Buttonix useful, please consider giving it a ⭐ on [GitHub](https://github.com/rohan26ir/buttonix-react-button)!

---

<p align="center">
  Made with ❤️ in Dhaka, Bangladesh
</p>

<p align="center">
  <a href="https://github.com/rohan26ir/buttonix-react-button">GitHub</a> •
  <a href="https://www.npmjs.com/package/buttonix">npm</a> •
  <a href="https://stackminds.netlify.app/npm/buttonix">Live Demo</a>
</p>