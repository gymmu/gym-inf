import { Link } from "react-router-dom";
import SvgPathMaze from "@/components/gym/SvgPathMaze/SvgPathMaze";
import Section from "@/components/Section.jsx";
import style from "./SvgKreis.module.css";

/**
 * Vektoria — Zwischenboss "Der Pfadmeister".
 *
 * Der Boss stellt ein Labyrinth aus zufällig platzierten Hindernissen auf.
 * Pfadi muss es mit einer selbst geschriebenen Weganweisung (`d`) durchqueren:
 * Die Farbe des Pfades ist egal, nur das Ziel zählt.
 */
export default function SvgPfadeBoss() {
  return (
    <>
      <div className="page-header">
        <h1>Zwischenboss — Der Pfadmeister</h1>
      </div>

      <p>
        Hinter den Kurventälern baut der <strong>Pfadmeister</strong> sein{" "}
        <strong>Labyrinth</strong>: dicke Felsblöcke, lange Felsbögen und
        Schlangenmauern wachsen zu verwinkelten Gebilden zusammen, rundherum
        ein harter Rahmen. Mitten darin
        steht <strong>Pfadi</strong> — und sie kommt nur weiter, wenn du ihr
        eine Weganweisung schreibst, die sauber bis zum Stern führt.
      </p>

      <Section>
        <h2>So funktioniert der Kampf</h2>

        <ul>
          <li>
            Pfadi startet beim hellen Punkt <strong>unten links</strong>. Deine
            Weganweisung muss deshalb mit <code>M 30 270</code> beginnen.
          </li>
          <li>
            Ziel ist der <strong>Stern oben rechts</strong> bei{" "}
            <code>390 / 30</code>. Berührt Pfadi ihn, ist das Labyrinth
            geschafft.
          </li>
          <li>
            Die <strong>Farbe spielt keine Rolle</strong>. Hier zählt nur der
            Weg: <code>L</code>, <code>H</code>, <code>V</code>, <code>Q</code>,{" "}
            <code>C</code> — alles ist erlaubt, Hauptsache Pfadi kommt an.
          </li>
          <li>
            Berührt Pfadi ein <strong>Hindernis</strong> oder den{" "}
            <strong>Rahmen</strong>, ist der Versuch sofort vorbei. Du darfst
            den Weg aber beliebig oft anpassen.
          </li>
          <li>
            Auch Sprünge mit <strong>gehobenem Stift</strong> (<code>M</code>)
            zählen als Laufen — durch die Felsblöcke hindurch mogeln geht nicht.
          </li>
          <li>
            Ab dem <strong>zweiten Labyrinth</strong> baut der Pfadmeister
            eine <strong>Schleuse</strong>: zwei goldene Sperrmauern quer
            durchs ganze Feld, deren <strong>Tore versetzt</strong> sind. Die
            Tormitten sind gelb markiert und mit Koordinaten angeschrieben.
            Pfadi muss durch das erste Tor, im Gang dazwischen zur Seite{" "}
            <strong>schwingen</strong> und durch das zweite Tor wieder hinaus —
            geradeaus geht das nie. Deine Weganweisung braucht darum mindestens
            ein <code>Q</code> (oder <code>C</code>).
          </li>
          <li>
            Jedes gelöste Labyrinth kostet den Pfadmeister Kraft. Vier
            Labyrinthe, und er gibt auf. Die Hindernisse werden von Runde zu
            Runde mehr.
          </li>
        </ul>
      </Section>

      <Section>
        <h2>Tipps</h2>

        <ul>
          <li>
            Lies die <strong>Koordinaten der Zellenmitten</strong> ab (Häkchen
            «Koordinaten») — so findest du Zahlen für deine Zwischenpunkte und
            Griffe, auch wenn die Hindernisse quer durch die Zellen laufen.
          </li>
          <li>
            Mit <code>H</code> und <code>V</code> schreibst du Treppenwege
            besonders kurz: <code>M 30 270 V 210 H 90 …</code>
          </li>
          <li>
            Durch die <strong>Schleuse</strong> führst du Pfadi so: gerade
            auf <strong>Tor 1</strong> zu, dann mit <code>Q</code> in den Gang
            schwingen und mit einem zweiten <code>Q</code> durch{" "}
            <strong>Tor 2</strong> hinaus. Als <strong>Griff</strong> nimmst du
            einen Punkt mitten im Gang — zum Beispiel{" "}
            <code>Q 264 120 336 120</code>, wenn die Tore bei{" "}
            <code>264 / 60</code> und <code>336 / 180</code> liegen.
          </li>
          <li>
            Mit «Weg vorher zeigen» siehst du deinen Weg gestrichelt, bevor
            Pfadi losläuft. So erkennst du Kollisionen schon im Voraus.
          </li>
          <li>
            Die Checkliste rechts sagt dir, ob der Start stimmt, ob das Ziel
            berührt wird und ob der Weg frei ist.
          </li>
        </ul>
      </Section>

      <Section classes={`full-width ${style.block} ${style.stepEnd}`}>
        <SvgPathMaze />
      </Section>

      <section className={style.stepStart}>
        <h2>Danach</h2>
        <p>
          Geschafft? Dann geht die Reise weiter —{" "}
          <Link to="/fms/binaria/vektoria">zurück zur Karte von Vektoria</Link>.
        </p>
        <p>
          Noch unsicher? Übe nochmals im{" "}
          <Link to="/fms/svg-pfade-1">Pfadgebirge</Link> oder in den{" "}
          <Link to="/fms/svg-pfade-2">Kurventälern</Link>.
        </p>
      </section>
    </>
  );
}
