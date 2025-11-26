import React from "react";
import ContentSection from "../components/ContentSection";
import NavigationButtons from "../components/NavigationButtons";
import PageHeading from "../components/PageHeading";
import VectorIconGroup from "../components/VectorIconGroup";
import image from "../../assets/desktop8/image.svg";
import rectangle32 from "../../assets/desktop8/rectangle-32.svg";
import rectangle39 from "../../assets/desktop8/rectangle-39.svg";
import rectangle40 from "../../assets/desktop8/rectangle-40.svg";
import rectangle41 from "../../assets/desktop8/rectangle-41.svg";
import vector2 from "../../assets/desktop8/vector-2.svg";
import vector3 from "../../assets/desktop8/vector-3.svg";
import vector4 from "../../assets/desktop8/vector-4.svg";
import vector5 from "../../assets/desktop8/vector-5.svg";
import vector6 from "../../assets/desktop8/vector-6.svg";
import vector7 from "../../assets/desktop8/vector-7.svg";
import vector8 from "../../assets/desktop8/vector-8.svg";
import vector9 from "../../assets/desktop8/vector-9.svg";
import vector10 from "../../assets/desktop8/vector-10.svg";
import vector11 from "../../assets/desktop8/vector-11.svg";
import vector12 from "../../assets/desktop8/vector-12.svg";
import vector13 from "../../assets/desktop8/vector-13.svg";
import vector14 from "../../assets/desktop8/vector-14.svg";
import vector15 from "../../assets/desktop8/vector-15.svg";
import vector16 from "../../assets/desktop8/vector-16.svg";
import vector17 from "../../assets/desktop8/vector-17.svg";
import vector18 from "../../assets/desktop8/vector-18.svg";
import vector19 from "../../assets/desktop8/vector-19.svg";
import vector20 from "../../assets/desktop8/vector-20.svg";
import vector21 from "../../assets/desktop8/vector-21.svg";
import vector22 from "../../assets/desktop8/vector-22.svg";
import vector23 from "../../assets/desktop8/vector-23.svg";
import vector24 from "../../assets/desktop8/vector-24.svg";
import vector25 from "../../assets/desktop8/vector-25.svg";
import vector26 from "../../assets/desktop8/vector-26.svg";
import vector27 from "../../assets/desktop8/vector-27.svg";
import vector28 from "../../assets/desktop8/vector-28.svg";
import vector29 from "../../assets/desktop8/vector-29.svg";
import vector30 from "../../assets/desktop8/vector-30.svg";
import vector31 from "../../assets/desktop8/vector-31.svg";
import vector32 from "../../assets/desktop8/vector-32.svg";
import vector33 from "../../assets/desktop8/vector-33.svg";
import vector34 from "../../assets/desktop8/vector-34.svg";
import vector35 from "../../assets/desktop8/vector-35.svg";
import vector36 from "../../assets/desktop8/vector-36.svg";
import vector37 from "../../assets/desktop8/vector-37.svg";
import vector from "../../assets/desktop8/vector.svg";


const CONTENT_SECTIONS = [
  {
    id: 1,
    title: "What is a Domain?",
    content:
      "A domain is a human-readable name that represents an IP address.",
    example: "for example:",
    exampleText: "www.example.com → 192.168.1.1",
    rectangle: rectangle32,
    desktopRectClasses: "lg:top-[569px] lg:left-[94px] lg:h-[262px]",
    desktopContentClasses: "lg:top-[626px] lg:left-[200px]",
    desktopIconClasses: "lg:top-[34.29%]",
    iconVectors: [vector14, vector15, vector16, vector17, vector18, vector19],
  },
  {
    id: 2,
    title: "What is an IP Address?",
    content: "An IP address identifies a device on a network.",
    example: "there are two main types:",
    exampleText:
      "External IP: The address your network uses on the Internet.\nLocal IP: The address of a device inside your home network.",
    rectangle: rectangle39,
    desktopRectClasses: "lg:top-[838px] lg:left-[97px] lg:h-[266px]",
    desktopContentClasses: "lg:top-[895px] lg:left-[205px]",
    desktopIconClasses: "lg:top-[49.09%]",
    iconVectors: [vector20, vector21, vector22, vector23, vector24, vector25],
  },
  {
    id: 3,
    title: "IP addresses of my devices at home;",
    content: "",
    example: "",
    exampleText: "Computer: 192.168.1.2\nTablet: 192.168.1.3\nSmartTV: 192.168.1.4",
    rectangle: rectangle40,
    desktopRectClasses: "lg:top-[1111px] lg:left-[99px] lg:h-[257px]",
    desktopContentClasses: "lg:top-[1168px] lg:left-[206px]",
    desktopIconClasses: "lg:top-[64.16%]",
    iconVectors: [vector26, vector27, vector28, vector29, vector30, vector31],
  },
  {
    id: 4,
    title: "IP addresses of some websites;",
    content: "",
    example: "",
    exampleText:
      "google.com → 142.250.190.14\nwikipedia.org → 208.80.154.224\nyoutube.com → 142.250.190.78",
    rectangle: rectangle41,
    desktopRectClasses: "lg:top-[1375px] lg:left-[99px] lg:h-[257px]",
    desktopContentClasses: "lg:top-[1432px] lg:left-[209px]",
    desktopIconClasses: "lg:top-[78.74%]",
    iconVectors: [vector32, vector33, vector34, vector35, vector36, vector37],
  },
] as const;

