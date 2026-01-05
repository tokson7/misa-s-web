import React from "react";
import { Link } from "react-router-dom";
import desktop6Complete from "../assets/desktop6/desktop-6-complete.svg";
import Navbar from "../components/Navbar";

/**
 * HostingPage - Desktop 6
 * Complete rebuild from SVG file only
 * Pixel-perfect match to desktop-6-complete.svg
 */
function HostingPage(): React.ReactElement {
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

      {/* Desktop 6 SVG - Pixel Perfect */}
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
          src={desktop6Complete}
          alt="Web Hosting"
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
        
        {/* YouTube Video Embed - Replaces image in rounded rectangle frame */}
        <div
          style={{
            position: "absolute",
            left: "752px",
            top: "189px",
            width: "586px",
            height: "328px",
            borderRadius: "18px",
            border: "4px solid #000000",
            overflow: "hidden",
            zIndex: 10,
            backgroundColor: "#000000",
            backgroundImage: "none",
            WebkitTransform: "translateZ(0)",
            transform: "translateZ(0)",
            willChange: "transform",
          }}
        >
          <iframe
            src="https://www.youtube.com/embed/UXsomnDkntI?autoplay=1&mute=0&loop=1&playlist=UXsomnDkntI&enablejsapi=1&controls=1&modestbranding=1&rel=0&iv_load_policy=3"
            style={{
              width: "100%",
              height: "100%",
              border: "none",
              borderRadius: "18px",
              objectFit: "cover",
              opacity: 1,
              visibility: "visible",
              display: "block",
              WebkitTransform: "translateZ(0)",
              transform: "translateZ(0)",
              willChange: "transform",
              WebkitBackfaceVisibility: "hidden",
              backfaceVisibility: "hidden",
            }}
            allow="autoplay; encrypted-media"
            allowFullScreen
            title="Web Hosting Video"
          />
        </div>
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

export default HostingPage;
