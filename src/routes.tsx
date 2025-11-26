import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import App from "./App";

// Lazy load page components for code splitting
const HomePage = lazy(() => import("./pages/HomePage"));
const DomainsPage = lazy(() => import("./pages/DomainsPage"));
const DnsPage = lazy(() => import("./pages/DnsPage"));
const HostingPage = lazy(() => import("./pages/HostingPage"));

// Loading fallback component
const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-screen bg-white">
    <div className="text-[#0000cb] text-xl">Loading...</div>
  </div>
);

// Create router with React Router v7 data router API
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <HomePage />
          </Suspense>
        ),
      },
      {
        path: "domains",
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <DomainsPage />
          </Suspense>
        ),
      },
      {
        path: "dns",
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <DnsPage />
          </Suspense>
        ),
      },
      {
        path: "hosting",
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <HostingPage />
          </Suspense>
        ),
      },
    ],
  },
], {
  future: {
    v7_fetcherPersist: true,
    v7_normalizeFormMethod: true,
    v7_partialHydration: true,
    v7_relativeSplatPath: true,
    v7_skipActionErrorRevalidation: true,
  },
});

export default router;
