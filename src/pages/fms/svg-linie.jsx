import { Link } from "react-router-dom";
import SvgChallenge from "@/components/gym/SvgChallenge/SvgChallenge";
import SvgLinePlayground from "@/components/gym/SvgLinePlayground/SvgLinePlayground";
import SvgShapeDemo from "@/components/gym/SvgShapeDemo/SvgShapeDemo";
import SvgStudio from "@/components/gym/SvgStudio/SvgStudio";
import LearningGoals from "@/components/LearningGoals.jsx";
import Section from "@/components/Section.jsx";
import style from "./SvgKreis.module.css";

/**
 * Vektoria, Level 5 — "Linienschlucht".
 *
 * Dieses Kapitel startet bewusst anders als Kreisbucht und Rechteckstadt:
 * Zuerst wird gespielt, danach wird erklärt, was man gerade gesehen hat.
 *
 *   0. Spielwiese             alle Attribute sofort anfassen
 *   1. Zwei Punkte            x1, y1, x2, y2
 *   2. Sichtbar machen        stroke, stroke-width, stroke-linecap, dasharray
 *   3. Mehrere Linien         Figuren aus Linien bauen
 */

/** Grosser Trenner zwischen zwei Teilen des Kapitels. */
function StepBreak({ label = "◆ ◆ ◆" }) {
  return (
    <div className={`full-width ${style.stepBreak}`} aria-hidden="true">
      <span>{label}</span>
    </div>
  );
}

// --- Beispiele -----------------------------------------------------------

const BASIC = `<svg width="200" height="140">
  <line
    x1="20"
    y1="20"
    x2="180"
    y2="120"
    stroke="#282828"
    stroke-width="4"
  />
</svg>`;

const INVISIBLE = `<svg width="200" height="140">
  <line
    x1="20" y1="70"
    x2="180" y2="70"
  />
</svg>`;

const CAPS = `<svg width="200" height="140">
  <line
    x1="40" y1="35"
    x2="160" y2="35"
    stroke="#fb4934"
    stroke-width="16"
    stroke-linecap="butt"
  />
  <line
    x1="40" y1="70"
    x2="160" y2="70"
    stroke="#b8bb26"
    stroke-width="16"
    stroke-linecap="round"
  />
  <line
    x1="40" y1="105"
    x2="160" y2="105"
    stroke="#83a598"
    stroke-width="16"
    stroke-linecap="square"
  />
</svg>`;

const DASHED = `<svg width="200" height="100">
  <line
    x1="20" y1="50"
    x2="180" y2="50"
    stroke="#282828"
    stroke-width="6"
    stroke-dasharray="12 8"
  />
</svg>`;

const STAR = `<svg width="200" height="200">
  <line
    x1="100" y1="20"
    x2="100" y2="180"
    stroke="#d3869b"
    stroke-width="6"
  />
  <line
    x1="20" y1="100"
    x2="180" y2="100"
    stroke="#d3869b"
    stroke-width="6"
  />
  <line
    x1="40" y1="40"
    x2="160" y2="160"
    stroke="#d3869b"
    stroke-width="6"
  />
  <line
    x1="160" y1="40"
    x2="40" y2="160"
    stroke="#d3869b"
    stroke-width="6"
  />
</svg>`;

// --- Ziele für die Nachbau-Aufgaben --------------------------------------

const T1_START = `<svg width="200" height="200">
  <line
    x1="20"
    y1="20"
    x2="60"
    y2="60"
    stroke="#fb4934"
    stroke-width="6"
  />
</svg>`;

const T1_TARGET = `<svg width="200" height="200">
  <line
    x1="20"
    y1="180"
    x2="180"
    y2="20"
    stroke="#fb4934"
    stroke-width="6"
  />
</svg>`;

const T2_START = `<svg width="200" height="200">
  <line
    x1="30" y1="100"
    x2="170" y2="100"
  />
</svg>`;

const T2_TARGET = `<svg width="200" height="200">
  <line
    x1="30" y1="100"
    x2="170" y2="100"
    stroke="#b8bb26"
    stroke-width="14"
    stroke-linecap="round"
  />
</svg>`;

const T3_START = `<svg width="200" height="200">
  <line
    x1="40" y1="40"
    x2="160" y2="40"
    stroke="#282828"
    stroke-width="5"
  />
  <line
    x1="40" y1="40"
    x2="40" y2="160"
    stroke="#282828"
    stroke-width="5"
  />
</svg>`;

