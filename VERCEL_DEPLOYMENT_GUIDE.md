# Vercel Deployment Guide

## ✅ Project Setup Complete

Your project has been prepared for Vercel deployment with:

- ✅ Git repository initialized
- ✅ `.gitignore` configured
- ✅ Initial commit created
- ✅ `vercel.json` configuration file
- ✅ `README.md` with project documentation
- ✅ Build configuration verified

## 🚀 Manual Deployment Steps

Follow these steps **outside of Cursor** to deploy to Vercel:

### Step 1: Create GitHub Repository

1. Go to [GitHub](https://github.com)
2. Click the "+" icon → "New repository"
3. Repository name: `mis-web`
4. Set to **Public** or **Private** (your choice)
5. **DO NOT** initialize with README, .gitignore, or license
6. Click "Create repository"

### Step 2: Push Code to GitHub

In your terminal (outside Cursor), run:

```bash
cd "/Users/tornikezarisze/Misa's Web/Misa`s Web"

# Add remote (replace <USERNAME> with your GitHub username)
git remote add origin https://github.com/<USERNAME>/mis-web.git

# Push to GitHub
git push -u origin main
```

**Note:** If you get an error about the branch name, try:
```bash
git branch -M main
git push -u origin main
```

### Step 3: Deploy to Vercel

1. Go to [Vercel](https://vercel.com)
2. Sign in with your GitHub account
3. Click **"New Project"**
4. Import your `mis-web` repository
5. Configure the project:
   - **Framework Preset:** Vite
   - **Root Directory:** `./` (default)
   - **Build Command:** `npm run build` (auto-detected)
   - **Output Directory:** `dist` (auto-detected)
   - **Install Command:** `npm install` (auto-detected)
6. Click **"Deploy"**

### Step 4: Verify Deployment

1. Wait for the build to complete (usually 1-2 minutes)
2. Click on your deployment to view the live site
3. Test all routes:
   - `/` - Home page
   - `/domains` - Domains page
   - `/dns` - DNS page
   - `/hosting` - Hosting page

## ⚠️ Important Notes

### Missing Assets

Before deploying, ensure all asset files are present. The build may fail if assets are missing. See `DEPLOYMENT_NOTES.md` for details.

### Environment Variables

If you need environment variables:
1. Go to your Vercel project settings
2. Navigate to "Environment Variables"
3. Add any required variables

### Custom Domain

To add a custom domain:
1. Go to your Vercel project settings
2. Navigate to "Domains"
3. Add your domain
4. Follow DNS configuration instructions

## 📋 Post-Deployment Checklist

- [ ] All routes work correctly
- [ ] Navigation links function properly
- [ ] Images and assets load correctly
- [ ] Responsive design works on mobile/tablet
- [ ] No console errors
- [ ] Performance is acceptable

## 🔄 Continuous Deployment

Once connected to GitHub, Vercel will automatically:
- Deploy on every push to `main` branch
- Create preview deployments for pull requests
- Run builds automatically

## 📞 Support

If you encounter issues:
1. Check Vercel build logs
2. Verify all assets are present
3. Ensure `vercel.json` is correct
4. Check that `package.json` build script is correct

