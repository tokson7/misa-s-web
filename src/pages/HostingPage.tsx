import React from "react";
import { Link } from "react-router-dom";
import desktop6FigmaExport from "../assets/desktop6/desktop-6-figma-export.svg";

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
          position: "relative",
          margin: 0,
          padding: 0,
          overflow: "hidden",
          backgroundColor: "#FFFFFF",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "flex-start"
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
            position: "relative",
            top: "0px",
            left: "0px",
            objectFit: "fill",
            objectPosition: "top left",
            pointerEvents: "none",
            margin: 0,
            padding: 0
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

      {/* Domain and IP Link */}
      <Link
        to="/domains"
        style={{
          position: "absolute",
          top: "39px",
          left: "918px",
          width: "170px",
          height: "16px",
          opacity: 0,
          zIndex: 10,
          cursor: "pointer",
          margin: 0,
          padding: 0
        }}
        aria-label="Domain and IP"
        onMouseEnter={(e) => {
          e.currentTarget.style.opacity = "0.2";
          e.currentTarget.style.backgroundColor = "#3B82F6";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.opacity = "0";
          e.currentTarget.style.backgroundColor = "transparent";
        }}
      />

      {/* DNS and Server Link */}
      <Link
        to="/dns"
        style={{
          position: "absolute",
          top: "39px",
          left: "1091px",
          width: "180px",
          height: "16px",
          opacity: 0,
          zIndex: 10,
          cursor: "pointer",
          margin: 0,
          padding: 0
        }}
        aria-label="DNS and Server"
        onMouseEnter={(e) => {
          e.currentTarget.style.opacity = "0.2";
          e.currentTarget.style.backgroundColor = "#3B82F6";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.opacity = "0";
          e.currentTarget.style.backgroundColor = "transparent";
        }}
      />

      {/* Web Hosting Link */}
      <Link
        to="/hosting"
        style={{
          position: "absolute",
          top: "39px",
          left: "1270px",
          width: "150px",
          height: "16px",
          opacity: 0,
          zIndex: 10,
          cursor: "pointer",
          margin: 0,
          padding: 0
        }}
        aria-label="Web Hosting"
        onMouseEnter={(e) => {
          e.currentTarget.style.opacity = "0.2";
          e.currentTarget.style.backgroundColor = "#3B82F6";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.opacity = "0";
          e.currentTarget.style.backgroundColor = "transparent";
        }}
      />
    </main>
  );
}

export default HostingPage;
