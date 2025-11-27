import React from "react";

const HEADER_GRADIENT =
  "bg-[linear-gradient(to_bottom_right,rgba(47,0,255,1)_0%,rgba(169,255,71,1)_50%)_bottom_right_/_50%_50%_no-repeat,linear-gradient(to_bottom_left,rgba(47,0,255,1)_0%,rgba(169,255,71,1)_50%)_bottom_left_/_50%_50%_no-repeat,linear-gradient(to_top_left,rgba(47,0,255,1)_0%,rgba(169,255,71,1)_50%)_top_left_/_50%_50%_no-repeat,linear-gradient(to_top_right,rgba(47,0,255,1)_0%,rgba(169,255,71,1)_50%)_top_right_/_50%_50%_no-repeat]";

interface PageHeaderProps {
  width?: string;
  height?: string;
  className?: string;
}

const PageHeader = React.memo<PageHeaderProps>(
  ({ width = "w-[1440px]", height = "h-[79px]", className = "" }) => {
    return (
      <header
        className={`absolute top-px left-px ${width} ${height} rotate-[-180deg] ${HEADER_GRADIENT} ${className}`}
      />
    );
  }
);

PageHeader.displayName = "PageHeader";

export default PageHeader;
