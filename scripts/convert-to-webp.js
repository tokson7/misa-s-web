import sharp from "sharp";
import { readdir, stat, mkdir } from "fs/promises";
import { join, dirname, extname, basename } from "path";
import { existsSync } from "fs";

/**
 * Convert PNG/JPG images to WebP format
 * This script finds all PNG and JPG files in src/assets and converts them to WebP
 */
async function convertToWebP(inputPath, outputPath) {
  try {
    const inputExt = extname(inputPath).toLowerCase();
    if (!['.png', '.jpg', '.jpeg'].includes(inputExt)) {
      return false;
    }

    // Check if WebP already exists and is newer
    if (existsSync(outputPath)) {
      const inputStat = await stat(inputPath);
      const outputStat = await stat(outputPath);
      if (outputStat.mtime > inputStat.mtime) {
        console.log(`⏭️  Skipping ${basename(inputPath)} (WebP already up-to-date)`);
        return true;
      }
    }

    // Create output directory if it doesn't exist
    const outputDir = dirname(outputPath);
    if (!existsSync(outputDir)) {
      await mkdir(outputDir, { recursive: true });
    }

    // Get original file size
    const originalStat = await stat(inputPath);
    const originalSize = originalStat.size;

    // Convert to WebP with quality optimization
    const image = sharp(inputPath);
    const metadata = await image.metadata();
    
    // Determine quality based on image type
    // Photos/compressed images: lower quality, Graphics/screenshots: higher quality
    const quality = inputExt === '.png' ? 85 : 80;

    await image
      .webp({ quality, effort: 6 })
      .toFile(outputPath);

    // Get converted file size
    const convertedStat = await stat(outputPath);
    const convertedSize = convertedStat.size;
    const savings = ((originalSize - convertedSize) / originalSize * 100).toFixed(1);

    console.log(`✅ Converted ${basename(inputPath)} → ${basename(outputPath)} (${formatBytes(originalSize)} → ${formatBytes(convertedSize)}, ${savings}% smaller)`);
    return true;
  } catch (error) {
    console.error(`❌ Error converting ${inputPath}:`, error.message);
    return false;
  }
}

function formatBytes(bytes) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

async function processDirectory(dir) {
  try {
    const entries = await readdir(dir, { withFileTypes: true });
    let convertedCount = 0;

    for (const entry of entries) {
      const fullPath = join(dir, entry.name);

      if (entry.isDirectory()) {
        // Recursively process subdirectories
        const subCount = await processDirectory(fullPath);
        convertedCount += subCount;
      } else if (entry.isFile()) {
        const ext = extname(entry.name).toLowerCase();
        if (['.png', '.jpg', '.jpeg'].includes(ext)) {
          const webpPath = fullPath.replace(/\.(png|jpg|jpeg)$/i, '.webp');
          const converted = await convertToWebP(fullPath, webpPath);
          if (converted) {
            convertedCount++;
          }
        }
      }
    }

    return convertedCount;
  } catch (error) {
    console.error(`Error processing directory ${dir}:`, error.message);
    return 0;
  }
}

async function main() {
  const assetsDir = join(process.cwd(), 'src', 'assets');
  
  console.log('🔄 Starting image conversion to WebP...\n');
  console.log(`📁 Processing directory: ${assetsDir}\n`);

  if (!existsSync(assetsDir)) {
    console.error(`❌ Assets directory not found: ${assetsDir}`);
    process.exit(1);
  }

  const convertedCount = await processDirectory(assetsDir);

  console.log(`\n✨ Conversion complete! Converted ${convertedCount} image(s) to WebP format.`);
  console.log('📝 Next step: Update import paths in your codebase to use .webp extensions.');
}

main().catch(console.error);

