import React from "react";
import { Link } from "react-router-dom";
import { NetworkIcon, CheckmarkIcon } from "../components/PixelIcon";

function HomePage(): React.ReactElement {
  return (
    <main className="relative w-full min-h-screen bg-white overflow-x-hidden">
      {/* Header Section with Gradient Background */}
      <header className="relative w-full h-[703px] bg-gradient-to-r from-[#BFFF00] via-[#80FF00] to-[#0000FF]">
        {/* Logo */}
        <Link
          to="/"
          className="absolute top-[25px] left-[122px] flex items-center gap-2 z-10"
        >
          <NetworkIcon color="white" size={31} />
          <span className="text-white [font-family:'Funnel_Display-ExtraBold',Helvetica] font-extrabold text-2xl">
            Internet
          </span>
        </Link>

        {/* Navigation */}
        <nav className="absolute top-[39px] left-[784px] flex gap-8 z-10">
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

        {/* Main Title */}
        <h1 className="absolute top-[617px] left-[100px] [font-family:'Funnel_Display-Bold',Helvetica] font-bold text-8xl leading-[100px]">
          <span className="text-white">
            How
            <br />
          </span>
          <span className="text-[#0000CB]">
            the Internet
            <br />
            works?
          </span>
        </h1>

        {/* Phone Screens Row - Placeholder for video frames */}
        <div className="absolute top-[800px] left-[41px] flex gap-4">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="w-[275px] h-[432px] rounded-[20px] border-[3px] border-black bg-black overflow-hidden"
            >
              {/* Placeholder for phone screen content */}
              <div className="w-full h-full bg-blue-500 flex items-center justify-center">
                <span className="text-white text-sm">Phone Screen {i}</span>
              </div>
            </div>
          ))}
        </div>
      </header>

      {/* Introduction Text Section - Black Background */}
      <section className="relative w-full bg-black py-16 px-8">
        <div className="max-w-7xl mx-auto space-y-8">
          {/* Text Block 1 */}
          <div className="flex items-start gap-4">
            <CheckmarkIcon color="#BFFF00" size={32} className="flex-shrink-0 mt-1" />
            <p className="text-white [font-family:'Funnel_Sans-Regular',Helvetica] font-normal text-[28px] leading-relaxed">
              The Internet is a global network of computers that communicate with each other using protocols.
            </p>
          </div>

          {/* Text Block 2 */}
          <div className="flex items-start gap-4">
            <CheckmarkIcon color="#BFFF00" size={32} className="flex-shrink-0 mt-1" />
            <p className="text-white [font-family:'Funnel_Sans-Regular',Helvetica] font-normal text-[28px] leading-relaxed">
              Every device connected to the Internet can send and receive information. When you visit a website, your computer sends a request to a server, and the server sends back the webpage.
            </p>
          </div>

          {/* Text Block 3 */}
          <div className="flex items-start gap-4">
            <CheckmarkIcon color="#BFFF00" size={32} className="flex-shrink-0 mt-1" />
            <p className="text-white [font-family:'Funnel_Sans-Regular',Helvetica] font-normal text-[28px] leading-relaxed">
              Data travels in small units called packets, which move through routers and networks to reach their destination.
            </p>
          </div>
        </div>
      </section>

      {/* Flow Diagram Section */}
      <section className="relative w-full min-h-[1000px] bg-gradient-to-b from-black via-black to-white py-20 px-8">
        {/* Soft translucent lime green gradient shapes overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#BFFF00]/20 via-transparent to-transparent" />
        
        <div className="relative max-w-7xl mx-auto">
          {/* Flow Content - using flexbox/grid for better layout */}
          <div className="relative min-h-[800px]">
            {/* Starting Point - Computer Icon (far left) */}
            <div className="absolute left-0 top-0">
              <div className="w-20 h-20 bg-black flex items-center justify-center">
                <NetworkIcon color="white" size={40} />
              </div>
            </div>

            {/* Request Origin Text Block */}
            <div className="absolute left-[250px] top-0 max-w-lg">
              <div className="bg-[#BFFF00] rounded-lg p-6">
                <p className="text-black [font-family:'Funnel_Sans-Regular',Helvetica] font-normal text-[32px] leading-relaxed">
                  If you open your browser and type a website address, your request travels from your computer
                </p>
              </div>
            </div>

            {/* Arrow pointing right */}
            <div className="absolute left-[600px] top-[50px] text-black text-4xl">→</div>

            {/* Router Step */}
            <div className="absolute left-[700px] top-[80px]">
              <div className="flex flex-col items-start gap-2">
                {/* Blue pixel square (data packet) above router */}
                <div className="w-4 h-4 bg-[#0000FF] ml-4 mb-1" />
                <div className="w-16 h-16 bg-black flex items-center justify-center">
                  <NetworkIcon color="white" size={32} />
                </div>
                <p className="text-black [font-family:'Funnel_Sans-Regular',Helvetica] font-normal text-[32px] whitespace-nowrap">
                  → your home router
                </p>
              </div>
            </div>

            {/* Arrow pointing right */}
            <div className="absolute left-[900px] top-[150px] text-black text-4xl">→</div>

            {/* Server Step */}
            <div className="absolute left-[1000px] top-[180px]">
              <div className="flex flex-col items-start gap-2">
                {/* Multiple blue pixel squares (data packets) above server */}
                <div className="flex gap-1 mb-1">
                  <div className="w-4 h-4 bg-[#0000FF]" />
                  <div className="w-4 h-4 bg-[#0000FF]" />
                  <div className="w-4 h-4 bg-[#0000FF]" />
                </div>
                <div className="w-20 h-20 bg-black flex items-center justify-center">
                  <NetworkIcon color="white" size={40} />
                </div>
                <p className="text-black [font-family:'Funnel_Sans-Regular',Helvetica] font-normal text-[32px] whitespace-nowrap">
                  → the server that hosts the website
                </p>
              </div>
            </div>

            {/* Return Path - Arrow pointing left, curving slightly */}
            <div className="absolute left-[700px] top-[400px] text-black text-4xl">←</div>

            {/* Return Text Block */}
            <div className="absolute left-[250px] top-[380px] max-w-lg">
              <div className="bg-[#BFFF00] rounded-lg p-6">
                <p className="text-black [font-family:'Funnel_Sans-Regular',Helvetica] font-normal text-[32px] leading-relaxed">
                  ← back to your computer
                </p>
              </div>
              {/* Blue pixel squares below return text (data returning) */}
              <div className="flex gap-1 mt-2">
                <div className="w-4 h-4 bg-[#0000FF]" />
                <div className="w-4 h-4 bg-[#0000FF]" />
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
