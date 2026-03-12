import{j as e}from"./react-vendor-B6C3K7RQ.js";import{E as d}from"./Example-DIlYvJat.js";import"./vendor-DID4YVBO.js";import"./monaco-B8ymEbop.js";import"./gym-pages-BwB6KAce.js";function r(i){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h2,{children:"Daten und Informationen"}),`
`,e.jsxs(n.p,{children:["In der Informatik unterscheiden wir zwischen ",e.jsx(n.strong,{children:"Daten"})," und ",e.jsx(n.strong,{children:"Informationen"}),`.
Das einfachste Beispiel das Sie bereits kennen, ist das `,e.jsx(n.code,{children:"Bit"}),". Das ",e.jsx(n.code,{children:"Bit"}),` selbst
sind die `,e.jsx(n.strong,{children:"Daten"}),`, also das was im Computer gespeichert ist, und die
`,e.jsx(n.strong,{children:"Informationen"}),` die wir damit abbilden können, ist unsere Interpretation vom
Zustand des `,e.jsx(n.code,{children:"Bit"}),". In einem ",e.jsx(n.code,{children:"Bit"}),` können wir genau 2 Zustände speichern, die
`,e.jsx(n.code,{children:"0"})," und die ",e.jsx(n.code,{children:"1"}),". Damit können wir 2 ",e.jsx(n.strong,{children:"Informationen"}),` abbilden, diese aber
unterschiedlich interpretieren. Wir können die Zahlen `,e.jsx(n.code,{children:"0"})," und ",e.jsx(n.code,{children:"1"}),`
interpretieren, oder die Wahrheitswerte `,e.jsx(n.code,{children:"false"})," und ",e.jsx(n.code,{children:"true"}),`. Das ganze können
wir aber noch auf sehr viel mehr Arten Interpretieren. Wir können damit auch
`,e.jsx(n.code,{children:"Tag"})," oder ",e.jsx(n.code,{children:"Nacht"}),", sowie ",e.jsx(n.code,{children:"Innen"})," oder ",e.jsx(n.code,{children:"Aussen"}),` oder alle anderen möglichen
Binären Unterscheidungen interpretieren. Bei der Interpretation sind wir sehr
frei, wir müssen dafür nur den Kontext kennen. Die Anzahl der Interpretationen
ist aber von den Daten vorgegeben, mit einem `,e.jsx(n.code,{children:"Bit"}),` können also nur 2 Zustände
abgebildet werden.`]}),`
`,e.jsxs(n.h3,{children:["Informationen in einem ",e.jsx(n.code,{children:"Byte"})]}),`
`,e.jsxs(n.p,{children:["Wie wir bereits wissen, besteht ein ",e.jsx(n.code,{children:"Byte"})," aus genau 8 ",e.jsx(n.code,{children:"Bits"}),`. Die Daten sind
hier also diese 8 `,e.jsx(n.code,{children:"Bits"}),` in der gegebenen Reihenfolge. Wie wir diese Daten
jetzt aber interpretieren möchten, ist uns überlassen. Wir können ganz einfach
das `,e.jsx(n.code,{children:"Byte"})," als Binärzahl interpretieren, und dann alle Zahlen von ",e.jsx(n.code,{children:"0b0000 0000"}),`
bis `,e.jsx(n.code,{children:"0b1111 1111"}),", also von ",e.jsx(n.code,{children:"0"})," bis ",e.jsx(n.code,{children:"255"}),` abbilden. Damit könnten wir aber nur
mit den Zahlen rechnen, und der Raum der Zahlen ist auch sehr begrenzt. Eine
weitere Interpretation von einem `,e.jsx(n.code,{children:"Byte"})," können wir mit Hilfe des ",e.jsx(n.code,{children:"ASCII"}),`-Codes
machen. So können wir jedem `,e.jsx(n.code,{children:"Byte"}),` ein Symbol aus dem Alphabet zuweisen, und
noch weitere, wie Sonderzeichen und Zahlen. Dank des `,e.jsx(n.code,{children:"ASCII"}),`-Codes, können wir
also Texte auf dem Computer verfassen.`]}),`
`,e.jsx(n.h3,{children:"Andere Arten von Informationen"}),`
`,e.jsxs(n.p,{children:[`Mit Texten können wir bereits sehr viele Informationen abbilden. Manchmal ist
es aber besser ein Bild zu haben. Eine Art ein Bild zu beschreiben, ist jeder
einzelne Bildpunkt genau zu beschreiben. Also die Farbe von jedem Bildpunkt
anzugeben. Die Frage die wir uns nun stellen, ist die folgende: Welche
Informationen möchten wir abbilden und welche Daten brauchen wir dafür. Um eine
Farbe zu beschreiben können wir das einfache `,e.jsx(n.code,{children:"RGB"}),`-Format wählen. Wir geben
dabei die Intensität der Teilfarben `,e.jsx(n.code,{children:"rot"}),", ",e.jsx(n.code,{children:"grün"})," und ",e.jsx(n.code,{children:"blau"}),` an. Eine
Möglichkeit wäre es einfach nur 3 `,e.jsx(n.code,{children:"Bits"}),` zu wählen. Damit können wir sagen ob
eine der Farben vorkommt oder gar nicht. Damit lassen sich aber nicht so viele
Farben erstellen. Es würde also mehr Sinn ergeben, wenn wir mehr `,e.jsx(n.code,{children:"Bits"}),` pro
Farbkanal verwenden. Nehmen wir also einfach ein `,e.jsx(n.code,{children:"Byte"}),` pro Farbkanal. So
brauchen wir also 3 `,e.jsx(n.code,{children:"Bytes"}),` pro Pixel, und können damit jedes beliebige Bild
erklären.`]}),`
`,e.jsxs(d,{title:"Daten vs. Informationen",children:[e.jsxs(n.p,{children:["Die ",e.jsx(n.strong,{children:"Daten"}),` sind das was physikalisch auf dem Computer hinterlegt ist.
Also eine Speicherzelle die entweder geladen und nichtgeladen ist.`]}),e.jsxs(n.p,{children:["Die ",e.jsx(n.strong,{children:"Informationen"}),` sind unsere Interpretation der Daten. Die Anzahl der
Informationen die gespeichert werden können, ist die Anzahl der Zustände
die mit den Daten beschrieben werden können.`]})]}),`
`,e.jsx(n.h3,{children:"Informationsformate"}),`
`,e.jsxs(n.p,{children:[`Die Informationen auf dem Computer sind immer in Dateien organisiert. Jede
Datei folgt einem bestimmten Format. Eine ganze gewöhnliche Textdatei, folgt
einfach nur dem `,e.jsx(n.code,{children:"ASCII"}),"-Code. Da wird jedes ",e.jsx(n.code,{children:"Byte"}),` als eigenes Zeichen gelesen.
Mehr Informationen zum Dateiformat braucht es da nicht.`]}),`
`,e.jsxs(n.p,{children:["Bei einer Bilddatei, wird jedes Pixel in genau 3 ",e.jsx(n.code,{children:"Bytes"}),` gespeichert. Das
reicht aber noch nicht um das Bild zu beschreiben. Wir brauchen noch
zusätzliche Informationen über die Höhe und die Breite des Bildes. Das wird in
der Regel ganz am Anfang der Datei angegeben.`]}),`
`,e.jsx(n.p,{children:`Auch bei PDF-Dateien und anderen Dateiformaten kommt es häufig vor das eine
Version des Dateiformats ganz am Anfang gespeichert wird. Das braucht man damit
das Anzeigeprogramm weiss welche Features in der Datei vorkommen, bzw. wie die
Daten zu lesen sind.`}),`
`,e.jsxs(n.p,{children:[`Sehr häufig werden Textformate verwendet, um die Informationen in einer Datei
abzubilden. Das wird eigentlich immer gemacht wenn wir Programmcode schreiben.
Aber auch wenn wir die Struktur von einer Webseite beschreiben, wir alles in
Text gemacht, und dann vom Webbrowser interpretiert. So sieht ein Titel in
`,e.jsx(n.code,{children:"HTML"})," zum Beispiel so aus:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<h1>Titel</h1>
`})}),`
`,e.jsxs(n.p,{children:["Sehr ähnlich wird es in ",e.jsx(n.code,{children:"Markdown"}),` gemacht. Auch dort nutzen wir die
Schriftzeichen um mehr Informationen in den Text zu bekommen. Ein Titel im
`,e.jsx(n.code,{children:"Markdown"})," schreiben wir so:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-markdown",children:`# Titel
`})}),`
`,e.jsxs(n.p,{children:["Die Daten die darunter liegen, sind einfach wieder eine folge von ",e.jsx(n.code,{children:"Bytes"}),`, mehr
brauchen wir ja nicht um Text darzustellen.`]})]})}function h(i={}){const{wrapper:n}=i.components||{};return n?e.jsx(n,{...i,children:e.jsx(r,{...i})}):r(i)}export{h as default};
