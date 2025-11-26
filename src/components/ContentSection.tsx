import React from "react";
import ResponsiveImage from "./ResponsiveImage";

interface ContentSectionProps {
  title: string;
  content?: string;
  example?: string;
  exampleText?: string;
  rectangle?: string;
  rectangleClasses?: string;
  contentClasses?: string;
  iconClasses?: string;
  iconVectors?: string[];
  index?: number;
}

const ContentSection = React.memo<ContentSectionProps>(
  ({
    title,
    content,
    example,
    exampleText,
    rectangle,
    rectangleClasses = "",
    contentClasses = "",
    iconClasses = "",
    iconVectors = [],
    index = 0,
  }) => {
    const ICON_POSITIONS = [
      "top-[74.99%] left-[24.99%]",
      "top-[50.00%] left-[50.00%]",
      "top-[50.00%] left-0",
      "top-[24.99%] left-[24.99%]",
      "top-[24.99%] left-[74.99%]",
      "top-0 left-0",
    ] as const;

    return (
      <div className="relative lg:block lg:absolute">
        {rectangle && (
          <>
            <ResponsiveImage
              src={rectangle}
              alt=""
              className={`lg:hidden w-full h-auto mb-6 rounded-lg ${rectangleClasses}`}
              loading="lazy"
            />
            <img
              src={rectangle}
              alt=""
              className={`hidden lg:block absolute w-[1246px] ${rectangleClasses} object-contain`}
              loading="lazy"
            />
          </>
        )}

        {iconVectors.length > 0 && (
          <div
            className={`hidden lg:block absolute w-[2.64%] h-[2.10%] left-[9.31%] ${iconClasses}`}
          >
            {iconVectors.map((iconSrc, iconIndex) => (
              <img
                key={`icon-${iconIndex}`}
                className={`absolute w-[24.99%] h-[24.99%] ${ICON_POSITIONS[iconIndex] || ""}`}
                alt=""
                src={iconSrc}
                loading="lazy"
              />
            ))}
          </div>
        )}

        <article
          className={`w-full lg:absolute lg:w-[1034px] ${contentClasses} [font-family:'Funnel_Display-SemiBold',Helvetica] font-normal text-black text-xl sm:text-2xl md:text-3xl lg:text-[32px] tracking-normal leading-relaxed lg:leading-normal`}
        >
          <h2 className="font-semibold mb-4 lg:mb-0">
            {title}
            {content && <br className="hidden lg:block" />}
          </h2>

          {content && (
            <>
              <span className="[font-family:'Funnel_Sans-Regular',Helvetica]">
                {" "}
              </span>
              <p className="[font-family:'Funnel_Sans-Regular',Helvetica] text-lg sm:text-xl md:text-2xl lg:text-[28px] mt-2 lg:mt-0">
                {content}
                {example && <br className="hidden lg:block" />}
              </p>
            </>
          )}

          {example && (
            <>
              {index === 1 && (
                <span className="[font-family:'Funnel_Sans-Regular',Helvetica] text-xl hidden lg:inline">
                  <br />
                </span>
              )}
              <span className="[font-family:'Funnel_Sans-Regular',Helvetica] text-base sm:text-lg lg:text-base block lg:inline mt-2 lg:mt-0">
                {example}
                <br />
              </span>
            </>
          )}

          {exampleText && (
            <span className="[font-family:'Funnel_Sans-Regular',Helvetica] text-base sm:text-lg md:text-xl lg:text-[28px] block mt-3 lg:mt-0 whitespace-pre-line">
              {exampleText}
            </span>
          )}

          {index === 1 && content && (
            <span className="[font-family:'Funnel_Sans-Regular',Helvetica] hidden lg:inline">
              {" "}
              <br />
            </span>
          )}

          {index === 0 && content && (
            <span className="[font-family:'Inter-Regular',Helvetica] hidden lg:inline">
              {" "}
            </span>
          )}
        </article>
      </div>
    );
  }
);

ContentSection.displayName = "ContentSection";

export default ContentSection;

