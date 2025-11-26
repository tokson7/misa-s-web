import React from "react";
import { Link, useLocation } from "react-router-dom";
import PageHeader from "./PageHeader";
import PageLogo from "./PageLogo";

// Import logos for different pages
import group8 from "../../assets/desktop8/group-8.webp";
import group9 from "../../assets/desktop8/group-9.webp";
import group10 from "../../assets/desktop6/group-10.webp";
import group11 from "../../assets/desktop6/group-11.webp";
import image2 from "../../assets/desktop5/image.svg";
import vector2 from "../../assets/desktop5/vector-2.svg";
import vector3 from "../../assets/desktop5/vector-3.svg";
import vector4 from "../../assets/desktop5/vector-4.svg";
import vector5 from "../../assets/desktop5/vector-5.svg";
import vector6 from "../../assets/desktop5/vector-6.svg";
import vector7 from "../../assets/desktop5/vector-7.svg";
import vector8 from "../../assets/desktop5/vector-8.svg";

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

    // Home page logo vectors
    const homeLogoVectors = [
      { src: image2, className: "absolute w-[4.04%] h-[98.54%] top-0 left-0" },
      {
        src: vector2,
        className: "absolute w-[15.36%] h-[74.33%] top-[24.21%] left-[6.32%]",
      },
      {
        src: vector3,
        className: "absolute w-[9.20%] h-[94.89%] top-[3.65%] left-[23.27%]",
      },
      {
        src: vector4,
        className: "absolute w-[13.42%] h-[75.96%] top-[24.06%] left-[33.59%]",
      },
      {
        src: vector5,
        className: "absolute w-[10.06%] h-[73.97%] top-[24.57%] left-[48.22%]",
      },
      {
        src: vector6,
        className: "absolute w-[15.36%] h-[74.33%] top-[24.21%] left-[59.23%]",
      },
      {
        src: vector7,
        className: "absolute w-[13.42%] h-[75.96%] top-[24.06%] left-[76.39%]",
      },
      {
        src: vector8,
        className: "absolute w-[9.20%] h-[94.89%] top-[3.65%] left-[90.80%]",
      },
    ];

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

        {/* Logo - Different per page */}
        {variant === "home" ? (
          <Link
            to="/"
            className="hidden lg:block absolute w-[9.03%] h-0 top-0 left-[9.24%] z-10 cursor-pointer hover:opacity-90 transition-opacity"
            aria-label="Home Logo"
          >
            {homeLogoVectors.map((vector, index) => (
              <img
                key={index}
                className={vector.className}
                alt=""
                src={vector.src}
                loading="eager"
              />
            ))}
          </Link>
        ) : variant === "domains" || variant === "dns" ? (
          <PageLogo
            logo1={group8}
            logo2={group9}
            logo1Alt="Logo"
            logo2Alt="Logo"
          />
        ) : (
          <PageLogo
            logo1={group10}
            logo2={group11}
            logo1Alt="Logo"
            logo2Alt="Logo"
          />
        )}

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
