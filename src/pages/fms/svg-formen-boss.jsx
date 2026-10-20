import { Link } from "react-router-dom";
import SvgBossBattle from "@/components/gym/SvgBossBattle/SvgBossBattle";
import Section from "@/components/Section.jsx";
import style from "./SvgKreis.module.css";

/**
 * Vektoria — Zwischenboss "Der Formenwächter".
 *
 * Fünf zufällig gewürfelte Bilder aus Kreisen und Rechtecken müssen
 * nachgebaut werden. Die Aufgaben nutzen dasselbe Drei-Spalten-Widget wie
 * die Kapitel, werden aber von Runde zu Runde schwieriger.
 */
export default function SvgFormenBoss() {
  return (
    <>
      <div className="page-header">
        <h1>Zwischenboss — Der Formenwächter</h1>
      </div>

      <p>
        Zwischen der Rechteckstadt und dem Rest von Vektoria steht der{" "}
        <strong>Formenwächter</strong>. Er zeigt dir ein Bild und behauptet, du
        könnest es nicht nachbauen. Jedes Bild, das du exakt triffst, kostet ihn
        Kraft.
      </p>

      <Section>
        <h2>So funktioniert der Kampf</h2>

        <ul>
          <li>
            Der Boss würfelt ein Bild aus <code>&lt;circle&gt;</code> und{" "}
            <code>&lt;rect&gt;</code> — rechts im Widget siehst du es.
          </li>
          <li>
            Baue es links nach. Stimmt dein Bild, wird der Rahmen{" "}
            <strong>grün</strong> und du landest einen Treffer.
          </li>
          <li>
            <strong>Runde 1–2:</strong> nur die Zahlen sind verdreht, du löst
            mit den Reglern. <strong>Runde 3–4:</strong> Zahlen und Farben im
            Code anpassen. <strong>Runde 5:</strong> eine Form fehlt ganz.
          </li>
          <li>
            Ein Bild ist dir zu unsympathisch? Mit{" "}
            <em>„Anderes Bild würfeln“</em> bekommst du ein neues — der Boss
            verliert dadurch aber keine Kraft.
          </li>
        </ul>
      </Section>

      <Section classes={`full-width ${style.block} ${style.stepEnd}`}>
        <SvgBossBattle rounds={5} />
      </Section>

      <section className={style.stepStart}>
        <h2>Danach</h2>
        <p>
          Geschafft? Dann geht die Reise weiter durch Vektoria —{" "}
          <Link to="/fms/binaria/vektoria">zurück zur Karte</Link>.
        </p>
        <p>
          Noch unsicher? Übe nochmals in der{" "}
          <Link to="/fms/svg-kreis">Kreisbucht</Link> oder in der{" "}
          <Link to="/fms/svg-rechteck">Rechteckstadt</Link>.
        </p>
      </section>
    </>
  );
}
