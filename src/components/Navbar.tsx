import React from "react";
import { Link, useLocation } from "react-router-dom";

interface NavItemProps {
  to: string;
  label: string;
  top: string;
  left: string;
}

const NavItem: React.FC<NavItemProps> = ({ to, label, top, left }) => {
  const location = useLocation();
  const isActive = 
    (to === "/" && location.pathname === "/") ||
    (to !== "/" && (location.pathname === to || location.pathname.startsWith(to + "/")));

  return (
    <Link
      to={to}
      className={`nav-item ${isActive ? "active" : ""}`}
      style={{
        position: "absolute",
        top,
        left,
        fontFamily: "'Inter', sans-serif",
        fontWeight: 600,
        fontSize: "1rem", // base size (16px) for optimal readability
        color: "#1A1A1A", // primary.main - high contrast
        letterSpacing: "0.01em",
        lineHeight: 1.5, // Improved line height for readability
        textShadow: "none", // No shadows to prevent blurring
        filter: "none",
        opacity: 1,
        textDecoration: isActive ? "underline" : "none",
        textUnderlineOffset: isActive ? "4px" : "0px",
        textDecorationThickness: isActive ? "2px" : "0px",
        transition: "color 0.15s linear, text-decoration 0.15s linear",
        cursor: "pointer",
        zIndex: 11,
        margin: 0,
        padding: "0.25rem 0.5rem", // Padding for better click area and spacing
        outline: "none",
        WebkitTapHighlightColor: "transparent",
        backgroundColor: "transparent",
        border: "none",
        boxShadow: "none",
        transform: "none",
        whiteSpace: "nowrap", // Prevent text wrapping
        display: "inline-block", // Ensure proper rendering
        pointerEvents: "auto", // Re-enable clicks for links
      }}
      aria-label={label}
      onMouseEnter={(e) => {
        e.currentTarget.style.color = "#FFFFFF";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.color = isActive ? "#1A1A1A" : "#1A1A1A";
      }}
      onFocus={(e) => {
        e.currentTarget.style.color = "#FFFFFF";
      }}
      onBlur={(e) => {
        e.currentTarget.style.color = isActive ? "#1A1A1A" : "#1A1A1A";
      }}
    >
      {label}
    </Link>
  );
};

const Navbar: React.FC = () => {
  // Using original design positions with improved styling for perfect legibility
  // Each item has proper padding and spacing to ensure clear distinction
  return (
    <nav
      style={{
        position: "absolute",
        top: "39px",
        left: "0",
        width: "100%",
        height: "auto",
        zIndex: 11,
        pointerEvents: "none", // Allow clicks to pass through to children
      }}
      aria-label="Main navigation"
    >
      <NavItem
        to="/domains"
        label="Domain and IP"
        top="0"
        left="918px"
      />
      <NavItem
        to="/dns"
        label="DNS and Server"
        top="0"
        left="1091px"
      />
      <NavItem
        to="/hosting"
        label="Web Hosting"
        top="0"
        left="1270px"
      />
    </nav>
  );
};

export default Navbar;
