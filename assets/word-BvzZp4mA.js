import{j as e}from"./react-vendor-DjasHgK6.js";import{L as s,b as t}from"./gym-pages-DNcP-Zk-.js";import"./vendor-D7BjNmWU.js";import"./monaco-ByOCJtO_.js";import"./reveal-Rylxx4kG.js";import"./remotion-BRBWYm9w.js";function i(r){const n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h2,{children:"Microsoft Word"}),`
`,e.jsxs(n.p,{children:["Microsoft Word ist ein Textverarbeitungsprogramm und gehört zur ",e.jsx(n.strong,{children:`Microsoft
365`}),`-Suite. Es ist eines der am weitesten verbreiteten Programme zum Erstellen
von Dokumenten: Berichte, Briefe, Aufsätze, Lebensläufe – all das wird typisch
mit Word geschrieben.`]}),`
`,e.jsx(s,{children:e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Sie wissen, wofür Microsoft Word verwendet wird."}),`
`,e.jsx(n.li,{children:"Sie kennen typische Probleme beim Arbeiten mit Word."}),`
`,e.jsx(n.li,{children:"Sie verstehen, wie ein Word-Dokument intern aufgebaut ist."}),`
`,e.jsx(n.li,{children:"Sie wissen, dass Ihre Dateien in der OneDrive des Schulaccounts gespeichert werden."}),`
`]})}),`
`,e.jsx(n.h2,{children:"Wofür wird Word verwendet?"}),`
`,e.jsx(n.p,{children:"Word wird überall dort eingesetzt, wo formatierte Texte erstellt werden sollen:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Schule"}),": Aufsätze, Berichte, Zusammenfassungen"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Beruf"}),": Briefe, Protokolle, Verträge, Lebensläufe"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Privat"}),": Einladungen, Bewerbungen, Listen"]}),`
`]}),`
`,e.jsxs(n.p,{children:[`Das besondere an Word gegenüber einem einfachen Texteditor ist die
`,e.jsx(n.strong,{children:"Formatierung"}),`: Sie können Schriftarten, Grössen, Farben, Abstände, Tabellen,
Bilder und vieles mehr einstellen. Word trennt dabei den `,e.jsx(n.strong,{children:"Inhalt"}),` (Ihren Text)
von der `,e.jsx(n.strong,{children:"Darstellung"})," (wie der Text aussieht)."]}),`
`,e.jsx(n.h2,{children:"Warum kann Word manchmal problematisch sein?"}),`
`,e.jsx(n.p,{children:`Word klingt einfach – und für grundlegende Aufgaben ist es das auch. Doch sobald
Dokumente grösser oder komplexer werden, können einige Stolpersteine auftauchen:`}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Formatierung, die sich ungewollt verändert"}),`
Wer kennt es nicht: Man fügt einen Absatz ein, und plötzlich verspringen alle
Einrückungen und Abstände auf der ganzen Seite. Das passiert, weil Word viele
Formatierungen implizit verwaltet und Änderungen an einer Stelle andere Stellen
beeinflussen können.`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Kompatibilitätsprobleme"}),`
Ein Dokument, das auf einem Computer perfekt aussieht, kann auf einem anderen
verschoben oder unleserlich dargestellt werden – besonders wenn unterschiedliche
Word-Versionen, andere Betriebssysteme oder Programme wie LibreOffice verwendet
werden.`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Unsichtbare Zeichen und versteckte Formatierung"}),`
Word speichert sehr viel mehr als nur den sichtbaren Text. Unsichtbare
Leerzeichen, Zeilenumbrüche und Formatierungsinformationen können zu
unerwartetem Verhalten führen, das schwer zu finden ist.`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Versionschaos"}),`
Wenn mehrere Personen an einem Dokument arbeiten und Dateien per E-Mail
austauschen, entstehen schnell viele verschiedene Versionen. Es ist dann
schwierig zu sehen, wer was wann geändert hat.`]}),`
`,e.jsx(n.h2,{children:"Die Dateistruktur hinter .docx"}),`
`,e.jsxs(n.p,{children:["Wenn Sie eine Datei als ",e.jsx(n.code,{children:".docx"}),` speichern, sieht es aus wie eine einzige Datei.
In Wirklichkeit ist eine `,e.jsx(n.code,{children:".docx"}),"-Datei ein ",e.jsx(n.strong,{children:"ZIP-Archiv"}),`, das viele einzelne
Dateien enthält.`]}),`
`,e.jsxs(n.p,{children:["Sie können das selbst ausprobieren: Benennen Sie eine ",e.jsx(n.code,{children:".docx"}),"-Datei in ",e.jsx(n.code,{children:".zip"}),`
um und öffnen Sie sie – Sie sehen dann einen Ordner mit folgendem Inhalt:`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`mein-dokument.docx (= ZIP-Archiv)
├── word/
│   ├── document.xml      ← Der eigentliche Text und die Formatierung
│   ├── styles.xml        ← Alle definierten Formatvorlagen
│   ├── settings.xml      ← Dokumenteinstellungen
│   └── media/            ← Eingefügte Bilder
├── _rels/                ← Verknüpfungen zwischen den Teilen
└── [Content_Types].xml   ← Beschreibt den Inhalt des Archivs
`})}),`
`,e.jsxs(n.p,{children:["Der Kern des Dokuments ist die Datei ",e.jsx(n.code,{children:"word/document.xml"}),". Sie ist in ",e.jsx(n.strong,{children:"XML"}),`
geschrieben, einer Auszeichnungssprache ähnlich wie HTML. Darin ist jeder
Absatz, jedes Wort und jede Formatierung als Text gespeichert – für Menschen
lesbar, aber auf den ersten Blick unübersichtlich.`]}),`
`,e.jsxs(n.p,{children:["Dieses Format heisst ",e.jsx(n.strong,{children:"Office Open XML (OOXML)"}),` und ist ein offener Standard.
Das bedeutet, dass grundsätzlich jedes Programm `,e.jsx(n.code,{children:".docx"}),`-Dateien lesen und
schreiben kann – was aber trotzdem zu Kompatibilitätsproblemen führen kann, weil
nicht alle Programme den Standard gleich umsetzen.`]}),`
`,e.jsx(t,{url:"C0bsVYWGYD0"}),`
`,e.jsx(n.h2,{children:"Word im Browser"}),`
`,e.jsxs(n.p,{children:["Wir verwenden Word ausschliesslich ",e.jsx(n.strong,{children:"im Browser"}),`. Das funktioniert auf jedem
Gerät gleich – egal ob Windows, Mac, Chromebook oder Tablet – und vermeidet die
meisten Kompatibilitätsprobleme.`]}),`
`,e.jsxs(n.p,{children:["Alle Dokumente werden automatisch in der ",e.jsx(n.strong,{children:e.jsx("a",{href:"https://sblch-my.sharepoint.com/",target:"_blank",rel:"noreferrer",children:"OneDrive Ihres Schulaccounts"})}),`
gespeichert, einem Cloud-Speicher von Microsoft. Das bedeutet:`]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Ihre Dateien sind von ",e.jsx(n.strong,{children:"jedem Gerät"})," abrufbar, solange Sie eingeloggt sind."]}),`
`,e.jsxs(n.li,{children:["Es gibt ",e.jsx(n.strong,{children:"kein manuelles Speichern"})," – Word im Browser speichert laufend automatisch."]}),`
`,e.jsxs(n.li,{children:["Ihre Daten bleiben auf den ",e.jsx(n.strong,{children:"Servern der Schule"})," und sind nicht mit einem privaten Konto vermischt."]}),`
`,e.jsxs(n.li,{children:["Dokumente können direkt mit Mitschülerinnen, Mitschülern und Lehrpersonen ",e.jsx(n.strong,{children:"geteilt"})," werden."]}),`
`]}),`
`,e.jsx(n.p,{children:`Das folgende Video zeigt, wie Sie ein Dokument über die OneDrive im Browser
öffnen und bearbeiten.`})]})}function u(r={}){const{wrapper:n}=r.components||{};return n?e.jsx(n,{...r,children:e.jsx(i,{...r})}):i(r)}export{u as default};
