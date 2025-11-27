import React from "react";
import NavigationButtons from "../components/NavigationButtons";
import desktopImage from "../assets/desktop5/desktop5.png";

function HomePage(): React.ReactElement {
  return (
    <main
      className="relative w-full min-w-0 lg:min-w-[1440px] min-h-screen bg-white overflow-x-hidden"
      style={{
        backgroundImage: `url(${desktopImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Navigation Buttons - Responsive */}
      <NavigationButtons nextTo="/hosting" />
    </main>
  );
}

export default React.memo(HomePage);
