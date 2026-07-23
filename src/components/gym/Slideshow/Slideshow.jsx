import { Deck, Fragment, Slide, Stack } from "@revealjs/react";
import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import "reveal.js/reveal.css";
import style from "./Slideshow.module.css";

// Injected once — overrides reveal.css's .reveal-viewport { background: #fff }
// by appending a <style> tag after all other stylesheets (wins via source order).
const GRUVBOX_OVERRIDE = `
.reveal-viewport { background-color: #1d2021 !important; color: #ebdbb2; }
.reveal .backgrounds .slide-background { background: #1d2021 !important; }
`;

function useRevealOverride() {
  const injected = useRef(false);
  useEffect(() => {
    if (injected.current) return;
    injected.current = true;
    const el = document.createElement("style");
    el.setAttribute("data-slideshow-override", "");
    el.textContent = GRUVBOX_OVERRIDE;
    document.head.appendChild(el);
    return () => {
      el.remove();
      injected.current = false;
    };
  }, []);
}

/**
 * Slideshow — wraps @revealjs/react with a Gruvbox dark theme.
 *
 * Props:
 *   title    {string}  — shown in the header bar above the deck
 *   children          — <Slide> / <Stack> elements
 *
 * Fullscreen: renders the deck via a React portal directly into <body>,
 * completely outside the app layout — no CSS leakage from header/footer/grid.
 */
export default function Slideshow({ title, children }) {
  useRevealOverride();
  const [isFullscreen, setIsFullscreen] = useState(false);
  const deckRef = useRef(null);
  const containerRef = useRef(null);

  const openFullscreen = useCallback(() => setIsFullscreen(true), []);
  const closeFullscreen = useCallback(() => setIsFullscreen(false), []);

  // Close on Escape
  useEffect(() => {
    if (!isFullscreen) return;
    function onKey(e) {
      if (e.key === "Escape") closeFullscreen();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isFullscreen, closeFullscreen]);

  // Prevent body scroll while fullscreen
  useEffect(() => {
    document.body.style.overflow = isFullscreen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isFullscreen]);

  // When dynamic slide content changes size, tell Reveal to re-layout
  const handleReady = useCallback((reveal) => {
    deckRef.current = reveal;

    // Watch the slides container for size changes caused by dynamic content
    const slidesEl = reveal.getSlidesElement?.() ?? reveal.getRevealElement();
    if (!slidesEl) return;

    const ro = new ResizeObserver(() => {
      if (reveal.isReady()) {
        reveal.layout();
        reveal.sync();
      }
    });
    ro.observe(slidesEl);

    // Also watch individual slide sections so interactive components trigger sync
    const sections = slidesEl.querySelectorAll("section");
    sections.forEach((s) => ro.observe(s));

    // Store cleanup on the reveal instance for unmount
    reveal.__resizeObserver = ro;
  }, []);

  // Cleanup ResizeObserver on unmount
  useEffect(() => {
    return () => {
      deckRef.current?.__resizeObserver?.disconnect();
    };
  }, []);

  const deckConfig = {
    hash: false,
    controls: true,
    controlsTutorial: false,
    progress: true,
    slideNumber: "c/t",
    transition: "fade",
    transitionSpeed: "slow",
    center: true,
    // Larger virtual canvas — less aggressive downscaling for tall slides
    width: 1200,
    height: 900,
    margin: 0.04,
    minScale: 0.1,
    maxScale: 2.0,
    autoAnimate: true,
    autoAnimateEasing: "ease",
    autoAnimateDuration: 0.6,
  };

  return (
    <>
      {/* ── Embedded preview ─────────────────────────────────── */}
      <div className={style.wrapper}>
        <div className={style.header}>
          <span className={style.headerTitle}>{title}</span>
          <div className={style.headerRight}>
            <span className={style.headerHint}>
              <kbd>←</kbd> <kbd>→</kbd> navigieren &nbsp;·&nbsp;
              <kbd>↑</kbd> <kbd>↓</kbd> Unterfolien &nbsp;·&nbsp;
              <kbd>?</kbd> Hilfe
            </span>
            <button
              className={style.fullscreenBtn}
              onClick={openFullscreen}
              title="Vollbild"
              aria-label="Präsentation im Vollbild öffnen"
            >
              ⛶ Vollbild
            </button>
          </div>
        </div>
        <div className={style.container} ref={containerRef}>
          <Deck config={deckConfig} onReady={handleReady}>
            {children}
          </Deck>
        </div>
      </div>

      {/* ── Portal fullscreen overlay ─────────────────────────── */}
      {isFullscreen &&
        createPortal(
          <div className={style.fullscreenOverlay}>
            <button
              className={style.closeBtn}
              onClick={closeFullscreen}
              title="Vollbild beenden (Esc)"
              aria-label="Vollbild beenden"
            >
              ✕
            </button>
            <div className={style.fullscreenDeck}>
              <Deck config={deckConfig} onReady={handleReady}>
                {children}
              </Deck>
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}

export { Fragment, Slide, Stack };
