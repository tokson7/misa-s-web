import React from "react";
import { Link } from "react-router-dom";
import desktop5FigmaExport from "../assets/desktop5/desktop-5-figma-export.svg";

function HomePage(): React.ReactElement {
  return (
    <main 
      className="bg-white overflow-hidden w-full min-w-[1440px] relative" 
      style={{ 
        width: "1440px",
        height: "4776px",
        position: "relative",
        backgroundColor: "#FFFFFF"
      }}
    >
      {/* Complete Desktop 5 SVG from Figma - Pixel Perfect */}
      <div 
        className="absolute top-0 left-0 w-full h-full"
        style={{
          width: "1440px",
          height: "4776px",
          position: "absolute",
          top: "0px",
          left: "0px",
          overflow: "hidden"
        }}
      >
        <img
          src={desktop5FigmaExport}
          alt="How the Internet Works"
          style={{
            display: "block",
            width: "1440px",
            height: "4776px",
            position: "absolute",
            top: "0px",
            left: "0px",
            objectFit: "none",
            objectPosition: "top left",
            pointerEvents: "none"
          }}
        />
      </div>

      {/* Navigation Links - positioned over the SVG to maintain interactivity */}
      {/* Domain and IP Link */}
      <Link
        to="/domains"
        style={{
          position: "absolute",
          top: "39px",
          left: "784px",
          width: "114px",
          height: "12px",
          opacity: 0,
          zIndex: 10,
          cursor: "pointer"
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
          left: "961px",
          width: "114px",
          height: "12px",
          opacity: 0,
          zIndex: 10,
          cursor: "pointer"
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
          left: "1126px",
          width: "114px",
          height: "12px",
          opacity: 0,
          zIndex: 10,
          cursor: "pointer"
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
          cursor: "pointer"
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
    </main>
  );
}

export default HomePage;
