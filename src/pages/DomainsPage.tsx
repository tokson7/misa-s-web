import React from "react";
import NavigationButtons from "../components/NavigationButtons";
import desktopImage from "../assets/desktop8/desktop8.png";

function DomainsPage(): React.ReactElement {
  return (
    <div
      className="relative w-full min-w-0 lg:min-w-[1440px] min-h-screen bg-white overflow-x-hidden"
      style={{
        backgroundImage: `url(${desktopImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Navigation Buttons - Responsive */}
      <NavigationButtons backTo="/dns" finishTo="/" />
    </div>
  );
}

export default React.memo(DomainsPage);
