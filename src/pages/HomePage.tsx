import React from "react";
import { Link } from "react-router-dom";
import desktop5Complete from "../assets/desktop5/desktop-5-complete.svg";
import Navbar from "../components/Navbar";

function HomePage(): React.ReactElement {
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
      {/* Complete Desktop 5 SVG from Figma - Pixel Perfect Exact Match */}
      <div 
        style={{
          width: "100vw",
          minWidth: "1440px",
          height: "auto",
          minHeight: "4776px",
          position: "relative",
          margin: 0,
          padding: 0,
          overflow: "hidden",
          backgroundColor: "#FFFFFF",
          display: "block"
        }}
      >
        <img
          src={desktop5Complete}
          alt="How the Internet Works - Complete Desktop 5 Design"
          style={{
            display: "block",
            width: "100%",
            minWidth: "1440px",
            height: "auto",
            minHeight: "4776px",
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
      <Navbar />

      {/* Logo Link */}
      <Link
        to="/"
        style={{
          position: "absolute",
          top: "0px",
          left: "46px",
          width: "217px",
          height: "54px",
          opacity: 0,
          zIndex: 10,
          cursor: "pointer",
          margin: 0,
          padding: 0
        }}
        aria-label="Home"
      />
    </main>
  );
}

export default HomePage;
