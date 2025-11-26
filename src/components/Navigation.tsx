import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navigation = React.memo(() => {
  const location = useLocation();

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/domains", label: "Domains" },
    { to: "/dns", label: "DNS" },
    { to: "/hosting", label: "Hosting" },
  ] as const;

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-md border-b border-gray-200/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link
            to="/"
            className="text-xl sm:text-2xl font-bold text-[#0000cb] hover:text-[#000099] transition-colors"
          >
            Misa's Web
          </Link>
          <div className="flex items-center gap-4 sm:gap-6 lg:gap-8">
            {navLinks.map((link) => {
              const active = isActive(link.to);
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`
                    text-sm sm:text-base font-semibold transition-colors
                    ${
                      active
                        ? "text-[#0000cb] border-b-2 border-[#0000cb] pb-1"
                        : "text-gray-700 hover:text-[#0000cb]"
                    }
                  `}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
});

Navigation.displayName = "Navigation";

export default Navigation;

