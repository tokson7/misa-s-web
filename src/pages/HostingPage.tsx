import React from "react";
import { Link } from "react-router-dom";
import { NetworkIcon } from "../components/PixelIcon";

function HostingPage(): React.ReactElement {
  return (
    <main className="relative w-full min-h-screen bg-white overflow-x-hidden">
      {/* Desktop - 6: Main Container */}
      <div className="relative w-[1440px] h-[1266px] bg-white mx-auto">
        
        {/* Rectangle 43: Header Background - Radial Gradient */}
        <div
          className="absolute w-[1440px] h-[79px] left-0 top-0"
          style={{
            background: 'radial-gradient(43.82% 237.66% at 73.89% 120.16%, #2F00FF 29.32%, #A9FF47 100%)',
            transform: 'rotate(-180deg)'
          }}
        />

        {/* Logo - Group 10/11: Internet Logo with Vectors */}
        <div className="absolute w-[167.88px] h-[30.61px] left-[156.12px] top-[24.51px]">
          <Link to="/" className="flex items-center gap-2">
            {/* Simplified logo - using NetworkIcon and text */}
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
            className="absolute w-[382px] h-[23px] left-[768px] top-0 [font-family:'Funnel_Display',Helvetica] font-extrabold text-base leading-5 text-center"
            style={{ color: '#0000CB' }}
          >
            Domain and IP
          </Link>
          <Link
            to="/dns"
            className="absolute w-[382px] h-[23px] left-[945px] top-0 [font-family:'Funnel_Display',Helvetica] font-extrabold text-base leading-5 text-center"
            style={{ color: '#0000CB' }}
          >
            DNS and Server
          </Link>
          <Link
            to="/hosting"
            className="absolute w-[382px] h-[23px] left-[1110px] top-0 [font-family:'Funnel_Display',Helvetica] font-extrabold text-base leading-5 text-center"
            style={{ color: '#0000CB' }}
          >
            Web Hosting
          </Link>
        </nav>

        {/* Image 6 */}
        <div
          className="absolute w-[590px] h-[332px] left-[750px] top-[187px] bg-gray-300 border-[4px] border-black rounded-[20px]"
          style={{
            boxSizing: 'border-box',
            backgroundImage: 'url(image)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />

        {/* Rectangle 38: Gradient Section */}
        <div
          className="absolute w-[1440px] h-[541px] left-0 top-[660px]"
          style={{
            background: 'radial-gradient(43.82% 237.66% at 73.89% 120.16%, #2F00FF 29.32%, #A9FF47 100%)',
            transform: 'matrix(-1, 0, 0, 1, 0, 0)'
          }}
        />

        {/* Title: "Web hosting" */}
        <h1
          className="absolute w-[1005px] h-[200px] left-[99px] top-[420px] [font-family:'Funnel_Display',Helvetica] font-bold text-[96px] leading-[120px] text-black"
        >
          Web hosting
        </h1>

        {/* Rectangle 32: First Gradient Card */}
        <div
          className="absolute w-[1246px] h-[256px] left-[94px] top-[570px] rounded-[20px]"
          style={{
            boxSizing: 'border-box',
            background: 'linear-gradient(239.6deg, #A9FF47 28.79%, #FFFFFF 80.69%)'
          }}
        />

        {/* Rectangle 39: Second Gradient Card */}
        <div
          className="absolute w-[1246px] h-[256px] left-[94px] top-[833px] rounded-[20px]"
          style={{
            boxSizing: 'border-box',
            background: 'linear-gradient(239.6deg, #A9FF47 28.79%, #FFFFFF 80.69%)'
          }}
        />

        {/* Text Block 1: "What is Web Hosting? Web hosting is a service..." */}
        <p
          className="absolute w-[844px] h-[249px] left-[200px] top-[627px] [font-family:'Funnel_Display',Helvetica] font-semibold text-[32px] leading-[40px] text-black"
        >
          What is Web Hosting? Web hosting is a service that stores your website files on a server so people can access your site online. Hosting companies provide space, security, and tools to manage your website.
        </p>

        {/* Text Block 2: "3 Hosting Companies: Bluehost SiteGround Hostinger" */}
        <p
          className="absolute w-[1034px] h-[240px] left-[190px] top-[891px] [font-family:'Funnel_Display',Helvetica] font-semibold text-[32px] leading-[40px] text-black"
        >
          3 Hosting Companies: Bluehost SiteGround Hostinger
        </p>

        {/* Vrstva_1 Icon - First (left side of first card) */}
        <div className="absolute w-[69px] h-[111px] left-[120px] top-[887px]">
          <div className="w-full h-full flex items-center justify-center">
            <NetworkIcon color="black" size={69} />
          </div>
        </div>

        {/* Vrstva_1 Icon - Second (left side of second card) */}
        <div className="absolute w-[69px] h-[111px] left-[126px] top-[623px]">
          <div className="w-full h-full flex items-center justify-center">
            <NetworkIcon color="black" size={69} />
          </div>
        </div>

        {/* Rectangle 36: Footer Section - Radial Gradient */}
        <div
          className="absolute left-0 right-0 top-[94.15%] bottom-[-0.04%]"
          style={{
            background: 'radial-gradient(57.97% 314.41% at 81.72% 50.85%, #000000 29.32%, #000000 100%)'
          }}
        />

        {/* Footer Icon - NetworkIcon centered */}
        <div className="absolute left-1/2 top-[1266px] transform -translate-x-1/2 -translate-y-8">
          <NetworkIcon color="white" size={32} />
        </div>
      </div>
    </main>
  );
}

export default React.memo(HostingPage);
