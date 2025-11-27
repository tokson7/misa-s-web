#!/usr/bin/env node

/**
 * Complete Desktop PNG Processing Script
 * - Detects PNG files for Desktop5-8
 * - Moves them to correct folders
 * - Renames to kebab-case (desktop5.png, etc.)
 * - Updates ALL React imports in page files
 * - Removes old/unused asset imports
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PROJECT_ROOT = path.resolve(__dirname, '..');
const ASSETS_BASE = path.join(PROJECT_ROOT, 'src', 'assets');

const DESKTOP_FOLDERS = {
  'desktop5': path.join(ASSETS_BASE, 'desktop5'),
  'desktop6': path.join(ASSETS_BASE, 'desktop6'),
  'desktop7': path.join(ASSETS_BASE, 'desktop7'),
  'desktop8': path.join(ASSETS_BASE, 'desktop8'),
};

const PAGE_FILES = {
  'desktop5': path.join(PROJECT_ROOT, 'src', 'pages', 'HomePage.tsx'),
  'desktop6': path.join(PROJECT_ROOT, 'src', 'pages', 'HostingPage.tsx'),
  'desktop7': path.join(PROJECT_ROOT, 'src', 'pages', 'DnsPage.tsx'),
  'desktop8': path.join(PROJECT_ROOT, 'src', 'pages', 'DomainsPage.tsx'),
};

function findDesktopPNGs() {
  const pngFiles = [];
  const searchPaths = [
    PROJECT_ROOT,
    ASSETS_BASE,
    ...Object.values(DESKTOP_FOLDERS)
  ];

  for (const searchPath of searchPaths) {
    if (!fs.existsSync(searchPath)) continue;
    
    try {
      const files = fs.readdirSync(searchPath);
      for (const file of files) {
        if (!/\.png$/i.test(file)) continue;
        
        // Detect desktop number
        const match = file.match(/desktop[_\s-]?([5-8])/i);
        if (match) {
          const desktop = `desktop${match[1]}`;
          const filePath = path.join(searchPath, file);
          
          pngFiles.push({
            file,
            path: filePath,
            desktop,
            currentLocation: searchPath
          });
        }
      }
    } catch (e) {
      // Skip if can't read
    }
  }

  return pngFiles;
}

function moveAndRenameFile(fileInfo) {
  const { file, path: filePath, desktop, currentLocation } = fileInfo;
  const targetFolder = DESKTOP_FOLDERS[desktop];
  const newFilename = `${desktop}.png`;
  const targetPath = path.join(targetFolder, newFilename);
  
  // Ensure target folder exists
  if (!fs.existsSync(targetFolder)) {
    fs.mkdirSync(targetFolder, { recursive: true });
  }
  
  // If already in correct location with correct name, skip move
  if (currentLocation === targetFolder && file === newFilename) {
    return { moved: false, from: filePath, to: targetPath, desktop, newName: newFilename };
  }
  
  // Remove target if it exists and is different
  if (fs.existsSync(targetPath) && filePath !== targetPath) {
    fs.unlinkSync(targetPath);
  }
  
  // Move/rename file
  if (filePath !== targetPath && fs.existsSync(filePath)) {
    fs.renameSync(filePath, targetPath);
    return { moved: true, from: filePath, to: targetPath, desktop, oldName: file, newName: newFilename };
  }
  
  return { moved: false, from: filePath, to: targetPath, desktop, newName: newFilename };
}

function updatePageImports(desktop, pngPath) {
  const pageFile = PAGE_FILES[desktop];
  if (!fs.existsSync(pageFile)) {
    console.warn(`⚠️  Page file not found: ${pageFile}`);
    return { updated: false };
  }
  
  let content = fs.readFileSync(pageFile, 'utf8');
  const originalContent = content;
  
  // Calculate relative path from page file to PNG
  const pageDir = path.dirname(pageFile);
  const relativePath = path.relative(pageDir, pngPath).replace(/\\/g, '/');
  
  // Remove ALL old asset imports (lines matching: import ... from "../assets/...")
  const oldImportPattern = /import\s+[\w\s,{}]+\s+from\s+["']\.\.\/assets\/[^"']+["'];?\s*\n/g;
  const removedImports = (content.match(oldImportPattern) || []).length;
  content = content.replace(oldImportPattern, '');
  
  // Find insertion point (after React and component imports)
  const lines = content.split('\n');
  let insertIndex = 0;
  
  // Find last import line
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].trim().startsWith('import ')) {
      insertIndex = i + 1;
    } else if (lines[i].trim().startsWith('const ') || 
               lines[i].trim().startsWith('function ') ||
               lines[i].trim().startsWith('export ')) {
      break;
    }
  }
  
  // Add new import
  const newImport = `import desktopImage from "${relativePath}";\n`;
  lines.splice(insertIndex, 0, newImport);
  content = lines.join('\n');
  
  // Update component to use desktopImage as background
  // This is a simplified approach - replace the main container with background image
  const mainPattern = /<main\s+className="([^"]+)">/;
  if (mainPattern.test(content)) {
    content = content.replace(
      mainPattern,
      `<main className="$1" style={{ backgroundImage: \`url(\${desktopImage})\`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>`
    );
  } else {
    // Try div or other container
    const divPattern = /<div\s+className="([^"]*relative[^"]*)"[^>]*>/;
    if (divPattern.test(content)) {
      content = content.replace(
        divPattern,
        (match, className) => {
          return match.replace(/>$/, ` style={{ backgroundImage: \`url(\${desktopImage})\`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>`);
        }
      );
    }
  }
  
  if (content !== originalContent) {
    fs.writeFileSync(pageFile, content, 'utf8');
    return { updated: true, removedImports, addedImport: true };
  }
  
  return { updated: false, removedImports };
}

function main() {
  console.log('🔍 Searching for Desktop PNG files...\n');
  
  const pngFiles = findDesktopPNGs();
  
  if (pngFiles.length === 0) {
    console.log('❌ No Desktop PNG files found.\n');
    console.log('📋 Please upload PNG files with names containing:');
    console.log('   - Desktop5, desktop5, Desktop_5, desktop-5, etc.');
    console.log('   - Desktop6, desktop6, Desktop_6, desktop-6, etc.');
    console.log('   - Desktop7, desktop7, Desktop_7, desktop-7, etc.');
    console.log('   - Desktop8, desktop8, Desktop_8, desktop-8, etc.\n');
    console.log('📍 Accepted locations:');
    console.log('   - Project root directory');
    console.log('   - src/assets/ directory');
    console.log('   - src/assets/desktop*/ directories\n');
    return { processed: 0, moved: 0, updated: 0 };
  }
  
  console.log(`✅ Found ${pngFiles.length} PNG file(s):\n`);
  pngFiles.forEach(f => console.log(`  - ${f.file} → ${f.desktop}`));
  console.log('');
  
  const results = {
    processed: [],
    moved: [],
    updated: []
  };
  
  // Process each file
  for (const fileInfo of pngFiles) {
    // Move and rename
    const moveResult = moveAndRenameFile(fileInfo);
    results.processed.push(moveResult);
    
    if (moveResult.moved) {
      results.moved.push(moveResult);
      console.log(`✅ Moved: ${moveResult.oldName} → ${moveResult.desktop}/${moveResult.newName}`);
    } else {
      console.log(`✓ Verified: ${moveResult.desktop}/${moveResult.newName}`);
    }
    
    // Update imports
    const updateResult = updatePageImports(moveResult.desktop, moveResult.to);
    if (updateResult.updated) {
      results.updated.push({
        desktop: moveResult.desktop,
        page: PAGE_FILES[moveResult.desktop],
        ...updateResult
      });
      console.log(`✅ Updated: ${moveResult.desktop} page (removed ${updateResult.removedImports} old imports)`);
    }
  }
  
  console.log('\n📊 Summary:');
  console.log(`  - Processed: ${results.processed.length} file(s)`);
  console.log(`  - Moved/Renamed: ${results.moved.length} file(s)`);
  console.log(`  - Pages Updated: ${results.updated.length} file(s)`);
  
  return results;
}

// Run if executed directly
if (import.meta.url === `file://${process.argv[1]}` || process.argv[1]?.endsWith('process-and-update-desktop-pngs.mjs')) {
  main();
}

export { findDesktopPNGs, moveAndRenameFile, updatePageImports, main };

