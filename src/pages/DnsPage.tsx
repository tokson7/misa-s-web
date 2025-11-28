import React from "react";
import { Link } from "react-router-dom";
import { NetworkIcon, BookmarkIcon } from "../components/PixelIcon";

function DnsPage(): React.ReactElement {
  return (
    <main className="relative w-full min-h-screen bg-black overflow-x-hidden">
      {/* Header with subtle gradient */}
      <header className="relative w-full py-8 px-8 bg-gradient-to-r from-[#4A4AFF] via-[#0000FF] to-[#BFFF00]">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2"
          >
            <NetworkIcon color="white" size={31} />
            <span className="text-white [font-family:'Funnel_Display-ExtraBold',Helvetica] font-extrabold text-2xl">
              Internet
            </span>
          </Link>

          {/* Navigation */}
          <nav className="flex gap-8">
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

      {/* Background Pixel Art Decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Blue L-shaped block */}
        <div className="absolute top-[200px] left-[800px] w-32 h-32 bg-[#4A4AFF] opacity-50" />
        {/* Blue smaller block */}
        <div className="absolute top-[300px] left-[1000px] w-16 h-16 bg-[#4A4AFF] opacity-50" />
        {/* Lime green fragmented pattern */}
        <div className="absolute top-[400px] right-[200px] w-24 h-24 bg-[#BFFF00] opacity-50" />
      </div>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-8 py-12 z-10">
        {/* Main Title */}
        <h1 className="mb-16 [font-family:'Funnel_Display-Bold',Helvetica] font-bold text-8xl leading-tight">
          <span className="text-white">DNS</span>
          <span className="text-[#4A4AFF]">&</span>
          <span className="text-white"> Servers</span>
        </h1>

        {/* Content Blocks */}
        <div className="space-y-8 ml-16">
          {/* Block 1: What is DNS? */}
          <article className="bg-[#AFFF33] rounded-lg p-8">
            <div className="flex items-start gap-4">
              <BookmarkIcon color="black" size={32} className="flex-shrink-0 mt-1" />
              <div className="flex-1">
                <h2 className="mb-4 [font-family:'Funnel_Display-SemiBold',Helvetica] font-bold text-[32px] text-black">
                  What is DNS?
                </h2>
                <p className="mb-4 [font-family:'Funnel_Sans-Regular',Helvetica] font-normal text-[28px] text-black">
                  DNS (Domain Name System) translates domain names into IP addresses. Without DNS, you would have to type IP addresses instead of readable names to visit websites.
                </p>
                <p className="text-gray-700 [font-family:'Funnel_Sans-Regular',Helvetica] font-normal text-xl mb-2">
                  Analogy:
                </p>
                <p className="[font-family:'Funnel_Sans-Regular',Helvetica] font-normal text-[28px] text-black">
                  DNS works like a phonebook for the Internet.
                </p>
              </div>
            </div>
          </article>

          {/* Block 2: Recommended DNS in 2025 */}
          <article className="bg-[#AFFF33] rounded-lg p-8">
            <div className="flex items-start gap-4">
              <BookmarkIcon color="black" size={32} className="flex-shrink-0 mt-1" />
              <div className="flex-1">
                <h2 className="mb-4 [font-family:'Funnel_Display-SemiBold',Helvetica] font-bold text-[32px] text-black">
                  Recommended DNS in 2025:
                </h2>
                <ul className="space-y-2 ml-4">
                  <li className="[font-family:'Funnel_Sans-Regular',Helvetica] font-normal text-[28px] text-black">
                    Google DNS: 8.8.8.8
                  </li>
                  <li className="[font-family:'Funnel_Sans-Regular',Helvetica] font-normal text-[28px] text-black">
                    Cloudflare DNS: 1.1.1.1
                  </li>
                  <li className="[font-family:'Funnel_Sans-Regular',Helvetica] font-normal text-[28px] text-black">
                    OpenDNS: 208.67.222.222
                  </li>
                </ul>
              </div>
            </div>
          </article>

          {/* Block 3: What is a Server? */}
          <article className="bg-[#AFFF33] rounded-lg p-8">
            <div className="flex items-start gap-4">
              <BookmarkIcon color="black" size={32} className="flex-shrink-0 mt-1" />
              <div className="flex-1">
                <h2 className="mb-4 [font-family:'Funnel_Display-SemiBold',Helvetica] font-bold text-[32px] text-black">
                  What is a Server?
                </h2>
                <p className="mb-4 [font-family:'Funnel_Sans-Regular',Helvetica] font-normal text-[28px] text-black">
                  A server is a computer that provides data or services to other computers.
                </p>
                <p className="text-gray-700 [font-family:'Funnel_Sans-Regular',Helvetica] font-normal text-xl mb-2">
                  Types of servers include:
                </p>
                <ul className="space-y-2 ml-4">
                  <li className="[font-family:'Funnel_Sans-Regular',Helvetica] font-normal text-[28px] text-black">
                    Web server: Stores websites
                  </li>
                  <li className="[font-family:'Funnel_Sans-Regular',Helvetica] font-normal text-[28px] text-black">
                    Mail server: Sends and receives emails
                  </li>
                  <li className="[font-family:'Funnel_Sans-Regular',Helvetica] font-normal text-[28px] text-black">
                    Database server: Stores information for websites or applications
                  </li>
                  <li className="[font-family:'Funnel_Sans-Regular',Helvetica] font-normal text-[28px] text-black">
                    File server: Stores files to share with multiple users
                  </li>
                </ul>
              </div>
            </div>
          </article>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative w-full py-8 flex items-center justify-center">
        <NetworkIcon color="white" size={32} />
      </footer>
    </main>
  );
}

export default React.memo(DnsPage);
