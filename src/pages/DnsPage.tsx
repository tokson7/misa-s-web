import React from "react";
import ResponsiveImage from "../components/ResponsiveImage";
import NavigationButtons from "../components/NavigationButtons";
import PageHeading from "../components/PageHeading";
import VectorIconGroup from "../components/VectorIconGroup";
import group2 from "../../assets/desktop7/group-2.webp";
import group from "../../assets/desktop7/group.webp";
import image1 from "../../assets/desktop7/image.webp";
import rectangle32 from "../../assets/desktop7/rectangle-32.svg";
import rectangle39 from "../../assets/desktop7/rectangle-39.svg";
import rectangle40 from "../../assets/desktop7/rectangle-40.svg";
import vector3 from "../../assets/desktop7/vector-3.svg";
import vector4 from "../../assets/desktop7/vector-4.svg";
import vector5 from "../../assets/desktop7/vector-5.svg";
import vector6 from "../../assets/desktop7/vector-6.svg";
import vector7 from "../../assets/desktop7/vector-7.svg";
import vector8 from "../../assets/desktop7/vector-8.svg";


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

function DnsPage(): React.ReactElement {
  return (
    <div className="relative w-full min-w-0 lg:min-w-[1440px] min-h-screen lg:h-[1730px] bg-white overflow-x-hidden">
      {/* Background Section - Responsive */}
      <div className="absolute top-[79px] lg:top-[79px] left-0 w-full lg:w-[1440px] h-[40vh] lg:h-[580px] bg-black" />

      {/* Background Gradient - Desktop only */}
      <div className="hidden lg:block absolute w-full h-[4.30%] top-[95.72%] left-0 [background:radial-gradient(50%_50%_at_23%_50%,rgba(0,0,0,1)_100%)]" />



      {/* Main Heading - Responsive */}
      <PageHeading
        parts={[
          { text: "DNS", className: "text-white", breakAfter: true },
          { text: "&", className: "text-[#0000cb]" },
          { text: " Servers", className: "text-white" },
        ]}
        desktopTop="lg:top-[298px]"
        desktopLeft="lg:left-[99px]"
        desktopWidth="lg:w-[1005px]"
      />

      {/* Content Sections - Responsive Stack Layout */}
      <div className="relative lg:static w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-0 mt-12 lg:mt-0 space-y-8 lg:space-y-0">
        {contentSections.map((section, index) => {
          const heightMap = ["346px", "256px", "366px"];
          const leftMap = ["94px", "97px", "99px"];
          
          return (
            <div key={`section-${index}`} className="relative lg:block lg:absolute">
              {/* Rectangle Image for Mobile */}
              <ResponsiveImage
                src={section.rectangleSrc}
                alt="Rectangle"
                className="lg:hidden w-full h-auto mb-6 rounded-lg object-contain"
                loading="lazy"
              />
              
              {/* Rectangle Image for Desktop */}
              <img
                className="hidden lg:block absolute w-[1246px] object-contain"
                alt="Rectangle"
                src={section.rectangleSrc}
                style={{
                  top: section.rectangleTop,
                  left: leftMap[index],
                  height: heightMap[index],
                }}
                loading="lazy"
              />
              
              {/* Icon - Desktop only */}
              <div
                className={`hidden lg:block absolute w-[38px] h-[38px] ${section.iconBg} bg-[100%_100%]`}
                style={{ top: section.iconTop, left: section.iconLeft }}
                aria-hidden="true"
              />
              
              {/* Content Article */}
              <article
                className="w-full lg:absolute [font-family:'Funnel_Display-SemiBold',Helvetica] font-normal text-black text-xl sm:text-2xl md:text-3xl lg:text-[32px] tracking-normal leading-relaxed lg:leading-normal mt-6 lg:mt-0"
                style={{
                  top: section.textTop,
                  left: section.textLeft,
                  width: section.width,
                }}
              >
                {section.content}
              </article>
            </div>
          );
        })}
      </div>

      {/* Decorative Images - Desktop only */}
      {decorativeImages.map((img, index) => (
        <ResponsiveImage
          key={`decorative-${index}`}
          src={img.src}
          alt="Group"
          className="hidden lg:block absolute w-[21.77%] h-[13.54%]"
          style={{ top: img.top, left: img.left }}
          loading="lazy"
        />
      ))}

      {/* Footer Vector Images - Desktop only */}
      <VectorIconGroup
        vectors={vectorImages.map((v) => ({
          src: v.src,
          style: { top: v.top, left: v.left } as React.CSSProperties,
        }))}
        desktopOnly={true}
      />

      {/* Navigation Buttons - Responsive */}
      <NavigationButtons backTo="/hosting" nextTo="/domains" />
    </div>
  );
}

export default React.memo(DnsPage);

