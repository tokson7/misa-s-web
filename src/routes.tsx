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

// Error boundary component for better UX
const ErrorPage = () => (
  <div style={{
    width: "100%",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
    color: "#1A1A1A",
  }}>
    <h1 style={{ fontSize: "48px", fontWeight: 700, marginBottom: "16px" }}>404</h1>
    <p style={{ fontSize: "18px", marginBottom: "24px" }}>Page not found</p>
    <a
      href="/"
      style={{
        padding: "12px 24px",
        backgroundColor: "#0000cb",
        color: "#FFFFFF",
        textDecoration: "none",
        borderRadius: "8px",
        fontWeight: 600,
      }}
    >
      Go to Home
    </a>
  </div>
);

// Create router with React Router v7 data router API
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
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
      {
        path: "*",
        element: <ErrorPage />,
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
