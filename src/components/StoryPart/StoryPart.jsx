import style from "./StoryPart.module.css";

/**
 * StoryPart – Bild/Component und Text nebeneinander, volle Bildschirmhöhe
 *
 * @param {Function} [component] React-Komponente für die visuelle Seite
 * @param {string} [imageSrc] Alternativ: Bildquelle
 * @param {string} [alt] Alt-Text für das Bild
 * @param {"left"|"right"} [imagePosition] Position des Visuals
 * @param {boolean} [wide] Visual darf die volle Spaltenbreite nutzen
 * @param {string} [className] Zusätzliche Klassen (z.B. "full-width")
 */
export default function StoryPart({
  component: Component,
  imageSrc,
  alt = "",
  imagePosition = "left",
  wide = false,
  className = "",
  children,
}) {
  const positionClass = imagePosition === "right" ? style.right : style.left;
  const wideClass = wide ? style.wide : "";

  return (
    <section
      className={`${style.storyPart} ${positionClass} ${wideClass} ${className}`}
    >
      <div className={style.visual}>
        {Component ? (
          <Component className={style.component} />
        ) : imageSrc ? (
          <img className={style.image} src={imageSrc} alt={alt} />
        ) : null}
      </div>

      <div className={style.text}>{children}</div>
    </section>
  );
}
