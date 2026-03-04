import{r as a,j as e,d as j}from"./react-vendor-DPtW2uLn.js";import{M as r,D as d}from"./gym-pages-B1WatTOA.js";import{E as l}from"./Example-BOUZ4XC0.js";import{w as u}from"./vendor-BscfZStV.js";import"./monaco-DSiUpym4.js";const{hexy:w}=u;function f(){const[i,n]=a.useState("Hello World!"),[c,m]=a.useState({width:4,numbering:"none",format:"twos",radix:16}),o=a.useRef(null),s=t=>{m(g=>({...g,radix:t}))},x=t=>{n(t)};return e.jsxs("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",gap:"1rem"},children:[e.jsx("button",{onClick:()=>s(2),children:"Binary"}),e.jsx("button",{onClick:()=>s(8),children:"Octal"}),e.jsx("button",{onClick:()=>s(10),children:"Decimal"}),e.jsx("button",{onClick:()=>s(16),children:"Hexadecimal"})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",width:"100%",gap:"1em"},children:[e.jsx(j,{defaultLanguage:"json",value:i,height:"300px",theme:"vs-dark",onChange:x,options:{minimap:{enabled:!1}}}),e.jsx("pre",{ref:o,style:{border:"1px solid black",width:"320px",height:"300px",marginRight:"1em",overflowY:"scroll"},children:w(i,c)})]})]})}function h(i){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h2,{children:"Hexadezimalsystem"}),`
`,e.jsxs(n.p,{children:[`Neben dem Dezimal- und dem Binärzahlensystem, gibt es noch weitere
Zahlensysteme, wie zum Beispiel das Hexadezimalsystem. Das Hexadezimalsystem
ist in der Informatik sehr praktisch, da man ein `,e.jsx(n.code,{children:"Byte"}),` immer mit genau 2
Stellen darstellen kann. Man braucht also deutlich weniger Platz wie beim
Binärsystem und das ganze wird viel einfacher zu lesen. Sie denken nun
wahrscheinlich; wieso denn nicht direkt das Dezimalsystem, das wäre ja am
einfachsten zum lesen. Das mag so sein, aber das Dezimalsystem geht mit einem
`,e.jsx(n.code,{children:"Byte"})," nicht gut auf. Denn ein ",e.jsx(n.code,{children:"Byte"})," kann die Zahlen ",e.jsx(r,{children:"0"}),` bis
`,e.jsx(r,{children:"255"}),` darstellen. Das bedeutet wir brauchen 3 Stellen für das
Dezimalsystem, und können gut `,e.jsx(r,{children:String.raw`\frac{3}{4}`}),` der Werte
nicht verwenden. Weitere Gründe sind das umrechnen in das Binärsystem, das über
das Hexadezimalsystem einfacher ist. Aber was genau ist jetzt das
Hexadezimalsystem?`]}),`
`,e.jsxs(l,{title:"16er-System",children:[e.jsxs(n.p,{children:["Das Hexadezimalsystem ist das Zahlensystem mit der Basis 16, was von ",e.jsx(n.code,{children:"hexa     := 6"})," und ",e.jsx(n.code,{children:"dezimal := 10"}),`, kommt. Ansonsten funktioniert es genau gleich
wie die anderen Zahlensysteme, wir können also den Wert von einer
Hexadezimalzahl ganz einfach im Dezimalsystem berechnen.`]}),e.jsx(d,{children:String.raw`
      92_{\mathrm{Hex}} = 9 \cdot 16^1 + 2 \cdot 16^0 = 146
  `}),e.jsxs(n.p,{children:["Die Zahl ist ja bereits sehr gross mit einer ",e.jsx(r,{children:"9"}),` an der ersten
Stelle, aber noch weit weg von der `,e.jsx(r,{children:"255"}),`. Wie können wir denn
noch grössere Zahlen machen?`]})]}),`
`,e.jsx(n.h3,{children:"Ziffern erweitern"}),`
`,e.jsxs(n.p,{children:["Im Binärsystem hatten wir nur die ",e.jsx(r,{children:"0"})," und ",e.jsx(r,{children:"1"}),` als Ziffern
gebraucht. Im Dezimalsystem brauchen wir alle Ziffern die wir kennen. Nun
brauchen wir aber 16 Ziffern, da wir sonst nicht alle Werte darstellen können.
Deshalb müssen wir die Ziffern einfach erweitern. Das machen wir indem wir das
Alphabet zur Hilfe nehmen. Unsere Ziffern gehen also von `,e.jsx(r,{children:"0"}),` bis
`,e.jsx(r,{children:String.raw`\mathrm{F}`}),", und haben die folgenden Werte:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx(r,{children:String.raw`0 \rightarrow 0`}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(r,{children:String.raw`1 \rightarrow 1`}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(r,{children:String.raw`2 \rightarrow 2`}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(r,{children:String.raw`3 \rightarrow 3`}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(r,{children:String.raw`4 \rightarrow 4`}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(r,{children:String.raw`5 \rightarrow 5`}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(r,{children:String.raw`6 \rightarrow 6`}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(r,{children:String.raw`7 \rightarrow 7`}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(r,{children:String.raw`8 \rightarrow 8`}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(r,{children:String.raw`9 \rightarrow 9`}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(r,{children:String.raw`\mathrm{A} \rightarrow 10`}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(r,{children:String.raw`\mathrm{B} \rightarrow 11`}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(r,{children:String.raw`\mathrm{C} \rightarrow 12`}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(r,{children:String.raw`\mathrm{D} \rightarrow 13`}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(r,{children:String.raw`\mathrm{E} \rightarrow 14`}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(r,{children:String.raw`\mathrm{F} \rightarrow 15`}),`
`]}),`
`]}),`
`,e.jsx(n.p,{children:"Nun können wir also den grössten Wert einer 2-stelligen Hexzahl berechnen:"}),`
`,e.jsx(d,{children:String.raw`
  \mathrm{FF}_\mathrm{Hex} = 15 \cdot 16^1 + 15 \cdot 16^0 = 240 + 15 = 255 
`}),`
`,e.jsxs(n.p,{children:["Das ist unglaublich praktisch für uns, denn so können wir ein ",e.jsx(n.code,{children:"Byte"}),` mit immer
genau 2 Stellen einer Hexzahl angeben. Das ist einer der Gründe weshalb das
Hexadezimalsystem in der Informatik gern verwendet wurde und immer noch wird.`]}),`
`,e.jsxs(l,{title:"Aufgabe: Werte im Dezimalsystem berechnen",children:[e.jsx(n.p,{children:"Berechnen Sie die folgenden Werte im Dezimalsystem:"}),e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx(r,{children:String.raw`62_\mathrm{Hex}`}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(r,{children:String.raw`\mathrm{F0}_\mathrm{Hex}`}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(r,{children:String.raw`\mathrm{0F}_\mathrm{Hex}`}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(r,{children:String.raw`\mathrm{AB}_\mathrm{Hex}`}),`
`]}),`
`]})]}),`
`,e.jsx(n.h3,{children:"Von Dezimal zu Hex"}),`
`,e.jsxs(n.p,{children:[`Auch beim Hexadezimalsystem kann es vorkommen das wir eine Zahl vom
Dezimalsystem ins Hexadezimalsystem bringen müssen. Auch das geht recht
einfach, wir dividieren die Hexzahl durch 16 und der Rest ergibt die nächste
Stelle. Wenn das Resultat grösser als 16 ist, dann wiederholen wir den Vorgang
bis es nicht mehr möglich ist. Oder anders formuliert, wir schauen welche
Stellen aktiv sind. Wir möchten dafür die Zahl
`,e.jsx(r,{children:String.raw`6754_\mathrm{Dec}`}),` in eine Hexzahl umwandeln. Wir
dividieren also immer durch 16 und schauen uns den Rest an.`]}),`
`,e.jsx(d,{children:String.raw`
  \begin{align*}
  6754 : 16 = 422.125 &\Rightarrow \text{0er-Stelle} \Rightarrow 0.125 \cdot 16 = 2 \\
  422 : 16 = 26.375 &\Rightarrow \text{1er-Stelle} \Rightarrow 0.375 \cdot 16 = 6 \\
  26 : 16 = 1.625 &\Rightarrow \text{2er-Stelle} \Rightarrow 0.625 \cdot 16 = 10 \\
  1 : 16 = 0.0625 &\Rightarrow \text{3er-Stelle} \Rightarrow 0.0625 \cdot 16 = 1 \\
  \end{align*}
`}),`
`,e.jsxs(n.p,{children:[`Dann können wir die Zahl einfach an den Stellen ablesen. Wir müssen nur noch
die Ziffern ersetzen, falls eine Stelle einen Wert von 10 oder mehr hat. Hier
ergibt sich also die Zahl
`,e.jsx(r,{children:String.raw`\mathrm{1A62}_\mathrm{Hex}`}),`. Somit können wir also in
beide Richtungen umrechnen.`]}),`
`,e.jsxs(l,{title:"Aufgabe: Umrechnen ins Hexadezimalsystem",children:[e.jsx(n.p,{children:"Bestimmen Sie die Werte der folgenden Zahlen im Hexadezimalsystem:"}),e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx(r,{children:String.raw`\mathrm{16}_\mathrm{Dec}`}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(r,{children:String.raw`\mathrm{162}_\mathrm{Dec}`}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(r,{children:String.raw`\mathrm{240}_\mathrm{Dec}`}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(r,{children:String.raw`\mathrm{255}_\mathrm{Dec}`}),`
`]}),`
`]})]}),`
`,e.jsx(n.h3,{children:"Warum das Hexadezimalsystem?"}),`
`,e.jsxs(n.p,{children:[`Auf modernen Computern wird das Hexadezimalsystem nicht mehr explizit
verwendet, denn es ist für uns unintuitiv und mühsam zum rechnen. Auf modernen
Computern gibt es so viele Schichten, die alles für Sie abstrahieren, das Sie
fast gar nicht in Berührung mit den `,e.jsx(n.code,{children:"Bits"})," und ",e.jsx(n.code,{children:"Bytes"}),` kommen. Bei der
Entstehung der Computer, war das noch ganz anders. In den Anfangszeiten wurde
noch direkt mit `,e.jsx(n.code,{children:"Bytes"})," gearbeitet. Da ein ",e.jsx(n.code,{children:"Byte"}),` aber 8 Stellen hat, und nur
aus `,e.jsx(n.code,{children:"0"})," und ",e.jsx(n.code,{children:"1"}),` besteht, passieren da recht schnell Fehler. Deshalb ist das
Hexadezimalsystem besser, denn man kann die Zahlen kompakter darstellen (nur 2
Stellen) und es wird auch übersichtlicher und einfacher zu merken.`]}),`
`,e.jsxs(n.p,{children:[`Heute finden Sie noch sehr oft Überreste vom Hexadezimalsystem im Umgang mit
dem Computer. Eine ganz normale Textdatei auf dem Computer ist immer nur im
ASCII-Code gespeichert, diese Datei lässt sich dann `,e.jsx(n.code,{children:"Byte"})," für ",e.jsx(n.code,{children:"Byte"}),` im
Hexadezimalcode lesen und mit Hilfe der ASCII-Tabelle direkt übersetzen. Das
folgende Beispiel zeigt wie so eine Datei aussehen könnte. Auf der rechten
Seite haben Sie den Inhalt der Datei, so wie wir als Menschen das ganze gerne
lesen würden, und auf der rechten Seite, finden Sie die Datei im
Hexadezimalformat.`]}),`
`,e.jsx(f,{}),`
`,e.jsx(n.h3,{children:"Farben und Hexadezimalsystem"}),`
`,e.jsxs(n.p,{children:[`Das Hexadezimalsystem ist auch bei den Farben sehr verbreitet, oder war es
früher einmal. Wenn Sie auf dem Computer eine Farbe darstellen möchten, also
auf dem Bildschirm, dann können Sie jede beliebige Farbe erzeugen, indem Sie
das Licht von 3 Grundfarben mischen, und zwar von `,e.jsx(n.code,{children:"rot"}),", ",e.jsx(n.code,{children:"grün"})," und ",e.jsx(n.code,{children:"blau"}),`. Die
Intensität der einzelnen Farben, können Sie jeweils von 0 bis 255 abstufen. So
brauchen Sie genau 1 `,e.jsx(n.code,{children:"Byte"})," für jeden Farbkanal, also 3 ",e.jsx(n.code,{children:"Bytes"}),` pro Pixel. Die
Farben werden dann immer so angegeben: `,e.jsx(n.code,{children:"#FF0037"}),`. Das wäre eine Farbe mit sehr
viel `,e.jsx(n.code,{children:"rot"}),", kein ",e.jsx(n.code,{children:"grün"})," und ein klein wenig ",e.jsx(n.code,{children:"blau"}),"."]})]})}function D(i={}){const{wrapper:n}=i.components||{};return n?e.jsx(n,{...i,children:e.jsx(h,{...i})}):h(i)}export{D as default};
