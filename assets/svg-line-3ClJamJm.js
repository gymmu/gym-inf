import{j as e}from"./react-vendor-Dr_i8qOj.js";import{L as t,S as s}from"./gym-pages-Dl9XhRxx.js";import"./vendor-C_cZoT-s.js";import r from"./CodePenSVG-BMDM7xvb.js";import"./monaco-CShXa6_H.js";import"./Editor-Q_wunUOX.js";import"./CodePen.module-BfICubSo.js";function d(i){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h2,{children:"Linie"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"SVG"})," hat auch ganz einfache Formen, wie zum Beispiel die Linie. Diese schauen wir uns in diesem Kapitel an."]}),`
`,e.jsx(t,{children:e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Sie wissen wie man in ",e.jsx(n.strong,{children:"SVG"})," eine Linie zeichnet."]}),`
`,e.jsx(n.li,{children:"Sie können Start- und Endpunkt der Linie verändern."}),`
`,e.jsx(n.li,{children:"Sie können die Farbe der Linie anpassen."}),`
`,e.jsx(n.li,{children:"Sie können die Breite der Linie anpassen."}),`
`,e.jsx(n.li,{children:"Sie können die Zeichenart der Linie verändern."}),`
`]})}),`
`,e.jsx(n.p,{children:"Linien sind sehr einfache Objekte. Sie haben einen Start- und einen Endpunkt. Diese werden bei den Attributen angegeben, dann wird eine ganz normale schwarze Linie von einem Punkt zum anderen gezeichnet. So wie in dem folgenden Beispiel."}),`
`,e.jsx(r,{classes:"full-width",initialCode:`<svg viewBox="0 0 300 300" width="300">
  <line
    x1="50"
    y1="50"
    x2="150"
    y2="150"
    stroke="black"
  />
</svg>`}),`
`,e.jsxs(s,{children:[e.jsx(n.h2,{children:"Eigenschaften der Linie verändern"}),e.jsxs(n.p,{children:["Die einfachsten Eigenschaften einer Linie die wir verändern können, sind der Start- und der Endpunkt. Das kennen wir bereits vom Kreis und vom Rechteck. Diese hatten aber noch die Eigenschaft ",e.jsx(n.code,{children:"fill"}),", was bei einer Linie aber keinen Sinn mehr ergibt. Neu ist die Eigenschaft ",e.jsx(n.code,{children:"stroke"}),", damit geben wir an, in welcher Farbe die Linie gezeichnet werden soll."]}),e.jsxs(n.p,{children:["Neben ",e.jsx(n.code,{children:"stroke"})," gibt es noch weitere Eigenschaften die bestimmen wie die Linie gezeichnet wird. Da gibt es noch ",e.jsx(n.code,{children:"stroke-width"}),", damit können wir die Breite der Linie bestimmen."]}),e.jsxs(n.p,{children:["Möchten Sie eine Linie gestrichelt zeichnen, können Sie dafür das Attribut ",e.jsx(n.code,{children:"stroke-dasharray"})," verwenden. Hier geben Sie eine Liste an, in der Sie bestimmen wie lange gezeichnet wird, und wie viel nicht gezeichnet wird. So wie in dem Beispiel hier."]}),e.jsx(r,{classes:"full-width",initialCode:`<svg viewBox="0 0 300 300" width="300">
  <line x1="50" y1="50" x2="150" y2="150"
    stroke="black"
    stroke-dasharray="5,2"
  />
</svg>`}),e.jsx(n.h3,{children:"Aufgabe"}),e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Passen Sie die Werte in ",e.jsx(n.code,{children:"stroke-dasharray"})," an. Es können auch mehr wie 2 Werte verwendet werden."]}),`
`,e.jsxs(n.li,{children:["Finden Sie heraus, was das Attribut ",e.jsx(n.code,{children:"stroke-dashoffset"})," bewirkt."]}),`
`]})]}),`
`,e.jsx(n.h2,{children:"Mehrere Linien"}),`
`,e.jsx(n.p,{children:"Sie können natürlich auch mehrere Linien Zeichnen und zum Beispiel ein Dreieck erstellen. Dazu brauchen Sie einfach mehrere Linien."}),`
`,e.jsx(r,{classes:"full-width",initialCode:`<svg viewBox="0 0 300 300" width="300">
  <line x1="150" y1="50" x2="50" y2="250"
    stroke="black"
    stroke-width="5"
  />
  <line x1="50" y1="250" x2="250" y2="250"
    stroke="green"
    stroke-width="5"
  />
  <line x1="150" y1="50" x2="250" y2="250"
    stroke="pink"
    stroke-width="5"
  />
</svg>`}),`
`,e.jsx(n.p,{children:"Wie Sie sehen können, sind die Ecken nicht schön abgerundet. Das macht natürlich sinn, denn wir zeichnen nicht eine einzige Figur, sondern 3 Linien die wir übereinander legen. Im nächsten  Kapitel schauen wir Pfade an, da sehen Sie wie man ein Dreieck als eine einzige Figur zeichnen kann."}),`
`,e.jsxs(s,{className:"exercise",children:[e.jsx(n.h2,{children:"Aufgaben"}),e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Erstellen Sie eine Grafik mit 2 parallelen Linien. Die Linien sollen möglichst viele unterschiedliche Eigenschaften haben."}),`
`,e.jsxs(n.li,{children:["Verwenden Sie das ",e.jsx(n.code,{children:"line"}),"-Element, um 3 Rechtecke in unterschiedlichen Farben zu erzeugen."]}),`
`]})]})]})}function w(i={}){const{wrapper:n}=i.components||{};return n?e.jsx(n,{...i,children:e.jsx(d,{...i})}):d(i)}export{w as default};
