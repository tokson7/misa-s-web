import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const navItems = [
    { label: "Domain and IP", path: "/domains" },
    { label: "DNS and Server", path: "/dns" },
    { label: "Web Hosting", path: "/hosting" },
  ];

  return (
    <nav 
      className="fixed top-0 left-0 w-full flex items-center justify-center z-[10000] pointer-events-none"
      style={{ height: "80px" }}
    >
      <div className="flex items-center pointer-events-auto" style={{ gap: "110px" }}>
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className="font-sans font-bold text-base no-underline transition-colors duration-[175ms] ease-in-out hover:text-[#FFFFFF] outline-none cursor-pointer select-none"
              style={{
                color: "#000000",
                textShadow: "none",
                filter: "none",
                WebkitFontSmoothing: "antialiased",
                MozOsxFontSmoothing: "grayscale",
                textRendering: "optimizeLegibility",
                WebkitTextStroke: "none",
                WebkitTapHighlightColor: "transparent",
                mixBlendMode: "normal",
                opacity: 1,
                textDecoration: isActive ? "underline" : "none",
                textDecorationColor: isActive ? "#000000" : "transparent",
                textDecorationThickness: isActive ? "1.5px" : "0",
                textUnderlineOffset: isActive ? "4px" : "0",
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

