import { Link } from "react-router-dom";
import SvgChallenge from "@/components/gym/SvgChallenge/SvgChallenge";
import { SvgSource } from "@/components/gym/SvgCode/SvgCode";
import SvgPathPlayground from "@/components/gym/SvgPathPlayground/SvgPathPlayground";
import SvgShapeDemo from "@/components/gym/SvgShapeDemo/SvgShapeDemo";
import SvgStudio from "@/components/gym/SvgStudio/SvgStudio";
import Turtle from "@/components/gym/Turtle/Turtle";
import TurtleWalk from "@/components/gym/TurtleWalk/TurtleWalk";
import LearningGoals from "@/components/LearningGoals.jsx";
import Section from "@/components/Section.jsx";
import style from "./SvgKreis.module.css";

/**
 * Vektoria, Level 10 — "Kurventäler".
 *
 * Auch dieses Kapitel hängt an Pfadi, der Schildkröte: Sie kennt aus dem
 * Pfadgebirge schon `M`, `L`, `H`, `V` und `Z` — und lernt hier, ihre
 * Wege zu schwingen:
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

// --- Beispiele für Pfadis Werkbank ---------------------------------------

const WALK_EXAMPLES = [
  { label: "Hügel (Q)", d: "M 20 150 Q 100 20 180 150" },
  { label: "Welle (q)", d: "M 20 100 q 40 -50 80 0 q 40 50 80 0" },
  { label: "S-Kurve (C)", d: "M 20 100 C 60 20 140 180 180 100" },
  { label: "Bogen (A)", d: "M 40 140 A 60 60 0 0 1 160 140" },
  { label: "Blatt", d: "M 40 160 Q 40 40 160 40 Q 60 140 40 160 Z" },
];

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
        <h1>Kurventäler — Pfadi lernt schwingen</h1>
      </div>

      <div className={style.intro}>
        <Turtle
          className={style.introTurtle}
          size={260}
          mood="surprised"
          note={["M 30 150", "Q 100 30 170 150"]}
        />

        <div>
          <p className="lead">
            <strong>Pfadi</strong> steigt vom Pfadgebirge hinab in die{" "}
            <strong>Kurventäler</strong>.
          </p>

          <p>
            Bisher ist sie nur <strong>geradeaus</strong> gelaufen:{" "}
            <code>M</code>, <code>L</code>, <code>H</code>, <code>V</code>,{" "}
            <code>Z</code>. Hier unten gibt es keine Ecken mehr — hier{" "}
            <strong>schwingen</strong> die Wege.
          </p>

          <p>
            Die Sprache auf ihrem Zettel bleibt genau dieselbe:{" "}
            <strong>Buchstabe, dann die Zahlen</strong>, die er braucht. Es
            kommen nur drei neue Buchstaben dazu: <code>Q</code>, <code>C</code>{" "}
            und <code>A</code>. Jeder braucht eine feste Anzahl Zahlen in einer
            festen Reihenfolge — und der Endpunkt steht immer zuhinterst.
          </p>
        </div>
      </div>

      <LearningGoals>
        <ul>
          <li>
            Sie können die Befehle <code>Q</code>, <code>C</code> und{" "}
            <code>A</code> lesen und wissen, wie viele Zahlen jeder braucht.
          </li>
          <li>
            Sie können erklären, was ein <strong>Kontrollpunkt</strong> (Griff)
            ist und wie er Pfadis Weg zu sich zieht.
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
        Jeder Schritt läuft gleich ab: <strong>erklären</strong> →{" "}
        <strong>Pfadi zuschauen</strong> → <strong>ein Ziel treffen</strong>.
      </p>

      {/* ================= Schritt 1: Q ================= */}

      <StepBreak label="SCHRITT 1" />

      <Section classes={style.stepStart}>
        <p className={style.eyebrow}>Befehl 6</p>
        <h2>
          <code>Q</code> — eine Kurve mit einem Griff
        </h2>

        <p>
          Für <code>L</code> braucht Pfadi nur den Zielpunkt — mehr gibt es bei
          einer Geraden nicht zu wissen. Für eine Kurve braucht sie eine Angabe
          mehr: <strong>wohin sich der Weg wölbt</strong>. Dafür schreibt man
          einen <strong>Kontrollpunkt</strong> auf den Zettel — einen Griff, der
          Pfadis Weg zu sich hinzieht.
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
          der Griff, dann der Endpunkt. Links läuft Pfadi geradeaus, rechts
          dieselbe Strecke als Kurve:
        </p>

        <SvgShapeDemo code={LINE_VS_Q} title="L gegen Q" />

        <p>
          Der Griff liegt <em>nicht</em> auf dem Weg: Pfadi läuft nie über ihn
          hinweg. Gestrichelt siehst du, wo er steckt — die Kurve wird zu ihm
          hingezogen, berührt ihn aber nie:
        </p>

        <SvgShapeDemo code={Q_WITH_HELPERS} title="Der Griff von Q" />
      </Section>

      <Section classes={`full-width ${style.block}`}>
        <h3>Schau Pfadi zu — eine Kurve laufen</h3>

        <p>
          Lass Pfadi den Hügel ablaufen. Das Wegstück <strong>1</strong> ist
          jetzt eine Kurve: Pfadi dreht sich während des Laufens mit — und
          landet trotzdem genau auf dem Endpunkt, der{" "}
          <strong>zuhinterst</strong> im Befehl steht.
        </p>

        <TurtleWalk
          initialPath="M 20 150 Q 100 20 180 150"
          initialColor="#b8bb26"
          examples={WALK_EXAMPLES}
        />

        <p>
          Der <strong>eckige</strong> Punkt ist der Griff: Die gestrichelte
          Linie geht vom Start über ihn zum Ziel — Pfadi selbst läuft aber{" "}
          <em>innerhalb</em> dieses Knicks, sie berührt den Griff nie.
        </p>

        <ul>
          <li>
            Klicke auf das Wegstück mit <code>Q</code>: Welche zwei Zahlen sind
            der Griff, welche zwei der Endpunkt?
          </li>
          <li>
            Schreib die Kurve selber um (<em>✎ selber schreiben</em>) und setz
            den Griff auf <code>Q 100 180 180 150</code>. In welche Richtung
            wölbt sich Pfadis Weg jetzt?
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
        <p className={style.eyebrow}>Befehl 7</p>
        <h2>
          <code>C</code> — eine Kurve mit zwei Griffen
        </h2>

        <p>
          Mit nur einem Griff kann Pfadi keine S-Kurve laufen: Der Weg wölbt
          sich immer nur auf eine Seite. Darum gibt es <code>C</code> (
          <strong>c</strong>urveto) mit <strong>zwei</strong> Griffen — einer
          zieht am Anfang, einer am Ende:
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
          Liegen die Griffe auf verschiedenen Seiten, läuft Pfadi eine S-Kurve —
          damit bauen Grafikprogramme praktisch jede geschwungene Form:
        </p>

        <SvgShapeDemo code={S_CURVE} title="S-Kurve mit C" />
      </Section>

      <Section classes={`full-width ${style.block}`}>
        <h3>Schau Pfadi zu — die S-Kurve</h3>

        <p>
          Hier läuft Pfadi eine einzige <code>C</code>-Kurve: ein Wegstück, aber
          zwei Wölbungen. Jetzt siehst du <strong>zwei Griffe</strong>:{" "}
          <strong>1</strong> hängt am Startpunkt und zieht Pfadi nach oben weg,{" "}
          <strong>2</strong> hängt am Endpunkt und zieht sie von unten herein.
        </p>

        <TurtleWalk
          initialPath="M 20 100 C 60 20 140 180 180 100"
          initialColor="#fe8019"
          examples={WALK_EXAMPLES}
        />
      </Section>

      <Section classes={`full-width ${style.block}`}>
        <h3>Gross und klein gilt auch hier</h3>

        <p>
          Kurven kennen ebenfalls <strong>Kleinbuchstaben</strong>: Dann zählen{" "}
          <em>alle</em> Zahlen — auch die Griffe — ab dem Punkt, an dem Pfadi
          gerade steht. Diese Welle besteht aus vier{" "}
          <strong>identisch geschriebenen</strong> <code>q</code>-Befehlen:
        </p>

        <SvgShapeDemo code={WAVE} title="Welle aus relativen q-Befehlen" />

        <p>
          Pfadi muss sich dabei nur zwei Anweisungen merken und sie abwechselnd
          wiederholen — «25 rechts, 40 hoch, dann 50 rechts» und dasselbe nach
          unten:
        </p>

        <TurtleWalk
          initialPath="M 20 100 q 25 -40 50 0 q 25 40 50 0 q 25 -40 50 0"
          initialColor="#83a598"
          examples={WALK_EXAMPLES}
        />
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
        <p className={style.eyebrow}>Befehl 8</p>
        <h2>
          <code>A</code> — der Bogen mit sieben Zahlen
        </h2>

        <p>
          Mit <code>A</code> (<strong>a</strong>rc) läuft Pfadi ein Stück einer
          Ellipse ab. Es ist der Befehl mit den meisten Zahlen — aber jede hat
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
            <code>rx</code>, <code>ry</code> — die beiden Radien der Ellipse,
            auf der Pfadi läuft.
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
          Schalter sagen Pfadi, welchen davon sie nehmen soll:
        </p>

        <SvgShapeDemo
          code={ARC_FLAGS}
          title="Dieselben Punkte, andere Schalter"
        />

        <p>
          Merkhilfe für Pfadis ganze Sprache: Der <strong>Buchstabe</strong>{" "}
          sagt <em>was</em>, die <strong>Zahlen</strong> sagen{" "}
          <em>wie viel</em> — in fester Reihenfolge, und der Endpunkt steht
          immer zuhinterst.
        </p>
      </Section>

      <Section classes={`full-width ${style.block}`}>
        <h3>Schau Pfadi zu — auf dem Bogen</h3>

        <p>
          Hier läuft Pfadi einen Bogen mit <code>rx = ry = 60</code>. Statt
          Griffen ist gestrichelt die ganze <strong>Ellipse</strong> angedeutet,
          auf der ihr Bogen liegt. Ändere die
          beiden Schalter (<em>✎ selber schreiben</em>): Mit{" "}
          <code>A 60 60 0 0 0 160 140</code> läuft sie dieselbe Strecke auf der
          anderen Seite.
        </p>

        <TurtleWalk
          initialPath="M 40 140 A 60 60 0 0 1 160 140"
          initialColor="#fb4934"
          examples={WALK_EXAMPLES}
        />
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
          Danach wartet der <Link to="/fms/svg-pfade-boss">Pfadmeister</Link>{" "}
          mit seinem Labyrinth — es prüft alles, was Pfadi im{" "}
          <Link to="/fms/svg-pfade-1">Pfadgebirge</Link> und in den Kurventälern
          gelernt hat.
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
