import { memo } from "react";
import { Link } from "react-router-dom";

interface NavItemProps {
  to: string;
  label: string;
  left: string;
}

const NavItem = memo<NavItemProps>(({ to, label, left }) => {
  return (
    <Link
      to={to}
      className="navbar-item"
      style={{
        position: "absolute",
        top: "0",
        left,
        fontFamily: "'Inter', sans-serif",
        fontWeight: 700,
        fontSize: "12px",
        lineHeight: 1,
        letterSpacing: "0",
        color: "#000000",
        textDecoration: "none",
        cursor: "pointer",
        zIndex: 10000,
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
        zIndex: 10000,
        pointerEvents: "none",
      }}
      aria-label="Main navigation"
    >
      <NavItem to="/domains" label="Domain and IP" left="918px" />
      <NavItem to="/dns" label="DNS and Server" left="1091px" />
      <NavItem to="/hosting" label="Web Hosting" left="1270px" />
    </nav>
  );
});

Navbar.displayName = "Navbar";
NavItem.displayName = "NavItem";

export default Navbar;
