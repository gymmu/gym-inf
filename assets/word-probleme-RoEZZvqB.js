import{j as e}from"./react-vendor-DjasHgK6.js";import"./gym-pages-DNcP-Zk-.js";import"./vendor-D7BjNmWU.js";import"./monaco-ByOCJtO_.js";import"./reveal-Rylxx4kG.js";import"./remotion-BRBWYm9w.js";function i(r){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h2,{children:"Das Problem mit Word"}),`
`,e.jsxs(n.p,{children:["Word folgt dem Prinzip ",e.jsx(n.strong,{children:"WYSIWYG"}),` – "What You See Is What You Get". Was auf dem
Bildschirm zu sehen ist, entspricht direkt dem gedruckten Ergebnis. Das klingt
intuitiv und ist es für einfache Dokumente auch. Doch bei längeren oder
komplexeren Arbeiten zeigen sich die Grenzen dieses Ansatzes schnell.`]}),`
`,e.jsx(n.h2,{children:"Was ist das Problem mit WYSIWYG?"}),`
`,e.jsxs(n.p,{children:["Bei WYSIWYG-Programmen wie Word vermischen sich ",e.jsx(n.strong,{children:"Inhalt"})," und ",e.jsx(n.strong,{children:"Darstellung"}),`
ständig. Wer schreibt, denkt gleichzeitig über Schriftgrösse, Abstände und
Einrückungen nach – statt über den Text selbst. Das führt zu typischen Problemen:`]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:`Eine Formatierung lässt sich nicht mehr rückgängig machen, ohne andere
Teile des Dokuments zu zerstören.`}),`
`,e.jsx(n.li,{children:'Bilder "springen" beim Einfügen neuen Textes an ungewollte Stellen.'}),`
`,e.jsx(n.li,{children:`Zwei Absätze sehen gleich aus, haben aber unterschiedliche Formatierungen –
und man sieht es erst, wenn das Dokument auf einem anderen Gerät geöffnet
wird.`}),`
`,e.jsx(n.li,{children:`Querverweise und Fussnoten müssen manuell gepflegt werden und stimmen schnell
nicht mehr.`}),`
`]}),`
`,e.jsx(n.p,{children:`Das grundlegende Problem: Word speichert nicht nur was geschrieben steht,
sondern auch wie jeder einzelne Absatz, jedes Zeichen und jeder Abstand
aussehen soll. Dieses Durcheinander von Inhalt und Form wächst mit jedem Edit
und wird mit der Zeit immer schwieriger zu beherrschen.`}),`
`,e.jsx(n.h2,{children:"Der andere Ansatz: Inhalt und Form trennen"}),`
`,e.jsxs(n.p,{children:["Eine saubere Alternative ist das Prinzip ",e.jsx(n.strong,{children:"WYSIWYM"}),` – "What You See Is What You
`,e.jsx(n.strong,{children:"Mean"}),`". Hier schreibt man reinen Text und beschreibt die Struktur mit
einfachen Befehlen oder Zeichen. Das Programm übernimmt die Formatierung
automatisch und konsequent.`]}),`
`,e.jsx(n.h3,{children:"Markdown"}),`
`,e.jsxs(n.p,{children:[`Markdown ist das einfachste Beispiel dieses Prinzips und wird auch in diesem
Kurs bei Obsidian verwendet. Ein `,e.jsx(n.code,{children:"#"}),` vor einer Zeile macht sie zur Überschrift,
`,e.jsx(n.code,{children:"**fett**"}),` macht Text fett. Das Ergebnis ist immer konsistent – ohne dass man
manuell formatiert.`]}),`
`,e.jsx(n.p,{children:`Markdown ist ideal für kurze bis mittellange Texte, Notizen und Webinhalte. Für
wissenschaftliche Arbeiten mit Literaturverzeichnis, Formeln und präzisem Layout
stösst es jedoch an Grenzen.`}),`
`,e.jsx(n.p,{children:"Markdown kann in vielen verschiedenen Programmen geschrieben werden:"}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Im Browser:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx("a",{href:"https://obsidian.md",target:"_blank",rel:"noreferrer",children:"Obsidian"})," – kennen Sie bereits aus dem Kurs (Desktop-App mit Browser-ähnlichem Erlebnis)"]}),`
`,e.jsxs(n.li,{children:[e.jsx("a",{href:"https://dillinger.io",target:"_blank",rel:"noreferrer",children:"Dillinger"})," – einfacher Online-Editor mit Live-Vorschau"]}),`
`,e.jsxs(n.li,{children:[e.jsx("a",{href:"https://stackedit.io",target:"_blank",rel:"noreferrer",children:"StackEdit"})," – umfangreicherer Online-Editor mit Synchronisation zu Google Drive und Dropbox"]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Lokale Apps:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx("a",{href:"https://www.zettlr.com",target:"_blank",rel:"noreferrer",children:"Zettlr"})," – leistungsstarker Editor für längere Texte und wissenschaftliches Schreiben, mit Literaturverwaltung"]}),`
`,e.jsxs(n.li,{children:[e.jsx("a",{href:"https://panwriter.com",target:"_blank",rel:"noreferrer",children:"Panwriter"})," – minimalistischer Editor mit direktem Export in viele Formate (PDF, Word, EPUB)"]}),`
`]}),`
`,e.jsx(n.h3,{children:"LaTeX"}),`
`,e.jsx(n.p,{children:`LaTeX ist das Standardformat für wissenschaftliche Publikationen in Mathematik,
Physik und vielen anderen Fachbereichen. Man schreibt reinen Text mit Befehlen,
zum Beispiel:`}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-latex",children:`\\section{Einleitung}
Dies ist ein \\textbf{wichtiger} Satz mit einer Formel: $E = mc^2$.
`})}),`
`,e.jsx(n.p,{children:`LaTeX übernimmt dann das gesamte Layout automatisch – Abstände, Seitenumbrüche,
Nummerierungen, Inhaltsverzeichnis und Literaturverzeichnis. Das Ergebnis ist
typografisch hochwertig und auf allen Geräten identisch.`}),`
`,e.jsxs(n.p,{children:[`Der Nachteil: LaTeX hat eine steile Lernkurve. Der Einstieg ist aufwändiger als
bei Word. Als Editor verwenden wir `,e.jsx("a",{href:"https://www.overleaf.com",target:"_blank",rel:"noreferrer",children:"Overleaf"}),` –
einen kostenlosen Online-Editor, der keine Installation erfordert.`]}),`
`,e.jsx(n.h3,{children:"Typst"}),`
`,e.jsx(n.p,{children:`Typst ist eine moderne Alternative zu LaTeX, die viele der Stärken übernimmt –
automatisches Layout, Formeln, Literaturverweise – aber mit einer deutlich
einfacheren Syntax. Ein Beispiel:`}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typst",children:`= Einleitung
Dies ist ein *wichtiger* Satz mit einer Formel: $E = m c^2$.
`})}),`
`,e.jsxs(n.p,{children:["Typst ist direkt im Browser unter ",e.jsx("a",{href:"https://typst.app",target:"_blank",rel:"noreferrer",children:"typst.app"}),` nutzbar,
kompiliert blitzschnell und eignet sich sehr gut für Berichte und
Abschlussarbeiten. Das automatische Verlinken und Verwalten von Quellen
funktioniert dabei zuverlässig und ohne manuellen Aufwand.`]}),`
`,e.jsx(n.h2,{children:"Warum das trotzdem relevant ist"}),`
`,e.jsx(n.p,{children:`Word bleibt im Alltag weit verbreitet und ist für viele Aufgaben ausreichend.
Aber wer längere Texte schreibt oder präzises, reproduzierbares Layout braucht,
ist mit einem WYSIWYM-Ansatz deutlich besser bedient. Das nächste Kapitel zeigt,
wie LaTeX mit Overleaf konkret eingesetzt wird – inklusive automatischer
Quellenverwaltung.`})]})}function c(r={}){const{wrapper:n}=r.components||{};return n?e.jsx(n,{...r,children:e.jsx(i,{...r})}):i(r)}export{c as default};
