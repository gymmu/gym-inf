/**
 * ScrollSection — Vollbild-Sektion mit Scroll-Snapping
 *
 * - Mindestens 100vh Höhe
 * - Inhalt vertikal zentriert
 * - Scroll-Snapping: Oberer Rand snapt an den oberen Bildschirmrand
 * - Unterer Rand snapt erst wenn 200px weiter gescrollt wurde
 *
 * @param {Object} props
 * @param {ReactNode} props.children — Kind-Element
 * @param {string} [props.area] — content | breakout | full-width
 */
export default function ScrollSection({ children, area = "content" }) {
  return (
    <div className={`scroll-section ${area}`}>
      <div className="scroll-section-content">
        {children}
      </div>
    </div>
  );
}
