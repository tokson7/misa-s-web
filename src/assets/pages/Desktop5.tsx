import React from "react";
import group2 from "./group-2.png";
import group from "./group.png";
import image12 from "./image-1-2.png";
import image13 from "./image-1-3.png";
import image14 from "./image-1-4.png";
import image15 from "./image-1-5.png";
import image1 from "./image-1.png";
import image22 from "./image-2-2.png";
import image23 from "./image-2-3.png";
import image24 from "./image-2-4.png";
import image21 from "./image-2.png";
import image32 from "./image-3-2.png";
import image33 from "./image-3-3.png";
import image34 from "./image-3-4.png";
import image35 from "./image-3-5.png";
import image3 from "./image-3.png";
import image from "./image.png";
import image2 from "./image.svg";
import rectangle12 from "./rectangle-12.png";
import rectangle13 from "./rectangle-13.svg";
import rectangle25 from "./rectangle-25.svg";
import rectangle26 from "./rectangle-26.svg";
import rectangle27 from "./rectangle-27.svg";
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
import vector from "./vector.svg";

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

const navigationItems = [
  { text: "Domain and IP", left: "784px" },
  { text: "DNS and Server", left: "961px" },
  { text: "Web Hosting", left: "1126px" },
];

const logoVectors = [
  { src: image2, className: "absolute w-[4.04%] h-[98.54%] top-0 left-0" },
  {
    src: vector2,
    className: "absolute w-[15.36%] h-[74.33%] top-[24.21%] left-[6.32%]",
  },
  {
    src: vector3,
    className: "absolute w-[9.20%] h-[94.89%] top-[3.65%] left-[23.27%]",
  },
  {
    src: vector4,
    className: "absolute w-[13.42%] h-[75.96%] top-[24.06%] left-[33.59%]",
  },
  {
    src: vector5,
    className: "absolute w-[10.06%] h-[73.97%] top-[24.57%] left-[48.22%]",
  },
  {
    src: vector6,
    className: "absolute w-[15.36%] h-[74.33%] top-[24.21%] left-[59.23%]",
  },
  {
    src: vector7,
    className: "absolute w-[13.42%] h-[75.96%] top-[24.06%] left-[76.39%]",
  },
  {
    src: vector8,
    className: "absolute w-[9.20%] h-[94.89%] top-[3.65%] left-[90.80%]",
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

export const Desktop = (): React.ReactElement => {
  return (
    <main className="bg-white overflow-hidden w-full min-w-[1440px] h-[4776px] relative">
      <img
        className="absolute w-[30.07%] h-[5.62%] top-[42.22%] left-[22.81%]"
        alt="Decorative rectangle"
        src={rectangle25}
      />

      <div className="absolute top-[2145px] left-[488px] w-[422px] [font-family:'Funnel_Sans-Regular',Helvetica] font-normal text-black text-[32px] tracking-[0] leading-[normal]">
        → your home router
      </div>

      <section
        className="absolute top-[703px] left-0 w-[1440px] h-[742px] bg-black"
        aria-label="How the Internet works section"
      />

      <img
        className="absolute top-0 left-0 w-[1440px] h-[703px]"
        alt="Hero background"
        src={rectangle12}
      />

      <nav
        className="absolute top-[39px] left-[784px] w-[724px] flex"
        aria-label="Main navigation"
      >
        {navigationItems.map((item, index) => (
          <div
            key={index}
            className="absolute w-[382px] [font-family:'Funnel_Display-ExtraBold',Helvetica] font-extrabold text-black text-base text-center tracking-[0] leading-[normal]"
            style={{ left: `calc(${item.left} - 784px)` }}
          >
            {item.text}
          </div>
        ))}
      </nav>

      {phoneCarousels.map((carousel) => (
        <article
          key={carousel.id}
          className={carousel.className}
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
              />
            );
          })}
        </article>
      ))}

      {decorativeVectors.map((vector, index) => (
        <img key={index} className={vector.className} alt="" src={vector.src} />
      ))}

      <div
        className="absolute w-[9.03%] h-0 top-0 left-[9.24%]"
        aria-label="Logo"
      >
        {logoVectors.map((vector, index) => (
          <img
            key={index}
            className={vector.className}
            alt=""
            src={vector.src}
          />
        ))}
      </div>

      <h1 className="absolute top-[617px] left-[100px] w-[917px] [font-family:'Funnel_Display-Bold',Helvetica] font-bold text-transparent text-8xl tracking-[0] leading-[100px]">
        <span className="text-white">
          How
          <br />
        </span>
        <span className="text-[#0000cb]">
          the Internet
          <br />
          works?
        </span>
      </h1>

      <p className="absolute w-[36.67%] h-[2.09%] top-[18.38%] left-[56.18%] [font-family:'Funnel_Sans-Regular',Helvetica] font-normal text-white text-[28px] tracking-[0] leading-[normal]">
        The Internet is a global network <br />
        of computers that communicate <br />
        with each other using protocols.
      </p>

      <p className="absolute w-[50.56%] h-[2.58%] top-[21.82%] left-[42.08%] [font-family:'Funnel_Sans-Regular',Helvetica] font-normal text-white text-[28px] tracking-[0] leading-[normal]">
        Every device connected to the Internet <br />
        can send and receive information. <br />
        When you visit a website, your computer sends a request to a server, and
        the server sends back the webpage.
      </p>

      <p className="absolute w-[35.42%] h-[2.76%] top-[25.96%] left-[56.18%] [font-family:'Funnel_Sans-Regular',Helvetica] font-normal text-white text-[28px] tracking-[0] leading-[normal]">
        Data travels in small units called packets, which move through routers
        and networks to reach their destination.
      </p>

      <img
        className="absolute w-[30.07%] h-[5.62%] top-[55.75%] left-[9.34%]"
        alt="Decorative rectangle"
        src={rectangle27}
      />

      {computerIcons.map((icon, index) => (
        <div
          key={index}
          className={icon.containerClassName}
          aria-label={`Computer icon ${index + 1}`}
        >
          {icon.vectors.map((vector, vIndex) => (
            <img
              key={vIndex}
              className={vector.className}
              alt=""
              src={vector.src}
            />
          ))}
        </div>
      ))}

      <p className="absolute top-[2886px] left-[418px] w-[420px] [font-family:'Funnel_Sans-Regular',Helvetica] font-normal text-black text-[32px] tracking-[0] leading-[normal]">
        → back to your computer
      </p>

      <div
        className="top-[868px] left-[756px] absolute w-[38px] h-[38px] bg-[url(/vector-22.svg)] bg-[100%_100%]"
        aria-hidden="true"
      />

      <div
        className="top-[1032px] left-[551px] absolute w-[38px] h-[38px] bg-[url(/vector-23.svg)] bg-[100%_100%]"
        aria-hidden="true"
      />

      <div
        className="top-[1230px] left-[756px] absolute w-[38px] h-[38px] bg-[url(/vector-24.svg)] bg-[100%_100%]"
        aria-hidden="true"
      />

      <div
        className="absolute w-full h-0 top-[64.28%] left-0 [background:radial-gradient(50%_50%_at_23%_50%,rgba(0,0,0,1)_29%,rgba(0,0,0,1)_100%)]"
        aria-hidden="true"
      />

      <img
        className="absolute w-[35.00%] h-[6.55%] top-[33.91%] left-[39.58%]"
        alt="Decorative rectangle"
        src={rectangle13}
      />

      <p className="absolute w-[24.65%] h-[2.99%] top-[34.34%] left-[42.29%] [font-family:'Funnel_Sans-Regular',Helvetica] font-normal text-black text-[32px] tracking-[0] leading-[normal]">
        If you open your browser and type a website address, your request
        travels from your computer
      </p>

      <section
        className="absolute top-[3139px] left-0 w-[1610px] h-[1727px] bg-[#1e1e1e]"
        aria-label="Footer section"
      />

      <img
        className="absolute w-[32.22%] h-[22.10%] top-[25.08%] left-[4.31%]"
        alt="Decorative graphic"
        src={group}
      />

      <img
        className="absolute w-[20.82%] h-[6.57%] top-[47.33%] left-[50.78%]"
        alt="Decorative rectangle"
        src={rectangle26}
      />

      <p className="absolute top-[2440px] left-[838px] w-[552px] [font-family:'Funnel_Sans-Regular',Helvetica] font-normal text-black text-[32px] tracking-[0] leading-[normal]">
        → the server that hosts the website
      </p>

      <img
        className="absolute w-[30.69%] h-[6.91%] top-[53.34%] left-[62.78%]"
        alt="Decorative graphic"
        src={group2}
      />
    </main>
  );
};
