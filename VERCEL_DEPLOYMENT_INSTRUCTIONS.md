# Vercel Deployment Instructions

## Quick Deploy Steps

### Option 1: Deploy via Vercel CLI (Recommended)

1. **Login to Vercel:**
   ```bash
   npx vercel login
   ```
   Follow the prompts to authenticate with your Vercel account.

2. **Deploy to Production:**
   ```bash
   npm run build
   npx vercel --prod
   ```

### Option 2: Deploy via Vercel Dashboard

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Update: GitHub Pages ready with relative paths"
   git push
   ```

2. **Connect to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Vite and configure settings

3. **Deploy:**
   - Vercel will automatically deploy on every push to your main branch

## Current Configuration

Your `vercel.json` is already configured:
```json
{
  "version": 2,
  "rewrites": [
    { "source": "/(.*)", "destination": "/" }
  ]
}
```

This ensures React Router works correctly with client-side routing.

## Build Output

The project builds to the `dist/` folder with:
- ✅ All relative paths configured (`base: './'` in vite.config.ts)
- ✅ All assets properly hashed
- ✅ Production-ready optimized code

## Notes

- The project is configured with `base: './'` for relative paths
- This works for both GitHub Pages and Vercel
- Vercel will automatically handle the deployment
- All updates are ready in the `dist/` folder

