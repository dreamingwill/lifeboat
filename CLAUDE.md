# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A single-file static web application — a character guide/reference card for the board game **Lifeboat**. No build tools, no dependencies, no compilation needed.

## Development

Open `index.html` directly in a browser. No server, build step, or package manager is involved.

## Architecture

Everything lives in `index.html` (222 lines):

- **CSS** (lines 6–34): Inline styles using CSS custom properties (`--color-text-primary`, `--color-border-tertiary`, etc.) for theming — designed to be embedded in a host page that provides these variables.
- **Data** (lines 40–155): A `chars` array of 6 character objects, each with stats (`size`, `hp`, `sv`), display properties (colors, emoji icon), and strategy content (`tips`, `threat`, `ally`, `verdict`).
- **Rendering** (lines 157–219): Vanilla JS that dynamically builds a tab-based UI from the data — tabs in `#tabs`, cards in `#cards`. No framework, no external scripts.

The app is intended to be embedded (e.g., in Notion or a similar tool) — it uses `background: transparent` and CSS variables rather than hardcoded colors, so it inherits the host environment's theme.

## Adding/Editing Characters

Each entry in the `chars` array follows this shape:

```js
{
  id, icon, name, en,           // identity
  color, bg, bgt,               // accent, card background, active-tab background
  size, hp, sv,                  // stats (size max 8, sv max 6)
  type, special, pos,            // role description
  tags,                          // badge strings
  verdict, verdictColor, verdictBorder,  // summary block
  tips,                          // strategy bullet strings
  threat, ally                   // social strategy strings
}
```

Stat bars scale off fixed maxes: `size/8`, `hp/8`, `sv/6`.
