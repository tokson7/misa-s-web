import React from "react";
import { Link, useLocation } from "react-router-dom";

interface NavButtonProps {
  to: string;
  svgPath: string;
  viewBox: string;
  label: string;
  top: string;
  left: string;
  width: string;
  height: string;
}

const NavButton: React.FC<NavButtonProps> = ({
  to,
  svgPath,
  viewBox,
  label,
  top,
  left,
  width,
  height,
}) => {
  const location = useLocation();
  const [isHovered, setIsHovered] = React.useState(false);
  
  const isActive = location.pathname === to || location.pathname.startsWith(to);
  const fillColor = isActive || isHovered ? "#FFFFFF" : "#000000";

  return (
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
        backgroundColor: "transparent",
        display: "flex",
        alignItems: "center",
        textDecoration: "none",
      }}
      aria-label={label}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={(e) => e.currentTarget.blur()}
    >
      <svg
        width={width}
        height={height}
        viewBox={viewBox}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: "100%", height: "100%" }}
      >
        <path d={svgPath} fill={fillColor} style={{ transition: "fill 0.2s ease" }} />
      </svg>
    </Link>
  );
};

export default NavButton;

