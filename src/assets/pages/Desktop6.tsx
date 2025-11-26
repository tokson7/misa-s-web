import React from "react";
import group10 from "./group-10.png";
import group11 from "./group-11.png";
import image6 from "./image-6.png";
import image from "./image.svg";
import rectangle32 from "./rectangle-32.svg";
import rectangle39 from "./rectangle-39.svg";
import vector2 from "./vector-2.svg";
import vector3 from "./vector-3.svg";
import vector4 from "./vector-4.svg";
import vector5 from "./vector-5.svg";
import vector6 from "./vector-6.svg";
import vector7 from "./vector-7.svg";
import vector8 from "./vector-8.svg";
import vector9 from "./vector-9.svg";
import vector from "./vector.svg";

export const Desktop = (): React.ReactElement => {
  const navigationItems = [
    { text: "Domain and IP", left: "768px" },
    { text: "DNS and Server", left: "945px" },
    { text: "Web Hosting", left: "1110px" },
  ];

  const hostingCompanies = ["Bluehost", "SiteGround", "Hostinger"];

  return (
    <div className="bg-white overflow-hidden w-full min-w-[1440px] h-[1266px] relative">
      <header className="absolute top-px left-px w-[1440px] h-[79px] rotate-[-180.00deg] bg-[linear-gradient(to_bottom_right,rgba(47,0,255,1)_0%,rgba(169,255,71,1)_50%)_bottom_right_/_50%_50%_no-repeat,linear-gradient(to_bottom_left,rgba(47,0,255,1)_0%,rgba(169,255,71,1)_50%)_bottom_left_/_50%_50%_no-repeat,linear-gradient(to_top_left,rgba(47,0,255,1)_0%,rgba(169,255,71,1)_50%)_top_left_/_50%_50%_no-repeat,linear-gradient(to_top_right,rgba(47,0,255,1)_0%,rgba(169,255,71,1)_50%)_top_right_/_50%_50%_no-repeat]" />

      <img
        className="w-[168px] left-[156px] absolute h-[31px] top-[25px]"
        alt="Group"
        src={group10}
      />

      <img
        className="w-[25px] left-[122px] absolute h-[31px] top-[25px]"
        alt="Group"
        src={group11}
      />

      <nav className="absolute top-[39px] left-[768px] w-[724px] h-4">
        {navigationItems.map((item, index) => (
          <div
            key={index}
            className="absolute top-0 w-[382px] [font-family:'Funnel_Display-ExtraBold',Helvetica] font-extrabold text-[#0000cb] text-base text-center tracking-[0] leading-[normal]"
            style={{ left: item.left }}
          >
            {item.text}
          </div>
        ))}
      </nav>

      <div className="absolute top-[660px] left-0 w-[1440px] h-[541px] rotate-[-180.00deg] bg-[linear-gradient(to_bottom_right,rgba(47,0,255,1)_0%,rgba(169,255,71,1)_50%)_bottom_right_/_50%_50%_no-repeat,linear-gradient(to_bottom_left,rgba(47,0,255,1)_0%,rgba(169,255,71,1)_50%)_bottom_left_/_50%_50%_no-repeat,linear-gradient(to_top_left,rgba(47,0,255,1)_0%,rgba(169,255,71,1)_50%)_top_left_/_50%_50%_no-repeat,linear-gradient(to_top_right,rgba(47,0,255,1)_0%,rgba(169,255,71,1)_50%)_top_right_/_50%_50%_no-repeat]" />

      <main>
        <img
          className="absolute top-[187px] left-[750px] w-[590px] h-[332px] aspect-[1.78] object-cover"
          alt="Image"
          src={image6}
        />

        <h1 className="absolute top-[420px] left-[99px] w-[1005px] [font-family:'Funnel_Display-Bold',Helvetica] font-bold text-black text-8xl tracking-[0] leading-[normal]">
          Web hosting
        </h1>

        <img
          className="absolute top-[570px] left-[94px] w-[1246px] h-64"
          alt="Rectangle"
          src={rectangle32}
        />

        <section
          className="absolute top-[623px] left-[126px] w-[69px] h-[111px] flex"
          aria-hidden="true"
        >
          <div className="flex-1 w-[57.89px] relative">
            <img
              className="absolute w-[33.33%] h-[49.99%] top-0 left-[66.67%]"
              alt="Vector"
              src={vector8}
            />
            <img
              className="absolute w-[66.67%] h-[50.01%] top-[49.99%] left-0"
              alt="Vector"
              src={vector9}
            />
          </div>
        </section>

        <article className="absolute top-[627px] left-[200px] w-[844px] [font-family:'Funnel_Display-SemiBold',Helvetica] font-normal text-black text-[32px] tracking-[0] leading-[normal]">
          <h2 className="font-semibold">
            What is Web Hosting?
            <br />
          </h2>
          <span className="[font-family:'Funnel_Sans-Regular',Helvetica]">
            {" "}
          </span>
          <p className="[font-family:'Funnel_Sans-Regular',Helvetica] text-[28px]">
            Web hosting is a service that stores your website files on a server
            so people can access your site online. Hosting companies provide
            space, security, and tools to manage your website.
          </p>
        </article>

        <img
          className="absolute top-[833px] left-[94px] w-[1246px] h-64"
          alt="Rectangle"
          src={rectangle39}
        />

        <section
          className="absolute top-[887px] left-[120px] w-[69px] h-[111px] flex"
          aria-hidden="true"
        >
          <div className="flex-1 w-[57.89px] relative">
            <img
              className="absolute w-[33.33%] h-[49.99%] top-0 left-[66.67%]"
              alt="Vector"
              src={vector6}
            />
            <img
              className="absolute w-[66.67%] h-[50.01%] top-[49.99%] left-0"
              alt="Vector"
              src={vector7}
            />
          </div>
        </section>

        <article className="absolute top-[891px] left-[190px] w-[1034px] [font-family:'Funnel_Display-SemiBold',Helvetica] font-normal text-black text-[32px] tracking-[0] leading-[normal]">
          <h2 className="font-semibold">
            3 Hosting Companies:
            <br />
            <br />
          </h2>
          <ul className="[font-family:'Funnel_Sans-Regular',Helvetica] text-[28px]">
            {hostingCompanies.map((company, index) => (
              <li key={index}>
                {company}
                <br />
              </li>
            ))}
          </ul>
        </article>
      </main>

      <footer className="absolute w-full h-[5.88%] top-[94.15%] left-0 [background:radial-gradient(50%_50%_at_23%_50%,rgba(0,0,0,1)_29%,rgba(0,0,0,1)_100%)]">
        <img
          className="absolute w-0 h-0 top-[96.28%] left-[49.99%]"
          alt="Vector"
          src={vector}
        />
        <img
          className="absolute w-0 h-0 top-[97.38%] left-[49.99%]"
          alt="Vector"
          src={image}
        />
        <img
          className="absolute w-0 h-0 top-[96.83%] left-[49.03%]"
          alt="Vector"
          src={vector2}
        />
        <img
          className="absolute w-0 h-0 top-[95.73%] left-[50.47%]"
          alt="Vector"
          src={vector3}
        />
        <img
          className="absolute w-0 h-0 top-[97.93%] left-[50.47%]"
          alt="Vector"
          src={vector4}
        />
        <img
          className="absolute w-0 h-0 top-[96.83%] left-[50.47%]"
          alt="Vector"
          src={vector5}
        />
      </footer>
    </div>
  );
};
