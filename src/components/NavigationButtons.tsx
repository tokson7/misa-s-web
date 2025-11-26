import React from "react";
import { Link } from "react-router-dom";

interface NavigationButtonsProps {
  backTo?: string;
  backText?: string;
  nextTo?: string;
  nextText?: string;
  finishTo?: string;
  finishText?: string;
}

const NavigationButtons = React.memo<NavigationButtonsProps>(
  ({
    backTo,
    backText = "← Back",
    nextTo,
    nextText = "Next →",
    finishTo,
    finishText = "Finish / Home",
  }) => {
    return (
      <div className="fixed lg:absolute bottom-4 lg:bottom-[80px] left-4 lg:left-[100px] right-4 lg:right-[100px] flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-4 z-50">
        {backTo && (
          <Link
            to={backTo}
            className="px-6 sm:px-8 py-3 sm:py-4 bg-gray-300 text-black [font-family:'Funnel_Display-ExtraBold',Helvetica] font-extrabold text-base sm:text-lg rounded-lg hover:bg-gray-400 transition-colors cursor-pointer text-center shadow-lg"
          >
            {backText}
          </Link>
        )}
        {nextTo && (
          <Link
            to={nextTo}
            className="px-6 sm:px-8 py-3 sm:py-4 bg-[#0000cb] text-white [font-family:'Funnel_Display-ExtraBold',Helvetica] font-extrabold text-base sm:text-lg rounded-lg hover:bg-[#000099] transition-colors cursor-pointer text-center shadow-lg"
          >
            {nextText}
          </Link>
        )}
        {finishTo && (
          <Link
            to={finishTo}
            className="px-6 sm:px-8 py-3 sm:py-4 bg-[#0000cb] text-white [font-family:'Funnel_Display-ExtraBold',Helvetica] font-extrabold text-base sm:text-lg rounded-lg hover:bg-[#000099] transition-colors cursor-pointer text-center shadow-lg"
          >
            {finishText}
          </Link>
        )}
      </div>
    );
  }
);

NavigationButtons.displayName = "NavigationButtons";

export default NavigationButtons;
