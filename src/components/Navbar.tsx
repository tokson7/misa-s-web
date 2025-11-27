import React from "react";
import { Link, useLocation } from "react-router-dom";
import PageHeader from "./PageHeader";

interface NavbarProps {
  navigationTextColor?: string;
  navigationDesktopLeft?: string;
}

const Navbar = React.memo<NavbarProps>(
  ({ navigationTextColor, navigationDesktopLeft }) => {
    const location = useLocation();

    // Auto-detect variant from route
    const getVariant = (): "home" | "domains" | "dns" | "hosting" => {
      if (location.pathname === "/") return "home";
      if (location.pathname.startsWith("/domains")) return "domains";
      if (location.pathname.startsWith("/dns")) return "dns";
      if (location.pathname.startsWith("/hosting")) return "hosting";
      return "home";
    };

    const variant = getVariant();

    // Determine text color based on variant
    const getTextColor = () => {
      if (navigationTextColor) return navigationTextColor;
      return variant === "home" ? "text-black" : "text-[#0000cb]";
    };

    // Navigation items
    const navigationItems = [
      { text: "Domain and IP", desktopLeft: "lg:left-[768px]", to: "/domains" },
      { text: "DNS and Server", desktopLeft: "lg:left-[945px]", to: "/dns" },
      { text: "Web Hosting", desktopLeft: "lg:left-[1110px]", to: "/hosting" },
    ] as const;

    // Determine navigation positioning based on variant
    const getNavigationLeft = () => {
      if (navigationDesktopLeft) return navigationDesktopLeft;
      switch (variant) {
        case "home":
          return "lg:left-[784px]";
        case "domains":
          return "lg:left-0";
        case "dns":
          return "lg:left-[773px]";
        case "hosting":
          return "lg:left-[768px]";
        default:
          return "lg:left-[784px]";
      }
    };

    return (
      <>
        {/* Gradient Header Background */}
        <PageHeader
          width="w-full lg:w-[1440px]"
          height="h-[60px] sm:h-[70px] lg:h-[79px]"
        />

        {/* Logo is now part of the desktop PNG background */}

        {/* Navigation Menu - matches Figma positioning */}
        <nav
          className={`relative lg:top-[39px] ${getNavigationLeft()} w-full lg:w-[724px] mt-16 lg:mt-0 mb-8 lg:mb-0 px-4 sm:px-6 lg:px-0 lg:absolute z-10`}
        >
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:block">
            {navigationItems.map((item, index) => {
              const isActive =
                location.pathname === item.to ||
                location.pathname.startsWith(item.to);

              return (
                <Link
                  key={index}
                  to={item.to}
                  className={`lg:absolute lg:w-[382px] lg:top-0 ${item.desktopLeft} [font-family:'Funnel_Display-ExtraBold',Helvetica] font-extrabold ${getTextColor()} text-sm sm:text-base text-center tracking-normal leading-normal hover:underline cursor-pointer transition-opacity ${
                    isActive ? "opacity-100" : "opacity-90 hover:opacity-100"
                  }`}
                >
                  {item.text}
                </Link>
              );
            })}
          </div>
        </nav>
      </>
    );
  }
);

Navbar.displayName = "Navbar";

export default Navbar;
