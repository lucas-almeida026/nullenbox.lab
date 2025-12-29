---
title: "Setting Up Astro with Tailwind CSS v4"
description: "A guide on how to set up Astro with the new Tailwind CSS v4 and configure it for both light and dark modes."
pubDate: 2024-12-29
tags: ["astro", "tailwind", "tutorial", "css"]
---

# Setting Up Astro with Tailwind CSS v4

In this post, I'll walk you through setting up Astro with Tailwind CSS v4, including theme customization and dark mode support.

## Prerequisites

Before we begin, make sure you have:

- Node.js 18+ installed
- A new or existing Astro project

## Installation

First, install Tailwind CSS v4 and its Vite plugin:

```bash
npm install tailwindcss @tailwindcss/vite
```

## Configuration

### Astro Config

Update your `astro.config.mjs` to use the Tailwind Vite plugin:

```javascript
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
});
```

### CSS Setup

Create a `global.css` file with your Tailwind imports and theme:

```css
@import "tailwindcss";

@custom-variant dark (&:where(.dark, .dark *));

@theme {
  --color-primary: #7935b8;
  --color-surface: #f8f8fa;
  --color-on-surface: #1a1a2e;
}

.dark {
  --color-surface: #16161e;
  --color-on-surface: #e9e9ec;
}
```

## Dark Mode Toggle

The key to dark mode is adding/removing the `dark` class on the `<html>` element and persisting the user's preference in localStorage.

## Conclusion

That's it! You now have a fully configured Astro + Tailwind CSS v4 project with dark mode support.

---

_Published on December 29, 2024_
