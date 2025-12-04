import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Base path for GitHub Pages deployment
  // Use './' for relative paths (works for both root and subdirectory deployment)
  // Use '/' for root deployment only (username.github.io)
  // Use '/repo-name/' for subdirectory deployment (username.github.io/repo-name)
  // For development: use '/' (works with cloudflare tunnel)
  // For production build: use '/Misa_s_web/' (for GitHub Pages)
  base: process.env.NODE_ENV === 'production' ? '/Misa_s_web/' : '/',
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
