import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Base path configuration
  // Cloudflare Pages: use '/' (root deployment) - CF_PAGES=1 indicates Cloudflare Pages
  // Netlify: use '/' (root deployment) - Netlify sets NETLIFY=true or CONTEXT env vars
  // GitHub Pages: use '/Misa_s_web/' (subdirectory deployment)
  // Default to '/' for development and most platforms, use '/Misa_s_web/' only for GitHub Pages
  base: process.env.CF_PAGES === '1' || process.env.NETLIFY === 'true' || process.env.CONTEXT || process.env.DEPLOY_PRIME_URL ? '/' : 
        (process.env.GITHUB_PAGES === 'true' ? '/Misa_s_web/' : '/'),
  server: {
    host: '0.0.0.0',
    port: 5173,
    allowedHosts: [
      '.trycloudflare.com', // Allow all Cloudflare tunnel hosts
      'localhost',
      '127.0.0.1',
    ],
  },
  build: {
    // Ensure all assets use relative paths
    assetsDir: 'assets',
    // Generate relative paths in the built HTML
    rollupOptions: {
      output: {
        // Use relative paths for all chunks
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
      },
    },
  },
})
