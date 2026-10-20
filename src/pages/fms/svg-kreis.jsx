import { Link } from "react-router-dom";
import SvgChallenge from "@/components/gym/SvgChallenge/SvgChallenge";
import SvgCirclePlayground from "@/components/gym/SvgCirclePlayground/SvgCirclePlayground";
import { SvgSource } from "@/components/gym/SvgCode/SvgCode";
import SvgShapeDemo from "@/components/gym/SvgShapeDemo/SvgShapeDemo";
import SvgStudio from "@/components/gym/SvgStudio/SvgStudio";
import LearningGoals from "@/components/LearningGoals.jsx";
import Section from "@/components/Section.jsx";
import style from "./SvgKreis.module.css";

/** Grosser Trenner zwischen zwei Teilen des Kapitels. */
function StepBreak({ label = "◆ ◆ ◆" }) {
  return (
    <div className={`full-width ${style.stepBreak}`} aria-hidden="true">
      <span>{label}</span>
    </div>
  );
}

/**
 * Vektoria, Level 2 — "Kreisbucht".
 *
 * Aufbau des Kapitels (drei Schritte, jeder gleich aufgebaut:
 * erklären → ausprobieren → Ziel treffen):
 *
 *   1. Position und Grösse   cx, cy, r
 *   2. Farbe und Rand        fill, stroke, stroke-width
 *   3. Mehrere Kreise        Reihenfolge, Überlappung, Rand der Leinwand
 *
 * In den Code-Beispielen steht jedes Attribut auf einer eigenen Zeile.
 * Erst wenn mehrere Formen im Spiel sind, fassen wir zusammen, was
 * inhaltlich zusammengehört (z.B. `cx` und `cy` als Mittelpunkt).
 */

// --- Beispiele (ein Attribut pro Zeile) ----------------------------------

const BASIC = `<circle
  cx="100"
  cy="100"
  r="50"
  fill="#b8bb26"
/>`;

const RING = `<svg width="200" height="140">
  <circle
    cx="100"
    cy="70"
    r="45"
    fill="none"
    stroke="#fb4934"
    stroke-width="12"
  />
</svg>`;

// Mehrere Formen: Mittelpunkt und Aussehen je auf einer Zeile.
const OVERLAP = `<svg width="200" height="140">
  <circle
    cx="75" cy="70"
    r="50"
    fill="#83a598"
  />
  <circle
    cx="125" cy="70"
    r="50"
    fill="#fabd2f"
  />
</svg>`;

const CUT = `<svg width="200" height="140">
  <circle
    cx="10" cy="20"
    r="60"
    fill="#d3869b"
  />
</svg>`;

// --- Ziele für die Nachbau-Aufgaben --------------------------------------

const T1_START = `<svg width="200" height="200">
  <circle
    cx="50"
    cy="150"
    r="60"
    fill="#fb4934"
  />
</svg>`;

const T1_TARGET = `<svg width="200" height="200">
  <circle
    cx="150"
    cy="50"
    r="30"
    fill="#fb4934"
  />
</svg>`;

const T2_START = `<svg width="200" height="200">
  <circle
    cx="100"
    cy="100"
    r="40"
    fill="#83a598"
  />
</svg>`;

const T2_TARGET = `<svg width="200" height="200">
  <circle
    cx="100"
    cy="100"
    r="70"
    fill="none"
    stroke="#83a598"
    stroke-width="10"
  />
</svg>`;

const T3_START = `<svg width="200" height="200">
  <circle
    cx="100" cy="60"
    r="40"
    fill="#fb4934"
  />
</svg>`;

const T3_TARGET = `<svg width="200" height="200">
  <circle
    cx="100" cy="60"
    r="40"
    fill="#fb4934"
  />
  <circle
    cx="100" cy="140"
    r="40"
    fill="#b8bb26"
  />
</svg>`;

