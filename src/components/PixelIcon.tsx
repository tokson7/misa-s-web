import React from "react";

interface PixelIconProps {
  color?: string;
  size?: number;
  className?: string;
}

// Network/Internet pixel-art icon (square with 4 corner pixels extending)
export const NetworkIcon: React.FC<PixelIconProps> = ({
  color = "currentColor",
  size = 24,
  className = "",
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Main square */}
      <rect x="8" y="8" width="8" height="8" fill={color} />
      {/* Top-left corner pixel */}
      <rect x="6" y="6" width="2" height="2" fill={color} />
      {/* Top-right corner pixel */}
      <rect x="16" y="6" width="2" height="2" fill={color} />
      {/* Bottom-left corner pixel */}
      <rect x="6" y="16" width="2" height="2" fill={color} />
      {/* Bottom-right corner pixel */}
      <rect x="16" y="16" width="2" height="2" fill={color} />
    </svg>
  );
};

// Checkmark/corner bracket icon (square with bottom-right corner cut out)
export const CheckmarkIcon: React.FC<PixelIconProps> = ({
  color = "currentColor",
  size = 24,
  className = "",
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Square with bottom-right corner cut out - pixel art style */}
      <rect x="6" y="6" width="12" height="12" fill={color} />
      <rect x="16" y="16" width="2" height="2" fill="transparent" />
    </svg>
  );
};

// Bookmark/folded paper icon - pixel art style
export const BookmarkIcon: React.FC<PixelIconProps> = ({
  color = "currentColor",
  size = 24,
  className = "",
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Pixel art bookmark - folded paper style */}
      <rect x="8" y="4" width="8" height="16" fill={color} />
      <rect x="6" y="6" width="2" height="2" fill={color} />
      <rect x="16" y="6" width="2" height="2" fill={color} />
      <rect x="10" y="18" width="4" height="2" fill={color} />
    </svg>
  );
};

export default NetworkIcon;

