import React, { memo } from "react";
import { Link, useLocation } from "react-router-dom";

interface NavItemProps {
  to: string;
  label: string;
  top: string;
  left: string;
}

const NavItem = memo<NavItemProps>(({ to, label, top, left }) => {
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
        color: "#3B82F6", // accent.main - clean blue, single layer only
        letterSpacing: "0.01em",
        lineHeight: 1.5, // Improved line height for readability
        textShadow: "none", // Absolutely no shadows - single layer only
        filter: "none", // No filters that could cause ghosting
        opacity: 1, // Full opacity - no transparency layers
        textDecoration: isActive ? "underline" : "none",
        textUnderlineOffset: isActive ? "4px" : "0px",
        textDecorationThickness: isActive ? "2px" : "0px",
        textDecorationColor: "#3B82F6", // Blue underline to match text
        transition: "color 0.15s linear, text-decoration 0.15s linear",
        cursor: "pointer",
        zIndex: 11,
        margin: 0,
        padding: "0.25rem 0.5rem", // Padding for better click area and spacing
        outline: "none",
        WebkitTapHighlightColor: "transparent",
        backgroundColor: "transparent", // No background that could create layers
        border: "none",
        boxShadow: "none", // No box shadows
        transform: "none", // No transforms that could duplicate
        whiteSpace: "nowrap", // Prevent text wrapping
        display: "block", // Block display to ensure single rendering
        pointerEvents: "auto", // Re-enable clicks for links
        isolation: "isolate", // Create new stacking context to prevent overlap
      }}
      aria-label={label}
      onMouseEnter={(e) => {
        e.currentTarget.style.color = "#FFFFFF";
        e.currentTarget.style.textShadow = "none"; // No shadow on hover
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.color = isActive ? "#3B82F6" : "#3B82F6";
        e.currentTarget.style.textShadow = "none"; // No shadow ever
      }}
      onFocus={(e) => {
        e.currentTarget.style.color = "#FFFFFF";
        e.currentTarget.style.textShadow = "none";
      }}
      onBlur={(e) => {
        e.currentTarget.style.color = isActive ? "#3B82F6" : "#3B82F6";
        e.currentTarget.style.textShadow = "none";
      }}
    >
      {label}
    </Link>
  );
});

const Navbar = memo(() => {
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
});

Navbar.displayName = "Navbar";

export default Navbar;
