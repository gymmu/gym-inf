import { Link } from "react-router-dom";
import Biit from "@/components/gym/Biit/Biit";
import SvgShapeDemo from "@/components/gym/SvgShapeDemo/SvgShapeDemo";
import StoryPart from "@/components/StoryPart";

/**
 * Vektoria, Level 1 — "Tor von Vektoria".
 *
 * Biit verlässt Byteburg und betritt das Land der Vektorgrafiken. Jede
 * Station zeigt eine SVG-Form zusammen mit dem Code, der sie erzeugt.
 */

const SHAPES = {
  canvas: `<svg width="180" height="140">
</svg>`,

  circle: `<svg width="180" height="140">
  <circle cx="90" cy="70" r="50" fill="#b8bb26" />
</svg>`,

  ellipse: `<svg width="180" height="140">
  <ellipse cx="90" cy="70" rx="70" ry="35" fill="#8ec07c" />
</svg>`,

  rect: `<svg width="180" height="140">
  <rect x="30" y="30" width="120" height="80" fill="#83a598" />
</svg>`,

  roundedRect: `<svg width="180" height="140">
  <rect x="30" y="30" width="120" height="80" rx="20" fill="#d3869b" />
</svg>`,

  line: `<svg width="180" height="140">
  <line x1="20" y1="120" x2="160" y2="20" stroke="#fb4934" stroke-width="6" />
</svg>`,

  polyline: `<svg width="180" height="140">
  <polyline points="20,110 60,40 100,90 160,20" fill="none" stroke="#fabd2f" stroke-width="5" />
</svg>`,

  polygon: `<svg width="180" height="140">
  <polygon points="90,15 165,125 15,125" fill="#fe8019" />
</svg>`,

  fillStroke: `<svg width="180" height="140">
  <rect x="30" y="30" width="120" height="80" fill="#282828" stroke="#fabd2f" stroke-width="8" />
</svg>`,

  text: `<svg width="180" height="140">
  <text x="20" y="80" font-size="28" fill="#8ec07c">Vektoria</text>
</svg>`,

  path: `<svg width="180" height="140">
  <path d="M 20 110 L 90 20 L 160 110 Z" fill="none" stroke="#d3869b" stroke-width="6" />
</svg>`,

  scene: `<svg width="180" height="140">
  <rect x="0" y="95" width="180" height="45" fill="#b8bb26" />
  <circle cx="145" cy="35" r="20" fill="#fabd2f" />
  <polygon points="60,25 110,95 10,95" fill="#8ec07c" />
  <rect x="120" y="60" width="40" height="35" fill="#fe8019" />
</svg>`,
};

/** Kleine Helfer, damit StoryPart die Demos direkt rendern kann. */
const demo = (key, props = {}) => {
  const Demo = (rest) => (
    <SvgShapeDemo code={SHAPES[key]} {...props} {...rest} />
  );
  return Demo;
};

const CanvasDemo = demo("canvas", {
  title: "Die Leinwand",
  caption:
    "Ohne Inhalt bleibt die Leinwand leer — aber sie hat schon eine Grösse.",
});
const CircleDemo = demo("circle", { title: "<circle> — Kreis" });
const EllipseDemo = demo("ellipse", { title: "<ellipse> — Ellipse" });
const RectDemo = demo("rect", { title: "<rect> — Rechteck" });
const RoundedRectDemo = demo("roundedRect", {
  title: "<rect rx> — runde Ecken",
});
const LineDemo = demo("line", { title: "<line> — Linie" });
const PolylineDemo = demo("polyline", { title: "<polyline> — Linienzug" });
const PolygonDemo = demo("polygon", { title: "<polygon> — Vieleck" });
const FillStrokeDemo = demo("fillStroke", { title: "fill und stroke" });
const TextDemo = demo("text", { title: "<text> — Schrift" });
const PathDemo = demo("path", { title: "<path> — der Pfad" });
const SceneDemo = demo("scene", { title: "Alles zusammen" });

