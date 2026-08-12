import CodeBlock from "@components/CodeBlock";
import Section from "@components/Section";

export default function JSKlassen() {
  return (
    <>
      <Section>
        <h2>Klassen und Vererbung</h2>
        <p>
          Klassen sind Baupläne für Objekte. Sie definieren, welche
          Eigenschaften und Methoden ein Objekt hat. Vererbung ermöglicht es
          dir, neue Klassen auf bestehenden aufzubauen.
        </p>
      </Section>
      <Section>
        <h2>Klassen definieren</h2>
        <CodeBlock lang="javascript">
          {`
class Tier {
  constructor(name, art) {
    this.name = name;
    this.art = art;
  }

  vorstellung() {
    return \`Ich bin \${this.name}, ein/e \${this.art}.\`;
  }
}

// Instanz erstellen
const hund = new Tier("Bello", "Hund");
console.log(hund.vorstellung());
`}
        </CodeBlock>
      </Section>
      <Section>
        <h2>Vererbung mit extends</h2>
        <CodeBlock lang="javascript">
          {`
class Hund extends Tier {
  constructor(name) {
    super(name, "Hund");
    this.farbe = "braun";
  }

  bell() {
    return "Wuff! Wuff!";
  }
}

const rex = new Hund("Rex");
console.log(rex.vorstellung()); // "Ich bin Rex, ein Hund."
console.log(rex.bell());       // "Wuff! Wuff!"
`}
        </CodeBlock>
      </Section>
      <Section>
        <h2>Überschreiben von Methoden</h2>
        <p>
          Eine Unterklasse kann Methoden der Oberklasse überschreiben, um
          ihr eigenes Verhalten zu definieren:
        </p>
        <CodeBlock lang="javascript">
          {`
class Hund extends Tier {
  // ...
  
  vorstellung() {
    return \`Wuff! Ich bin \${this.name}, ein Hund.\`;
  }
}
`}
        </CodeBlock>
      </Section>
      <Section>
        <h2>Wichtige Konzepte</h2>
        <ul>
          <li><code>class</code> – definiert eine Klasse</li>
          <li><code>constructor</code> – Initialisierung</li>
          <li><code>extends</code> – Vererbung</li>
          <li><code>super</code> – Zugriff auf die Oberklasse</li>
          <li><code>new</code> – erstellt eine Instanz</li>
        </ul>
      </Section>
    </>
  );
}
