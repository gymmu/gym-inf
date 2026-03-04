import{r as o,j as e}from"./react-vendor-DPtW2uLn.js";import{a as u}from"./app-BK1lPpM-.js";import{P as i}from"./fms-pages-I6H3F12C.js";import"./vendor-BscfZStV.js";import"./monaco-DSiUpym4.js";import"./gym-pages-B1WatTOA.js";const p="_presentation_1g09y_1",g="_fullScreen_1g09y_11",f="_scrollButton_1g09y_19",b="_rightButton_1g09y_33",w="_leftButton_1g09y_38",k="_slide_1g09y_43",E="_slideContent_1g09y_54",v="_narrow_1g09y_65",r={presentation:p,fullScreen:g,scrollButton:f,rightButton:b,leftButton:w,slide:k,slideContent:E,narrow:v};function B({children:l}){const{fullscreen:n,setFullscreen:t}=u(),d=o.useRef(null);o.useEffect(()=>{function c(j){const{key:m}=j;m==="f"&&t(!0)}return window.addEventListener("keydown",c),()=>{window.removeEventListener("keydown",c)}},[t]);function h(c){console.log("scrollByValue:",c),console.log(d.current.scrollLeft),d&&(d.current.scrollLeft+=c)}return e.jsxs(e.Fragment,{children:[e.jsx("button",{className:`${r.scrollButton} ${r.leftButton}`,onClick:c=>h(-500),children:"←"}),e.jsx("button",{className:`${r.scrollButton} ${r.rightButton}`,onClick:c=>h(500),children:"→"}),e.jsx("div",{ref:d,id:r.presentation,className:n?r.fullScreen:"",children:l})]})}function s({children:l}){return e.jsx("div",{className:r.slide,children:l})}function a({children:l}){return e.jsx("div",{className:r.narrow,children:l})}function L({children:l}){return e.jsx("div",{className:r.slideContent,children:l})}function x(l){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...l.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h2,{children:"HTML"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"HTML"})," ist eine Beschreibungssprache. Sie basiert auf ",e.jsx(n.code,{children:"XML"})," und ist darum sehr ähnlich wie ",e.jsx(n.code,{children:"SVG"}),". Die Sprache selber ist super einfach, alles ist in sogenannte Tags aufgeteilt. Ein Tag hat immer die folgende Syntax: ",e.jsx(n.code,{children:"<tag-name>...</tag-name>"})]}),`
`,e.jsxs(B,{children:[e.jsxs(s,{children:[e.jsx(n.h2,{children:"Titel"}),e.jsxs(L,{children:[e.jsxs(n.p,{children:["In ",e.jsx(n.code,{children:"HTML"})," gibt es unterschiedlich grosse Titel. Insgesamt sind es 6 Grössen. Alle haben eine ähnliche Syntax."]}),e.jsx(a,{children:e.jsx(i,{children:e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<h1>Seitentitel</h1>
`})})})}),e.jsx(n.p,{children:"oder"}),e.jsx(a,{children:e.jsx(i,{children:e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<h2>Untertitel</h2>
`})})})}),e.jsx(n.p,{children:"usw."})]})]}),e.jsxs(s,{children:[e.jsx(n.h2,{children:"Text"}),e.jsxs(n.p,{children:["Text sollte niemals direkt in eine Webseite geschrieben werden. Wir möchten den Text immer in ein Paragraph (",e.jsx(n.code,{children:"<p>"}),"-Element) packen."]}),e.jsx(i,{children:e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<p>Hier ist irgend welcher Text.</p>
`})})}),e.jsxs(n.p,{children:["Wenn wir mehrere Abschnitte haben, dann packen wir jeden Abschnitt in ein solches ",e.jsx(n.code,{children:"<p>"}),"-Element."]}),e.jsx(i,{children:e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<p>Dies ist der erste Abschnitt.</p>
<p>Die ist der zweite Abschnitt.</p>
`})})})]}),e.jsxs(s,{children:[e.jsx(n.h2,{children:"Abschnitte"}),e.jsx(n.p,{children:"Das moderne Web (HTML5 seit ca. 2010) hat verschiedene Elemente, die das logische benennen von Webseiten teilen einfacher machen sollen."}),e.jsx(i,{children:e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<header><h1>Webseiten Titel</h1></header>

<main>
    <p>Das ist der Hauptteil</p>
    <section>
        <p>Das ist ein Abschnitt im Hauptteil</p>
    </section>
    <article>
        <p>Das ist ein Artikel im Hauptteil</p>
    </article>
</main>

<footer>Hier ist eine Fusszeile</footer>
`})})})]}),e.jsxs(s,{children:[e.jsx(n.h2,{children:"Kommentare"}),e.jsx(n.p,{children:"Kommentare sind Stellen im Code die nicht auf der Webseite angezeigt werden. Sie helfen uns zu verstehen was wir programmieren wollten, oder wenn wir noch etwas ändern werden."}),e.jsx(i,{children:e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<aside>
  <nav>
  <!-- Hier wird die Navigationsliste erstellt,
       sobald wir wissen wie man Listen macht.
   -->
  </nav>
<aside>
`})})})]}),e.jsxs(s,{children:[e.jsx(n.h2,{children:"Listen"}),e.jsxs(n.p,{children:["In ",e.jsx(n.code,{children:"HTML"})," gibt es 2 Arten von Listen, die nummerierten und die nicht-nummerierten. Beide Listen haben aber jeweils die gleichen Listen-Einträge."]}),e.jsx(i,{children:e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`  <ul>
    <li>Home</li>
    <li>About</li>
    <li>Hobbies</li>
    <li>Kontakt</li>
  </ul>
`})})}),e.jsx(n.p,{children:"oder als nummerierte Liste"}),e.jsx(i,{children:e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`  <ol>
    <li>Erster Eintrag</li>
    <li>Zweiter Eintrag</li>
    <li>...</li>
  </ol>
`})})})]}),e.jsxs(s,{children:[e.jsx(n.h2,{children:"Links"}),e.jsx(n.p,{children:"Auf Webseiten, möchte man oftmals auf andere Webseiten oder auf Teile der eigenen Webseite verweisen. Dafür verwendet man das Anker-Element."}),e.jsx(i,{children:e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<!-- Externer Link -->
<a href="https://www.gym-muttenz.ch">Gym Muttenz</a>

<!-- Interner Link -->
<a href="./unterseiten/hobbies.html">Hobbies</a>

<!-- Link zu einem Seitenelement -->
<a href="#home">Home</a>
`})})})]}),e.jsxs(s,{children:[e.jsx(n.h2,{children:"Navigationsleisten"}),e.jsx(n.p,{children:"Navigationsleisten auf Webseiten müssen immer selbst erstellt werden. Dafür verwendet man Listen mit Links darin. Damit es für Screenreader und Suchmaschinen einfacher ist, verwendet man auch semantische Elemente."}),e.jsx(i,{children:e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<aside>
  <nav>
    <ul>
      <li>
        <a href="#home">Home</a>
      </li>
      <li>
        <a href="#about">About</a>
      </li>
      <li>
        <a href="#hobbies">Hobbies</a>
      </li>
      <li>
        <a href="#contact">Kontakt</a>
      </li>
    </ul>
  </nav>
</aside>
`})})})]}),e.jsxs(s,{children:[e.jsx(n.h2,{children:"Attribute"}),e.jsxs(n.p,{children:["Alle ",e.jsx(n.code,{children:"HTML"}),"-Elemente können Attribute haben. Einige Elemente brauchen diese Attribute auch, um zu funktionieren."]}),e.jsx(i,{children:e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`  <main>
    <section id="home">
      <h2>Home</h2>
      <p>Dies ist die Home-Page</p>
    </section>
    <section>
      <h2>Seitenlinks</h2>
      <p>
        Dieser Link bringt und zurück zu <a href="#home">Home</a>.
      </p>
    </section>
    <section>
      <h2>Externe Links</h2>
      <p>
        Dieser Link öffnet
        <a href="https://www.gym-muttenz.ch" target="_blank">Gym Muttenz</a>
        in einem neuen Tab.
      </p>
    </section>
  </main>
`})})})]}),e.jsxs(s,{children:[e.jsx(n.h2,{children:"Bilder"}),e.jsxs(n.p,{children:["In Webseiten möchten Sie natürlich auch Bilder anzeigen können. Das geht ganz einfach mit dem ",e.jsx(n.code,{children:"<img>"}),"-Element."]}),e.jsx(i,{children:e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`  <img
    src="https://www.gym-muttenz.ch/fileadmin/user_upload/_headerbilder/3.jpg"
    alt="Bild vom Gymnasium Muttenz"
  />
`})})})]}),e.jsxs(s,{children:[e.jsx(n.h2,{children:"Inline und Block Elemente"}),e.jsxs(n.p,{children:[e.jsx(n.code,{children:"HTML"}),"-Elemente lassen sich generell in 2 Arten von Elementen unterteilen. Wir haben die Inline-Elemente und die Block-Elemente. Der unterschied ist sehr einfach, eine Inline-Element, kann direkt in den Text integriert werden. Ein Block-Element nutzt immer die ganze Breite."]}),e.jsx(n.h3,{children:"Generelles Block-Element"}),e.jsx(i,{children:e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`  <div class="frame-container">
    Text mit einem Rahmen.
  </div>
`})})}),e.jsx(n.h3,{children:"Generelles Inline-Element"}),e.jsx(i,{children:e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`  <span class="mark">
    Dieser Text soll hervorgehoben werden.
  </span>
`})})}),e.jsx(n.p,{children:"Weiter unten finden Sie noch mehr Inline- und Block-Elemente."})]}),e.jsxs(s,{children:[e.jsx(n.h2,{children:"Formulare"}),e.jsxs(n.p,{children:["Auf Webseiten müssen Sie oftmals Daten eingeben, das macht man mit dem ",e.jsx(n.code,{children:"<form>"}),"-Element."]}),e.jsx(i,{children:e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<form action="javascript:void(0);">
  <div class="form-group">
    <label for="name">
      Name:
    </label>
    <input id="name" type="text" name="name">
  </div>
  <div class="form-group">
    <label for="email">
      Email:
    </label>
    <input id="email" type="email" name="email">
  </div>
  <button type="submit">Abschicken</button>
</form>
`})})}),e.jsx(n.p,{children:"Eine Liste von Elementen die man in Formularen verwendet, finden Sie weiter unten."})]}),e.jsxs(s,{children:[e.jsx(n.h2,{children:"Dropdown Menu"}),e.jsx(n.p,{children:"Auch Auswahllisten sind einfach möglich."}),e.jsx(i,{children:e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<select>
    <option>Auswahl 1</option>
    <option>Auswahl 2</option>
    <option>Auswahl 3</option>
    <option>Auswahl 4</option>
    <option>Auswahl 5</option>
</select>
`})})})]})]}),`
`,e.jsx(n.h2,{children:"Inline- und Block-Elemente"}),`
`,e.jsx(n.p,{children:"Hier ist eine Liste mit Inline-Elementen:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"<a>"}),": Anker (Link)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"<span>"}),": Allgemeiner Inline-Container"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"<strong>"}),": Starker Text (fett)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"<em>"}),": Betonung (kursiv)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"<b>"}),": Fettgedruckter Text"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"<i>"}),": Kursiv"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"<img>"}),": Bild"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"<br>"}),": Zeilenumbruch"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"<code>"}),": Code-Text"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"<small>"}),": Kleinerer Text"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"<sub>"}),": Tiefgestellt"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"<sup>"}),": Hochgestellt"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"<time>"}),": Zeit"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"<mark>"}),": Markierter Text"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"<q>"}),": Kurzes Zitat"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"<cite>"}),": Titel eines Werks"]}),`
`]}),`
`,e.jsx(n.p,{children:"Hier ist eine Liste mit Block-Elementen:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"<div>"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"<p>"})}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"<h1>"})," bis ",e.jsx(n.code,{children:"<h6>"})]}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"<ul>"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"<ol>"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"<li>"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"<dl>"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"<dt>"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"<dd>"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"<blockquote>"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"<figure>"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"<figcaption>"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"<hr>"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"<table>"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"<thead>"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"<tbody>"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"<tfoot>"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"<tr>"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"<th>"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"<td>"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"<section>"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"<article>"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"<aside>"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"<nav>"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"<header>"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"<footer>"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"<main>"})}),`
`]}),`
`,e.jsx(n.h2,{children:"Elemente für Formulare"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:'<input type="Typen">'})," mit verschiedenen Typen:",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"text"})," - Einzeiliges Texteingabefeld"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"password"})," - Eingabefeld für Passwörter"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"email"})," - Eingabefeld für E-Mail-Adressen"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"number"})," - Eingabefeld für Zahlen"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"date"})," - Eingabefeld für Datumsangaben"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"checkbox"})," - Kontrollkästchen"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"radio"})," - Optionsfeld"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"file"})," - Datei-Upload"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"submit"})," - Senden-Button"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"reset"})," - Zurücksetzen-Button"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"range"})," - Slider in einem Bereich"]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"<textarea>"})," - Mehrzeiliges Texteingabefeld"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"<select>"})," - Dropdown-Liste",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"<option>"})," - Optionen innerhalb der Dropdown-Liste"]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"<button>"})," - Allgemeiner Button"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"<label>"})," - Beschriftung für Formularelemente"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"<fieldset>"})," - Gruppiert verwandte Elemente"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"<legend>"})," - Beschriftung für ein ",e.jsx(n.code,{children:"fieldset"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"<datalist>"})," - Vorgaben für ",e.jsx(n.code,{children:"<input>"}),"-Felder"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"<output>"})," - Ausgabe von Berechnungen oder Ergebnissen"]}),`
`]})]})}function H(l={}){const{wrapper:n}=l.components||{};return n?e.jsx(n,{...l,children:e.jsx(x,{...l})}):x(l)}export{H as default};
