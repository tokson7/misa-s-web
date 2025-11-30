import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import desktop8FigmaExport from "../assets/desktop8/desktop-8-figma-export.svg";

function DomainsPage(): React.ReactElement {
  const location = useLocation();
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

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
      {/* Complete Desktop 8 SVG from Figma - Pixel Perfect Full Screen */}
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
          src={desktop8FigmaExport}
          alt="Domain and IP"
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
        className="nav-link"
        data-path="/domains"
        style={{
          position: "absolute",
          top: "39px",
          left: "918px",
          width: "170px",
          height: "16px",
          zIndex: 11,
          cursor: "pointer",
          margin: 0,
          padding: 0,
          outline: "none",
          WebkitTapHighlightColor: "transparent",
          backgroundColor: "transparent",
          color: isActive("/domains") || hoveredLink === "/domains" ? "#FFFFFF" : "#000000",
          fontFamily: "inherit",
          fontSize: "12px",
          fontWeight: "bold",
          display: "flex",
          alignItems: "center",
          textDecoration: "none",
          transition: "color 0.2s ease",
        }}
        aria-label="Domain and IP"
        onMouseEnter={() => setHoveredLink("/domains")}
        onMouseLeave={() => setHoveredLink(null)}
        onFocus={(e) => e.currentTarget.blur()}
      >
        Domain and IP
      </Link>

      {/* DNS and Server Link */}
      <Link
        to="/dns"
        className="nav-link"
        data-path="/dns"
        style={{
          position: "absolute",
          top: "39px",
          left: "1091px",
          width: "180px",
          height: "16px",
          zIndex: 11,
          cursor: "pointer",
          margin: 0,
          padding: 0,
          outline: "none",
          WebkitTapHighlightColor: "transparent",
          backgroundColor: "transparent",
          color: isActive("/dns") || hoveredLink === "/dns" ? "#FFFFFF" : "#000000",
          fontFamily: "inherit",
          fontSize: "12px",
          fontWeight: "bold",
          display: "flex",
          alignItems: "center",
          textDecoration: "none",
          transition: "color 0.2s ease",
        }}
        aria-label="DNS and Server"
        onMouseEnter={() => setHoveredLink("/dns")}
        onMouseLeave={() => setHoveredLink(null)}
        onFocus={(e) => e.currentTarget.blur()}
      >
        DNS and Server
      </Link>

      {/* Web Hosting Link */}
      <Link
        to="/hosting"
        className="nav-link"
        data-path="/hosting"
        style={{
          position: "absolute",
          top: "39px",
          left: "1270px",
          width: "150px",
          height: "16px",
          zIndex: 11,
          cursor: "pointer",
          margin: 0,
          padding: 0,
          outline: "none",
          WebkitTapHighlightColor: "transparent",
          backgroundColor: "transparent",
          color: isActive("/hosting") || hoveredLink === "/hosting" ? "#FFFFFF" : "#000000",
          fontFamily: "inherit",
          fontSize: "12px",
          fontWeight: "bold",
          display: "flex",
          alignItems: "center",
          textDecoration: "none",
          transition: "color 0.2s ease",
        }}
        aria-label="Web Hosting"
        onMouseEnter={() => setHoveredLink("/hosting")}
        onMouseLeave={() => setHoveredLink(null)}
        onFocus={(e) => e.currentTarget.blur()}
      >
        Web Hosting
      </Link>
    </main>
  );
}

export default DomainsPage;
