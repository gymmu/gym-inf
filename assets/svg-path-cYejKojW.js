import{j as e}from"./react-vendor-DPtW2uLn.js";import{L as d,S as s}from"./gym-pages-B1WatTOA.js";import"./vendor-BscfZStV.js";import r from"./CodePenSVG-R8tWzk8c.js";import"./monaco-DSiUpym4.js";import"./Editor-BjV_XeDN.js";import"./CodePen.module-BfICubSo.js";function t(i){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h2,{children:"Pfade"}),`
`,e.jsxs(n.p,{children:["Das wohl mächtigste Element in ",e.jsx(n.strong,{children:"SVG"})," ist der Pfad. Mit einem Pfad können Sie jede erdenkliche Form angeben, die Syntax dafür ist aber ein wenig komplizierter wie bei anderen Elementen."]}),`
`,e.jsx(d,{children:e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Sie können einfache Formen mit Pfaden erstellen."}),`
`,e.jsx(n.li,{children:"Sie können einen Stern zeichnen."}),`
`,e.jsx(n.li,{children:"Sie können die verschiedenen Attribute von einem Pfad verändern."}),`
`,e.jsxs(n.li,{children:["Sie wissen was das ",e.jsx(n.code,{children:"d"}),"-Attribut von einem Pfad ist, und können es entsprechend abändern."]}),`
`,e.jsxs(n.li,{children:["Sie verstehen die Syntax die im ",e.jsx(n.code,{children:"d"}),"-Attribut eines Pfades verwendet wird."]}),`
`]})}),`
`,e.jsx(n.h2,{children:"Der einfachste Path"}),`
`,e.jsx(n.p,{children:"Die einfachste Form die wir mit einem Pfad zeichnen können, ist eine Linie. Wie man das macht, sehen Sie in dem folgenden Block."}),`
`,e.jsx(r,{classes:"full-width",initialCode:`<svg viewBox="0 0 300 300" width="300">
  <path  stroke="black" stroke-width="5"
    d="M 100, 100 L 200, 200"
  />
</svg>`}),`
`,e.jsxs(n.p,{children:["Das bringt uns leider nicht so viel, denn Linien können wir bereits zeichnen. Aber an diesem sehr einfachen Beispiel, können Sie gleich sehen wie ein ",e.jsx(n.code,{children:"path"}),"-Element eigentlich funktioniert. Wir haben die ganz normalen Attribute, die wir auch auf anderen Elementen setzen. Damit überhaupt etwas gezeichnet wird, müssen wir ",e.jsx(n.code,{children:"stroke"})," angeben, und ",e.jsx(n.code,{children:"stroke-width"})," damit wir das Resultate besser sehen können. Dann kommt aber noch ein neues Attribut dazu, das ",e.jsx(n.code,{children:"d"}),"-Attribut. Dieses enthält die Daten für den Pfad, also die Instruktionen, wie dieser gezeichnet werden soll. Auf den ersten Blick sieht der Inhalt davon recht kompliziert aus, aber das können wir ganz schnell vereinfachen, denn es sind nur einfache Zeichenbefehle."]}),`
`,e.jsxs(s,{classes:"important",children:[e.jsx(n.h2,{children:"Zeichenbefehle für Pfade"}),e.jsxs(n.p,{children:["Die Zeichenbefehle funktionieren alle auf die gleiche Art. Die Art ist auch sehr einfach, Sie müssen aber jeweils wissen, wie viele Parameter ein Befehl braucht. Ganz generell funktionieren diese Befehle immer so: Ein Buchstabe gibt die Art des Befehls an, dann werden so viele Zahlen gelesen wie der Befehl braucht, dann kann ein weiterer Buchstabe kommen um einen neuen Befehl zu starten. Es ist sehr ",e.jsx(n.strong,{children:"wichtig"})," dass Sie zwischen Gross- und Kleinschreibung unterscheiden, wieso wird aber erst später erklärt. Für den Moment schreiben wir alles mit Grossbuchstaben. Damit diese Zeichenbefehle einfacher zu verstehen sind, stellen Sie sich einfach vor, dass Sie mit diesen Befehlen die Spitzen von einem Stift befehligen."]}),e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Bewegen (",e.jsx(n.strong,{children:"M"})," ",e.jsx(n.code,{children:"x, y"}),"): Dieser Befehl verschiebt die Spitze des Stiftes zu der gegeben Koordinate."]}),`
`,e.jsxs(n.li,{children:["Linie (",e.jsx(n.strong,{children:"L"})," ",e.jsx(n.code,{children:"x, y"}),"): Dieser Befehl zeichnet eine Linie vom aktuellen Punkt, bis zur angegebenen Koordinate."]}),`
`,e.jsxs(n.li,{children:["Pfad schliessen (",e.jsx(n.strong,{children:"Z"}),"): Dieser Befehl zeichnet vom aktuellen Punkt zurück zum Startpunkt."]}),`
`]}),e.jsx(n.p,{children:"Es gibt noch mehr Befehle, diese schauen wir aber erst später an."})]}),`
`,e.jsx(n.h2,{children:"Ein Dreieck zeichnen"}),`
`,e.jsx(n.p,{children:"Im letzten Kapitel haben wir bereits ein Dreieck gezeichnet. Wobei dies kein richtiges Dreieck war, sondern nur 3 Linien. Es gab keine Möglichkeit diese Form auszufüllen. Mit Pfaden können wir das aber ganz einfach machen."}),`
`,e.jsx(r,{classes:"full-width",initialCode:`<svg viewBox="0 0 300 300" width="300">
  <path  stroke="black"
    stroke-width="5"
    fill="#E68B2E"
    d="M 150, 50 L 50, 250 L 250, 250 Z"
  />
</svg>`}),`
`,e.jsx(n.p,{children:"Im Code hier, können Sie sehen das wir nur zwei neue Zeichenbefehle hinzugenommen haben. Wir mussten nur eine horizontale Linie zeichnen, und den Pfad selber schliessen lassen. Das macht es sehr einfach solche Formen zu zeichnen."}),`
`,e.jsxs(s,{children:[e.jsx(n.h2,{children:"Absolute und relative Zeichenbefehle"}),e.jsxs(n.p,{children:["Wir haben es weiter oben bereits angesprochen, es macht bei Pfaden einen Unterschied, ob Sie die Zeichenbefehle gross oder klein schreiben. Der Unterschied liegt darin wie die Koordinaten danach gelesen werden. Wenn wir die Grossbuchstaben verwenden, dann werden die Koordinaten ",e.jsx(n.strong,{children:"absolut"})," gelesen, wenn wir die Kleinbuchstaben verwenden, dann werden die Koordinaten ",e.jsx(n.strong,{children:"relativ"})," gelesen. Das kann es manchmal deutlich einfacher machen eine Form zu zeichnen. Bei relativen Koordinaten, können wir immer so überlegen, wie weit muss ich meinen Stift von der aktuellen Position in ",e.jsx(n.code,{children:"x"}),"- und ",e.jsx(n.code,{children:"y"}),"-Richtung bewegen."]}),e.jsx(n.p,{children:"Wir möchten nun ein rechtwinkliges Dreieck zeichnen. Der rechte Winkel ist unten links und die Katheten haben die Längen 140 und 210."}),e.jsx(r,{classes:"full-width",initialCode:`<svg viewBox="0 0 300 300" width="300">
  <path  stroke="black"
    stroke-width="5"
    fill="#4693CF"
    d="m 50, 50 l 0, 140 l 210, 0 Z"
  />
</svg>`}),e.jsx(n.p,{children:"Diese Befehle gehen aber noch einfacher. Wenn wir Linien nur horizontal oder vertikal zeichnen, dann können wir dafür eine Kurzform verwenden."}),e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Horizontale Linie (",e.jsx(n.strong,{children:"h"})," ",e.jsx(n.code,{children:"x"}),"): Dieser Befehl zeichnet eine horizontale Linie vom aktuellen Punkt um ",e.jsx(n.code,{children:"x"})," Einheiten in ",e.jsx(n.code,{children:"x"}),"-Richtung."]}),`
`,e.jsxs(n.li,{children:["Vertikale Linie (",e.jsx(n.strong,{children:"v"})," ",e.jsx(n.code,{children:"y"}),"): Dieser Befehl zeichnet eine vertikale Linie vom aktuellen Punkt um ",e.jsx(n.code,{children:"y"})," Einheiten in ",e.jsx(n.code,{children:"y"}),"-Richtung."]}),`
`]}),e.jsx(n.h3,{children:"Aufgabe"}),e.jsx(n.p,{children:"Versuchen Sie die Zeichenbefehle oben mit den horizontalen und vertikalen Linien zu ersetzen."})]}),`
`,e.jsx(n.h2,{children:"Kompliziertere Zeichenbefehle"}),`
`,e.jsx(n.p,{children:"Mit Pfaden haben wir die Möglichkeit komplexere Formen zu zeichnen, als nur gerade Linien. Diese werden aber schnell sehr kompliziert und sind nicht direkt für Code geeignet. Meistens möchte man dafür ein Zeichenwerkzeug haben. Wir schauen uns aber die einfachste Form von einer sogenannten Bézier-Kurve an."}),`
`,e.jsx(n.p,{children:"Bei Bézier-Kurven, geht es immer darum, dass Sie sogenannte Kontrollpunkte einführen. Der Pfad wird dann zu diesem Kontrollpunkt hin gezogen und es entsteht eine leichte Krümmung in der Kurve. Wir schauen und dazu ein Beispiel an, und zeichnen sämtliche Punkte die bei der Kurve verwendet werden ein. Die grünen Punkte sind Start- und Endpunkt, der rote ist der Kontrollpunkt."}),`
`,e.jsx(r,{classes:"full-width",initialCode:`<svg viewBox="0 0 300 300" width="300">
  <path  stroke="black"
    stroke-width="2"
    fill="none"
    d="M 50, 150 Q 150, 50, 250, 150"
  />
  <circle cx="50" cy="150" r="5" fill="forestgreen" />
  <circle cx="150" cy="50" r="5" fill="firebrick" />
  <circle cx="250" cy="150" r="5" fill="forestgreen" />
</svg>`}),`
`,e.jsxs(n.p,{children:["Wir sehen das die Kurve durch den Start- und Endpunkt geht. Während die Kurve aber gezeichnet wird, wird der Stift immer hin zum Kontrollpunkt gezogen. So bekommen wir eine angenehme Krümmung in die Kurve. Verantwortlich dafür ist der Zeichenbefehl ",e.jsx(n.code,{children:"Q"}),"."]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Quadratische Bézier-Kurve (",e.jsx(n.strong,{children:"Q"})," ",e.jsx(n.code,{children:"x1, y1, x, y"}),"): Mit diesem Zeichenbefehl können Sie eine quadratische Bézier-Kurve zeichnen lassen. Dabei sind ",e.jsx(n.code,{children:"x1"})," und ",e.jsx(n.code,{children:"y1"})," die Koordinaten des Kontrollpunkts und ",e.jsx(n.code,{children:"x"})," und ",e.jsx(n.code,{children:"y"})," die Koordinaten des Endpunkts."]}),`
`,e.jsxs(n.li,{children:["Quadratische Bézier-Kurve weiterzeichnen (",e.jsx(n.strong,{children:"T"})," ",e.jsx(n.code,{children:"x, y"}),"): Dieser Zeichenbefehl kann nur direkt nach einem ",e.jsx(n.code,{children:"Q"})," verwendet werden. Hier wird der Kontrollpunkt der vorherigen Kurve am Startpunkt gespiegelt und weiter verwendet, dann müssen Sie nur noch den Endpunkt mit ",e.jsx(n.code,{children:"x"})," und ",e.jsx(n.code,{children:"y"})," angeben."]}),`
`]}),`
`,e.jsxs(s,{classes:"exercise",children:[e.jsx(n.h2,{children:"Aufgabe"}),e.jsxs(n.p,{children:["Versuchen Sie eine Art Sinuskurve zu erzeugen, verwenden Sie dafür die Zeichenbefehle ",e.jsx(n.code,{children:"Q"})," und ",e.jsx(n.code,{children:"T"}),"."]})]}),`
`,e.jsx(n.h2,{children:"Turtle Graphics mit Pfaden"}),`
`,e.jsxs(n.p,{children:["Ein beliebtes Einstiegsthema ins Computerprogrammieren, sind die sogenannten ",e.jsx(n.strong,{children:"Turtle Graphics"}),". Da steuern Sie eine Schildkröte, die einen Stift bei sich trägt. Sie können der Schildkröte verschiedene Anweisungen geben, wie zum Beispiel 100 Einheiten nach vorne laufen, um 45° nach links drehen, dann 50 Einheiten zurück laufen, den Stift anheben und nochmals 50 Einheiten zurück laufen, usw. Alle diese Grafiken die man mit Turtles erstellen kann, können wir auch mit Pfaden erstellen. Besonders einfach geht das, wenn Sie die ",e.jsx(n.strong,{children:"relativen"})," Koordinaten verwenden. Damit wir alles schön übersichtlich haben, versuchen wir jeden neuen Befehl in einem Pfad, auf eine neue Zeile zu bringen, so wie wir das in dem unteren Beispiel gemacht haben. Sie können hier alles vor Zeile 15 ignorieren, das zeichnet uns nur ein Gitter, mit dem wir uns besser orientieren können."]}),`
`,e.jsx(r,{classes:"full-width",initialCode:`<svg viewBox="0 0 300 300" width="300">
<!-- Gibt uns ein Gitter, an dem wir uns orientieren können. -->
<defs>
  <pattern id="smallGrid" width="10" height="10" patternUnits="userSpaceOnUse">
    <path d="M 10 0 L 0 0 0 10" fill="none" stroke="gray" stroke-width="0.5"/>
  </pattern>
  <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
    <rect width="50" height="50" fill="url(#smallGrid)"/>
    <path d="M 50 0 L 0 0 0 50" fill="none" stroke="gray" stroke-width="1"/>
  </pattern>
</defs>
<rect width="100%" height="100%" fill="url(#grid)" />
<!-- Gitter fertig. -->

<path stroke="black"
  stroke-width="2"
  fill="gray"
  fill-rule="evenodd"
  opacity="0.5"
  d="M 50, 150
    l 100, -100
    l 100, 100
    h -25
    v 100
    h -150
    v -100
    z

    M 100, 250
    v -50
    h 30
    v 50
    z

    M 160, 120
    h 40
    v 30
    h -40
    z

    M 100, 120
    h 40
    v 30
    h -40
    z
    "
/>
</svg>`}),`
`,e.jsxs(s,{classes:"exercise",children:[e.jsx(n.h2,{children:"Aufgaben"}),e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Nutzen Sie das ",e.jsx(n.code,{children:"path"}),"-Element um das Haus von Nikolaus zu zeichnen."]}),`
`,e.jsx(n.li,{children:"Zeichnen Sie einen Stern mit 6 Zacken."}),`
`,e.jsx(n.li,{children:"Zeichnen Sie einen Quader in einer 3D Perspektive."}),`
`,e.jsx(n.li,{children:"Zeichnen Sie einen Tannenbaum."}),`
`,e.jsx(n.li,{children:"Zeichnen Sie ein Haus in einer Hügellandschaft. Es soll eine gebogene Strasse haben, die direkt zur Haustüre führt."}),`
`,e.jsx(n.li,{children:"Zeichnen Sie unterschiedliche Logos."}),`
`]})]})]})}function x(i={}){const{wrapper:n}=i.components||{};return n?e.jsx(n,{...i,children:e.jsx(t,{...i})}):t(i)}export{x as default};
