import React from "react";
import VectorIconGroup from "./VectorIconGroup";

interface FooterVector {
  src: string;
  classes?: string;
  top?: string;
  left?: string;
}

interface FooterVectorsProps {
  vectors: readonly FooterVector[];
  gradientClass?: string;
}

const FooterVectors = React.memo<FooterVectorsProps>(
  ({ vectors, gradientClass }) => {
    const vectorIcons = vectors.map((vector) => ({
      src: vector.src,
      classes: vector.classes,
      style: {
        ...(vector.top && { top: vector.top }),
        ...(vector.left && { left: vector.left }),
      },
    }));

    if (gradientClass) {
      return (
        <footer
          className={`hidden lg:block absolute w-full h-[5.88%] top-[94.15%] left-0 ${gradientClass}`}
        >
          <VectorIconGroup vectors={vectorIcons} desktopOnly={false} />
        </footer>
      );
    }

    return <VectorIconGroup vectors={vectorIcons} desktopOnly={true} />;
  }
);

FooterVectors.displayName = "FooterVectors";

export default FooterVectors;
