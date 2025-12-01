import React from "react";
import { Link } from "react-router-dom";
import desktop7Complete from "../assets/desktop7/desktop-7-complete.svg";
import Navbar from "../components/Navbar";

/**
 * DnsPage - Desktop 7
 * Complete rebuild from SVG file only
 * Pixel-perfect match to desktop-7-complete.svg
 */
function DnsPage(): React.ReactElement {
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

      {/* Desktop 7 SVG - Pixel Perfect */}
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
          src={desktop7Complete}
          alt="DNS and Server"
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
        {/* Overlay to hide old navbar text on right side (embedded in SVG) */}
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "540px",
            height: "80px",
            background: "linear-gradient(90deg, rgba(47,0,255,1) 0%, rgba(169,255,71,1) 100%)",
            pointerEvents: "none",
            zIndex: 999,
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

export default DnsPage;
