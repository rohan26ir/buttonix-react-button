# Buttonix - react package

Beautiful animated React button component with smooth hover slide effects. Built with Tailwind CSS and class-variance-authority.

[![npm version](https://img.shields.io/npm/v/buttonix.svg)](https://www.npmjs.com/package/buttonix)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Installation
```bash
npm install buttonix
```

## Requirements

- React 18+ or 19+
- Tailwind CSS v3+

## Setup

Add buttonix to your Tailwind config:
```js
// tailwind.config.js
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/buttonix/dist/**/*.{js,jsx}", // Add this line
  ],
  // ... rest of config
}
```

## Usage
```tsx
import { Button } from 'buttonix';

function App() {
  return (
    <div>
      <Button>Go Back</Button>
      <Button direction="right" color="bg-blue-500">Next</Button>
      <Button variant="destructive">Delete</Button>
    </div>
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'default'` \| `'destructive'` \| `'outline'` | `'default'` | Button style variant |
| `direction` | `'left'` \| `'right'` | `'left'` | Slide animation direction |
| `color` | `string` | — | Custom Tailwind background class (e.g., `'bg-blue-600'`) |
| `className` | `string` | — | Additional CSS classes |

## Examples

### Basic
```tsx
<Button>Click Me</Button>
```

### Custom Color
```tsx
<Button color="bg-purple-600">Custom Color</Button>
```

### Right Direction
```tsx
<Button direction="right">Next →</Button>
```

### Variants
```tsx
<Button variant="default">Save</Button>
<Button variant="destructive">Delete</Button>
<Button variant="outline">Cancel</Button>
```

## Live Demo

[View Demo](https://stackminds.netlify.app/npm/buttonix)

## License

MIT © [Mahedul Islam Rohan](https://github.com/rohan26ir)

## Links

- [GitHub](https://github.com/rohan26ir/buttonix-react-button)
- [npm](https://www.npmjs.com/package/buttonix)
- [Issues](https://github.com/rohan26ir/buttonix-react-button/issues)