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
 * Vektoria, Level 6 — "Zickzacktal".
 *
 * Drei Schritte, wie in den Kapiteln davor:
 *
 *   1. Viele Punkte in einem Element   points
 *   2. Offen, nicht gefüllt            fill="none", stroke-linejoin
 *   3. Daten zeichnen                  Linienzüge als Diagramm
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

const THREE_LINES = `<svg width="200" height="140">
  <line
    x1="20" y1="120" x2="70" y2="40"
    stroke="#282828" stroke-width="4"
  />
  <line
    x1="70" y1="40" x2="120" y2="100"
    stroke="#282828" stroke-width="4"
  />
  <line
    x1="120" y1="100" x2="180" y2="20"
    stroke="#282828" stroke-width="4"
  />
</svg>`;

const SAME_WITH_POLYLINE = `<svg width="200" height="140">
  <polyline
    points="20,120 70,40 120,100 180,20"
    fill="none"
    stroke="#282828"
    stroke-width="4"
  />
</svg>`;

const FILL_TRAP = `<svg width="200" height="140">
  <polyline
    points="20,120 70,40 120,100 180,20"
    stroke="#282828"
    stroke-width="4"
  />
</svg>`;

const JOINS = `<svg width="220" height="120">
  <polyline
    points="20,100 60,20 100,100"
    fill="none"
    stroke="#fb4934"
    stroke-width="16"
    stroke-linejoin="miter"
  />
  <polyline
    points="120,100 160,20 200,100"
    fill="none"
    stroke="#83a598"
    stroke-width="16"
    stroke-linejoin="round"
  />
</svg>`;

const CHART = `<svg width="240" height="180">
  <line
    x1="30" y1="20" x2="30" y2="150"
    stroke="#928374" stroke-width="2"
  />
  <line
    x1="30" y1="150" x2="220" y2="150"
    stroke="#928374" stroke-width="2"
  />
  <polyline
    points="30,130 70,90 110,110 150,50 190,70 220,30"
    fill="none"
    stroke="#b8bb26"
    stroke-width="4"
  />
</svg>`;

// --- Ziele für die Nachbau-Aufgaben --------------------------------------

const T1_START = `<svg width="200" height="200">
  <polyline
    points="20,180 60,180"
    fill="none"
    stroke="#fb4934"
    stroke-width="5"
  />
</svg>`;

const T1_TARGET = `<svg width="200" height="200">
  <polyline
    points="20,180 60,100 100,180 140,100 180,180"
    fill="none"
    stroke="#fb4934"
    stroke-width="5"
  />
</svg>`;

const T2_START = `<svg width="200" height="200">
  <polyline
    points="20,160 100,40 180,160"
    stroke="#83a598"
    stroke-width="12"
  />
</svg>`;

const T2_TARGET = `<svg width="200" height="200">
  <polyline
    points="20,160 100,40 180,160"
    fill="none"
    stroke="#83a598"
    stroke-width="12"
    stroke-linejoin="round"
  />
</svg>`;

const T3_START = `<svg width="240" height="200">
  <line
    x1="30" y1="20" x2="30" y2="150"
    stroke="#928374" stroke-width="2"
  />
  <line
    x1="30" y1="150" x2="220" y2="150"
    stroke="#928374" stroke-width="2"
  />
</svg>`;

const T3_TARGET = `<svg width="240" height="200">
  <line
    x1="30" y1="20" x2="30" y2="150"
    stroke="#928374" stroke-width="2"
  />
  <line
    x1="30" y1="150" x2="220" y2="150"
    stroke="#928374" stroke-width="2"
  />
  <polyline
    points="30,140 80,100 130,120 180,60 220,40"
    fill="none"
    stroke="#fabd2f"
    stroke-width="4"
  />
</svg>`;

// --- Startdateien der Werkstatt ------------------------------------------

const STUDIO_FILES = {
  "gebirge.svg": `<svg width="300" height="180">
  <polyline
    points="0,160 60,80 120,130"
    fill="none"
    stroke="#665c54"
    stroke-width="4"
  />
</svg>`,
  "treppe.svg": `<svg width="200" height="200">
  <polyline
    points="20,180 20,150 60,150"
    fill="none"
    stroke="#282828"
    stroke-width="4"
  />
</svg>`,
  "herzschlag.svg": `<svg width="300" height="160">
  <polyline
    points="0,80 60,80 80,40 100,120 120,80 300,80"
    fill="none"
    stroke="#fb4934"
    stroke-width="3"
  />
</svg>`,
};

