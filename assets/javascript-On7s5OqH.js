import{j as e}from"./react-vendor-B6C3K7RQ.js";import{L as a,S as s}from"./gym-pages-BwB6KAce.js";import{P as i}from"./fms-pages-DHL7ctPk.js";import"./vendor-DID4YVBO.js";import"./monaco-B8ymEbop.js";import"./remotion-DZVNnYWo.js";function t(r){const n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h2,{children:"Einführung in Javascript"}),`
`,e.jsx(n.p,{children:`Javascript ist eine von sehr vielen Programmiersprachen. Javascript wird in der
Webentwicklung verwendet, und ist dafür auch optimiert. Javascript kann in jedem
modernen Webbrowser ausgeführt werden, es muss also nicht zusätzliches
installiert werden, man kann es direkt so verwenden.`}),`
`,e.jsx(n.p,{children:`Javascript wird verwendet um Webseiten interaktiv zu machen. Man kann es aber
auch verwenden um die Logik auf einer Webseite zu steuern, man kann Daten von
einer externen Quelle laden und analysieren, oder sogar ganze Spiele als
Webseite entwickeln.`}),`
`,e.jsx(a,{children:e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Sie wissen was Javascript ist."}),`
`,e.jsx(n.li,{children:"Sie können Javascript-Code erkennen und abändern."}),`
`,e.jsx(n.li,{children:"Sie wissen was die Entwickler-Konsole im Browser ist, und wie man diese öffnet."}),`
`,e.jsx(n.li,{children:"Sie wissen welche Operationen man in Javascript machen kann."}),`
`,e.jsx(n.li,{children:"Sie wissen was eine Variable ist."}),`
`,e.jsx(n.li,{children:"Sie wissen was eine Funktion ist."}),`
`,e.jsx(n.li,{children:"Sie wissen wie man eine Funktion aufruft."}),`
`,e.jsx(n.li,{children:"Sie können eigene Funktionen schreiben und aufrufen."}),`
`,e.jsx(n.li,{children:"Sie kennen einige einfache Ereignisse in Javascript."}),`
`,e.jsx(n.li,{children:"Sie wissen wie man Code in einem Skript speichert, und dieses in einer Webseite einbindet."}),`
`]})}),`
`,e.jsx(n.h2,{children:"Entwickler-Konsole"}),`
`,e.jsxs(n.p,{children:["Die einfachste Art Javascript-Code ausführen zu lassen, ist über die Entwickler-Konsole. Diese können Sie im Browser ganz einfach mit dem Tastenkürzel ",e.jsx(n.code,{children:"Ctrl + Shift + J"})," öffnen. Ist die Konsole geöffnet, können wir Befehle ausführen lassen. Wir starten mal mit dem folgenden Befehl, den wir einfach in die Konsole eintippen, und auf Enter drücken:"]}),`
`,e.jsx(i,{children:e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`alert("Hello")
`})})}),`
`,e.jsxs(n.p,{children:["Was genau ist hier passiert? Wir haben eine ",e.jsx(n.strong,{children:"Funktion"})," aufgerufen. Die Funktion heisst ",e.jsx(n.code,{children:"alert"})," und mit den ",e.jsx(n.code,{children:"()"}),"-Klammern, rufen wir die Funktion auf. Wir verlangen also vom Computer das er etwas ausführen soll. Nun geben wir in den Klammern noch einen ",e.jsx(n.strong,{children:"Wert"})," an die Funktion. So können wir den gleichen Code für unterschiedliche Werte ausführen. Das ist ganz schön praktisch für uns. Wir werden noch sehr viele eigene Funktionen schreiben, aber dazu kommt später noch mehr. Zuerst schauen wir die Grundlagen von Javascript an."]}),`
`,e.jsxs(s,{children:[e.jsx(n.h2,{children:"Javascript Grundlagen"}),e.jsx(n.p,{children:"In eigentlich allen Programmiersprachen, kann man einfache Arithmetik machen. So können wir auch in Javascript einfach Zahlen berechnen lassen. Testen Sie in der Konsole die folgenden Rechnungen aus."}),e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"2 + 2"}),`
`,e.jsx(n.li,{children:"7 - 5"}),`
`,e.jsx(n.li,{children:"8 / (1 + 3)"}),`
`,e.jsx(n.li,{children:"19 * 12"}),`
`]}),e.jsxs(n.p,{children:["Das bringt uns leider noch nicht sehr weit, das kann ein Taschenrechner ebenfalls. In Javascript können wir aber Werte in Variablen speichern. Das geht ganz einfach mit dem Schlüsselwort ",e.jsx(n.code,{children:"let"}),". Sie möchten ein Resultat berechnen und dieses später nochmals verwenden, dann können Sie das mit dem folgenden Code machen."]}),e.jsx(i,{children:e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`let a = 10
let b = a / 2
let c = b + 7
console.log(a, b, c)
`})})}),e.jsxs(n.p,{children:["Wir können also Werte abspeichern, und diese später wieder verwenden. Das machen Sie beim Programmieren die ganze Zeit. Aber ein wenig rechnen und das Resultat speichern, ist nicht so spannend. Wir möchten mehr machen mit Javascript. Häufig wird Javascript eingesetzt um Elemente anzeigen zu lassen, oder verschwinden zu lassen. Manchmal möchte man auch nur den Inhalt von einem Element leicht anpassen. Versuchen wir mal den Inhalt des ",e.jsx(n.code,{children:"h1"}),"-Titels zu verändern."]})]}),`
`,e.jsx(n.h2,{children:"Elemente anpassen"}),`
`,e.jsxs(n.p,{children:["Wenn wir ein Element anpassen möchten, dann müssen wir das Element zuerst finden. Das geht ganz einfach über CSS-Selektoren. Wir können also ganz leicht sagen, wir möchten das erste ",e.jsx(n.code,{children:"h1"}),"-Element auf der Webseite bekommen und in einer Variablen speichern. Das geht mit dem folgenden Code:"]}),`
`,e.jsx(i,{children:e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`let titleElement = document.querySelector("h1")
title.textContent = "Neuer Titel"
`})})}),`
`,e.jsxs(n.p,{children:["Dieses Beispiel ist dennoch unpraktisch, da beim besuchen einer Webseite, niemand die Konsole öffnen würde, um den Inhalt darauf anzupassen. Wir können dieses Code aber in einer ",e.jsx(n.strong,{children:"Funktion"})," speichern, und ihn auf Befehl ausführen. Meistens bindet man diese Funktion dann an einen Button, oder etwas ähnliches. Wir bleiben vorerst dabei, und machen alles von Hand in der Konsole."]}),`
`,e.jsxs(s,{children:[e.jsx(n.h2,{children:"Eigene Funktionen schreiben"}),e.jsxs(n.p,{children:["Wir können ganz einfach neue eigene Funktionen definieren. Das ist sehr praktisch für uns, denn so können wir Code in Blöcken speichern, und diesen dann immer wieder und wieder ausführen. Wir möchten nun eine Funktion erstellen, die eine Variable immer ums eins erhöht, und diesen Wert dann in den ",e.jsx(n.code,{children:"h1"}),"-Titel schreibt. Die Kommentare brauchen Sie nicht abzuschreiben, die sind nur für Ihr Verständnis."]}),e.jsx(i,{children:e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`// Erstellt eine Variable mit Namen count und dem Wert 0
let count = 0

// Erstellt eine Funktion mit dem Namen increaseCount
function increaseCount() {

  // Erstellt eine neue Variable mit Namen titleElement und speichert das h1-Element darin
  let titleElement = document.querySelector("h1")

  // Erhöht die Variable count um 1
  count = count + 1

  // setzt den Textinhalt von titleElement auf den Wert von count.
  titleElement.textContent = count
}
`})})}),e.jsxs(n.p,{children:["Wenn wir nur diesen Code eingeben, passiert noch nichts. Wir haben erst die Funktion und die Variable erstellt. Nun können wir diese Funktion aber noch aufrufen, dann wird sie auch ausgeführt. Also einfach in der Konsole den Befehl ",e.jsx(n.code,{children:"increaseCount()"})," laufen lassen."]})]}),`
`,e.jsx(n.h2,{children:"Funktionen automatisch ausführen lassen"}),`
`,e.jsxs(n.p,{children:["Es gibt verschiedene Möglichkeiten wie wir Funktionen automatisch laufen lassen können. Zum Beispiel können wir auf das anklicken von einem Element reagieren, oder auf das drücken einer Taste, oder auch nur alle 2 Sekunden. Wie man so etwas macht, schauen wir uns hier gerade an. Wir starten mit dem drücken der ",e.jsx(n.code,{children:"Leertaste"}),"."]}),`
`,e.jsxs(n.p,{children:["Das drücken einer Taste ist ein ",e.jsx(n.strong,{children:"Ereignis"})," in Javascript. Wir können dem Browser sagen, er soll auf ein bestimmtes Ereignis warten, und dann Code ausführen."]}),`
`,e.jsx(i,{children:e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`document.addEventListener("keydown", increaseCount)
`})})}),`
`,e.jsxs(n.p,{children:["Wenn wir nun die Webseite anwählen, und irgend eine Taste drücken, dann wird direkt diese Funktion ausgeführt. Das können wir natürlich auch machen, wenn eine Element angeklickt wird. Zum Beispiel das ",e.jsx(n.code,{children:"h1"}),"-Titel-Element."]}),`
`,e.jsx(i,{children:e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`document.querySelector("h1").addEventListener("click", increaseCount)
`})})}),`
`,e.jsx(n.p,{children:"Jetzt wir immer wenn wir das Element anklicken, der Zähler um eins erhöht."}),`
`,e.jsx(n.p,{children:"Nun wollen wir das ganze noch an einen Timer hängen. Das ist ebenfalls sehr einfach. Wir funktioniert mit dem folgenden Code."}),`
`,e.jsx(i,{children:e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`setInterval(increaseCount, 2000)
`})})}),`
`,e.jsx(n.p,{children:"Damit wird die Funktion alle 2 Sekunden aufgerufen, und der Zähler automatisch erhöht."}),`
`,e.jsx(n.h2,{children:"Anonyme Funktionen"}),`
`,e.jsxs(n.p,{children:["Für diese Beispiele hier war es praktisch eine Funktion mit einem Namen zu haben. Oftmals möchten wir aber nicht die gleiche Funktion ausführen, sondern einfach ein Stück Code, das wir direkt bei der Erstellung des ",e.jsx(n.strong,{children:"Ereignis"})," angeben können. Dafür gibt es anonyme Funktionen. Diese testen wir jetzt gleich. Wir möchten einfach die Hintergrundfarbe von einem Element anpassen, wenn es angeklickt wird. Nehmen wir dafür das ",e.jsx(n.code,{children:"body"}),"-Element."]}),`
`,e.jsx(i,{children:e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`document.querySelector("body").addEventListener("click", () => {
  let body = document.querySelector("body")
  let bgColor = body.style.backgroundColor
  body.style.backgroundColor = "red"

  setTimeout(() => {
    body.style.backgroundColor = bgColor
  }, 1000)
})
`})})}),`
`,e.jsxs(n.p,{children:["In diesem Code haben wir gleich 2 anonyme Funktionen. Eine anonyme Funktion erkennen Sie immer an dem folgenden Muster ",e.jsx(n.code,{children:"() => {...}"}),". Diese anonymen Funktionen sind extrem wichtig in Javascript, und werden überall die ganze Zeit verwendet. Sie sollten diese Funktionen also unbedingt erkennen können. Verstehen und anwenden werden wir später noch dazu kommen. Dank diesen anonymen Funktionen, kann Javascript Code so modular geschrieben werden. Denn oftmals ist es so das sie einfach auf ein ",e.jsx(n.strong,{children:"Ereignis"})," warten, und wenn das ",e.jsx(n.strong,{children:"Ereignis"})," passiert ist, dann soll eine Funktion ausgeführt werden. Da diese Funktion immer anders sein kann, bekommen wir dadurch die Modularität von Javascript."]}),`
`,e.jsx(n.h2,{children:"Code speichern"}),`
`,e.jsxs(n.p,{children:["Natürlich ist es unpraktisch wenn Sie den Code immer wieder in der Konsole eingeben müssen, viel praktischer ist es, wenn Sie den Code in einer Datei speichern können. Das geht ganz einfach. Sie müssen dafür nur die Datei, die den Code enthält, in Ihrem ",e.jsx(n.code,{children:"HTML"}),"-Dokument verknüpfen. Dafür fügen Sie im ",e.jsx(n.code,{children:"HTML"}),"-Dokument im ",e.jsx(n.code,{children:"head"})," die folgende Zeile ein:"]}),`
`,e.jsx(i,{children:e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<script src="./main.js" defer><\/script>
`})})}),`
`,e.jsxs(n.p,{children:["Nun da wir ein Skript haben, in dem wir unsere Funktionen speichern können, können wir auch grössere und kompliziertere Codes machen. Wir möchten nun Elemente dynamisch erstellen und zum Dokument hinzufügen. Wir schreiben also eine Funktion, die ein neues Element erzeugt, und dieses im ",e.jsx(n.code,{children:"body"}),"-Element anhängt."]}),`
`,e.jsx(i,{children:e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`let counter = 0

function createNewElement(){
  let newElement = document.createElement("div")
  counter = counter + 1
  newElement.textContent = "Element " + counter

  let body = document.querySelector("body")
  body.appendChild(newElement)
}
`})})}),`
`,e.jsx(n.p,{children:"Jetzt wo wir diese Funktion haben, können wir die Entwickler-Konsole öffnen, und die Funktion aufrufen. Wir möchten diese Funktion dann noch an ein Ereignis binden. Wir können Funktionen ganz einfach an Elemente anknüpfen, dafür müssen wir nur ein Element haben, dann geht das wie oben."}),`
`,e.jsxs(n.p,{children:["Dafür erstellen wir in ",e.jsx(n.code,{children:"HTML"})," einen Button, und dem ",e.jsx(n.code,{children:"onclick"}),"-Attribut von diesem Button, fügen wir nun die neue Funktion hinzu."]}),`
`,e.jsx(i,{children:e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<button onclick="createNewElement()">Neues Element erstellen</button>
`})})})]})}function m(r={}){const{wrapper:n}=r.components||{};return n?e.jsx(n,{...r,children:e.jsx(t,{...r})}):t(r)}export{m as default};
