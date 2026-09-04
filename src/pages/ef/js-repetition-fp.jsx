import JSTerminal from "@components/JSTerminal";
import ScrollSection from "@components/ScrollSection";

export default function JSRepetitionFP() {
  return (
    <>
      {/* ══════════════════════════════════════════════════════
          SECTION 1 — Titel
          ══════════════════════════════════════════════════════ */}
      <div className="title-slide">
        <h1>Repetition</h1>
        <h2>Vom funktionalen Stil zu Objekten</h2>
        <p>map · filter · reduce · Objekte als Datensätze</p>
      </div>

      {/* ══════════════════════════════════════════════════════
          SECTION 2 — Woche 4 in Kürze
          ══════════════════════════════════════════════════════ */}
      <ScrollSection>
        <section>
          <h2>Woche 4 in Kürze</h2>
          <ul>
            <li>
              <code>map</code> — gleich viele Elemente, umgewandelt
            </li>
            <li>
              <code>filter</code> — weniger Elemente, unverändert
            </li>
            <li>
              <code>reduce</code> — ein einziger Wert am Schluss
            </li>
            <li>
              <code>find</code>, <code>some</code>, <code>every</code>,{" "}
              <code>toSorted</code> — die Suchfragen
            </li>
            <li>
              Eigene <strong>Prädikate</strong> und{" "}
              <strong>Transformationen</strong>, übergeben ohne Klammern
            </li>
          </ul>
        </section>
      </ScrollSection>

      <ScrollSection area="content">
        <section>
          <h2>Eine Pipeline zum Aufwärmen</h2>
          <JSTerminal filename="repetition-fp.js">
            {`const konten = [
  { inhaber: "Anna", stand: 1250, typ: "Sparkonto" },
  { inhaber: "Ben", stand: -80, typ: "Privatkonto" },
  { inhaber: "Clara", stand: 640, typ: "Privatkonto" },
];

const istImPlus = (k) => k.stand > 0;

console.log(konten.filter(istImPlus).map((k) => k.inhaber));
console.log(konten.reduce((a, k) => a + k.stand, 0));`}
          </JSTerminal>
        </section>
      </ScrollSection>

      {/* ══════════════════════════════════════════════════════
          SECTION 3 — Was Objekte bisher waren
          ══════════════════════════════════════════════════════ */}
      <ScrollSection>
        <section>
          <h2>Objekte — bisher nur Daten</h2>
          <p>
            Seit Woche 2 verwenden wir Objekte als <strong>Datensätze</strong>:
            mehrere zusammengehörende Werte unter einem Namen. Die Funktionen,
            die mit diesen Daten arbeiten, liegen aber irgendwo daneben.
          </p>
          <p>
            Ein Objekt kann jedoch auch <strong>Funktionen</strong> enthalten.
            Eine Funktion, die in einem Objekt steckt, heisst{" "}
            <strong>Methode</strong>. Mit <code>this</code> greift sie auf die
            eigenen Daten zu.
          </p>
        </section>
      </ScrollSection>

      <ScrollSection area="content">
        <section>
          <h2>Von Daten zu Methoden</h2>
          <JSTerminal filename="objekte-methoden.js">
            {`// bisher: Daten hier, Funktion dort
const konto = { inhaber: "Anna", stand: 1250 };

function einzahlen(konto, betrag) {
  konto.stand = konto.stand + betrag;
}

einzahlen(konto, 100);
console.log(konto.stand); // 1350

// neu: die Funktion gehört ins Objekt
const konto2 = {
  inhaber: "Ben",
  stand: 500,
  einzahlen(betrag) {
    this.stand = this.stand + betrag;   // this = dieses Objekt
  },
  info() {
    return this.inhaber + ": " + this.stand + " CHF";
  },
};

konto2.einzahlen(250);
console.log(konto2.info()); // "Ben: 750 CHF"`}
          </JSTerminal>
        </section>
      </ScrollSection>

      {/* ══════════════════════════════════════════════════════
          SECTION 4 — Das Problem
          ══════════════════════════════════════════════════════ */}
      <ScrollSection>
        <section>
          <h2>Das Problem: 100 Konten</h2>
          <p>
            So ein Objekt von Hand zu schreiben, ist für <em>ein</em> Konto in
            Ordnung. Aber für hundert Konten müssten wir hundertmal denselben
            Bauplan abtippen — inklusive aller Methoden.
          </p>
          <p>
            Was wir brauchen, ist der <strong>Bauplan</strong> als eigenes
            Sprachmittel: einmal beschreiben, beliebig oft daraus Objekte
            erzeugen. Das ist eine <strong>Klasse</strong> — und damit sind wir
            beim Thema dieser Woche.
          </p>
        </section>
      </ScrollSection>
    </>
  );
}
