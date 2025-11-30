import React from "react";
import { Link } from "react-router-dom";

// Import images - these should be placed in src/assets/desktop5/
import group2 from "../assets/desktop5/group-2.png";
import group18 from "../assets/desktop5/group-18.png";
import group from "../assets/desktop5/group.png";
import image12 from "../assets/desktop5/image-1-2.png";
import image13 from "../assets/desktop5/image-1-3.png";
import image14 from "../assets/desktop5/image-1-4.png";
import image15 from "../assets/desktop5/image-1-5.png";
import image1 from "../assets/desktop5/image-1.png";
import image22 from "../assets/desktop5/image-2-2.png";
import image23 from "../assets/desktop5/image-2-3.png";
import image24 from "../assets/desktop5/image-2-4.png";
import image2 from "../assets/desktop5/image-2.png";
import image32 from "../assets/desktop5/image-3-2.png";
import image33 from "../assets/desktop5/image-3-3.png";
import image34 from "../assets/desktop5/image-3-4.png";
import image35 from "../assets/desktop5/image-3-5.png";
import image3 from "../assets/desktop5/image-3.png";
import image from "../assets/desktop5/image.png";
import image4 from "../assets/desktop5/image.svg";
import rectangle12 from "../assets/desktop5/rectangle-12.png";
import rectangle13 from "../assets/desktop5/rectangle-13.svg";
import rectangle25 from "../assets/desktop5/rectangle-25.svg";
import rectangle26 from "../assets/desktop5/rectangle-26.svg";
import rectangle27 from "../assets/desktop5/rectangle-27.svg";
import rectangle45 from "../assets/desktop5/rectangle-45.png";
import vector2 from "../assets/desktop5/vector-2.svg";
import vector3 from "../assets/desktop5/vector-3.svg";
import vector4 from "../assets/desktop5/vector-4.svg";
import vector5 from "../assets/desktop5/vector-5.svg";
import vector6 from "../assets/desktop5/vector-6.svg";
import vector7 from "../assets/desktop5/vector-7.svg";
import vector11 from "../assets/desktop5/vector-11.svg";
import vector12 from "../assets/desktop5/vector-12.svg";
import vector13 from "../assets/desktop5/vector-13.svg";
import vector14 from "../assets/desktop5/vector-14.svg";
import vector15 from "../assets/desktop5/vector-15.svg";
import vector16 from "../assets/desktop5/vector-16.svg";
import vector17 from "../assets/desktop5/vector-17.svg";
import vector18 from "../assets/desktop5/vector-18.svg";
import vector19 from "../assets/desktop5/vector-19.svg";
import vector20 from "../assets/desktop5/vector-20.svg";
import vector from "../assets/desktop5/vector.svg";

const phoneCarousels = [
  {
    id: 1,
    className: "top-[180px] left-[41px] w-[275px] h-[432px] border-[3px]",
    images: [image24, image35, image15],
  },
  {
    id: 2,
    className:
      "top-[124px] left-[357px] w-[341px] h-[535px] border-[5px] border-white",
    images: [image, image32, image12],
    topOffset: -17,
  },
  {
    id: 3,
    className: "top-[181px] left-[741px] w-[276px] h-[432px] border-[3px]",
    images: [image2, image3, image1],
  },
  {
    id: 4,
    className: "top-[181px] left-[1057px] w-[277px] h-[432px] border-[3px]",
    images: [image22, image33, image13],
  },
  {
    id: 5,
    className: "top-[181px] left-[1372px] w-[277px] h-[432px] border-[3px]",
    images: [image23, image34, image14],
  },
];

const navigationItems = [
  { id: 1, text: "Domain and IP", left: "784px", path: "/domains" },
  { id: 2, text: "DNS and Server", left: "961px", path: "/dns" },
  { id: 3, text: "Web Hosting", left: "1126px", path: "/hosting" },
];

