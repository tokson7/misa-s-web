import React from "react";
import { Link } from "react-router-dom";
import desktop6FigmaExport from "../assets/desktop6/desktop-6-figma-export.svg";
import Navbar from "../components/Navbar";

function HostingPage(): React.ReactElement {
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
        backgroundColor: "#FFFFFF"
      }}
    >
      {/* Complete Desktop 6 SVG from Figma - Pixel Perfect Full Screen */}
      <div 
        style={{
          width: "100vw",
          minWidth: "1440px",
          height: "auto",
          minHeight: "1266px",
          position: "relative",
          margin: 0,
          padding: 0,
          overflow: "hidden",
          backgroundColor: "#FFFFFF",
          display: "block"
        }}
      >
        <img
          src={desktop6FigmaExport}
          alt="Web Hosting"
          style={{
            display: "block",
            width: "100%",
            minWidth: "1440px",
            height: "auto",
            minHeight: "1266px",
            position: "relative",
            top: "0px",
            left: "0px",
            objectFit: "fill",
            objectPosition: "top left",
            pointerEvents: "none",
            margin: 0,
            padding: 0,
            imageRendering: "crisp-edges"
          }}
        />
    </div>

      {/* Navigation Links - positioned over the SVG to maintain interactivity */}
      {/* Logo Link */}
      <Link
        to="/"
        style={{
          position: "absolute",
          top: "24px",
          left: "156px",
          width: "168px",
          height: "31px",
          opacity: 0,
          zIndex: 10,
          cursor: "pointer",
          margin: 0,
          padding: 0
        }}
        aria-label="Home"
        onMouseEnter={(e) => {
          e.currentTarget.style.opacity = "0.2";
          e.currentTarget.style.backgroundColor = "#3B82F6";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.opacity = "0";
          e.currentTarget.style.backgroundColor = "transparent";
        }}
      />

      {/* Navigation Links */}
      <Navbar />
    </main>
  );
}

export default HostingPage;
