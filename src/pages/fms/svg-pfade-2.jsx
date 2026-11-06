import { Link } from "react-router-dom";
import SvgChallenge from "@/components/gym/SvgChallenge/SvgChallenge";
import { SvgSource } from "@/components/gym/SvgCode/SvgCode";
import SvgPathPlayground from "@/components/gym/SvgPathPlayground/SvgPathPlayground";
import SvgShapeDemo from "@/components/gym/SvgShapeDemo/SvgShapeDemo";
import SvgStudio from "@/components/gym/SvgStudio/SvgStudio";
import LearningGoals from "@/components/LearningGoals.jsx";
import Section from "@/components/Section.jsx";
import style from "./SvgKreis.module.css";

/**
 * Vektoria, Level 10 — "Kurventäler".
 *
 * Drei Schritte, wieder ganz auf die Syntax ausgerichtet:
 *
 *   1. Q — eine Kurve mit einem Griff
 *   2. C — eine Kurve mit zwei Griffen
 *   3. A — der Bogen und seine sieben Zahlen
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

const LINE_VS_Q = `<svg width="300" height="160">
  <path
    d="M 20 130 L 130 130"
    fill="none"
    stroke="#928374"
    stroke-width="4"
  />
  <path
    d="M 170 130 Q 225 20 280 130"
    fill="none"
    stroke="#b8bb26"
    stroke-width="4"
  />
</svg>`;

const Q_WITH_HELPERS = `<svg width="240" height="160">
  <path
    d="M 20 130 Q 120 10 220 130"
    fill="none"
    stroke="#b8bb26"
    stroke-width="4"
  />
  <path
    d="M 20 130 L 120 10 L 220 130"
    fill="none"
    stroke="#d3869b"
    stroke-width="1"
    stroke-dasharray="4 4"
  />
  <circle cx="120" cy="10" r="4" fill="#d3869b" />
</svg>`;

const C_WITH_HELPERS = `<svg width="240" height="180">
  <path
    d="M 20 150 C 20 30 220 30 220 150"
    fill="none"
    stroke="#83a598"
    stroke-width="4"
  />
  <path
    d="M 20 150 L 20 30"
    stroke="#d3869b"
    stroke-width="1"
    stroke-dasharray="4 4"
  />
  <path
    d="M 220 150 L 220 30"
    stroke="#d3869b"
    stroke-width="1"
    stroke-dasharray="4 4"
  />
  <circle cx="20" cy="30" r="4" fill="#d3869b" />
  <circle cx="220" cy="30" r="4" fill="#d3869b" />
</svg>`;

const S_CURVE = `<svg width="240" height="160">
  <path
    d="M 20 80 C 80 10 160 150 220 80"
    fill="none"
    stroke="#fe8019"
    stroke-width="5"
  />
</svg>`;

const ARC_FLAGS = `<svg width="300" height="180">
  <path
    d="M 40 120 A 60 60 0 0 1 160 120"
    fill="none"
    stroke="#fb4934"
    stroke-width="4"
  />
  <path
    d="M 40 120 A 60 60 0 0 0 160 120"
    fill="none"
    stroke="#83a598"
    stroke-width="4"
  />
  <path
    d="M 180 120 A 60 60 0 1 1 280 120"
    fill="none"
    stroke="#b8bb26"
    stroke-width="4"
  />
</svg>`;

const WAVE = `<svg width="300" height="120">
  <path
    d="M 0 60 q 25 -40 50 0 q 25 40 50 0 q 25 -40 50 0 q 25 40 50 0"
    fill="none"
    stroke="#83a598"
    stroke-width="4"
  />
</svg>`;

// --- Ziele für die Nachbau-Aufgaben --------------------------------------

const T1_START = `<svg width="200" height="200">
  <path
    d="M 20 160 L 180 160"
    fill="none"
    stroke="#b8bb26"
    stroke-width="5"
  />
</svg>`;

const T1_TARGET = `<svg width="200" height="200">
  <path
    d="M 20 160 Q 100 40 180 160"
    fill="none"
    stroke="#b8bb26"
    stroke-width="5"
  />
</svg>`;

const T2_START = `<svg width="200" height="200">
  <path
    d="M 20 100 C 20 100 20 100 180 100"
    fill="none"
    stroke="#fe8019"
    stroke-width="5"
  />
</svg>`;

const T2_TARGET = `<svg width="200" height="200">
  <path
    d="M 20 100 C 60 20 140 180 180 100"
    fill="none"
    stroke="#fe8019"
    stroke-width="5"
  />
</svg>`;

const T3_START = `<svg width="200" height="200">
  <path
    d="M 40 140 L 160 140"
    fill="none"
    stroke="#fb4934"
    stroke-width="6"
  />
</svg>`;

const T3_TARGET = `<svg width="200" height="200">
  <path
    d="M 40 140 A 60 60 0 0 1 160 140"
    fill="none"
    stroke="#fb4934"
    stroke-width="6"
  />
</svg>`;

// --- Startdateien der Werkstatt ------------------------------------------

const STUDIO_FILES = {
  "welle.svg": `<svg width="300" height="140">
  <path
    d="M 0 70 q 25 -40 50 0 q 25 40 50 0"
    fill="none"
    stroke="#83a598"
    stroke-width="4"
  />
</svg>`,
  "blatt.svg": `<svg width="200" height="200">
  <path
    d="M 40 160 Q 40 40 160 40"
    fill="#b8bb26"
    stroke="#282828"
    stroke-width="3"
  />
</svg>`,
  "herz.svg": `<svg width="200" height="200">
  <path
    d="M 100 170 C 20 110 40 40 100 70"
    fill="#fb4934"
    stroke="none"
  />
</svg>`,
};

export default function SvgPfade2() {
  return (
    <>
      <div className="page-header">
        <h1>Kurventäler — Kurven mit &lt;path&gt;</h1>
      </div>

      <p>
        Im Pfadgebirge waren alle Wege gerade. In den{" "}
        <strong>Kurventälern</strong> schwingen sie. Die Sprache bleibt dieselbe
        — es kommen nur neue <strong>Buchstaben</strong> dazu: <code>Q</code>,{" "}
        <code>C</code> und <code>A</code>. Und wie immer gilt: Hinter jedem
        Buchstaben steht eine feste Anzahl Zahlen, in einer festen Reihenfolge.
      </p>

      <LearningGoals>
        <ul>
          <li>
            Sie können die Befehle <code>Q</code>, <code>C</code> und{" "}
            <code>A</code> lesen und wissen, wie viele Zahlen jeder braucht.
          </li>
          <li>
            Sie können erklären, was ein <strong>Kontrollpunkt</strong> (Griff)
            ist und wie er die Kurve zieht.
          </li>
          <li>
            Sie können die sieben Zahlen von <code>A</code> benennen — vor allem
            die beiden Schalter <code>0</code> / <code>1</code>.
          </li>
          <li>
            Sie können Kurven auch relativ schreiben (<code>q</code>,{" "}
            <code>c</code>, <code>a</code>).
          </li>
        </ul>
      </LearningGoals>

      <p className="lead">
        Drei Schritte: <strong>erklären</strong> → <strong>ausprobieren</strong>{" "}
        → <strong>ein Ziel treffen</strong>.
      </p>

      {/* ================= Schritt 1: Q ================= */}

      <StepBreak label="SCHRITT 1" />

      <Section classes={style.stepStart}>
        <p className={style.eyebrow}>Schritt 1 von 3</p>
        <h2>Q — eine Kurve mit einem Griff</h2>

        <p>
          <code>L</code> braucht nur den Zielpunkt. Eine Kurve braucht mehr: Sie
          muss wissen, <strong>wohin sie sich wölbt</strong>. Dafür gibt man
          zusätzlich einen <strong>Kontrollpunkt</strong> an — einen Griff, der
          die Linie zu sich zieht.
        </p>

        <SvgSource
          code={`d="M 170 130 Q 225 20 280 130"
<!--              ↑   ↑   ↑   ↑  -->
<!--             x1  y1   x   y  -->
<!--           Kontroll-  Ziel-  -->
<!--            punkt     punkt  -->`}
          wrap={false}
        />

        <p>
          <code>Q x1 y1 x y</code> — also <strong>vier</strong> Zahlen: zuerst
          der Griff, dann der Endpunkt. Links eine gerade Linie, rechts dieselbe
          Strecke als Kurve:
        </p>

        <SvgShapeDemo code={LINE_VS_Q} title="L gegen Q" />

        <p>
          Der Griff liegt <em>nicht</em> auf der Kurve. Gestrichelt siehst du
          hier, wo er steckt — die Kurve wird zu ihm hingezogen, berührt ihn
          aber nie:
        </p>

        <SvgShapeDemo code={Q_WITH_HELPERS} title="Der Griff von Q" />
      </Section>

      <Section classes={`full-width ${style.block}`}>
        <h3>Ausprobieren: die Pfad-Werkbank</h3>

        <p>
          Die Werkbank kennst du aus dem Pfadgebirge — jetzt mit Kurven. Die{" "}
          <strong>eckigen</strong> Punkte sind die Griffe, die{" "}
          <strong>runden</strong> die Endpunkte. Verschiebe sie und beobachte,
          welche Zahl im Code sich dabei ändert.
        </p>

        <SvgPathPlayground
          initial="M 20 150 Q 100 20 180 150"
          commands={["M", "L", "Q", "C", "A", "Z"]}
        />

        <ul>
          <li>
            Zieh den Griff von <code>Q</code> weit nach oben. Welche zwei Zahlen
            ändern sich?
          </li>
          <li>
            Füge ein <code>C</code> ein: Wie viele Griffe hat es, wie viele
            Zahlen?
          </li>
          <li>
            Füge ein <code>A</code> ein und spiele mit den beiden Schaltern{" "}
            <code>0</code> / <code>1</code>.
          </li>
          <li>
            Schalte eine Kurve auf <strong>klein</strong>: Alle Zahlen zählen
            dann ab dem Startpunkt der Kurve.
          </li>
        </ul>
      </Section>

      <Section classes={`full-width ${style.block} ${style.stepEnd}`}>
        <h3>Ziel treffen: aus gerade wird rund</h3>

        <SvgChallenge
          title="Aufgabe 1 — Q statt L"
          target={T1_TARGET}
          start={T1_START}
          height={280}
        >
          Ersetze den <code>L</code>-Befehl durch ein <code>Q</code>. Der
          Endpunkt bleibt 180/160, der Griff liegt bei 100/40. Denk daran:{" "}
          <code>Q</code> braucht vier Zahlen.
        </SvgChallenge>
      </Section>

      {/* ================= Schritt 2: C ================= */}

      <StepBreak label="SCHRITT 2" />

      <Section>
        <p className={style.eyebrow}>Schritt 2 von 3</p>
        <h2>C — eine Kurve mit zwei Griffen</h2>

        <p>
          Mit nur einem Griff lässt sich keine S-Kurve bauen. Darum gibt es{" "}
          <code>C</code> (<strong>c</strong>urveto) mit <strong>zwei</strong>{" "}
          Griffen — einer zieht am Anfang, einer am Ende:
        </p>

        <SvgSource
          code={`d="M 20 150 C 20 30 220 30 220 150"
<!--             ↑  ↑   ↑  ↑   ↑   ↑ -->
<!--            x1 y1  x2 y2   x   y -->
<!--          Griff 1  Griff 2  Ziel -->`}
          wrap={false}
        />

        <p>
          <code>C x1 y1 x2 y2 x y</code> — also <strong>sechs</strong> Zahlen.
          Die Reihenfolge ist immer gleich: erster Griff, zweiter Griff,
          Endpunkt.
        </p>

        <SvgShapeDemo code={C_WITH_HELPERS} title="Die zwei Griffe von C" />

        <p>
          Liegen die Griffe auf verschiedenen Seiten, entsteht eine S-Kurve —
          damit bauen Grafikprogramme praktisch jede geschwungene Form:
        </p>

        <SvgShapeDemo code={S_CURVE} title="S-Kurve mit C" />

        <p>
          Und auch hier funktionieren Kleinbuchstaben. Diese Welle besteht aus
          vier identisch geschriebenen <code>q</code>-Befehlen — jeder macht
          einen Schritt von 50 nach rechts:
        </p>

        <SvgShapeDemo code={WAVE} title="Welle aus relativen q-Befehlen" />
      </Section>

      <Section classes={`full-width ${style.block} ${style.stepEnd}`}>
        <h3>Ziel treffen: die S-Kurve</h3>

        <SvgChallenge
          title="Aufgabe 2 — sechs Zahlen für C"
          target={T2_TARGET}
          start={T2_START}
          height={300}
        >
          Der <code>C</code>-Befehl steht schon da, aber die Griffe liegen noch
          auf dem Startpunkt. Setze den ersten Griff auf 60/20, den zweiten auf
          140/180 — der Endpunkt 180/100 bleibt.
        </SvgChallenge>
      </Section>

      {/* ================= Schritt 3: A ================= */}

      <StepBreak label="SCHRITT 3" />

      <Section>
        <p className={style.eyebrow}>Schritt 3 von 3</p>
        <h2>A — der Bogen mit sieben Zahlen</h2>

        <p>
          <code>A</code> (<strong>a</strong>rc) zeichnet ein Stück einer
          Ellipse. Es ist der Befehl mit den meisten Zahlen — aber jede hat
          ihren festen Platz:
        </p>

        <SvgSource
          code={`d="M 40 120 A 60 60 0 0 1 160 120"
<!--              ↑  ↑  ↑ ↑ ↑   ↑   ↑ -->
<!--             rx ry  ∠ g s    x   y -->`}
          wrap={false}
        />

        <ul>
          <li>
            <code>rx</code>, <code>ry</code> — die beiden Radien der Ellipse.
          </li>
          <li>
            <code>∠</code> (Rotation) — wie stark die Ellipse gedreht ist, in
            Grad. Bei einem Kreis (<code>rx == ry</code>) ist das egal:{" "}
            <code>0</code>.
          </li>
          <li>
            <code>g</code> (large-arc-flag) — <code>0</code> = der kurze Bogen,{" "}
            <code>1</code> = der lange Bogen.
          </li>
          <li>
            <code>s</code> (sweep-flag) — <code>0</code> = gegen den
            Uhrzeigersinn, <code>1</code> = im Uhrzeigersinn.
          </li>
          <li>
            <code>x</code>, <code>y</code> — wie immer zum Schluss der Endpunkt.
          </li>
        </ul>

        <p>
          Zwischen zwei Punkten gibt es vier mögliche Bögen — die beiden
          Schalter wählen einen davon aus:
        </p>

        <SvgShapeDemo
          code={ARC_FLAGS}
          title="Dieselben Punkte, andere Schalter"
        />

        <p>
          Merkhilfe für die ganze Pfadsprache: <strong>Buchstabe</strong> sagt{" "}
          <em>was</em>, die <strong>Zahlen</strong> sagen <em>wie viel</em> — in
          fester Reihenfolge, und der Endpunkt steht immer zuhinterst.
        </p>
      </Section>

      <Section classes={`full-width ${style.block} ${style.stepEnd}`}>
        <h3>Ziel treffen: der Bogen</h3>

        <SvgChallenge
          title="Aufgabe 3 — sieben Zahlen für A"
          target={T3_TARGET}
          start={T3_START}
          height={320}
        >
          Mach aus der geraden Linie einen Bogen: Ersetze <code>L</code> durch{" "}
          <code>A</code> mit den Radien 60 und 60, Rotation <code>0</code>,
          large-arc <code>0</code>, sweep <code>1</code> und dem Endpunkt
          160/140.
        </SvgChallenge>
      </Section>

      {/* ================= Frei üben ================= */}

      <StepBreak />

      <Section classes="exercise">
        <h2>Frei üben</h2>

        <p>Baue die angefangenen Dateien in der Werkstatt fertig:</p>

        <ul>
          <li>
            <code>welle.svg</code> — verlängere die Welle bis zum rechten Rand.
            Jeder Bogen ist genau gleich geschrieben.
          </li>
          <li>
            <code>blatt.svg</code> — ergänze die zweite Hälfte des Blatts mit
            einem weiteren <code>Q</code> und schliesse den Weg mit{" "}
            <code>Z</code>.
          </li>
          <li>
            <code>herz.svg</code> — die linke Hälfte steht. Spiegle sie mit
            einem zweiten <code>C</code> und schliesse die Form.
          </li>
        </ul>
      </Section>

      <Section classes={`full-width ${style.block}`}>
        <h3>Die SVG-Werkstatt</h3>

        <SvgStudio
          storageKey="kurventaeler"
          initialFiles={STUDIO_FILES}
          height={480}
        />
      </Section>

      <section className={style.stepStart}>
        <h2>Weiter geht's</h2>
        <p>
          Zeig im{" "}
          <Link to="/fms/binaria/vektoria/kurventaeler/quiz">
            Quiz der Kurventäler
          </Link>
          , dass du die Kurvenbefehle liest.
        </p>
        <p>
          Danach wartet der <Link to="/fms/svg-pfade-boss">Pfadwächter</Link> —
          er prüft alles aus dem Pfadgebirge und den Kurventälern.
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
