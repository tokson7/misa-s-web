import React from "react";
import group2 from "./group-2.png";
import group8 from "./group-8.png";
import group9 from "./group-9.png";
import group from "./group.png";
import image1 from "./image.png";
import rectangle32 from "./rectangle-32.svg";
import rectangle39 from "./rectangle-39.svg";
import rectangle40 from "./rectangle-40.svg";
import vector3 from "./vector-3.svg";
import vector4 from "./vector-4.svg";
import vector5 from "./vector-5.svg";
import vector6 from "./vector-6.svg";
import vector7 from "./vector-7.svg";
import vector8 from "./vector-8.svg";

const navigationItems = [
  { text: "Domain and IP", left: "773px" },
  { text: "DNS and Server", left: "950px" },
  { text: "Web Hosting", left: "1115px" },
];

const contentSections = [
  {
    top: "620px",
    iconTop: "620px",
    iconLeft: "134px",
    iconBg: "bg-[url(/image.svg)]",
    textTop: "626px",
    textLeft: "200px",
    width: "945px",
    rectangleTop: "569px",
    rectangleSrc: rectangle32,
    content: (
      <>
        <span className="font-semibold">
          What is DNS?
          <br />
        </span>
        <span className="[font-family:'Funnel_Sans-Regular',Helvetica]"> </span>
        <span className="[font-family:'Funnel_Sans-Regular',Helvetica] text-[28px]">
          DNS (Domain Name System) translates domain names into IP addresses.
          Without DNS, you would have to type IP addresses instead of readable
          names to visit websites.
          <br />
        </span>
        <span className="[font-family:'Funnel_Sans-Regular',Helvetica] text-base">
          <br />
          Analogy:
        </span>
        <span className="[font-family:'Funnel_Sans-Regular',Helvetica] text-[28px]">
          {" "}
          <br />
          DNS works like a phonebook for the Internet.
        </span>
      </>
    ),
  },
  {
    top: "973px",
    iconTop: "973px",
    iconLeft: "134px",
    iconBg: "bg-[url(/vector.svg)]",
    textTop: "979px",
    textLeft: "205px",
    width: "1034px",
    rectangleTop: "922px",
    rectangleSrc: rectangle39,
    content: (
      <>
        <span className="font-semibold">
          Recommended DNS in 2025:
          <br />
          <br />
        </span>
        <span className="[font-family:'Funnel_Sans-Regular',Helvetica] text-[28px]">
          Google DNS: 8.8.8.8
          <br />
          Cloudflare DNS: 1.1.1.1
          <br />
          OpenDNS: 208.67.222.222
        </span>
      </>
    ),
  },
  {
    top: "1236px",
    iconTop: "1236px",
    iconLeft: "137px",
    iconBg: "bg-[url(/vector-2.svg)]",
    textTop: "1242px",
    textLeft: "206px",
    width: "1034px",
    rectangleTop: "1185px",
    rectangleSrc: rectangle40,
    content: (
      <>
        <span className="font-semibold">
          What is a Server?
          <br />
        </span>
        <span className="[font-family:'Funnel_Sans-Regular',Helvetica]">
          <br />
        </span>
        <span className="[font-family:'Funnel_Sans-Regular',Helvetica] text-[28px]">
          A server is a computer that provides data or services to other
          computers. <br />
        </span>
        <span className="[font-family:'Funnel_Sans-Regular',Helvetica] text-base">
          <br />
          Types of servers include:
          <br />
        </span>
        <span className="[font-family:'Funnel_Sans-Regular',Helvetica] text-[28px]">
          Web server: Stores websites
          <br />
          Mail server: Sends and receives emails
          <br />
          Database server: Stores information for websites or applications
          <br />
          File server: Stores files to share with multiple users
        </span>
      </>
    ),
  },
];

const decorativeImages = [
  { src: group, top: "4.57%", left: "62.01%" },
  { src: image1, top: "8.79%", left: "23.75%" },
  { src: group2, top: "4.57%", left: "83.75%" },
];

const vectorImages = [
  { src: vector3, top: "97.28%", left: "49.99%" },
  { src: vector4, top: "98.08%", left: "49.99%" },
  { src: vector5, top: "97.68%", left: "49.03%" },
  { src: vector6, top: "96.87%", left: "50.47%" },
  { src: vector7, top: "98.49%", left: "50.47%" },
  { src: vector8, top: "97.68%", left: "50.47%" },
];

