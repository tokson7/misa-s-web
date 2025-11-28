import React from "react";
import { Link } from "react-router-dom";
import { NetworkIcon } from "../components/PixelIcon";

function DomainsPage(): React.ReactElement {
  return (
    <main className="relative w-full min-h-screen bg-white overflow-x-hidden">
      {/* Header */}
      <header className="relative w-full py-8 px-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2"
          >
            <NetworkIcon color="black" size={31} />
            <span className="text-black [font-family:'Funnel_Display-ExtraBold',Helvetica] font-extrabold text-2xl">
              Internet
            </span>
          </Link>

          {/* Navigation */}
          <nav className="flex gap-8">
            <Link
              to="/domains"
              className="text-black [font-family:'Funnel_Display-ExtraBold',Helvetica] font-extrabold text-base hover:underline"
            >
              Domain and IP
            </Link>
            <Link
              to="/dns"
              className="text-black [font-family:'Funnel_Display-ExtraBold',Helvetica] font-extrabold text-base hover:underline"
            >
              DNS and Server
            </Link>
            <Link
              to="/hosting"
              className="text-black [font-family:'Funnel_Display-ExtraBold',Helvetica] font-extrabold text-base hover:underline"
            >
              Web Hosting
            </Link>
          </nav>
        </div>

        {/* Top Right Corner Icon - Large, partially extending beyond page */}
        <div className="absolute -top-8 right-0 z-0">
          <NetworkIcon color="#BFFF00" size={150} />
        </div>
      </header>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-8 py-12 z-10">
        {/* Main Title */}
        <h1 className="mb-16 [font-family:'Funnel_Display-Bold',Helvetica] font-bold text-8xl leading-tight">
          <span className="text-black">Domains</span>
          <span className="text-[#0000FF]">&</span>
          <span className="text-black"> IP Addresses</span>
        </h1>

        {/* Content Cards */}
        <div className="space-y-8">
          {/* Card 1: What is a Domain? */}
          <article className="bg-gradient-to-b from-[#BFFF00] to-[#80FF00] rounded-lg p-8">
            <div className="flex items-start gap-4">
              <NetworkIcon color="black" size={32} className="flex-shrink-0 mt-1" />
              <div className="flex-1">
                <h2 className="mb-4 [font-family:'Funnel_Display-SemiBold',Helvetica] font-bold text-[32px] text-black">
                  What is a Domain?
                </h2>
                <p className="mb-2 [font-family:'Funnel_Sans-Regular',Helvetica] font-normal text-[28px] text-black">
                  A domain is a human-readable name that represents an IP address.
                </p>
                <p className="text-gray-700 [font-family:'Funnel_Sans-Regular',Helvetica] font-normal text-xl mb-1">
                  for example:
                </p>
                <p className="[font-family:'Funnel_Sans-Regular',Helvetica] font-normal text-[28px] text-black">
                  www.example.com → 192.168.1.1
                </p>
              </div>
            </div>
          </article>

          {/* Card 2: What is an IP Address? */}
          <article className="bg-gradient-to-b from-[#BFFF00] to-[#80FF00] rounded-lg p-8">
            <div className="flex items-start gap-4">
              <NetworkIcon color="black" size={32} className="flex-shrink-0 mt-1" />
              <div className="flex-1">
                <h2 className="mb-4 [font-family:'Funnel_Display-SemiBold',Helvetica] font-bold text-[32px] text-black">
                  What is an IP Address?
                </h2>
                <p className="mb-2 [font-family:'Funnel_Sans-Regular',Helvetica] font-normal text-[28px] text-black">
                  An IP address identifies a device on a network.
                </p>
                <p className="text-gray-700 [font-family:'Funnel_Sans-Regular',Helvetica] font-normal text-xl mb-2">
                  there are two main types:
                </p>
                <ul className="space-y-1 ml-4">
                  <li className="[font-family:'Funnel_Sans-Regular',Helvetica] font-normal text-[28px] text-black">
                    External IP: The address your network uses on the Internet.
                  </li>
                  <li className="[font-family:'Funnel_Sans-Regular',Helvetica] font-normal text-[28px] text-black">
                    Local IP: The address of a device inside your home network.
                  </li>
                </ul>
              </div>
            </div>
          </article>

          {/* Card 3: IP addresses of my devices at home */}
          <article className="bg-gradient-to-b from-[#BFFF00] to-[#80FF00] rounded-lg p-8">
            <div className="flex items-start gap-4">
              <NetworkIcon color="black" size={32} className="flex-shrink-0 mt-1" />
              <div className="flex-1">
                <h2 className="mb-4 [font-family:'Funnel_Display-SemiBold',Helvetica] font-bold text-[32px] text-black">
                  IP addresses of my devices at home;
                </h2>
                <ul className="space-y-2 ml-4">
                  <li className="[font-family:'Funnel_Sans-Regular',Helvetica] font-normal text-[28px] text-black">
                    Computer: 192.168.1.2
                  </li>
                  <li className="[font-family:'Funnel_Sans-Regular',Helvetica] font-normal text-[28px] text-black">
                    Tablet: 192.168.1.3
                  </li>
                  <li className="[font-family:'Funnel_Sans-Regular',Helvetica] font-normal text-[28px] text-black">
                    SmartTV: 192.168.1.4
                  </li>
                </ul>
              </div>
            </div>
          </article>

          {/* Card 4: IP addresses of some websites */}
          <article className="bg-gradient-to-b from-[#BFFF00] to-[#80FF00] rounded-lg p-8">
            <div className="flex items-start gap-4">
              <NetworkIcon color="black" size={32} className="flex-shrink-0 mt-1" />
              <div className="flex-1">
                <h2 className="mb-4 [font-family:'Funnel_Display-SemiBold',Helvetica] font-bold text-[32px] text-black">
                  IP addresses of some websites;
                </h2>
                <ul className="space-y-2 ml-4">
                  <li className="[font-family:'Funnel_Sans-Regular',Helvetica] font-normal text-[28px] text-black">
                    google.com → 142.250.190.14
                  </li>
                  <li className="[font-family:'Funnel_Sans-Regular',Helvetica] font-normal text-[28px] text-black">
                    wikipedia.org → 208.80.154.224
                  </li>
                  <li className="[font-family:'Funnel_Sans-Regular',Helvetica] font-normal text-[28px] text-black">
                    youtube.com → 142.250.190.78
                  </li>
                </ul>
              </div>
            </div>
          </article>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative w-full py-8 flex items-center justify-center">
        <NetworkIcon color="black" size={32} />
      </footer>
    </main>
  );
}

export default React.memo(DomainsPage);