const T3_TARGET = `<svg width="200" height="200">
  <line
    x1="40" y1="40"
    x2="160" y2="40"
    stroke="#282828"
    stroke-width="5"
  />
  <line
    x1="40" y1="40"
    x2="40" y2="160"
    stroke="#282828"
    stroke-width="5"
  />
  <line
    x1="160" y1="40"
    x2="160" y2="160"
    stroke="#282828"
    stroke-width="5"
  />
  <line
    x1="40" y1="160"
    x2="160" y2="160"
    stroke="#282828"
    stroke-width="5"
  />
</svg>`;

const T4_START = `<svg width="200" height="200">
  <line
    x1="100" y1="30"
    x2="100" y2="170"
    stroke="#83a598"
    stroke-width="6"
  />
</svg>`;

const T4_TARGET = `<svg width="200" height="200">
  <line
    x1="100" y1="30"
    x2="100" y2="170"
    stroke="#83a598"
    stroke-width="6"
  />
  <line
    x1="100" y1="30"
    x2="40" y2="90"
    stroke="#83a598"
    stroke-width="6"
  />
  <line
    x1="100" y1="30"
    x2="160" y2="90"
    stroke="#83a598"
    stroke-width="6"
  />
</svg>`;

// --- Startdateien der Werkstatt ------------------------------------------

const STUDIO_FILES = {
  "stabfigur.svg": `<svg width="200" height="260">
  <circle
    cx="100" cy="50"
    r="30"
    fill="none"
    stroke="#282828"
    stroke-width="5"
  />
  <line
    x1="100" y1="80"
    x2="100" y2="170"
    stroke="#282828"
    stroke-width="5"
  />
</svg>`,
  "diagramm.svg": `<svg width="240" height="200">
  <line
    x1="30" y1="20"
    x2="30" y2="170"
    stroke="#282828"
    stroke-width="3"
  />
  <line
    x1="30" y1="170"
    x2="220" y2="170"
    stroke="#282828"
    stroke-width="3"
  />
</svg>`,
  "stern.svg": `<svg width="200" height="200">
  <line
    x1="100" y1="20"
    x2="100" y2="180"
    stroke="#fabd2f"
    stroke-width="4"
  />
</svg>`,
};

