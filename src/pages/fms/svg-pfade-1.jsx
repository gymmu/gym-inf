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
 * Vektoria, Level 9 — "Pfadgebirge".
 *
 * Das ganze Kapitel hängt an der Schildkröte: Sie bekommt die
 * **Weganweisung** `d` und läuft sie ab. Schritt für Schritt lernt sie
 * einen neuen Befehl dazu:
 *
 *   1. M und L        hingehen und Linie ziehen
 *   2. H und V        waagrecht und senkrecht
 *   3. Z              den Weg schliessen
 *   4. gross/klein    absolut und relativ  ← der wichtigste Teil
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

const ABSOLUTE_PATH = `<svg width="200" height="200">
  <path
    d="M 20 160 L 60 100 L 100 160 L 140 100 L 180 160"
    fill="none"
    stroke="#282828"
    stroke-width="5"
  />
</svg>`;

const RELATIVE_PATH = `<svg width="200" height="200">
  <path
    d="M 20 160 l 40 -60 l 40 60 l 40 -60 l 40 60"
    fill="none"
    stroke="#fb4934"
    stroke-width="5"
  />
</svg>`;

// --- Ziele für die Nachbau-Aufgaben --------------------------------------

const T1_START = `<svg width="200" height="200">
  <path
    d="M 20 180"
    fill="none"
    stroke="#fb4934"
    stroke-width="5"
  />
</svg>`;

const T1_TARGET = `<svg width="200" height="200">
  <path
    d="M 20 180 L 60 100 L 100 180 L 140 100 L 180 180"
    fill="none"
    stroke="#fb4934"
    stroke-width="5"
  />
</svg>`;

const T2_START = `<svg width="200" height="200">
  <path
    d="M 40 40 L 160 40 L 160 160 L 40 160 L 40 40"
    fill="none"
    stroke="#83a598"
    stroke-width="6"
  />
</svg>`;

const T2_TARGET = `<svg width="200" height="200">
  <path
    d="M 40 40 H 160 V 160 H 40 Z"
    fill="none"
    stroke="#83a598"
    stroke-width="6"
  />
</svg>`;

const T3_START = `<svg width="200" height="200">
  <path
    d="M 40 160 L 100 40"
    fill="#fabd2f"
    stroke="#282828"
    stroke-width="4"
  />
</svg>`;

const T3_TARGET = `<svg width="200" height="200">
  <path
    d="M 40 160 L 100 40 L 160 160 Z"
    fill="#fabd2f"
    stroke="#282828"
    stroke-width="4"
  />
</svg>`;

const T4_START = `<svg width="200" height="200">
  <path
    d="M 40 40 l 120 0"
    fill="none"
    stroke="#b8bb26"
    stroke-width="6"
  />
</svg>`;

const T4_TARGET = `<svg width="200" height="200">
  <path
    d="M 40 40 l 120 0 l 0 120 l -120 0 z"
    fill="none"
    stroke="#b8bb26"
    stroke-width="6"
  />
</svg>`;

// --- Startdateien der Werkstatt ------------------------------------------

const STUDIO_FILES = {
  "treppe.svg": `<svg width="200" height="200">
  <path
    d="M 20 180 V 150 H 60 V 120 H 100"
    fill="none"
    stroke="#282828"
    stroke-width="4"
  />
</svg>`,
  "haus.svg": `<svg width="200" height="200">
  <path
    d="M 40 180 V 100 H 160 V 180 Z"
    fill="#928374"
    stroke="#282828"
    stroke-width="4"
  />
</svg>`,
};

