import React from "react";
import { Link } from "react-router-dom";
import { NetworkIcon, CheckmarkIcon } from "../components/PixelIcon";

function HomePage(): React.ReactElement {
  return (
    <main className="relative w-full min-h-screen bg-white overflow-x-hidden">
      {/* 1. Top Header Section with Gradient Background */}
      <header className="relative w-full h-[703px] bg-gradient-to-r from-[#BFFF00] via-[#80FF00] to-[#0000FF]">
        <div className="relative w-full h-full max-w-[1440px] mx-auto px-[122px] pt-[25px]">
          {/* Logo - Top Left - exact position */}
          <Link
            to="/"
            className="absolute top-[25px] left-[122px] flex items-center gap-2 z-10"
          >
            <NetworkIcon color="white" size={31} />
            <span className="text-white [font-family:'Funnel_Display-ExtraBold',Helvetica] font-extrabold text-2xl">
              Internet
            </span>
          </Link>

          {/* Navigation - Top Right - exact position */}
          <nav className="absolute top-[39px] right-[122px] flex gap-8 z-10">
            <Link
              to="/domains"
              className="text-[#BFFF00] [font-family:'Funnel_Display-ExtraBold',Helvetica] font-extrabold text-base hover:underline"
            >
              Domain and IP
            </Link>
            <Link
              to="/dns"
              className="text-[#BFFF00] [font-family:'Funnel_Display-ExtraBold',Helvetica] font-extrabold text-base hover:underline"
            >
              DNS and Server
            </Link>
            <Link
              to="/hosting"
              className="text-[#BFFF00] [font-family:'Funnel_Display-ExtraBold',Helvetica] font-extrabold text-base hover:underline"
            >
              Web Hosting
            </Link>
          </nav>

          {/* Main Title - positioned below logo/nav */}
          <h1 className="absolute top-[617px] left-[100px] [font-family:'Funnel_Display-Bold',Helvetica] font-bold text-8xl leading-[100px]">
            <span className="text-white">
              How
              <br />
            </span>
            <span className="text-[#0000CB]">
              the Internet
              <br />
            </span>
            <span className="text-white">works?</span>
          </h1>

          {/* Phone Screens Row - 4 overlapping vertical rectangles, positioned below title */}
          <div className="absolute top-[800px] left-[41px] flex items-start">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="w-[275px] h-[432px] rounded-[20px] border-[3px] border-black bg-[#0000FF] overflow-hidden relative"
                style={{ marginLeft: i > 1 ? '-20px' : '0', zIndex: 5 - i }}
              >
                {/* White text box at top */}
                <div className="absolute top-4 left-4 right-4 bg-white rounded p-3 z-10">
                  <p className="text-black text-sm font-bold text-center [font-family:'Funnel_Display-ExtraBold',Helvetica]">
                    How does the internet work?
                  </p>
                </div>
                {/* Placeholder for person image - man with beard and pink cap */}
                <div className="w-full h-full flex items-center justify-center pt-16">
                  <div className="w-48 h-48 bg-gray-300 rounded-full flex items-center justify-center">
                    <span className="text-gray-600 text-xs">Person Image</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* 2. Introduction Text Section - Solid Black Background */}
      <section className="relative w-full bg-black py-20">
        <div className="max-w-[1440px] mx-auto px-[100px] space-y-12">
          {/* Text Block 1 */}
          <div className="flex items-start gap-6">
            <CheckmarkIcon color="#BFFF00" size={40} className="flex-shrink-0 mt-1" />
            <p className="text-white [font-family:'Funnel_Sans-Regular',Helvetica] font-normal text-[28px] leading-relaxed">
              The Internet is a global network of computers that communicate with each other using protocols.
            </p>
          </div>

          {/* Text Block 2 */}
          <div className="flex items-start gap-6">
            <CheckmarkIcon color="#BFFF00" size={40} className="flex-shrink-0 mt-1" />
            <p className="text-white [font-family:'Funnel_Sans-Regular',Helvetica] font-normal text-[28px] leading-relaxed">
              Every device connected to the Internet can send and receive information. When you visit a website, your computer sends a request to a server, and the server sends back the webpage.
            </p>
          </div>

          {/* Text Block 3 */}
          <div className="flex items-start gap-6">
            <CheckmarkIcon color="#BFFF00" size={40} className="flex-shrink-0 mt-1" />
            <p className="text-white [font-family:'Funnel_Sans-Regular',Helvetica] font-normal text-[28px] leading-relaxed">
              Data travels in small units called packets, which move through routers and networks to reach their destination.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Flow Diagram Section - Black to White gradient with translucent green overlays */}
      <section className="relative w-full min-h-[1000px] bg-gradient-to-b from-black via-black to-white py-20 overflow-hidden">
        {/* Soft translucent lime green gradient shapes overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#BFFF00]/30 via-[#BFFF00]/20 to-transparent pointer-events-none" />
        
        <div className="relative max-w-[1440px] mx-auto px-[100px]">
          {/* Flow Content Container - using grid for precise positioning */}
          <div className="relative min-h-[800px] py-12">
            {/* Top Row: Computer Icon and Request Text Block */}
            <div className="flex items-start gap-8 mb-24">
              {/* Starting Point - Computer Icon (far left) */}
              <div className="flex-shrink-0">
                <div className="w-24 h-24 bg-black flex items-center justify-center">
                  <NetworkIcon color="white" size={48} />
                </div>
              </div>

              {/* Request Origin Text Block */}
              <div className="flex-1 max-w-lg">
                <div className="bg-[#BFFF00] rounded-lg p-6">
                  <p className="text-black [font-family:'Funnel_Sans-Regular',Helvetica] font-normal text-[32px] leading-relaxed">
                    If you open your browser and type a website address, your request travels from your computer
                  </p>
                </div>
              </div>
            </div>

            {/* Middle Row: Router Step - positioned to the right */}
            <div className="flex items-start gap-8 mb-24 ml-32">
              {/* Arrow pointing right */}
              <div className="text-black text-5xl font-bold mt-4">→</div>
              
              <div className="flex flex-col items-start gap-3">
                {/* Blue pixel square (data packet) above router */}
                <div className="w-6 h-6 bg-[#0000FF] ml-6 mb-2" />
                {/* Router Icon */}
                <div className="w-20 h-20 bg-black flex items-center justify-center">
                  <NetworkIcon color="white" size={40} />
                </div>
                <p className="text-black [font-family:'Funnel_Sans-Regular',Helvetica] font-normal text-[32px] whitespace-nowrap">
                  → your home router
                </p>
              </div>
            </div>

            {/* Server Row - further right and slightly down */}
            <div className="flex items-start gap-8 mb-24 ml-64">
              {/* Arrow pointing right */}
              <div className="text-black text-5xl font-bold mt-4">→</div>
              
              <div className="flex flex-col items-start gap-3">
                {/* Multiple blue pixel squares (data packets) above server */}
                <div className="flex gap-2 mb-2">
                  <div className="w-6 h-6 bg-[#0000FF]" />
                  <div className="w-6 h-6 bg-[#0000FF]" />
                  <div className="w-6 h-6 bg-[#0000FF]" />
                </div>
                {/* Server Icon - larger */}
                <div className="w-28 h-28 bg-black flex items-center justify-center">
                  <NetworkIcon color="white" size={56} />
                </div>
                <p className="text-black [font-family:'Funnel_Sans-Regular',Helvetica] font-normal text-[32px] whitespace-nowrap">
                  → the server that hosts the website
                </p>
              </div>
            </div>

            {/* Return Path Row - Aligned with initial computer icon, arrow curves slightly up */}
            <div className="flex items-start gap-8">
              {/* Return Arrow pointing left */}
              <div className="text-black text-5xl font-bold mt-4">←</div>
              
              {/* Return Text Block - aligned with initial computer position */}
              <div className="max-w-lg">
                <div className="bg-[#BFFF00] rounded-lg p-6">
                  <p className="text-black [font-family:'Funnel_Sans-Regular',Helvetica] font-normal text-[32px] leading-relaxed">
                    ← back to your computer
                  </p>
                </div>
                {/* Blue pixel squares below return text (data returning) */}
                <div className="flex gap-2 mt-3">
                  <div className="w-6 h-6 bg-[#0000FF]" />
                  <div className="w-6 h-6 bg-[#0000FF]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative w-full bg-black py-8 flex items-center justify-center">
        <NetworkIcon color="white" size={32} />
      </footer>
    </main>
  );
}

export default React.memo(HomePage);
