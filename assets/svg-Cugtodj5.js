import{j as e}from"./react-vendor-DPtW2uLn.js";import{L as t,S as s}from"./gym-pages-CLbxl-EG.js";import"./vendor-BscfZStV.js";import{F as r}from"./FiddleSVG-DGTsMb8t.js";import{P as c}from"./fms-pages-JOU2ocRE.js";import"./monaco-DSiUpym4.js";function d(i){const n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h2,{children:"SVG"}),`
`,e.jsxs(n.p,{children:["Wir haben das ",e.jsx(n.code,{children:".svg"}),"-Format bereits im letzten Kapitel kurz angeschaut. In diesem Kapitel möchten wir herausfinden wie genau ",e.jsx(n.strong,{children:"SVG"})," funktioniert, und was wir alles damit machen können."]}),`
`,e.jsx(t,{children:e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Sie wissen was ",e.jsx(n.strong,{children:"SVG"})," bedeutet."]}),`
`,e.jsxs(n.li,{children:["Sie kennen den grundlegenden Aufbau von einer ",e.jsx(n.code,{children:".svg"}),"-Datei."]}),`
`,e.jsxs(n.li,{children:["Sie kennen das Koordinatensystem, das in ",e.jsx(n.strong,{children:"SVG"})," verwendet wird."]}),`
`,e.jsx(n.li,{children:"Sie wissen was Attribute sind."}),`
`,e.jsxs(n.li,{children:["Sie können Kreise und Rechtecke von unterschiedlicher Grösse und Farbe im ",e.jsx(n.strong,{children:"SVG"})," platzieren."]}),`
`]})}),`
`,e.jsxs(n.p,{children:["Die Abkürzung ",e.jsx(n.strong,{children:"SVG"})," steht für ",e.jsx(n.strong,{children:"s"}),"calable ",e.jsx(n.strong,{children:"v"}),"ector ",e.jsx(n.strong,{children:"g"}),"raphics. Somit ist ",e.jsx(n.strong,{children:"SVG"})," vom Typ der Vektorgrafiken, und beliebig zoombar. Das mach es sehr praktisch für Icons die oftmals auf Webseiten verwendet werden."]}),`
`,e.jsxs(s,{children:[e.jsx(n.h2,{children:"Genereller Aufbau"}),e.jsxs(n.p,{children:["Eine ",e.jsx(n.code,{children:".svg"}),"-Datei ist immer gleich aufgebaut. Es gibt ein einziges Wurzelelement, das alle anderen Elemente enthält. Im Wurzelelement geben wir die Grösse für das verwendete Koordinatensystem an."]}),e.jsx(c,{children:e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-svg",children:`<svg width="200" height="200">

</svg>
`})})}),e.jsxs(n.p,{children:["Dieses Wurzelelement beschreibt uns die Leinwand die wir verwenden können, um weitere Element darauf zu malen. Dabei beginnt das Koordinatensystem oben links. Ein Element in ",e.jsx(n.strong,{children:"SVG"})," wird immer in dieser Form geschrieben ",e.jsx(n.code,{children:"<element>...</element>"}),". Hat ein Element keinen Inhalt, dann schreibt man es in der Regel in der Kurzform ",e.jsx(n.code,{children:"<element />"}),"."]}),e.jsxs(n.p,{children:["Die Eigenschaften von einem Element, werden über die Attribute angegeben. Die Attribute werden innerhalb der ",e.jsx(n.code,{children:"<>"})," angegeben, direkt nach dem Typ des Elements. Also wie oben im Beispiel ",e.jsx(n.code,{children:'<svg width="200" height="200">'}),". Hier sind ",e.jsx(n.code,{children:"width"})," und ",e.jsx(n.code,{children:"height"})," die Attribute, und legen die Eigenschaften des ",e.jsx(n.code,{children:"svg"}),"-Elements fest."]})]}),`
`,e.jsx(n.h2,{children:"Einfache Elemente (Kreis)"}),`
`,e.jsxs(n.p,{children:["Eines der einfachsten Elemente haben wir bereits gesehen, das ist der Kreis. Wir können einen Kreis ganz einfach zeichnen lassen, indem wir die Eigenschaften des Kreises mit den Attributen beschreiben. Also ein Kreis mit dem Mittelpunkt an der Koordinate ",e.jsx(n.code,{children:"100, 100"})," und dem Radius ",e.jsx(n.code,{children:"50"})," können wir ganz einfach so beschreiben: ",e.jsx(n.code,{children:'<circle cx="100" cy="100" r="50" />'}),". Da nichts in den Kreis hinein kommt, können wir hier die Kurzform verwenden."]}),`
`,e.jsx(r,{classes:"full-width",svg:`<svg height="200" width="200">
  <circle cx="100" cy="100" r="50" fill="#000000" />
</svg>`}),`
`,e.jsxs(s,{classes:"exercise",children:[e.jsx(n.h2,{children:"Aufgaben"}),e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Ändern Sie die Farbe und Position des Kreises."}),`
`,e.jsx(n.li,{children:"Fügen Sie einen zweiten Kreis mit anderen Eigenschaften hinzu."}),`
`]})]}),`
`,e.jsx(n.h2,{children:"Weitere Elemente (Rechteck)"}),`
`,e.jsx(n.p,{children:"Sie können nicht nur Kreise zeichnen, sondern auch Rechtecke. Diese haben jedoch leicht andere Eigenschaften. Zum Beispiel können Sie einen Kreis sehr gut über den Mittelpunkt beschreiben. Bei einem Rechteck geht dies weniger gut. Da bietet sich aber die obere linke Ecke an. Also können Sie ein Rechteck wie folgt angeben."}),`
`,e.jsx(r,{classes:"full-width",svg:`<svg height="200" width="200">
  <rect x="50" y="50" height="100" width="100" fill="#000000" />
</svg>`}),`
`,e.jsxs(s,{classes:"exercise",children:[e.jsx(n.h2,{children:"Aufgaben"}),e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Ändern Sie die Farbe und Position des Rechtecks."}),`
`,e.jsx(n.li,{children:"Fügen Sie ein zweites Rechteck mit anderen Eigenschaften hinzu."}),`
`]})]}),`
`,e.jsx(n.h2,{children:"Besserer Editor"}),`
`,e.jsxs(n.p,{children:["Die Grafiken die Sie hier erstellen können, sind nur zum üben uns ausprobieren gedacht. Für komplexere Grafiken, können Sie den folgenden Online-Editor verwenden: ",e.jsx("a",{href:"https://editsvgcode.com/",target:"_blank",children:"EditSVGCode"})]}),`
`,e.jsxs(s,{classes:"exercise",children:[e.jsx(n.h2,{children:"Aufgabe"}),e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Erstellen Sie eine Grafik mit mehreren Kreisen und Rechtecken."}),`
`]})]})]})}function x(i={}){const{wrapper:n}=i.components||{};return n?e.jsx(n,{...i,children:e.jsx(d,{...i})}):d(i)}export{x as default};
