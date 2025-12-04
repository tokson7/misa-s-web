import { Link } from "react-router-dom";

/**
 * Single, clean navigation menu component
 * - Dark text (#1A1A1A) for maximum contrast
 * - White (#FFFFFF) on hover (temporary)
 * - No blur, shadows, or opacity layers
 * - Crisp sharp rendering
 * - Original positioning restored (scrolls with page)
 * - Links with proper spacing (gap-x-8 = 32px)
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
        position: "absolute",
        top: "44px",
        left: "918px",
        width: "auto",
        height: "auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        zIndex: 1000,
        backgroundColor: "transparent",
        pointerEvents: "none",
      }}
    >
      {/* Navigation Links - SINGLE INSTANCE ONLY */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "32px", // gap-x-8 = 2rem = 32px
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
              color: "#1A1A1A", // primary.main - dark color for maximum contrast
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
              e.currentTarget.style.color = "#1A1A1A";
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
