import React from "react";
import ResponsiveImage from "../components/ResponsiveImage";
import NavigationButtons from "../components/NavigationButtons";
import PageHeading from "../components/PageHeading";
import VectorIconGroup from "../components/VectorIconGroup";
import group2 from "../../assets/desktop5/group-2.webp";
import group from "../../assets/desktop5/group.webp";
import image12 from "../../assets/desktop5/image-1-2.webp";
import image13 from "../../assets/desktop5/image-1-3.webp";
import image14 from "../../assets/desktop5/image-1-4.webp";
import image15 from "../../assets/desktop5/image-1-5.webp";
import image1 from "../../assets/desktop5/image-1.webp";
import image22 from "../../assets/desktop5/image-2-2.webp";
import image23 from "../../assets/desktop5/image-2-3.webp";
import image24 from "../../assets/desktop5/image-2-4.webp";
import image21 from "../../assets/desktop5/image-2.webp";
import image32 from "../../assets/desktop5/image-3-2.webp";
import image33 from "../../assets/desktop5/image-3-3.webp";
import image34 from "../../assets/desktop5/image-3-4.webp";
import image35 from "../../assets/desktop5/image-3-5.webp";
import image3 from "../../assets/desktop5/image-3.webp";
import image from "../../assets/desktop5/image.webp";
import rectangle12 from "../../assets/desktop5/rectangle-12.webp";
import rectangle13 from "../../assets/desktop5/rectangle-13.svg";
import rectangle25 from "../../assets/desktop5/rectangle-25.svg";
import rectangle26 from "../../assets/desktop5/rectangle-26.svg";
import rectangle27 from "../../assets/desktop5/rectangle-27.svg";
import vector9 from "../../assets/desktop5/vector-9.svg";
import vector10 from "../../assets/desktop5/vector-10.svg";
import vector11 from "../../assets/desktop5/vector-11.svg";
import vector12 from "../../assets/desktop5/vector-12.svg";
import vector13 from "../../assets/desktop5/vector-13.svg";
import vector14 from "../../assets/desktop5/vector-14.svg";
import vector15 from "../../assets/desktop5/vector-15.svg";
import vector16 from "../../assets/desktop5/vector-16.svg";
import vector17 from "../../assets/desktop5/vector-17.svg";
import vector18 from "../../assets/desktop5/vector-18.svg";
import vector19 from "../../assets/desktop5/vector-19.svg";
import vector20 from "../../assets/desktop5/vector-20.svg";
import vector21 from "../../assets/desktop5/vector-21.svg";
import vector25 from "../../assets/desktop5/vector-25.svg";
import vector26 from "../../assets/desktop5/vector-26.svg";
import vector27 from "../../assets/desktop5/vector-27.svg";
import vector28 from "../../assets/desktop5/vector-28.svg";
import vector29 from "../../assets/desktop5/vector-29.svg";
import vector30 from "../../assets/desktop5/vector-30.svg";
import vector31 from "../../assets/desktop5/vector-31.svg";
import vector32 from "../../assets/desktop5/vector-32.svg";
import vector33 from "../../assets/desktop5/vector-33.svg";
import vector34 from "../../assets/desktop5/vector-34.svg";
import vector from "../../assets/desktop5/vector.svg";

const phoneCarousels = [
  {
    id: 1,
    className:
      "top-[180px] left-[41px] w-[275px] h-[432px] rounded-[20px] overflow-hidden border-[3px] border-solid overflow-x-scroll absolute bg-black",
    images: [image24, image35, image15],
  },
  {
    id: 2,
    className:
      "top-[181px] left-[741px] w-[276px] h-[432px] rounded-[20px] overflow-hidden border-[3px] border-solid overflow-x-scroll absolute bg-black",
    images: [image21, image3, image1],
  },
  {
    id: 3,
    className:
      "top-[124px] left-[357px] w-[341px] h-[535px] rounded-[20px] overflow-hidden border-[5px] border-solid border-white overflow-x-scroll absolute bg-black",
    images: [image, image32, image12],
    isMain: true,
  },
  {
    id: 4,
    className:
      "top-[181px] left-[1057px] w-[277px] h-[432px] rounded-[20px] overflow-hidden border-[3px] border-solid overflow-x-scroll absolute bg-black",
    images: [image22, image33, image13],
  },
  {
    id: 5,
    className:
      "absolute top-[181px] left-[1372px] w-[277px] h-[432px] bg-black rounded-[20px] overflow-hidden border-[3px] border-solid overflow-x-scroll",
    images: [image23, image34, image14],
  },
];



