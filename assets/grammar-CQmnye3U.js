import{j as e}from"./react-vendor-Dr_i8qOj.js";import{D as r,S as s,M as a}from"./gym-pages-Dl9XhRxx.js";import"./vendor-C_cZoT-s.js";import"./monaco-CShXa6_H.js";function d(i){const n={code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h2,{children:"Grammatik"}),`
`,e.jsxs(n.p,{children:["Wir haben das bereits im letzten Kapitel angeschaut, eine ",e.jsx(n.strong,{children:"Grammatik"}),` für eine
`,e.jsx(n.strong,{children:"Computersprache"}),` gibt uns die Regeln an, wie wir diese Sprache interpretieren
müssen. Die Grammatik ist also die Grundlage für die Syntax von einer
`,e.jsx(n.strong,{children:"Computersprache"}),"."]}),`
`,e.jsxs(n.p,{children:[`Eine Grammatik besteht immer aus mehreren Komponenten. Ein Komponente ist das
`,e.jsx(n.strong,{children:"Alphabet"})," der Sprache. Das ",e.jsx(n.strong,{children:"Alphabet"}),` gibt an, welche Zeichen in der
`,e.jsx(n.strong,{children:"Sprache"})," verwendet werden können. Wir haben bereits 3 ",e.jsx(n.strong,{children:"Alphabete"}),`
kennengelernt, jeweils für das `,e.jsx(n.strong,{children:"Binär-"}),", ",e.jsx(n.strong,{children:"Dezimal-"}),` und
`,e.jsx(n.strong,{children:"Hexadezimalsystem"}),". Ein ",e.jsx(n.strong,{children:"Alphabet"})," können wir jeweils so angeben:"]}),`
`,e.jsx(r,{children:String.raw`\begin{align*}
\Sigma_\mathrm{Bin} &= \{0, 1\}\\
\Sigma_\mathrm{Dec} &= \{0, 1, 2, 3, 4, 5, 6, 7, 8, 9\} \\
\Sigma_\mathrm{Hex} &= \{0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F\}
\end{align*}`}),`
`,e.jsxs(n.p,{children:["Wir können nun beliebig viele von diesen ",e.jsx(n.strong,{children:"Terminalsymbolen"}),` aneinander hängen,
und wir bekommen stehts ein Wort, das für diese Sprache gültig ist. Wenn wir
hier von Wörtern sprechen, dann meinen wir damit einfach eine Zeichenfolge, die
für diese Sprache gültig ist.`]}),`
`,e.jsxs(s,{classes:"full-width content-grid",children:[e.jsx(n.h2,{children:"Sprache einschränken"}),e.jsxs(n.p,{children:["Meistens möchten wir nicht mit der ganzen Sprache arbeiten, sondern nur mit einer Untermenge. Das haben wir bereits gesehen, als wir mit Binärzahlen und auch im Hexadezimalsystem gearbeitet haben. Im Hexadezimalsystem, haben wir gesagt, dass und nur 2-stellige Zahlen interessieren. Wenn wir eine solche Einschränkung auf die Sprache machen, dann müssen wir dafür eine Grammatik definieren. Die Grammatik wird in mehreren Regeln definiert. Diese Regeln können wir mit ",e.jsx(n.strong,{children:"Syntaxdiagrammen"})," beschreiben. Dazu machen wir gleich ein Beispiel für 2-stellige Hexadezimalzahlen:"]}),e.jsx(n.p,{children:e.jsx(n.strong,{children:"Hexzahl:"})}),e.jsx(n.pre,{children:e.jsx(n.code,{children:`Start → 0 → Ziffer → End
Start → Ziffer → Ziffer → End
`})}),e.jsx(n.p,{children:e.jsx(n.strong,{children:"Ziffer:"})}),e.jsx(n.pre,{children:e.jsx(n.code,{children:`Start → (0|1|2|3|4|5|6|7|8|9|A|B|C|D|E|F) → End
`})}),e.jsxs(n.p,{children:["Von einer Grammatik muss so lange eine Regel angewendet werden, bis nur noch ",e.jsx(n.strong,{children:"Terminalsymbole"})," im Wort vorkommen. Wenn wir also mit der Regel ",e.jsx(n.code,{children:"Hexzahl"})," starten, dann bauen wir uns zum Beispiel das Wort ",e.jsx(n.code,{children:"0{Ziffer}"}),". Dann müssen wir noch dir Regel für ",e.jsx(n.code,{children:"Ziffer"})," anwenden, und landen dann zum Beispiel bei ",e.jsx(n.code,{children:"0D"}),". Das ist eine gültige 2-stellige Hexadezimalzahl. Wir können jeweils die Grammatik dafür verwenden, um herauszufinden, ob ein Wort gültig ist."]})]}),`
`,e.jsx(n.h2,{children:"Einfache Rechnungen"}),`
`,e.jsx(n.p,{children:`Wir können auch eine Grammatik für einfache Rechnungen definieren. Dafür müssen
wir nur Zahlen erstellen können, diese mit verschiedenen Zeichen kombinieren und
schön können wir einfache Addition und Subtraktion machen. Schauen wir uns dafür
die folgende Grammatik an, mit dem erweiterten Alphabet.`}),`
`,e.jsx(r,{children:String.raw`\Sigma_{\mathrm{Calc}} = \{0, 1, 2, 3, 4, 5, 6, 7, 8, 9, +, -, =\}`}),`
`,e.jsxs(n.p,{children:["Dazu können wir die folgenden ",e.jsx(n.strong,{children:"Syntaxdiagramme"})," aufzeichnen."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Rechnung"}),":"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`Start → Zahl → Operation → Zahl → = → Zahl → End
               ↑            ↓
               └────────────┘
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Zahl"}),":"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`Start → Ziffer → End
         ↑  ↓
         └──┘
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Operation"}),":"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`Start → (+|-) → End
`})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Ziffer:"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`Start → (0|1|2|3|4|5|6|7|8|9) → End
`})}),`
`,e.jsx(n.p,{children:`Mit dieser Grammatik können wir alle Additionen und Subtraktionen darstellen. Ob
diese dann richtig gerechnet werden, kann die Grammatik nicht entscheiden. Aber
dank der Grammatik können wir eine Rechnung in der Form`}),`
`,e.jsxs(n.p,{children:[e.jsx(a,{children:String.raw`12 + 4 - 10 = 6`}),` auslesen, und zwar so das wir die
einzelnen Teile erhalten. Wir können aus der Rechnung also einen `,e.jsx(n.strong,{children:"Syntaxbaum"}),`
erstellen. Diesen können wir dann berechnen und prüfen ob die Rechnung korrekt
ist. Dafür brauchen wir dann aber ein weiteres Programm, das rechnen kann.`]}),`
`,e.jsxs(s,{classes:"exercise",children:[e.jsx(n.h2,{children:"Aufgaben"}),e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[`Prüfen Sie ob die obere Grammatik auch mit folgender Rechnung funktioniert:
`,e.jsx(a,{children:"2 - 4 = -2"}),`. Falls nicht, passen Sie die Syntaxdiagramme so an,
dass es funktioniert.`]}),`
`,e.jsxs(n.li,{children:["Erweitern Sie das obere Beispiel, dass auch ",e.jsx(n.code,{children:"*"})," und ",e.jsx(n.code,{children:"/"})," unterstützt wird."]}),`
`,e.jsxs(n.li,{children:["Schauen Sie sich nochmals die Sprache ",e.jsx(n.code,{children:"Markdown"}),` an. Verwenden Sie dazu den
folgenden `,e.jsx("a",{href:"/gym-inf/obsidian-intro.md",target:"_blank",children:"Link"}),`.
Geben Sie eine Grammatik für eine minimale Version von `,e.jsx(n.code,{children:"Markdown"}),` an. Die
Grammatik soll folgende Dinge erkennen können: Abschnitte, Title, Listen,
Links.`]}),`
`,e.jsx(n.li,{children:`Entwickeln Sie eine eigene Grammatik um die Struktur von Textdokumenten zu
beschreiben. Tauschen Sie Ihre Grammatik mit jemandem aus, und geben Sie ein
Feedback dazu.`}),`
`]})]})]})}function m(i={}){const{wrapper:n}=i.components||{};return n?e.jsx(n,{...i,children:e.jsx(d,{...i})}):d(i)}export{m as default};
