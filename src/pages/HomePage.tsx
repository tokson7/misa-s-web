import React from "react";
import { Link } from "react-router-dom";
import desktop5Complete from "../assets/desktop5/desktop-5-complete.svg";

function HomePage(): React.ReactElement {
  return (
    <main className="bg-white overflow-hidden w-full min-w-[1440px] relative">
      {/* Complete Desktop 5 SVG from Figma - pixel perfect */}
      <img
        src={desktop5Complete}
        alt="How the Internet Works"
        className="w-full h-auto"
        style={{ display: "block" }}
      />

      {/* Navigation Links - positioned over the SVG to maintain interactivity */}
      <nav
        className="absolute top-[39px] left-[784px] flex gap-[177px]"
        aria-label="Main navigation"
      >
        <Link
          to="/domains"
          className="absolute left-[0px] top-0 w-[114px] h-[12px] opacity-0 hover:opacity-20 hover:bg-blue-500 transition-opacity"
          aria-label="Domain and IP"
        />
        <Link
          to="/dns"
          className="absolute left-[177px] top-0 w-[114px] h-[12px] opacity-0 hover:opacity-20 hover:bg-blue-500 transition-opacity"
          aria-label="DNS and Server"
        />
        <Link
          to="/hosting"
          className="absolute left-[342px] top-0 w-[114px] h-[12px] opacity-0 hover:opacity-20 hover:bg-blue-500 transition-opacity"
          aria-label="Web Hosting"
        />
      </nav>

      {/* Logo Link */}
      <Link
        to="/"
        className="absolute top-0 left-[46px] w-[217px] h-[54px] opacity-0 hover:opacity-20 hover:bg-blue-500 transition-opacity"
        aria-label="Home"
      />
    </main>
  );
}

export default HomePage;
