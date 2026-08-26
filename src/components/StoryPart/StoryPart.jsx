import { useCallback, useEffect, useRef, useState } from "react";
import "./StoryPart.module.css";

/**
 * StoryPart – Eine full-viewport Komponente mit Bild und Text
 *
 * Features:
 * - Nimmt mindestens die volle Viewport-Höhe ein
 * - Bild und Text nebeneinander mit Text-Umfluss
 * - Bei breiten Bildern: Übergangseffekt wo Text das Bild überdeckt
 * - Klick auf Bild: Fullscreen-Overlay mit Animation
 */
export default function StoryPart({
  imageSrc,
  alt = "",
  text,
  imagePosition = "left", // "left" | "right"
  wideImage = false,
  imageWidth = 400,
  imageRadius = 16,
  children,
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isInViewport, setIsInViewport] = useState(false);
  const [fadeProgress, setFadeProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef(null);

  // Mobile-Erkennung
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile, { passive: true });
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Intersection Observer für Viewport-Erkennung
  useEffect(() => {
    if (!wideImage || !containerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInViewport(entry.isIntersecting);
      },
      { threshold: Array.from({ length: 101 }, (_, i) => i / 100) },
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [wideImage]);

  // Scroll-basierte Fade-Logik für breite Bilder
  useEffect(() => {
    if (!wideImage || !isInViewport || !containerRef.current) return;

    const handleScroll = () => {
      const rect = containerRef.current.getBoundingClientRect();
      const viewportCenter = window.innerHeight / 2;
      const imageCenter = rect.top + rect.height / 4; // Bild ist oben
      const fadeZone = window.innerHeight * 0.5;

      // Berechne wie weit der Text in den Bildbereich scrollt
      let progress = 0;
      if (imagePosition === "left") {
        progress = Math.max(
          0,
          Math.min(1, (viewportCenter - imageCenter) / fadeZone),
        );
      } else {
        progress = Math.max(
          0,
          Math.min(1, (imageCenter - viewportCenter) / fadeZone),
        );
      }
      setFadeProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [wideImage, isInViewport, imagePosition]);

  const handleImageClick = useCallback(() => {
    setIsExpanded(true);
  }, []);

  const handleClose = useCallback(() => {
    setIsExpanded(false);
  }, []);

  // Schließen mit Escape-Taste
  useEffect(() => {
    if (!isExpanded) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsExpanded(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isExpanded]);

  // Schließen bei Klick außerhalb des Bildes
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      setIsExpanded(false);
    }
  };

  return (
    <article
      ref={containerRef}
      className={`story-part story-part--${imagePosition} ${wideImage ? "story-part--wide" : ""} ${isExpanded ? "story-part--expanded" : ""} ${isMobile ? "story-part--mobile-column" : ""}`}
      style={wideImage ? { "--image-width": `${imageWidth}px` } : undefined}
    >
      {/* Bild */}
      {/* biome-ignore lint/a11y/useSemanticElements: Div needed for image wrapper with custom interaction */}
      <div
        className={`story-part__image-wrapper ${imageLoaded ? "is-loaded" : ""} ${wideImage && isInViewport ? "has-transition" : ""} ${wideImage && fadeProgress > 0.3 ? "is-fading" : ""}`}
        style={
          wideImage && isInViewport
            ? {
                opacity: 1 - fadeProgress * 0.6,
                filter: `brightness(${1 - fadeProgress * 0.4})`,
              }
            : {}
        }
        onClick={handleImageClick}
        role="button"
        tabIndex={0}
        aria-label="Bild vergrössern"
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            handleImageClick();
          }
        }}
      >
        <img
          className="story-part__image"
          src={imageSrc}
          alt={alt}
          style={{ borderRadius: `${imageRadius}px` }}
          onLoad={() => setImageLoaded(true)}
        />
        {!imageLoaded && <div className="story-part__image-skeleton" />}
      </div>

      {/* Text */}
      <div className="story-part__text">{children || text}</div>

      {/* Fullscreen Overlay */}
      {isExpanded && (
        <div
          className="story-part__overlay"
          onClick={handleOverlayClick}
          role="dialog"
          aria-modal="true"
          aria-label="Vergrössertes Bild"
        >
          <div className="story-part__overlay-content">
            <img
              className="story-part__overlay-image"
              src={imageSrc}
              alt={alt}
            />
            <button
              type="button"
              className="story-part__overlay-close"
              onClick={handleClose}
              aria-label="Schliessen"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </article>
  );
}
