import { Link } from "react-router-dom";

/**
 * Brand new clean navbar component
 * Built from scratch - no old code
 * - Pure black text (#000000) by default
 * - White (#FFFFFF) on hover (temporary)
 * - No blur, shadows, or opacity layers
 * - Crisp sharp rendering
 * - Fixed at top, 100% width, ~80px height
 * - Links centered with equal spacing
 */
const Navbar = () => {
  const navItems = [
    { label: "Domain and IP", path: "/domains" },
    { label: "DNS and Server", path: "/dns" },
    { label: "Web Hosting", path: "/hosting" },
  ];

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "80px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
        backgroundColor: "transparent",
        pointerEvents: "none",
      }}
    >
      {/* Navigation Links */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "110px",
          pointerEvents: "auto",
        }}
      >
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 700,
              fontSize: "16px",
              lineHeight: 1,
              letterSpacing: 0,
              color: "#000000",
              textDecoration: "none",
              cursor: "pointer",
              transition: "color 150ms ease-in-out",
              textShadow: "none",
              filter: "none",
              WebkitFontSmoothing: "antialiased",
              MozOsxFontSmoothing: "grayscale",
              textRendering: "optimizeLegibility",
              WebkitTextStroke: "none",
              WebkitTapHighlightColor: "transparent",
              mixBlendMode: "normal",
              opacity: 1,
              outline: "none",
              border: "none",
              background: "transparent",
              padding: 0,
              margin: 0,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#FFFFFF";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "#000000";
            }}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