const BiitHappy = (props) => <Biit value="1" {...props} />;

export default function SvgStory() {
  return (
    <>
      <div className="page-header">
        <h1>Willkommen in Vektoria</h1>
      </div>

      <StoryPart component={BiitHappy} imagePosition="left">
        <p>
          Biit hat Byteburg verlassen. Hinter der <strong>Pixelküste</strong>{" "}
          liegt ein neues Land: <strong>Vektoria</strong>. Hier gibt es keine
          Raster aus Millionen von Pixeln mehr. Hier werden Bilder{" "}
          <strong>beschrieben</strong> — mit Formen, Zahlen und Farben.
        </p>
        <p>
          Die Sprache, in der die Bewohner von Vektoria reden, heisst{" "}
          <strong>SVG</strong>: <em>s</em>calable <em>v</em>ector <em>g</em>
          raphics — also «beliebig vergrösserbare Vektorgrafik». Zoomt man in
          ein SVG hinein, wird nichts unscharf: Die Formen werden einfach neu
          gezeichnet.
        </p>
      </StoryPart>

      <StoryPart component={CanvasDemo} imagePosition="right" wide>
        <p>
          Am Tor von Vektoria bekommt Biit zuerst eine <strong>Leinwand</strong>
          . Jedes SVG beginnt mit dem Wurzelelement <code>&lt;svg&gt;</code>.
          Darin steht, wie breit (<code>width</code>) und wie hoch (
          <code>height</code>) die Leinwand ist.
        </p>
        <p>
          Wichtig: Der Nullpunkt liegt <strong>oben links</strong>.{" "}
          <code>x</code> wächst nach rechts, <code>y</code> nach{" "}
          <strong>unten</strong> — anders als im Mathematikunterricht.
        </p>
      </StoryPart>

      <StoryPart component={CircleDemo} imagePosition="left" wide>
        <p>
          Die erste Bewohnerin, die Biit trifft, ist der <strong>Kreis</strong>.
          Er beschreibt sich mit drei Zahlen: wo sein Mittelpunkt liegt (
          <code>cx</code> und <code>cy</code>) und wie gross sein Radius ist (
          <code>r</code>).
        </p>
        <p>
          Ein Element ohne Inhalt schreibt man in der Kurzform{" "}
          <code>&lt;circle ... /&gt;</code>. Die Eigenschaften stehen als{" "}
          <strong>Attribute</strong> im Element — immer in der Form{" "}
          <code>name="wert"</code>.
        </p>
      </StoryPart>

      <StoryPart component={EllipseDemo} imagePosition="right" wide>
        <p>
          Die Ellipse ist die Cousine des Kreises. Sie hat <strong>zwei</strong>{" "}
          Radien: <code>rx</code> nach links und rechts, <code>ry</code> nach
          oben und unten. Sind beide gleich gross, ist sie wieder ein Kreis.
        </p>
      </StoryPart>

      <StoryPart component={RectDemo} imagePosition="left" wide>
        <p>
          Das <strong>Rechteck</strong> beschreibt sich nicht über die Mitte,
          sondern über seine <strong>obere linke Ecke</strong> (<code>x</code>,{" "}
          <code>y</code>) sowie <code>width</code> und <code>height</code>.
        </p>
      </StoryPart>

      <StoryPart component={RoundedRectDemo} imagePosition="right" wide>
        <p>
          Mit dem Attribut <code>rx</code> (und optional <code>ry</code>)
          bekommt das Rechteck <strong>runde Ecken</strong>. Je grösser der
          Wert, desto runder.
        </p>
      </StoryPart>

      <StoryPart component={LineDemo} imagePosition="left" wide>
        <p>
          Die <strong>Linie</strong> verbindet zwei Punkte: Start (
          <code>x1</code>, <code>y1</code>) und Ziel (<code>x2</code>,{" "}
          <code>y2</code>). Achtung: Eine Linie hat keine Fläche. Ohne{" "}
          <code>stroke</code> sieht man sie nicht!
        </p>
      </StoryPart>

      <StoryPart component={PolylineDemo} imagePosition="right" wide>
        <p>
          Der <strong>Linienzug</strong> verbindet beliebig viele Punkte. Alle
          Punkte stehen in einem einzigen Attribut <code>points</code>, jeweils
          als Paar <code>x,y</code>. Mit <code>fill="none"</code> verhindert
          man, dass die Fläche dazwischen gefüllt wird.
        </p>
      </StoryPart>

      <StoryPart component={PolygonDemo} imagePosition="left" wide>
        <p>
          Das <strong>Vieleck</strong> funktioniert wie der Linienzug — nur
          schliesst es sich automatisch: Der letzte Punkt wird mit dem ersten
          verbunden. So entstehen Dreiecke, Sterne oder Pfeile.
        </p>
      </StoryPart>

      <StoryPart component={FillStrokeDemo} imagePosition="right" wide>
        <p>
          Zwei Attribute kennt in Vektoria <strong>jede</strong> Form:{" "}
          <code>fill</code> ist die Füllfarbe, <code>stroke</code> die
          Randfarbe. Wie dick der Rand ist, legt <code>stroke-width</code> fest.
        </p>
      </StoryPart>

      <StoryPart component={TextDemo} imagePosition="left" wide>
        <p>
          Auch Schrift ist in Vektoria eine Form. Bei <code>&lt;text&gt;</code>{" "}
          steht der Inhalt <strong>zwischen</strong> den Tags — deshalb gibt es
          hier keine Kurzform.
        </p>
      </StoryPart>

      <StoryPart component={PathDemo} imagePosition="right" wide>
        <p>
          Tief im Land wohnt der mächtigste Bewohner: der <strong>Pfad</strong>.
          Mit <code>&lt;path&gt;</code> lässt sich <em>jede</em> Form zeichnen.
          Seine Sprache ist allerdings knapp: <code>M</code> = gehe zu,{" "}
          <code>L</code> = Linie zu, <code>Z</code> = schliessen. Ihm widmen wir
          später ein eigenes Level.
        </p>
      </StoryPart>

      <StoryPart component={SceneDemo} imagePosition="left" wide>
        <p>
          Zum Schluss zeigt Biit, was passiert, wenn mehrere Formen zusammen auf
          einer Leinwand stehen: Sie werden <strong>von oben nach unten</strong>{" "}
          gezeichnet. Was im Code weiter unten steht, liegt im Bild weiter{" "}
          <strong>vorne</strong>.
        </p>
      </StoryPart>

      <section>
        <h2>Das Wichtigste in Kürze</h2>
        <ul>
          <li>
            Ein SVG beginnt immer mit{" "}
            <code>&lt;svg width="..." height="..."&gt;</code>.
          </li>
          <li>
            Der Nullpunkt liegt oben links, <code>y</code> wächst nach unten.
          </li>
          <li>
            Eigenschaften werden als <strong>Attribute</strong> geschrieben:{" "}
            <code>name="wert"</code>.
          </li>
          <li>
            Elemente ohne Inhalt stehen in der Kurzform{" "}
            <code>&lt;circle ... /&gt;</code>.
          </li>
          <li>
            <code>fill</code> füllt, <code>stroke</code> umrandet,{" "}
            <code>stroke-width</code> bestimmt die Dicke.
          </li>
        </ul>
      </section>

      <section>
        <h2>Bereit für die Prüfung am Tor?</h2>
        <p>
          Im{" "}
          <Link to="/fms/binaria/vektoria/svg-tor/quiz">
            Quiz am Tor von Vektoria
          </Link>{" "}
          warten vier Fragen zur Schreibweise von SVG. Wer sie besteht, darf
          weiter zur <strong>Kreisbucht</strong>.
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
