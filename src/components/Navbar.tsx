import { Link } from "react-router-dom";

/**
 * Brand new, clean navbar component
 * - Pure black text (#000000) by default
 * - White (#FFFFFF) on hover
 * - No blur, no shadows, no opacity layers
 * - Pixel-sharp rendering
 * - Correct routing for all pages
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
        zIndex: 10000,
        pointerEvents: "none",
        backgroundColor: "transparent",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "110px",
          pointerEvents: "auto",
        }}
      >
        {navItems.map((item) => {
          return (
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
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;

