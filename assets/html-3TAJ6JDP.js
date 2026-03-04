import{j as e}from"./react-vendor-DPtW2uLn.js";import{V as r}from"./gym-pages-CLbxl-EG.js";import{P as t}from"./fms-pages-JOU2ocRE.js";import"./vendor-BscfZStV.js";import"./monaco-DSiUpym4.js";function s(i){const n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h2,{children:"Webdesign mit HTML uns CSS"}),`
`,e.jsx(n.p,{children:"Das moderne Web hat sehr viel zu bieten. Die Grundlage dafür sind Webseiten. Jede Person kann eine eigene Webseite erstellen und diese auch für andere zugänglich machen. Solange es nur um Informationen geht, die auf einer Webseite dargestellt werden, ist das sehr einfach."}),`
`,e.jsxs(n.p,{children:["Wir werden uns in dem Kapitel damit beschäftigen eine eigene Webseite zu erstellen, und diese dann auch einfach zu gestalten. Dafür müssen wir die Grundkonzepte von ",e.jsx(n.code,{children:"HTML"})," und ",e.jsx(n.code,{children:"CSS"})," lernen."]}),`
`,e.jsx(n.h2,{children:"HTML"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"HTML"})," ist die Sprache in der die Struktur von einer Webseite beschrieben wird. Das hat noch nichts mit der Gestaltung zu tun, wir beschrieben nur die Struktur, also ob ein Element ein Titel ist, oder ob es ein Bild sein soll, oder ein Link. Dafür wird eine Sprache verwendet, die sich aus ",e.jsx(n.code,{children:"XML"})," entwickelt hat. Die Sprache ist sehr einfach und alles darin ist in Blöcken aufgebaut. Zum Beispiel sieht ein Titel in ",e.jsx(n.code,{children:"HTML"})," so aus: ",e.jsx(n.code,{children:"<h1>Das ist ein Titel</h1>"}),". Elemente können aber auch Attribute haben, das sind Eigenschaften die nicht angezeigt werden, so kann man bei einem Link zum Beispiel sagen, auf welche Webseite man gelenkt werden soll, dass geht mit dem folgenden Element: ",e.jsx(n.code,{children:'<a href="https://www.gym-muttenz.ch">Gym Muttenz</a>'}),". Hier ist ",e.jsx(n.code,{children:"href"})," das Attribut, und der Wert darin, ist die Webseite zu der wir geleitet werden. Das was zwischen den ",e.jsx(n.code,{children:">...<"})," steht, ist immer das was auf der Webseite angezeigt wird."]}),`
`,e.jsxs(n.p,{children:["Eine einfache ",e.jsx(n.code,{children:"HTML"}),"-Datei, kann also so aussehen:"]}),`
`,e.jsx(t,{children:e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<header>
    <h1>Titel</h1>
</header>
<main>
    <section>
        <h2>Abschnitt 1</h2>
        <p>Das hier ist ein Paragraph.</p>
        <p>hier ist noch ein weiterer Paragraph.</p>
    </section>
    <section>
        <h2>Abschnitte mit einem Link</h2>
        <p>
            Hier ist ein Paragraph mit einem Link zum <a href="https://www.gym-muttenz.ch">Gym Muttenz</a>
        </p>
    </section>
</main>
<footer>Das ist die Fusszeile</footer>
`})})}),`
`,e.jsxs(n.p,{children:["Das gibt uns die ganze Struktur der Webseite an. Es wird aber noch nichts besonders dargestellt. Dafür brauchen wir eine weitere Sprache, und zwar ",e.jsx(n.code,{children:"CSS"}),"."]}),`
`,e.jsx(n.h2,{children:"CSS"}),`
`,e.jsxs(n.p,{children:["Mit der ",e.jsx(n.code,{children:"CSS"}),"-Sprache, können wir das aussehen von einer Webseite anpassen. Hier sind praktische keine Grenzen gesetzt, man kann der Kreativität vollen lauf lassen, wenn man verstanden hat, wie ",e.jsx(n.code,{children:"CSS"})," funktioniert."]}),`
`,e.jsxs(n.p,{children:["Ganz Grundlegend gibt es in ",e.jsx(n.code,{children:"CSS"})," Regeln, die beschreiben wie ein Element dargestellt wird. So kann man zum Beispiel eine Regel erstellen, die besagt das alle Title eine grüne Schriftfarbe haben sollen. Diese Regeln gehen aber noch sehr viel weiter, man kann beinahe alles auf einer Webseite mit ",e.jsx(n.code,{children:"CSS"})," verändern."]}),`
`,e.jsx(n.p,{children:"Hier finden Sie eine einfache Regel:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`h1 {
    color: green;
    background-color: #efefef;
    text-align: center;
    padding-block: 1em;
}
`})}),`
`,e.jsxs(n.p,{children:["Das was vor der Klammer steht, also hier ",e.jsx(n.code,{children:"h1"}),", sagt worauf die Regel angewendet wird. Innerhalb des Blocks, stehen einfach die Eigenschaften die angepasst werden können."]}),`
`,e.jsx(n.h2,{children:"Nachschlagen"}),`
`,e.jsxs(n.p,{children:["Es gibt unzählige ",e.jsx(n.code,{children:"HTML"}),"-Elemente und ",e.jsx(n.code,{children:"CSS"}),"-Eigenschaften. Viele davon kann man einfach mit einer Internetsuche herausfinden, oder man kann sich gezielt durch diese beiden Webseiten arbeiten:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx("a",{href:"https://www.w3schools.com/html/",target:"_blank",children:"HTML"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx("a",{href:"https://www.w3schools.com/css/",target:"_blank",children:"CSS"}),`
`]}),`
`]}),`
`,e.jsx(n.h2,{children:"Testen im Editor"}),`
`,e.jsx(n.p,{children:"Wir werden alles in CodePen testen, am besten machen Sie sich dort einen gratis Account. Bedenken Sie das all ihr Code dort öffentlich ist, also schreiben Sie keine persönlichen Dinge rein, oder Dinge die nicht in den öffentlichen Raum gehören."}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx("a",{href:"https://codepen.io/",target:"_blank",children:"CodePen"}),`
`]}),`
`]}),`
`,e.jsx(n.h2,{children:"Video"}),`
`,e.jsx(n.p,{children:"Für einen einfachen Start, können Sie dem folgenden Video folgen. Sie müssen nicht alles genau so machen wie im Video, sondern können immer Ihre eigenen Stiele und den eigenen Inhalt anwenden."}),`
`,e.jsx(r,{url:"I_jdQC7w7_I"})]})}function o(i={}){const{wrapper:n}=i.components||{};return n?e.jsx(n,{...i,children:e.jsx(s,{...i})}):s(i)}export{o as default};
