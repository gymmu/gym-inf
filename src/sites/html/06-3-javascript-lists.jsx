import { Link } from "react-router-dom"
import Chapter from "../../components/Chapter"
import Code from "../../components/Code"
import Example from "../../components/Example"
import ICode from "../../components/ICode"
import LCode from "../../components/LCode"
import Tag from "../../components/Tag"
import Video from "../../components/Video"

export default function ChapterJavascriptLists() {
  return (
    <Chapter>
      <h2>Listen in Javascript</h2>
      <section>
        Listen in Javascript sind eine Sammlung von Daten. Text kann als eine
        Liste von Zeichen agesehen werden, was es ermöglicht einfach mit Text zu
        arbeiten.
      </section>
      <section>
        Wir haben bis jetzt in allen Aufgaben so getan als ob der Text eine
        Liste ist. Wir sind dabei jedes Element der Liste durchgegangen, und
        haben geprüft was die einzelnen Elemente sind. Meistens haben wir diese
        Elemente dann an eine weitere Liste angehängt. Diesen Workflow werden
        wir auch weiterhin verwenden, aber wir erweitern das Konzept noch ein
        wenig.
      </section>
      <section>
        <h3>Mehrere Rückgabewerte</h3>
        Eine Funktion kann nur einen Wert auf einmal zurückgeben. Wenn wir
        mehrere Werte zurückgeben möchten, dann können wir eine Liste von den
        Werten zurückgeben. Das wird beim Programmieren sehr oft so gemacht,
        deshalb ist es wichtig dies zu können.
      </section>
      <Example title="Beispiel: Text bis zum ersten '.' zurückgeben">
        Wir möchten nur den Teil vom Text bis zum ersten Punkt zurückgeben,
        zusätzlich möchten wir noch sagen ob dannach noch mehr Text kommt. Der
        Code dazu könnte also wie folgt aussehen:
        <Code
          language="javascript"
          content={`function firstSentence() {
  const text = "Hier ist Text. Und hier noch mehr."
  const result = []
  for (let i = 0; i < text.length; i++) {
  result.push(text[i])
  if (text[i] === '.') {
    if (text.length-1 === i) {
      return [result.join(""), false]
    } else {
      return [result.join(""), true]
    }
  }
  return [result.join(""), false]
}`}
        />
        Wenn der zweite Eintrag in der Liste <ICode>false</ICode> ist, wissen
        wir das kein weiterer Text mehr kommt.
      </Example>
      <section>
        <h3>Text in Stücke aufteilen</h3>
        Es kommt sehr oft vor das man einen Text bekommt, den man in
        verschiedene Stücke aufteilen möchte. Es kann zum Beispiel sein dass Sie
        eine Liste von allen Sätzen in einem Text haben möchten.
      </section>
      <Example title="Beispiel: Liste von Sätzen">
        Wir gehen für dieses Beispiel davon aus das Sätze immer nur von einem
        Punkt getrennt sind. Dann können wir wie bisher den Text Zeichen für
        Zeichen lesen, und jedes mal wenn wir einen <ICode>.</ICode> sehen,
        einen neuen Eintrag in einer Liste erstellen.
        <Code
          language="javascript"
          content={`const text = "Erster Satz. Und ein zweiter Satz. Auch noch ein dritter Satz."
const phrases = []
let currentPhrase = []
for (let i = 0; i < text.length; i++) {
  const currentElement = text[i]
  if (currentElement === '.') {
    // Wenn wir hier sind haben wir einen '.' gefunden, und möchten den aktuellen Satz als eine Element in phrases speichern.
    phrases.push(currentPhrase.join(""))
    currentPhrase = []  // Damit löschen wir alles was im aktuellen Satz drin war.
  } else {
    // Wenn wir keinen '.' lesen, dann möchten wir die Zeichen an den aktuellen Satz anhängen.
    currentPhrase.push(currentElement)
  }
}
console.log(phrases)`}
        />
        So wie wir den Code hier geschrieben haben, wird der Punkt jeweils
        weggelassen. Das ist normalerweise auch so wenn man einen Text an einem
        bestimmten Zeichen aufteilt.
      </Example>
      <section>
        <h3>Eingebaute Funktionen in Javascript nutzen</h3>
        Das was wir gerade implementiert haben, ist die <ICode>split()</ICode>
        -Funktion in Javascript. Diese ist wie <ICode>join()</ICode> eine
        bereits eingebaute Funktion in Javascript, und kann Ihnen das Leben
        deutlich einfacher machen. Wir haben die Funktion hier aber selber
        geschrieben, um zu verstehen was genau hinter dem Code steckt.
      </section>
      <Example title="Aufgabe: Die split-Funktion">
        Lesen Sie im Internet nach was die <ICode>split()</ICode>-Funktion in
        Javascript macht. Erstellen Sie eine zweite Version von dem vorherigen
        Code, mit der <ICode>split()</ICode>-Funktion.
      </Example>
    </Chapter>
  )
}
