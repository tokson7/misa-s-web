import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import desktop5Complete from "../assets/desktop5/desktop-5-complete.svg";
import headingSvg from "../assets/desktop5/How the Internet works_.svg";
import Navbar from "../components/Navbar";

/**
 * HomePage - Desktop 5
 * Complete rebuild from SVG file only
 * Pixel-perfect match to desktop-5-complete.svg
 * Horizontal video carousel (manual scroll, duplicated cards)
 */
function HomePage(): React.ReactElement {
  // Local video file paths for all 13 cards
  const videoFiles = [
    "video1.mp4",
    "video2.mp4",
    "video3.mp4",
    "video4.mp4",
    "video5.mp4",
    "video6.mp4",
    "video7.mp4",
    "video8.mp4",
    "video9.mp4",
    "video10.mp4",
    "video11.mp4",
    "video12.mp4",
    "video13.mp4",
  ];
  // Card dimensions and spacing - slightly smaller for better hover visibility
  const CARD_WIDTH = 250; // slightly reduced from 276px
  const CARD_HEIGHT = 380; // slightly reduced from 432px
  const CARD_GAP = 40;
  const CARDS_PER_SET = 13;

  // Scroll container ref for JS-controlled infinite loop
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const isAdjustingRef = useRef(false);

  // JS-based infinite loop that only intervenes to reset position (no auto-scroll)
  // Uses exact horizontal offset from Desktop 5 SVG
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const PADDING_LEFT = 741 + 30; // exact x position from SVG (741px) + extra padding for hover (30px)
    const CARD_SET_WIDTH =
      CARDS_PER_SET * (CARD_WIDTH + CARD_GAP) - CARD_GAP;

    // We render 3 sets side by side:
    // Set 1: [0, W), Set 2: [W, 2W), Set 3: [2W, 3W) in "relative" coordinates.
    // We always keep the user inside Set 2 by shifting +/- W when crossing boundaries.
    const set2Start = PADDING_LEFT + CARD_SET_WIDTH; // absolute scrollLeft where Set 2 starts

    // Start user at the middle set for maximum scroll room in both directions
    container.scrollLeft = set2Start;

    const handleScroll = () => {
      if (!container || isAdjustingRef.current) return;

      const scrollLeft = container.scrollLeft;
      const relative = scrollLeft - PADDING_LEFT; // position within the 3-set strip

      // If user scrolls back into (virtual) Set 0, move them forward one full set
      if (relative < 0) {
        isAdjustingRef.current = true;
        container.scrollLeft = scrollLeft + CARD_SET_WIDTH;
        requestAnimationFrame(() => {
          isAdjustingRef.current = false;
        });
      }
      // If user scrolls forward into Set 3 beyond its end, move them back one full set
      else if (relative >= CARD_SET_WIDTH * 2) {
        isAdjustingRef.current = true;
        container.scrollLeft = scrollLeft - CARD_SET_WIDTH;
        requestAnimationFrame(() => {
          isAdjustingRef.current = false;
        });
      }
    };

    container.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, [CARD_WIDTH, CARD_GAP, CARDS_PER_SET]);

  // VideoCard component - Native HTML5 video, zero UI, silent autoplay
  const VideoCard: React.FC<{ videoFile: string }> = ({ videoFile }) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    // Hardcoded video path - static public asset
    const videoPath = `/hd_videos/${videoFile}`;

    // Click handler - toggle play/pause silently, zero visual feedback
    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
      e.preventDefault();
      e.stopPropagation();
      const video = videoRef.current;
      if (video) {
        if (video.paused) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      }
    };

    return (
      <div
        className="phone-frame"
        onClick={handleClick}
        style={{
          position: "relative",
          flexShrink: 0,
          width: `${CARD_WIDTH}px`,
          height: `${CARD_HEIGHT}px`,
          borderRadius: "20px",
          border: "3px solid #000000",
          backgroundColor: "#000000",
          overflow: "hidden",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          scrollSnapAlign: "center",
          zIndex: 1001,
          WebkitTransform: "translateZ(0)",
          transform: "translateZ(0)",
          willChange: "transform",
        }}
      >
        <video
          ref={videoRef}
          src={videoPath}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            position: "absolute",
            top: 0,
            left: 0,
            backgroundColor: "#000000",
            zIndex: 1002,
            opacity: 1,
            visibility: "visible",
            display: "block",
            WebkitTransform: "translateZ(0)",
            transform: "translateZ(0)",
            willChange: "transform",
            WebkitBackfaceVisibility: "hidden",
            backfaceVisibility: "hidden",
          }}
        />
      </div>
    );
  };

  // Generate card data - use VideoCard component
  const generateCard = (index: number) => {
    const videoIndex = index % videoFiles.length;
    const videoFile = videoFiles[videoIndex];
    return <VideoCard key={index} videoFile={videoFile} />;
  };

  // Create 3 sets of cards (39 total) to eliminate blank space when scrolling right
  const baseCards = Array.from({ length: CARDS_PER_SET }, (_, index) =>
    generateCard(index)
  );
  const allCards = [...baseCards, ...baseCards, ...baseCards];


  return (
    <main
      style={{
        width: "100%",
        height: "100%",
        margin: 0,
        padding: 0,
        overflowX: "hidden",
        overflowY: "auto",
        position: "relative",
        backgroundColor: "#FFFFFF",
      }}
    >
      {/* Desktop 5 SVG - Background layer only, z-index: 0 */}
      <div
        style={{
          width: "100%",
          height: "auto",
          position: "relative",
          margin: 0,
          padding: 0,
          overflow: "hidden",
          backgroundColor: "#FFFFFF",
          display: "block",
          zIndex: 0,
        }}
      >
        <img
          src={desktop5Complete}
          alt="How the Internet Works"
          style={{
            display: "block",
            width: "100%",
            maxWidth: "100%",
            height: "auto",
            position: "relative",
            top: 0,
            left: 0,
            objectFit: "contain",
            objectPosition: "top left",
            pointerEvents: "none",
            margin: 0,
            padding: 0,
            imageRendering: "crisp-edges",
            zIndex: 0,
          }}
        />
      </div>

      {/* Clean Navbar - SINGLE INSTANCE ONLY */}
      <Navbar />

      {/* Video Cards Section - Horizontal scrolling - EXACT Desktop 5 position (slightly lifted toward center) */}
      <section
        style={{
          position: "absolute",
          top: "160px", // Moved slightly up toward vertical center
          left: "0",
          width: "100%",
          height: "512px", // Extra vertical space so hovered cards don't clip
          zIndex: 1000,
          backgroundColor: "transparent",
        }}
      >
        <div
          ref={scrollContainerRef}
          className="hide-scrollbar"
          style={{
            width: "100%",
            height: "100%",
            paddingTop: "40px", // Generous top padding for hover scale (1.15 * 380 = 437px, need ~30px)
            paddingBottom: "40px", // Generous bottom padding for hover scale
            overflowX: "auto",
            overflowY: "visible", // Allow cards to expand vertically
          }}
        >
          <div
            className="phone-frames"
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "nowrap",
              gap: `${CARD_GAP}px`,
              paddingLeft: "calc(741px + 30px)", // EXACT x position + extra padding for hover (1.15 * 250 = 287.5px, need ~19px each side)
              paddingRight: "calc(100px + 30px)", // Extra padding on right for hover
              width: "max-content",
              height: "100%",
              alignItems: "center",
            }}
          >
            {allCards}
          </div>
        </div>
      </section>

      {/* Heading - exact SVG from Figma / Desktop - 5.svg (blue "the Internet works?") */}
      {/* EXACT POSITIONING CALCULATION:
          - Desktop - 5.svg: viewBox="0 0 1440 4776", black band at y=703
          - Blue text SVG: viewBox="0 0 547 266", blue text starts at y=164.8 within SVG
          - Blue text should appear at y=850 in Desktop - 5.svg (in black band)
          - SVG container top = 850 - 164.8 = 685.2px ≈ 685px
          - Left position: x=100px (from Desktop - 5.svg layout)
      */}
      <div
        style={{
          position: "absolute",
          top: "685px", // Calculated: 850 (target y) - 164.8 (text offset in SVG) = 685.2px
          left: "100px", // Exact left position from Desktop - 5.svg
          margin: 0,
          padding: 0,
          zIndex: 500,
          width: "547px",
          height: "266px",
        }}
      >
        <img
          src={headingSvg}
          alt="How the Internet works?"
          style={{
            display: "block",
            width: "100%",
            height: "100%",
            margin: 0,
            padding: 0,
          }}
        />
      </div>

      {/* Logo Link - Clickable area */}
      <Link
        to="/"
        style={{
          position: "absolute",
          top: "0px",
          left: "46px",
          width: "217px",
          height: "54px",
          opacity: 0,
          zIndex: 10001,
          cursor: "pointer",
          margin: 0,
          padding: 0,
        }}
        aria-label="Home"
      />
    </main>
  );
}

export default HomePage;