export default function SvgPfade1() {
  return (
    <>
      <div className="page-header">
        <h1>Pfadgebirge — die Weganweisung der Schildkröte</h1>
      </div>

      <div className={style.intro}>
        <Turtle
          className={style.introTurtle}
          size={260}
          note={["M 30 150", "L 70 60", "L 110 150", "L 170 50"]}
        />

        <div>
          <p>
            Im <strong>Pfadgebirge</strong> gibt es nur noch <em>ein</em>{" "}
            Element: <code>&lt;path&gt;</code>. Damit lässt sich jede Form
            zeichnen — aber nur, wenn man seine <strong>Weganweisung</strong>{" "}
            lesen kann. Sie steht im Attribut <code>d</code> (von{" "}
            <em>data</em>).
          </p>

          <p>
            Stell dir eine <strong>Schildkröte</strong> vor, die einen Stift
            hinter sich herzieht. Auf ihrem Zettel steht <code>d</code>: eine
            Liste von Befehlen. Jeder Befehl ist ein{" "}
            <strong>Buchstabe</strong>, dahinter stehen die{" "}
            <strong>Zahlen</strong>, die er braucht.
          </p>

          <p>
            Die Schildkröte startet immer im <strong>Ursprung 0 / 0</strong>,
            oben links. In diesem Kapitel lernt sie Schritt für Schritt einen
            Befehl nach dem anderen dazu.
          </p>
        </div>
      </div>

      <LearningGoals>
        <ul>
          <li>
            Sie können die Schreibweise von <code>d</code> erklären: Buchstabe
            (Befehl), dann die Zahlen, die dazugehören.
          </li>
          <li>
            Sie können die Befehle <code>M</code>, <code>L</code>,{" "}
            <code>H</code>, <code>V</code> und <code>Z</code> lesen und
            schreiben.
          </li>
          <li>
            Sie können erklären, was <strong>grosse</strong> (absolut) und was{" "}
            <strong>kleine</strong> Buchstaben (relativ) bedeuten, und können
            beides ineinander umschreiben.
          </li>
        </ul>
      </LearningGoals>

      {/* ================= Schritt 1: M und L ========================== */}

      <StepBreak label="SCHRITT 1" />

      <Section classes={style.stepStart}>
        <p className={style.eyebrow}>Befehl 1 und 2</p>
        <h2>
          <code>M</code> — hingehen, <code>L</code> — Linie ziehen
        </h2>

        <ul>
          <li>
            <code>M x y</code> — <strong>M</strong>oveto: Die Schildkröte{" "}
            <strong>hebt den Stift</strong> und geht zum Punkt <code>x y</code>.
            Jeder Pfad beginnt mit <code>M</code>.
          </li>
          <li>
            <code>L x y</code> — <strong>L</strong>ineto: Stift unten, gerade
            Linie bis zum Punkt <code>x y</code>.
          </li>
        </ul>

        <SvgSource
          code={`d="M 20 160 L 70 60 L 120 140"
<!--   ↑  ↑   ↑  ↑  ↑  ↑        -->
<!--   M  x   y  L  x  y        -->`}
          wrap={false}
        />

        <p>
          Die Schildkröte <strong>merkt sich</strong>, wo sie gerade steht.
          Deshalb braucht <code>L</code> nur den <strong>Zielpunkt</strong> —
          woher sie kommt, weiss sie selber.
        </p>
      </Section>

      <Section classes={`full-width ${style.block}`}>
        <h3>Schau ihr zu</h3>

        <p>
          Lass die Schildkröte loslaufen. Jedes Wegstück hat eine{" "}
          <strong>Nummer</strong> — dieselbe Nummer steht in der Liste, auf dem
          Knotenpunkt und im Code.
        </p>

        <TurtleWalk initialPath="M 30 150 L 70 60 L 110 150 L 170 50" />

        <ul>
          <li>
            Wo hebt die Schildkröte den Stift? Woran erkennst du das im Code?
          </li>
          <li>
            Klicke auf Wegstück <strong>3</strong>: Welcher Befehl gehört dazu,
            und was bedeuten seine zwei Zahlen?
          </li>
        </ul>
      </Section>

      <Section classes={`full-width ${style.block} ${style.stepEnd}`}>
        <h3>Ziel treffen</h3>

        <SvgChallenge
          title="Aufgabe 1 — M und L"
          target={T1_TARGET}
          start={T1_START}
          height={280}
        >
          Der Stift steht schon bei 20/180. Ergänze vier <code>L</code>-Befehle,
          bis das rote Zickzack vollständig ist: 60/100, 100/180, 140/100 und
          180/180.
          <br />
          <em>
            Geprüft wird das Bild, nicht der Text: Wie du den Weg aufschreibst,
            ist egal — Hauptsache, er führt zu denselben Punkten.
          </em>
        </SvgChallenge>
      </Section>

      {/* ================= Schritt 2: H und V ========================== */}

      <StepBreak label="SCHRITT 2" />

      <Section>
        <p className={style.eyebrow}>Befehl 3 und 4</p>
        <h2>
          <code>H</code> und <code>V</code> — nur geradeaus
        </h2>

        <p>
          Waagrechte und senkrechte Linien kommen so oft vor, dass es dafür
          kürzere Befehle gibt. Sie brauchen nur <strong>eine</strong> Zahl:
        </p>

        <ul>
          <li>
            <code>H x</code> — <strong>h</strong>orizontal: nur <code>x</code>{" "}
            ändert sich, <code>y</code> bleibt gleich.
          </li>
          <li>
            <code>V y</code> — <strong>v</strong>ertikal: nur <code>y</code>{" "}
            ändert sich, <code>x</code> bleibt gleich.
          </li>
        </ul>

        <TurtleWalk
          initialPath="M 30 170 H 70 V 130 H 110 V 90 H 150 V 50"
          initialColor="#83a598"
        />
      </Section>

      <Section classes={`full-width ${style.block} ${style.stepEnd}`}>
        <h3>Ziel treffen</h3>

        <SvgChallenge
          title="Aufgabe 2 — H und V"
          target={T2_TARGET}
          start={T2_START}
          height={300}
        >
          Dieses Quadrat ist umständlich geschrieben: fünf Punkte, und zum
          Schluss wird der Startpunkt nochmals angesteuert. Schreibe dieselbe
          Form mit <code>M</code>, <code>H</code>, <code>V</code>,{" "}
          <code>H</code> und <code>Z</code> — also mit deutlich weniger Zahlen
          und einer richtig geschlossenen Ecke.
        </SvgChallenge>
      </Section>

      {/* ================= Schritt 3: Z und Teilwege =================== */}

      <StepBreak label="SCHRITT 3" />

      <Section>
        <p className={style.eyebrow}>Befehl 5</p>
        <h2>
          <code>Z</code> — den Weg schliessen
        </h2>

        <ul>
          <li>
            <code>Z</code> — die Schildkröte läuft auf dem kürzesten Weg zurück
            zum letzten <code>M</code>. <code>Z</code> hat{" "}
            <strong>keine</strong> Zahlen.
          </li>
          <li>
            In einem <code>d</code> dürfen mehrere <code>M</code> stehen. Jedes{" "}
            <code>M</code> beginnt einen neuen <strong>Teilweg</strong> — die
            Schildkröte hebt dort den Stift.
          </li>
        </ul>

        <TurtleWalk
          initialPath="M 30 50 L 90 50 M 30 120 L 170 120 L 100 170 Z"
          initialColor="#d3869b"
        />
      </Section>

      <Section classes={`full-width ${style.block} ${style.stepEnd}`}>
        <h3>Ziel treffen</h3>

        <SvgChallenge
          title="Aufgabe 3 — Z"
          target={T3_TARGET}
          start={T3_START}
          height={320}
        >
          Dem gelben Dreieck fehlen die letzte Ecke (160/160) und der
          Schlussbefehl <code>Z</code>. Ergänze beides.
        </SvgChallenge>
      </Section>

      {/* ============ Kernstück: absolut oder relativ ================== */}

      <StepBreak label="DER WICHTIGSTE TEIL" />

      <Section classes={`important full-width ${style.stepStart}`}>
        <p className={style.eyebrow}>Gross oder klein</p>
        <h2>Absolut oder relativ — der entscheidende Unterschied</h2>

        <p className="lead">
          Jeden Befehl gibt es <strong>zweimal</strong>: als Grossbuchstabe und
          als Kleinbuchstabe. Die Form der Befehle bleibt gleich — aber die
          Zahlen bedeuten etwas völlig anderes.
        </p>

        <div className={style.compare}>
          <div className={style.compareAbs}>
            <h3>
              GROSS <code>M L H V</code> = absolut
            </h3>
            <p>
              Die Zahlen sind <strong>Koordinaten auf der Leinwand</strong>.
            </p>
            <p>
              <code>L 70 60</code> → «Geh zum Punkt 70 / 60.»
            </p>
            <p>
              Die Schildkröte schaut auf das <strong>Gitter</strong>: Egal, wo
              sie gerade steht, sie landet immer auf demselben Punkt.
            </p>
          </div>

          <div className={style.compareRel}>
            <h3>
              klein <code>m l h v</code> = relativ
            </h3>
            <p>
              Die Zahlen sind ein <strong>Schritt</strong> ab der aktuellen
              Stelle.
            </p>
            <p>
              <code>l 40 -60</code> → «Geh 40 nach rechts und 60 nach oben.»
            </p>
            <p>
              Die Schildkröte schaut auf <strong>sich selbst</strong>: Startet
              sie woanders, wandert die ganze Form mit.
            </p>
          </div>
        </div>

        <p>
          Negative Zahlen sind dabei ganz normal: Sie bedeuten{" "}
          <strong>nach links</strong> (bei <code>x</code>) oder{" "}
          <strong>nach oben</strong> (bei <code>y</code>). Nur <code>Z</code>{" "}
          und <code>z</code> machen dasselbe — ein Weg zurück zum Anfang braucht
          keine Zahlen.
        </p>

        <h3>Dasselbe Zickzack, zweimal geschrieben</h3>

        <SvgShapeDemo
          code={ABSOLUTE_PATH}
          title="absolut: M 20 160 L 60 100 L 100 160 L 140 100 L 180 160"
        />

        <SvgShapeDemo
          code={RELATIVE_PATH}
          title="relativ: M 20 160 l 40 -60 l 40 60 l 40 -60 l 40 60"
        />

        <p>
          Beide Bilder sind identisch. Beim absoluten Weg wächst jede Zahl mit
          der Leinwand mit; beim relativen Weg wiederholen sich{" "}
          <strong>immer dieselben zwei Schritte</strong>: «40 rechts, 60 hoch»
          und «40 rechts, 60 runter».
        </p>
      </Section>

      <Section classes={`full-width ${style.block}`}>
        <h3>Schau der Schildkröte zu — relativ unterwegs</h3>

        <p>
          Hier läuft die Schildkröte eine <strong>relative</strong> Weganweisung
          ab. Klicke ein Wegstück an und lies den Befehl als Anweisung:{" "}
          <em>so weit nach rechts/links, so weit hinauf/hinunter</em>.
        </p>

        <TurtleWalk
          initialPath="M 30 150 l 40 -60 l 40 60 l 40 -60 l 40 60"
          initialColor="#b8bb26"
        />

        <p>
          Ändere das erste <code>M</code> auf <code>M 30 100</code>: Die ganze
          Form verschiebt sich, ohne dass du eine einzige weitere Zahl anfassen
          musst. Probiere dasselbe mit der absoluten Schreibweise — dort musst
          du <em>jede</em> Zahl ändern.
        </p>
      </Section>

      <Section classes={`full-width ${style.block}`}>
        <h3>Ausprobieren: gross ↔ klein umschalten</h3>

        <p>
          Wähle unten einen Befehl im Code aus und schalte ihn zwischen{" "}
          <strong>gross</strong> und <strong>klein</strong> um. Die Form bleibt
          gleich — aber die Zahlen springen auf andere Werte.
        </p>

        <SvgPathPlayground
          initial="M 20 160 L 70 60 L 120 140 L 180 40"
          commands={["M", "L", "H", "V", "Z"]}
        />
      </Section>

      <Section classes={`full-width ${style.block} ${style.stepEnd}`}>
        <h3>Ziel treffen</h3>

        <SvgChallenge
          title="Aufgabe 4 — nur relative Befehle"
          target={T4_TARGET}
          start={T4_START}
          requireStyle="relative"
          height={300}
        >
          Zeichne das Quadrat fertig — aber <strong>nur mit kleinen</strong>{" "}
          Buchstaben. Nach der ersten Seite fehlen noch: 120 nach unten, 120
          nach links und <code>z</code>.
          <br />
          <em>
            Hier wird ausnahmsweise auch die Schreibweise geprüft: Nach dem
            ersten <code>M</code> sind nur Kleinbuchstaben erlaubt.
          </em>
        </SvgChallenge>
      </Section>

      {/* ================= Frei üben ================= */}

      <StepBreak />

      <Section classes="exercise">
        <h2>Frei üben</h2>

        <ul>
          <li>
            <code>treppe.svg</code> — führe die Treppe mit <code>H</code> und{" "}
            <code>V</code> bis in die rechte obere Ecke weiter. Schreibe sie
            danach ein zweites Mal mit <code>h</code> und <code>v</code>.
          </li>
          <li>
            <code>haus.svg</code> — ergänze Dach und Tür. Das Dach absolut, die
            Tür relativ.
          </li>
        </ul>
      </Section>

      <Section classes={`full-width ${style.block}`}>
        <h3>Die SVG-Werkstatt</h3>

        <SvgStudio
          storageKey="pfadgebirge"
          initialFiles={STUDIO_FILES}
          height={480}
        />
      </Section>

      <section className={style.stepStart}>
        <h2>Weiter geht's</h2>
        <p>
          Zeig im{" "}
          <Link to="/fms/binaria/vektoria/pfadgebirge/quiz">
            Quiz des Pfadgebirges
          </Link>
          , dass du die Pfadsprache liest.
        </p>
        <p>
          Danach steigst du hinab in die{" "}
          <Link to="/fms/svg-pfade-2">Kurventäler</Link> — dort wird aus geraden
          Wegen eine geschwungene Linie.
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
