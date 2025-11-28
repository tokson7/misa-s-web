import React from "react";
import { Link } from "react-router-dom";
import { NetworkIcon, BookmarkIcon } from "../components/PixelIcon";

function DnsPage(): React.ReactElement {
  return (
    <main className="relative w-full min-h-screen bg-white overflow-x-hidden">
      {/* Desktop - 7: Main Container */}
      <div className="relative w-[1440px] h-[1730px] bg-white mx-auto">
        
        {/* Rectangle 38: Header Background - Radial Gradient */}
        <div
          className="absolute w-[1440px] h-[79px] left-0 top-0"
          style={{
            background: 'radial-gradient(43.82% 237.66% at 73.89% 120.16%, #2F00FF 29.32%, #A9FF47 100%)',
            transform: 'rotate(-180deg)'
          }}
        />

        {/* Logo - Group 8/9: Internet Logo */}
        <div className="absolute w-[167.88px] h-[30.61px] left-[156.12px] top-[24.51px]">
          <Link to="/" className="flex items-center gap-2">
            <NetworkIcon color="white" size={31} />
            <span className="text-white [font-family:'Funnel_Display-ExtraBold',Helvetica] font-extrabold text-2xl">
              Internet
            </span>
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="absolute top-[39px]">
          <Link
            to="/domains"
            className="absolute w-[382px] h-[23px] left-[773px] top-0 [font-family:'Funnel_Display',Helvetica] font-extrabold text-base leading-5 text-center"
            style={{ color: '#0000CB' }}
          >
            Domain and IP
          </Link>
          <Link
            to="/dns"
            className="absolute w-[382px] h-[23px] left-[950px] top-0 [font-family:'Funnel_Display',Helvetica] font-extrabold text-base leading-5 text-center"
            style={{ color: '#0000CB' }}
          >
            DNS and Server
          </Link>
          <Link
            to="/hosting"
            className="absolute w-[382px] h-[23px] left-[1115px] top-0 [font-family:'Funnel_Display',Helvetica] font-extrabold text-base leading-5 text-center"
            style={{ color: '#0000CB' }}
          >
            Web Hosting
          </Link>
        </nav>

        {/* Rectangle 37: Black Section */}
        <div className="absolute w-[1440px] h-[580px] left-0 top-[79px] bg-black" />

        {/* Title: "DNS & Servers" */}
        <h1
          className="absolute w-[1005px] h-[200px] left-[99px] top-[298px] [font-family:'Funnel_Display',Helvetica] font-bold text-[96px] leading-[120px] text-white"
        >
          DNS & Servers
        </h1>

        {/* Rectangle 32: First Gradient Card */}
        <div
          className="absolute w-[1246px] h-[346px] left-[94px] top-[569px] rounded-[20px]"
          style={{
            boxSizing: 'border-box',
            background: 'linear-gradient(239.6deg, #A9FF47 28.79%, #FFFFFF 80.69%)'
          }}
        />

        {/* Rectangle 39: Second Gradient Card */}
        <div
          className="absolute w-[1246px] h-[256px] left-[97px] top-[922px] rounded-[20px]"
          style={{
            boxSizing: 'border-box',
            background: 'linear-gradient(239.6deg, #A9FF47 28.79%, #FFFFFF 80.69%)'
          }}
        />

        {/* Rectangle 40: Third Gradient Card */}
        <div
          className="absolute w-[1246px] h-[366px] left-[99px] top-[1185px] rounded-[20px]"
      style={{
            boxSizing: 'border-box',
            background: 'linear-gradient(239.6deg, #A9FF47 28.79%, #FFFFFF 80.69%)'
          }}
        />

        {/* Vrstva_1 Icon - First (BookmarkIcon) */}
        <div className="absolute w-[38px] h-[38px] left-[134px] top-[620px]">
          <BookmarkIcon color="black" size={38} />
        </div>

        {/* Vrstva_1 Icon - Second (BookmarkIcon) */}
        <div className="absolute w-[38px] h-[38px] left-[134px] top-[973px]">
          <BookmarkIcon color="black" size={38} />
        </div>

        {/* Vrstva_1 Icon - Third (BookmarkIcon) */}
        <div className="absolute w-[38px] h-[38px] left-[137px] top-[1236px]">
          <BookmarkIcon color="black" size={38} />
        </div>

        {/* Text Block 1: "What is DNS? DNS (Domain Name System)..." */}
        <p
          className="absolute w-[945px] h-[249px] left-[200px] top-[626px] [font-family:'Funnel_Display',Helvetica] font-semibold text-[32px] leading-[40px] text-black"
        >
          What is DNS? DNS (Domain Name System) translates domain names into IP addresses. Without DNS, you would have to type IP addresses instead of readable names to visit websites. Analogy: DNS works like a phonebook for the Internet.
        </p>

        {/* Text Block 2: "Recommended DNS in 2025: Google DNS: 8.8.8.8..." */}
        <p
          className="absolute w-[1034px] h-[240px] left-[205px] top-[979px] [font-family:'Funnel_Display',Helvetica] font-semibold text-[32px] leading-[40px] text-black"
        >
          Recommended DNS in 2025: Google DNS: 8.8.8.8 Cloudflare DNS: 1.1.1.1 OpenDNS: 208.67.222.222
        </p>

        {/* Text Block 3: "What is a Server? A server is a computer..." */}
        <p
          className="absolute w-[1034px] h-[317px] left-[206px] top-[1242px] [font-family:'Funnel_Display',Helvetica] font-semibold text-[32px] leading-[40px] text-black"
        >
          What is a Server? A server is a computer that provides data or services to other computers. Types of servers include: Web server: Stores websites Mail server: Sends and receives emails Database server: Stores information for websites or applications File server: Stores files to share with multiple users
        </p>

        {/* Background Pixel Art Decorations - Group elements */}
        {/* Group - Right side decorative element */}
        <div className="absolute left-[62.01%] right-[16.22%] top-[4.57%] bottom-[81.9%]">
          {/* Complex pixel art pattern - simplified representation */}
          <div className="w-full h-full relative">
            {/* Blue and black vectors forming decorative pattern */}
            <div className="absolute inset-0 opacity-60">
              <div className="absolute w-2 h-2 bg-black" style={{ left: '66.61%', top: '8.6%' }} />
              <div className="absolute w-2 h-2 bg-black" style={{ left: '71.75%', top: '12.87%' }} />
              <div className="absolute w-2 h-2 bg-black" style={{ left: '68.67%', top: '12.87%' }} />
              <div className="absolute w-2 h-2 bg-black" style={{ left: '69.69%', top: '6.89%' }} />
              <div className="absolute w-2 h-2 bg-[#2F00FF]" style={{ left: '76.89%', top: '7.44%' }} />
              <div className="absolute w-2 h-2 bg-[#2F00FF]" style={{ left: '81.48%', top: '4.57%' }} />
              <div className="absolute w-2 h-2 bg-[#2F00FF]" style={{ left: '62.01%', top: '4.57%' }} />
              <div className="absolute w-2 h-2 bg-black" style={{ left: '71.75%', top: '15.44%' }} />
            </div>
          </div>
        </div>

        {/* Group - Left side decorative element (rotated 90deg) */}
        <div 
          className="absolute left-[23.75%] right-[54.48%] top-[8.79%] bottom-[77.68%]"
          style={{ transform: 'rotate(90deg)' }}
        >
          <div className="w-full h-full relative">
            <div className="absolute inset-0 opacity-60">
              <div className="absolute w-2 h-2 bg-black" style={{ left: '30.04%', top: '12.61%' }} />
              <div className="absolute w-2 h-2 bg-black" style={{ left: '26.95%', top: '16.89%' }} />
              <div className="absolute w-2 h-2 bg-black" style={{ left: '26.95%', top: '14.32%' }} />
              <div className="absolute w-2 h-2 bg-black" style={{ left: '34.15%', top: '15.18%' }} />
              <div className="absolute w-2 h-2 bg-[#2F00FF]" style={{ left: '33.12%', top: '21.16%' }} />
              <div className="absolute w-2 h-2 bg-[#2F00FF]" style={{ left: '36.57%', top: '24.99%' }} />
              <div className="absolute w-2 h-2 bg-[#2F00FF]" style={{ left: '33.12%', top: '8.79%' }} />
              <div className="absolute w-2 h-2 bg-black" style={{ left: '23.75%', top: '16.89%' }} />
            </div>
          </div>
        </div>

        {/* Group - Top right decorative element (rotated -90deg) */}
        <div 
          className="absolute left-[83.75%] right-[-5.52%] top-[4.57%] bottom-[81.9%]"
          style={{ transform: 'rotate(-90deg)' }}
        >
          <div className="w-full h-full relative">
            <div className="absolute inset-0 opacity-60">
              <div className="absolute w-2 h-2 bg-[#A9FF47]" style={{ left: '88.59%', top: '10.31%' }} />
              <div className="absolute w-2 h-2 bg-[#A9FF47]" style={{ left: '93.73%', top: '12.02%' }} />
              <div className="absolute w-2 h-2 bg-[#A9FF47]" style={{ left: '93.73%', top: '14.58%' }} />
              <div className="absolute w-2 h-2 bg-[#A9FF47]" style={{ left: '86.54%', top: '12.87%' }} />
              <div className="absolute w-2 h-2 bg-[#2F00FF]" style={{ left: '87.2%', top: '5.52%' }} />
              <div className="absolute w-2 h-2 bg-[#2F00FF]" style={{ left: '83.75%', top: '4.57%' }} />
              <div className="absolute w-2 h-2 bg-[#2F00FF]" style={{ left: '83.75%', top: '18.86%' }} />
              <div className="absolute w-2 h-2 bg-[#A9FF47]" style={{ left: '96.81%', top: '12.77%' }} />
              <div className="absolute w-2 h-2 bg-[#A9FF47]" style={{ left: '98.86%', top: '15.44%' }} />
            </div>
          </div>
        </div>

        {/* Rectangle 42: Footer Section - Black */}
        <div
          className="absolute left-0 right-0 top-[95.72%] bottom-[-0.03%] bg-black"
        />

        {/* Footer Icon - NetworkIcon centered */}
        <div className="absolute left-1/2 top-[1730px] transform -translate-x-1/2 -translate-y-8">
          <NetworkIcon color="white" size={32} />
        </div>
    </div>
    </main>
  );
}

export default React.memo(DnsPage);