const decorativeVectors = [
  { src: vector, className: "absolute w-0 h-0 top-[33.65%] left-[54.29%]" },
  { src: vector9, className: "absolute w-0 h-0 top-0 left-[5.76%]" },
  { src: vector10, className: "absolute w-0 h-0 top-0 left-[5.76%]" },
  { src: vector11, className: "absolute w-[2.57%] h-0 top-0 left-[3.19%]" },
  { src: vector12, className: "absolute w-0 h-0 top-0 left-[7.08%]" },
  { src: vector13, className: "absolute w-0 h-0 top-0 left-[7.08%]" },
  { src: vector14, className: "absolute w-0 h-0 top-0 left-[7.08%]" },
  {
    src: vector19,
    className: "absolute w-[7.22%] h-0 top-[30.21%] left-[62.78%]",
  },
  {
    src: vector20,
    className: "absolute w-[2.02%] h-0 top-[29.65%] left-[23.46%]",
  },
  {
    src: vector21,
    className: "absolute w-[2.02%] h-0 top-[29.65%] left-[29.09%]",
  },
  { src: vector25, className: "absolute w-0 h-0 top-[64.80%] left-[49.99%]" },
  { src: vector26, className: "absolute w-0 h-0 top-[65.08%] left-[49.99%]" },
  { src: vector27, className: "absolute w-0 h-0 top-[64.94%] left-[49.03%]" },
  { src: vector28, className: "absolute w-0 h-0 top-[64.67%] left-[50.47%]" },
  { src: vector29, className: "absolute w-0 h-0 top-[65.21%] left-[50.47%]" },
  { src: vector30, className: "absolute w-0 h-0 top-[64.94%] left-[50.47%]" },
  {
    src: vector31,
    className: "absolute w-[31.74%] h-[4.54%] top-[33.96%] left-[63.54%]",
  },
  {
    src: vector32,
    className: "absolute w-[7.22%] h-0 top-[33.06%] left-[80.84%]",
  },
  {
    src: vector33,
    className: "absolute w-[2.02%] h-0 top-[38.50%] left-[86.26%]",
  },
  {
    src: vector34,
    className: "absolute w-[2.02%] h-0 top-[38.50%] left-[80.63%]",
  },
];

const computerIcons = [
  {
    vectors: [
      {
        src: vector15,
        className: "absolute w-[26.46%] h-[21.32%] top-0 left-[30.64%]",
      },
      {
        src: vector16,
        className: "absolute w-full h-[78.68%] top-[21.32%] left-0",
      },
    ],
    containerClassName:
      "absolute w-[21.90%] h-[6.15%] top-[53.41%] left-[7.15%]",
  },
  {
    vectors: [
      {
        src: vector17,
        className: "absolute w-[26.46%] h-[21.32%] top-0 left-[30.64%]",
      },
      {
        src: vector18,
        className: "absolute w-full h-[78.68%] top-[21.32%] left-0",
      },
    ],
    containerClassName: "absolute w-[21.90%] h-[6.15%] top-[26.97%] left-0",
  },
];

