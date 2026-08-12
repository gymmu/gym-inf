import CodeBlock from "@components/CodeBlock";
import Section from "@components/Section";

export default function JSObjekte() {
  return (
    <>
      <Section>
        <h2>Objekte</h2>
        <p>
          Objekte speichern mehrere Werte als Paar von Eigenschaftsnamen und
          Werten. Sie sind wie kleine Datenbanken, die zusammenhängende
          Informationen organisieren.
        </p>
      </Section>
      <Section>
        <h2>Objekte erstellen</h2>
        <CodeBlock lang="javascript">
          {`
const person = {
  name: "Anna",
  alter: 16,
  hobby: "Programmieren",
  begruessen: function() {
    console.log("Hallo, ich bin " + this.name);
  }
};

// Zugriff auf Eigenschaften
console.log(person.name);        // "Anna"
console.log(person["alter"]);    // 16

// Methode aufrufen
person.begruessen();
`}
        </CodeBlock>
      </Section>
      <Section>
        <h2>Eigenschaften verändern</h2>
        <CodeBlock lang="javascript">
          {`
// Neue Eigenschaft hinzufügen
person.email = "anna@example.com";

// Eigenschaft verändern
person.alter = 17;

// Eigenschaft löschen
delete person.hobby;
`}
        </CodeBlock>
      </Section>
      <Section>
        <h2>Das <code>this</code> Keyword</h2>
        <p>
          In Methoden zeigt <code>this</code> auf das Objekt selbst. Damit
          kannst du auf die Eigenschaften des eigenen Objekts zugreifen.
        </p>
      </Section>
    </>
  );
}
