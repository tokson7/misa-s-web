#!/usr/bin/env node

/**
 * Process Desktop PNG files
 * - Detects PNG files for Desktop5-8
 * - Moves them to correct folders
 * - Renames to kebab-case
 * - Updates React imports
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PROJECT_ROOT = path.resolve(__dirname, '..');
const ASSETS_BASE = path.join(PROJECT_ROOT, 'src', 'assets');

// Desktop folder mappings
const DESKTOP_FOLDERS = {
  'desktop5': path.join(ASSETS_BASE, 'desktop5'),
  'desktop6': path.join(ASSETS_BASE, 'desktop6'),
  'desktop7': path.join(ASSETS_BASE, 'desktop7'),
  'desktop8': path.join(ASSETS_BASE, 'desktop8'),
};

// Page file mappings
const PAGE_FILES = {
  'desktop5': path.join(PROJECT_ROOT, 'src', 'pages', 'HomePage.tsx'),
  'desktop6': path.join(PROJECT_ROOT, 'src', 'pages', 'HostingPage.tsx'),
  'desktop7': path.join(PROJECT_ROOT, 'src', 'pages', 'DnsPage.tsx'),
  'desktop8': path.join(PROJECT_ROOT, 'src', 'pages', 'DomainsPage.tsx'),
};

function findDesktopPNGs() {
  const pngFiles = [];
  
  // Search in project root
  const rootFiles = fs.readdirSync(PROJECT_ROOT)
    .filter(f => /\.png$/i.test(f) && /desktop[5-8]/i.test(f));
  
  // Search in src/assets
  const assetsFiles = [];
  try {
    const assetsDir = fs.readdirSync(ASSETS_BASE);
    assetsFiles.push(...assetsDir.filter(f => /\.png$/i.test(f) && /desktop[5-8]/i.test(f)));
  } catch (e) {
    // Assets base might not exist
  }
  
  // Search in each desktop folder
  for (const [key, folderPath] of Object.entries(DESKTOP_FOLDERS)) {
    try {
      const files = fs.readdirSync(folderPath)
        .filter(f => /\.png$/i.test(f));
      files.forEach(f => {
        pngFiles.push({
          file: f,
          path: path.join(folderPath, f),
          desktop: key,
          currentLocation: folderPath
        });
      });
    } catch (e) {
      // Folder might not exist or be empty
    }
  }
  
  // Add root files
  rootFiles.forEach(f => {
    const match = f.match(/desktop([5-8])/i);
    if (match) {
      pngFiles.push({
        file: f,
        path: path.join(PROJECT_ROOT, f),
        desktop: `desktop${match[1]}`,
        currentLocation: PROJECT_ROOT
      });
    }
  });
  
  // Add assets root files
  assetsFiles.forEach(f => {
    const match = f.match(/desktop([5-8])/i);
    if (match) {
      pngFiles.push({
        file: f,
        path: path.join(ASSETS_BASE, f),
        desktop: `desktop${match[1]}`,
        currentLocation: ASSETS_BASE
      });
    }
  });
  
  return pngFiles;
}

function detectDesktopNumber(filename) {
  const match = filename.match(/desktop[_\s-]?([5-8])/i);
  if (match) {
    return `desktop${match[1]}`;
  }
  return null;
}

function normalizeFilename(desktop) {
  return `${desktop}.png`;
}

function moveAndRenameFile(fileInfo) {
  const { file, path: filePath, desktop, currentLocation } = fileInfo;
  const targetFolder = DESKTOP_FOLDERS[desktop];
  const newFilename = normalizeFilename(desktop);
  const targetPath = path.join(targetFolder, newFilename);
  
  // Ensure target folder exists
  if (!fs.existsSync(targetFolder)) {
    fs.mkdirSync(targetFolder, { recursive: true });
  }
  
  // If file is already in correct location with correct name, skip
  if (currentLocation === targetFolder && file === newFilename) {
    return { moved: false, from: filePath, to: targetPath, desktop };
  }
  
  // Move/rename file
  if (fs.existsSync(filePath)) {
    // Remove target if it exists
    if (fs.existsSync(targetPath) && filePath !== targetPath) {
      fs.unlinkSync(targetPath);
    }
    
    // Move file
    if (filePath !== targetPath) {
      fs.renameSync(filePath, targetPath);
    }
    
    return { moved: true, from: filePath, to: targetPath, desktop, oldName: file, newName: newFilename };
  }
  
  return null;
}

function updatePageImports(desktop, pngPath) {
  const pageFile = PAGE_FILES[desktop];
  if (!fs.existsSync(pageFile)) {
    console.warn(`Page file not found: ${pageFile}`);
    return false;
  }
  
  let content = fs.readFileSync(pageFile, 'utf8');
  const originalContent = content;
  
  // Calculate relative path from page file to PNG
  const pageDir = path.dirname(pageFile);
  const relativePath = path.relative(pageDir, pngPath).replace(/\\/g, '/');
  
  // Remove all old asset imports (lines starting with import ... from "../assets/...")
  content = content.replace(/import\s+[\w\s,{}]+\s+from\s+["']\.\.\/assets\/[^"']+["'];?\s*\n/g, '');
  
  // Add new import at the top (after React imports)
  const reactImportsEnd = content.indexOf('import React') !== -1 
    ? content.indexOf('\n', content.indexOf('import React')) + 1
    : 0;
  
  const beforeImports = content.substring(0, reactImportsEnd);
  const afterImports = content.substring(reactImportsEnd);
  
  // Find where component imports end
  const componentImportsEnd = afterImports.search(/^(import|const|function|export)/m);
  const insertPoint = componentImportsEnd > 0 ? componentImportsEnd : 0;
  
  const newImport = `import desktopImage from "${relativePath}";\n`;
  
  content = beforeImports + afterImports.substring(0, insertPoint) + newImport + afterImports.substring(insertPoint);
  
  // Replace all image/vector/group/rectangle usages with desktopImage
  // This is a simplified approach - in reality, we'd need to replace the entire component structure
  // For now, we'll add a comment indicating the image should be used as background
  
  if (content !== originalContent) {
    fs.writeFileSync(pageFile, content, 'utf8');
    return true;
  }
  
  return false;
}

function main() {
  console.log('🔍 Searching for Desktop PNG files...\n');
  
  const pngFiles = findDesktopPNGs();
  
  if (pngFiles.length === 0) {
    console.log('❌ No Desktop PNG files found.');
    console.log('\n📋 Expected locations:');
    console.log('  - Project root: Desktop5.png, desktop6.png, etc.');
    console.log('  - src/assets/: Desktop7.png, desktop8.png, etc.');
    console.log('  - src/assets/desktop*/: Any PNG files');
    return;
  }
  
  console.log(`✅ Found ${pngFiles.length} PNG file(s):\n`);
  pngFiles.forEach(f => console.log(`  - ${f.file} (detected as ${f.desktop})`));
  console.log('');
  
  const results = [];
  
  for (const fileInfo of pngFiles) {
    // Ensure desktop is detected
    if (!fileInfo.desktop) {
      const detected = detectDesktopNumber(fileInfo.file);
      if (detected) {
        fileInfo.desktop = detected;
      } else {
        console.warn(`⚠️  Could not detect desktop number for: ${fileInfo.file}`);
        continue;
      }
    }
    
    const result = moveAndRenameFile(fileInfo);
    if (result) {
      results.push(result);
      console.log(`✅ ${result.moved ? 'Moved' : 'Verified'}: ${result.oldName || result.from} → ${result.desktop}/${result.newName || path.basename(result.to)}`);
    }
  }
  
  console.log('\n📝 Summary:');
  console.log(`  - Processed: ${results.length} file(s)`);
  console.log(`  - Moved: ${results.filter(r => r.moved).length} file(s)`);
  
  // Note: Import updates would require more complex logic
  console.log('\n⚠️  Note: Import updates require manual review.');
  console.log('    The script has prepared files, but React component structure');
  console.log('    needs to be updated to use the desktop images.');
}

// Run if executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { findDesktopPNGs, moveAndRenameFile, updatePageImports };