function HomePage(): React.ReactElement {
  return (
    <main className="relative w-full min-w-0 lg:min-w-[1440px] min-h-screen lg:h-[4776px] bg-white overflow-x-hidden">
      {/* Hero Background - Responsive */}
      <ResponsiveImage
        src={rectangle12}
        alt="Hero background"
        className="absolute top-0 left-0 w-full lg:w-[1440px] h-auto lg:h-[703px] object-cover"
        loading="eager"
        objectFit="cover"
      />


      {/* Main Heading - Responsive */}
      <PageHeading
        parts={[
          { text: "How", className: "text-white", breakAfter: true },
          { text: "the Internet", className: "text-[#0000cb]", breakAfter: true },
          { text: "works?", className: "text-[#0000cb]" },
        ]}
        desktopTop="lg:top-[617px]"
        desktopLeft="lg:left-[100px]"
        desktopWidth="lg:w-[917px]"
        className="lg:leading-[100px]"
      />

      {/* Hero Text Sections - Responsive */}
      <div className="relative lg:absolute lg:top-[18.38%] lg:left-[56.18%] w-full lg:w-[36.67%] px-4 sm:px-6 lg:px-0 mt-6 lg:mt-0 mb-4 lg:mb-0">
        <p className="[font-family:'Funnel_Sans-Regular',Helvetica] font-normal text-white text-lg sm:text-xl md:text-2xl lg:text-[28px] tracking-normal leading-relaxed lg:leading-normal">
          The Internet is a global network <br className="hidden lg:block" />
          of computers that communicate <br className="hidden lg:block" />
          with each other using protocols.
        </p>
      </div>

      <div className="relative lg:absolute lg:top-[21.82%] lg:left-[42.08%] w-full lg:w-[50.56%] px-4 sm:px-6 lg:px-0 mt-6 lg:mt-0 mb-4 lg:mb-0">
        <p className="[font-family:'Funnel_Sans-Regular',Helvetica] font-normal text-white text-lg sm:text-xl md:text-2xl lg:text-[28px] tracking-normal leading-relaxed lg:leading-normal">
          Every device connected to the Internet{" "}
          <br className="hidden lg:block" />
          can send and receive information. <br className="hidden lg:block" />
          When you visit a website, your computer sends a request to a server,
          and the server sends back the webpage.
        </p>
      </div>

      <div className="relative lg:absolute lg:top-[25.96%] lg:left-[56.18%] w-full lg:w-[35.42%] px-4 sm:px-6 lg:px-0 mt-6 lg:mt-0 mb-8 lg:mb-0">
        <p className="[font-family:'Funnel_Sans-Regular',Helvetica] font-normal text-white text-lg sm:text-xl md:text-2xl lg:text-[28px] tracking-normal leading-relaxed lg:leading-normal">
          Data travels in small units called packets, which move through routers
          and networks to reach their destination.
        </p>
      </div>

      {/* Black Section - Responsive */}
      <section
        className="absolute top-[703px] lg:top-[703px] left-0 w-full lg:w-[1440px] h-[40vh] lg:h-[742px] bg-black"
        aria-label="How the Internet works section"
      />

      {/* Phone Carousels - Desktop only */}
      <div className="hidden lg:block">
        {phoneCarousels.map((carousel) => (
          <article
            key={carousel.id}
            className={`absolute rounded-[20px] overflow-hidden border-[${carousel.isMain ? "5px" : "3px"}] border-solid overflow-x-scroll bg-black ${carousel.isMain ? "border-white" : ""} ${carousel.className}`}
            aria-label={`Phone carousel ${carousel.id}`}
          >
            {!carousel.isMain && (
              <div className="top-0 left-0 w-[3600px] h-[351px] absolute bg-black" />
            )}
            {carousel.images.map((imgSrc, index) => {
              const positions = ["left-0", "left-[310px]", "left-[500px]"];
              const widths = ["w-[310px]", "w-[310px]", "w-[305px]"];
              const heights = ["h-[552px]", "h-[552px]", "h-[543px]"];
              const topOffset =
                carousel.isMain && index === 0 ? "top-[-17px]" : "top-0";

              return (
                <img
                  key={index}
                  className={`${positions[index]} ${widths[index]} ${heights[index]} absolute ${topOffset} aspect-[0.56] object-cover`}
                  alt={`Phone screen ${index + 1}`}
                  src={imgSrc}
                  loading="lazy"
                />
              );
            })}
          </article>
        ))}
      </div>

      {/* Mobile Phone Carousel - Show main carousel on mobile */}
      <div className="lg:hidden px-4 sm:px-6 mt-8 mb-8">
        <div className="w-full max-w-md mx-auto rounded-[20px] overflow-hidden border-2 border-solid border-white overflow-x-scroll bg-black">
          {phoneCarousels[2].images.map((imgSrc, index) => (
            <img
              key={index}
              className="inline-block w-[280px] h-auto object-cover"
              alt={`Phone screen ${index + 1}`}
              src={imgSrc}
              loading="lazy"
            />
          ))}
        </div>
      </div>


      {/* Decorative Vectors - Desktop only */}
      <VectorIconGroup
        vectors={decorativeVectors.map((v) => ({
          src: v.src,
          className: v.className,
        }))}
        desktopOnly={true}
      />


      {/* Computer Icons - Desktop only */}
      {computerIcons.map((icon, index) => (
        <div
          key={index}
          className={`hidden lg:block ${icon.containerClassName}`}
          aria-label={`Computer icon ${index + 1}`}
        >
          {icon.vectors.map((vector, vIndex) => (
            <img
              key={vIndex}
              className={vector.className}
              alt=""
              src={vector.src}
              loading="lazy"
            />
          ))}
        </div>
      ))}

      {/* Decorative Background Elements - Desktop only */}
      <div
        className="hidden lg:block top-[868px] left-[756px] absolute w-[38px] h-[38px] bg-[url(/vector-22.svg)] bg-[100%_100%]"
        aria-hidden="true"
      />
      <div
        className="hidden lg:block top-[1032px] left-[551px] absolute w-[38px] h-[38px] bg-[url(/vector-23.svg)] bg-[100%_100%]"
        aria-hidden="true"
      />
      <div
        className="hidden lg:block top-[1230px] left-[756px] absolute w-[38px] h-[38px] bg-[url(/vector-24.svg)] bg-[100%_100%]"
        aria-hidden="true"
      />
      <div
        className="hidden lg:block absolute w-full h-0 top-[64.28%] left-0 [background:radial-gradient(50%_50%_at_23%_50%,rgba(0,0,0,1)_29%,rgba(0,0,0,1)_100%)]"
        aria-hidden="true"
      />

      {/* Content Sections - Responsive Stack */}
      <div className="relative lg:static w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-0 mt-12 lg:mt-0 space-y-8 lg:space-y-0">
        {/* Section 1 */}
        <div className="relative lg:absolute lg:top-[42.22%] lg:left-[22.81%] mt-8 lg:mt-0">
          <ResponsiveImage
            src={rectangle25}
            alt="Decorative rectangle"
            className="w-full max-w-full lg:w-[30.07%] lg:h-[5.62%] h-auto object-contain mb-4 lg:mb-0"
            loading="lazy"
          />
        </div>

        {/* Section 2 */}
        <div className="relative lg:absolute lg:top-[33.91%] lg:left-[39.58%] mt-8 lg:mt-0">
          <ResponsiveImage
            src={rectangle13}
            alt="Decorative rectangle"
            className="w-full max-w-full lg:w-[35.00%] lg:h-[6.55%] h-auto object-contain mb-4 lg:mb-0"
            loading="lazy"
          />
          <p className="lg:absolute lg:top-[34.34%] lg:left-[42.29%] lg:w-[24.65%] mt-4 lg:mt-0 px-4 lg:px-0 [font-family:'Funnel_Sans-Regular',Helvetica] font-normal text-black text-base sm:text-lg md:text-xl lg:text-[32px] tracking-normal leading-relaxed lg:leading-normal">
            If you open your browser and type a website address, your request
            travels from your computer
          </p>
        </div>

        {/* Arrow Text - Responsive */}
        <div className="relative lg:absolute lg:top-[2145px] lg:left-[488px] px-4 sm:px-6 lg:px-0 mt-8 lg:mt-0">
          <p className="[font-family:'Funnel_Sans-Regular',Helvetica] font-normal text-black text-lg sm:text-xl md:text-2xl lg:text-[32px] tracking-normal leading-normal">
            → your home router
          </p>
        </div>

        <div className="relative lg:absolute lg:top-[2440px] lg:left-[838px] px-4 sm:px-6 lg:px-0 mt-8 lg:mt-0">
          <p className="[font-family:'Funnel_Sans-Regular',Helvetica] font-normal text-black text-lg sm:text-xl md:text-2xl lg:text-[32px] tracking-normal leading-normal">
            → the server that hosts the website
          </p>
        </div>

        <div className="relative lg:absolute lg:top-[2886px] lg:left-[418px] px-4 sm:px-6 lg:px-0 mt-8 lg:mt-0">
          <p className="[font-family:'Funnel_Sans-Regular',Helvetica] font-normal text-black text-lg sm:text-xl md:text-2xl lg:text-[32px] tracking-normal leading-normal">
            → back to your computer
          </p>
        </div>

        {/* Section 3 */}
        <div className="relative lg:absolute lg:top-[55.75%] lg:left-[9.34%] mt-8 lg:mt-0">
          <ResponsiveImage
            src={rectangle27}
            alt="Decorative rectangle"
            className="w-full max-w-full lg:w-[30.07%] lg:h-[5.62%] h-auto object-contain mb-4 lg:mb-0"
            loading="lazy"
          />
        </div>
      </div>

      {/* Footer Section - Responsive */}
      <section
        className="absolute top-[3139px] lg:top-[3139px] left-0 w-full lg:w-[1610px] h-[40vh] lg:h-[1727px] bg-[#1e1e1e]"
        aria-label="Footer section"
      />

      {/* Footer Images - Responsive */}
      <div className="relative lg:absolute lg:top-[25.08%] lg:left-[4.31%] px-4 sm:px-6 lg:px-0 mt-8 lg:mt-0">
        <ResponsiveImage
          src={group}
          alt="Decorative graphic"
          className="w-full max-w-md lg:w-[32.22%] lg:h-[22.10%] h-auto object-contain"
          loading="lazy"
        />
      </div>

      <div className="relative lg:absolute lg:top-[47.33%] lg:left-[50.78%] px-4 sm:px-6 lg:px-0 mt-8 lg:mt-0">
        <ResponsiveImage
          src={rectangle26}
          alt="Decorative rectangle"
          className="w-full max-w-md lg:w-[20.82%] lg:h-[6.57%] h-auto object-contain"
          loading="lazy"
        />
      </div>

      <div className="relative lg:absolute lg:top-[53.34%] lg:left-[62.78%] px-4 sm:px-6 lg:px-0 mt-8 lg:mt-0">
        <ResponsiveImage
          src={group2}
          alt="Decorative graphic"
          className="w-full max-w-md lg:w-[30.69%] lg:h-[6.91%] h-auto object-contain"
          loading="lazy"
        />
      </div>

      {/* Navigation Buttons - Responsive */}
      <NavigationButtons nextTo="/hosting" />
    </main>
  );
}

export default React.memo(HomePage);