export default function SvgLinie() {
  return (
    <>
      <div className="page-header">
        <h1>Linienschlucht — alles über &lt;line&gt;</h1>
      </div>

      <p>
        Hinter der Rechteckstadt wird das Land schmal und steil: die{" "}
        <strong>Linienschlucht</strong>. Hier gibt es keine Flächen mehr, nur
        noch Verbindungen von einem Punkt zum anderen. Eine Linie ist die
        einfachste Form überhaupt — und gleichzeitig die Grundlage für alles,
        was später kommt.
      </p>

      <LearningGoals>
        <ul>
          <li>
            Sie können eine Linie mit <code>x1</code>, <code>y1</code>,{" "}
            <code>x2</code> und <code>y2</code> genau beschreiben.
          </li>
          <li>
            Sie wissen, dass eine Linie <strong>keine Fläche</strong> hat und
            darum ohne <code>stroke</code> unsichtbar bleibt.
          </li>
          <li>
            Sie können Linien mit <code>stroke-width</code>,{" "}
            <code>stroke-linecap</code> und <code>stroke-dasharray</code>{" "}
            gestalten.
          </li>
          <li>
            Sie können mehrere Linien zu einer Figur zusammensetzen und dabei
            gemeinsame Eckpunkte richtig berechnen.
          </li>
        </ul>
      </LearningGoals>

      <p className="lead">
        Hier geht es sofort los: Du beginnst in der <strong>Spielwiese</strong>{" "}
        und schiebst die Linie herum. Danach erklären wir in Ruhe, was dabei
        passiert ist — und zum Schluss triffst du ein Ziel.
      </p>

      {/* ================= Schritt 0: Zuerst ausprobieren ================= */}

      <StepBreak label="ZUERST AUSPROBIEREN" />

      <Section classes={`full-width ${style.block}`}>
        <p className={style.eyebrow}>Spielwiese</p>
        <h2>Fass die Linie an</h2>

        <p>
          Links siehst du die Grafik, rechts den passenden SVG-Code. Die Regler
          darunter sind in drei Gruppen geordnet: <strong>Punkt 1</strong> (wo
          die Linie beginnt), <strong>Punkt 2</strong> (wo sie aufhört) und{" "}
          <strong>Aussehen</strong> (wie der Strich gezeichnet wird). Bewege
          einen Regler: Die Linie verändert sich — und im Code leuchtet genau
          das Attribut auf, das du gerade veränderst. Du musst jetzt noch nichts
          verstehen, probiere einfach alles einmal durch.
        </p>

        <SvgLinePlayground />

        <p>
          Diese vier Fragen kannst du allein mit den Reglern beantworten.
          Notiere dir deine Beobachtungen — gleich danach erklären wir sie:
        </p>

        <ul>
          <li>
            Stelle eine <strong>waagrechte</strong> Linie ein. Was fällt dir bei{" "}
            <code>y1</code> und <code>y2</code> auf?
          </li>
          <li>
            Stelle eine <strong>senkrechte</strong> Linie ein. Welche beiden
            Zahlen sind jetzt gleich?
          </li>
          <li>
            Was passiert, wenn Start- und Endpunkt <strong>identisch</strong>{" "}
            sind?
          </li>
          <li>
            Ziehe <code>stroke-width</code> auf <code>0</code>. Wo ist die Linie
            hin?
          </li>
        </ul>
      </Section>

      {/* ================= Schritt 1: Zwei Punkte ================= */}

      <StepBreak label="SCHRITT 1" />

      <Section classes={style.stepStart}>
        <p className={style.eyebrow}>Schritt 1 von 3</p>
        <h2>Was dabei passiert ist: zwei Punkte, eine Linie</h2>

        <p>
          Die vier Regler oben waren kein Zufall: Eine Linie verbindet genau
          zwei Punkte. Darum braucht sie vier Zahlen — zwei pro Punkt:
        </p>

        <ul>
          <li>
            <code>x1</code> / <code>y1</code> — der <strong>Startpunkt</strong>.
          </li>
          <li>
            <code>x2</code> / <code>y2</code> — der <strong>Endpunkt</strong>.
          </li>
        </ul>

        <p>
          Die <strong>1</strong> und die <strong>2</strong> sind also einfach
          die Nummern der Punkte. Wie immer gilt: <code>x</code> zählt nach
          rechts, <code>y</code> nach unten.
        </p>

        <SvgShapeDemo
          code={BASIC}
          title="Vom Punkt (20 / 20) zum Punkt (180 / 120)"
          caption="Links das Ergebnis, rechts der Code dazu."
        />

        <p>
          Eine Linie hat <strong>keine Fläche</strong>, die man füllen könnte.{" "}
          <code>fill</code> bewirkt bei ihr gar nichts. Ohne <code>stroke</code>{" "}
          sieht man darum überhaupt nichts:
        </p>

        <SvgShapeDemo
          code={INVISIBLE}
          title="Eine Linie ohne stroke bleibt unsichtbar"
        />

        <p>
          Gehe ruhig nochmals kurz zur Spielwiese zurück und stelle dort die
          Diagonale von der oberen linken in die untere rechte Ecke ein. Jetzt
          weisst du genau, welche Zahl wofür zuständig ist.
        </p>
      </Section>

      <Section classes={`full-width ${style.block} ${style.stepEnd}`}>
        <h3>Ziel treffen: Die Diagonale</h3>

        <SvgChallenge
          title="Aufgabe 1 — nur mit Reglern"
          target={T1_TARGET}
          start={T1_START}
          editable={false}
          sliders
          height={220}
        >
          Ziehe die rote Linie von <strong>unten links</strong> nach{" "}
          <strong>oben rechts</strong>. Der Code ist vorgegeben, du änderst nur
          die vier Zahlen.
        </SvgChallenge>
      </Section>

      {/* ================= Schritt 2: Die Linie gestalten ================= */}

      <StepBreak label="SCHRITT 2" />

      <Section>
        <p className={style.eyebrow}>Schritt 2 von 3</p>
        <h2>Dicke, Enden und Striche</h2>

        <p>
          Die unteren Regler der Spielwiese hast du vorhin schon ausprobiert —
          hier kommt die Erklärung dazu. Weil eine Linie nur aus ihrem Rand
          besteht, sind drei Attribute wichtig:
        </p>

        <ul>
          <li>
            <code>stroke</code> — die Farbe der Linie.
          </li>
          <li>
            <code>stroke-width</code> — wie dick sie ist.
          </li>
          <li>
            <code>stroke-linecap</code> — wie die Enden aussehen:{" "}
            <code>butt</code> (gerade abgeschnitten), <code>round</code> (rund)
            oder <code>square</code> (gerade, aber etwas verlängert).
          </li>
        </ul>

        <SvgShapeDemo code={CAPS} title="Drei Arten von Linienenden" />

        <p>
          Mit <code>stroke-dasharray</code> wird die Linie gestrichelt. Die
          erste Zahl ist die Länge eines Strichs, die zweite die Länge der
          Lücke. In der Spielwiese kannst du beide Zahlen einzeln einstellen.
        </p>

        <p>
          Vorsicht beim Kombinieren: Mit <code>round</code> oder{" "}
          <code>square</code> wird <em>jeder einzelne Strich</em> an beiden
          Enden verlängert. Sind die Lücken kleiner als die Linie dick ist,
          verschwinden sie ganz — die Linie sieht wieder durchgezogen aus.
        </p>

        <SvgShapeDemo code={DASHED} title="Gestrichelte Linie" />
      </Section>

      <Section classes={`full-width ${style.block} ${style.stepEnd}`}>
        <h3>Ziel treffen: Linie sichtbar machen</h3>

        <SvgChallenge
          title="Aufgabe 2 — dick, grün und rund"
          target={T2_TARGET}
          start={T2_START}
          height={280}
        >
          Die Linie ist da, aber unsichtbar. Gib ihr die Farbe{" "}
          <code>#b8bb26</code>, die Dicke <code>14</code> und{" "}
          <strong>runde Enden</strong>.
        </SvgChallenge>
      </Section>

      {/* ================= Schritt 3: Mehrere Linien ================= */}

      <StepBreak label="SCHRITT 3" />

      <Section>
        <p className={style.eyebrow}>Schritt 3 von 3</p>
        <h2>Figuren aus Linien</h2>

        <p>
          Mit mehreren Linien lässt sich fast alles zeichnen. Wichtig ist nur:
          Wo eine Linie aufhört, muss die nächste <strong>genau dort</strong>{" "}
          wieder anfangen — sonst entsteht eine Lücke.
        </p>

        <SvgShapeDemo code={STAR} title="Vier Linien durch einen Punkt" />

        <p>
          Tipp: Schreibe dir die Eckpunkte zuerst auf ein Blatt Papier. Danach
          ist der Code nur noch Abschreiben.
        </p>
      </Section>

      <Section classes={`full-width ${style.block} ${style.stepEnd}`}>
        <h3>Ziel treffen: Zwei Aufgaben</h3>

        <SvgChallenge
          title="Aufgabe 3 — Rahmen aus Linien"
          target={T3_TARGET}
          start={T3_START}
          height={320}
        >
          Zwei Seiten des Quadrats sind schon da. Ergänze die{" "}
          <strong>rechte</strong> und die <strong>untere</strong> Linie, damit
          der Rahmen geschlossen ist. Die Ecken liegen bei 40 und 160.
        </SvgChallenge>

        <SvgChallenge
          title="Aufgabe 4 — Pfeil nach oben"
          target={T4_TARGET}
          start={T4_START}
          height={320}
        >
          Ergänze die beiden <strong>Pfeilspitzen</strong>: Sie beginnen beide
          oben an der Spitze (100 / 30) und gehen schräg nach unten links
          beziehungsweise unten rechts.
        </SvgChallenge>
      </Section>

      {/* ================= Frei üben ================= */}

      <StepBreak />

      <Section classes="exercise">
        <h2>Frei üben</h2>

        <p>
          In der <strong>SVG-Werkstatt</strong> unten liegen drei angefangene
          Dateien. Baue sie fertig:
        </p>

        <ul>
          <li>
            <code>stabfigur.svg</code> — ergänze Arme und Beine als Linien.
          </li>
          <li>
            <code>diagramm.svg</code> — die beiden Achsen sind da. Ergänze
            Skalenstriche und eine gestrichelte Hilfslinie.
          </li>
          <li>
            <code>stern.svg</code> — baue aus mindestens sechs Linien einen
            Stern, bei dem sich alle Linien in der Mitte treffen.
          </li>
        </ul>
      </Section>

      <Section classes={`full-width ${style.block}`}>
        <h3>Die SVG-Werkstatt</h3>

        <SvgStudio
          storageKey="linienschlucht"
          initialFiles={STUDIO_FILES}
          height={480}
        />
      </Section>

      <section className={style.stepStart}>
        <h2>Weiter geht's</h2>
        <p>
          Wenn du dich sicher fühlst, zeig es im{" "}
          <Link to="/fms/binaria/vektoria/linienschlucht/quiz">
            Quiz der Linienschlucht
          </Link>
          .
        </p>
        <p>
          Danach wartet das <Link to="/fms/svg-polyline">Zickzacktal</Link>:
          Dort verbindet man viele Punkte mit einem einzigen Element.
        </p>
        <p>
          <Link to="/fms/binaria/vektoria">
            ← Zurück zur Karte von Vektoria
          </Link>
        </p>
      </section>
    </>
  );
}
