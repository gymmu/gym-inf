import { Link } from "react-router-dom";
import SvgChallenge from "@/components/gym/SvgChallenge/SvgChallenge";
import { SvgSource } from "@/components/gym/SvgCode/SvgCode";
import SvgRectPlayground from "@/components/gym/SvgRectPlayground/SvgRectPlayground";
import SvgShapeDemo from "@/components/gym/SvgShapeDemo/SvgShapeDemo";
import SvgStudio from "@/components/gym/SvgStudio/SvgStudio";
import LearningGoals from "@/components/LearningGoals.jsx";
import Section from "@/components/Section.jsx";
import style from "./SvgKreis.module.css";

/**
 * Vektoria, Level 3 — "Rechteckstadt".
 *
 * Gleicher Aufbau wie die Kreisbucht: drei Schritte, jeder Schritt
 * erklären → ausprobieren → Ziel treffen.
 *
 *   1. Ecke und Grösse       x, y, width, height
 *   2. Ecken, Farbe, Rand    rx, fill, stroke, stroke-width
 *   3. Mehrere Formen        Rechtecke und Kreise kombinieren
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

const BASIC = `<rect
  x="50"
  y="40"
  width="100"
  height="60"
  fill="#fabd2f"
/>`;

const ROUNDED = `<svg width="200" height="140">
  <rect
    x="30"
    y="30"
    width="140"
    height="80"
    rx="20"
    fill="#83a598"
    stroke="#282828"
    stroke-width="4"
  />
</svg>`;

const FRAME = `<svg width="200" height="140">
  <rect
    x="20" y="20"
    width="160" height="100"
    fill="none"
    stroke="#fb4934"
    stroke-width="10"
  />
</svg>`;

const HOUSE = `<svg width="200" height="200">
  <rect
    x="40" y="90"
    width="120" height="90"
    fill="#d3869b"
  />
  <rect
    x="85" y="130"
    width="30" height="50"
    fill="#282828"
  />
  <circle
    cx="100" cy="60"
    r="30"
    fill="#fabd2f"
  />
</svg>`;

// --- Ziele für die Nachbau-Aufgaben --------------------------------------

const T1_START = `<svg width="200" height="200">
  <rect
    x="20"
    y="20"
    width="60"
    height="40"
    fill="#fabd2f"
  />
</svg>`;

const T1_TARGET = `<svg width="200" height="200">
  <rect
    x="60"
    y="110"
    width="120"
    height="70"
    fill="#fabd2f"
  />
</svg>`;

const T2_START = `<svg width="200" height="200">
  <rect
    x="40"
    y="40"
    width="120"
    height="120"
    fill="#b8bb26"
  />
</svg>`;

const T2_TARGET = `<svg width="200" height="200">
  <rect
    x="40"
    y="40"
    width="120"
    height="120"
    rx="25"
    fill="none"
    stroke="#b8bb26"
    stroke-width="12"
  />
</svg>`;

const T3_START = `<svg width="200" height="200">
  <rect
    x="30" y="120"
    width="140" height="50"
    fill="#83a598"
  />
</svg>`;

const T3_TARGET = `<svg width="200" height="200">
  <rect
    x="30" y="120"
    width="140" height="50"
    fill="#83a598"
  />
  <circle
    cx="60" cy="180"
    r="18"
    fill="#282828"
  />
  <circle
    cx="140" cy="180"
    r="18"
    fill="#282828"
  />
</svg>`;

// --- Startdateien der Werkstatt ------------------------------------------

const STUDIO_FILES = {
  "haus.svg": `<svg width="200" height="200">
  <rect
    x="40" y="90"
    width="120" height="90"
    fill="#d3869b"
  />
</svg>`,
  "roboter.svg": `<svg width="200" height="240">
  <rect
    x="60" y="40"
    width="80" height="70"
    rx="10"
    fill="#83a598"
  />
</svg>`,
  "flagge.svg": `<svg width="240" height="160">
  <rect
    x="0" y="0"
    width="240" height="160"
    fill="#fb4934"
  />
</svg>`,
};

export default function SvgRechteck() {
  return (
    <>
      <div className="page-header">
        <h1>Rechteckstadt — alles über &lt;rect&gt;</h1>
      </div>

      <p>
        Nach der Kreisbucht führt der Weg in die <strong>Rechteckstadt</strong>.
        Hier ist alles gerade und kantig: Häuser, Fenster, Türme. Ein Rechteck
        beschreibt man nicht über die Mitte, sondern über seine{" "}
        <strong>obere linke Ecke</strong> und seine Grösse.
      </p>

      <LearningGoals>
        <ul>
          <li>
            Sie können ein Rechteck mit <code>x</code>, <code>y</code>,{" "}
            <code>width</code> und <code>height</code> genau beschreiben.
          </li>
          <li>
            Sie kennen den Unterschied zwischen der Beschreibung eines Kreises
            (Mittelpunkt) und eines Rechtecks (Ecke).
          </li>
          <li>
            Sie können Ecken mit <code>rx</code> abrunden und ein Rechteck mit{" "}
            <code>fill</code>, <code>stroke</code> und <code>stroke-width</code>{" "}
            gestalten.
          </li>
          <li>Sie können Rechtecke und Kreise zu einem Bild kombinieren.</li>
        </ul>
      </LearningGoals>

      <p className="lead">
        Auch dieses Kapitel hat drei Schritte: zuerst <strong>erklären</strong>,
        dann <strong>ausprobieren</strong>, zum Schluss{" "}
        <strong>ein Ziel treffen</strong>.
      </p>

      {/* ================= Schritt 1: Ecke und Grösse ================= */}

      <StepBreak label="SCHRITT 1" />

      <Section classes={style.stepStart}>
        <p className={style.eyebrow}>Schritt 1 von 3</p>
        <h2>Ecke und Grösse</h2>

        <p>Ein Rechteck braucht vier Zahlen:</p>

        <ul>
          <li>
            <code>x</code> — die <strong>linke</strong> Kante.
          </li>
          <li>
            <code>y</code> — die <strong>obere</strong> Kante.
          </li>
          <li>
            <code>width</code> — die Breite (nach rechts).
          </li>
          <li>
            <code>height</code> — die Höhe (nach unten).
          </li>
        </ul>

        <p>
          Achtung, häufige Verwechslung: Bei <code>&lt;circle&gt;</code> zeigen{" "}
          <code>cx</code> / <code>cy</code> auf die <strong>Mitte</strong>, bei{" "}
          <code>&lt;rect&gt;</code> zeigen <code>x</code> / <code>y</code> auf
          die <strong>obere linke Ecke</strong>.
        </p>

        <SvgSource code={BASIC} wrap={false} />
      </Section>

      <Section classes={`full-width ${style.block}`}>
        <h3>Ausprobieren: Spielwiese</h3>

        <p>
          Bewege die Regler. Die Hilfslinien zeigen dir, welche Strecke hinter
          jeder Zahl steckt — und im Code leuchtet das Attribut auf, das du
          gerade veränderst.
        </p>

        <SvgRectPlayground />

        <ul>
          <li>
            Stelle ein Rechteck ein, das die ganze Leinwand ausfüllt. Welche
            vier Zahlen brauchst du?
          </li>
          <li>
            Mache ein <strong>Quadrat</strong> in der Mitte der Leinwand. Welche
            Werte für <code>x</code> und <code>y</code> sind nötig?
          </li>
          <li>
            Was passiert, wenn <code>width</code> oder <code>height</code> auf{" "}
            <code>0</code> steht?
          </li>
        </ul>
      </Section>

      <Section classes={`full-width ${style.block} ${style.stepEnd}`}>
        <h3>Ziel treffen: Verschieben und vergrössern</h3>

        <SvgChallenge
          title="Aufgabe 1 — nur mit Reglern"
          target={T1_TARGET}
          start={T1_START}
          editable={false}
          sliders
          height={220}
        >
          Schiebe das gelbe Rechteck nach <strong>unten rechts</strong> und
          mache es grösser. Der Code bleibt gleich, du änderst nur die Zahlen.
        </SvgChallenge>
      </Section>

      {/* ================= Schritt 2: Ecken, Farbe, Rand ================= */}

      <StepBreak label="SCHRITT 2" />

      <Section>
        <p className={style.eyebrow}>Schritt 2 von 3</p>
        <h2>Runde Ecken, Farbe und Rand</h2>

        <p>
          <code>fill</code>, <code>stroke</code> und <code>stroke-width</code>{" "}
          funktionieren genau wie beim Kreis. Neu ist <code>rx</code>: Damit
          werden die Ecken abgerundet. Je grösser <code>rx</code>, desto runder
          die Ecken.
        </p>

        <SvgShapeDemo code={ROUNDED} title="Rechteck mit runden Ecken" />

        <p>
          Mit <code>fill="none"</code> wird aus dem Rechteck ein{" "}
          <strong>Rahmen</strong> — dasselbe Prinzip wie der Ring beim Kreis.
        </p>

        <SvgShapeDemo code={FRAME} title="Rahmen: fill=none + stroke" />
      </Section>

      <Section classes={`full-width ${style.block} ${style.stepEnd}`}>
        <h3>Ziel treffen: Aus der Fläche wird ein Rahmen</h3>

        <SvgChallenge
          title="Aufgabe 2 — Rahmen mit runden Ecken"
          target={T2_TARGET}
          start={T2_START}
          height={300}
        >
          Mach aus dem grünen Quadrat einen{" "}
          <strong>Rahmen mit runden Ecken</strong>. Du brauchst <code>rx</code>,{" "}
          <code>fill="none"</code>, <code>stroke</code> und{" "}
          <code>stroke-width</code>.
        </SvgChallenge>
      </Section>

      {/* ================= Schritt 3: Formen kombinieren ================= */}

      <StepBreak label="SCHRITT 3" />

      <Section>
        <p className={style.eyebrow}>Schritt 3 von 3</p>
        <h2>Rechtecke und Kreise kombinieren</h2>

        <p>
          Richtig spannend wird es, wenn mehrere Formen zusammenspielen. Es gilt
          weiterhin: Was <strong>weiter unten</strong> im Code steht, liegt im
          Bild <strong>weiter vorne</strong>.
        </p>

        <SvgShapeDemo
          code={HOUSE}
          title="Haus aus Rechtecken und einem Kreis"
        />
      </Section>

      <Section classes={`full-width ${style.block} ${style.stepEnd}`}>
        <h3>Ziel treffen: Fahrzeug bauen</h3>

        <SvgChallenge
          title="Aufgabe 3 — zwei Räder"
          target={T3_TARGET}
          start={T3_START}
          height={320}
        >
          Ergänze die beiden <strong>Räder</strong> als Kreise. Tipp: Beide
          liegen auf derselben Höhe und sind gleich gross.
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
            <code>haus.svg</code> — ergänze Dach (Rechteck oder Kreis), Tür und
            zwei Fenster.
          </li>
          <li>
            <code>roboter.svg</code> — Kopf, Körper, Arme, Beine und zwei Augen.
          </li>
          <li>
            <code>flagge.svg</code> — erfinde eine Flagge aus mindestens drei
            Formen.
          </li>
        </ul>
      </Section>

      <Section classes={`full-width ${style.block}`}>
        <h3>Die SVG-Werkstatt</h3>

        <SvgStudio
          storageKey="rechteckstadt"
          initialFiles={STUDIO_FILES}
          height={480}
        />
      </Section>

      <section className={style.stepStart}>
        <h2>Weiter geht's</h2>
        <p>
          Du kennst jetzt Kreise <em>und</em> Rechtecke. Zeit für den{" "}
          <Link to="/fms/svg-formen-boss">Zwischenboss: Der Formenwächter</Link>
          .
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
