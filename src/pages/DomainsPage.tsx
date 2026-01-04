import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import desktop8Complete from "../assets/desktop8/desktop-8-complete.svg";
import Navbar from "../components/Navbar";

/**
 * DomainsPage - Desktop 8
 * Complete rebuild from SVG file only
 * Pixel-perfect match to desktop-8-complete.svg
 */
function DomainsPage(): React.ReactElement {
  const iconRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number | null>(null);

  useEffect(() => {
    // Only run on Desktop 8 breakpoint (1440px width)
    const checkAndAnimate = () => {
      const isDesktop8 = window.innerWidth >= 1440;
      if (!isDesktop8 || !iconRef.current) {
        if (iconRef.current) {
          iconRef.current.style.display = 'none';
        }
        if (animationFrameRef.current !== null) {
          cancelAnimationFrame(animationFrameRef.current);
          animationFrameRef.current = null;
        }
        return;
      }

      const container = iconRef.current;
      if (!container) return;
      
      container.style.display = 'block';
      const icon = container.firstElementChild as HTMLElement;
      if (!icon) return;

      // Cancel any existing animation
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
      }

      // Wait for layout
      setTimeout(() => {
        // Get container dimensions
        const containerRect = container.getBoundingClientRect();
        const iconWidth = 152; // Fixed icon width
        const iconHeight = 111; // Fixed icon height
        
        const containerWidth = containerRect.width;
        const containerHeight = containerRect.height;

        if (containerWidth === 0 || containerHeight === 0) {
          return; // Container not ready
        }

        // Initial position (centered)
        let x = (containerWidth - iconWidth) / 2;
        let y = (containerHeight - iconHeight) / 2;
        
        // Velocity (pixels per frame)
        let vx = 2;
        let vy = 2;

        const animate = () => {
          // Update position
          x += vx;
          y += vy;

          // Bounce off left/right edges
          if (x <= 0 || x + iconWidth >= containerWidth) {
            vx = -vx;
            x = Math.max(0, Math.min(x, containerWidth - iconWidth));
          }

          // Bounce off top/bottom edges
          if (y <= 0 || y + iconHeight >= containerHeight) {
            vy = -vy;
            y = Math.max(0, Math.min(y, containerHeight - iconHeight));
          }

          // Apply transform
          icon.style.transform = `translate(${x}px, ${y}px)`;

          animationFrameRef.current = requestAnimationFrame(animate);
        };

        // Start animation
        animationFrameRef.current = requestAnimationFrame(animate);
      }, 200);
    };

    checkAndAnimate();
    window.addEventListener('resize', checkAndAnimate);

    // Cleanup
    return () => {
      window.removeEventListener('resize', checkAndAnimate);
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = null;
      }
    };
  }, []);

  return (
    <main
      style={{
        width: "100%",
        height: "100%",
        margin: 0,
        padding: 0,
        overflowX: "hidden",
        overflowY: "auto",
        position: "relative",
        backgroundColor: "#FFFFFF",
      }}
    >
      {/* Clean Navbar - SINGLE INSTANCE ONLY */}
      <Navbar />

      {/* Desktop 8 SVG - Pixel Perfect */}
      <div
        style={{
          width: "100%",
          height: "auto",
          position: "relative",
          margin: 0,
          padding: 0,
          overflow: "hidden",
          backgroundColor: "#FFFFFF",
          display: "block",
        }}
      >
        <img
          src={desktop8Complete}
          alt="Domain and IP"
          style={{
            display: "block",
            width: "100%",
            maxWidth: "100%",
            height: "auto",
            position: "relative",
            top: 0,
            left: 0,
            objectFit: "contain",
            objectPosition: "top left",
            pointerEvents: "none",
            margin: 0,
            padding: 0,
            imageRendering: "crisp-edges",
          }}
        />
      </div>

      {/* Animated Green Pixel Icon - Desktop 8 Only */}
      <div
        ref={iconRef}
        style={{
          position: "absolute",
          top: "79px",
          left: 0,
          width: "100%",
          maxWidth: "1440px",
          height: "calc(100vh - 79px)",
          minHeight: "1732px",
          overflow: "hidden",
          pointerEvents: "none",
          zIndex: 10,
        }}
      >
        <svg
          width="152"
          height="111"
          viewBox="0 0 152 111"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            transform: "translate(0, 0)",
            willChange: "transform",
          }}
        >
          <path
            d="M14.17 70.857L28.34 70.857L42.51 70.857L44.95 70.857L34.93 80.877L24.91 90.898L34.93 100.918L44.95 110.939L54.97 100.918L44.95 90.898L54.97 80.877L64.99 90.898L75.01 100.918L85.03 110.939L95.05 100.918L105.07 90.898L115.09 80.877L125.11 90.898L115.09 100.918L125.11 110.939L135.13 100.918L145.16 90.898L135.13 80.877L125.11 70.857L115.09 60.836L105.07 50.816L95.05 40.795L85.03 50.816L95.05 60.836L105.07 70.857L95.05 80.877L85.03 70.857L75.01 80.877L64.99 70.857L70.86 70.857L85.02 70.857L85.02 56.688L85.02 50.824L85.03 50.816L85.02 50.808L85.02 42.512L85.02 28.344L85.02 23.867L95.45 23.867L106.66 23.867L117.86 23.867L117.86 35.072L129.07 35.072L129.07 46.284L140.28 46.284L140.28 57.488L140.28 68.7L140.28 79.905L151.49 79.905L151.49 68.7L151.49 57.488L151.49 46.284L151.49 35.072L140.28 35.072L140.28 23.867L129.07 23.867L129.07 12.6627L117.86 12.6627L106.66 12.6627L99.19 12.6627L99.19 0L85.02 0L70.86 0L56.68 0L42.51 0L28.34 0L14.17 0L14.17 14.1681L0 14.1681L0 28.344L0 42.512L0 56.688L0 70.857L14.17 70.857Z"
            fill="#A9FF47"
          />
        </svg>
      </div>

      {/* Logo Link - Clickable area */}
      <Link
        to="/"
        style={{
          position: "absolute",
          top: "24px",
          left: "156px",
          width: "168px",
          height: "31px",
          opacity: 0,
          zIndex: 10001,
          cursor: "pointer",
          margin: 0,
          padding: 0,
        }}
        aria-label="Home"
      />
    </main>
  );
}

export default DomainsPage;
