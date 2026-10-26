import { Link } from "react-router-dom";
import SvgChallenge from "@/components/gym/SvgChallenge/SvgChallenge";
import { SvgSource } from "@/components/gym/SvgCode/SvgCode";
import SvgPointsPlayground from "@/components/gym/SvgPointsPlayground/SvgPointsPlayground";
import SvgShapeDemo from "@/components/gym/SvgShapeDemo/SvgShapeDemo";
import SvgStudio from "@/components/gym/SvgStudio/SvgStudio";
import LearningGoals from "@/components/LearningGoals.jsx";
import Section from "@/components/Section.jsx";
import style from "./SvgKreis.module.css";

/**
 * Vektoria, Level 7 — "Vieleckfeld".
 *
 * Drei Schritte:
 *
 *   1. Der Weg schliesst sich    polygon vs. polyline
 *   2. Fläche und Rand           fill, stroke, fill-rule
 *   3. Eigene Vielecke bauen     Dreieck, Raute, Stern, Pfeil
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

const TRIANGLE = `<polygon
  points="100,20 180,160 20,160"
  fill="#fabd2f"
/>`;

const OPEN_VS_CLOSED = `<svg width="300" height="160">
  <polyline
    points="20,140 80,20 140,140"
    fill="none"
    stroke="#fb4934"
    stroke-width="5"
  />
  <polygon
    points="180,140 240,20 300,140"
    fill="none"
    stroke="#b8bb26"
    stroke-width="5"
  />
</svg>`;

const OUTLINE = `<svg width="200" height="180">
  <polygon
    points="100,20 160,70 140,150 60,150 40,70"
    fill="none"
    stroke="#d3869b"
    stroke-width="6"
  />
</svg>`;

const FILLED = `<svg width="200" height="180">
  <polygon
    points="100,20 160,70 140,150 60,150 40,70"
    fill="#83a598"
    stroke="#282828"
    stroke-width="4"
  />
</svg>`;

const ARROW = `<svg width="220" height="140">
  <polygon
    points="20,50 120,50 120,20 200,70 120,120 120,90 20,90"
    fill="#fe8019"
  />
</svg>`;

// --- Ziele für die Nachbau-Aufgaben --------------------------------------

const T1_START = `<svg width="200" height="200">
  <polyline
    points="40,160 100,40 160,160"
    fill="none"
    stroke="#fabd2f"
    stroke-width="6"
  />
</svg>`;

const T1_TARGET = `<svg width="200" height="200">
  <polygon
    points="40,160 100,40 160,160"
    fill="none"
    stroke="#fabd2f"
    stroke-width="6"
  />
</svg>`;

const T2_START = `<svg width="200" height="200">
  <polygon
    points="100,40 160,100 100,160"
    fill="#d3869b"
  />
</svg>`;

const T2_TARGET = `<svg width="200" height="200">
  <polygon
    points="100,40 160,100 100,160 40,100"
    fill="#d3869b"
  />
</svg>`;

const T3_START = `<svg width="200" height="200">
  <polygon
    points="60,100 140,100 140,180 60,180"
    fill="#928374"
  />
</svg>`;

const T3_TARGET = `<svg width="200" height="200">
  <polygon
    points="60,100 140,100 140,180 60,180"
    fill="#928374"
  />
  <polygon
    points="40,100 100,40 160,100"
    fill="#fb4934"
  />
</svg>`;

// --- Startdateien der Werkstatt ------------------------------------------

const STUDIO_FILES = {
  "verkehrsschild.svg": `<svg width="200" height="200">
  <polygon
    points="100,20 180,100 100,180 20,100"
    fill="#fabd2f"
    stroke="#282828"
    stroke-width="6"
  />
</svg>`,
  "stern.svg": `<svg width="200" height="200">
  <polygon
    points="100,20 120,80 180,80 130,115"
    fill="#fabd2f"
  />
</svg>`,
  "landschaft.svg": `<svg width="300" height="200">
  <polygon
    points="0,200 80,80 160,200"
    fill="#665c54"
  />
</svg>`,
};

export default function SvgPolygon() {
  return (
    <>
      <div className="page-header">
        <h1>Vieleckfeld — alles über &lt;polygon&gt;</h1>
      </div>

      <p>
        Am Ende des Zickzacktals öffnet sich das <strong>Vieleckfeld</strong>.
        Hier schliessen sich die Wege zu Flächen: Dreiecke, Rauten, Sterne,
        Pfeile. Das Element dazu heisst <code>&lt;polygon&gt;</code> und sieht
        fast genau aus wie eine <code>&lt;polyline&gt;</code> — mit einem
        wichtigen Unterschied.
      </p>

      <LearningGoals>
        <ul>
          <li>
            Sie können mit <code>&lt;polygon&gt;</code> eine geschlossene Form
            zeichnen.
          </li>
          <li>
            Sie können den Unterschied zwischen <code>&lt;polyline&gt;</code>{" "}
            und <code>&lt;polygon&gt;</code> erklären.
          </li>
          <li>
            Sie können ein Vieleck füllen (<code>fill</code>) und mit einem Rand
            versehen (<code>stroke</code>).
          </li>
          <li>
            Sie können die Eckpunkte einfacher Figuren (Dreieck, Raute, Pfeil)
            selbst bestimmen.
          </li>
        </ul>
      </LearningGoals>

      <p className="lead">
        Drei Schritte: <strong>erklären</strong> → <strong>ausprobieren</strong>{" "}
        → <strong>ein Ziel treffen</strong>.
      </p>

      {/* ================= Schritt 1: Der Weg schliesst sich ============= */}

      <StepBreak label="SCHRITT 1" />

      <Section classes={style.stepStart}>
        <p className={style.eyebrow}>Schritt 1 von 3</p>
        <h2>Der Weg schliesst sich</h2>

        <p>
          Ein <code>&lt;polygon&gt;</code> hat dasselbe Attribut{" "}
          <code>points</code> wie die polyline. Der Unterschied: Der{" "}
          <strong>
            letzte Punkt wird automatisch mit dem ersten verbunden
          </strong>
          . Für ein Dreieck genügen deshalb drei Punkte:
        </p>

        <SvgSource code={TRIANGLE} wrap={false} />

        <p>
          Links eine offene polyline, rechts ein geschlossenes polygon — beide
          mit genau denselben drei Punkten:
        </p>

        <SvgShapeDemo code={OPEN_VS_CLOSED} title="Offen gegen geschlossen" />
      </Section>

      <Section classes={`full-width ${style.block}`}>
        <h3>Ausprobieren: Spielwiese</h3>

        <p>
          Verschiebe die Punkte und schalte zwischen <code>polyline</code> und{" "}
          <code>polygon</code> um. Beobachte, welche Strecke dazukommt — und was
          mit der Füllfarbe passiert.
        </p>

        <SvgPointsPlayground shape="polygon" />

        <ul>
          <li>
            Baue ein <strong>Dreieck</strong> mit genau drei Punkten.
          </li>
          <li>
            Mach daraus ein <strong>Viereck</strong>, ohne ein{" "}
            <code>&lt;rect&gt;</code> zu benutzen.
          </li>
          <li>
            Schalte auf <code>polyline</code> um: Welche Linie verschwindet?
          </li>
        </ul>
      </Section>

      <Section classes={`full-width ${style.block} ${style.stepEnd}`}>
        <h3>Ziel treffen: Aus offen wird geschlossen</h3>

        <SvgChallenge
          title="Aufgabe 1 — ein Zeichen ändern"
          target={T1_TARGET}
          start={T1_START}
          height={260}
        >
          Die Punkte stimmen bereits. Ändere nur den{" "}
          <strong>Namen des Elements</strong>, damit aus dem offenen Dach ein
          geschlossenes Dreieck wird. Denk auch an das schliessende Tag.
        </SvgChallenge>
      </Section>

      {/* ================= Schritt 2: Fläche und Rand ================= */}

      <StepBreak label="SCHRITT 2" />

      <Section>
        <p className={style.eyebrow}>Schritt 2 von 3</p>
        <h2>Fläche und Rand</h2>

        <p>
          Weil ein Polygon geschlossen ist, hat es eine <strong>Fläche</strong>.{" "}
          <code>fill</code>, <code>stroke</code> und <code>stroke-width</code>{" "}
          funktionieren genau wie beim Kreis und beim Rechteck.
        </p>

        <SvgShapeDemo code={OUTLINE} title="Nur Umriss: fill=none" />
        <SvgShapeDemo code={FILLED} title="Gefüllt mit Rand" />

        <p>
          Übrigens: Ein <code>&lt;rect&gt;</code> liesse sich auch als polygon
          schreiben. Für Rechtecke ist <code>&lt;rect&gt;</code> aber kürzer —
          man nimmt immer das Element, das am besten passt.
        </p>
      </Section>

      <Section classes={`full-width ${style.block} ${style.stepEnd}`}>
        <h3>Ziel treffen: Die Raute</h3>

        <SvgChallenge
          title="Aufgabe 2 — vierter Punkt"
          target={T2_TARGET}
          start={T2_START}
          height={280}
        >
          Aus dem Dreieck soll eine <strong>Raute</strong> werden. Es fehlt
          genau ein Punkt — links auf halber Höhe (40 / 100).
        </SvgChallenge>
      </Section>

      {/* ================= Schritt 3: Eigene Vielecke ================= */}

      <StepBreak label="SCHRITT 3" />

      <Section>
        <p className={style.eyebrow}>Schritt 3 von 3</p>
        <h2>Eigene Vielecke bauen</h2>

        <p>
          Je mehr Punkte, desto spannender die Form. Ein Pfeil zum Beispiel
          braucht sieben Punkte — man läuft sie einmal im Kreis ab:
        </p>

        <SvgShapeDemo code={ARROW} title="Pfeil aus sieben Punkten" />

        <p>
          Vorgehen, das immer funktioniert: Zeichne die Form zuerst auf
          kariertes Papier, nummeriere die Ecken der Reihe nach und lies dann
          die Koordinaten ab.
        </p>
      </Section>

      <Section classes={`full-width ${style.block} ${style.stepEnd}`}>
        <h3>Ziel treffen: Das Haus bekommt ein Dach</h3>

        <SvgChallenge
          title="Aufgabe 3 — Dreieck ergänzen"
          target={T3_TARGET}
          start={T3_START}
          height={320}
        >
          Die graue Hauswand steht. Ergänze ein rotes (<code>#fb4934</code>)
          Dach als polygon mit den Ecken 40/100, 100/40 und 160/100.
        </SvgChallenge>
      </Section>

      {/* ================= Frei üben ================= */}

      <StepBreak />

      <Section classes="exercise">
        <h2>Frei üben</h2>

        <p>Baue die angefangenen Dateien in der Werkstatt fertig:</p>

        <ul>
          <li>
            <code>verkehrsschild.svg</code> — ergänze das Schild mit weiteren
            Formen (z.B. ein weisser Balken für ein Vorfahrtsschild).
          </li>
          <li>
            <code>stern.svg</code> — der Stern ist erst zur Hälfte da. Ergänze
            die restlichen Zacken (ein Stern mit fünf Zacken hat zehn Punkte).
          </li>
          <li>
            <code>landschaft.svg</code> — ergänze weitere Berge, eine Sonne und
            eine Wiese. Denk an die Reihenfolge im Code!
          </li>
        </ul>
      </Section>

      <Section classes={`full-width ${style.block}`}>
        <h3>Die SVG-Werkstatt</h3>

        <SvgStudio
          storageKey="vieleckfeld"
          initialFiles={STUDIO_FILES}
          height={480}
        />
      </Section>

      <section className={style.stepStart}>
        <h2>Weiter geht's</h2>
        <p>
          Zeig im{" "}
          <Link to="/fms/binaria/vektoria/vieleckfeld/quiz">
            Quiz des Vieleckfelds
          </Link>
          , dass du Vielecke beherrschst.
        </p>
        <p>
          Danach stellt sich dir der{" "}
          <Link to="/fms/svg-linien-boss">Linienmeister</Link> in den Weg — er
          prüft alles aus der Linienschlucht, dem Zickzacktal und dem
          Vieleckfeld.
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
