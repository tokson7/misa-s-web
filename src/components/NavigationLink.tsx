import React from "react";
import { Link, useLocation } from "react-router-dom";

interface NavigationLinkProps {
  to: string;
  label: string;
  top: string;
  left: string;
  width: string;
  height: string;
}

const NavigationLink: React.FC<NavigationLinkProps> = ({
  to,
  label,
  top,
  left,
  width,
  height,
}) => {
  const location = useLocation();
  const isActive = location.pathname === to || location.pathname.startsWith(to);

  return (
    <>
      {/* Invisible clickable overlay */}
      <Link
        to={to}
        style={{
          position: "absolute",
          top,
          left,
          width,
          height,
          zIndex: 11,
          cursor: "pointer",
          margin: 0,
          padding: 0,
          outline: "none",
          WebkitTapHighlightColor: "transparent",
        }}
        aria-label={label}
        onFocus={(e) => e.currentTarget.blur()}
      />
      {/* Visible text overlay */}
      <div
        style={{
          position: "absolute",
          top,
          left,
          width,
          height,
          zIndex: 12,
          pointerEvents: "none",
          display: "flex",
          alignItems: "center",
          fontFamily: "inherit",
          fontSize: "12px",
          fontWeight: "bold",
          color: isActive ? "#FFFFFF" : "#000000",
          transition: "color 0.2s ease",
        }}
        className="nav-text-overlay"
        data-hover-target={to}
      >
        {label}
      </div>
      <style>{`
        a[aria-label="${label}"]:hover ~ .nav-text-overlay[data-hover-target="${to}"],
        a[aria-label="${label}"]:hover + .nav-text-overlay[data-hover-target="${to}"] {
          color: #FFFFFF !important;
        }
      `}</style>
    </>
  );
};

export default NavigationLink;

