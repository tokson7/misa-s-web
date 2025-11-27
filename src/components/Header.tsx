import React from "react";
import { Link, useLocation } from "react-router-dom";

interface HeaderProps {
  logo?: React.ReactNode;
  navigationItems?: Array<{
    text: string;
    desktopLeft: string;
    to: string;
  }>;
  desktopTop?: string;
  desktopLeft?: string;
  textColor?: string;
  showLogo?: boolean;
  logoPosition?: { top?: string; left?: string };
}

const defaultNavigationItems = [
  { text: "Domain and IP", desktopLeft: "lg:left-[768px]", to: "/domains" },
  { text: "DNS and Server", desktopLeft: "lg:left-[945px]", to: "/dns" },
  { text: "Web Hosting", desktopLeft: "lg:left-[1110px]", to: "/hosting" },
] as const;

const Header = React.memo<HeaderProps>(
  ({
    logo,
    navigationItems = defaultNavigationItems,
    desktopTop = "lg:top-[39px]",
    desktopLeft,
    textColor = "text-[#0000cb]",
    showLogo = false,
    logoPosition,
  }) => {
    const location = useLocation();

    return (
      <>
        {/* Logo - if provided */}
        {showLogo && logo && (
          <Link
            to="/"
            className={`hidden lg:block absolute ${logoPosition?.top || "top-0"} ${logoPosition?.left || "left-[122px]"} z-10 cursor-pointer`}
          >
            {logo}
          </Link>
        )}

        {/* Navigation Menu - matches Figma positioning */}
        <nav
          className={`relative ${desktopTop} ${desktopLeft || ""} w-full lg:w-[724px] mt-16 lg:mt-0 mb-8 lg:mb-0 px-4 sm:px-6 lg:px-0 lg:absolute z-10`}
        >
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:block">
            {navigationItems.map((item, index) => {
              const isActive =
                location.pathname === item.to ||
                (item.to !== "/" && location.pathname.startsWith(item.to));

              return (
                <Link
                  key={index}
                  to={item.to}
                  className={`lg:absolute lg:w-[382px] lg:top-0 ${item.desktopLeft} [font-family:'Funnel_Display-ExtraBold',Helvetica] font-extrabold ${textColor} text-sm sm:text-base text-center tracking-normal leading-normal hover:underline cursor-pointer transition-opacity ${
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

Header.displayName = "Header";

export default Header;