const T4_START = `<svg width="200" height="200">
  <circle
    cx="100" cy="100"
    r="80"
    fill="#fb4934"
  />
  <circle
    cx="100" cy="100"
    r="55"
    fill="#ffffff"
  />
  <circle
    cx="100" cy="100"
    r="30"
    fill="#fb4934"
  />
</svg>`;

const T4_TARGET = `<svg width="200" height="200">
  <circle
    cx="100" cy="100"
    r="80"
    fill="#fb4934"
  />
  <circle
    cx="100" cy="100"
    r="55"
    fill="#ffffff"
  />
  <circle
    cx="100" cy="100"
    r="30"
    fill="#fb4934"
  />
  <circle
    cx="100" cy="100"
    r="10"
    fill="#282828"
  />
</svg>`;

// --- Startdateien der SVG-Werkstatt --------------------------------------

const STUDIO_FILES = {
  "ampel.svg": `<svg width="100" height="260">
  <circle
    cx="50" cy="50"
    r="35"
    fill="#fb4934"
  />
</svg>`,
  "schneemann.svg": `<svg width="200" height="260">
  <circle
    cx="100" cy="200"
    r="55"
    fill="#ffffff"
    stroke="#282828"
    stroke-width="2"
  />
</svg>`,
  "olympische-ringe.svg": `<svg width="300" height="160">
  <circle
    cx="60" cy="60"
    r="40"
    fill="none"
    stroke="#0081c8"
    stroke-width="6"
  />
</svg>`,
};

