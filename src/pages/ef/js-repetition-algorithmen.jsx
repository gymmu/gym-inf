import JSTerminal from "@components/JSTerminal";
import ScrollSection from "@components/ScrollSection";

export default function JSRepetitionAlgorithmen() {
  return (
    <>
      {/* ══════════════════════════════════════════════════════
          SECTION 1 — Titel
          ══════════════════════════════════════════════════════ */}
      <div className="title-slide">
        <h1>Repetition</h1>
        <h2>Von den Algorithmen zum funktionalen Stil</h2>
        <p>Schleifenmuster · Funktionen als Werte</p>
      </div>

      {/* ══════════════════════════════════════════════════════
          SECTION 2 — Die Muster aus Woche 3
          ══════════════════════════════════════════════════════ */}
      <ScrollSection>
        <section>
          <h2>Woche 3 in drei Zeilen</h2>
          <p>
            Fast alle Algorithmen der letzten Woche folgten demselben Bauplan:
            eine Schleife über eine Liste, plus eine Variable, die sich merkt,
            was bisher passiert ist.
          </p>
          <ul>
            <li>
              <strong>Suchen</strong> — durchgehen, bis etwas passt
            </li>
            <li>
              <strong>Extremwert</strong> — die bisher beste Zahl merken
            </li>
            <li>
              <strong>Akkumulieren</strong> — Summe, Anzahl, Durchschnitt
            </li>
            <li>
              <strong>Häufigkeiten</strong> — mit einem Objekt mitzählen
            </li>
          </ul>
          <p>
            Wir haben also viermal fast dasselbe Gerüst geschrieben. Genau da
            setzt diese Woche an.
          </p>
        </section>
      </ScrollSection>

      {/* ══════════════════════════════════════════════════════
          SECTION 3 — Code: die Muster nochmals
          ══════════════════════════════════════════════════════ */}
      <ScrollSection area="content">
        <section>
          <h2>Die Muster als Code</h2>
          <JSTerminal filename="repetition-muster.js">
            {`const zahlen = [4, 8, 15, 16, 23, 42];

// 1. Suchen
let index = -1;
for (let i = 0; i < zahlen.length; i++) {
  if (zahlen[i] === 16) { index = i; break; }
}
console.log("Index:", index);

// 2. Maximum
let max = zahlen[0];
for (let i = 1; i < zahlen.length; i++) {
  if (zahlen[i] > max) max = zahlen[i];
}
console.log("Maximum:", max);

// 3. Summe
let summe = 0;
for (const z of zahlen) {
  summe = summe + z;
}
console.log("Summe:", summe);

// Fällt auf: dreimal das gleiche Gerüst,
// nur die Zeile in der Mitte ist verschieden.`}
          </JSTerminal>
        </section>
      </ScrollSection>

      {/* ══════════════════════════════════════════════════════
          SECTION 4 — Funktionen als Werte
          ══════════════════════════════════════════════════════ */}
      <ScrollSection>
        <section>
          <h2>Funktionen sind Werte</h2>
          <p>
            Das zweite Puzzleteil kennen Sie schon: In JavaScript ist eine
            Funktion ein ganz normaler Wert. Man kann sie in einer Variablen
            speichern und an eine andere Funktion <em>übergeben</em>.
          </p>
          <ul>
            <li>
              <code>function quadrat(x) &#123; return x * x; &#125;</code>
            </li>
            <li>
              kurz als Arrow-Funktion:{" "}
              <code>const quadrat = (x) =&gt; x * x</code>
            </li>
            <li>
              Eine übergebene Funktion heisst <strong>Callback</strong>.
            </li>
          </ul>
        </section>
      </ScrollSection>

      <ScrollSection area="content">
        <section>
          <h2>Callbacks — kurz getestet</h2>
          <JSTerminal filename="callbacks.js">
            {`// Funktion in einer Variablen
const quadrat = (x) => x * x;
console.log(quadrat(5)); // 25

// Funktion als Argument übergeben
function wendeAn(liste, funktion) {
  const resultat = [];
  for (const wert of liste) {
    resultat.push(funktion(wert));
  }
  return resultat;
}

console.log(wendeAn([1, 2, 3], quadrat));       // [1, 4, 9]
console.log(wendeAn([1, 2, 3], (x) => x + 10)); // [11, 12, 13]

// Achtung: quadrat  = die Funktion selbst
//          quadrat(5) = das Resultat des Aufrufs`}
          </JSTerminal>
        </section>
      </ScrollSection>

      {/* ══════════════════════════════════════════════════════
          SECTION 5 — Brücke
          ══════════════════════════════════════════════════════ */}
      <ScrollSection>
        <section>
          <h2>Die Brücke zu dieser Woche</h2>
          <p>
            Das Gerüst der Schleife ist immer gleich — nur der Kern ändert sich.
            Also: Gerüst einmal bauen, den Kern als Callback übergeben.
          </p>
          <p>
            Genau das sind <code>map</code>, <code>filter</code> und{" "}
            <code>reduce</code>. Damit schrumpfen die Algorithmen von Woche 3
            auf je eine Zeile.
          </p>
        </section>
      </ScrollSection>
    </>
  );
}
