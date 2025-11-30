import React from "react";
import { Link } from "react-router-dom";
import desktop7FigmaExport from "../assets/desktop7/desktop-7-figma-export.svg";

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
        backgroundColor: "#FFFFFF"
      }}
    >
      {/* Complete Desktop 7 SVG from Figma - Pixel Perfect Full Screen */}
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
          src={desktop7FigmaExport}
          alt="DNS and Server"
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
          left: "773px",
          width: "114px",
          height: "12px",
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
          left: "950px",
          width: "114px",
          height: "12px",
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
          left: "1115px",
          width: "114px",
          height: "12px",
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

export default DnsPage;
