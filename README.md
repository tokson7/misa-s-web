# Misa's Web

A modern, responsive website built with React, Vite, TypeScript, and Tailwind CSS. This project explains how the Internet works, covering domains, DNS, servers, and web hosting.

## 🚀 Tech Stack

- **React 19** - UI library
- **Vite 7** - Build tool and dev server
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Utility-first CSS framework
- **React Router v7** - Client-side routing

## 📁 Project Structure

```
src/
├── assets/          # Images, icons, and other static assets
├── components/      # Reusable React components
│   ├── Navbar.tsx  # Global navigation component
│   └── ...
├── pages/           # Page components
│   ├── HomePage.tsx
│   ├── DomainsPage.tsx
│   ├── DnsPage.tsx
│   └── HostingPage.tsx
├── routes.tsx       # React Router configuration
├── App.tsx          # Root component
└── main.tsx         # Entry point
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd mis-web
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## 📄 Available Routes

- `/` - Home page (How the Internet works)
- `/domains` - Domains & IP Addresses page
- `/dns` - DNS & Servers page
- `/hosting` - Web Hosting page

## 🏗️ Build for Production

To create a production build:

```bash
npm run build
```

The build output will be in the `dist/` directory.

To preview the production build locally:

```bash
npm run preview
```

## 🚀 Deploy to Vercel

### Option 1: Deploy via Vercel CLI

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

### Option 2: Deploy via GitHub

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Configure:
   - **Framework Preset:** Vite
   - **Output Directory:** `dist`
   - **Build Command:** `npm run build`
6. Click "Deploy"

The `vercel.json` configuration file is already set up to handle React Router routes correctly.

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run convert-images` - Convert images to WebP format

## 🎨 Features

- ✅ Responsive design (mobile, tablet, desktop)
- ✅ React Router v7 with lazy loading
- ✅ Optimized images (WebP format)
- ✅ TypeScript for type safety
- ✅ Tailwind CSS for styling
- ✅ Production-ready code structure

## 📦 Dependencies

### Production
- `react` - React library
- `react-dom` - React DOM renderer
- `react-router-dom` - Routing library

### Development
- `vite` - Build tool
- `typescript` - TypeScript compiler
- `tailwindcss` - CSS framework
- `@vitejs/plugin-react` - Vite React plugin

## 📄 License

This project is private.

## 👤 Author

Misa's Web
