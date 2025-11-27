#!/usr/bin/env node

/**
 * Comprehensive Desktop PNG Processing
 * Handles detection, moving, renaming, and import updates
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PROJECT_ROOT = path.resolve(__dirname, '..');

const CONFIG = {
  assetsBase: path.join(PROJECT_ROOT, 'src', 'assets'),
  desktopFolders: {
    'desktop5': path.join(PROJECT_ROOT, 'src', 'assets', 'desktop5'),
    'desktop6': path.join(PROJECT_ROOT, 'src', 'assets', 'desktop6'),
    'desktop7': path.join(PROJECT_ROOT, 'src', 'assets', 'desktop7'),
    'desktop8': path.join(PROJECT_ROOT, 'src', 'assets', 'desktop8'),
  },
  pageFiles: {
    'desktop5': path.join(PROJECT_ROOT, 'src', 'pages', 'HomePage.tsx'),
    'desktop6': path.join(PROJECT_ROOT, 'src', 'pages', 'HostingPage.tsx'),
    'desktop7': path.join(PROJECT_ROOT, 'src', 'pages', 'DnsPage.tsx'),
    'desktop8': path.join(PROJECT_ROOT, 'src', 'pages', 'DomainsPage.tsx'),
  }
};

function findAllPNGFiles() {
  const pngFiles = [];
  const searchPaths = [
    PROJECT_ROOT,
    CONFIG.assetsBase,
    ...Object.values(CONFIG.desktopFolders),
    path.join(PROJECT_ROOT, 'public'),
  ];

  for (const searchPath of searchPaths) {
    if (!fs.existsSync(searchPath)) continue;
    
    try {
      const entries = fs.readdirSync(searchPath, { withFileTypes: true });
      for (const entry of entries) {
        if (entry.isFile() && /\.png$/i.test(entry.name)) {
          const filePath = path.join(searchPath, entry.name);
          pngFiles.push({
            name: entry.name,
            path: filePath,
            directory: searchPath
          });
        }
      }
    } catch (e) {
      // Skip if can't read
    }
  }

  return pngFiles;
}

function detectDesktopNumber(filename) {
  // Try various patterns
  const patterns = [
    /desktop[_\s-]?([5-8])/i,
    /Desktop[_\s-]?([5-8])/i,
    /d[_\s-]?([5-8])/i,
    /([5-8])\.png$/i,
  ];

  for (const pattern of patterns) {
    const match = filename.match(pattern);
    if (match) {
      return `desktop${match[1]}`;
    }
  }

  return null;
}

function organizeFiles(pngFiles) {
  const organized = {
    desktop5: null,
    desktop6: null,
    desktop7: null,
    desktop8: null,
    unknown: []
  };

  for (const file of pngFiles) {
    const desktop = detectDesktopNumber(file.name);
    if (desktop && organized[desktop] === null) {
      organized[desktop] = file;
    } else {
      organized.unknown.push(file);
    }
  }

  return organized;
}

function moveAndRename(desktop, fileInfo) {
  const targetFolder = CONFIG.desktopFolders[desktop];
  const targetFile = path.join(targetFolder, `${desktop}.png`);

  // Ensure folder exists
  if (!fs.existsSync(targetFolder)) {
    fs.mkdirSync(targetFolder, { recursive: true });
  }

  // Remove existing target if different
  if (fs.existsSync(targetFile) && fileInfo.path !== targetFile) {
    fs.unlinkSync(targetFile);
  }

  // Move/rename
  if (fileInfo.path !== targetFile) {
    fs.renameSync(fileInfo.path, targetFile);
  }

  return targetFile;
}

function updatePageImports(desktop, pngPath) {
  const pageFile = CONFIG.pageFiles[desktop];
  if (!fs.existsSync(pageFile)) {
    return { success: false, error: 'Page file not found' };
  }

  let content = fs.readFileSync(pageFile, 'utf8');
  const originalContent = content;

  // Calculate relative path
  const pageDir = path.dirname(pageFile);
  const relativePath = path.relative(pageDir, pngPath).replace(/\\/g, '/');

  // Remove all old asset imports
  const importPattern = /import\s+[\w\s,{}]+\s+from\s+["']\.\.\/assets\/[^"']+["'];?\s*\n/g;
  const removedCount = (content.match(importPattern) || []).length;
  content = content.replace(importPattern, '');

  // Find insertion point (after last import)
  const lines = content.split('\n');
  let insertIndex = 0;
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].trim().startsWith('import ')) {
      insertIndex = i + 1;
    } else if (lines[i].trim() && !lines[i].trim().startsWith('//')) {
      break;
    }
  }

  // Add new import
  const newImport = `import desktopImage from "${relativePath}";\n`;
  lines.splice(insertIndex, 0, newImport);
  content = lines.join('\n');

  // Update main container to use background image
  // Try to find the main container element
  const mainPatterns = [
    /(<main\s+className="[^"]*")/,
    /(<div\s+className="[^"]*relative[^"]*")/,
  ];

  for (const pattern of mainPatterns) {
    if (pattern.test(content)) {
      content = content.replace(
        pattern,
        (match) => {
          if (!match.includes('style=')) {
            return `${match} style={{ backgroundImage: \`url(\${desktopImage})\`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', minHeight: '100vh' }}`;
          }
          return match;
        }
      );
      break;
    }
  }

  if (content !== originalContent) {
    fs.writeFileSync(pageFile, content, 'utf8');
    return { success: true, removedImports: removedCount };
  }

  return { success: false, error: 'No changes made' };
}

function main() {
  console.log('🔍 Searching for Desktop PNG files...\n');

  const pngFiles = findAllPNGFiles();
  
  if (pngFiles.length === 0) {
    console.log('❌ No PNG files found.\n');
    console.log('Please ensure PNG files are uploaded to one of these locations:');
    console.log('  - Project root');
    console.log('  - src/assets/');
    console.log('  - src/assets/desktop*/');
    console.log('  - public/');
    return;
  }

  console.log(`✅ Found ${pngFiles.length} PNG file(s):`);
  pngFiles.forEach(f => console.log(`   - ${f.name}`));
  console.log('');

  const organized = organizeFiles(pngFiles);
  
  const results = {
    processed: [],
    errors: []
  };

  // Process each desktop
  for (const [desktop, fileInfo] of Object.entries(organized)) {
    if (desktop === 'unknown' || !fileInfo) continue;

    try {
      console.log(`📦 Processing ${desktop}...`);
      
      // Move and rename
      const targetPath = moveAndRename(desktop, fileInfo);
      console.log(`   ✅ Moved to: ${desktop}/${path.basename(targetPath)}`);

      // Update imports
      const updateResult = updatePageImports(desktop, targetPath);
      if (updateResult.success) {
        console.log(`   ✅ Updated imports (removed ${updateResult.removedImports} old imports)`);
        results.processed.push({ desktop, file: targetPath, ...updateResult });
      } else {
        console.log(`   ⚠️  ${updateResult.error || 'Could not update imports'}`);
        results.errors.push({ desktop, error: updateResult.error });
      }
      console.log('');
    } catch (error) {
      console.log(`   ❌ Error: ${error.message}`);
      results.errors.push({ desktop, error: error.message });
    }
  }

  // Report unknown files
  if (organized.unknown.length > 0) {
    console.log('⚠️  Could not detect desktop number for:');
    organized.unknown.forEach(f => console.log(`   - ${f.name}`));
    console.log('');
  }

  // Summary
  console.log('📊 Summary:');
  console.log(`   ✅ Processed: ${results.processed.length} file(s)`);
  if (results.errors.length > 0) {
    console.log(`   ❌ Errors: ${results.errors.length}`);
  }
  console.log('');

  return results;
}

// Run main function
main();

export { main, findAllPNGFiles, organizeFiles, moveAndRename, updatePageImports };

