import { useState, useRef } from "react";

export default function ImageMagnifier({
  src,
  alt,
  magnifierRadius = 200,
  zoomLevel = 2.5,
}) {
  const [showMagnifier, setShowMagnifier] = useState(false);
  const [magnifierPosition, setMagnifierPosition] = useState({ x: 0, y: 0 });
  const imgRef = useRef(null);

  const handleMouseEnter = () => {
    setShowMagnifier(true);
  };

  const handleMouseLeave = () => {
    setShowMagnifier(false);
  };

  const handleMouseMove = (e) => {
    if (!imgRef.current) return;

    const img = imgRef.current;
    const rect = img.getBoundingClientRect();

    // Position der Maus relativ zum Bild
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setMagnifierPosition({ x, y, width: rect.width, height: rect.height });
  };

  // Berechne die Background-Position für die Lupe
  const getBackgroundPosition = () => {
    if (!magnifierPosition.width || !magnifierPosition.height) return "0 0";

    const { x, y, width, height } = magnifierPosition;

    // Berechne die Position im vergrößerten Bild
    const bgPosX = -x * zoomLevel + magnifierRadius / 2;
    const bgPosY = -y * zoomLevel + magnifierRadius / 2;

    return `${bgPosX}px ${bgPosY}px`;
  };

  // Berechne die Background-Größe für die Lupe
  const getBackgroundSize = () => {
    if (!magnifierPosition.width || !magnifierPosition.height) return "auto";

    const { width, height } = magnifierPosition;
    return `${width * zoomLevel}px ${height * zoomLevel}px`;
  };

  return (
    <div
      style={{
        position: "relative",
        display: "inline-block",
        cursor: "none",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        style={{
          maxWidth: "100%",
          height: "auto",
          backgroundColor: "white",
          display: "block",
        }}
      />

      {showMagnifier && (
        <div
          style={{
            position: "absolute",
            pointerEvents: "none",
            border: "3px solid #ccc",
            borderRadius: "50%",
            width: `${magnifierRadius}px`,
            height: `${magnifierRadius}px`,
            top: `${magnifierPosition.y - magnifierRadius / 2}px`,
            left: `${magnifierPosition.x - magnifierRadius / 2}px`,
            backgroundImage: `url(${src})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: getBackgroundSize(),
            backgroundPosition: getBackgroundPosition(),
            backgroundColor: "white",
            boxShadow: "0 0 20px rgba(0, 0, 0, 0.3)",
            overflow: "hidden",
          }}
        />
      )}
    </div>
  );
}
