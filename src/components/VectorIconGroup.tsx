import React from "react";

interface VectorIcon {
  src: string;
  className?: string;
  classes?: string;
  style?: React.CSSProperties;
}

interface VectorIconGroupProps {
  vectors: readonly VectorIcon[];
  containerClassName?: string;
  desktopOnly?: boolean;
}

const VectorIconGroup = React.memo<VectorIconGroupProps>(
  ({ vectors, containerClassName = "", desktopOnly = true }) => {
    return (
      <>
        {vectors.map((vector, index) => (
          <img
            key={index}
            className={`${desktopOnly ? "hidden lg:block" : ""} absolute w-0 h-0 ${vector.className || vector.classes || ""}`}
            alt=""
            src={vector.src}
            aria-hidden="true"
            loading="lazy"
            style={vector.style}
          />
        ))}
      </>
    );
  }
);

VectorIconGroup.displayName = "VectorIconGroup";

export default VectorIconGroup;