export const Desktop = (): React.ReactElement => {
  return (
    <div className="bg-white overflow-hidden w-full min-w-[1440px] h-[1730px] relative">
      <div className="absolute w-full h-[4.30%] top-[95.72%] left-0 [background:radial-gradient(50%_50%_at_23%_50%,rgba(0,0,0,1)_100%)]" />

      <div className="absolute top-[79px] left-0 w-[1440px] h-[580px] bg-black" />

      {contentSections.map((section, index) => (
        <img
          key={`rectangle-${index}`}
          className={`absolute top-[${section.rectangleTop}] left-[${index === 0 ? "94px" : index === 1 ? "97px" : "99px"}] w-[1246px] h-[${index === 0 ? "346px" : index === 1 ? "64" : "366px"}]`}
          alt="Rectangle"
          src={section.rectangleSrc}
          style={{
            top: section.rectangleTop,
            left: index === 0 ? "94px" : index === 1 ? "97px" : "99px",
            height: index === 0 ? "346px" : index === 1 ? "256px" : "366px",
          }}
        />
      ))}

      <header className="absolute top-px left-px w-[1440px] h-[79px] rotate-[-180.00deg] bg-[linear-gradient(to_bottom_right,rgba(47,0,255,1)_0%,rgba(169,255,71,1)_50%)_bottom_right_/_50%_50%_no-repeat,linear-gradient(to_bottom_left,rgba(47,0,255,1)_0%,rgba(169,255,71,1)_50%)_bottom_left_/_50%_50%_no-repeat,linear-gradient(to_top_left,rgba(47,0,255,1)_0%,rgba(169,255,71,1)_50%)_top_left_/_50%_50%_no-repeat,linear-gradient(to_top_right,rgba(47,0,255,1)_0%,rgba(169,255,71,1)_50%)_top_right_/_50%_50%_no-repeat]" />

      <nav>
        {navigationItems.map((item, index) => (
          <div
            key={`nav-${index}`}
            className="absolute top-[39px] w-[382px] [font-family:'Funnel_Display-ExtraBold',Helvetica] font-extrabold text-[#0000cb] text-base text-center tracking-[0] leading-[normal]"
            style={{ left: item.left }}
          >
            {item.text}
          </div>
        ))}
      </nav>

      <h1 className="absolute top-[298px] left-[99px] w-[1005px] [font-family:'Funnel_Display-Bold',Helvetica] font-bold text-transparent text-8xl tracking-[0] leading-[normal]">
        <span className="text-white">
          DNS
          <br />
        </span>
        <span className="text-[#0000cb]">&amp;</span>
        <span className="text-white"> Servers</span>
      </h1>

      {contentSections.map((section, index) => (
        <React.Fragment key={`section-${index}`}>
          <div
            className={`absolute w-[38px] h-[38px] ${section.iconBg} bg-[100%_100%]`}
            style={{ top: section.iconTop, left: section.iconLeft }}
          />
          <p
            className="absolute [font-family:'Funnel_Display-SemiBold',Helvetica] font-normal text-black text-[32px] tracking-[0] leading-[normal]"
            style={{
              top: section.textTop,
              left: section.textLeft,
              width: section.width,
            }}
          >
            {section.content}
          </p>
        </React.Fragment>
      ))}

      <img
        className="absolute w-[168px] h-[31px] top-[25px] left-[156px]"
        alt="Group"
        src={group8}
      />

      <img
        className="absolute w-[25px] h-[31px] top-[25px] left-[122px]"
        alt="Group"
        src={group9}
      />

      {decorativeImages.map((img, index) => (
        <img
          key={`decorative-${index}`}
          className="absolute w-[21.77%] h-[13.54%]"
          alt="Group"
          src={img.src}
          style={{ top: img.top, left: img.left }}
        />
      ))}

      {vectorImages.map((vector, index) => (
        <img
          key={`vector-${index}`}
          className="absolute w-0 h-0"
          alt="Vector"
          src={vector.src}
          style={{ top: vector.top, left: vector.left }}
        />
      ))}
    </div>
  );
};
