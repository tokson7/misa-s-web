import React from "react";
import group8 from "./group-8.png";
import group9 from "./group-9.png";
import image from "./image.svg";
import rectangle32 from "./rectangle-32.svg";
import rectangle39 from "./rectangle-39.svg";
import rectangle40 from "./rectangle-40.svg";
import rectangle41 from "./rectangle-41.svg";
import vector2 from "./vector-2.svg";
import vector3 from "./vector-3.svg";
import vector4 from "./vector-4.svg";
import vector5 from "./vector-5.svg";
import vector6 from "./vector-6.svg";
import vector7 from "./vector-7.svg";
import vector8 from "./vector-8.svg";
import vector9 from "./vector-9.svg";
import vector10 from "./vector-10.svg";
import vector11 from "./vector-11.svg";
import vector12 from "./vector-12.svg";
import vector13 from "./vector-13.svg";
import vector14 from "./vector-14.svg";
import vector15 from "./vector-15.svg";
import vector16 from "./vector-16.svg";
import vector17 from "./vector-17.svg";
import vector18 from "./vector-18.svg";
import vector19 from "./vector-19.svg";
import vector20 from "./vector-20.svg";
import vector21 from "./vector-21.svg";
import vector22 from "./vector-22.svg";
import vector23 from "./vector-23.svg";
import vector24 from "./vector-24.svg";
import vector25 from "./vector-25.svg";
import vector26 from "./vector-26.svg";
import vector27 from "./vector-27.svg";
import vector28 from "./vector-28.svg";
import vector29 from "./vector-29.svg";
import vector30 from "./vector-30.svg";
import vector31 from "./vector-31.svg";
import vector32 from "./vector-32.svg";
import vector33 from "./vector-33.svg";
import vector34 from "./vector-34.svg";
import vector35 from "./vector-35.svg";
import vector36 from "./vector-36.svg";
import vector37 from "./vector-37.svg";
import vector from "./vector.svg";

const navigationItems = [
  { text: "Domain and IP", left: "773px" },
  { text: "DNS and Server", left: "950px" },
  { text: "Web Hosting", left: "1115px" },
];

const contentSections = [
  {
    top: "626px",
    left: "200px",
    title: "What is a Domain?",
    content: "A domain is a human-readable name that represents an IP address.",
    example: "for example:",
    exampleText: "www.example.com → 192.168.1.1",
    rectangle: rectangle32,
    rectTop: "569px",
    rectLeft: "94px",
    iconTop: "34.29%",
    iconVectors: [vector14, vector15, vector16, vector17, vector18, vector19],
  },
  {
    top: "895px",
    left: "205px",
    title: "What is an IP Address?",
    content: "An IP address identifies a device on a network.",
    example: "there are two main types:",
    exampleText:
      "External IP: The address your network uses on the Internet.\nLocal IP: The address of a device inside your home network.",
    rectangle: rectangle39,
    rectTop: "838px",
    rectLeft: "97px",
    iconTop: "49.09%",
    iconVectors: [vector20, vector21, vector22, vector23, vector24, vector25],
  },
  {
    top: "1168px",
    left: "206px",
    title: "IP addresses of my devices at home;",
    content: "",
    example: "",
    exampleText:
      "Computer: 192.168.1.2\nTablet: 192.168.1.3\nSmartTV: 192.168.1.4",
    rectangle: rectangle40,
    rectTop: "1111px",
    rectLeft: "99px",
    iconTop: "64.16%",
    iconVectors: [vector26, vector27, vector28, vector29, vector30, vector31],
  },
  {
    top: "1432px",
    left: "209px",
    title: "IP addresses of some websites;",
    content: "",
    example: "",
    exampleText:
      "google.com → 142.250.190.14\nwikipedia.org → 208.80.154.224\nyoutube.com → 142.250.190.78",
    rectangle: rectangle41,
    rectTop: "1375px",
    rectLeft: "99px",
    iconTop: "78.74%",
    iconVectors: [vector32, vector33, vector34, vector35, vector36, vector37],
  },
];

