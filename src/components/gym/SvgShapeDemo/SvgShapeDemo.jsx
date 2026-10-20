import { SvgSource } from "@/components/gym/SvgCode/SvgCode";
import style from "./SvgShapeDemo.module.css";

/**
 * SvgShapeDemo — zeigt eine SVG-Form und den dazugehörigen Code.
 *
 * Die Grafik wird direkt aus dem Code-String erzeugt. So kann der Code gar
 * nicht von der angezeigten Form abweichen.
 *
 * @param {string} code Vollständiges SVG-Markup (inkl. <svg>-Wurzelelement)
 * @param {string} [title] Titel über dem Beispiel
 * @param {string} [caption] Kurze Erklärung unter dem Code
 * @param {boolean} [grid] Raster hinter der Grafik anzeigen
 * @param {boolean} [dimRoot] Das <svg>-Wurzelelement ausgrauen
 */
export default function SvgShapeDemo({
  code,
  title,
  caption,
  grid = true,
  dimRoot = true,
  className = "",
}) {
  return (
    <figure className={`${style.demo} ${className}`}>
      {title && <figcaption className={style.title}>{title}</figcaption>}

      <div className={style.body}>
        <div
          className={`${style.preview} ${grid ? style.grid : ""}`}
          // Die Grafik stammt direkt aus dem (statischen) Beispielcode.
          // biome-ignore lint/security/noDangerouslySetInnerHtml: statischer Lerninhalt
          dangerouslySetInnerHTML={{ __html: code }}
        />
        <SvgSource
          code={code}
          className={style.code}
          wrap={false}
          dimRoot={dimRoot}
        />
      </div>

      {caption && <p className={style.caption}>{caption}</p>}
    </figure>
  );
}
