import React from "react";
import { Link } from "react-router-dom";
import { NetworkIcon } from "../components/PixelIcon";

function HostingPage(): React.ReactElement {
  return (
    <main className="relative w-full min-h-screen bg-white overflow-x-hidden">
      {/* Background Gradient - vibrant green to purple/blue covering entire page */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#BFFF00] via-[#80FF00] to-[#4A4AFF]" />

      {/* Header */}
      <header className="relative w-full py-8 px-8 z-10">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 z-20"
          >
            <NetworkIcon color="white" size={31} />
            <span className="text-white [font-family:'Funnel_Display-ExtraBold',Helvetica] font-extrabold text-2xl">
              Internet
            </span>
          </Link>

          {/* Navigation */}
          <nav className="flex gap-8 z-20">
            <Link
              to="/domains"
              className="text-white [font-family:'Funnel_Display-ExtraBold',Helvetica] font-extrabold text-base hover:underline"
            >
              Domain and IP
            </Link>
            <Link
              to="/dns"
              className="text-white [font-family:'Funnel_Display-ExtraBold',Helvetica] font-extrabold text-base hover:underline"
            >
              DNS and Server
            </Link>
            <Link
              to="/hosting"
              className="text-white [font-family:'Funnel_Display-ExtraBold',Helvetica] font-extrabold text-base hover:underline"
            >
              Web Hosting
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content - White background for content area */}
      <div className="relative max-w-7xl mx-auto px-8 py-12 z-10">
        <div className="bg-white/95 rounded-lg p-8 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - Main Title */}
            <div>
              <h1 className="mb-8 [font-family:'Funnel_Display-Bold',Helvetica] font-bold text-8xl leading-tight text-black">
                Web hosting
              </h1>
            </div>

            {/* Right Side - Video Player */}
            <div className="w-full">
              <div className="rounded-lg border-2 border-black overflow-hidden bg-gray-200 aspect-video">
                {/* Placeholder for video */}
                <div className="w-full h-full flex items-center justify-center bg-gray-300">
                  <span className="text-gray-600 text-lg">Video Player Placeholder</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Cards */}
        <div className="space-y-8">
          {/* Card 1: What is Web Hosting? */}
          <article className="bg-gradient-to-b from-[#BFFF00] to-[#80FF00] rounded-lg p-8">
            <div className="flex items-start gap-4">
              <NetworkIcon color="black" size={32} className="flex-shrink-0 mt-1" />
              <div className="flex-1">
                <h2 className="mb-4 [font-family:'Funnel_Display-SemiBold',Helvetica] font-bold text-[32px] text-black">
                  What is Web Hosting?
                </h2>
                <p className="[font-family:'Funnel_Sans-Regular',Helvetica] font-normal text-[28px] text-black">
                  Web hosting is a service that stores your website files on a server so people can access your site online. Hosting companies provide space, security, and tools to manage your website.
                </p>
              </div>
            </div>
          </article>

          {/* Card 2: 3 Hosting Companies */}
          <article className="bg-gradient-to-b from-[#BFFF00] to-[#80FF00] rounded-lg p-8">
            <div className="flex items-start gap-4">
              <NetworkIcon color="black" size={32} className="flex-shrink-0 mt-1" />
              <div className="flex-1">
                <h2 className="mb-4 [font-family:'Funnel_Display-SemiBold',Helvetica] font-bold text-[32px] text-black">
                  3 Hosting Companies:
                </h2>
                <ul className="space-y-2 ml-4">
                  <li className="[font-family:'Funnel_Sans-Regular',Helvetica] font-normal text-[28px] text-black">
                    Bluehost
                  </li>
                  <li className="[font-family:'Funnel_Sans-Regular',Helvetica] font-normal text-[28px] text-black">
                    SiteGround
                  </li>
                  <li className="[font-family:'Funnel_Sans-Regular',Helvetica] font-normal text-[28px] text-black">
                    Hostinger
                  </li>
                </ul>
              </div>
            </div>
          </article>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative w-full bg-black py-8 flex items-center justify-center z-10">
        <NetworkIcon color="white" size={32} />
      </footer>
    </main>
  );
}

export default React.memo(HostingPage);
