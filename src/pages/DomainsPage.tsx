import React from "react";
import { Link } from "react-router-dom";
import desktop8Complete from "../assets/desktop8/desktop-8-complete.svg";
import Navbar from "../components/Navbar";

/**
 * DomainsPage - Desktop 8
 * Complete rebuild from SVG file only
 * Pixel-perfect match to desktop-8-complete.svg
 */
function DomainsPage(): React.ReactElement {
  return (
    <main
      style={{
        width: "100vw",
        minHeight: "100vh",
        margin: 0,
        padding: 0,
        overflowX: "hidden",
        overflowY: "auto",
        position: "relative",
        backgroundColor: "#FFFFFF",
      }}
    >
      {/* Clean Navbar */}
      <Navbar />

      {/* Desktop 8 SVG - Pixel Perfect */}
      <div
        style={{
          width: "100vw",
          minWidth: "1440px",
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
            minWidth: "1440px",
            height: "auto",
            position: "relative",
            top: 0,
            left: 0,
            objectFit: "fill",
            objectPosition: "top left",
            pointerEvents: "none",
            margin: 0,
            padding: 0,
            imageRendering: "crisp-edges",
          }}
        />
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