export default function SvgKreis() {
  return (
    <>
      <div className="page-header">
        <h1>Kreisbucht — alles über &lt;circle&gt;</h1>
      </div>

      <p>
        In der <strong>Kreisbucht</strong> wohnt die einfachste Form von
        Vektoria. Ein Kreis braucht nur drei Zahlen, um sich vollständig zu
        beschreiben. Genau darum eignet er sich perfekt, um das Prinzip von SVG
        zu verstehen.
      </p>

      <LearningGoals>
        <ul>
          <li>
            Sie können einen Kreis mit <code>cx</code>, <code>cy</code> und{" "}
            <code>r</code> genau beschreiben.
          </li>
          <li>
            Sie wissen, dass der Nullpunkt oben links liegt und <code>y</code>{" "}
            nach unten wächst.
          </li>
          <li>
            Sie können einen Kreis mit <code>fill</code>, <code>stroke</code>{" "}
            und <code>stroke-width</code> gestalten.
          </li>
          <li>
            Sie können vorhersagen, wie sich ein Kreis verändert, wenn ein
            Attribut geändert wird.
          </li>
          <li>
            Sie können mehrere Kreise so anordnen, dass ein gewünschtes Bild
            entsteht.
          </li>
        </ul>
      </LearningGoals>

      <p className="lead">
        Das Kapitel hat drei Schritte. Jeder Schritt läuft gleich ab: zuerst{" "}
        <strong>erklären</strong>, dann <strong>ausprobieren</strong>, zum
        Schluss <strong>ein Ziel treffen</strong>.
      </p>

      {/* ================= Schritt 1: Position und Grösse ================= */}

      <StepBreak label="SCHRITT 1" />

      <Section classes={style.stepStart}>
        <p className={style.eyebrow}>Schritt 1 von 3</p>
        <h2>Position und Grösse</h2>

        <p>
          Ein Kreis ist eindeutig bestimmt, sobald man weiss, <em>wo</em> sein
          Mittelpunkt liegt und <em>wie weit</em> er reicht:
        </p>

        <ul>
          <li>
            <code>cx</code> — <strong>c</strong>enter <strong>x</strong>: die
            horizontale Position des Mittelpunkts.
          </li>
          <li>
            <code>cy</code> — <strong>c</strong>enter <strong>y</strong>: die
            vertikale Position des Mittelpunkts (nach <strong>unten</strong>{" "}
            gemessen).
          </li>
          <li>
            <code>r</code> — <strong>r</strong>adius: der Abstand vom
            Mittelpunkt bis zum Rand.
          </li>
        </ul>

        <p>
          Damit man den Überblick behält, schreiben wir hier jedes Attribut auf
          eine eigene Zeile:
        </p>

        <SvgSource code={BASIC} wrap={false} />
      </Section>

      <Section classes={`full-width ${style.block}`}>
        <h3>Ausprobieren: Spielwiese</h3>

        <p>
          Bewege die Regler und beobachte beides gleichzeitig: Die Grafik links
          verändert sich — und im Code rechts leuchtet genau das Attribut auf,
          das du gerade veränderst. Die Hilfslinien zeigen dir, welche Strecke
          hinter jeder Zahl steckt.
        </p>

        <SvgCirclePlayground />

        <ul>
          <li>
            Stelle einen Kreis ein, der genau in der <strong>Mitte</strong> der
            Leinwand liegt. Welche Werte brauchst du für <code>cx</code> und{" "}
            <code>cy</code>?
          </li>
          <li>
            Schiebe den Kreis in die <strong>untere rechte</strong> Ecke, ohne
            dass er abgeschnitten wird. Wie gross darf <code>r</code> höchstens
            sein?
          </li>
          <li>
            Welcher Wert von <code>r</code> ist nötig, damit der Kreis die
            Leinwand von Rand zu Rand ausfüllt?
          </li>
        </ul>
      </Section>

      <Section classes={`full-width ${style.block} ${style.stepEnd}`}>
        <h3>Ziel treffen: Verschieben und verkleinern</h3>

        <p>
          Links siehst du dein Bild, in der Mitte den Code und rechts das Ziel.
          Sobald dein Bild dem Ziel entspricht, wird der Rahmen{" "}
          <strong>grün</strong>. Kleine Abweichungen (bis 2 Pixel) sind erlaubt.
        </p>

        <SvgChallenge
          title="Aufgabe 1 — nur mit Reglern"
          target={T1_TARGET}
          start={T1_START}
          editable={false}
          sliders
          height={200}
        >
          Der Code ist fest vorgegeben, du änderst nur die Zahlen: Bringe den
          roten Kreis nach <strong>oben rechts</strong> und mache ihn kleiner.
        </SvgChallenge>
      </Section>

      {/* ================= Schritt 2: Farbe und Rand ================= */}

      <StepBreak label="SCHRITT 2" />

      <Section>
        <p className={style.eyebrow}>Schritt 2 von 3</p>
        <h2>Farbe und Rand</h2>

        <p>
          Jede Form hat eine Fläche (<code>fill</code>) und einen Rand (
          <code>stroke</code>). Der Rand ist nur sichtbar, wenn er eine Farbe
          und eine Dicke hat (<code>stroke-width</code>). Setzt man{" "}
          <code>fill="none"</code>, bleibt nur der Rand übrig — so entsteht ein{" "}
          <strong>Ring</strong>. Der Rand wächst dabei je zur Hälfte nach innen
          und nach aussen.
        </p>

        <SvgShapeDemo code={RING} title="Ring: fill=none + stroke" />
      </Section>

      <Section classes={`full-width ${style.block} ${style.stepEnd}`}>
        <h3>Ziel treffen: Aus der Scheibe wird ein Ring</h3>

        <SvgChallenge
          title="Aufgabe 2 — Ring"
          target={T2_TARGET}
          start={T2_START}
          height={260}
        >
          Jetzt schreibst du selbst: Mach aus der gefüllten Scheibe einen
          grossen <strong>Ring</strong>. Du brauchst <code>fill="none"</code>,{" "}
          <code>stroke</code> und <code>stroke-width</code> — und einen
          grösseren Radius.
        </SvgChallenge>
      </Section>

      {/* ================= Schritt 3: Mehrere Kreise ================= */}

      <StepBreak label="SCHRITT 3" />

      <Section>
        <p className={style.eyebrow}>Schritt 3 von 3</p>
        <h2>Mehrere Kreise</h2>

        <p>
          SVG zeichnet die Elemente in der Reihenfolge, in der sie im Code
          stehen. Das Element <strong>zuunterst im Code</strong> liegt im Bild{" "}
          <strong>zuoberst</strong>. Vertausche im Beispiel die beiden Kreise
          und der gelbe liegt plötzlich hinten.
        </p>

        <p>
          Ab hier haben wir mehrere Formen im Code. Damit es übersichtlich
          bleibt, schreiben wir zusammen, was zusammengehört: der Mittelpunkt (
          <code>cx</code> und <code>cy</code>) steht auf einer Zeile, Grösse und
          Aussehen darunter.
        </p>

        <SvgShapeDemo code={OVERLAP} title="Zwei Kreise überlappen" />

        <h3>Was ausserhalb liegt, wird abgeschnitten</h3>

        <p>
          Die Leinwand hat eine feste Grösse. Alles, was ausserhalb liegt, wird
          nicht gezeichnet — die Form ist trotzdem vorhanden, man sieht nur den
          Teil innerhalb der Leinwand.
        </p>

        <SvgShapeDemo code={CUT} title="Kreis ragt über den Rand hinaus" />
      </Section>

      <Section classes={`full-width ${style.block} ${style.stepEnd}`}>
        <h3>Ziel treffen: Zwei Aufgaben</h3>

        <SvgChallenge
          title="Aufgabe 3 — zweiter Kreis"
          target={T3_TARGET}
          start={T3_START}
          height={280}
        >
          Ergänze einen zweiten Kreis, damit das Ampel-Paar vollständig ist. Im
          Editor helfen dir Vorschläge: Tippe <code>&lt;</code> und wähle{" "}
          <code>circle</code>.
        </SvgChallenge>

        <SvgChallenge
          title="Aufgabe 4 — Zielscheibe"
          target={T4_TARGET}
          start={T4_START}
          height={360}
        >
          Alle Kreise haben denselben Mittelpunkt. Füge den schwarzen
          Mittelpunkt hinzu — achte darauf, an welcher <strong>Stelle</strong>{" "}
          im Code er stehen muss, damit er sichtbar ist.
        </SvgChallenge>
      </Section>

      {/* ================= Frei üben ================= */}

      <StepBreak />

      <Section classes="exercise">
        <h2>Frei üben</h2>

        <p>
          Diese Aufgaben löst du in der <strong>SVG-Werkstatt</strong> weiter
          unten. Lege für jede Aufgabe eine eigene Datei an:
        </p>

        <ul>
          <li>
            Zeichne ein <strong>Ampelsignal</strong>: drei gleich grosse Kreise
            untereinander (rot, gelb, grün) auf einer Leinwand von 100 × 260.
          </li>
          <li>
            Zeichne einen <strong>Schneemann</strong> aus drei Kreisen, die
            einander leicht berühren.
          </li>
          <li>
            Zeichne die <strong>olympischen Ringe</strong>: fünf Ringe mit{" "}
            <code>fill="none"</code>.
          </li>
        </ul>
      </Section>

      <Section classes={`full-width ${style.block}`}>
        <h3>Die SVG-Werkstatt</h3>

        <p>
          Links wählst du die Datei, in der Mitte schreibst du den Code und
          rechts siehst du sofort die Grafik. Deine Dateien bleiben in diesem
          Browser gespeichert und können als <code>.svg</code> heruntergeladen
          werden.
        </p>

        <SvgStudio
          storageKey="kreisbucht"
          initialFiles={STUDIO_FILES}
          height={480}
        />
      </Section>

      <section className={style.stepStart}>
        <h2>Weiter geht's</h2>
        <p>
          Wenn du dich sicher fühlst, zeig es im{" "}
          <Link to="/fms/binaria/vektoria/kreisbucht/quiz">
            Quiz der Kreisbucht
          </Link>
          .
        </p>
        <p>
          Danach wartet die <Link to="/fms/svg-rechteck">Rechteckstadt</Link> —
          und dahinter der <Link to="/fms/svg-formen-boss">Formenwächter</Link>.
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
