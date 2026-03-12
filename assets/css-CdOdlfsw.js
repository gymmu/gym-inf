import{r as s,j as e,h as w,l as A}from"./react-vendor-Dr_i8qOj.js";import{E as k}from"./Editor-Q_wunUOX.js";import{S as u}from"./Select-Btqt14j4.js";import{S as C}from"./Slider-_AeBDCv_.js";import{s as i,B as G}from"./BoxModel-DwZaMjUx.js";import{S as y}from"./gym-pages-Dl9XhRxx.js";import"./vendor-C_cZoT-s.js";import"./monaco-CShXa6_H.js";import"./CodePen.module-BfICubSo.js";function M({htmlCode:o,cssCode:n}){const[g,v]=s.useState("white"),[a,p]=s.useState("black"),[d,b]=s.useState(32),[l,S]=s.useState(o),[r,j]=s.useState(n),[m,f]=s.useState(`
<html>
<body>${l}</body>
<style>${r}</style>
</html>
`);s.useEffect(()=>{const c=`.title {
    background-color: ${g};
    color: ${a};
    font-size: ${d}pt;
}`;j(c)},[g,a,d]),s.useEffect(()=>{const c=setTimeout(()=>{f(`
<html>
<body>${l}</body>
<style>${r}</style>
</html>
`)},1e3);return()=>clearTimeout(c)},[r,l]);function t(c){j(c)}return e.jsx("div",{className:i.wrapper,children:e.jsxs("div",{className:i.gridContainer,children:[e.jsxs("div",{className:i.controlls,style:{gridArea:"controlls"},children:[e.jsx("h3",{children:"Kontrollelemente"}),e.jsxs("div",{className:i.formControll,children:[e.jsx("label",{children:"Hintergrundfarbe: "}),e.jsx(u,{value:g,onChange:c=>v(c.target.value),options:["white","red","green","blue","black"]})]}),e.jsxs("div",{className:i.formControll,children:[e.jsx("label",{children:"Schriftfarbe: "}),e.jsx(u,{value:a,onChange:c=>p(c.target.value),options:["white","red","green","blue","black"]})]}),e.jsx("div",{className:i.formControll,children:e.jsx(C,{sliderText:"Schriftgrösse",value:d,setValue:b,minVal:4,maxVal:56})})]}),e.jsxs("div",{style:{gridArea:"html"},children:[e.jsx("h3",{children:"HTML"}),e.jsx(w,{language:"html",style:A,children:l})]}),e.jsx("div",{style:{gridArea:"css"},children:e.jsx(k,{title:"CSS",language:"css",value:r,handleChange:t})}),e.jsxs("div",{style:{gridArea:"iframe"},children:[e.jsx("h3",{children:"Resultat"}),e.jsx("iframe",{srcDoc:m,title:"output",frameBorder:"0",height:"100%",width:"100%"})]})]})})}function V(){const[o,n]=s.useState(""),[g,v]=s.useState(""),[a,p]=s.useState("flex"),[d,b]=s.useState("row"),[l,S]=s.useState(16),[r,j]=s.useState("normal"),[m,f]=s.useState("flex-start"),[t,c]=s.useState("nowrap"),[h,$]=s.useState(0),[D,E]=s.useState(1),z=`<div class="flex-wrapper">
    <div>box 1</div>
    <div>box 2</div>
    <div>box 3</div>
    <div>box 4</div>
    <div>box 5</div>
    <div>box 6</div>
</div>`;s.useEffect(()=>{const x=`.flex-wrapper {
    display: ${a};
    flex-direction: ${d};
    gap: ${l}px;
    align-items: ${r};
    justify-content: ${m};
    flex-wrap: ${t};
}

.flex-wrapper > div {
    flex-grow: ${h};
    flex-shrink: ${D};
    flex-basis: auto;
}`;N(x)},[a,d,l,r,m,t,h,D]);function N(x){v(x),n(`<html>
    <body>${z}</body>
    <style>${x}</style>
    <style>
body {
    margin: 0;
    padding: 0;
}
.flex-wrapper > div {
    background-color: blue;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 3rem;
    color: white;
    font-size: 1.6rem;
}</style>
</html>`)}return e.jsxs("div",{className:i.gridContainer,children:[e.jsxs("div",{style:{gridArea:"controlls"},className:i.controlls,children:[e.jsx("h3",{children:"Kontrollelemente"}),e.jsxs("div",{className:i.formControll,children:[e.jsx("label",{children:"Display: "}),e.jsx(u,{value:a,onChange:x=>p(x.target.value),options:["block","flex"]})]}),e.jsxs("div",{className:i.formControll,children:[e.jsx("label",{children:"Flex Richtung: "}),e.jsx(u,{value:d,onChange:x=>b(x.target.value),options:["row","column","row-reverse","column-reverse"]})]}),e.jsx("div",{className:i.formControll,children:e.jsx(C,{sliderText:"Abstand:",value:l,setValue:S,minVal:0,maxVal:128})}),e.jsxs("div",{className:i.formControll,children:[e.jsx("label",{children:"Ausrichtung Hauptachse: "}),e.jsx(u,{value:m,onChange:x=>f(x.target.value),options:["flex-start","center","flex-end","space-around","space-between","space-evenly"]})]}),e.jsxs("div",{className:i.formControll,children:[e.jsx("label",{children:"Ausrichtung Cross-Achse: "}),e.jsx(u,{value:r,onChange:x=>j(x.target.value),options:["normal","flex-start","center","flex-end","strech","baseline"]})]}),e.jsxs("div",{className:i.formControll,children:[e.jsx("label",{children:"Umbrechen: "}),e.jsx(u,{value:t,onChange:x=>c(x.target.value),options:["nowrap","wrap"]})]}),e.jsx("div",{className:i.formControll,children:e.jsx(C,{sliderText:"Wachsen:",value:h,setValue:$,minVal:0,maxVal:5})}),e.jsx("div",{className:i.formControll,children:e.jsx(C,{sliderText:"Schrumpfen:",value:D,setValue:E,minVal:0,maxVal:5})})]}),e.jsxs("div",{style:{gridArea:"css"},children:[e.jsx("h3",{children:"CSS Code"}),e.jsx(k,{title:"CSS",language:"css",value:g,handleChange:N})]}),e.jsxs("div",{style:{gridArea:"html"},children:[e.jsx("h3",{children:"HTML Code"}),e.jsx(w,{language:"html",style:A,children:z})]}),e.jsxs("div",{style:{gridArea:"iframe"},children:[e.jsx("h3",{children:"Resultat"}),e.jsx("iframe",{srcDoc:o,title:"output",frameBorder:"0",height:"100%",width:"100%"})]})]})}function T(){const[o,n]=s.useState(""),[g,v]=s.useState(""),[a,p]=s.useState("grid"),[d,b]=s.useState(3),[l,S]=s.useState(16),[r,j]=s.useState("normal"),[m,f]=s.useState("start"),t=`<div class="grid-wrapper">
    <div>box 1</div>
    <div>box 2</div>
    <div>box 3</div>
    <div>box 4</div>
    <div>box 5</div>
    <div>box 6</div>
</div>`;s.useEffect(()=>{const h=`.grid-wrapper {
    display: ${a};
    grid-template-columns: repeat(${d}, 200px);
    gap: ${l}px;
    align-content: ${r};
    justify-content: ${m};
}`;c(h)},[a,d,l,r,m]);function c(h){v(h),n(`<html>
    <body>${t}</body>
    <style>${h}</style>
    <style>
body {
    margin: 0;
    padding: 0;
}
.grid-wrapper {
    border: 1px solid black;
    width: 100%;
    height: 100%;
}
.grid-wrapper > div {
    background-color: pink;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 3rem;
    color: black;
    font-weight: bold;
    border-radius: 0.5rem;
    font-size: 1.6rem;
}</style>
</html>`)}return e.jsxs("div",{className:i.gridContainer,children:[e.jsxs("div",{style:{gridArea:"controlls"},className:i.controlls,children:[e.jsx("h3",{children:"Kontrollelemente"}),e.jsxs("div",{className:i.formControll,children:[e.jsx("label",{children:"Display: "}),e.jsx(u,{value:a,onChange:h=>p(h.target.value),options:["grid","flex"]})]}),e.jsx("div",{className:i.formControll,children:e.jsx(C,{sliderText:"Spalten:",value:d,setValue:b,minVal:1,maxVal:6})}),e.jsx("div",{className:i.formControll,children:e.jsx(C,{sliderText:"Abstand:",value:l,setValue:S,minVal:0,maxVal:128})}),e.jsxs("div",{className:i.formControll,children:[e.jsx("label",{children:"Ausrichtung Inhalt: "}),e.jsx(u,{value:m,onChange:h=>f(h.target.value),options:["start","center","end","space-around","space-between","space-evenly"]})]}),e.jsxs("div",{className:i.formControll,children:[e.jsx("label",{children:"Ausrichtung Cross-Achse: "}),e.jsx(u,{value:r,onChange:h=>j(h.target.value),options:["start","center","end","space-evenly","space-around","space-between"]})]})]}),e.jsxs("div",{style:{gridArea:"css"},children:[e.jsx("h3",{children:"CSS Code"}),e.jsx(k,{title:"CSS",language:"css",value:g,handleChange:c})]}),e.jsxs("div",{style:{gridArea:"html"},children:[e.jsx("h3",{children:"HTML Code"}),e.jsx(w,{language:"html",style:A,children:t})]}),e.jsxs("div",{style:{gridArea:"iframe"},children:[e.jsx("h3",{children:"Resultat"}),e.jsx("iframe",{srcDoc:o,title:"output",frameBorder:"0",height:"100%",width:"100%"})]})]})}function L(){const[o,n]=s.useState(""),[g,v]=s.useState(""),[a,p]=s.useState("header"),[d,b]=s.useState("aside"),[l,S]=s.useState("main"),[r,j]=s.useState("footer"),m=`<div class="grid-wrapper">
    <header style="grid-area: ${a}">header</header>
    <aside style="grid-area: ${d}">aside</aside>
    <main style="grid-area: ${l}">main</main>
    <footer style="grid-area: ${r}">footer</footer>
</div>`;s.useEffect(()=>{f(`.grid-wrapper {
    display: grid;
    height: 82vh;
    grid-template-columns: 20% 1fr;
    grid-template-rows: auto 1fr auto;
    grid-template-areas:
        "header header"
        "aside main"
        "footer footer";
}`)},[a,d,l,r]);function f(t){v(t),n(`<html>
    <body>${m}</body>
    <style>${t}</style>
    <style>
body {
    margin: 0;
    padding: 0;
}
.grid-wrapper > * {
    border: 2px solid black;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
}</style>
</html>`)}return e.jsxs("div",{className:i.gridContainer,children:[e.jsxs("div",{style:{gridArea:"controlls"},className:i.controlls,children:[e.jsx("h3",{children:"Kontrollelemente"}),e.jsxs("div",{className:i.formControll,children:[e.jsx("label",{children:"Header Platzierung: "}),e.jsx(u,{value:a,onChange:t=>p(t.target.value),options:["header","aside","main","footer"]})]}),e.jsxs("div",{className:i.formControll,children:[e.jsx("label",{children:"Aside Platzierung: "}),e.jsx(u,{value:d,onChange:t=>b(t.target.value),options:["header","aside","main","footer"]})]}),e.jsxs("div",{className:i.formControll,children:[e.jsx("label",{children:"Main Platzierung: "}),e.jsx(u,{value:l,onChange:t=>S(t.target.value),options:["header","aside","main","footer"]})]}),e.jsxs("div",{className:i.formControll,children:[e.jsx("label",{children:"Footer Platzierung: "}),e.jsx(u,{value:r,onChange:t=>j(t.target.value),options:["header","aside","main","footer"]})]})]}),e.jsxs("div",{style:{gridArea:"css"},children:[e.jsx("h3",{children:"CSS Code"}),e.jsx(k,{title:"CSS",language:"css",value:g,handleChange:f})]}),e.jsxs("div",{style:{gridArea:"html"},children:[e.jsx("h3",{children:"HTML Code"}),e.jsx(w,{language:"html",style:A,children:m})]}),e.jsxs("div",{style:{gridArea:"iframe"},children:[e.jsx("h3",{children:"Resultat"}),e.jsx("iframe",{srcDoc:o,title:"output",frameBorder:"0",height:"100%",width:"100%"})]})]})}function B(o){const n={code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h2,{children:"Webseiten gestalten"}),`
`,e.jsxs(n.p,{children:[`Das standart Layout das für Webseiten verwendet wird, ist oftmals nicht
angemessen und nicht schön. Zum Glück kann man die Darstellung mit `,e.jsx(n.code,{children:"CSS"}),` super
einfach anpassen. Wie man das macht, schauen wir uns in diesem Kapitel an.`]}),`
`,e.jsxs("div",{className:"full-height",children:[e.jsx(n.h2,{children:"CSS Grundelemente"}),e.jsxs(n.p,{children:["Die Grundelemente in ",e.jsx(n.code,{children:"CSS"}),` sind Hintergrundfarbe, Schriftfarbe und
Schriftgrösse von einem Element. Diese werden hier alle in der Klasse `,e.jsx(n.code,{children:"title"}),`
neu gesetzt.`]}),e.jsx(M,{htmlCode:'<h1 class="title">Hello World!</h1>',css:`.title {
  background-color: white;
  color: black;
  font-size: 32pt;
}`})]}),`
`,e.jsx("div",{className:"full-height",children:e.jsxs(y,{classes:"exercise",children:[e.jsx(n.h2,{children:"Aufgabe"}),e.jsx(n.p,{children:"Finden Sie heraus was die folgenden CSS-Eigenschaften bewirken:"}),e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"font-weight"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"letter-spacing"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"font-family"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"border-radius"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"text-align"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"min-height"})}),`
`]})]})}),`
`,e.jsx(n.h2,{children:"Box-Modell"}),`
`,e.jsxs(n.p,{children:["In ",e.jsx(n.code,{children:"CSS"}),` werden alle Dimensionen von einem Element mit dem Box-Modell
beschrieben. Das Box-Modell ist in 4 Teile unterteilt. Die ersten drei sind
verschiedene Arten von Rändern, der vierte Teil ist der Inhalt des Elementes
selbst. Wir unterscheide von aussen nach innen: `,e.jsx(n.code,{children:"margin, border, padding, content"}),`. In der folgenden Simulation können Sie diese alle anpassen, und sehen
wie sich die Box verändert.`]}),`
`,e.jsx(G,{}),`
`,e.jsxs(y,{children:[e.jsx(n.h2,{children:"Layout Optionen"}),e.jsxs(n.p,{children:[`Im letzten Kapitel haben wir bereits gesprochen dass wir 2 Arten von Elementen
unterscheiden; `,e.jsx(n.code,{children:"inline"})," und ",e.jsx(n.code,{children:"block"}),`. Für modernes Webdesign reicht dies aber
nicht, hier brauchen wir mehr Möglichkeiten. Da kommen `,e.jsx(n.code,{children:"flexbox"})," und ",e.jsx(n.code,{children:"grid"}),` ins
Spiel. Beide kümmern sich darum wie die Elemente in deren Container
ausgerichtet werden. Diese Elemente verhalten sich dann nicht mehr wie `,e.jsx(n.code,{children:"inline"}),`
oder `,e.jsx(n.code,{children:"block"})," Elemente, wir können die viel besser beschreiben."]})]}),`
`,e.jsxs("div",{className:"full-height",children:[e.jsx(n.h2,{children:"Flexbox"}),e.jsx(n.p,{children:`Mit Flexbox können wir die Kinder von einem Element in ein flexibles
dynamisches Layout bringen. Flexbox eignet sich sehr gut um horizontale und
vertikale Listen anzuzeigen, ist also sehr gut geeignet für Navigationslisten.
Flexbox wird aber auch ganz generell gerne verwendet um Elemente zu zentrieren,
da es eine einfache Ausrichtung erlaubt.`}),e.jsx(V,{})]}),`
`,e.jsxs(y,{classes:"exercise",children:[e.jsx(n.h2,{children:"Aufgaben"}),e.jsx(n.p,{children:"Versuchen Sie die folgenden Layouts hinzubekommen:"}),e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:`Alle Boxen in einer Spalte untereinander. Die Boxen nehmen nicht die volle
Breite ein. Es gibt einen Abstand zwischen den Boxen.`}),`
`,e.jsx(n.li,{children:`Alle Boxen in einer Zeile. Die Boxen haben einen Abstand zueinander. Die
Boxen werden in der Breite gestaucht, so dass der Text umbricht.`}),`
`,e.jsx(n.li,{children:`Alle Boxen in einer Zeile. Kein Abstand zwischen den Boxen, alle Boxen werden
gestreckt um die ganze Zeile auszufüllen.`}),`
`]})]}),`
`,e.jsxs("div",{className:"full-height",children:[e.jsx(n.h2,{children:"Grid"}),e.jsx(n.p,{children:`Mit einem Grid-Layout können wir sehr flexible Gitter machen, und diese sogar
in nicht regelmässige Gitter unterteilen. Zuerst schauen wir uns aber die Basis
für Grid-Layouts an.`}),e.jsx(T,{})]}),`
`,e.jsxs("div",{className:"full-height",children:[e.jsxs(y,{classes:"exercise",children:[e.jsx(n.h2,{children:"Aufgaben"}),e.jsx(n.p,{children:"Versuchen Sie die folgenden Layouts hinzubekommen:"}),e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:`Jeweils 3 Boxen in einer Zeile. Alle Boxen haben einen kleinen Abstand. Alle
Boxen sind zentriert.`}),`
`,e.jsx(n.li,{children:"4 und 2 Boxen. Das ganze Gitter wird nach rechts verschoben."}),`
`,e.jsx(n.li,{children:"4 und 2 Boxen. Die letzte Box geht über 3 Spalten."}),`
`,e.jsx(n.li,{children:`3x3 Gitter. Die erste Box geht über 2 Spalten. Die zweite Box geht über 2
Zeilen.`}),`
`,e.jsx(n.li,{children:`4x4 Gitter. Die erste Box geht über 3 Zeilen und 2 Spalten. Der Rest wird
gleichmässig verteilt. Es darf keine freien Plätze im Gitter geben.`}),`
`]})]}),e.jsx(n.h2,{children:"Grid Templates"}),e.jsx(n.p,{children:`Regelmässige Gitter können praktisch sein um etwas anzuzeigen, aber viel besser
sind eigentlich Gitter Vorlagen, da können wir das ganze Layout so auslegen wie
wir das gerne hätten, wir können das also ganz einfach beschreiben.`}),e.jsx(L,{}),e.jsx(n.p,{children:`Dieser Layout-Trick wird oft angewendet um das Gesamtlayout der Webseite zu
erstellen. Man kann es aber auch für Dashbord-Elemente verwenden, und
sogenannte Bento-Grids erstellen.`})]})]})}function J(o={}){const{wrapper:n}=o.components||{};return n?e.jsx(n,{...o,children:e.jsx(B,{...o})}):B(o)}export{J as default};
