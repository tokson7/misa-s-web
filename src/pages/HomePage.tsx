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
  // Video IDs for all 13 cards
  const videoIds = [
    "ma67yOdMQfs",
    "EzGPmg4fFL8",
    "X3GYAmDI5Gc",
    "iywaBOMvYLI",
    "DJ940rgNMfA",
    "C7BdSZ8umw4",
    "Sfzo4xm5eX8",
    "bncKttwlYB0",
    "N7ZmPYaXoic",
    "0Qx_npsD_tk",
    "eOrzH0kmegw",
    "DlKsYHC8QAw",
    "brWYAALZes4",
  ];

  // Optimized YouTube embed URLs with infinite loop
  const videoUrls = videoIds.map(
    (id) => `https://www.youtube.com/embed/${id}?autoplay=1&mute=1&loop=1&playlist=${id}&enablejsapi=1`
  );
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

  // VideoCard component - optimized for instant loading
  const VideoCard: React.FC<{ index: number; videoUrl: string; videoId: string }> = ({ index, videoUrl, videoId }) => {
    const iframeRef = useRef<HTMLIFrameElement>(null);
    const isPriorityVideo = index < 5; // First 5 videos load immediately
    const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

    // Netflix-style audio control handlers - ONLY control audio, never touch play/pause
    const handleMouseEnter = () => {
      const iframe = iframeRef.current;
      if (iframe && iframe.contentWindow && iframe.src !== 'about:blank' && iframe.src.includes('youtube.com')) {
        try {
          setTimeout(() => {
            if (iframe.contentWindow) {
              iframe.contentWindow.postMessage('{"event":"command","func":"unMute","args":""}', '*');
            }
          }, 100);
        } catch (error) {
          console.debug('Video control command failed:', error);
        }
      }
    };

    const handleMouseLeave = () => {
      const iframe = iframeRef.current;
      if (iframe && iframe.contentWindow && iframe.src !== 'about:blank' && iframe.src.includes('youtube.com')) {
        try {
          iframe.contentWindow.postMessage('{"event":"command","func":"mute","args":""}', '*');
        } catch (error) {
          console.debug('Video control command failed:', error);
        }
      }
    };

    return (
      <div
        className="phone-frame video-card-hover"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
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
        }}
      >
        {/* Thumbnail placeholder - shows while video loads */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: `url(${thumbnailUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            zIndex: 1,
            opacity: 1,
            transition: "opacity 0.3s ease",
            WebkitBackfaceVisibility: "hidden",
            backfaceVisibility: "hidden",
          }}
          className="video-thumbnail"
        />
        <iframe
          ref={iframeRef}
          data-src={videoUrl}
          src={isPriorityVideo ? videoUrl : "about:blank"}
          loading={isPriorityVideo ? "eager" : "lazy"}
          allow="autoplay; encrypted-media"
          allowFullScreen
          style={{
            width: "100%",
            height: "100%",
            border: "none",
            position: "absolute",
            top: 0,
            left: 0,
            backgroundColor: "#000000",
            zIndex: 2,
            // Safari-specific fixes
            WebkitTransform: "translateZ(0)",
            transform: "translateZ(0)",
            WebkitBackfaceVisibility: "hidden",
            backfaceVisibility: "hidden",
          }}
          title={`Video ${index + 1}`}
          data-lazy-loaded={isPriorityVideo ? "true" : "false"}
          onLoad={() => {
            // Hide thumbnail when video loads
            const container = iframeRef.current?.parentElement;
            const thumbnail = container?.querySelector('.video-thumbnail');
            if (thumbnail) {
              (thumbnail as HTMLElement).style.opacity = "0";
            }
          }}
        />
      </div>
    );
  };

  // Generate card data - use VideoCard component
  const generateCard = (index: number) => {
    const videoIndex = index % videoUrls.length;
    const videoUrl = videoUrls[videoIndex];
    const videoId = videoIds[videoIndex];
    return <VideoCard key={index} index={index} videoUrl={videoUrl} videoId={videoId} />;
  };

  // Create 3 sets of cards (39 total) to eliminate blank space when scrolling right
  const baseCards = Array.from({ length: CARDS_PER_SET }, (_, index) =>
    generateCard(index)
  );
  const allCards = [...baseCards, ...baseCards, ...baseCards];

  // Lazy load videos with Intersection Observer (only for videos outside viewport)
  useEffect(() => {
    const lazyVideos = document.querySelectorAll('iframe[data-src][data-lazy-loaded="false"]');
    
    if (lazyVideos.length === 0) return;

    const videoObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const iframe = entry.target as HTMLIFrameElement;
            const dataSrc = iframe.getAttribute('data-src');
            if (dataSrc) {
              iframe.src = dataSrc;
              iframe.setAttribute('data-lazy-loaded', 'true');
              
              // Hide thumbnail when video loads
              const container = iframe.parentElement;
              const thumbnail = container?.querySelector('.video-thumbnail');
              if (thumbnail) {
                (thumbnail as HTMLElement).style.opacity = "0";
              }
              
              // Ensure video starts muted when loaded
              setTimeout(() => {
                if (iframe.contentWindow) {
                  iframe.contentWindow.postMessage('{"event":"command","func":"mute","args":""}', '*');
                }
              }, 1000); // Reduced delay for faster initialization
              
              videoObserver.unobserve(iframe);
            }
          }
        });
      },
      { rootMargin: '200px' }
    );

    lazyVideos.forEach((video) => videoObserver.observe(video));

    return () => {
      lazyVideos.forEach((video) => videoObserver.unobserve(video));
    };
  }, [allCards]);

  // Ensure preloaded videos (first 5) start muted and hide thumbnails
  useEffect(() => {
    const preloadedVideos = document.querySelectorAll('iframe[data-lazy-loaded="true"]');
    preloadedVideos.forEach((iframe) => {
      const iframeElement = iframe as HTMLIFrameElement;
      if (iframeElement.contentWindow && iframeElement.src !== 'about:blank') {
        // Hide thumbnail when video loads
        const container = iframeElement.parentElement;
        const thumbnail = container?.querySelector('.video-thumbnail');
        if (thumbnail) {
          (thumbnail as HTMLElement).style.opacity = "0";
        }
        
        // Wait for iframe to be ready, then mute
        setTimeout(() => {
          if (iframeElement.contentWindow) {
            iframeElement.contentWindow.postMessage('{"event":"command","func":"mute","args":""}', '*');
          }
        }, 1000); // Reduced delay for faster initialization
      }
    });
  }, []);

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
          zIndex: 300,
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
          zIndex: 100,
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

      {/* Desktop 5 SVG - Pixel Perfect */}
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
