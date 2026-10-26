import { Link } from "react-router-dom";
import SvgShapeArena from "@/components/gym/SvgShapeArena/SvgShapeArena";
import Section from "@/components/Section.jsx";
import style from "./SvgKreis.module.css";

/**
 * Vektoria — Zwischenboss "Der Linienmeister".
 *
 * Arena mit Zeitdruck: Zufällige Ziele aus <line>, <polyline> und <polygon>
 * erscheinen auf der Leinwand und müssen im Editor nachgebaut werden. Der
 * Boss ist ein roter Ball, der jede Form zerstört, die er berührt.
 */
export default function SvgLinienBoss() {
  return (
    <>
      <div className="page-header">
        <h1>Zwischenboss — Der Linienmeister</h1>
      </div>

      <p>
        Am Ende des Vieleckfelds wartet der <strong>Linienmeister</strong>. Der
        Kampf läuft wie Minigolf: Ein Ball rollt los und prallt an Wänden und
        Formen ab. Jede Form, die er trifft, zerspringt — und der Linienmeister
        verliert Kraft. Deine Aufgabe ist es, die Formen im Code so zu
        platzieren, dass der Ball sie alle erwischt.
      </p>

      <Section>
        <h2>So funktioniert der Kampf</h2>

        <ul>
          <li>
            In jedem Level stehen am Ende genau drei Formen in der Arena: eine{" "}
            <code>&lt;line&gt;</code>, eine <code>&lt;polyline&gt;</code> und
            ein <code>&lt;polygon&gt;</code>.
          </li>
          <li>
            <strong>Eine davon ist vorgegeben</strong> (gestrichelt gezeichnet)
            — welche, würfelt das Level. Die beiden anderen schreibst du selbst
            in den Editor.
          </li>
          <li>
            Auch <strong>Startpunkt und Richtung</strong> des Balls sind
            vorgegeben: heller Punkt mit Pfeil. Kein Zeitdruck — überlege in
            Ruhe, wo deine Formen stehen müssen.
          </li>
          <li>
            Beim Abschuss rollt der Ball los, prallt an den Wänden ab und
            zerstört jede Form, die er berührt: <code>&lt;line&gt;</code> = 10,{" "}
            <code>&lt;polyline&gt;</code> = 15, <code>&lt;polygon&gt;</code> =
            20 Schaden.
          </li>
          <li>
            Ziel: <strong>alle drei Formen in einem Wurf</strong> treffen. Du
            hast keine Lebenspunkte — du kannst beliebig oft neu platzieren.
            Angerechnet wird pro Level nur dein bester Wurf.
          </li>
          <li>
            Spielregeln für deine Formen: <code>&lt;polyline&gt;</code> und{" "}
            <code>&lt;polygon&gt;</code> dürfen 3 bis 5 Eckpunkte haben und
            müssen innerhalb der Arena liegen. Die Checkliste unter dem Editor
            zeigt dir, was noch fehlt.
          </li>
        </ul>
      </Section>

      <Section classes={`full-width ${style.block} ${style.stepEnd}`}>
        <SvgShapeArena />
      </Section>

      <section className={style.stepStart}>
        <h2>Danach</h2>
        <p>
          Geschafft? Dann geht die Reise weiter —{" "}
          <Link to="/fms/binaria/vektoria">zurück zur Karte von Vektoria</Link>.
        </p>
        <p>
          Noch unsicher? Übe nochmals in der{" "}
          <Link to="/fms/svg-linie">Linienschlucht</Link>, im{" "}
          <Link to="/fms/svg-polyline">Zickzacktal</Link> oder im{" "}
          <Link to="/fms/svg-polygon">Vieleckfeld</Link>.
        </p>
      </section>
    </>
  );
}
