import React from "react";
import { Link } from "react-router-dom";

function HomePage(): React.ReactElement {
  return (
    <main className="relative w-full min-h-screen bg-white overflow-x-hidden">
      {/* Desktop - 5: Main Container */}
      <div className="relative w-[1440px] h-[4776px] bg-white mx-auto">
        
        {/* Header Background - Radial Gradient with inset shadow */}
        <div 
          className="absolute w-[1440px] h-[703px] left-0 top-0"
          style={{
            boxSizing: 'border-box',
            background: 'radial-gradient(ellipse farthest-corner, #2F00FF 54.12%, #A9FF47 96.63%)',
            boxShadow: 'inset 0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
            transform: 'rotate(180deg)',
            transformOrigin: 'center center'
          }}
        />

        {/* Logo - Group 18 SVG */}
        <div className="absolute w-[217px] h-[89px] left-[46px] top-[19px]">
          <Link to="/">
            <svg width="217" height="89" viewBox="0 0 217 89" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_275_106)">
                <path d="M87 34.6642V12H92.2559V34.6642H87Z" fill="white"/>
                <path d="M97.7355 34.6642V22.9124H95.2194V17.8759H100.363V20.674H101.538C102.209 19.7058 103.036 18.9448 104.015 18.3907C104.993 17.8423 106.246 17.5681 107.778 17.5681C110.165 17.5681 111.994 18.2117 113.268 19.4988C114.543 20.7859 115.186 22.5095 115.186 24.6752V34.6642H110.042V25.6825C110.042 24.5241 109.74 23.6511 109.136 23.0523C108.532 22.4535 107.643 22.1569 106.469 22.1569C105.295 22.1569 104.406 22.4535 103.802 23.0523C103.198 23.6511 102.896 24.5241 102.896 25.6825V34.6642H97.7523H97.7355Z" fill="white"/>
                <path d="M124.155 34.6642C122.852 34.6642 121.84 34.3341 121.124 33.6737C120.409 33.0134 120.045 32.0005 120.045 30.635V21.9051H117.25V17.8759H120.101V12.8394H125.133V17.8759H128.824V21.9051H125.189V30.635H129.215V34.6642H124.155Z" fill="white"/>
                <path d="M139.727 35C137.882 35 136.277 34.6418 134.918 33.9199C133.56 33.2036 132.508 32.1852 131.776 30.8701C131.038 29.555 130.669 28.0049 130.669 26.2085C130.669 24.4122 131.027 22.8732 131.748 21.5805C132.464 20.2822 133.492 19.2861 134.823 18.5866C136.154 17.8871 137.725 17.5345 139.531 17.5345C141.337 17.5345 142.858 17.8759 144.144 18.5586C145.43 19.2414 146.414 20.2151 147.091 21.4854C147.773 22.7557 148.114 24.2723 148.114 26.0462V27.6971H135.617C135.824 28.7771 136.271 29.5942 136.959 30.1482C137.647 30.6966 138.564 30.9764 139.699 30.9764C140.61 30.9764 141.326 30.8309 141.84 30.5455C142.355 30.2545 142.724 29.7956 142.948 29.1577H148.092C147.739 30.9876 146.822 32.4202 145.352 33.4555C143.881 34.4908 142.008 35.0056 139.732 35.0056L139.727 35ZM135.701 24.3394H143.194C143.026 23.4049 142.64 22.7109 142.036 22.2577C141.432 21.7988 140.605 21.5693 139.559 21.5693C138.514 21.5693 137.697 21.8044 137.043 22.2689C136.389 22.7333 135.942 23.4272 135.701 24.3394Z" fill="white"/>
                <path d="M152.196 34.6642V22.9124H149.68V17.8759H154.824V21.2335H155.998C156.428 20.0192 157.127 19.1238 158.095 18.5306C159.062 17.943 160.147 17.652 161.338 17.652H162.763V22.1289H161.114C159.733 22.1289 158.743 22.5095 158.134 23.2761C157.53 24.0428 157.228 25.0389 157.228 26.27V34.6642H152.196Z" fill="white"/>
                <path d="M166.51 34.6642V22.9124H163.994V17.8759H169.138V20.674H170.312C170.983 19.7058 171.81 18.9448 172.789 18.3907C173.767 17.8423 175.02 17.5681 176.552 17.5681C178.939 17.5681 180.768 18.2117 182.043 19.4988C183.317 20.7859 183.96 22.5095 183.96 24.6752V34.6642H178.816V25.6825C178.816 24.5241 178.514 23.6511 177.911 23.0523C177.307 22.4535 176.418 22.1569 175.243 22.1569C174.069 22.1569 173.18 22.4535 172.576 23.0523C171.972 23.6511 171.671 24.5241 171.671 25.6825V34.6642H166.526H166.51Z" fill="white"/>
                <path d="M195.361 35C193.516 35 191.911 34.6418 190.553 33.9199C189.194 33.2036 188.143 32.1852 187.41 30.8701C186.672 29.555 186.303 28.0049 186.303 26.2085C186.303 24.4122 186.661 22.8732 187.382 21.5805C188.098 20.2822 189.127 19.2861 190.458 18.5866C191.788 17.8871 193.36 17.5345 195.166 17.5345C196.972 17.5345 198.492 17.8759 199.778 18.5586C201.065 19.2414 202.049 20.2151 202.725 21.4854C203.407 22.7557 203.748 24.2723 203.748 26.0462V27.6971H191.252C191.458 28.7771 191.906 29.5942 192.594 30.1482C193.281 30.6966 194.198 30.9764 195.333 30.9764C196.245 30.9764 196.96 30.8309 197.475 30.5455C197.989 30.2545 198.358 29.7956 198.582 29.1577H203.726C203.374 30.9876 202.457 32.4202 200.986 33.4555C199.516 34.4908 197.643 35.0056 195.367 35.0056L195.361 35ZM191.335 24.3394H198.828C198.66 23.4049 198.274 22.7109 197.671 22.2577C197.067 21.7988 196.239 21.5693 195.194 21.5693C194.148 21.5693 193.332 21.8044 192.677 22.2689C192.023 22.7333 191.576 23.4272 191.335 24.3394Z" fill="white"/>
                <path d="M211.94 34.6642C210.637 34.6642 209.625 34.3341 208.909 33.6737C208.194 33.0134 207.83 32.0005 207.83 30.635V21.9051H205.034V17.8759H207.886V12.8394H212.918V17.8759H216.609V21.9051H212.974V30.635H217V34.6642H211.94Z" fill="white"/>
              </g>
              <path d="M56 36H37V18H56V36Z" fill="white"/>
              <path d="M56 71H37V53H56V71Z" fill="white"/>
              <path d="M18.4949 53H0V36H18.4949H37V53H18.4949Z" fill="white"/>
              <path d="M74 18H56V0H74V18Z" fill="white"/>
              <path d="M74 89H56V71H74V89Z" fill="white"/>
              <path d="M74 53H56V36H74V53Z" fill="white"/>
              <defs>
                <clipPath id="clip0_275_106">
                  <rect width="130" height="23" fill="white" transform="translate(87 12)"/>
                </clipPath>
              </defs>
            </svg>
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="absolute top-[39px]">
          <Link
            to="/domains"
            className="absolute w-[382px] h-[23px] left-[784px] top-0"
            style={{
              fontFamily: "'Funnel Display', sans-serif",
              fontStyle: 'normal',
              fontSize: '16px',
              fontWeight: 800,
              textAlign: 'center',
              whiteSpace: 'normal',
              color: '#000000'
            }}
          >
            Domain and IP
          </Link>
          <Link
            to="/dns"
            className="absolute w-[382px] h-[23px] left-[961px] top-0"
            style={{
              fontFamily: "'Funnel Display', sans-serif",
              fontStyle: 'normal',
              fontSize: '16px',
              fontWeight: 800,
              textAlign: 'center',
              whiteSpace: 'normal',
              color: '#000000'
            }}
          >
            DNS and Server
          </Link>
          <Link
            to="/hosting"
            className="absolute w-[382px] h-[23px] left-[1126px] top-0"
            style={{
              fontFamily: "'Funnel Display', sans-serif",
              fontStyle: 'normal',
              fontSize: '16px',
              fontWeight: 800,
              textAlign: 'center',
              whiteSpace: 'normal',
              color: '#000000'
            }}
          >
            Web Hosting
          </Link>
        </nav>

        {/* Main Title: "How the Internet works?" */}
        <h1 
          className="absolute w-[917px] h-[404px] left-[100px] top-[617px]"
          style={{
            fontFamily: "'Funnel Display', sans-serif",
            fontSize: '96px',
            fontWeight: 700,
            color: '#FFFFFF',
            lineHeight: '100px'
          }}
        >
          How<br />the Internet<br />works?
        </h1>

        {/* Phone Frames - 5 frames total */}
        {/* Frame 9 - Leftmost */}
        <div 
          className="absolute w-[275px] h-[432px] left-[41px] top-[180px] bg-black rounded-[20px] overflow-hidden"
          style={{
            border: '3px solid #000000',
            boxSizing: 'border-box'
          }}
        />

        {/* Frame 7 - Second from left */}
        <div 
          className="absolute w-[276px] h-[432px] left-[741px] top-[181px] bg-black rounded-[20px] overflow-hidden"
          style={{
            border: '3px solid #000000',
            boxSizing: 'border-box'
          }}
        />

        {/* Frame 11 - Center (main, with white border) */}
        <div 
          className="absolute w-[341px] h-[535px] left-[357px] top-[124px] bg-black rounded-[20px] overflow-hidden"
          style={{
            border: '5px solid #FFFFFF',
            boxSizing: 'border-box'
          }}
        />

        {/* Frame 8 - Fourth */}
        <div 
          className="absolute w-[277px] h-[432px] left-[1057px] top-[181px] bg-black rounded-[20px] overflow-hidden"
          style={{
            border: '3px solid #000000',
            boxSizing: 'border-box'
          }}
        />

        {/* Frame 7 - Rightmost */}
        <div 
          className="absolute w-[277px] h-[432px] left-[1372px] top-[181px] bg-black rounded-[20px] overflow-hidden"
          style={{
            border: '3px solid #000000',
            boxSizing: 'border-box'
          }}
        />

        {/* Rectangle 36: Black Section */}
        <div className="absolute w-[1440px] h-[742px] left-0 top-[703px] bg-black" />

        {/* Text Block 1 */}
        <p 
          className="absolute left-[809px] top-[878px] w-[528px] h-[100px]"
          style={{
            fontFamily: "'Funnel Sans', sans-serif",
            fontStyle: 'normal',
            fontSize: '28px',
            fontWeight: 400,
            whiteSpace: 'normal',
            color: '#FFFFFF'
          }}
        >
          The Internet is a global network of computers that communicate with each other using protocols.
        </p>

        {/* Text Block 2 */}
        <p 
          className="absolute left-[606px] top-[1042px] w-[728px] h-[123px]"
          style={{
            fontFamily: "'Funnel Sans', sans-serif",
            fontStyle: 'normal',
            fontSize: '28px',
            fontWeight: 400,
            whiteSpace: 'normal',
            color: '#FFFFFF'
          }}
        >
          Every device connected to the Internet can send and receive information. When you visit a website, your computer sends a request to a server, and the server sends back the webpage.
        </p>

        {/* Text Block 3 */}
        <p 
          className="absolute left-[809px] top-[1240px] w-[510px] h-[132px]"
          style={{
            fontFamily: "'Funnel Sans', sans-serif",
            fontStyle: 'normal',
            fontSize: '28px',
            fontWeight: 400,
            whiteSpace: 'normal',
            color: '#FFFFFF'
          }}
        >
          Data travels in small units called packets, which move through routers and networks to reach their destination.
        </p>

        {/* Green Arrow Icons (Vrstva_1) - SVG */}
        <div className="absolute w-[38px] h-[38px] left-[756px] top-[868px]">
          <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_208_1135)">
              <path d="M18.9947 0V18.9947H0V38H18.9947H38V18.9947V0H18.9947Z" fill="#A9FF47"/>
            </g>
            <defs>
              <clipPath id="clip0_208_1135">
                <rect width="38" height="38" fill="white"/>
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className="absolute w-[38px] h-[38px] left-[551px] top-[1032px]">
          <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_208_1137)">
              <path d="M18.9947 0V18.9947H0V38H18.9947H38V18.9947V0H18.9947Z" fill="#A9FF47"/>
            </g>
            <defs>
              <clipPath id="clip0_208_1137">
                <rect width="38" height="38" fill="white"/>
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className="absolute w-[38px] h-[38px] left-[756px] top-[1230px]">
          <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_208_1139)">
              <path d="M18.9947 0V18.9947H0V38H18.9947H38V18.9947V0H18.9947Z" fill="#A9FF47"/>
            </g>
            <defs>
              <clipPath id="clip0_208_1139">
                <rect width="38" height="38" fill="white"/>
              </clipPath>
            </defs>
          </svg>
        </div>

        {/* Computer Icons - Large SVG patterns */}
        <div className="absolute w-[315.36px] h-[293.52px] left-0 top-[1288px]">
          <svg width="316" height="294" viewBox="0 0 316 294" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M180.067 20.86L159.207 0.00012207L138.347 20.86L117.487 0.00012207L96.6276 20.86L117.487 41.7199L138.347 62.5796L159.207 41.7199L180.067 20.86Z" fill="black"/>
            <path d="M285.868 146.019H256.357H226.863H221.787L242.646 125.159L263.506 104.299L242.646 83.4395L221.787 62.5796L200.927 83.4395L221.787 104.299L200.927 125.159L180.067 104.299L159.207 83.4395L138.347 62.5796L117.487 83.4395L96.6276 104.299L75.7678 125.159L54.908 104.299L75.7678 83.4395L54.908 62.5796L34.0481 83.4395L13.1883 104.299L34.0481 125.159L54.908 146.019L75.7678 166.879L96.6276 187.739L117.487 208.599L138.347 187.739L117.487 166.879L96.6276 146.019L117.487 125.159L138.347 146.019L159.207 125.159L180.067 146.019H167.858H138.364V175.513V187.722L138.347 187.739L138.364 187.755V205.024V234.518V243.838H116.655H93.3306H70.0061V220.514H46.6653V197.173H23.3408V173.848V150.508V127.183H-6.10352e-05V150.508V173.848V197.173V220.514H23.3408V243.838H46.6653V267.163H70.0061H93.3306H108.869V293.523H138.364H167.858H197.369H226.863H256.357H285.868V264.029H315.362V234.518V205.024V175.513V146.019H285.868Z" fill="black"/>
          </svg>
        </div>

        <div className="absolute w-[315.36px] h-[293.52px] left-[103px] top-[2551px]">
          <svg width="316" height="294" viewBox="0 0 316 294" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M180.067 20.8599L159.207 0L138.347 20.8599L117.487 0L96.6276 20.8599L117.487 41.7198L138.347 62.5794L159.207 41.7198L180.067 20.8599Z" fill="black"/>
            <path d="M285.868 146.019H256.357H226.863H221.787L242.647 125.159L263.506 104.299L242.647 83.4395L221.787 62.5796L200.927 83.4395L221.787 104.299L200.927 125.159L180.067 104.299L159.207 83.4395L138.347 62.5796L117.488 83.4395L96.6277 104.299L75.7679 125.159L54.908 104.299L75.7679 83.4395L54.908 62.5796L34.0482 83.4395L13.1884 104.299L34.0482 125.159L54.908 146.019L75.7679 166.879L96.6277 187.739L117.488 208.599L138.347 187.739L117.488 166.879L96.6277 146.019L117.488 125.159L138.347 146.019L159.207 125.159L180.067 146.019H167.858H138.364V175.513V187.722L138.347 187.739L138.364 187.755V205.024V234.518V243.838H116.655H93.3306H70.0061V220.514H46.6653V197.173H23.3408V173.848V150.508V127.183H0V150.508V173.848V197.173V220.514H23.3408V243.838H46.6653V267.163H70.0061H93.3306H108.869V293.523H138.364H167.858H197.369H226.863H256.357H285.868V264.029H315.362V234.518V205.024V175.513V146.019H285.868Z" fill="black"/>
          </svg>
        </div>

        {/* Rectangle 27: Gradient Box */}
        <div 
          className="absolute left-[9.13%] right-[60.8%] top-[55.69%] bottom-[38.69%] rounded-[20px]"
          style={{
            boxSizing: 'border-box',
            background: 'linear-gradient(239.6deg, #A9FF47 28.79%, rgba(255, 255, 255, 0) 80.69%)',
            transform: 'rotate(-173.7deg)'
          }}
        />

        {/* Rectangle 25: Another Gradient Box */}
        <div 
          className="absolute left-[22.64%] right-[47.29%] top-[42.17%] bottom-[52.21%] rounded-[20px]"
          style={{
            boxSizing: 'border-box',
            background: 'linear-gradient(239.6deg, #A9FF47 28.79%, #FFFFFF 80.69%)',
            transform: 'rotate(-175.22deg)'
          }}
        >
          <svg width="450" height="288" viewBox="0 0 450 288" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
            <path d="M431.761 268.977C430.86 279.749 421.561 287.856 410.766 287.28L18.9372 266.381C7.3579 265.763 -1.27096 255.459 0.154088 243.951L28.1904 17.5433C29.5098 6.88792 39.0072 -0.82456 49.7066 0.07077L431.52 32.0212C442.527 32.9423 450.704 42.6121 449.782 53.6193L431.761 268.977Z" fill="url(#paint0_linear_208_1069)"/>
            <defs>
              <linearGradient id="paint0_linear_208_1069" x1="26.5656" y1="247.251" x2="484.16" y2="-118.299" gradientUnits="userSpaceOnUse">
                <stop offset="0.1875" stopColor="#A9FF47"/>
                <stop offset="0.629808" stopColor="white"/>
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Router Text */}
        <p 
          className="absolute w-[422px] h-[293px] left-[488px] top-[2145px]"
          style={{
            fontFamily: "'Funnel Sans', sans-serif",
            fontStyle: 'normal',
            fontSize: '32px',
            fontWeight: 400,
            whiteSpace: 'normal',
            color: '#000000'
          }}
        >
          → your home router
        </p>

        {/* Rectangle 13: Text Box with Gradient */}
        <div 
          className="absolute left-[39.58%] right-[25.42%] top-[33.9%] bottom-[59.55%] rounded-[20px]"
          style={{
            boxSizing: 'border-box',
            background: 'linear-gradient(239.6deg, #A9FF47 28.79%, #FFFFFF 80.69%)'
          }}
        >
          <svg width="416" height="403" viewBox="0 0 416 403" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
            <path d="M183.515 6.28167C190.82 -1.46786 202.916 -2.13373 211.028 4.76715L408.768 172.995C417.628 180.533 418.211 194.012 410.035 202.286L218.225 396.405C210.59 404.132 198.184 404.352 190.279 396.901L6.28147 223.457C-1.75612 215.881 -2.12986 203.223 5.4467 195.185L183.515 6.28167Z" fill="url(#paint0_linear_208_1169)"/>
            <defs>
              <linearGradient id="paint0_linear_208_1169" x1="395.045" y1="191.228" x2="-77.251" y2="73.0369" gradientUnits="userSpaceOnUse">
                <stop offset="0.1875" stopColor="#A9FF47"/>
                <stop offset="0.629808" stopColor="white"/>
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Text in Rectangle 13 */}
        <p 
          className="absolute left-[42.29%] right-[33.06%] top-[34.34%] bottom-[62.67%]"
          style={{
            fontFamily: "'Funnel Sans', sans-serif",
            fontStyle: 'normal',
            fontSize: '32px',
            fontWeight: 400,
            lineHeight: '40px',
            color: '#000000'
          }}
        >
          If you open your browser and type a website address, your request travels from your computer
        </p>

        {/* Rectangle 36: Radial Gradient Section */}
        <div 
          className="absolute left-0 right-0 top-[64.28%] bottom-[34.27%]"
          style={{
            background: 'radial-gradient(57.97% 314.41% at 81.72% 50.85%, #000000 29.32%, #000000 100%)'
          }}
        />

        {/* Server Text with SVG decoration */}
        <div className="absolute left-[903.97px] top-[2547.49px] w-[441.91px] h-[330.20px]">
          <svg width="442" height="331" viewBox="0 0 442 331" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M301.929 139.996L281.069 119.136L260.209 98.2764L239.349 119.136L260.209 139.996L239.349 160.856L218.489 139.996L197.629 119.136L176.77 139.996L155.91 160.856L135.05 139.996L155.91 119.136L135.05 98.2764L114.19 119.136L93.3303 139.996L114.19 160.856L93.3303 181.716L114.19 202.575L135.05 181.716L155.91 202.575L176.77 181.716L197.629 202.575L218.489 181.716L239.349 202.575L260.209 181.716L281.069 202.575L301.929 181.716L281.069 160.856L301.929 139.996Z" fill="black"/>
            <path d="M197.63 244.295L218.49 265.155L239.35 244.295L260.209 223.435L239.35 202.575L218.49 223.435L197.63 244.295Z" fill="black"/>
            <path d="M155.91 202.575L135.051 223.435L155.91 244.295L176.77 265.155L197.63 244.295L176.77 223.435L155.91 202.575Z" fill="black"/>
            <path d="M239.349 77.4168L218.489 56.5569L197.63 77.4168L176.77 56.5569L155.91 77.4168L176.77 98.2766L197.63 119.136L218.489 98.2766L239.349 77.4168Z" fill="black"/>
            <path d="M371.919 69.9897V93.3306H348.578H325.253H301.929V116.655V139.996H325.253H348.578H371.919V116.655H395.243V93.3306H418.584V69.9897H395.243H371.919Z" fill="#2F00FF"/>
            <path d="M418.584 0H395.243V23.3409H418.584V46.6652V69.9898H441.908V46.6652V23.3409V0H418.584Z" fill="#2F00FF"/>
            <path d="M69.9898 116.655V93.3307H46.6653H23.3245V69.9898V46.6652V23.3409H46.6653V0H23.3245H0V23.3409V46.6652V69.9898V93.3307V116.655H23.3245V139.996H46.6653H69.9898H93.3306V116.655H69.9898Z" fill="#2F00FF"/>
            <path d="M239.35 286.015L218.49 265.155L197.63 286.015L218.49 306.875V330.199H241.814V306.858H218.49L239.35 286.015Z" fill="black"/>
            <path d="M176.757 265.165L155.902 286.021L176.757 306.877L197.613 286.021L176.757 265.165Z" fill="black"/>
            <path d="M176.754 306.874H153.429V330.199H176.754V306.874Z" fill="black"/>
          </svg>
        </div>

        <p 
          className="absolute w-[552px] h-[107px] left-[838px] top-[2440px]"
          style={{
            fontFamily: "'Funnel Sans', sans-serif",
            fontStyle: 'normal',
            fontSize: '32px',
            fontWeight: 400,
            whiteSpace: 'normal',
            color: '#000000'
          }}
        >
          → the server that hosts the website
        </p>

        {/* Rectangle 26: Gradient Box with SVG */}
        <div 
          className="absolute left-[938.31px] top-[2242px] w-[299.78px] h-[313.89px] rounded-[20px]"
          style={{
            border: '4px solid #0000CB',
            boxSizing: 'border-box',
            background: 'linear-gradient(240.66deg, #A9FF47 18.75%, #FFFFFF 62.98%)',
            transform: 'rotate(-43.31deg)',
            transformOrigin: 'center center'
          }}
        >
          <svg width="416" height="403" viewBox="0 0 416 403" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
            <path d="M183.515 6.28167C190.82 -1.46786 202.916 -2.13373 211.028 4.76715L408.768 172.995C417.628 180.533 418.211 194.012 410.035 202.286L218.225 396.405C210.59 404.132 198.184 404.352 190.279 396.901L6.28147 223.457C-1.75612 215.881 -2.12986 203.223 5.4467 195.185L183.515 6.28167Z" fill="url(#paint0_linear_208_1169_2)"/>
            <defs>
              <linearGradient id="paint0_linear_208_1169_2" x1="395.045" y1="191.228" x2="-77.251" y2="73.0369" gradientUnits="userSpaceOnUse">
                <stop offset="0.1875" stopColor="#A9FF47"/>
                <stop offset="0.629808" stopColor="white"/>
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Return Text */}
        <p 
          className="absolute w-[420px] h-[294px] left-[418px] top-[2886px]"
          style={{
            fontFamily: "'Funnel Sans', sans-serif",
            fontStyle: 'normal',
            fontSize: '32px',
            fontWeight: 400,
            whiteSpace: 'normal',
            color: '#000000'
          }}
        >
          → back to your computer
        </p>

        {/* Large decorative SVG pattern */}
        <div className="absolute left-[62px] top-[1198px] w-[463.91px] h-[1055.38px]">
          <svg width="464" height="1056" viewBox="0 0 464 1056" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M240.495 844.315L219.635 823.455L198.775 844.315L177.916 823.455L157.056 844.315L177.916 865.175L198.775 886.035L219.635 865.175L240.495 844.315Z" fill="black"/>
            <path d="M370.583 904.429H347.242H323.918V927.738L303.074 906.894L282.215 886.034L261.355 906.894L282.215 927.754L261.355 948.614L240.495 927.754L219.635 906.894L198.775 886.034L177.915 906.894L157.056 927.754L136.196 948.614L115.336 927.754L136.196 906.894L115.336 886.034L94.4761 906.894L73.6653 927.705V904.511H50.3408V881.17V857.846V834.505V811.18V787.84H27V811.18V834.505V857.846V881.17V904.511V927.836H50.3408H73.6653V927.803L94.4761 948.614L115.336 969.474L136.196 990.333L157.056 1011.19L177.915 1032.05L198.775 1011.19L177.915 990.333L157.056 969.474L177.915 948.614L198.775 969.474L219.635 948.614L240.495 969.474L219.635 990.333L198.775 1011.19L219.635 1032.05V1055.38H242.96V1032.05H219.635L240.495 1011.19L261.355 990.333L282.215 969.474L303.074 948.614L323.934 927.77H347.242H370.583H393.908H417.248V904.429H393.908H370.583Z" fill="black"/>
            <path d="M440.573 881.105H417.249V904.429H440.573V881.105Z" fill="black"/>
            <path d="M177.915 1032.05H154.591V1055.38H177.915V1032.05Z" fill="black"/>
            <path d="M213.495 56.4751L192.635 35.6152L171.775 56.4751L150.915 35.6152L130.056 56.4751L150.915 77.3349L171.775 98.1948L192.635 77.3349L213.495 56.4751Z" fill="white"/>
            <path d="M343.583 116.59H320.242H296.918V139.898L276.074 119.054L255.215 98.1947L234.355 119.054L255.215 139.914L234.355 160.774L213.495 139.914L192.635 119.054L171.775 98.1947L150.915 119.054L130.056 139.914L109.196 160.774L88.336 139.914L109.196 119.054L88.336 98.1947L67.4761 119.054L46.6653 139.865V116.671H23.3408V93.3306V70.0061V46.6653V23.3408V0H0V23.3408V46.6653V70.0061V93.3306V116.671V139.996H23.3408H46.6653V139.963L67.4761 160.774L88.336 181.634L109.196 202.494L130.056 223.354L150.915 244.213L171.775 223.354L150.915 202.494L130.056 181.634L150.915 160.774L171.775 181.634L192.635 160.774L213.495 181.634L192.635 202.494L171.775 223.354L192.635 244.213V267.538H215.96V244.213H192.635L213.495 223.354L234.355 202.494L255.215 181.634L276.074 160.774L296.934 139.931H320.242H343.583H366.908H390.248V116.59H366.908H343.583Z" fill="white"/>
            <path d="M413.573 93.2656H390.249V116.59H413.573V93.2656Z" fill="white"/>
            <path d="M150.915 244.214H127.591V267.538H150.915V244.214Z" fill="white"/>
            <path d="M375.398 739.771V769.265H345.904H316.41V739.771H286.899V769.265V798.775V828.27H316.41V857.764H345.904H375.398H404.909H434.403H440.573V881.105H463.914V857.764V828.27V798.775H434.403V769.265H404.909V739.771H375.398Z" fill="#2F00FF"/>
            <path d="M345.904 710.26H316.41V739.755H345.904V710.26Z" fill="#2F00FF"/>
            <path d="M434.403 710.26H404.909V739.755H434.403V710.26Z" fill="#2F00FF"/>
            <path d="M463.898 680.766H434.403V710.26H463.898V680.766Z" fill="#2F00FF"/>
            <path d="M375.398 680.766H345.904V710.26H375.398V680.766Z" fill="#2F00FF"/>
          </svg>
        </div>

        {/* Additional gradient boxes with SVG */}
        <div 
          className="absolute left-[570px] top-[1619px] w-[504px] h-[313px] rounded-[20px]"
          style={{
            border: '4px solid #0000CB',
            boxSizing: 'border-box',
            background: 'linear-gradient(240.66deg, #A9FF47 18.75%, #FFFFFF 62.98%)'
          }}
        >
          <svg width="504" height="313" viewBox="0 0 504 313" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
            <path d="M0 34.0086C0 23.1983 8.59005 14.3445 19.3954 14.0177L482.56 0.00927883C494.151 -0.341274 503.609 9.20669 503.149 20.7933L492.34 293.154C491.914 303.883 483.093 312.361 472.355 312.361H20C8.95431 312.361 0 303.407 0 292.361V34.0086Z" fill="url(#paint0_linear_208_1148)"/>
            <defs>
              <linearGradient id="paint0_linear_208_1148" x1="472.056" y1="23.071" x2="-23.7728" y2="491.416" gradientUnits="userSpaceOnUse">
                <stop offset="0.1875" stopColor="#A9FF47"/>
                <stop offset="0.629808" stopColor="white"/>
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div 
          className="absolute left-[561.90px] top-[2974.07px] w-[433.04px] h-[268.60px] rounded-[20px]"
          style={{
            border: '4px solid #0000CB',
            boxSizing: 'border-box',
            background: 'linear-gradient(240.66deg, #A9FF47 18.75%, #FFFFFF 62.98%)',
            transform: 'rotate(173.7deg)',
            transformOrigin: 'center center'
          }}
        >
          <svg width="455" height="297" viewBox="0 0 455 297" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
            <path d="M431.02 279.047C429.834 289.792 420.324 297.65 409.548 296.789L18.4098 265.525C6.85083 264.601 -1.50226 254.072 0.2269 242.606L34.2464 17.0193C35.8474 6.40257 45.5456 -1.05581 56.2175 0.122413L437.051 42.1682C448.03 43.3803 455.948 53.2632 454.736 64.2421L431.02 279.047Z" fill="url(#paint0_linear_208_1124)"/>
            <defs>
              <linearGradient id="paint0_linear_208_1124" x1="26.5418" y1="246.604" x2="493.652" y2="-106.706" gradientUnits="userSpaceOnUse">
                <stop offset="0.1875" stopColor="#A9FF47"/>
                <stop offset="0.629808" stopColor="white" stopOpacity="0"/>
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Decorative elements - small squares and patterns */}
        <div className="absolute w-[29.06px] h-[29.06px] left-[447.97px] top-[1445.08px] bg-black" style={{ transform: 'rotate(180deg)', transformOrigin: 'center center' }} />
        <div className="absolute w-[29.06px] h-[29.08px] left-[366.93px] top-[1445.08px] bg-black" style={{ transform: 'rotate(180deg)', transformOrigin: 'center center' }} />
        <div className="absolute w-[103.94px] h-[77.98px] left-[1007.94px] top-[1520.98px]">
          <svg width="104" height="78" viewBox="0 0 104 78" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: 'rotate(180deg)', transformOrigin: 'center center' }}>
            <path d="M9.90166e-06 51.9834L25.9853 77.9751L51.9706 51.9834L77.956 77.9751L103.941 51.9834L77.956 25.9917L51.9706 1.83448e-05L25.9853 25.9917L9.90166e-06 51.9834Z" fill="black"/>
          </svg>
        </div>
        <div className="absolute w-[29.06px] h-[29.06px] left-[1161.03px] top-[1838.92px] bg-black" />
        <div className="absolute w-[29.06px] h-[29.08px] left-[1242.07px] top-[1838.92px] bg-black" />
        <div className="absolute w-[103.94px] h-[77.98px] left-[1164.12px] top-[1579px] bg-black">
          <svg width="104" height="78" viewBox="0 0 104 78" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M103.941 25.9917L77.956 0L51.9706 25.9917L25.9853 0L0 25.9917L25.9853 51.9834L51.9706 77.9751L77.956 51.9834L103.941 25.9917Z" fill="black"/>
          </svg>
        </div>
        <div className="absolute w-[457px] h-[216.90px] left-[915px] top-[1622.01px] bg-black">
          <svg width="457" height="217" viewBox="0 0 457 217" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M431.015 60.9524L405.029 34.9607L379.044 60.9524L405.029 86.9441L379.044 112.936L353.059 86.9441L327.073 60.9524L301.088 34.9607L275.103 60.9524L249.117 86.9441L223.132 112.936L197.147 86.9441L223.132 60.9524L197.147 34.9607L174.394 57.7186V29.083V0H145.319H116.263H87.187H58.1315H29.0556H0V29.083H29.0556H58.1315H87.187H116.263H145.319V58.1457H116.263H87.187H58.1315H29.0556H0V87.2288H29.0556H58.1315H87.187H116.263V116.291H145.319H174.394V116.169L197.147 138.927L223.132 164.919L249.117 190.911L275.103 216.903L301.088 190.911L275.103 164.919L249.117 138.927L275.103 112.936L301.088 138.927L327.073 112.936L353.059 138.927L327.073 164.919L301.088 190.911L327.073 216.903L353.059 190.911L379.044 164.919L405.029 138.927L431.015 112.936L457 86.9441L431.015 60.9524Z" fill="black"/>
          </svg>
        </div>

        {/* Footer gradient section */}
        <div 
          className="absolute left-0 top-[3070px] w-[1440px] h-[69.26px]"
          style={{
            background: 'radial-gradient(circle, #000000 29.32%, #000000 100%)'
          }}
        />

        {/* Footer white squares */}
        <div className="absolute w-[6.92px] h-[6.48px] left-[726.77px] top-[3095.02px] bg-white" />
        <div className="absolute w-[6.92px] h-[6.48px] left-[726.77px] top-[3107.98px] bg-white" />
        <div className="absolute w-[6.92px] h-[6.48px] left-[726.77px] top-[3120.95px] bg-white" />
        <div className="absolute w-[13.85px] h-[6.49px] left-[706px] top-[3107.98px] bg-white" />
        <div className="absolute w-[6.92px] h-[6.48px] left-[719.85px] top-[3101.50px] bg-white" />
        <div className="absolute w-[6.92px] h-[6.48px] left-[719.85px] top-[3114.46px] bg-white" />
        <div className="absolute w-[6.92px] h-[6.64px] left-[781.77px] top-[1613.64px] bg-white" />

        {/* Rectangle 44: Footer Section */}
        <div className="absolute w-[1610px] h-[1727px] left-0 top-[3139px] bg-[#1E1E1E]" />

        {/* Additional text element */}
        <p 
          className="absolute w-[355px] h-[143px] left-[609px] top-[1640px]"
          style={{
            fontFamily: "'Funnel Sans', sans-serif",
            fontStyle: 'normal',
            fontSize: '32px',
            fontWeight: 400,
            whiteSpace: 'normal',
            color: '#000000'
          }}
        >
          → back to your computer
        </p>
      </div>
    </main>
  );
}

export default React.memo(HomePage);
