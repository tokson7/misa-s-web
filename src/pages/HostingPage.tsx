import React from "react";
import ResponsiveImage from "../components/ResponsiveImage";
import NavigationButtons from "../components/NavigationButtons";
import PageHeading from "../components/PageHeading";
import FooterVectors from "../components/FooterVectors";
import image6 from "../../assets/desktop6/image-6.webp";
import image from "../../assets/desktop6/image.svg";
import rectangle32 from "../../assets/desktop6/rectangle-32.svg";
import rectangle39 from "../../assets/desktop6/rectangle-39.svg";
import vector2 from "../../assets/desktop6/vector-2.svg";
import vector3 from "../../assets/desktop6/vector-3.svg";
import vector4 from "../../assets/desktop6/vector-4.svg";
import vector5 from "../../assets/desktop6/vector-5.svg";
import vector6 from "../../assets/desktop6/vector-6.svg";
import vector7 from "../../assets/desktop6/vector-7.svg";
import vector8 from "../../assets/desktop6/vector-8.svg";
import vector9 from "../../assets/desktop6/vector-9.svg";
import vector from "../../assets/desktop6/vector.svg";


const hostingCompanies = ["Bluehost", "SiteGround", "Hostinger"];

const HEADER_GRADIENT =
  "bg-[linear-gradient(to_bottom_right,rgba(47,0,255,1)_0%,rgba(169,255,71,1)_50%)_bottom_right_/_50%_50%_no-repeat,linear-gradient(to_bottom_left,rgba(47,0,255,1)_0%,rgba(169,255,71,1)_50%)_bottom_left_/_50%_50%_no-repeat,linear-gradient(to_top_left,rgba(47,0,255,1)_0%,rgba(169,255,71,1)_50%)_top_left_/_50%_50%_no-repeat,linear-gradient(to_top_right,rgba(47,0,255,1)_0%,rgba(169,255,71,1)_50%)_top_right_/_50%_50%_no-repeat]";

