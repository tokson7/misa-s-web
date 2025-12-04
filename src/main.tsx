import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import { router } from './routes'

const LoadingFallback = () => (
  <div style={{ width: "100%", height: "100%", margin: 0, padding: 0, display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#FFFFFF" }}>
    <div style={{ color: "#0000cb", fontSize: "20px" }}>Loading...</div>
  </div>
);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Suspense fallback={<LoadingFallback />}>
      <RouterProvider router={router} />
    </Suspense>
  </StrictMode>,
)