export const Desktop = (): React.ReactElement => {
  return (
    <div className="bg-white overflow-hidden w-full min-w-[1440px] h-[1811px] relative">
      <div className="absolute top-[659px] left-0 w-[1440px] h-[1079px] bg-black" />

      {contentSections.map((section, index) => (
        <img
          key={`rect-${index}`}
          className={`absolute top-[${section.rectTop}] left-[${section.rectLeft}] w-[1246px] h-[${index === 0 ? "262px" : index === 1 ? "266px" : "257px"}]`}
          alt="Rectangle"
          src={section.rectangle}
          style={{ top: section.rectTop, left: section.rectLeft }}
        />
      ))}

      <div className="absolute w-full h-[5.44%] top-[123.86%] left-0 [background:radial-gradient(50%_50%_at_23%_50%,rgba(0,0,0,1)_29%,rgba(0,0,0,1)_100%)]" />

      <img
        className="absolute w-0 h-0 top-[18.49%] left-[-82.44%]"
        alt="Vector"
        src={vector}
      />

      <img
        className="absolute w-0 h-0 top-[19.51%] left-[-82.44%]"
        alt="Vector"
        src={image}
      />

      <img
        className="absolute w-0 h-0 top-[19.00%] left-[-83.40%]"
        alt="Vector"
        src={vector2}
      />

      <img
        className="absolute w-0 h-0 top-[17.98%] left-[-81.96%]"
        alt="Vector"
        src={vector3}
      />

      <img
        className="absolute w-0 h-0 top-[20.02%] left-[-81.96%]"
        alt="Vector"
        src={vector4}
      />

      <img
        className="absolute w-0 h-0 top-[19.00%] left-[-81.96%]"
        alt="Vector"
        src={vector5}
      />

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
        <span className="text-black">
          Domains
          <br />
        </span>

        <span className="text-[#0000cb]">&amp;</span>

        <span className="text-black"> IP Addresses</span>
      </h1>

      <div className="absolute w-full h-[4.11%] top-[95.95%] left-0 [background:radial-gradient(50%_50%_at_23%_50%,rgba(255,255,255,1)_100%)]" />

      <img
        className="absolute w-0 h-0 top-[97.43%] left-[49.99%]"
        alt="Vector"
        src={vector6}
      />

      <img
        className="absolute w-0 h-0 top-[98.20%] left-[49.99%]"
        alt="Vector"
        src={vector7}
      />

      <img
        className="absolute w-0 h-0 top-[97.82%] left-[49.03%]"
        alt="Vector"
        src={vector8}
      />

      <img
        className="absolute w-0 h-0 top-[97.05%] left-[50.47%]"
        alt="Vector"
        src={vector9}
      />

      <img
        className="absolute w-0 h-0 top-[98.59%] left-[50.47%]"
        alt="Vector"
        src={vector10}
      />

      <img
        className="absolute w-0 h-0 top-[97.82%] left-[50.47%]"
        alt="Vector"
        src={vector11}
      />

      <img
        className="w-[168px] left-[156px] absolute h-[31px] top-[25px]"
        alt="Group"
        src={group8}
      />

      <img
        className="w-[25px] left-[122px] absolute h-[31px] top-[25px]"
        alt="Group"
        src={group9}
      />

      <div className="absolute w-[10.52%] h-[7.79%] top-[4.36%] left-[73.96%] rotate-[180.00deg]">
        <img
          className="absolute w-[26.46%] h-[21.32%] top-0 left-[30.64%] rotate-[-180.00deg]"
          alt="Vector"
          src={vector12}
        />

        <img
          className="absolute w-full h-[78.68%] top-[21.32%] left-0 rotate-[-180.00deg]"
          alt="Vector"
          src={vector13}
        />
      </div>

      {contentSections.map((section, index) => (
        <article
          key={`content-${index}`}
          className="absolute w-[1034px] [font-family:'Funnel_Display-SemiBold',Helvetica] font-normal text-black text-[32px] tracking-[0] leading-[normal]"
          style={{ top: section.top, left: section.left }}
        >
          <h2 className="font-semibold">
            {section.title}
            {section.content && <br />}
          </h2>

          {section.content && (
            <>
              <span className="[font-family:'Funnel_Sans-Regular',Helvetica]">
                {" "}
              </span>
              <p className="[font-family:'Funnel_Sans-Regular',Helvetica] text-[28px]">
                {section.content}
                {section.example && <br />}
              </p>
            </>
          )}

          {section.example && (
            <>
              {index === 1 && (
                <span className="[font-family:'Funnel_Sans-Regular',Helvetica] text-xl">
                  <br />
                </span>
              )}
              <span className="[font-family:'Funnel_Sans-Regular',Helvetica] text-base">
                {section.example}
                <br />
              </span>
            </>
          )}

          {section.exampleText && (
            <span className="[font-family:'Funnel_Sans-Regular',Helvetica] text-[28px]">
              {section.exampleText.split("\n").map((line, i, arr) => (
                <React.Fragment key={i}>
                  {line}
                  {i < arr.length - 1 && <br />}
                </React.Fragment>
              ))}
            </span>
          )}

          {index === 1 && section.content && (
            <span className="[font-family:'Funnel_Sans-Regular',Helvetica]">
              {" "}
              <br />
            </span>
          )}

          {index === 0 && section.content && (
            <span className="[font-family:'Inter-Regular',Helvetica]"> </span>
          )}
        </article>
      ))}

      {contentSections.map((section, index) => (
        <div
          key={`icon-${index}`}
          className="absolute w-[2.64%] h-[2.10%] left-[9.31%]"
          style={{ top: section.iconTop }}
        >
          <img
            className="absolute w-[24.99%] h-[24.99%] top-[74.99%] left-[24.99%]"
            alt="Vector"
            src={section.iconVectors[0]}
          />

          <img
            className="absolute w-[24.99%] h-[24.99%] top-[50.00%] left-[50.00%]"
            alt="Vector"
            src={section.iconVectors[1]}
          />

          <img
            className="absolute w-[24.99%] h-[24.99%] top-[50.00%] left-0"
            alt="Vector"
            src={section.iconVectors[2]}
          />

          <img
            className="absolute w-[24.99%] h-[24.99%] top-[24.99%] left-[24.99%]"
            alt="Vector"
            src={section.iconVectors[3]}
          />

          <img
            className="absolute w-[24.99%] h-[24.99%] top-[24.99%] left-[74.99%]"
            alt="Vector"
            src={section.iconVectors[4]}
          />

          <img
            className="absolute w-[24.99%] h-[24.99%] top-0 left-0"
            alt="Vector"
            src={section.iconVectors[5]}
          />
        </div>
      ))}
    </div>
  );
};
