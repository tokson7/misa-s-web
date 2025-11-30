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
        fontWeight: 700,
        fontSize: "22px",
        color: "#000000",
        letterSpacing: 0,
        lineHeight: 1,
        textShadow: "none",
        filter: "none",
        opacity: 1,
        textDecoration: isActive ? "underline" : "none",
        textUnderlineOffset: isActive ? "4px" : "0px",
        transition: "color 0.15s linear",
        cursor: "pointer",
        zIndex: 11,
        margin: 0,
        padding: 0,
        outline: "none",
        WebkitTapHighlightColor: "transparent",
        backgroundColor: "transparent",
        border: "none",
        boxShadow: "none",
        transform: "none",
      }}
      aria-label={label}
      onMouseEnter={(e) => {
        e.currentTarget.style.color = "#FFFFFF";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.color = "#000000";
      }}
      onFocus={(e) => {
        e.currentTarget.blur();
      }}
    >
      {label}
    </Link>
  );
};

const Navbar: React.FC = () => {
  return (
    <>
      <NavItem
        to="/domains"
        label="Domain and IP"
        top="39px"
        left="918px"
      />
      <NavItem
        to="/dns"
        label="DNS and Server"
        top="39px"
        left="1091px"
      />
      <NavItem
        to="/hosting"
        label="Web Hosting"
        top="39px"
        left="1270px"
      />
    </>
  );
};

export default Navbar;
