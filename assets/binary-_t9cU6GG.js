import{j as e}from"./react-vendor-Dr_i8qOj.js";import{M as i,D as t}from"./gym-pages-Dl9XhRxx.js";import{E as a}from"./Example-CV4p7Pnw.js";import"./vendor-C_cZoT-s.js";import"./monaco-CShXa6_H.js";const h="_wrapper_1ku6b_1",c="_tip_1ku6b_6",d={wrapper:h,tip:c};function s({tip:r,children:n}){return e.jsxs("div",{className:d.wrapper,children:[e.jsx("div",{className:d.tip,children:r}),n]})}function l(r){const n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h2,{children:"Binärsystem"}),`
`,e.jsxs(n.p,{children:[`Das Binärsystem ist eines von vielen Zahlensystem. Es ist besonders in der
Informatik sehr verbreitet, da die Grundeinheit des Computers das `,e.jsx(n.code,{children:"Bit"}),` ist,
und somit nur 2 Werte annehmen kann. Für uns scheint das Binärsystem auf den
ersten Blick sehr unintuitiv und kompliziert, da wir uns das Dezimalsystem
gewohnt sind. Die Beherrschung des Binärsystems ist vor allem auch wichtig, um
den folgenden Witz zu verstehen.`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-text",children:`Es gitb nur 10 Arten von Menschen, diejenigen die das Binärsystem verstehen und
die anderen.
`})}),`
`,e.jsx(n.h2,{children:"Dezimalsystem"}),`
`,e.jsx(n.p,{children:`Bevor wir uns das Binärsystem aber genauer anschauen, versuchen wir zu
verstehen, wie Zahlensysteme generell funktionieren. Dafür schauen wir und das
Dezimalsystem genauer an, da Sie dieses schon kennen.`}),`
`,e.jsxs(n.p,{children:["Die Zahl ",e.jsx(i,{children:"273"}),` im Dezimalsystem, hat einen klaren Wert für Sie,
genau wie die Zahl `,e.jsx(i,{children:"721."}),` Für Sie ist auch absolut klar dass
`,e.jsx(i,{children:"273 < 721"}),` ist. Dazu müssen Sie nicht mal die ganze Zahl anschauen,
es reicht völlig wenn Sie auf die hunderter Stelle schauen. Aber was genau ist
denn die hunderter Stelle?`]}),`
`,e.jsx(n.p,{children:`Um den Wert einer mehrstelligen Zahl zu erhalten, wenden wir eigentlich immer
einen Trick an. Im Dezimalsystem haben wir diese Stellen sogar benannt. Der
Trick sieht dann wie folgt aus:`}),`
`,e.jsx(t,{children:String.raw`273 = 2 \cdot 100 + 7 \cdot 10 + 3 \cdot 1`}),`
`,e.jsxs(n.p,{children:[`So können wir den Wert der Zahl ganz einfach berechnen. Da es aber aufwendig
ist, die Zahl immer so aufzuschreiben, schreibt man die Zahl in der Kurzform,
so wie sie auf der linken Seite steht, also `,e.jsx(i,{children:"273"}),`. Wir können die
Regel mit der Summe die wir oben verwendet haben, aber noch allgemeiner
schreiben. Wenn wir das machen, dann sollten wir danach jedes beliebige
Zahlensystem verstehen, oder zumindest den Wert der Zahl im Dezimalsystem
berechnen können. Die Regel sieht wie folgt aus:`]}),`
`,e.jsx(t,{children:String.raw`273 = 2 \cdot 10^2 + 7 \cdot 10^1 + 3 \cdot 10^0`}),`
`,e.jsxs(n.p,{children:["Beginnen wir bei ",e.jsx(i,{children:"0"}),` zu zählen, so wie es in der Informatik üblich
ist, dann können wir den Wert einer Stelle immer mit
`,e.jsx(i,{children:String.raw`\mathrm{Basis}^\mathrm{Stelle}`}),` darstellen. So kommen
wir auf den Wert der Stelle, also `,e.jsx(i,{children:"10^0"}),` für die Einerstelle,
`,e.jsx(i,{children:"10^1"})," für die Zehnerstelle, ",e.jsx(i,{children:"10^2"}),` für die
Hunderterstelle und so weiter.`]}),`
`,e.jsxs(n.p,{children:[`Der Wert an der jeweiligen Stelle, wird dann mit der Ziffer angegeben. Also die
Zahl `,e.jsx(i,{children:"273"})," hat an der Hunderterstelle den folgenden Wert:"]}),`
`,e.jsx(t,{children:String.raw`2 \cdot 10^2`}),`
`,e.jsx(n.p,{children:"Die gleichen Regeln lassen sich nun auf alle anderen Zahlensysteme anwenden."}),`
`,e.jsx(n.h2,{children:"Ziffern im Binärsystem"}),`
`,e.jsxs(n.p,{children:["Das Binärsystem hat nur 2 Ziffern, die ",e.jsx(i,{children:"0"})," und die ",e.jsx(i,{children:"1"}),`.
Sie können also Zahlen nur mit diesen beiden Ziffern schreiben, wie zum
Beispiel die Zahl `,e.jsx(i,{children:String.raw`10_{\mathrm{Bin}}`}),`. Oftmals
schreiben wir dafür auch `,e.jsx(n.code,{children:"0b10"}),`, wenn es einfacher ist. Das zweite ist auch die
Schreibweise die in der Informatik verbreitet ist, das erste wird mehr in der
Mathematik verwendet.`]}),`
`,e.jsx(n.p,{children:`Aber was hat diese Zahl nun für einen Wert? Das können wir mit der Regel von
oben ganze einfach ausrechnen:`}),`
`,e.jsx(t,{children:String.raw`1 \cdot 2^1 + 0 \cdot 2^0 = 2_\mathrm{Dec}`}),`
`,e.jsx(n.p,{children:`Genau das Schema können Sie bei allen Binärzahlen anwenden, dann erhalten Sie
immer der Wert im Dezimalsystem.`}),`
`,e.jsxs(a,{title:"Aufgabe: Von Binär zu Dezimal",children:[e.jsx(n.p,{children:"Bestimmen Sie den Dezimalwert der folgenden Binärzahlen."}),e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx(s,{tip:"4",children:e.jsx(n.code,{children:"0b0100"})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(s,{tip:"10",children:e.jsx(n.code,{children:"0b1010"})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(s,{tip:"1",children:e.jsx(n.code,{children:"0b0001"})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(s,{tip:"15",children:e.jsx(n.code,{children:"0b1111"})}),`
`]}),`
`]}),e.jsx(n.p,{children:"Bestimmen Sie auch den Wert von diesen grösseren Binärzahlen"}),e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx(s,{tip:"75",children:e.jsx(n.code,{children:"0b1000 1011"})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(s,{tip:"24",children:e.jsx(n.code,{children:"0b0001 1000"})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(s,{tip:"255",children:e.jsx(n.code,{children:"0b1111 1111"})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(s,{tip:"240",children:e.jsx(n.code,{children:"0b1111 0000"})}),`
`]}),`
`]}),e.jsxs(n.p,{children:["Die grösste Zahl mit 8 Stellen ist also die Zahl ",e.jsx(n.code,{children:"0b1111 1111"}),`, mit dem
Wert 255. Das ist genau ein `,e.jsx(n.code,{children:"Byte"})," wo alle ",e.jsx(n.code,{children:"Bits"})," auf ",e.jsx(n.code,{children:"1"}),` gesetzt wurden.
Daraus können Sie ablesen das Sie mit einem `,e.jsx(n.code,{children:"Byte"}),` genau 256 Informationen
darstellen können, also die Zahlen von 0 bis 255.`]})]}),`
`,e.jsx(n.h2,{children:"Von der Dezimalzahl zur Binärzahl"}),`
`,e.jsx(n.p,{children:`Dieser Weg wird deutlich weniger oft gebraucht, dennoch schauen wir es kurz an.
Wenn Sie eine Dezimalzahl in eine Binärzahl umwandeln möchten, können Sie mit
einem ganz einfachen Algorithmus vorgehen. Dabei schreiben wir die Binärzahl
von hinten nach vorne.`}),`
`,e.jsxs(n.p,{children:["Nehmen wir als Beispiel die Zahl ",e.jsx(i,{children:String.raw`43_\mathrm{Dec}`}),`.
Nun dividieren wir diese Zahl durch 2, und wir notieren den Rest. Wenn es einen
Rest gibt, dann schreiben wir eine `,e.jsx(i,{children:"1"}),`. Wenn es keinen Rest gibt,
dann schreiben wir an der Stelle eine `,e.jsx(i,{children:"0"}),`. Dann rechnen wir mit dem
Ergebnis weiter, lassen den Rest aber weg. Das machen wir bis wir bei
`,e.jsx(i,{children:"0"})," angekommen sind."]}),`
`,e.jsx(t,{children:String.raw`
  \begin{align*}
  43 : 2 = 21.5 &\Rightarrow \text{0er-Stelle} \Rightarrow 0.5 \cdot 2 = 1 \\
  21 : 2 = 10.5 &\Rightarrow \text{1er-Stelle} \Rightarrow 0.5 \cdot 2 = 1 \\
  10 : 2 = 5 &\Rightarrow \text{2er-Stelle} \Rightarrow 0.0 \cdot 2 = 0 \\
  5 : 2 = 2.5 &\Rightarrow \text{3er-Stelle} \Rightarrow 0.5 \cdot 2 = 1 \\
  2 : 2 = 1 &\Rightarrow \text{4er-Stelle} \Rightarrow 0.0 \cdot 2 = 0 \\
  1 : 2 = 0.5 &\Rightarrow \text{5er-Stelle} \Rightarrow 0.5 \cdot 2 = 1
  \end{align*}
`}),`
`,e.jsxs(n.p,{children:[`Wir erhalten damit also die folgende Binärzahl:
`,e.jsx(i,{children:String.raw`101011_\mathrm{Bin}`}),"."]})]})}function w(r={}){const{wrapper:n}=r.components||{};return n?e.jsx(n,{...r,children:e.jsx(l,{...r})}):l(r)}export{w as default};
