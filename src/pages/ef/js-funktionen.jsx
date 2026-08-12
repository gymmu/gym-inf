import CodeBlock from "@components/CodeBlock";
import Section from "@components/Section";

export default function JSFunktionen() {
  return (
    <>
      <Section>
        <h2>Funktionen</h2>
        <p>
          Funktionen sind wiederverwendbare Codeblöcke, die eine bestimmte
          Aufgabe erfüllen. Du kannst ihnen Werte übergeben (Parameter) und
          sie können Werte zurückgeben.
        </p>
      </Section>
      <Section>
        <h2>Funktionen definieren</h2>
        <CodeBlock lang="javascript">
          {`
// Funktion ohne Parameter
function begruessen() {
  console.log("Hallo!");
}

// Funktion mit Parametern
function begruessenName(name) {
  console.log("Hallo, " + name + "!");
}

// Funktion mit Rückgabewert
function addiere(a, b) {
  return a + b;
}

const ergebnis = addiere(3, 5); // 8
`}
        </CodeBlock>
      </Section>
      <Section>
        <h2>Pfeilfunktionen (Arrow Functions)</h2>
        <p>
          Eine kompakte Schreibweise für Funktionen:
        </p>
        <CodeBlock lang="javascript">
          {`
// Klassische Funktion
function quadrieren(x) {
  return x * x;
}

// Als Pfeilfunktion
const quadrieren = (x) => {
  return x * x;
};

// Noch kompakter (bei einem Parameter und einem Return)
const quadrieren = x => x * x;
`}
        </CodeBlock>
      </Section>
      <Section>
        <h2>Parameter und Rückgabewerte</h2>
        <p>
          Funktionen können mehrere Parameter haben. Mit <code>return</code>{" "}
          gibst du ein Ergebnis zurück. Ohne <code>return</code> gibt eine{" "}
          Funktion <code>undefined</code> zurück.
        </p>
      </Section>
    </>
  );
}