const HIDDEN_VECTORS = [
  { src: vector, classes: "lg:top-[18.49%] lg:left-[-82.44%]" },
  { src: image, classes: "lg:top-[19.51%] lg:left-[-82.44%]" },
  { src: vector2, classes: "lg:top-[19.00%] lg:left-[-83.40%]" },
  { src: vector3, classes: "lg:top-[17.98%] lg:left-[-81.96%]" },
  { src: vector4, classes: "lg:top-[20.02%] lg:left-[-81.96%]" },
  { src: vector5, classes: "lg:top-[19.00%] lg:left-[-81.96%]" },
] as const;

const FOOTER_VECTORS = [
  { src: vector6, classes: "lg:top-[97.43%] lg:left-[49.99%]" },
  { src: vector7, classes: "lg:top-[98.20%] lg:left-[49.99%]" },
  { src: vector8, classes: "lg:top-[97.82%] lg:left-[49.03%]" },
  { src: vector9, classes: "lg:top-[97.05%] lg:left-[50.47%]" },
  { src: vector10, classes: "lg:top-[98.59%] lg:left-[50.47%]" },
  { src: vector11, classes: "lg:top-[97.82%] lg:left-[50.47%]" },
] as const;


const ComputerIcon = React.memo(() => (
  <div className="hidden lg:block absolute w-[10.52%] h-[7.79%] top-[4.36%] left-[73.96%] rotate-180">
    <img
      className="absolute w-[26.46%] h-[21.32%] top-0 left-[30.64%] -rotate-180"
      alt=""
      src={vector12}
      loading="lazy"
    />
    <img
      className="absolute w-full h-[78.68%] top-[21.32%] left-0 -rotate-180"
      alt=""
      src={vector13}
      loading="lazy"
    />
  </div>
));
ComputerIcon.displayName = "ComputerIcon";

function DomainsPage(): React.ReactElement {
  return (
    <div className="relative w-full min-w-0 lg:min-w-[1440px] min-h-screen lg:h-[1811px] bg-white overflow-x-hidden">
      <div className="absolute top-[659px] lg:top-[659px] left-0 w-full lg:w-[1440px] h-[50vh] lg:h-[1079px] bg-black" />

      {CONTENT_SECTIONS.map((section) => (
        <img
          key={`rect-${section.id}`}
          className={`hidden lg:block absolute w-[1246px] ${section.desktopRectClasses} object-contain`}
          alt=""
          src={section.rectangle}
          loading="lazy"
        />
      ))}

      <div className="hidden lg:block absolute top-[123.86%] left-0 w-full h-[5.44%] [background:radial-gradient(50%_50%_at_23%_50%,rgba(0,0,0,1)_29%,rgba(0,0,0,1)_100%)]" />

      <VectorIconGroup
        vectors={HIDDEN_VECTORS.map((v) => ({
          src: v.src,
          classes: v.classes,
        }))}
        desktopOnly={true}
      />


      <PageHeading
        parts={[
          { text: "Domains", className: "text-black", breakAfter: true },
          { text: "&", className: "text-[#0000cb]" },
          { text: " IP Addresses", className: "text-black" },
        ]}
        desktopTop="lg:top-[298px]"
        desktopLeft="lg:left-[99px]"
        desktopWidth="lg:w-[1005px]"
      />

      <div className="hidden lg:block absolute top-[95.95%] left-0 w-full h-[4.11%] [background:radial-gradient(50%_50%_at_23%_50%,rgba(255,255,255,1)_100%)]" />

      <VectorIconGroup
        vectors={FOOTER_VECTORS.map((v) => ({
          src: v.src,
          classes: v.classes,
        }))}
        desktopOnly={true}
      />


      <ComputerIcon />

      <div className="relative lg:static w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-0 mt-12 lg:mt-0 space-y-8 lg:space-y-0">
        {CONTENT_SECTIONS.map((section, index) => (
          <ContentSection
            key={`section-${section.id}`}
            title={section.title}
            content={section.content}
            example={section.example}
            exampleText={section.exampleText}
            rectangle={section.rectangle}
            rectangleClasses={section.desktopRectClasses}
            contentClasses={section.desktopContentClasses}
            iconClasses={section.desktopIconClasses}
            iconVectors={section.iconVectors}
            index={index}
          />
        ))}
      </div>

      {/* Navigation Buttons - Responsive */}
      <NavigationButtons backTo="/dns" finishTo="/" />
    </div>
  );
}

export default React.memo(DomainsPage);
