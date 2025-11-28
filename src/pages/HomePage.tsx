import React from "react";
import { Link } from "react-router-dom";
import { NetworkIcon } from "../components/PixelIcon";

function HomePage(): React.ReactElement {
  return (
    <main className="relative w-full min-h-screen bg-white overflow-x-hidden">
      {/* Desktop - 5: Main Container */}
      <div className="relative w-[1440px] h-[4776px] bg-white mx-auto">
        
        {/* Rectangle 12/45: Header Background - Radial Gradient */}
        <div 
          className="absolute w-[1440px] h-[703px] left-0 top-0"
          style={{
            background: 'radial-gradient(60.42% 123.76% at 70.62% 52.56%, #2F00FF 54.12%, #A9FF47 96.63%)',
            boxShadow: 'inset 0px 4px 4px rgba(0, 0, 0, 0.25)',
            transform: 'rotate(-180deg)'
          }}
        />

        {/* Logo - Group 18 / Vrstva_1 */}
        <div className="absolute left-[9.24%] right-[81.74%] top-[0.65%] bottom-[98.87%]">
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
            className="absolute w-[382px] h-[23px] left-[784px] top-0 [font-family:'Funnel_Display',Helvetica] font-extrabold text-base leading-5 text-center text-black"
          >
            Domain and IP
          </Link>
          <Link
            to="/dns"
            className="absolute w-[382px] h-[23px] left-[961px] top-0 [font-family:'Funnel_Display',Helvetica] font-extrabold text-base leading-5 text-center text-black"
          >
            DNS and Server
          </Link>
          <Link
            to="/hosting"
            className="absolute w-[382px] h-[23px] left-[1126px] top-0 [font-family:'Funnel_Display',Helvetica] font-extrabold text-base leading-5 text-center text-black"
          >
            Web Hosting
          </Link>
        </nav>

        {/* Main Title: "How the Internet works?" */}
        <h1 
          className="absolute w-[917px] h-[404px] left-[100px] top-[617px] [font-family:'Funnel_Display',Helvetica] font-bold text-[96px] leading-[100px] text-white"
        >
          How<br />the Internet<br />works?
        </h1>

        {/* Phone Frames - 5 frames total */}
        {/* Frame 9 - Leftmost */}
        <div className="absolute w-[275px] h-[432px] left-[41px] top-[180px] bg-black border-[3px] border-black rounded-[20px] overflow-x-scroll">
          <div className="absolute w-[3600px] h-[351px] left-0 top-0 bg-black">
            {/* Placeholder for phone images */}
            <div className="absolute w-[310px] h-[552px] left-0 top-0 bg-blue-500" />
            <div className="absolute w-[310px] h-[552px] left-[310px] top-0 bg-blue-500" />
            <div className="absolute w-[305px] h-[543px] left-[500px] top-0 bg-blue-500" />
          </div>
        </div>

        {/* Frame 7 - Second from left */}
        <div className="absolute w-[276px] h-[432px] left-[741px] top-[181px] bg-black border-[3px] border-black rounded-[20px] overflow-x-scroll">
          <div className="absolute w-[3600px] h-[351px] left-0 top-0 bg-black">
            <div className="absolute w-[310px] h-[552px] left-0 top-0 bg-blue-500" />
            <div className="absolute w-[310px] h-[552px] left-[310px] top-0 bg-blue-500" />
            <div className="absolute w-[305px] h-[543px] left-[500px] top-0 bg-blue-500" />
          </div>
        </div>

        {/* Frame 11 - Center (main, with white border) */}
        <div className="absolute w-[341px] h-[535px] left-[357px] top-[124px] bg-black border-[5px] border-white rounded-[20px] overflow-x-scroll">
          <div className="absolute w-[3600px] h-[351px] left-0 top-0 bg-black">
            <div className="absolute w-[310px] h-[552px] left-0 top-[-17px] bg-blue-500" />
            <div className="absolute w-[310px] h-[552px] left-[310px] top-0 bg-blue-500" />
            <div className="absolute w-[305px] h-[543px] left-[500px] top-0 bg-blue-500" />
          </div>
        </div>

        {/* Frame 8 - Fourth */}
        <div className="absolute w-[277px] h-[432px] left-[1057px] top-[181px] bg-black border-[3px] border-black rounded-[20px] overflow-x-scroll">
          <div className="absolute w-[3600px] h-[351px] left-0 top-0 bg-black">
            <div className="absolute w-[310px] h-[552px] left-0 top-0 bg-blue-500" />
            <div className="absolute w-[310px] h-[552px] left-[310px] top-0 bg-blue-500" />
            <div className="absolute w-[305px] h-[543px] left-[500px] top-0 bg-blue-500" />
          </div>
        </div>

        {/* Frame 7 - Rightmost */}
        <div className="absolute w-[277px] h-[432px] left-[1372px] top-[181px] bg-black border-[3px] border-black rounded-[20px] overflow-x-scroll">
          <div className="absolute w-[3600px] h-[351px] left-0 top-0 bg-black">
            <div className="absolute w-[310px] h-[552px] left-0 top-0 bg-blue-500" />
            <div className="absolute w-[310px] h-[552px] left-[310px] top-0 bg-blue-500" />
            <div className="absolute w-[305px] h-[543px] left-[500px] top-0 bg-blue-500" />
          </div>
        </div>

        {/* Rectangle 36: Black Section */}
        <div className="absolute w-[1440px] h-[742px] left-0 top-[703px] bg-black" />

        {/* Text Block 1 */}
        <p 
          className="absolute left-[56.18%] right-[7.15%] top-[18.38%] bottom-[79.52%] [font-family:'Funnel_Sans',Helvetica] font-normal text-[28px] leading-[35px] text-white"
        >
          The Internet is a global network of computers that communicate with each other using protocols.
        </p>

        {/* Text Block 2 */}
        <p 
          className="absolute left-[42.08%] right-[7.36%] top-[21.82%] bottom-[75.61%] [font-family:'Funnel_Sans',Helvetica] font-normal text-[28px] leading-[35px] text-white"
        >
          Every device connected to the Internet can send and receive information. When you visit a website, your computer sends a request to a server, and the server sends back the webpage.
        </p>

        {/* Text Block 3 */}
        <p 
          className="absolute left-[56.18%] right-[8.4%] top-[25.96%] bottom-[71.27%] [font-family:'Funnel_Sans',Helvetica] font-normal text-[28px] leading-[35px] text-white"
        >
          Data travels in small units called packets, which move through routers and networks to reach their destination.
        </p>

        {/* Rectangle 27: Gradient Box */}
        <div 
          className="absolute left-[9.13%] right-[60.8%] top-[55.69%] bottom-[38.69%] rounded-[20px]"
          style={{
            background: 'linear-gradient(239.6deg, #A9FF47 28.79%, rgba(255, 255, 255, 0) 80.69%)',
            transform: 'rotate(-173.7deg)'
          }}
        />

        {/* Rectangle 25: Another Gradient Box */}
        <div 
          className="absolute left-[22.64%] right-[47.29%] top-[42.17%] bottom-[52.21%] rounded-[20px]"
          style={{
            background: 'linear-gradient(239.6deg, #A9FF47 28.79%, #FFFFFF 80.69%)',
            transform: 'rotate(-175.22deg)'
          }}
        />

        {/* Computer Icons - Group (left) */}
        <div className="absolute left-[7.15%] right-[70.95%] top-[53.41%] bottom-[40.44%]">
          <div className="w-full h-full bg-black flex items-center justify-center">
            <NetworkIcon color="white" size={48} />
          </div>
        </div>

        {/* Computer Icons - Group (top) */}
        <div className="absolute left-0 right-[78.1%] top-[26.97%] bottom-[66.89%]">
          <div className="w-full h-full bg-black flex items-center justify-center">
            <NetworkIcon color="white" size={48} />
          </div>
        </div>

        {/* Router Text */}
        <p 
          className="absolute w-[422px] h-[293px] left-[488px] top-[2145px] [font-family:'Funnel_Sans',Helvetica] font-normal text-[32px] leading-[40px] text-black"
        >
          → your home router
        </p>

        {/* Rectangle 13: Text Box with Gradient */}
        <div 
          className="absolute left-[39.58%] right-[25.42%] top-[33.9%] bottom-[59.55%] rounded-[20px]"
          style={{
            background: 'linear-gradient(239.6deg, #A9FF47 28.79%, #FFFFFF 80.69%)'
          }}
        />

        {/* Text in Rectangle 13 */}
        <p 
          className="absolute left-[42.29%] right-[33.06%] top-[34.34%] bottom-[62.67%] [font-family:'Funnel_Sans',Helvetica] font-normal text-[32px] leading-[40px] text-black"
        >
          If you open your browser and type a website address, your request travels from your computer
        </p>

        {/* Green Arrow Icons (Vrstva_1) */}
        <div className="absolute w-[38px] h-[38px] left-[756px] top-[868px] bg-[#A9FF47]" />
        <div className="absolute w-[38px] h-[38px] left-[551px] top-[1032px] bg-[#A9FF47]" />
        <div className="absolute w-[38px] h-[38px] left-[756px] top-[1230px] bg-[#A9FF47]" />

        {/* Rectangle 36: Radial Gradient Section */}
        <div 
          className="absolute left-0 right-0 top-[64.28%] bottom-[34.27%]"
          style={{
            background: 'radial-gradient(57.97% 314.41% at 81.72% 50.85%, #000000 29.32%, #000000 100%)'
          }}
        />

        {/* Server Text */}
        <p 
          className="absolute w-[552px] h-[107px] left-[838px] top-[2440px] [font-family:'Funnel_Sans',Helvetica] font-normal text-[32px] leading-[40px] text-black"
        >
          → the server that hosts the website
        </p>

        {/* Rectangle 26: Gradient Box */}
        <div 
          className="absolute left-[50.21%] right-[28.97%] top-[46.94%] bottom-[46.48%] rounded-[20px]"
          style={{
            background: 'linear-gradient(239.6deg, #A9FF47 28.79%, #FFFFFF 80.69%)',
            transform: 'rotate(43.31deg)'
          }}
        />

        {/* Return Text */}
        <p 
          className="absolute w-[420px] h-[294px] left-[418px] top-[2886px] [font-family:'Funnel_Sans',Helvetica] font-normal text-[32px] leading-[40px] text-black"
        >
          → back to your computer
        </p>

        {/* Rectangle 44: Footer Section */}
        <div className="absolute w-[1610px] h-[1727px] left-0 top-[3139px] bg-[#1E1E1E]" />

        {/* Footer Icon - Centered */}
        <div className="absolute left-1/2 top-[4776px] transform -translate-x-1/2 -translate-y-8">
          <NetworkIcon color="white" size={32} />
        </div>
      </div>
    </main>
  );
}

export default React.memo(HomePage);
