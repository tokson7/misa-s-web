# Image Optimization Guide

## Overview

All PNG and JPG images in this project have been configured to use WebP format for optimal performance. WebP provides:
- **30-50% smaller file sizes** compared to PNG
- **25-35% smaller file sizes** compared to JPG
- Better compression while maintaining visual quality
- Modern browser support (Chrome 23+, Firefox 65+, Safari 14+)

## Files Updated

### Import Paths Updated

All import statements in the following files have been updated from `.png`/`.jpg` to `.webp`:

- ✅ `src/pages/Desktop5.tsx` - 17 PNG imports → WebP
- ✅ `src/pages/Desktop6.tsx` - 3 PNG imports → WebP  
- ✅ `src/pages/Desktop7.tsx` - 5 PNG imports → WebP
- ✅ `src/pages/Desktop8.tsx` - 2 PNG imports → WebP

### Conversion Script

A conversion script has been created at `scripts/convert-to-webp.js` that will:
- Recursively scan all directories in `src/assets/`
- Convert PNG/JPG files to WebP format
- Show file size savings
- Preserve original files

## How to Convert Images

### Step 1: Install Dependencies

```bash
npm install
```

This will install `sharp` (version ^0.33.0) for image conversion.

### Step 2: Run the Conversion

```bash
npm run convert-images
```

This will:
1. Find all PNG/JPG images in `src/assets/`
2. Convert them to WebP format
3. Display conversion statistics (file sizes, savings)
4. Create `.webp` files alongside originals

### Step 3: Verify

After conversion, verify that:
- ✅ `.webp` files exist in the assets directories
- ✅ Import paths in code already reference `.webp` (already done)
- ✅ Images load correctly in the browser

## Image Quality Settings

The conversion script uses optimized settings:

- **PNG → WebP**: 85% quality (preserves graphics/screenshots quality)
- **JPG → WebP**: 80% quality (optimized for photos)
- **Effort level**: 6 (balanced quality/speed)

These settings provide excellent visual quality while achieving significant file size reductions.

## File Size Savings

Expected savings after conversion:
- **PNG files**: Typically 40-60% smaller
- **JPG files**: Typically 25-35% smaller
- **Complex graphics**: Up to 70% smaller in some cases

## Browser Support

WebP is supported in all modern browsers:
- ✅ Chrome 23+ (2013)
- ✅ Edge 18+ (2018)
- ✅ Firefox 65+ (2019)
- ✅ Safari 14+ (2020)
- ✅ Opera 12.1+ (2012)

For older browsers that don't support WebP, consider:
- Using a polyfill
- Serving fallback images
- Or accepting that older browsers will use the original format

## Components Updated

- ✅ `ResponsiveImage` component already supports WebP (uses standard `<img>` tag)
- ✅ All image imports updated to `.webp` extensions
- ✅ No additional changes needed to components

## Next Steps

1. Run `npm install` to install `sharp`
2. Run `npm run convert-images` to convert all images
3. Test the application to ensure images load correctly
4. Commit both original and WebP files to repository
5. Consider adding image optimization to build pipeline

## Notes

- Original PNG/JPG files are preserved (not deleted)
- WebP files are created alongside originals
- Import paths have been pre-updated to use `.webp`
- Vite will automatically handle WebP imports in development and production

