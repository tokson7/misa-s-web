import { memo } from "react";
import { Link, useLocation } from "react-router-dom";

interface NavItemProps {
  to: string;
  label: string;
  top: string;
  left: string;
  fontSize?: string; // Optional font size to match exact SVG dimensions
}

const NavItem = memo<NavItemProps>(({ to, label, top, left, fontSize = "12px" }) => {
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
        fontSize: fontSize, // EXACT size from desktop SVG files (12px for Domain/DNS, 15px for Web Hosting)
        color: "#000000", // EXACT color from desktop SVG files - fill="black"
        letterSpacing: "0em", // No letter spacing to match SVG exactly
        lineHeight: 1, // Exact line height to match SVG text rendering
        textShadow: "none", // CRITICAL: No shadows - single layer only (as per SVG)
        filter: "none", // No filters that could cause ghosting
        opacity: 1, // Full opacity - no transparency layers
        textDecoration: isActive ? "underline" : "none",
        textUnderlineOffset: isActive ? "4px" : "0px",
        textDecorationThickness: isActive ? "2px" : "0px",
        textDecorationColor: "#000000", // Black underline to match SVG text color
        transition: "color 0.15s linear, text-decoration 0.15s linear",
        cursor: "pointer",
        zIndex: 9999, // Very high z-index to ensure it's above SVG
        margin: 0,
        padding: "0.25rem 0.5rem", // Padding for better click area and spacing
        outline: "none",
        WebkitTapHighlightColor: "transparent",
        backgroundColor: "rgba(255, 255, 255, 0.001)", // Minimal background to completely cover SVG text underneath
        border: "none",
        boxShadow: "none", // No box shadows
        transform: "none", // No transforms that could duplicate
        whiteSpace: "nowrap", // Prevent text wrapping
        display: "block", // Block display to ensure single rendering
        pointerEvents: "auto", // Re-enable clicks for links
        isolation: "isolate", // Create new stacking context to prevent overlap
        WebkitTextStroke: "none", // Remove any text stroke that could create ghosting
        WebkitTextFillColor: "#000000", // Force exact black fill color
      }}
      aria-label={label}
      onMouseEnter={(e) => {
        e.currentTarget.style.color = "#FFFFFF";
        e.currentTarget.style.textShadow = "none"; // No shadow on hover
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.color = "#000000"; // EXACT color from desktop SVG - fill="black"
        e.currentTarget.style.textShadow = "none"; // No shadow ever
      }}
      onFocus={(e) => {
        e.currentTarget.style.color = "#FFFFFF";
        e.currentTarget.style.textShadow = "none";
      }}
      onBlur={(e) => {
        e.currentTarget.style.color = "#000000"; // EXACT color from desktop SVG - fill="black"
        e.currentTarget.style.textShadow = "none";
      }}
    >
      {label}
    </Link>
  );
});

const Navbar = memo(() => {
  // Navigation menu styled to match EXACT desktop SVG files
  // Colors: fill="black" (#000000) from desktop SVG files
  // Sizes: Domain and IP (114x12px), DNS and Server (123x12px), Web Hosting (100x15px)
  // Single-layer rendering, no shadows or ghosting
  return (
    <nav
      style={{
        position: "absolute",
        top: "39px",
        left: "0",
        width: "100%",
        height: "auto",
        zIndex: 9999, // Very high z-index to ensure it's above SVG
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
        fontSize="15px" // Web Hosting SVG is 100x15px, so 15px font size
      />
    </nav>
  );
});

Navbar.displayName = "Navbar";

export default Navbar;
