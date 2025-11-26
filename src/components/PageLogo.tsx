import React from "react";
import { Link } from "react-router-dom";
import ResponsiveImage from "./ResponsiveImage";

interface PageLogoProps {
  logo1: string;
  logo2?: string;
  logo1Alt?: string;
  logo2Alt?: string;
  className?: string;
}

const PageLogo = React.memo<PageLogoProps>(
  ({
    logo1,
    logo2,
    logo1Alt = "Logo",
    logo2Alt = "Logo",
    className = "",
  }) => {
    return (
      <Link
        to="/"
        className={`relative lg:absolute lg:top-[25px] lg:left-[122px] flex items-center gap-3 px-4 sm:px-6 lg:px-0 mt-4 lg:mt-0 z-10 cursor-pointer hover:opacity-90 transition-opacity ${className}`}
      >
        {logo2 && (
          <ResponsiveImage
            src={logo2}
            alt={logo2Alt}
            className="w-[120px] sm:w-[140px] lg:w-[168px] h-auto lg:h-[31px]"
            loading="eager"
          />
        )}
        <ResponsiveImage
          src={logo1}
          alt={logo1Alt}
          className={`${logo2 ? "w-[100px] sm:w-[140px]" : "w-[168px]"} lg:w-[168px] h-auto lg:h-[31px]`}
          loading="eager"
        />
      </Link>
    );
  }
);

PageLogo.displayName = "PageLogo";

export default PageLogo;