export default function SvgPolyline() {
  return (
    <>
      <div className="page-header">
        <h1>Zickzacktal — alles über &lt;polyline&gt;</h1>
      </div>

      <p>
        Im <strong>Zickzacktal</strong> geht es auf und ab. Wer hier mit lauter
        einzelnen Linien arbeitet, verliert schnell den Überblick. Zum Glück
        gibt es ein Element, das beliebig viele Punkte der Reihe nach verbindet:{" "}
        <code>&lt;polyline&gt;</code>.
      </p>

      <LearningGoals>
        <ul>
          <li>
            Sie können mit <code>&lt;polyline&gt;</code> mehrere Punkte zu einem
            Linienzug verbinden.
          </li>
          <li>
            Sie können das Attribut <code>points</code> richtig schreiben: Paare
            aus <code>x,y</code>, getrennt durch Leerzeichen.
          </li>
          <li>
            Sie wissen, warum ein Linienzug fast immer <code>fill="none"</code>{" "}
            braucht.
          </li>
          <li>
            Sie können einen Linienzug gestalten (<code>stroke</code>,{" "}
            <code>stroke-width</code>, <code>stroke-linejoin</code>).
          </li>
          <li>Sie können einfache Daten als Linien&shy;diagramm darstellen.</li>
        </ul>
      </LearningGoals>

      <p className="lead">
        Drei Schritte wie immer: <strong>erklären</strong> →{" "}
        <strong>ausprobieren</strong> → <strong>ein Ziel treffen</strong>.
      </p>

      {/* ================= Schritt 1: Viele Punkte ================= */}

      <StepBreak label="SCHRITT 1" />

      <Section classes={style.stepStart}>
        <p className={style.eyebrow}>Schritt 1 von 3</p>
        <h2>Viele Punkte in einem Element</h2>

        <p>
          Ein Zickzack aus drei Strecken braucht mit <code>&lt;line&gt;</code>{" "}
          drei Elemente — und jeder Punkt in der Mitte muss{" "}
          <strong>zweimal</strong> geschrieben werden:
        </p>

        <SvgShapeDemo code={THREE_LINES} title="Umständlich: drei Linien" />

        <p>
          Mit <code>&lt;polyline&gt;</code> geht dasselbe in einer Zeile. Im
          Attribut <code>points</code> stehen alle Punkte der Reihe nach:
        </p>

        <SvgShapeDemo
          code={SAME_WITH_POLYLINE}
          title="Einfach: eine polyline"
        />

        <p>So liest man das Attribut:</p>

        <SvgSource
          code={`points="20,120 70,40 120,100 180,20"
<!--      1       2      3       4   -->`}
          wrap={false}
        />

        <ul>
          <li>
            Ein Punkt besteht aus <code>x,y</code> — dazwischen ein{" "}
            <strong>Komma</strong>.
          </li>
          <li>
            Zwischen zwei Punkten steht ein <strong>Leerzeichen</strong>.
          </li>
          <li>
            Die Punkte werden <strong>in dieser Reihenfolge</strong> verbunden.
            Eine andere Reihenfolge ergibt ein anderes Bild.
          </li>
        </ul>
      </Section>

      <Section classes={`full-width ${style.block}`}>
        <h3>Ausprobieren: Spielwiese</h3>

        <p>
          Ziehe die Punkte mit der Maus (oder wähle einen Punkt an und benutze
          die Pfeiltasten). Im Code siehst du sofort, wie sich{" "}
          <code>points</code> verändert.
        </p>

        <SvgPointsPlayground shape="polyline" allowSwitch={false} />

        <ul>
          <li>Lege alle Punkte auf dieselbe Höhe. Was entsteht?</li>
          <li>
            Zeichne eine <strong>Treppe</strong> mit vier Punkten.
          </li>
          <li>Füge Punkte hinzu, bis ein regelmässiges Zickzack entsteht.</li>
        </ul>
      </Section>

      <Section classes={`full-width ${style.block} ${style.stepEnd}`}>
        <h3>Ziel treffen: Zickzack</h3>

        <SvgChallenge
          title="Aufgabe 1 — fünf Punkte"
          target={T1_TARGET}
          start={T1_START}
          height={280}
        >
          Ergänze die fehlenden Punkte, bis das rote Zickzack vollständig ist.
          Die Spitzen liegen oben bei <code>y="100"</code>, die Täler unten bei{" "}
          <code>y="180"</code>. Der Abstand zwischen zwei Punkten beträgt 40.
        </SvgChallenge>
      </Section>

      {/* ================= Schritt 2: Offen und ungefüllt ================= */}

      <StepBreak label="SCHRITT 2" />

      <Section>
        <p className={style.eyebrow}>Schritt 2 von 3</p>
        <h2>Die Falle: fill</h2>

        <p>
          Ein Linienzug ist <strong>offen</strong> — der letzte Punkt wird{" "}
          <em>nicht</em> mit dem ersten verbunden. Trotzdem versucht SVG, die
          Form zu füllen, und zwar mit Schwarz. Vergisst man{" "}
          <code>fill="none"</code>, sieht das so aus:
        </p>

        <SvgShapeDemo code={FILL_TRAP} title="Ohne fill=none wird gefüllt" />

        <p>
          Merke: Bei <code>&lt;polyline&gt;</code> gehört{" "}
          <code>fill="none"</code> praktisch immer dazu.
        </p>

        <p>
          Neu ist ausserdem <code>stroke-linejoin</code>: Es bestimmt, wie die{" "}
          <strong>Ecken</strong> aussehen, an denen zwei Strecken
          zusammentreffen — spitz (<code>miter</code>) oder rund (
          <code>round</code>).
        </p>

        <SvgShapeDemo code={JOINS} title="Spitze und runde Ecken" />
      </Section>

      <Section classes={`full-width ${style.block} ${style.stepEnd}`}>
        <h3>Ziel treffen: Das Dach reparieren</h3>

        <SvgChallenge
          title="Aufgabe 2 — fill und linejoin"
          target={T2_TARGET}
          start={T2_START}
          height={300}
        >
          Der Linienzug ist schwarz ausgefüllt und hat eine spitze Ecke. Setze{" "}
          <code>fill="none"</code> und mache die Ecke mit{" "}
          <code>stroke-linejoin="round"</code> rund.
        </SvgChallenge>
      </Section>

      {/* ================= Schritt 3: Daten zeichnen ================= */}

      <StepBreak label="SCHRITT 3" />

      <Section>
        <p className={style.eyebrow}>Schritt 3 von 3</p>
        <h2>Daten als Linie</h2>

        <p>
          Linienzüge sind nicht nur Zickzack: Mit ihnen zeichnet man{" "}
          <strong>Diagramme</strong>. Jeder Messwert wird zu einem Punkt — die{" "}
          <code>x</code>-Werte gehen gleichmässig nach rechts, die{" "}
          <code>y</code>-Werte zeigen den Wert.
        </p>

        <p>
          Achtung: Weil <code>y</code> nach <strong>unten</strong> wächst,
          bedeutet ein <em>kleiner</em> <code>y</code>-Wert einen <em>hohen</em>{" "}
          Messwert.
        </p>

        <SvgShapeDemo code={CHART} title="Liniendiagramm aus einer polyline" />
      </Section>

      <Section classes={`full-width ${style.block} ${style.stepEnd}`}>
        <h3>Ziel treffen: Diagramm ergänzen</h3>

        <SvgChallenge
          title="Aufgabe 3 — die Datenlinie"
          target={T3_TARGET}
          start={T3_START}
          height={340}
        >
          Die Achsen sind gezeichnet. Ergänze eine gelbe (<code>#fabd2f</code>)
          Linie mit <code>stroke-width="4"</code> durch diese Punkte: 30/140,
          80/100, 130/120, 180/60 und 220/40.
        </SvgChallenge>
      </Section>

      {/* ================= Frei üben ================= */}

      <StepBreak />

      <Section classes="exercise">
        <h2>Frei üben</h2>

        <p>Baue die angefangenen Dateien in der Werkstatt fertig:</p>

        <ul>
          <li>
            <code>gebirge.svg</code> — verlängere den Bergkamm bis zum rechten
            Rand (mindestens drei weitere Punkte).
          </li>
          <li>
            <code>treppe.svg</code> — zeichne eine Treppe mit vier Stufen aus{" "}
            <strong>einer einzigen</strong> polyline.
          </li>
          <li>
            <code>herzschlag.svg</code> — erfinde eine zweite Linie in einer
            anderen Farbe, die einen ruhigeren Puls zeigt.
          </li>
        </ul>
      </Section>

      <Section classes={`full-width ${style.block}`}>
        <h3>Die SVG-Werkstatt</h3>

        <SvgStudio
          storageKey="zickzacktal"
          initialFiles={STUDIO_FILES}
          height={480}
        />
      </Section>

      <section className={style.stepStart}>
        <h2>Weiter geht's</h2>
        <p>
          Zeig im{" "}
          <Link to="/fms/binaria/vektoria/zickzacktal/quiz">
            Quiz des Zickzacktals
          </Link>
          , dass du die Punkte im Griff hast.
        </p>
        <p>
          Danach geht es weiter ins{" "}
          <Link to="/fms/svg-polygon">Vieleckfeld</Link> — dort schliesst sich
          der Weg.
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