const computerIcons = [
  {
    id: 1,
    className: "w-[21.90%] h-[6.15%] top-[26.97%] left-0",
    iconSrc: vector3,
    baseSrc: vector4,
  },
  {
    id: 2,
    className: "w-[21.90%] h-[6.15%] top-[53.41%] left-[7.15%]",
    iconSrc: image4,
    baseSrc: vector2,
  },
];

function HomePage(): React.ReactElement {
  return (
    <main className="bg-white overflow-hidden w-full min-w-[1440px] h-[4776px] relative">
      <img
        className="absolute w-[30.07%] h-[5.62%] top-[42.22%] left-[22.81%]"
        alt=""
        src={rectangle25}
      />

      <div
        className="absolute top-[2145px] left-[488px] w-[422px] [font-family:'Funnel_Sans-Regular',Helvetica] font-normal text-black text-[32px] tracking-[0] leading-[normal]"
        aria-label="Arrow pointing to your home router"
      >
        → your home router
      </div>

      <div
        className="absolute top-[703px] left-0 w-[1440px] h-[742px] bg-black"
        aria-hidden="true"
      />

      <img
        className="absolute top-0 left-0 w-[1440px] h-[703px]"
        alt=""
        src={rectangle12}
      />

      <img
        className="absolute top-0 left-0 w-[1440px] h-[703px]"
        alt=""
        src={rectangle45}
      />

      <nav
        className="absolute top-[39px] left-[784px] flex gap-[177px]"
        aria-label="Main navigation"
      >
        {navigationItems.map((item) => (
          <Link
            key={item.id}
            to={item.path}
            className="w-[382px] [font-family:'Funnel_Display-ExtraBold',Helvetica] font-extrabold text-black text-base text-center tracking-[0] leading-[normal]"
            style={{ position: "absolute", left: item.left, top: 0 }}
          >
            {item.text}
          </Link>
        ))}
      </nav>

      {phoneCarousels.map((carousel) => (
        <div
          key={carousel.id}
          className={`${carousel.className} rounded-[20px] overflow-hidden border-solid overflow-x-scroll absolute bg-black`}
          role="region"
          aria-label={`Phone carousel ${carousel.id}`}
        >
          <div
            className="top-0 left-0 w-[3600px] h-[351px] absolute bg-black"
            aria-hidden="true"
          />

          <img
            className="left-0 w-[310px] h-[552px] absolute aspect-[0.56] object-cover"
            style={{
              top: carousel.topOffset ? `${carousel.topOffset}px` : "0px"
            }}
            alt={`Phone screen ${carousel.id} view 1`}
            src={carousel.images[0]}
          />

          <img
            className="left-[310px] w-[310px] h-[552px] absolute top-0 aspect-[0.56] object-cover"
            alt={`Phone screen ${carousel.id} view 2`}
            src={carousel.images[1]}
          />

          <img
            className="left-[500px] w-[305px] h-[543px] absolute top-0 aspect-[0.56] object-cover"
            alt={`Phone screen ${carousel.id} view 3`}
            src={carousel.images[2]}
          />
        </div>
      ))}

      <img
        className="absolute w-0 h-0 top-[33.65%] left-[54.29%]"
        alt=""
        src={vector}
      />

      <Link to="/">
        <img
          className="absolute w-[15.07%] h-0 top-0 left-[3.19%]"
          alt="Logo"
          src={group18}
        />
      </Link>

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
        alt=""
        src={rectangle27}
      />

      {computerIcons.map((icon) => (
        <div
          key={icon.id}
          className={`absolute ${icon.className}`}
          aria-label="Computer icon"
        >
          <img
            className="absolute w-[26.46%] h-[21.32%] top-0 left-[30.64%]"
            alt=""
            src={icon.iconSrc}
          />

          <img
            className="absolute w-full h-[78.68%] top-[21.32%] left-0"
            alt=""
            src={icon.baseSrc}
          />
        </div>
      ))}

      <p
        className="absolute top-[2886px] left-[418px] w-[420px] [font-family:'Funnel_Sans-Regular',Helvetica] font-normal text-black text-[32px] tracking-[0] leading-[normal]"
        aria-label="Arrow pointing back to your computer"
      >
        → back to your computer
      </p>

      <img
        className="absolute w-[7.22%] h-0 top-[30.21%] left-[62.78%]"
        alt=""
        src={vector5}
      />

      <img
        className="absolute w-[2.02%] h-0 top-[29.65%] left-[23.46%]"
        alt=""
        src={vector6}
      />

      <img
        className="absolute w-[2.02%] h-0 top-[29.65%] left-[29.09%]"
        alt=""
        src={vector7}
      />

      <div
        className="absolute top-[868px] left-[756px] w-[38px] h-[38px] bg-[url(/vector-8.svg)] bg-[100%_100%]"
        aria-hidden="true"
      />

      <div
        className="top-[1032px] left-[551px] absolute w-[38px] h-[38px] bg-[url(/vector-9.svg)] bg-[100%_100%]"
        aria-hidden="true"
      />

      <div
        className="top-[1230px] left-[756px] absolute w-[38px] h-[38px] bg-[url(/vector-10.svg)] bg-[100%_100%]"
        aria-hidden="true"
      />

      <div
        className="absolute w-full h-0 top-[64.28%] left-0 [background:radial-gradient(50%_50%_at_23%_50%,rgba(0,0,0,1)_29%,rgba(0,0,0,1)_100%)]"
        aria-hidden="true"
      />

      <img
        className="absolute w-0 h-0 top-[64.80%] left-[49.99%]"
        alt=""
        src={vector11}
      />

      <img
        className="absolute w-0 h-0 top-[65.08%] left-[49.99%]"
        alt=""
        src={vector12}
      />

      <img
        className="absolute w-0 h-0 top-[64.94%] left-[49.03%]"
        alt=""
        src={vector13}
      />

      <img
        className="absolute w-0 h-0 top-[64.67%] left-[50.47%]"
        alt=""
        src={vector14}
      />

      <img
        className="absolute w-0 h-0 top-[65.21%] left-[50.47%]"
        alt=""
        src={vector15}
      />

      <img
        className="absolute w-0 h-0 top-[64.94%] left-[50.47%]"
        alt=""
        src={vector16}
      />

      <img
        className="absolute w-[35.00%] h-[6.55%] top-[33.91%] left-[39.58%]"
        alt=""
        src={rectangle13}
      />

      <img
        className="absolute w-[31.74%] h-[4.54%] top-[33.96%] left-[63.54%]"
        alt=""
        src={vector17}
      />

      <img
        className="absolute w-[7.22%] h-0 top-[33.06%] left-[80.84%]"
        alt=""
        src={vector18}
      />

      <img
        className="absolute w-[2.02%] h-0 top-[38.50%] left-[86.26%]"
        alt=""
        src={vector19}
      />

      <img
        className="absolute w-[2.02%] h-0 top-[38.50%] left-[80.63%]"
        alt=""
        src={vector20}
      />

      <p className="absolute w-[24.65%] h-[2.99%] top-[34.34%] left-[42.29%] [font-family:'Funnel_Sans-Regular',Helvetica] font-normal text-black text-[32px] tracking-[0] leading-[normal]">
        If you open your browser and type a website address, your request
        travels from your computer
      </p>

      <img
        className="absolute w-[32.22%] h-[22.10%] top-[25.08%] left-[4.31%]"
        alt=""
        src={group}
      />

      <img
        className="absolute w-[20.82%] h-[6.57%] top-[47.33%] left-[50.78%]"
        alt=""
        src={rectangle26}
      />

      <p
        className="absolute top-[2440px] left-[838px] w-[552px] [font-family:'Funnel_Sans-Regular',Helvetica] font-normal text-black text-[32px] tracking-[0] leading-[normal]"
        aria-label="Arrow pointing to the server that hosts the website"
      >
        → the server that hosts the website
      </p>

      <img
        className="absolute w-[30.69%] h-[6.91%] top-[53.34%] left-[62.78%]"
        alt=""
        src={group2}
      />
    </main>
  );
}

export default HomePage;
