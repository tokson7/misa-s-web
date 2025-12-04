# Netlify Deployment Instructions

## Quick Deploy Steps

### Option 1: Deploy via Netlify CLI (Recommended)

1. **Login to Netlify:**
   ```bash
   npx netlify login
   ```
   This will open your browser to authenticate with Netlify.

2. **Deploy to Production:**
   ```bash
   npm run build
   npx netlify deploy --prod --dir=dist
   ```

   Or if you need to create a new site:
   ```bash
   npx netlify deploy --create-site --dir=dist --prod
   ```

### Option 2: Deploy via Netlify Dashboard (Easiest)

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Update: GitHub Pages ready with relative paths"
   git push
   ```

2. **Connect to Netlify:**
   - Go to [netlify.com](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect your GitHub repository
   - Netlify will auto-detect the build settings from `netlify.toml`

3. **Deploy:**
   - Netlify will automatically deploy on every push to your main branch

## Current Configuration

Your `netlify.toml` is already configured:
```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[build.environment]
  NODE_VERSION = "18"
```

This ensures:
- ✅ Build command runs `npm run build`
- ✅ Publishes from `dist/` folder
- ✅ React Router works with client-side routing (SPA redirects)
- ✅ Node.js 18 environment

## Build Output

The project builds to the `dist/` folder with:
- ✅ All relative paths configured (`base: './'` in vite.config.ts)
- ✅ All assets properly hashed
- ✅ Production-ready optimized code

## Notes

- The project is configured with `base: './'` for relative paths
- This works for both GitHub Pages, Vercel, and Netlify
- Netlify will automatically handle the deployment
- All updates are ready in the `dist/` folder

