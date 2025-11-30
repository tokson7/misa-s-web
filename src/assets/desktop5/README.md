# Desktop 5 Assets

This directory contains all assets for the HomePage (Desktop 5) design.

## Files

### Main Design Files
- **`desktop5-complete.svg`** - Complete Desktop 5 SVG export from Figma (1440×4776px). This is the single source of truth for the entire page layout, including header gradient, background, phone frames, and all visual elements.
- **`desktop5-reference.png`** - Reference PNG screenshot of the complete Desktop 5 design for visual comparison.
- **`desktop5.png`** - Additional reference image.

### Component SVGs
- **`desktop-5-figma-export.svg`** - Previous Figma export (may be superseded by desktop5-complete.svg)
- **`desktop-5-complete.svg`** - Alternative complete export

### Navigation Assets
- **`Domain and IP.svg`** - Navigation button SVG for "Domain and IP" link
- **`DNS and Server.svg`** - Navigation button SVG for "DNS and Server" link  
- **`Web Hosting.svg`** - Navigation button SVG for "Web Hosting" link

### Phone Frame Images
- **`image-1.png`** through **`image-3-5.png`** - Phone frame screenshots used in the hero carousel
- **`Frame 7.svg`**, **`Frame 8.svg`**, **`Frame 9.svg`**, **`Frame 11.svg`**, **`Frame 12.svg`** - Phone frame SVG components

### Decorative Elements
- **`Rectangle 12.svg`**, **`Rectangle 13.svg`**, **`Rectangle 25.svg`**, **`Rectangle 26.svg`**, **`Rectangle 27.svg`**, **`Rectangle 36.svg`**, **`Rectangle 45.svg`** - Background and decorative rectangle elements
- **`Vector-*.svg`** - Various vector decorative elements
- **`Group-*.svg`** - Grouped SVG elements
- **`Vrstva_1*.svg`** - Layer-based SVG elements

### Text Content SVGs
- **`How the Internet works_.svg`** - Main title text
- **`The Internet is a global network...svg`** - Content text blocks
- **`Data travels in small units...svg`** - Content text blocks
- **`Every device connected...svg`** - Content text blocks
- **`If you open your browser...svg`** - Content text blocks
- **`→ your home router.svg`**, **`→ back to your computer.svg`**, **`→ the server that hosts the website.svg`** - Arrow and label elements

## Usage

The main component (`HomePage.tsx`) uses `desktop5-complete.svg` as the primary background image. Navigation buttons are overlaid using the `NavButton` component with SVG paths extracted from the navigation SVG files.

## Design Specifications

- **Viewport Width**: 1440px (desktop)
- **Total Height**: 4776px
- **Header Height**: 703px (includes gradient background)
- **Background**: White (#FFFFFF) with diamond gradient overlay in header section
- **Navigation**: Blue text (#0000CB) that turns white (#FFFFFF) on hover/active

## Notes

- All PNG images are used for phone frame content in the carousel
- SVG files maintain vector quality and can be scaled without loss
- The complete SVG includes all filters, gradients, and effects from Figma
