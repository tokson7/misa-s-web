# Image Optimization Scripts

## Converting Images to WebP

This project uses WebP format for optimized image delivery. PNG and JPG images are automatically converted to WebP format for better performance and smaller file sizes.

### Prerequisites

Install the required dependencies:

```bash
npm install
```

This will install `sharp`, which is used for image conversion.

### Running the Conversion

To convert all PNG and JPG images in `src/assets` to WebP format:

```bash
npm run convert-images
```

The script will:
- Find all PNG, JPG, and JPEG files in `src/assets` and subdirectories
- Convert them to WebP format with optimal quality settings
- Show file size savings for each conversion
- Skip files that have already been converted (and are up-to-date)

### Conversion Settings

- **PNG files**: Converted with 85% quality
- **JPG files**: Converted with 80% quality
- **Effort level**: 6 (balanced quality/speed)

### Output

- Original files are preserved
- WebP versions are created alongside originals (e.g., `image.png` → `image.webp`)
- The script shows before/after file sizes and percentage savings

### After Conversion

After running the conversion:
1. ✅ All import paths in the codebase have been updated to use `.webp` extensions
2. ✅ Vite will automatically serve WebP files when requested
3. ⚠️ Make sure to commit both the original and WebP files to your repository

### Manual Conversion

If you need to convert individual images, you can use `sharp` directly:

```javascript
import sharp from 'sharp';

await sharp('input.png')
  .webp({ quality: 85, effort: 6 })
  .toFile('output.webp');
```

### Browser Support

WebP is supported in:
- Chrome 23+
- Edge 18+
- Firefox 65+
- Safari 14+
- Opera 12.1+

For older browsers, consider using a fallback mechanism or polyfill.

