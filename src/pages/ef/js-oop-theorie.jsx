import JSTerminal from "@components/JSTerminal";
import ScrollSection from "@components/ScrollSection";

export default function JSOOPTheorie() {
  return (
    <>
      {/* ══════════════════════════════════════════════════════
          SECTION 1 — Titel
          ══════════════════════════════════════════════════════ */}
      <div className="title-slide">
        <h1>Objektorientierte Programmierung</h1>
        <h2>Klassen · Objekte · Vererbung</h2>
        <p>Daten und Verhalten gehören zusammen</p>
      </div>

      {/* ══════════════════════════════════════════════════════
          SECTION 2 — Die Idee
          ══════════════════════════════════════════════════════ */}
      <ScrollSection>
        <section>
          <h2>Die Idee</h2>
          <p>
            Funktional heisst: Daten fliessen durch Funktionen.{" "}
            <strong>Objektorientiert</strong> heisst: Daten und die Funktionen,
            die zu ihnen gehören, werden zu einer Einheit zusammengepackt.
          </p>
          <ul>
            <li>
              <strong>Klasse</strong> — der Bauplan. Beschreibt, welche Daten
              und welche Methoden ein Objekt hat.
            </li>
            <li>
              <strong>Objekt / Instanz</strong> — ein konkretes Exemplar, mit{" "}
              <code>new</code> aus der Klasse erzeugt.
            </li>
            <li>
              <strong>Attribut (Eigenschaft)</strong> — ein Datenfeld des
              Objekts.
            </li>
            <li>
              <strong>Methode</strong> — eine Funktion, die zum Objekt gehört.
            </li>
          </ul>
          <p>
            Bild: Die Klasse ist der Bauplan eines Hauses, die Objekte sind die
            gebauten Häuser. Alle folgen demselben Plan, haben aber
            unterschiedliche Farben, Bewohner und Adressen.
          </p>
        </section>
      </ScrollSection>

      {/* ══════════════════════════════════════════════════════
          SECTION 3 — Beispiel 1: Konto
          ══════════════════════════════════════════════════════ */}
      <ScrollSection>
        <section>
          <h2>Beispiel 1 — Ein Bankkonto</h2>
          <p>Die drei Bestandteile jeder Klasse:</p>
          <ol>
            <li>
              <code>class Name &#123; ... &#125;</code> — der Bauplan. Der Name
              beginnt gross.
            </li>
            <li>
              <code>constructor(...)</code> — läuft automatisch bei{" "}
              <code>new</code> und setzt die Startwerte.
            </li>
            <li>
              Methoden — wie Funktionen, aber ohne <code>function</code>{" "}
              geschrieben.
            </li>
          </ol>
          <p>
            <code>this</code> bedeutet innerhalb der Klasse immer:{" "}
            <em>dieses eine Objekt, an dem gerade gearbeitet wird</em>.
          </p>
        </section>
      </ScrollSection>

      <ScrollSection area="content">
        <section>
          <h2>Beispiel 1 — Code</h2>
          <JSTerminal filename="konto.js">
            {`class Konto {
  // 1. Der Konstruktor: legt die Startwerte fest
  constructor(inhaber, startguthaben) {
    this.inhaber = inhaber;
    this.stand = startguthaben;
    this.bewegungen = [];
  }

  // 2. Methoden: das Verhalten
  einzahlen(betrag) {
    if (betrag <= 0) return false;
    this.stand = this.stand + betrag;
    this.bewegungen.push(betrag);
    return true;
  }

  abheben(betrag) {
    if (betrag > this.stand) {
      console.log("Nicht genug Guthaben für " + this.inhaber);
      return false;
    }
    this.stand = this.stand - betrag;
    this.bewegungen.push(-betrag);
    return true;
  }

  info() {
    return this.inhaber + ": " + this.stand.toFixed(2) + " CHF";
  }
}

// 3. Objekte erzeugen
const a = new Konto("Anna", 1000);
const b = new Konto("Ben", 50);

a.einzahlen(250);
b.abheben(80);          // scheitert
a.abheben(100);

console.log(a.info());  // Anna: 1150.00 CHF
console.log(b.info());  // Ben: 50.00 CHF

// Jedes Objekt hat seine EIGENEN Daten
console.log(a.bewegungen); // [250, -100]
console.log(b.bewegungen); // []`}
          </JSTerminal>
        </section>
      </ScrollSection>

      {/* ══════════════════════════════════════════════════════
          SECTION 4 — Beispiel 2: Spielfigur
          ══════════════════════════════════════════════════════ */}
      <ScrollSection>
        <section>
          <h2>Beispiel 2 — Eine Spielfigur</h2>
          <p>
            Ein zweites Beispiel, das zeigt: Methoden dürfen sich gegenseitig
            aufrufen, und ein Objekt darf andere Objekte als Attribute
            enthalten.
          </p>
        </section>
      </ScrollSection>

      <ScrollSection area="content">
        <section>
          <h2>Beispiel 2 — Code</h2>
          <JSTerminal filename="spielfigur.js">
            {`class Spielfigur {
  constructor(name, leben, staerke) {
    this.name = name;
    this.leben = leben;
    this.maxLeben = leben;
    this.staerke = staerke;
  }

  lebt() {
    return this.leben > 0;
  }

  nimmSchaden(menge) {
    this.leben = Math.max(0, this.leben - menge);
    if (!this.lebt()) {           // Methode ruft Methode auf
      console.log(this.name + " ist besiegt!");
    }
  }

  angreifen(ziel) {
    console.log(this.name + " greift " + ziel.name + " an.");
    ziel.nimmSchaden(this.staerke);
  }

  lebensbalken() {
    const anteil = Math.round((this.leben / this.maxLeben) * 10);
    return "[" + "#".repeat(anteil) + ".".repeat(10 - anteil) + "] "
      + this.leben + "/" + this.maxLeben;
  }
}

const held = new Spielfigur("Held", 100, 25);
const ork = new Spielfigur("Ork", 60, 15);

held.angreifen(ork);
ork.angreifen(held);
held.angreifen(ork);
held.angreifen(ork);

console.log(held.name, held.lebensbalken());
console.log(ork.name, ork.lebensbalken());`}
          </JSTerminal>
        </section>
      </ScrollSection>

      {/* ══════════════════════════════════════════════════════
          SECTION 5 — Kapselung
          ══════════════════════════════════════════════════════ */}
      <ScrollSection>
        <section>
          <h2>Kapselung — nicht alles nach aussen zeigen</h2>
          <p>
            Bisher kann jeder von aussen <code>konto.stand = 1000000</code>{" "}
            schreiben und alle Regeln umgehen. <strong>Kapselung</strong>{" "}
            heisst: Die Daten werden geschützt, Zugriff gibt es nur über
            Methoden.
          </p>
          <ul>
            <li>
              Ein <code>#</code> vor dem Namen macht ein Feld{" "}
              <strong>privat</strong>: <code>#stand</code>. Von aussen ist es
              nicht mehr erreichbar.
            </li>
            <li>
              <strong>Getter</strong> geben kontrolliert Auskunft,{" "}
              <strong>Setter</strong> prüfen, bevor sie etwas ändern.
            </li>
          </ul>
        </section>
      </ScrollSection>

      <ScrollSection area="content">
        <section>
          <h2>Kapselung — Code</h2>
          <JSTerminal filename="kapselung.js">
            {`class Konto {
  #stand;                    // privates Feld

  constructor(inhaber, startguthaben) {
    this.inhaber = inhaber;
    this.#stand = startguthaben;
  }

  // Getter: liest sich wie eine Eigenschaft
  get stand() {
    return this.#stand;
  }

  // Setter: prüft, bevor er ändert
  set stand(neu) {
    if (neu < 0) {
      console.log("Negativer Kontostand nicht erlaubt.");
      return;
    }
    this.#stand = neu;
  }

  einzahlen(betrag) {
    if (betrag > 0) this.#stand += betrag;
  }
}

const k = new Konto("Anna", 500);

k.einzahlen(100);
console.log(k.stand);   // 600  -> Getter, ohne Klammern!

k.stand = -50;          // Setter greift ein
console.log(k.stand);   // 600

k.stand = 900;          // erlaubt
console.log(k.stand);   // 900

// console.log(k.#stand);  // Fehler: privat!`}
          </JSTerminal>
        </section>
      </ScrollSection>

      {/* ══════════════════════════════════════════════════════
          SECTION 6 — Vererbung
          ══════════════════════════════════════════════════════ */}
      <ScrollSection>
        <section>
          <h2>Vererbung — Gemeinsames nur einmal schreiben</h2>
          <p>
            Ein Sparkonto ist ein Konto — mit einem Zusatz. Statt alles
            abzuschreiben, <strong>erbt</strong> die neue Klasse von der alten.
          </p>
          <ul>
            <li>
              <code>class Sparkonto extends Konto</code> — Sparkonto übernimmt
              alle Attribute und Methoden.
            </li>
            <li>
              <code>super(...)</code> im Konstruktor ruft den Konstruktor der
              Oberklasse auf. Er muss <strong>zuerst</strong> kommen.
            </li>
            <li>
              Eine Methode kann <strong>überschrieben</strong> werden — die
              Unterklasse definiert sie einfach neu.
            </li>
          </ul>
        </section>
      </ScrollSection>

      <ScrollSection area="content">
        <section>
          <h2>Vererbung — Code</h2>
          <JSTerminal filename="vererbung.js">
            {`class Konto {
  constructor(inhaber, stand) {
    this.inhaber = inhaber;
    this.stand = stand;
  }

  info() {
    return this.inhaber + ": " + this.stand.toFixed(2) + " CHF";
  }
}

class Sparkonto extends Konto {
  constructor(inhaber, stand, zinssatz) {
    super(inhaber, stand);        // zuerst die Oberklasse!
    this.zinssatz = zinssatz;
  }

  verzinsen() {
    this.stand = this.stand * (1 + this.zinssatz / 100);
  }

  // Methode überschreiben, Original mit super. weiterverwenden
  info() {
    return super.info() + " (Sparkonto, " + this.zinssatz + "%)";
  }
}

class Jugendkonto extends Sparkonto {
  constructor(inhaber, stand) {
    super(inhaber, stand, 2.5);   // besserer Zins
  }

  info() {
    return super.info() + " [Jugend]";
  }
}

const s = new Sparkonto("Anna", 1000, 1.5);
const j = new Jugendkonto("Ben", 400);

s.verzinsen();
j.verzinsen();

console.log(s.info());
console.log(j.info());

// Alle sind Konten -> gemeinsam behandelbar
const alle = [s, j, new Konto("Clara", 250)];
console.log(alle.map((k) => k.info()));`}
          </JSTerminal>
          <p>
            Der letzte Block ist <strong>Polymorphie</strong>: Wir rufen überall{" "}
            <code>info()</code> auf, und jedes Objekt weiss selbst, welche
            Version die richtige ist.
          </p>
        </section>
      </ScrollSection>

      {/* ══════════════════════════════════════════════════════
          SECTION 7 — Klassen und Listen
          ══════════════════════════════════════════════════════ */}
      <ScrollSection area="content">
        <section>
          <h2>Beide Welten zusammen</h2>
          <p>
            OOP und FP sind keine Gegensätze. Eine Liste von Objekten wertet man
            am besten mit den Werkzeugen aus Woche 4 aus.
          </p>
          <JSTerminal filename="oop-und-fp.js">
            {`class Schueler {
  constructor(name, klasse, noten) {
    this.name = name;
    this.klasse = klasse;
    this.noten = noten;
  }

  schnitt() {
    const summe = this.noten.reduce((a, n) => a + n, 0);
    return Math.round((summe / this.noten.length) * 100) / 100;
  }

  hatBestanden() {
    return this.schnitt() >= 4;
  }
}

const liste = [
  new Schueler("Anna", "1a", [5, 5.5, 6]),
  new Schueler("Ben", "1a", [3, 4, 3.5]),
  new Schueler("Clara", "1b", [4.5, 5, 4]),
];

console.log(liste.filter((s) => s.hatBestanden()).map((s) => s.name));

console.log(
  [...liste].sort((a, b) => b.schnitt() - a.schnitt()).map((s) => s.name)
);

const schnitt =
  liste.reduce((a, s) => a + s.schnitt(), 0) / liste.length;
console.log("Klassenschnitt:", schnitt.toFixed(2));`}
          </JSTerminal>
        </section>
      </ScrollSection>

      {/* ══════════════════════════════════════════════════════
          SECTION 8 — Zusammenfassung
          ══════════════════════════════════════════════════════ */}
      <ScrollSection>
        <section>
          <h2>Spickzettel</h2>
          <ul>
            <li>
              <code>class Name &#123; ... &#125;</code> — Bauplan,{" "}
              <code>new Name(...)</code> — Objekt
            </li>
            <li>
              <code>constructor</code> setzt die Startwerte, <code>this</code>{" "}
              meint das eigene Objekt
            </li>
            <li>
              <code>#feld</code> ist privat — Zugriff über <code>get</code> /{" "}
              <code>set</code> oder Methoden
            </li>
            <li>
              <code>extends</code> erbt, <code>super(...)</code> ruft die
              Oberklasse, Methoden lassen sich überschreiben
            </li>
            <li>
              Listen von Objekten: weiterhin mit <code>map</code>,{" "}
              <code>filter</code>, <code>reduce</code> auswerten
            </li>
          </ul>
        </section>
      </ScrollSection>
    </>
  );
}
