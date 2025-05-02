import{j as e}from"./index-gJCf1-Kf.js";import{C as a}from"./Chapter-C6yUvcCB.js";import{E as i}from"./Example-DPJ4cNgI.js";function t({src:s}){return e.jsx("div",{children:e.jsxs("audio",{controls:!0,children:[e.jsx("source",{src:s,type:"audio/mpeg"}),"Your browser does not support the audio element."]})})}function r(s){const n={a:"a",code:"code",em:"em",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",...s.components};return e.jsxs(a,{children:[e.jsx("h2",{id:"passwoerter-und-sicherheit",children:"Passwörter und Sicherheit"}),e.jsxs(n.p,{children:[`Haben Sie sich schon einmal gefragt wie Sie sich eigentlich bei einer Webseite
anmelden können? Wie ist es möglich das eine Webseite Informationen enthält,
die nur für Sie sichtbar sein sollen? Ganz einfach: Mit `,e.jsx(n.strong,{children:`Benutzername und
Passwort`}),". Aber wie funktioniert das?"]}),e.jsxs("section",{children:[e.jsx("h3",{id:"benutzername-und-passwort-auf-dem-server-testen",children:"Benutzername und Passwort auf dem Server testen"}),e.jsxs(n.p,{children:[`Die Idee ist ganz einfach, und Sie haben auch schon gesehen wie das
funktionieren kann. Sie lassen auf dem Server ein Programm laufen, das Ihnen
die Webseite generiert. Dieses Programm nennt man einen `,e.jsx(n.strong,{children:"Webserver"}),`. Sie
haben schon oft einen Webserver laufen lassen, immer wenn Sie `,e.jsx(n.code,{children:"npm run dev"}),`
verwendet haben.`]}),e.jsxs(n.p,{children:[`Die Aufgabe von einem Webserver, ist es, Dateien bzw. Ausgaben zu
`,e.jsx(n.em,{children:"servieren"}),". Wenn Sie nun eine Webseite aufrufen (z.B. ",e.jsx(n.a,{href:"https://www.gym-muttenz.ch/index.php",children:`Gym
Muttenz`}),`) dann fragen Sie den Webserver,
ob er Ihnen die Seite `,e.jsx(n.code,{children:"index.php"}),` schicken kann. Wenn es die Seite gibt,
bekommen Sie diese auch vom Webserver.`]}),e.jsx(n.p,{children:`So wie der Webserver eine spezifische Seite laden kann, kann man auch ein
Passwort mitschicken. Nur wenn dieses Passwort geschickt wurde, wird auch die
entsprechende Webseite geladen. So können Sie ganz einfach geschützte Bereiche
im Internet erzeugen.`})]}),e.jsxs(i,{title:"Was sind Cookies?",children:[e.jsxs(n.p,{children:[`Wenn Sie sich bei einer Webseite einloggen, dann werden Sie einmal nach
Benutzername und Passwort gefragt. Das wird an den Server geschickt, und Sie
bekommen ein `,e.jsx(n.code,{children:"okay"}),` zurück. Ab dann können Sie alle Bereiche zu denen Sie
Zugang haben, einfach anfragen, ohne das Passwort nochmals einzugeben. Das
funktioniert nur dank `,e.jsx(n.strong,{children:"Cookies"}),"."]}),e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Cookies"}),` sind Daten die in Ihrem Webbrowser gespeichert werden. Jedes Cookie
gehört zu einer Webseite. Jedesmal wenn Sie den gleichen Webserver anfragen,
werden die Cookies für diesen Webserver automatisch mitgeschickt. Das heisst
dass Ihr Benutzername und das Passwort bei jeder Anfrage an den Server
geschickt werden. Das ist aus technischen Gründen so, denn das
`,e.jsx(n.strong,{children:"http"}),`-Protokoll ist zustandslos. Es kann die letzte Anfrage nicht speichern.
Jede Anfrage ist immer eine komplett neue.`]})]}),e.jsxs("section",{children:[e.jsx("h3",{id:"verbindungen-abhoeren",children:"Verbindungen abhören"}),e.jsx(n.p,{children:`Da alle Verbindungen über das Internet einfach nur elektrische Signale sind,
kann ich jede Verbindung abhören. Das technische Problem dabei wäre nur zu
wissen, wann eine Übertragung startet und wann Sie fertig ist, das ist aber
recht einfach zu lösen. Sie schieben einfach immer ein Bit nach rechts, bis
dass was Sie im Speicher haben, mit dem ASCII-Code sinnvoll interpretiert
werden kann.`}),e.jsx(n.p,{children:`Wenn aber alles abgehört werden kann, dann sind Passwörter ja überhaupt nicht
sicher, besonders wenn Sie mit jeder Anfrage wieder durch das Netz geschickt
werden.`}),e.jsx(n.p,{children:"Genau das ist ein riesiges Problem. Das aber auf 2 Arten gelöst wird."}),e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:`In den Cookies wird nicht Ihr Passwort gespeichert, sondern ein Schlüssel
den Sie beim einloggen vom Server bekommen.`}),`
`,e.jsxs(n.li,{children:["Das ",e.jsx(n.code,{children:"https"}),`-Protokoll, verschlüsselt den Inhalt der Verbindung. Nur der
Server kann lesen was Sie geschickt haben.`]}),`
`]}),e.jsx("div",{className:"hint",children:e.jsxs(n.p,{children:["Schicken Sie ",e.jsx(n.strong,{children:"niemals"})," ein Passwort über eine ",e.jsx(n.code,{children:"http"})," Verbindung!!!"]})})]}),e.jsxs(i,{title:"Passwörter speichern",children:[e.jsx(n.p,{children:`Damit auf dem Server der Benutzername und das Passwort geprüft werden können,
müssen diese auf dem Server gespeichert werden. Das wird meistens in einer
Datenbank gemacht. Eine Datenbank die viele Benutzernamen und Kennwörter
gespeichert hat, ist ein sehr beliebtes Ziel für Hacker.`}),e.jsx(n.p,{children:`Machen wir ein kurzes Gedankenexperiment. Nehmen Sie an die SBL-Datenbank wird
geknackt. Ein Hacker hätte somit Zugriff auf alle Email-Adressen und
Passwörter. Nun kann ein Hacker ein Programm laufen lassen, das versucht sich
bei bekannten Webseiten (z.B. Github) einzuloggen. Was denken Sie bei wie
vielen das funktionieren würde?`}),e.jsx(n.p,{children:`Denken wir das Experiment weiter. Ihr SBL-Passwort ist auch das Passwort zu
Ihrem Schul-Email-Account. Wenn ein Hacker Zugriff auf Ihr Email hat, können
alle Passwörter einfach geändert werden. Jedenfalls überall wo Sie Ihre
Schul-Email als Login verwenden. Stellen Sie sich vor das passiert mit Ihrer
Hauptemail-Adresse...`}),e.jsx("div",{className:"hint",children:e.jsx(n.p,{children:`Verwenden Sie für Ihre Haupt-Email-Adresse ein einzigartiges und starkes
Passwort, das Sie nirgendwo anders verwenden.`})})]}),e.jsx("h3",{id:"passwoerter-vor-hackern-schuetzen",children:"Passwörter vor Hackern schützen"}),e.jsx(n.p,{children:`Welche Möglichkeiten haben Sie, Ihr Passwort vor Hackern zu schützen? Sie
selber haben leider keine direkte Möglichkeit wie Sie das machen können. Um
Passwörter vergleichen zu können, müssen diese im Klartext oder verschlüsselt
gespeichert werden. Somit ist jedesmal wenn eine Datenbank gehackt wird, auch
das Passwort gehackt. In dem Format spielt es auch keine Rolle wie kompliziert
Ihr Passwort ist, wenn die Datenbank gehackt ist, kann das Passwort ausgelesen
werden.`}),e.jsxs(i,{title:"Hashing von Passwörtern",children:[e.jsxs(n.p,{children:[`Wie Sie oben gesehen haben, ist es entscheidend, eine Datenbank vor Hackern zu
schützen. Dies ist jedoch sehr schwierig, da es durch `,e.jsx(n.em,{children:"soziales"}),` Hacking oft
einfach ist, Zugang zu einer Datenbank zu erhalten. Zudem können alle
Mitarbeitenden mit Datenbankzugriff Ihr Passwort einsehen, was Sie natürlich
vermeiden möchten. Hier kommt das `,e.jsx(n.strong,{children:"Hashing"})," ins Spiel."]}),e.jsx("h4",{id:"hashing-von-passwoertern",children:"Hashing"}),e.jsxs(n.p,{children:["Das ",e.jsx(n.strong,{children:"Hashing"}),` ist eine mathematische Funktion die nicht umkehrbar ist, aber
immer die gleiche Ausgabe hat. Somit ist es ganz einfach das Passwort zu
`,e.jsx(n.strong,{children:"hashen"}),` und das in der Datenbank zu speichern. Wenn nun eine neue Anfrage
kommt, kann man das Passwort `,e.jsx(n.strong,{children:"hashen"}),` und mit dem vergleichen, das man in der
Datenbank gespeichert hat. Die werden nur dann gleich sein, wenn Sie das
gleiche Passwort eingegeben haben. Somit müssen also keine Passwörter direkt
gespeichert werden.`]}),e.jsxs(n.p,{children:["Leider ist auch das kein kompletter Schutz, denn wenn man den ",e.jsx(n.a,{href:"#hashing-von-passwoertern",children:"Hash"}),` kennt, kann
man versuchen das Passwort zu raten.`]})]}),e.jsxs("section",{children:[e.jsx("h3",{id:"die-brute-force-attacke",children:"Die Brute-Force Attacke"}),e.jsxs(n.p,{children:["Von einer ",e.jsx(n.strong,{children:"Brute-Force"}),` Methode spricht man im Hacking, wenn man versucht,
ein Passwort systematisch zu erraten. Dabei werden nicht zufällige, sondern
systematisch alle möglichen Kombinationen ausprobiert, bis eine Übereinstimmung
gefunden wird.`]}),e.jsx(n.p,{children:`Die folgende Tabelle veranschaulicht die Anzahl der möglichen Kombinationen,
die bei einem solchen Angriff durchprobiert werden müssen, sowie die geschätzte
Dauer, die dafür benötigt wird. Dabei gehen wir davon aus, dass ein Computer in
der Lage ist, eine Million Passwörter pro Sekunde zu überprüfen, was für
moderne Computer eine eher konservative Schätzung darstellt. Diese Methode
verdeutlicht die immense Rechenleistung, die erforderlich ist, um Passwörter
durch systematisches Ausprobieren zu knacken, und unterstreicht die Bedeutung
von komplexen und langen Passwörtern, um die Sicherheit zu erhöhen.`}),e.jsxs("table",{className:"pw-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Länge des Passworts"}),e.jsx("th",{children:"Anzahl der Möglichkeiten"}),e.jsx("th",{children:"Geschätzte Zeit (in Tagen)"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"6"}),e.jsxs("td",{children:["69",e.jsx("sup",{children:"6"})," = 107918163081"]}),e.jsx("td",{children:"1"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"7"}),e.jsxs("td",{children:["69",e.jsx("sup",{children:"7"})," = 744282793009"]}),e.jsx("td",{children:"8"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"8"}),e.jsxs("td",{children:["69",e.jsx("sup",{children:"8"})," = 51355566207921"]}),e.jsx("td",{children:"594"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"9"}),e.jsxs("td",{children:["69",e.jsx("sup",{children:"9"})," = 3543546955189079"]}),e.jsx("td",{children:"41013"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"10"}),e.jsxs("td",{children:["69",e.jsx("sup",{children:"10"})," = 244507885346978176"]}),e.jsx("td",{children:"2829952"})]})]})]}),e.jsxs(n.p,{children:[`Wenn wir die Tabelle analysieren, sehen wir das wir mit einer Passwortlänge von
10 Zeichen, schon mal relativ sicher sind, um uns vor einem einzelnen Computer
zu schützen. Wenn wir aber sehr schnelle Computer haben, und das ganze parallel
laufen lassen können, dann ist auch diese Zahl nicht mehr so sicher. Aber lange
Passwörter mit vielen verschiedenen Zeichen, machen es sehr mühsam ein Passwort
zu raten. Leider haben Hacker auch dafür eine Methode gefunden, die `,e.jsx(n.a,{href:"#die-brute-force-attacke",children:e.jsx(n.strong,{children:"Brute-Force"})})," genannt wird."]})]}),e.jsxs(i,{title:"Rainbow-Table",children:[e.jsxs(n.p,{children:[`Die wenigsten von uns verwenden ein langes Passwort das komplett zufällig ist,
denn es ist schwer sich so ein Passwort zu merken, und mühsam so ein Passwort
zu tippen. Daher verwenden Hacker meistens keine zufällige `,e.jsx(n.strong,{children:"Brute-Force"}),`
Attacke, sondern sie verwenden Wortlisten und kombinieren diese mit Zahlen und
Sonderzeichen. Dadurch sinkt die Zahl an Passwörtern die getestet werden müssen
massiv, und die Attacke wird in kürzerer Zeit erfolgreich sein. Ist ein solches
Passwort mal erraten, wird es in einer `,e.jsx(n.strong,{children:"Rainbow-Table"})," gespeichert."]}),e.jsxs(n.h3,{children:[e.jsx("a",{id:"rainbow-table-beispiel"}),"Rainbow-Table Beispiel"]}),e.jsx(n.p,{children:"Die folgende Tabelle zeigt eine Rainbow-Table mit verschiedenen Passwörtern und deren Hashes. Diese Tabelle dient als Beispiel, wie Passwörter in einer Rainbow-Table gespeichert werden können, um die Suche nach einem passenden Passwort zu beschleunigen."}),e.jsxs("table",{className:"rainbow-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Passwort"}),e.jsx("th",{children:"Hash (SHA-256)"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"password123"}),e.jsx("td",{children:"ef92b778bafe771e89245b89ecbcf1a5f1a1f1a1f1a1f1a1f1a1f1a1f1a1f1a1"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"qwerty"}),e.jsx("td",{children:"d8578edf8458ce06fbc5bb76a58c5ca4a58c5ca4a58c5ca4a58c5ca4a58c5ca4"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"letmein"}),e.jsx("td",{children:"5f4dcc3b5aa765d61d8327deb882cf99deb882cf99deb882cf99deb882cf99de"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"123456"}),e.jsx("td",{children:"8d969eef6ecad3c29a3a629280e686cf280e686cf280e686cf280e686cf280e6"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"admin"}),e.jsx("td",{children:"21232f297a57a5a743894a0e4a801fc3a0e4a801fc3a0e4a801fc3a0e4a801fc3"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"welcome"}),e.jsx("td",{children:"5f4dcc3b5aa765d61d8327deb882cf99deb882cf99deb882cf99deb882cf99de"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"monkey"}),e.jsx("td",{children:"d0763edaa9d9bd2a9516280e9044d8859044d8859044d8859044d8859044d885"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"abc123"}),e.jsx("td",{children:"e99a18c428cb38d5f260853678922e03f260853678922e03f260853678922e03"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"123123"}),e.jsx("td",{children:"4297f44b13955235245b2497399d7a93b2497399d7a93b2497399d7a93b24973"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"password1"}),e.jsx("td",{children:"7c6a180b36896a0a8c02787eeafb0e4c8c02787eeafb0e4c8c02787eeafb0e4c"})]})]})]}),e.jsxs(n.p,{children:["Durch das ",e.jsx(n.strong,{children:"Hashing"})," ist es nicht möglich von dem ",e.jsx(n.strong,{children:"Hash"}),`-Wert direkt zum
Passwort zu gelangen. Wenn man es aber einmal umgekehrt gemacht hat, kann man
das Resultat in einer Tabelle speichern. Jetzt ist es möglich den `,e.jsx(n.strong,{children:"Hash"}),`-Wert
in einer solchen Tabelle zu suchen, was sehr schnell geht, und dann hat man ein
bekanntes Passwort ganz schnell geknackt.`]})]}),e.jsxs("section",{children:[e.jsx("h3",{id:"salzen-von-passwoertern",children:"Salzen von Passwörtern"}),e.jsx(n.p,{children:`Bis jetzt war es ein ständiges hin und her zwischen Hackern und Programmieren.
Und die Hacker haben immer eine Möglichkeit gefunden wie man die Passwörter
doch noch knacken kann. Die Programmierer haben aber noch ein Ass im Ärmel.`}),e.jsxs(n.p,{children:["Die ",e.jsx(n.strong,{children:"Rainbow-Tables"}),` funktionieren nur bei geknackten Passwörtern. Das geht
entweder in Einzelfällen oder durch Brute-Force-Attacken. Dann aber nur bei
relativ kurzen Passwörtern. Der Trick ist nun, ein Passwort für einen Benutzer
zu erstellen, das einzigartig ist, sehr lang und nicht in einer
`,e.jsx(n.strong,{children:"Rainbow-Table"}),` gespeichert wurde. Das geht ganz einfach, man kann einfach 12
zufällige Zeichen an das Passwort eines Benutzers anhängen. Dadurch entsteht
ein neues Passwort, das sicher nicht in einer `,e.jsx(n.strong,{children:"Rainbow-Table"}),` gespeichert
ist. Diese 12 Zeichen dürfen auch allen bekannt sein, wir können diese also im
Klartext in der Datenbank speichern. Diesen Vorgang nennt man `,e.jsx(n.strong,{children:"Salzen"}),` von
Passwörtern. Dadurch macht man `,e.jsx(n.strong,{children:"Rainbow-Tables"}),` unbrauchbar und ein Hacker
muss zurück zum `,e.jsx(n.strong,{children:"Brute-Force"}),`-Angriff. Wenn für alle Benutzer ein eigenes
Salz verwendet wird, muss auch pro Passwort, das man knacken möchte, eine
`,e.jsx(n.strong,{children:"Brute-Force"}),`-Attacke gemacht werden. Ihre Passwörter können also sicher
abgespeichert werden, auch wenn eine Datenbank geknackt wird.`]})]}),e.jsxs(i,{title:"Zusammenfassung",children:[e.jsx(n.p,{children:`Hier finden Sie eine Zusammenfassung zur ganzen Seite. Das ganze wurde von
einer KI generiert, der Inhalt scheint jedoch korrekt zu sein. Die Unterhaltung
kann leider nur in Englisch erstellt werden. Wenn Sie Fragen zur Sprache oder
zum Inhalt haben, dann melden Sie sich direkt in der Lektion.`}),e.jsx(t,{src:"./assets/audio/podcast-passwords.mp3"})]})]})}function l(s={}){const{wrapper:n}=s.components||{};return n?e.jsx(n,{...s,children:e.jsx(r,{...s})}):r(s)}export{l as default};
