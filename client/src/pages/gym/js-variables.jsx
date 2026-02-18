import CodeBlock from "@components/CodeBlock";
import { DMath } from "@components/Katex.jsx";
import Section from "@components/Section";

export default function GymJSVariables() {
  return (
    <>
      <section>
        <h2>Variablen</h2>
        <p>
          Variablen beim Programmieren sind einfache Speicherzellen. Ein Muster
          das beim Programmieren immer wieder vorkommt, ist es einen Wert zu
          speichern, und diesen später wieder zu verwenden, das wird beim
          Programmieren mit Variablen und Zuweisungen gelöst.
        </p>
        <p>
          Stellen Sie sich das einfache mathematische Problem von dieser
          Rechnung hier vor.
        </p>
        <DMath>{String.raw`(5+3) \cdot 2`}</DMath>
        <p>
          Wir müssen hier in 2 Schritten rechnen, und dem Computer jeweils
          sagen, dass er das Resultat speichern soll. Wir Können das einfach mit
          dem folgenden Code machen:
        </p>
        <CodeBlock lang="javascript">
          {`
            let sum = 5 + 3;
            let prod = sum * 2;

            console.log(\`Das Resultat ist \${prod}\`);
          `}
        </CodeBlock>
      </section>
      <section>
        <h2>Benutzereingabe Speichern</h2>
        <p>
          Sehr oft kommt es beim Programmieren vor, das Sie einen Wert vom
          Benutzer erfragen müssen, bzw. einen Wert von der Kommandozeile
          einlesen, diesen aber erst später wieder brauchen, dann ist es
          nützlich wenn man diese Werte einfach nur abspeichern kann, wie zum
          Beispiel hier:
        </p>
        <CodeBlock lang="javascript" diff>
          {`
          const name = process.argv[2]

          console.log(\`Hello \${name}!\`)
          `}
        </CodeBlock>
        <p>
          Wir könnten das speichern der Variable hier auch weglassen, aber hier
          gibt es uns einen zusätzlichen Hinweis darauf was wir vom Code
          erwarten, denn <pre>process.argv[2]</pre> ist nicht wirklich
          aussagekräftig, im Code wissen wir nun aber das wir einen Namen
          erwarten. Das abspeichern in Variablen hilft uns also auch gleich den
          Code zu dokumentieren.
        </p>
      </section>
      <Section>
        <h2>
          Der Unterschied von <pre>let</pre> und <pre>const</pre>
        </h2>
        <p>
          In den Beispielen oben haben wir einmal <pre>let</pre> und einmal
          <pre>const</pre> verwendet. Beides sind Schlüsselwörter und werden
          verwendet wenn eine neue Variable erstellt werden soll. Wenn{" "}
          <pre>let</pre> verwendet wird, dann kann man der Variable später einen
          anderen Wert zuweisen. Bei <pre>const</pre> ist das nicht möglich, wir
          können eine Variable also for dem überschreiben schützen. Wir ändern
          das Beispiel 1 ganz leicht ab, so dass wir nur eine Variable brauchen.
        </p>
        <CodeBlock lang="javascript" highlightLines={[2]}>
          {`let result = 5 + 3;
result = result * 2;

console.log(\`Das Resultat ist \${result}\`);`}
        </CodeBlock>
        <p>
          Wann sollte man <pre>let</pre> und wann <pre>const</pre> verwenden. Da
          gibt es ganz unterschiedliche Ansichten, und Sie könnten alles nur mit{" "}
          <pre>let</pre> machen. Wir versuche jedoch alles mit <pre>const</pre>{" "}
          zu machen, denn so müssen wir in jedem Schritt eine neue Variable
          erstellen, was uns zwingt explizit zu sein, und dadurch unseren Code
          direkt erklärt.
        </p>
      </Section>
    </>
  );
}
