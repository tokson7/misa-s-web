import { memo } from "react";
import { Link } from "react-router-dom";

interface NavLinkProps {
  to: string;
  label: string;
  top: string;
  left: string;
}

const NavLink = memo<NavLinkProps>(({ to, label, top, left }) => {
  return (
    <Link
      to={to}
      className="nav-link"
      style={{
        position: "absolute",
        top,
        left,
        fontFamily: "'Inter', sans-serif", // Using Inter as fallback - update with token if available
        fontWeight: 700,
        fontSize: label === "Web Hosting" ? "15px" : "12px", // Web Hosting uses 15px per SVG dimensions
        lineHeight: 1,
        letterSpacing: "0em",
        color: "#000000",
        textShadow: "none",
        filter: "none",
        WebkitFontSmoothing: "antialiased",
        textDecoration: "none",
        transition: "color 120ms ease-in-out",
        background: "none",
        display: "inline-block",
        transform: "none",
        outline: "none",
        cursor: "pointer",
        zIndex: 9999,
        margin: 0,
        padding: 0,
        border: "none",
        boxShadow: "none",
        whiteSpace: "nowrap",
      }}
      aria-label={label}
    >
      {label}
    </Link>
  );
});

const Navbar = memo(() => {
  return (
    <nav
      className="navbar"
      style={{
        position: "absolute",
        top: "39px",
        left: "0",
        width: "100%",
        height: "auto",
        background: "transparent",
        zIndex: 9999,
        pointerEvents: "none",
      }}
      aria-label="Main navigation"
    >
      <NavLink
        to="/domains"
        label="Domain and IP"
        top="0"
        left="918px"
      />
      <NavLink
        to="/dns"
        label="DNS and Server"
        top="0"
        left="1091px"
      />
      <NavLink
        to="/hosting"
        label="Web Hosting"
        top="0"
        left="1270px"
      />
    </nav>
  );
});

Navbar.displayName = "Navbar";
NavLink.displayName = "NavLink";

export default Navbar;
