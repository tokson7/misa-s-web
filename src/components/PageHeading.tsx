import React from "react";

interface HeadingPart {
  text: string;
  className?: string;
  breakAfter?: boolean;
}

interface PageHeadingProps {
  parts: HeadingPart[];
  desktopTop?: string;
  desktopLeft?: string;
  desktopWidth?: string;
  className?: string;
}

const PageHeading = React.memo<PageHeadingProps>(
  ({
    parts,
    desktopTop = "lg:top-[298px]",
    desktopLeft = "lg:left-[99px]",
    desktopWidth = "lg:w-[1005px]",
    className = "",
  }) => {
    return (
      <h1
        className={`relative ${desktopTop} ${desktopLeft} w-full ${desktopWidth} px-4 sm:px-6 lg:px-0 mt-8 lg:mt-0 mb-12 lg:mb-0 [font-family:'Funnel_Display-Bold',Helvetica] font-bold text-transparent text-4xl sm:text-5xl md:text-6xl lg:text-8xl tracking-normal leading-tight lg:leading-normal ${className}`}
      >
        {parts.map((part, index) => (
          <React.Fragment key={index}>
            <span className={part.className || ""}>{part.text}</span>
            {part.breakAfter && <br />}
          </React.Fragment>
        ))}
      </h1>
    );
  }
);

PageHeading.displayName = "PageHeading";

export default PageHeading;
