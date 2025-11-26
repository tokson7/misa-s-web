import React from "react";
import { Link } from "react-router-dom";

export interface NavigationItem {
  text: string;
  desktopLeft: string;
  to: string;
}

interface NavigationMenuProps {
  items: readonly NavigationItem[];
  desktopTop?: string;
  desktopLeft?: string;
  textColor?: string;
}

const NavigationMenu = React.memo<NavigationMenuProps>(
  ({
    items,
    desktopTop = "lg:top-[39px]",
    desktopLeft,
    textColor = "text-[#0000cb]",
  }) => {
    return (
      <nav
        className={`relative ${desktopTop} ${desktopLeft || ""} w-full lg:w-[724px] mt-16 lg:mt-0 mb-8 lg:mb-0 px-4 sm:px-6 lg:px-0 lg:absolute`}
      >
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:block">
          {items.map((item, index) => (
            <Link
              key={index}
              to={item.to}
              className={`lg:absolute lg:w-[382px] lg:top-0 ${item.desktopLeft} [font-family:'Funnel_Display-ExtraBold',Helvetica] font-extrabold ${textColor} text-sm sm:text-base text-center tracking-normal leading-normal hover:underline cursor-pointer`}
            >
              {item.text}
            </Link>
          ))}
        </div>
      </nav>
    );
  }
);

NavigationMenu.displayName = "NavigationMenu";

export default NavigationMenu;
