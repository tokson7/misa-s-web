import React from "react";

interface ResponsiveImageProps {
  src: string;
  alt: string;
  className?: string;
  loading?: "lazy" | "eager";
  objectFit?: "contain" | "cover" | "fill" | "none" | "scale-down";
}

const ResponsiveImage = React.memo<ResponsiveImageProps>(
  ({ src, alt, className = "", loading = "lazy", objectFit = "contain" }) => {
    const objectFitClass =
      objectFit === "contain"
        ? "object-contain"
        : objectFit === "cover"
          ? "object-cover"
          : `object-${objectFit}`;

    // If className includes width classes, don't add default w-full
    const hasWidthClass = /w-|width/i.test(className);
    const baseClasses = hasWidthClass ? "" : "w-full h-auto";

    return (
      <img
        src={src}
        alt={alt}
        className={`${baseClasses} ${objectFitClass} ${className}`.trim()}
        loading={loading}
      />
    );
  }
);

ResponsiveImage.displayName = "ResponsiveImage";

export default ResponsiveImage;