function HostingPage(): React.ReactElement {
  return (
    <div className="relative w-full min-w-0 lg:min-w-[1440px] min-h-screen lg:h-[1266px] bg-white overflow-x-hidden">
      {/* Background Gradient - Desktop only */}
      <div className="hidden lg:block absolute top-[660px] left-0 w-[1440px] h-[541px] rotate-[-180.00deg] bg-[linear-gradient(to_bottom_right,rgba(47,0,255,1)_0%,rgba(169,255,71,1)_50%)_bottom_right_/_50%_50%_no-repeat,linear-gradient(to_bottom_left,rgba(47,0,255,1)_0%,rgba(169,255,71,1)_50%)_bottom_left_/_50%_50%_no-repeat,linear-gradient(to_top_left,rgba(47,0,255,1)_0%,rgba(169,255,71,1)_50%)_top_left_/_50%_50%_no-repeat,linear-gradient(to_top_right,rgba(47,0,255,1)_0%,rgba(169,255,71,1)_50%)_top_right_/_50%_50%_no-repeat]" />


      {/* Main Image - Responsive */}
      <div className="relative lg:absolute lg:top-[187px] lg:left-[750px] w-full lg:w-[590px] px-4 sm:px-6 lg:px-0 mt-8 lg:mt-0 mb-8 lg:mb-0">
        <ResponsiveImage
          src={image6}
          alt="Image"
          className="w-full max-w-full lg:w-[590px] lg:h-[332px] h-auto object-cover rounded-lg"
          loading="lazy"
          objectFit="cover"
        />
      </div>

      {/* Main Heading - Responsive */}
      <PageHeading
        parts={[{ text: "Web hosting", className: "text-black" }]}
        desktopTop="lg:top-[420px]"
        desktopLeft="lg:left-[99px]"
        desktopWidth="lg:w-[1005px]"
      />

      {/* Content Sections - Responsive Stack Layout */}
      <div className="relative lg:static w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-0 mt-12 lg:mt-0 space-y-8 lg:space-y-0">
        {/* Section 1 */}
        <div className="relative lg:absolute lg:top-[570px] lg:left-[94px] mt-8 lg:mt-0">
          <ResponsiveImage
            src={rectangle32}
            alt="Rectangle"
            className="lg:hidden w-full h-auto mb-6 rounded-lg object-contain"
            loading="lazy"
          />
          <img
            className="hidden lg:block absolute w-[1246px] h-64 top-0 left-0 object-contain"
            alt="Rectangle"
            src={rectangle32}
            loading="lazy"
          />

          <section
            className="hidden lg:block absolute top-[53px] left-[32px] w-[69px] h-[111px]"
            aria-hidden="true"
          >
            <div className="flex-1 w-[57.89px] relative">
              <img
                className="absolute w-[33.33%] h-[49.99%] top-0 left-[66.67%]"
                alt="Vector"
                src={vector8}
                loading="lazy"
              />
              <img
                className="absolute w-[66.67%] h-[50.01%] top-[49.99%] left-0"
                alt="Vector"
                src={vector9}
                loading="lazy"
              />
            </div>
          </section>

          <article className="w-full lg:absolute lg:top-[57px] lg:left-[106px] lg:w-[844px] mt-6 lg:mt-0 [font-family:'Funnel_Display-SemiBold',Helvetica] font-normal text-black text-xl sm:text-2xl md:text-3xl lg:text-[32px] tracking-normal leading-relaxed lg:leading-normal">
            <h2 className="font-semibold mb-4 lg:mb-0">
              What is Web Hosting?
              <br className="hidden lg:block" />
            </h2>
            <span className="[font-family:'Funnel_Sans-Regular',Helvetica]">
              {" "}
            </span>
            <p className="[font-family:'Funnel_Sans-Regular',Helvetica] text-lg sm:text-xl md:text-2xl lg:text-[28px] mt-2 lg:mt-0">
              Web hosting is a service that stores your website files on a server
              so people can access your site online. Hosting companies provide
              space, security, and tools to manage your website.
            </p>
          </article>
        </div>

        {/* Section 2 */}
        <div className="relative lg:absolute lg:top-[833px] lg:left-[94px] mt-8 lg:mt-0">
          <ResponsiveImage
            src={rectangle39}
            alt="Rectangle"
            className="lg:hidden w-full h-auto mb-6 rounded-lg object-contain"
            loading="lazy"
          />
          <img
            className="hidden lg:block absolute w-[1246px] h-64 top-0 left-0 object-contain"
            alt="Rectangle"
            src={rectangle39}
            loading="lazy"
          />

          <section
            className="hidden lg:block absolute top-[54px] left-[26px] w-[69px] h-[111px]"
            aria-hidden="true"
          >
            <div className="flex-1 w-[57.89px] relative">
              <img
                className="absolute w-[33.33%] h-[49.99%] top-0 left-[66.67%]"
                alt="Vector"
                src={vector6}
                loading="lazy"
              />
              <img
                className="absolute w-[66.67%] h-[50.01%] top-[49.99%] left-0"
                alt="Vector"
                src={vector7}
                loading="lazy"
              />
            </div>
          </section>

          <article className="w-full lg:absolute lg:top-[58px] lg:left-[96px] lg:w-[1034px] mt-6 lg:mt-0 [font-family:'Funnel_Display-SemiBold',Helvetica] font-normal text-black text-xl sm:text-2xl md:text-3xl lg:text-[32px] tracking-normal leading-relaxed lg:leading-normal">
            <h2 className="font-semibold mb-4 lg:mb-0">
              3 Hosting Companies:
              <br />
              <br className="hidden lg:block" />
            </h2>
            <ul className="[font-family:'Funnel_Sans-Regular',Helvetica] text-lg sm:text-xl md:text-2xl lg:text-[28px] mt-2 lg:mt-0">
              {hostingCompanies.map((company, index) => (
                <li key={index}>
                  {company}
                  <br className="hidden lg:block" />
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>

      {/* Footer Background - Desktop only */}
      <FooterVectors
        vectors={[
          { src: vector, top: "96.28%", left: "49.99%" },
          { src: image, top: "97.38%", left: "49.99%" },
          { src: vector2, top: "96.83%", left: "49.03%" },
          { src: vector3, top: "95.73%", left: "50.47%" },
          { src: vector4, top: "97.93%", left: "50.47%" },
          { src: vector5, top: "96.83%", left: "50.47%" },
        ]}
        gradientClass="[background:radial-gradient(50%_50%_at_23%_50%,rgba(0,0,0,1)_29%,rgba(0,0,0,1)_100%)]"
      />

      {/* Navigation Buttons - Responsive */}
      <NavigationButtons backTo="/" nextTo="/dns" />
    </div>
  );
}

export default React.memo(HostingPage);

